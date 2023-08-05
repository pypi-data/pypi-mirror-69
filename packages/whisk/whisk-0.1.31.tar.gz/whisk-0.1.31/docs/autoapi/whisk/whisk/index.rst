:mod:`whisk.whisk`
==================

.. py:module:: whisk.whisk

.. autoapi-nested-parse::

   Main module.



Module Contents
---------------


.. data:: logger
   

   

.. function:: root_module_dir()

   Returns a Path object with the root whisk module directory.


.. function:: cookiecutter_template_dir()


.. function:: to_slug(str)

   Converts a string to a slug:

   * Makes all letters lowercase
   * Replaces spaces with underscores


.. function:: create(dir, force=False, module_name=None, dependency=f'whisk=={whisk.__version__}', install_requires=f'whisk=={whisk.__version__}')

   Creates a whisk project.

   Parameters
   ----------
   dir : str
       Path of the directory to create the project. The directory name is
       converted to a slug via :func:`project_name_to_slug`.

   module_name : str, optional
       Name of the module used when importing the project. This is converted to a
       slug via :func:`project_name_to_slug`. Default is the ``project_name``.

   force : bool, optional
       Recreates the project directory if it exists. Default is `False`.

   dependency : str, optional
       The whisk dependency entry in the project's requirements.txt file.
       Default locks to the current version. The version lock is restrictive
       as earlier and later versions of whisk could expect a different
       template structure and break functionality.

   install_requires : str, optional
       The whisk ``install_requires`` entry in the project's ``setup.py``
       file. Default locks to the current version. The version lock is
       restrictive as earlier and later versions of whisk could expect a
       different template structure and break functionality.


