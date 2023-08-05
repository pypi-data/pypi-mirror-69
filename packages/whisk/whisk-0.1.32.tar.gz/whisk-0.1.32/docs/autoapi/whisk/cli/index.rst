:mod:`whisk.cli`
================

.. py:module:: whisk.cli

.. autoapi-nested-parse::

   This module contains whisk command line interface (CLI) commands and logic for managing whisk projects.

   Commands within :mod:`whisk.cli.commands.project` are only loaded when the current working directory is the top-level of a whisk project.

   :class:`whisk.cli.whisk_multi_command.WhiskMultiCommand` loads the commands based on the current working directory. If ran within a project, it also loads commands defined in the ``whisk_commands/`` directory.



Subpackages
-----------
.. toctree::
   :titlesonly:
   :maxdepth: 3

   commands/index.rst


Submodules
----------
.. toctree::
   :titlesonly:
   :maxdepth: 1

   cli/index.rst
   log_tree/index.rst
   whisk_multi_command/index.rst


