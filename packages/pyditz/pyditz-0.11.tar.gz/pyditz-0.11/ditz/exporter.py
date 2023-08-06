"""
Common exporter stuff.
"""

import os
import shutil

from collections import defaultdict

from .plugin import Plugin, get_plugin, get_plugins
from .config import config, config_path, ConfigSection
from .util import make_directory, timespan
from .files import write_file
from .logger import log

from . import flags, __version__, __url__

#: Mapping of exporter names to their classes.
exporters = None

#: Mapping of suffixes to archive formats.
archive_suffix = {".tar": "tar",
                  ".tar.gz": "gztar",
                  ".tgz": "gztar",
                  ".tar.bz2": "bztar",
                  ".zip": "zip"}


def get_exporter(name):
    "Get an exporter class given its name."

    return get_plugin(Exporter, name)


def get_exporters():
    "Yield all available exporters and their descriptions."

    for cls in get_plugins(Exporter):
        yield cls.name, cls.description


class Exporter(Plugin):
    """
    Base class for database exporters.

    Args:
        database (DitzDB): Database object.
    """

    category = "exporter"

    #: Name of the exporter.  This is the argument given to the ``export``
    #: command.
    name = None

    #: One-line description.  This gets printed when you list the
    #: available export formats.
    description = "undocumented"

    #: Package name.  If exporter is being installed via setuptools' plugin
    #: system, this should be set so that static and template files can be
    #: found in the package.
    package = None

    #: Exporter file suffix.  This is usually the same as the exporter name
    #: string.
    suffix = None

    #: If the exporter uses static files, this is the subdirectory of
    #: ``static`` to find them.  Usually the same as the ``name``
    #: attribute.
    static_dir = None

    #: If the exporter uses templates, this is the subdirectory of
    #: ``templates`` to find them.  Usually the same as the ``name``
    #: attribute.
    template_dir = None

    def __init__(self, database):
        #: The issue database being exported.
        self.db = database

        #: Configuration variables.
        self.config = ConfigSection(self.name, 'export', config)

        #: Mapping of template names to loaded templates.
        self.templates = {}

        #: Template environment.
        self.env = None

        # Build search paths to static and template files.
        self.paths = defaultdict(list)

        for name, dirname in (("static", self.static_dir),
                              ("templates", self.template_dir)):
            if dirname is not None:
                for dirpath in (self.db.issuedir, config_path()):
                    path = os.path.join(dirpath, name, dirname)
                    self.paths[name].append(path)

        # Set up template environment if required.
        if self.template_dir is not None:
            from jinja2 import (Environment, ChoiceLoader,
                                PackageLoader, FileSystemLoader)

            paths = self.paths['templates']
            templates = os.path.join('templates', self.template_dir)
            package = self.package or __name__

            loaders = [FileSystemLoader(paths),
                       PackageLoader(package, templates)]

            self.env = Environment(loader=ChoiceLoader(loaders),
                                   trim_blocks=True, lstrip_blocks=True)

        # Add common filters.
        @self.add_filter
        def issues(item):
            attr = item.__class__.__name__.lower()
            return [issue for issue in self.db.issues
                    if getattr(issue, attr) == item.name]

        rmap = {rel.name: rel for rel in self.db.project.releases}
        cmap = {comp.name: comp for comp in self.db.project.components}
        relmap = self.db.relation_mapping()

        @self.add_filter
        def release(issue):
            return rmap.get(issue.release, None)

        @self.add_filter
        def component(issue):
            return cmap[issue.component]

        @self.add_filter
        def issuetype(issue):
            return flags.TYPE[issue.type]

        @self.add_filter
        def inprogress(issue):
            time = issue.progress_time
            return timespan(time) if time > 0 else ""

        @self.add_filter
        def related(issue):
            return list(sorted(relmap[issue]))

        @self.add_filter
        def dateformat(value, format="%Y-%m-%d"):
            return value.strftime(format)

        @self.add_filter
        def timeformat(value, format="%Y-%m-%d %H:%M"):
            return value.strftime(format)

        self.setup()

    def export(self, dirname):
        """
        Export the issue database to the given directory.

        Args:
            dirname (str): Directory to write files into.
        """

        # If output directory looks like the name of an archive, deduce
        # format and adjust the name.
        archive = None
        for suffix in archive_suffix:
            if dirname.endswith(suffix):
                dirname = dirname.replace(suffix, "")
                archive = archive_suffix[suffix]

        # Create output directory.
        make_directory(dirname, archive is not None)

        # Preload all the templates if required.
        if self.template_dir is not None:
            for name in self.env.list_templates():
                self.templates[name] = template = self.env.get_template(name)
                log.info("loaded template from %s" % template.filename)

        # Write the exported files.
        self.write(dirname)

        # Copy static files, if any.  First those in the reversed search
        # path, so that earlier paths will override later ones.  Then copy
        # any files from the module that don't yet exist.
        if self.static_dir is not None:
            import pkg_resources as pkg

            for path in reversed(self.paths['static']):
                if os.path.exists(path):
                    for name in os.listdir(path):   # pragma: no cover
                        filename = os.path.join(path, name)
                        shutil.copy(filename, dirname)
                        log.info("copied %s to %s" % (filename, dirname))

            static = os.path.join('static', self.static_dir)
            package = self.package or __name__

            if pkg.resource_exists(package, static):
                for name in pkg.resource_listdir(package, static):
                    src = os.path.join(static, name)
                    dst = os.path.join(dirname, name)
                    if not os.path.exists(dst):
                        filename = pkg.resource_filename(package, src)
                        shutil.copy(filename, dirname)
                        log.info("copied %s to %s" % (filename, dirname))

        # Create archive and remove directory if required.
        if archive:
            shutil.make_archive(dirname, archive, root_dir=".",
                                base_dir=dirname, logger=log, verbose=True)
            shutil.rmtree(dirname)

    def setup(self):
        """
        Do exporter-specific setup.

        By default, this does nothing.
        """

    def add_filter(self, func, name=None):
        """
        Add a custom Jinja filter.

        This returns the original function, so the method can be used as a
        decorator.

        Args:
            func (callable): Filter function.
            name (str, optional): Name to use in templates (same as
                function name, if None).

        Returns:
            func: original function
        """

        if self.env:
            self.env.filters[name or func.__name__] = func

        return func

    def write(self, dirname):
        """
        Write exported files to the given directory.

        This method must be overridden.  If using templates, it should call
        the :func:`render` method.

        Args:
            dirname (str): Directory to write files into.
        """

        raise NotImplementedError

    def render(self, dirname, templatefile, targetfile=None, **kw):
        """
        Render a single file from a template.

        Args:
            dirname (str): Directory to write file into.
            templatefile (str): Jinja template to use.
            targetfile (str, optional): Filename to write (same as
                 *templatefile*, if None).
            kw (dict): Template parameters.
        """

        # Get template.
        template = self.templates[templatefile]

        # Render template.
        kw.update(version=__version__, url=__url__)
        text = template.render(**kw)

        # Write it to file.
        path = os.path.join(dirname, targetfile or templatefile)
        write_file(path, text)
        log.info("wrote '%s'", path)

    def export_filename(self, item):
        """
        Return a unique export filename for a Ditz item.

        The filename is based on the item's ID (if it's an issue) or its
        name.  Each filename has the exporter suffix appended to it.

        Args:
            item (DitzObject): Ditz item.

        Return:
            Filename string.
        """

        clsname = item.__class__.__name__.lower()
        name = getattr(item, "id", None) or getattr(item, "name")
        return "%s-%s.%s" % (clsname, name, self.suffix)
