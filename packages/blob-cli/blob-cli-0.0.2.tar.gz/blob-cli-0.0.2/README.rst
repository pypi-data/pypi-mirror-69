=======================================
blob-cli: Azure Blob Shell Command
=======================================

.. image:: https://img.shields.io/pypi/v/blob-cli.svg
   :target: https://pypi.org/project/blob-cli/
   :alt: Latest Release

========
Overview
========

+ Wapper azure-storage-blob for help you operate blob
+ Operate blob by set environment variables(AZURE_STORAGE_ACCOUNT, AZURE_CONTAINER_NAME, AZURE_ACCESS_KEY)
+ AZURE_ACCESS_KEY can be Access Key or Shared Access Signature
+ provide shell commands: blob_list, blob_tier, blob_upload, blob_download, blob_delete

$ export AZURE_STORAGE_ACCOUNT=azureblobcliaccounttest  

$ export AZURE_CONTAINER_NAME=azureblobclicontainertest  

$ export AZURE_BLOB_KEY=azureblobcliaccounttest_SAS_token  

$ blob_list  

$ # upload and set archive tier  

$ ls -l | awk 'NR>3{print $9}' | xargs -n 1 -P 4 -I filename blob_upload -f filename -bf archive_folder -t archive

=======
License
=======

blob-cli is distributed under the `MIT license <http://www.opensource.org/licenses/mit-license.php>`_.