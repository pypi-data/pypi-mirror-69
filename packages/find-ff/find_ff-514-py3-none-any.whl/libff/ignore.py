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

import os
import re
import collections

GroupKey = collections.namedtuple("GroupKey", "include anchored directory")


class Glob:
    """A single gitignore-style pattern.
    """

    def __init__(self, pattern):
        self.pattern = pattern

        self.regex_pattern, self.include, self.anchored, self.directory = \
                self.translate(self.pattern)
        self._regex = None

    @property
    def regex(self):
        """The compiled regular expression.
        """
        if self._regex is None:
            self._regex = re.compile(self.regex_pattern)
        return self._regex

    @staticmethod
    def translate(pattern):
        """Translate the pattern to a regular expression.
        """
        # pylint:disable=too-many-branches
        if pattern.startswith(r"\#"):
            pattern = pattern[1:]

        # Shall the match be inverted?
        if pattern.startswith("!"):
            include = False
            pattern = pattern[1:]
        else:
            include = True

        if pattern.startswith(r"\!"):
            pattern = pattern[1:]

        # Is there a slash at the beginning or in the middle of the pattern?
        # Then the whole path relative to the directory of the ignore file is
        # matched against.
        try:
            anchored = pattern.index("/") < len(pattern) - 1
        except ValueError:
            anchored = False

        if anchored:
            pattern = pattern.lstrip("/")

        # Shall the patten match only directories?
        if pattern.endswith("/"):
            directory = True
            pattern = pattern[:-1]
        else:
            directory = False

        # Translate the wildcards to regular expression syntax.
        parts = []
        for part in re.split(r"(/\*\*/|\*\*/|/\*\*|\*|\?|\[![^\]]+\]|\[[^\]]+\])", pattern):
            if part == "/**/":
                part = "(?:/|/.+/)"
            elif part == "**/":
                part = "(?:.+/)?"
            elif part == "/**":
                part = "(?:/.+)?"
            elif part == "*":
                part = "[^/]*"
            elif part == "?":
                part = "[^/]"
            elif part.startswith("[!"):
                part = f"[^{part[2:-1]}]"
            elif part.startswith("["):
                part = f"[{part[1:-1]}]"
            else:
                part = re.escape(part)
            parts.append(part)

        return "^" + "".join(parts) + "$", include, anchored, directory

    def match(self, path, basename=None, is_dir=None):
        """Match a path against the pattern. If the path matches the pattern,
           you must use the .include attribute to determine whether the path is
           to be added or removed from the result. path must be relative.
           basename and is_dir can be used to provide pre-computed values.
        """
        if basename is None:
            basename = os.path.basename(path)
        if is_dir is None:
            is_dir = os.path.isdir(path)

        # Turn path into a pseudo-relative path.
        path = path.lstrip(os.sep)

        if self.regex.match(path if self.anchored else basename):
            if self.directory:
                if is_dir:
                    return True
            else:
                return True
        return False

    def get_group_key(self):
        """Return an object that can be used as a key for grouping different
           types of glob patterns.
        """
        return GroupKey(self.include, self.anchored, self.directory)


class GitIgnore:
    """Parse a .gitignore file according to the rules in the gitignore(5)
       manpage.
    """

    IGNORE_NAMES = set([".gitignore", ".ignore", ".fdignore", ".ffignore"])

    @classmethod
    def from_directory(cls, context, path):
        """Find ignore files in the parent directories of 'path', that
           must be applied.
        """
        ignores = []
        dirname = os.path.dirname(os.path.abspath(path))
        parent = os.sep
        for part in dirname.split(os.sep):
            parent = os.path.join(parent, part)
            for name in cls.IGNORE_NAMES:
                if os.path.exists(os.path.join(parent, name)):
                    try:
                        ignores.append(cls(context, parent, name))
                    except OSError as exc:
                        context.warning(exc)
        return ignores

    def __init__(self, context, dirname, name):
        assert os.path.isabs(dirname)
        self.dirname = dirname

        if __debug__:
            context.debug("walk", f"Found ignore file {name!r} in {dirname!r}")

        with open(os.path.join(dirname, name)) as lines:
            self.lines = list(lines)

        # Collect the glob patterns from the gitignore file and translate them
        # to regular expressions. We have to evaluate the patterns from the
        # file in sequence, so in order to speed up matching we compile them
        # into groups of similar patterns which we can join into one big regex.
        # Patterns differ in whether they are inclusive or exclusive, aimed at
        # full paths and whether they are supposed to match directories only.
        self.patterns = []
        key = None
        for line in self.lines:
            pattern = line.strip()
            if not pattern or pattern.startswith("#"):
                continue

            pattern = Glob(pattern)
            if pattern.get_group_key() != key:
                # Start new group.
                key = pattern.get_group_key()
                patterns = []
                self.patterns.append((key, patterns))
            patterns.append(pattern)

        self.patterns = [
                (key, re.compile("|".join(pattern.regex_pattern for pattern in patterns)))
                for key, patterns in self.patterns]

    def match(self, path, name, is_dir):
        """Match the path or basename against the sequence of regular
           expressions and return True if the entry is to be excluded.
           path must be absolute.
        """
        assert os.path.isabs(path)
        relpath = path[len(self.dirname) + 1:]

        exclude = False
        for key, pattern in self.patterns:
            if key.directory and not is_dir:
                continue
            test_path = relpath if key.anchored else name
            if pattern.match(test_path):
                exclude = key.include
        return exclude
