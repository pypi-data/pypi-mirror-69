:mod:`whisk.cli.commands.project.app`
=====================================

.. py:module:: whisk.cli.commands.project.app

.. autoapi-nested-parse::

   Manage the web service.



Module Contents
---------------


.. function:: cli()


.. function:: start()

   Start the HTTP web service.


.. function:: create(name)

   Create a Heroku app for the web service with the given NAME. The NAME must be unique across all Heroku apps.

   A Heroku deploy performs the following steps:

   * Ensures there are no unstaged commits before creating the app. If there are uncommited changes the command exists with a warning.

   * Creates the Heroku app

   * Adds the `Multi-Procfile buildpack <https://github.com/heroku/heroku-buildpack-multi-procfile />`_ to access the Procfile within the ``app/`` folder of the project.

   * Adds the `Python buildpack <https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-python />`_.

   * Sets a `PROCFILE` config var to ``app/Procfile``.

   * Pushes the git repo to Heroku.


.. function:: destroy()

   Delete the Heroku app.


