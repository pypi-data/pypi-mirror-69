:mod:`whisk.git`
================

.. py:module:: whisk.git


Module Contents
---------------


.. function:: is_repo(dir=os.getcwd())

   Returns ``True`` if the ``dir`` is a git repo.

   Parameters
   ----------
   dir : str
       A path to a directory.


.. function:: has_unstaged_changes(dir=os.getcwd())

   Returns ``True`` if the git repo in the directory
   has unstaged changes.


