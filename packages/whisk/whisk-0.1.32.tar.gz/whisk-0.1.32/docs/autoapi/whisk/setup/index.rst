:mod:`whisk.setup`
==================

.. py:module:: whisk.setup


Module Contents
---------------


.. data:: logger
   

   

.. data:: NOTEBOOK_EXAMPLE_PATH
   :annotation: = notebooks/getting_started.ipynb

   

.. function:: log_subprocess_output(logger_with_level, log_lines)

   Calls the logger on each of the log_lines. The log lines are prefixed with
   :attr:`whisk.cli.log_tree.CHILD_TREE_NODE_PREFIX`.

   Parameters
   ----------
   logger_with_level : Logger
       A logger instance (ex: ``logger.debug``).

   log_lines : str
       A string of log lines separated with ``\n``.


.. function:: exec(desc, cmd)

   Executes the `cmd`, and logs `desc` prior to execution and "DONE" after.
   If the `cmd` has `stdout` or `stderr` output this is logged as well.

   If the exit code is nonzero, raises a ``SystemExit`` execption.

   Parameters
   ----------
   desc : str
       A description of the command operation.

   cmd : str
       The command to execute.


.. function:: init_git_repo()


.. function:: init_direnv()


.. function:: exec_setup(project)

   Sets up an environment for the given project.

   Parameters
   ----------
   project : whisk.project.Project
       A whisk project.


.. function:: notebook_exists(notebook_path)


.. function:: set_example_notebook_kernel(nbenv)

   Updates the :attr:`NOTEBOOK_EXAMPLE_PATH` notebook kernel to use
   the kernel with name ``nbenv``.


.. function:: log_success(dir)

   Logs that the setup completed successfully and provides next steps.


.. function:: log_pip_freeze()

   Logs the output of ``pip freeze`` at the debug level.


.. function:: setup(dir)

   Sets up the project environment.

   Setup performs the following actions after changing the working
   directory to ``dir``:

   * Creates a `Python3 venv <https://docs.python.org/3/library/venv.html />`_
     named "venv"
   * Installs the dependencies listed in the project's requirements.txt.
   * Initializes a Git repo
   * Creates an iPython kernel for use in Jupyter notebooks with
     name = <project_name>.
   * Creates a ``.envrc`` file based on ``.envrc.example`` for use with
     `direnv <https://github.com/direnv/direnv />`_. direnv loads environment
     variables listed in ``.envrc`` into the shell and is also used to
     auto-activate and deactivate the venv when entering and exiting the
     project directory.
   * Calls ``direnv allow .`` so the ``.envrc`` file can be loaded.
   * Makes an initial Git commit

   Parameters
   ----------
   dir : str
       The full path to the project directory.


