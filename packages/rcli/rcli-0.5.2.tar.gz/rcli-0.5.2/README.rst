rcli
====

|PyPI| |Python Versions| |Build Status| |Coverage Status| |Code Quality|

*Rapidly create full-featured command line interfaces with help, subcommand
dispatch, and validation.*

``rcli`` uses docopt_ to give you the control over your usage messages that you
want, but adds functionality such as automatic subcommand dispatching, usage
string wrapping, internationalization, and parameter validation.


Installation
------------

Install it using pip:

::

    pip install rcli


Features
--------

- Automatic creation of console scripts and entry points based on usage
  strings.
- Argument parsing based on usage string.
- Usage string wrapping.
- Command line arguments are normalized into python function parameters.
- Validation of command line arguments using `PEP 484`_ type hints.
- Logging with multiple levels and crash log generation.
- Color coded logging based on log level.
- Extensible subcommand generation based on entry point groups.


Upcoming Features
-----------------

- Automatic generation of bash and zsh autocompletion scripts.
- Internationalization of usage strings.


Basic Usage
-----------

To use ``rcli``, add ``rcli`` to your ``setup_requires`` argument in your
*setup.py* and set the ``autodetect_commands`` parameter to ``True``.

.. code-block:: python

    from setuptools import setup
    setup(
        ...,
        install_requires=['rcli'],
        setup_requires=['rcli'],
        autodetect_commands=True,
        ...,
    )

In your code, create a function with a usage string as its docstring and type
hint annotations for validation.

.. code-block:: python

    def repeat(message: str, num_times: int):
        """Usage: repeat <message> [--num-times <num>]

        Arguments:
            message  A message to print to the console.

        Options:
            -n, --num-times <num>  The number of times to print the message [default: 1].
        """
        for i in range(num_times):
            print(message)

Once your package is installed, a new console script *repeat* will be
automatically generated that will validate and normalize your parameters and
call your function.


Subcommand Dispatch
-------------------

To generate a git-style command line interface with subcommand dispatching, you
only need to create your subcommand functions and your primary command will
be automatically generated for you.

.. code-block:: python

    def roar():
        """Usage: cat-sounds roar"""
        print('ROAR!')

    def meow():
        """Usage: cat-sounds meow"""
        print('Meow!')

This automatically generates the command *cat-sounds* with the following help
message::

    Usage:
      cat-sounds [--help] [--version] [--log-level <level> | --debug | --verbose]
                 <command> [<args>...]

    Options:
      -h, --help           Display this help message and exit.
      -V, --version        Display the version and exit.
      -d, --debug          Set the log level to DEBUG.
      -v, --verbose        Set the log level to INFO.
      --log-level <level>  Set the log level to one of DEBUG, INFO, WARN, or ERROR.

    'cat-sounds help -a' lists all available subcommands.
    See 'cat-sounds help <command>' for more information on a specific command.


.. _PEP 484: https://www.python.org/dev/peps/pep-0484/
.. _docopt: http://docopt.org/

.. |Build Status| image:: https://travis-ci.org/contains-io/rcli.svg?branch=master
   :target: https://travis-ci.org/contains-io/rcli
.. |Coverage Status| image:: https://coveralls.io/repos/github/contains-io/rcli/badge.svg?branch=master
   :target: https://coveralls.io/github/contains-io/rcli?branch=master
.. |PyPI| image:: https://img.shields.io/pypi/v/rcli.svg
   :target: https://pypi.python.org/pypi/rcli/
.. |Python Versions| image:: https://img.shields.io/pypi/pyversions/rcli.svg
   :target: https://pypi.python.org/pypi/rcli/
.. |Code Quality| image:: https://api.codacy.com/project/badge/Grade/61ee45c79340430793ce074748f69686
   :target: https://www.codacy.com/app/contains-io/rcli?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=contains-io/rcli&amp;utm_campaign=Badge_Grade
