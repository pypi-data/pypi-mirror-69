"""
Utility functions.
"""

from __future__ import print_function

import os
import re
import sys
import socket
import six

from datetime import datetime
from six.moves import zip_longest

from .config import config
from .term import get_terminal_size
from .logger import log


def age(date, ago=True):
    "Return a human-readable in-the-past time string given a date."
    return timespan((datetime.now() - date).total_seconds(), ago)


def timespan(counter, ago=False):
    "Return approximate timespan for a number of seconds."

    counter = int(counter)
    if counter == 0:
        return "just now"

    for name, count in (("second", 60), ("minute", 60), ("hour", 24),
                        ("day", 7), ("week", 4), ("month", 12),
                        ("year", 0)):
        unit = name
        if count > 0 and counter >= count * 2:
            counter /= count
        else:
            break

    return "%d %s%s%s" % (counter, unit,
                          "s" if counter > 1 else "",
                          " ago" if ago else "")


def extract_username(email):
    "Return a short user name given email text."

    if '@' not in email:
        return email

    m = re.search('([A-Za-z0-9_.]+)@', email)
    if m:
        return m.group(1)

    return email


def default_name():
    "Return the default user name."

    name = ui_env_value('name', ["DITZUSER", "USER", "USERNAME"])
    if name:
        return name

    return "ditzuser"


def default_email():
    "Return the default email address."

    email = ui_env_value('email', ["DITZEMAIL", "EMAIL"])
    if email:
        return email

    return default_name() + '@' + hostname()


def hostname():
    "Return the host name."

    name = ui_env_value('hostname', ["DITZHOST", "HOSTNAME", "COMPUTERNAME"])
    if name:
        return name

    try:
        return socket.gethostname()
    except socket.error:
        return "UNKNOWN"


def editor():
    "Return a text editor."

    program = ui_env_value('editor', ["DITZEDITOR", "EDITOR", "VISUAL"])
    if program:
        return program

    if sys.platform.startswith('linux'):
        return 'vi'

    return None


def run_editor(program, filename):
    "Run editor program on a file."

    status = os.system('%s "%s"' % (program, filename))
    if status != 0:
        raise DitzError("can't run editor '%s' (status: %d)"
                        % (program, status))


def terminal_size():
    "Return terminal size, or zero if stdout is not a tty."

    if sys.stdout.isatty():
        return get_terminal_size()
    else:
        return (0, 0)


def print_columns(items, linelen=70, spacing=2):
    "Print a number of items in column format."

    maxlen = max(len(text) for text in items)
    columns = max(linelen // (maxlen + spacing), 1)
    padding = " " * spacing

    count = 0
    while count < len(items):
        print(items[count].ljust(maxlen) + padding, end=' ')
        count += 1
        if count % columns == 0:
            print()

    if count % columns != 0:
        print()


def make_directory(path, force=False):
    "Create a directory if it doesn't exist."

    if not os.path.exists(path):
        try:
            os.makedirs(path)
        except OSError as msg:
            raise DitzError(msg)
    elif force:
        raise DitzError("directory '%s' already exists" % path)


def check_value(name, value, choices):
    "Give an error if a value isn't in a set of choices."

    if value not in choices:
        raise ValueError("unknown %s: %s (one of %s expected)"
                         % (name, value, ", ".join(list(choices.keys()))))


def matching_issue_names(text, issuenames, separator='-'):
    "Return subset of issue names matching the given text."

    # Strip any separators from text.
    text = text.replace(separator, '')

    # Get set of valid component names (which may include digits).
    def split_issue(name):
        lastdash = name.rindex(separator)
        comp, num = name[:lastdash], name[lastdash + 1:]
        comp = comp.replace(separator, '')
        return comp, num

    compnames = {split_issue(name)[0] for name in issuenames}

    # Find longest component match at start of text.
    def common_prefix(s1, s2):
        for idx, (c1, c2) in enumerate(zip_longest(s1, s2)):
            if c1 != c2:
                return s1[:idx]

        return s1

    strings = [common_prefix(text, comp) for comp in compnames]
    strings.sort(key=lambda s: len(s))
    longest = strings[-1]

    if longest:
        # Match -- remove it from start of text.
        text = text[len(longest):]
        matchcomp = longest
    else:
        # No match -- any non-numeric chars will fail to match.
        m = re.search(r'[A-Za-z]+', text)
        matchcomp = m.group() if m else None

    # Get number match from remaining text.
    m = re.search(r'[0-9]+', text)
    matchnum = m.group() if m else None

    # Build filter function.
    def match(name):
        comp, num = split_issue(name)

        if matchcomp and not comp.startswith(matchcomp):
            return False

        if matchnum and num != matchnum:
            return False

        return True

    # Filter matching names.
    return list(filter(match, issuenames))


def ui_env_value(option, envvars=None):
    "Return a setting from config [ui] section or environment variables."

    if option:
        value = config.get('ui', option)
        if value:
            return value

    for var in envvars or []:
        if var in os.environ:
            return os.environ[var]

    return None


def html_markup_function(tag=None):
    "Return a HTML text markup function given a markup tag name."

    def func(text):
        paras = text.strip().split("\n\n")
        paras = ["<p>%s</p>" % p for p in paras]
        return "\n".join(paras)

    if not tag:
        return func

    try:
        import markups

    except ImportError:
        log.info("markups module is not available")

    else:
        cls = markups.find_markup_class_by_name(tag)

        if not cls:
            log.info("markup '%s' is not known", tag)
        elif not cls.available():
            log.info("markup '%s' is not available", tag)
        else:
            markup = cls()

            def func(text):
                return markup.convert(text).get_document_body()

    return func


def to_unicode(obj, encoding='utf-8'):
    """
    Convert an object to Unicode.

    See http://farmdev.com/talks/unicode
    """

    if six.PY2:
        if isinstance(obj, basestring):   # noqa
            if not isinstance(obj, unicode): # noqa
                obj = unicode(obj, encoding) # noqa

    return obj


def to_dict(obj):
    "Convert object to a dict, recursively."

    if hasattr(obj, "__dict__"):
        obj = {attr: to_dict(value) for attr, value in obj.__dict__.items()}
    elif isinstance(obj, list):
        obj = [to_dict(item) for item in obj]

    return obj


def set_data(obj, data):
    "Set object attributes from data, recursively."

    if hasattr(obj, "__dict__"):
        for attr, value in data.items():
            subobj = getattr(obj, attr, None)
            if not subobj or not set_data(subobj, value):
                obj.__dict__[attr] = value

        return True

    elif isinstance(obj, list):
        for idx, value in enumerate(data):
            subobj = obj[idx]
            if not set_data(subobj, value):
                obj[idx] = value

        return True

    return False


def errorlines(errdict, sep=".", parent=None):
    "Yield error lines from a validator error dictionary."

    for elt, errors in sorted(errdict.items()):
        if parent:
            path = parent + sep + str(elt)
        else:
            path = str(elt)

        for value in errors:
            if isinstance(value, dict):
                for line in errorlines(value, sep, path):
                    yield line
            else:
                yield "%s: %s" % (path, value)


class DitzError(Exception):
    "A generic Ditz error."
