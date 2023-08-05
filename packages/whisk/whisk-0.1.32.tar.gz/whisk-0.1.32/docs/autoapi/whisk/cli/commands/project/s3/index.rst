:mod:`whisk.cli.commands.project.s3`
====================================

.. py:module:: whisk.cli.commands.project.s3


Module Contents
---------------


.. data:: project
   

   A reference to the associated :class:`whisk.project.Project` object for this project.


.. data:: PUBLIC_READ_ONLY_POLICY
   

   The public read-only policy to apply to an S3 bucket.


.. data:: DEFAULT_BUCKET_NAME
   

   The default bucket name for the project.


.. data:: S3_CLIENT
   

   

.. function:: cli()


.. function:: create(bucket)

   Creates an S3 bucket to store data. If no bucket name is provided, the bucket name is generated from the project directory name.


.. function:: delete(bucket)

   Delete the S3 bucket used for data storage. If no bucket name is provided, the bucket name is generated from the project directory name.


.. function:: make_public(bucket)

   Creates a public read-only policy for the S3 bucket.

   This is useful when end users need access to data or artifacts not stored in the code version control.

   Use ``whisk delete-policy`` to revert.


.. function:: delete_policy(bucket)

   Deletes the policy associated with the S3 bucket.


