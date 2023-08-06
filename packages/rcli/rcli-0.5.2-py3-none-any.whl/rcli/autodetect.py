# -*- coding: utf-8 -*-
"""Autodetection of docopt-style commands and subcommands.

Functions:
    setup_keyword: Adds a keyword to setuptools.setup to autodetect commands.
    egg_info_writer: Reads configuration from setup.cfg and writes out a new
        egg info file.
"""

from __future__ import absolute_import
from __future__ import unicode_literals

import ast
import collections
import configparser
import json
import os.path
import typing

import setuptools
import six

from . import usage


_EntryPoint = collections.namedtuple(  # All data representing an entry point.
    "_EntryPoint", ("command", "subcommand", "callable")
)


def setup_keyword(dist, _, value):
    # type: (setuptools.dist.Distribution, str, bool) -> None
    """Add autodetected commands as entry points.

    Args:
        dist: The distutils Distribution object for the project being
            installed.
        _: The keyword used in the setup function. Unused.
        value: The value set to the keyword in the setup function. If the value
            is not True, this function will do nothing.
    """
    if value is not True:
        return
    dist.entry_points = _ensure_entry_points_is_dict(dist.entry_points)

    for command, subcommands in six.iteritems(_get_commands(dist)):
        entry_point = "{command} = rcli.dispatcher:main".format(
            command=command
        )
        entry_points = dist.entry_points.setdefault("console_scripts", [])
        if entry_point not in entry_points:
            entry_points.append(entry_point)
        dist.entry_points.setdefault("rcli", []).extend(subcommands)


def _ensure_entry_points_is_dict(entry_points):
    if not entry_points:
        return {}
    elif isinstance(entry_points, str):
        config = configparser.ConfigParser()
        config.read_string(entry_points)
        return {
            k: ["=".join(t) for t in section.items()]
            for k, section in config.items()
            if k != config.default_section
        }
    return entry_points


def egg_info_writer(cmd, basename, filename):
    # type: (setuptools.command.egg_info.egg_info, str, str) -> None
    """Read rcli configuration and write it out to the egg info.

    Args:
        cmd: An egg info command instance to use for writing.
        basename: The basename of the file to write.
        filename: The full path of the file to write into the egg info.
    """
    setupcfg = next(
        (
            f
            for f in setuptools.findall()
            if os.path.basename(f) == "setup.cfg"
        ),
        None,
    )
    if not setupcfg:
        return
    parser = six.moves.configparser.ConfigParser()  # type: ignore
    parser.read(setupcfg)
    if not parser.has_section("rcli") or not parser.items("rcli"):
        return
    config = dict(parser.items("rcli"))  # type: typing.Dict[str, typing.Any]
    for k, v in six.iteritems(config):
        if v.lower() in ("y", "yes", "true"):
            config[k] = True
        elif v.lower() in ("n", "no", "false"):
            config[k] = False
        else:
            try:
                config[k] = json.loads(v)
            except ValueError:
                pass
    cmd.write_file(basename, filename, json.dumps(config))


def _get_commands(
    dist  # type: setuptools.dist.Distribution
):
    # type: (...) -> typing.Dict[str, typing.Set[str]]
    """Find all commands belonging to the given distribution.

    Args:
        dist: The Distribution to search for docopt-compatible docstrings that
            can be used to generate command entry points.

    Returns:
        A dictionary containing a mapping of primary commands to sets of
        subcommands.
    """
    py_files = (
        f
        for f in setuptools.findall()
        if os.path.splitext(f)[1].lower() == ".py"
    )
    pkg_files = (f for f in py_files if _get_package_name(f) in dist.packages)
    commands = {}  # type: typing.Dict[str, typing.Set[str]]
    for file_name in pkg_files:
        with open(file_name) as py_file:
            module = typing.cast(ast.Module, ast.parse(py_file.read()))
        module_name = _get_module_name(file_name)
        _append_commands(commands, module_name, _get_module_commands(module))
        _append_commands(commands, module_name, _get_class_commands(module))
        _append_commands(commands, module_name, _get_function_commands(module))
    return commands


def _append_commands(
    dct,  # type: typing.Dict[str, typing.Set[str]]
    module_name,  # type: str
    commands,  # type:typing.Iterable[_EntryPoint]
):
    # type: (...) -> None
    """Append entry point strings representing the given Command objects.

    Args:
        dct: The dictionary to append with entry point strings. Each key will
            be a primary command with a value containing a list of entry point
            strings representing a Command.
        module_name: The name of the module in which the command object
            resides.
        commands: A list of Command objects to convert to entry point strings.
    """
    for command in commands:
        entry_point = "{command}{subcommand} = {module}{callable}".format(
            command=command.command,
            subcommand=(
                ":{}".format(command.subcommand) if command.subcommand else ""
            ),
            module=module_name,
            callable=(
                ":{}".format(command.callable) if command.callable else ""
            ),
        )
        dct.setdefault(command.command, set()).add(entry_point)


def _get_package_name(file_name):
    # type: (str) -> str
    """Return the python package name for the given file.

    Args:
        file_name: The file name of a python file.

    Returns:
        Converts the file name to a python-style module name and retrieves the
        package component.
    """
    return _get_module_name(file_name).rsplit(".", 1)[0]


def _get_module_name(file_name):
    # type: (str) -> str
    """Return the python module name for the given file.

    Args:
        file_name: The file name of a python file.

    Returns:
        Converts the file name to a python-style module and returns the name.
    """
    return file_name[:-3].replace("/", ".")


def _get_module_commands(module):
    # type: (ast.Module) -> typing.Generator[_EntryPoint, None, None]
    """Yield all Command objects represented by the python module.

    Module commands consist of a docopt-style module docstring and a callable
    Command class.

    Args:
        module: An ast.Module object used to retrieve docopt-style commands.

    Yields:
        Command objects that represent entry points to append to setup.py.
    """
    cls = next(
        (
            n
            for n in module.body
            if isinstance(n, ast.ClassDef) and n.name == "Command"
        ),
        None,
    )
    if not cls:
        return
    methods = (n.name for n in cls.body if isinstance(n, ast.FunctionDef))
    if "__call__" not in methods:
        return
    docstring = ast.get_docstring(module)
    for commands, _ in usage.parse_commands(docstring):
        yield _EntryPoint(commands[0], next(iter(commands[1:]), None), None)


def _get_class_commands(module):
    # type: (ast.Module) -> typing.Generator[_EntryPoint, None, None]
    """Yield all Command objects represented by python classes in the module.

    Class commands are detected by inspecting all callable classes in the
    module for docopt-style docstrings.

    Args:
        module: An ast.Module object used to retrieve docopt-style commands.

    Yields:
        Command objects that represent entry points to append to setup.py.
    """
    nodes = (n for n in module.body if isinstance(n, ast.ClassDef))
    for cls in nodes:
        methods = (n.name for n in cls.body if isinstance(n, ast.FunctionDef))
        if "__call__" in methods:
            docstring = ast.get_docstring(cls)
            for commands, _ in usage.parse_commands(docstring):
                yield _EntryPoint(
                    commands[0], next(iter(commands[1:]), None), cls.name
                )


def _get_function_commands(module):
    # type: (ast.Module) -> typing.Generator[_EntryPoint, None, None]
    """Yield all Command objects represented by python functions in the module.

    Function commands consist of all top-level functions that contain
    docopt-style docstrings.

    Args:
        module: An ast.Module object used to retrieve docopt-style commands.

    Yields:
        Command objects that represent entry points to append to setup.py.
    """
    nodes = (n for n in module.body if isinstance(n, ast.FunctionDef))
    for func in nodes:
        docstring = ast.get_docstring(func)
        for commands, _ in usage.parse_commands(docstring):
            yield _EntryPoint(
                commands[0], next(iter(commands[1:]), None), func.name
            )
