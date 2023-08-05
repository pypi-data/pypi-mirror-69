import tempfile
import subprocess
from pathlib import Path

try:
    import papermill as pm
except ImportError:
    pm = None

try:
    import jupytext
except ImportError:
    jupytext = None

try:
    import nbformat
except ImportError:
    nbformat = None

try:
    import nbconvert
except ImportError:
    nbconvert = None


from ploomber.exceptions import TaskBuildError
from ploomber.sources import NotebookSource
from ploomber.sources.NotebookSource import _cleanup_rendered_nb
from ploomber.products import File, MetaProduct
from ploomber.tasks.Task import Task
from ploomber.util import requires


def _get_exporter(nbconvert_exporter_name, extension):
    if nbconvert_exporter_name is not None:
        exporter = nbconvert.get_exporter(nbconvert_exporter_name)
    else:
        if extension == '.ipynb':
            return None
        else:
            try:
                exporter = nbconvert.get_exporter(extension.replace('.', ''))
            except ValueError:
                raise ValueError('Could not determine nbconvert exporter '
                                 'either specify in the path extension '
                                 'or pass a valid exporter name in '
                                 'the NotebookRunner constructor, '
                                 'valid exporters are: {}'
                                 .format(nbconvert.get_export_names()))

    return exporter


def _from_ipynb(path_to_nb, exporter):

    path = Path(path_to_nb)

    nb = nbformat.reads(path.read_text(), as_version=nbformat.NO_CONVERT)
    content, _ = nbconvert.export(exporter, nb,
                                  exclude_input=True)

    path.write_text(content)

    return content


class NotebookRunner(Task):
    """
    Run a Jupyter notebook using papermill. Support several input formats
    via jupytext and several output formats via nbconvert

    Parameters
    ----------
    source: str or pathlib.Path
        Notebook source, if str, the content is interpreted as the actual
        notebook, if pathlib.Path, the content of the file is loaded. When
        loading from a str, ext_in must be passed
    product: ploomber.File
        The output file
    dag: ploomber.DAG
        A DAG to add this task to
    name: str, optional
        A str to indentify this task. Should not already exist in the dag
    params: dict, optional
        Notebook parameters. This are passed as the "parameters" argument
        to the papermill.execute_notebook function, by default, "product"
        and "upstream" are included
    papermill_params : dict, optional
        Other parameters passed to papermill.execute_notebook, defaults to None
    kernelspec_name: str, optional
        Kernelspec name to use, if the notebook already includes kernelspec
        data (in metadata.kernelspec), this is ignored, otherwise, the kernel
        is looked up using the jupyter_client.kernelspec.get_kernel_spec
        function
    nbconvert_exporter_name: str, optional
        Once the notebook is run, this parameter controls whether to export
        the notebook to a different parameter using the nbconvert package,
        it is not needed unless the extension cannot be used to infer the
        final output format, in which case the nbconvert.get_exporter is used
    ext_in: str, optional
        The input extension format. If source is a pathlib.Path, the extension
        from there is used, if loaded from a str, this parameter is needed
    nb_product_key: str, optional
        If the notebook is expected to generate other products, pass the key
        to identify the output notebook (i.e. if product is a list with 3
        ploomber.File, pass the index pointing to the notebook path). If the
        only output is the notebook itself, this parameter is not needed
    static_analysis : bool
        Run static analysis after rendering.
        This requires a cell with the tag 'parameters' to exist in the
        notebook, such cell should have at least a "product = None" variable
        declared. Passed and declared parameters are compared (they make
        notebooks behave more like "functions"), pyflakes is also run to
        detect errors before executing the notebook. If the task has
        upstream dependencies an upstream parameter should also be declared
        "upstream = None"
    """
    PRODUCT_CLASSES_ALLOWED = (File, )

    @requires(['jupyter', 'papermill'], 'NotebookRunner')
    def __init__(self, source, product, dag, name=None, params=None,
                 papermill_params=None, kernelspec_name=None,
                 nbconvert_exporter_name=None, ext_in=None,
                 nb_product_key='nb', static_analysis=False):
        self.papermill_params = papermill_params or {}
        self.kernelspec_name = kernelspec_name
        self.nbconvert_exporter_name = nbconvert_exporter_name
        self.ext_in = ext_in
        self.nb_product_key = nb_product_key
        self.static_analysis = static_analysis
        super().__init__(source, product, dag, name, params)

        if isinstance(self.product, MetaProduct):
            if self.product.get(nb_product_key) is None:
                raise KeyError('Key "{}" does not exist in product: {}. '
                               'nb_product_key should be an existing '
                               'key to know where to save the output '
                               'notebook'.format(nb_product_key,
                                                 str(self.product)))

        if isinstance(self.product, MetaProduct):
            ext_out = self.product[self.nb_product_key].suffix
        else:
            ext_out = self.product.suffix

        self._exporter = _get_exporter(nbconvert_exporter_name, ext_out)

    def _init_source(self, source, kwargs):
        return NotebookSource(source,
                              ext_in=self.ext_in,
                              kernelspec_name=self.kernelspec_name,
                              static_analysis=self.static_analysis,
                              **kwargs)

    def develop(self):
        """
        Opens the notebook (unmodified and in its original location)
        """
        # TODO: put debug() contents here and make debug() start an actual
        # debugging sessions (with the parameters injected)
        if self.source.loc is None:
            raise ValueError('Can only use develop in notebooks loaded '
                             'from files, not from str')

        try:
            subprocess.call(['jupyter', 'notebook', self.source.loc])
        except KeyboardInterrupt:
            print('Jupyter notebook server closed...')

    def debug(self):
        """
        Opens the rendered notebook (with a new cell that includes injected
        parameters and in a temporary location) with debug settings turned on.
        Changes to this notebook can be exported to the original notebook
        (the injected parameters cell and cells that turn debugging on are
        excluded).
        """
        if self.source.loc is None:
            raise ValueError('Can only use develop in notebooks loaded '
                             'from files, not from str')

        # load original notebook content
        content_original = Path(self.source.loc_rendered).read_text()

        # add debug cells
        nb = nbformat.reads(content_original, as_version=nbformat.NO_CONVERT)
        nbformat_v = nbformat.versions[nb.nbformat]

        source = """
# Debugging settings (this cell will be removed before saving)
# change the current working directory to the one when .debug() happen
# to make relative paths work
from os import chdir
chdir("{}")
""".format(Path('.').resolve())

        cell = nbformat_v.new_code_cell(source,
                                        metadata={'tags':
                                                  ['debugging-settings']})
        nb.cells.insert(0, cell)

        # save modified notebook
        _, tmp = tempfile.mkstemp(suffix='.ipynb')
        content = nbformat.writes(nb, version=nbformat.NO_CONVERT)
        Path(tmp).write_text(content)

        try:
            # open notebook with injected debugging cell
            subprocess.call(['jupyter', 'notebook', tmp])
        except KeyboardInterrupt:
            print('Jupyter notebook server closed...')

        # read tmp file again, to see if the user made any changes
        content_new = Path(tmp).read_text()

        # maybe exclude changes in tmp cells?
        if content == content_new:
            print('No changes found...')
        else:
            save = input('Notebook changed, do you want to save changes '
                         'in the original location? (injected parameters '
                         'and debugging cells will be removed before '
                         'saving). Enter "no" to skip saving changes, '
                         'anything else will be interpreted as "yes": ')

            # save changes
            if save != 'no':
                nb = nbformat.reads(content_new,
                                    as_version=nbformat.NO_CONVERT)

                # remove injected-parameters and debugging-settings cells if
                # they exist
                _cleanup_rendered_nb(nb)

                # write back in the same format and original location
                ext_source = Path(self.source.loc).suffix[1:]
                print('Saving notebook to: ', self.source.loc)
                jupytext.write(nb, self.source.loc, fmt=ext_source)
            else:
                print('Not saving changes...')

        # remove tmp file
        Path(tmp).unlink()

    def run(self):
        if isinstance(self.product, MetaProduct):
            path_to_out = Path(str(self.product[self.nb_product_key]))
        else:
            path_to_out = Path(str(self.product))

        # we will run the notebook with this extension, regardless of the
        # user's choice, if any error happens, this will allow them to debug
        # we will change the extension after the notebook runs successfully
        path_to_out_nb = path_to_out.with_suffix('.ipynb')

        try:
            # no need to pass parameters, they are already there
            pm.execute_notebook(self.source.loc_rendered, str(path_to_out_nb),
                                **self.papermill_params)
        except Exception as e:
            raise TaskBuildError('An error ocurred when calling'
                                 ' papermil.execute_notebook, partially'
                                 ' executed notebook with traceback '
                                 'available at {}'
                                 .format(str(path_to_out_nb))) from e

        # if output format other than ipynb, convert using nbconvert
        # and overwrite
        if self._exporter is not None:
            path_to_out_nb.rename(path_to_out)
            _from_ipynb(path_to_out, self._exporter)
