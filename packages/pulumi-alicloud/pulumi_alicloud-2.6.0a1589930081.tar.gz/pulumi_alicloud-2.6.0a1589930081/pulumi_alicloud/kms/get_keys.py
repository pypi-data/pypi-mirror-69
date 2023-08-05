# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetKeysResult:
    """
    A collection of values returned by getKeys.
    """
    def __init__(__self__, description_regex=None, id=None, ids=None, keys=None, output_file=None, status=None):
        if description_regex and not isinstance(description_regex, str):
            raise TypeError("Expected argument 'description_regex' to be a str")
        __self__.description_regex = description_regex
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if ids and not isinstance(ids, list):
            raise TypeError("Expected argument 'ids' to be a list")
        __self__.ids = ids
        """
        A list of KMS key IDs.
        """
        if keys and not isinstance(keys, list):
            raise TypeError("Expected argument 'keys' to be a list")
        __self__.keys = keys
        """
        A list of KMS keys. Each element contains the following attributes:
        """
        if output_file and not isinstance(output_file, str):
            raise TypeError("Expected argument 'output_file' to be a str")
        __self__.output_file = output_file
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        """
        Status of the key. Possible values: `Enabled`, `Disabled` and `PendingDeletion`.
        """
class AwaitableGetKeysResult(GetKeysResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetKeysResult(
            description_regex=self.description_regex,
            id=self.id,
            ids=self.ids,
            keys=self.keys,
            output_file=self.output_file,
            status=self.status)

def get_keys(description_regex=None,ids=None,output_file=None,status=None,opts=None):
    """
    This data source provides a list of KMS keys in an Alibaba Cloud account according to the specified filters.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_alicloud as alicloud

    kms_keys_ds = alicloud.kms.get_keys(description_regex="Hello KMS",
        output_file="kms_keys.json")
    pulumi.export("firstKeyId", kms_keys_ds.keys[0]["id"])
    ```



    :param str description_regex: A regex string to filter the results by the KMS key description.
    :param list ids: A list of KMS key IDs.
    :param str status: Filter the results by status of the KMS keys. Valid values: `Enabled`, `Disabled`, `PendingDeletion`.
    """
    __args__ = dict()


    __args__['descriptionRegex'] = description_regex
    __args__['ids'] = ids
    __args__['outputFile'] = output_file
    __args__['status'] = status
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('alicloud:kms/getKeys:getKeys', __args__, opts=opts).value

    return AwaitableGetKeysResult(
        description_regex=__ret__.get('descriptionRegex'),
        id=__ret__.get('id'),
        ids=__ret__.get('ids'),
        keys=__ret__.get('keys'),
        output_file=__ret__.get('outputFile'),
        status=__ret__.get('status'))
