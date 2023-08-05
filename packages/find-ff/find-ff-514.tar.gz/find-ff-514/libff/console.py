# -----------------------------------------------------------------------
#
# ff - a tool to search the filesystem
# Copyright (C) 2020 Lars Gustäbel <lars@gustaebel.de>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
# -----------------------------------------------------------------------

# pylint:disable=too-few-public-methods

import os
import sys
import json
import collections

from . import BaseClass

Field = collections.namedtuple("Field", "attribute width modifier")
String = collections.namedtuple("String", "value length")


class BaseConsole(BaseClass):
    """The base class for all Console classes.
    """

    def __init__(self, context):
        super().__init__(context)

        self.fields = self.args.output

    def process(self, entry):
        """Create a record from the Entry object by fetching all required
           attribute values and print the record to standard output.
        """
        raise NotImplementedError


class JsonlConsole(BaseConsole):
    """Print entries as newline-delimited JSON objects.
    """

    def __init__(self, context):
        super().__init__(context)

        if __debug__ and self.args.profile:
            # Suppress output when profiling.
            self.print_record = lambda record: None
        else:
            self.print_record = self._print_record

    def create_record(self, entry):
        """Create a record from the Entry object that can be used as as JSON
           output.
        """
        record = {}
        for field in self.fields:
            try:
                value, type_cls = self.registry.get_attribute_and_type(entry, field.attribute)
            except KeyError:
                value = None
            else:
                if field.modifier == "h":
                    value = type_cls.output(self.args, field.modifier, value)

            key = str(field.attribute)
            if field.attribute.plugin == "file":
                key = key[5:]

            record[key] = value

        return record

    def process(self, entry):
        """Print a JSON record for the Entry object.
        """
        self.print_record(self.create_record(entry))

    def _print_record(self, record):
        """Dump a newline delimited JSON object to standard output.
        """
        json.dump(record, sys.stdout, separators=",:")
        print()


class JsonConsole(JsonlConsole):
    """Print all entries as one big JSON object.
    """

    def __init__(self, context):
        super().__init__(context)

        print("[", end="")
        self.print_comma = False

    def _print_record(self, record):
        """Dump a newline delimited JSON object to standard output.
        """
        if self.print_comma:
            print(",", end="")
        json.dump(record, sys.stdout, separators=",:")
        self.print_comma = True

    def __del__(self):
        print("]")


class Console(BaseConsole):
    """Print entries as separator delimited records of fields.
    """

    encoding = sys.getfilesystemencoding()

    def __init__(self, context):
        super().__init__(context)
        self.field_separator = self.args.separator.replace("\\t", "\t").replace("\\n", "\n")

        if __debug__ and self.args.profile:
            # Suppress output when profiling.
            self.write_line = lambda line: None
        else:
            self.write_line = self._write_line

    def render_field(self, entry, field):
        """Render a field for output, i.e. get the value from the plugin and
           convert it to an individual form using its Type. If required turn it
           into a human-readable form.
        """
        if field.attribute.plugin == "file" and field.attribute.name in ("dir", "name", "path"):
            if field.attribute.name == "dir":
                return self.render_directory(entry.dir)
            elif field.attribute.name == "name":
                return self.render_name(entry)
            else:
                if field.modifier == "h":
                    return self.render_path(entry, with_link=True)
                else:
                    return self.render_path(entry)

        else:
            try:
                value, type_cls = self.registry.get_attribute_and_type(entry, field.attribute)
            except KeyError:
                string = ""
            else:
                string = type_cls.output(self.args, field.modifier, value)

            return String(string, len(string))

    def render_path(self, entry, with_link=False):
        """Render a 'path' field.
        """
        if entry.is_dir():
            return self.render_directory(entry.path)

        name = self.render_name(entry)

        if entry.dir:
            dirname = self.render_directory(entry.dir + os.sep)
            path = String(dirname.value + name.value, dirname.length + name.length)
        else:
            path = name

        if entry.is_symlink() and with_link:
            return String(path.value + " -> " + entry.link, path.length + 4 + len(entry.link))
        else:
            return path

    def render_name(self, entry):
        """Render a 'name' field.
        """
        if entry.is_symlink() and not self.args.follow_symlinks:
            if entry.broken:
                return self.render_orphan(entry.name)
            else:
                return self.render_symlink(entry.name)

        elif entry.is_executable():
            return self.render_executable(entry.name)

        else:
            return self.render_file(entry.ext, entry.name)

    def render_file(self, ext, name):
        """Render the name part of a regular file.
        """
        # pylint:disable=unused-argument
        return String(name, len(name))

    def render_directory(self, name):
        """Render the directory part of a path name.
        """
        return String(name, len(name))

    def render_executable(self, name):
        """Render the name part of an executable regular file.
        """
        return String(name, len(name))

    def render_symlink(self, name):
        """Render the name part of a symbolic link.
        """
        return String(name, len(name))

    def render_orphan(self, name):
        """Render the name part of a missing symlink target.
        """
        return String(name, len(name))

    def pad_string(self, string, width):
        """Pad a string with spaces. string.length is the net length of
           string.value (without ansi escape sequences).
        """
        fill = max(0, abs(width) - string.length)
        if width < 0:
            return string.value + " " * fill
        else:
            return " " * fill + string.value

    def format_field(self, entry, field):
        """Format a field for output, i.e. render colors if required, pad with
           spaces, etc.
        """
        string = self.render_field(entry, field)

        if field.width is not None:
            return self.pad_string(string, int(field.width))
        else:
            return string.value

    def process(self, entry):
        """Print a separator delimited list of fields for an Entry object.
        """
        output = []
        for field in self.fields:
            output.append(self.format_field(entry, field))

        self.write_line(self.field_separator.join(output))

    def _write_line(self, line):
        """Print a line of output handling encoding errors.
        """
        try:
            print(line, end=self.args.newline)
        except UnicodeEncodeError:
            print(line.encode(self.encoding, "backslashreplace").decode(self.encoding),
                    end=self.args.newline)


class ColorConsole(Console):
    """Provide colorful console output using ansi escape sequences. The rules
       are are read from the LS_COLORS environment variable. For more info see
       man dir_colors(5).
    """

    def __init__(self, context):
        super().__init__(context)

        self.extensions = {}
        rules = {}

        def esc(seq):
            return f"\x1b[{seq}m" if seq else ""

        colors = os.environ.get("LS_COLORS", "")
        if not colors:
            self.context.warning("You chose console colour output "\
                    "but the LS_COLORS environment variable is not set")
            return

        # The content of LS_COLORS is a pathsep separated list of key=value
        # pairs. File type rules consist of two characters, extensions have the
        # form '*.ext'.
        for part in colors.split(os.pathsep):
            try:
                key, value = part.split("=", 1)
            except ValueError:
                continue
            else:
                if len(key) == 2 and key.isalpha():
                    rules[key] = value
                else:
                    ext = os.path.splitext(key)[1][1:]
                    if ext:
                        self.extensions[ext] = esc(value)

        self.reset = esc(rules.get("rs", "0"))

        # Prepare escape sequences for directories, executables, symlinks and
        # orphans. There are some more we might add in the future.
        self.colors = {}
        for rule in ("di", "ex", "ln", "or"):
            if rule in rules:
                self.colors[rule] = (esc(rules[rule]), self.reset)
            else:
                self.colors[rule] = None

    def render_file(self, ext, name):
        if ext in self.extensions:
            return String(f"{self.extensions[ext]}{name}{self.reset}", len(name))
        else:
            return String(name, len(name))

    def render_directory(self, name):
        return self.colorize("di", name)

    def render_executable(self, name):
        return self.colorize("ex", name)

    def render_symlink(self, name):
        return self.colorize("ln", name)

    def render_orphan(self, name):
        return self.colorize("or", name)

    def colorize(self, rule, text):
        """Return a String object with text colorized according to rule.
        """
        pair = self.colors[rule]
        if pair is None:
            return String(text, len(text))
        else:
            return String(f"{pair[0]}{text}{pair[1]}", len(text))
