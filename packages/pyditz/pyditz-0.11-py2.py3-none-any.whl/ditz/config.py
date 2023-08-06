"""
User configuration file.
"""

import os
import sys
import re
import warnings

from six.moves import configparser as conf

from .logger import log


class DitzConfig(conf.ConfigParser):
    def __init__(self):
        conf.ConfigParser.__init__(self)
        defaults = get_modulefile("config.cfg")

        with open(defaults) as fp:
            if hasattr(self, "read_file"):
                self.read_file(fp)
            else:
                self.readfp(fp)

    def write_file(self, path):
        """Write config data to file."""

        with open(path, "w") as fp:
            fp.write("# pyditz configuration file.\n\n")
            self.write(fp)


class Config(object):
    def __init__(self):
        self.path = get_userconfig()
        self.parser = None

    def set_file(self, path):
        self.path = path

    def set_option(self, setting):
        m = re.match(r'(\w+)\.(\w+)=(.*)', setting)
        if m:
            section, option, value = m.groups()
        else:
            raise ValueError("'%s': expected 'section.option=value'"
                             % setting)

        try:
            self.set(section, option, value)
        except conf.NoSectionError:
            raise ValueError("'%s': no such config section" % section)

    def __getattr__(self, attr):
        if not self.parser:
            self.parser = DitzConfig()
            log.info("reading %s" % self.path)
            self.parser.read(self.path)

        return getattr(self.parser, attr)


class ConfigSection(object):
    """
    Wrapper to the config file which looks up a particular section.
    """

    def __init__(self, name, section, config):
        self.name = name
        self.config = config
        self.section = section

    def add(self, name, default):
        """
        Add a named configuration value.
        """

        name = self.option(name)
        if not self.config.has_option(self.section, name):
            self.config.set(self.section, name, str(default))

    def get(self, name):
        """
        Get the named configuration value as a string.
        """

        return self.config.get(self.section, self.option(name))

    def getint(self, name):
        """
        Get the named configuration value as an integer.
        """

        return self.config.getint(self.section, self.option(name))

    def getfloat(self, name):
        """
        Get the named configuration value as a float.
        """

        return self.config.getfloat(self.section, self.option(name))

    def getboolean(self, name):
        """
        Get the named configuration value as a boolean.
        """

        return self.config.getboolean(self.section, self.option(name))

    def option(self, name):
        return self.name + "_" + name


def config_path(filename=None):
    "Return a pathname in the user's config directory."

    parts = [os.path.expanduser("~"), ".ditz"]

    if filename:
        parts.append(filename)

    return os.path.join(*parts)


def get_userconfig():
    "Return pathname of user config file."

    # Warn about old ~/.ditzrc if it exists.
    homedir = os.path.expanduser("~")
    path = os.path.join(homedir, ".ditzrc")
    if os.path.exists(path):
        warn("Move deprecated ~/.ditzrc file to ~/.ditz/ditz.cfg")
        return path

    # Try standard config file.
    return config_path("ditz.cfg")


def get_modulefile(name):
    "Return pathname of a file in the Ditz module directory."

    if getattr(sys, 'frozen', False):
        moduledir = sys._MEIPASS
    else:
        thisdir = os.path.dirname(__file__)
        moduledir = os.path.abspath(thisdir)

    return os.path.join(moduledir, name)


def warn(msg):
    "Warn about obsolete configuration."
    warnings.warn(msg, UserWarning, stacklevel=2)


# Ditz user config settings.
config = Config()
