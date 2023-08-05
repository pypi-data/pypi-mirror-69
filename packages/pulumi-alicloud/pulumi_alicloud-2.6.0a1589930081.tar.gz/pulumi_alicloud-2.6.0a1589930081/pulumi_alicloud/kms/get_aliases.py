# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetAliasesResult:
    """
    A collection of values returned by getAliases.
    """
    def __init__(__self__, aliases=None, id=None, ids=None, name_regex=None, names=None, output_file=None):
        if aliases and not isinstance(aliases, list):
            raise TypeError("Expected argument 'aliases' to be a list")
        __self__.aliases = aliases
        """
        A list of KMS User alias. Each element contains the following attributes:
        """
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
        A list of kms aliases IDs. The value is same as KMS alias_name. 
        """
        if name_regex and not isinstance(name_regex, str):
            raise TypeError("Expected argument 'name_regex' to be a str")
        __self__.name_regex = name_regex
        if names and not isinstance(names, list):
            raise TypeError("Expected argument 'names' to be a list")
        __self__.names = names
        """
        A list of KMS alias name.
        """
        if output_file and not isinstance(output_file, str):
            raise TypeError("Expected argument 'output_file' to be a str")
        __self__.output_file = output_file
class AwaitableGetAliasesResult(GetAliasesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetAliasesResult(
            aliases=self.aliases,
            id=self.id,
            ids=self.ids,
            name_regex=self.name_regex,
            names=self.names,
            output_file=self.output_file)

def get_aliases(ids=None,name_regex=None,output_file=None,opts=None):
    """
    This data source provides a list of KMS aliases in an Alibaba Cloud account according to the specified filters.
     
    > **NOTE:** Available in v1.79.0+.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_alicloud as alicloud

    kms_aliases = alicloud.kms.get_aliases(ids=["d89e8a53-b708-41aa-8c67-6873axxx"],
        name_regex="alias/tf-testKmsAlias_123")
    pulumi.export("firstKeyId", data["kms.getKeys"]["kms_keys_ds"]["keys"][0]["id"])
    ```



    :param list ids: A list of KMS aliases IDs. The value is same as KMS alias_name.
    :param str name_regex: A regex string to filter the results by the KMS alias name.
    """
    __args__ = dict()


    __args__['ids'] = ids
    __args__['nameRegex'] = name_regex
    __args__['outputFile'] = output_file
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('alicloud:kms/getAliases:getAliases', __args__, opts=opts).value

    return AwaitableGetAliasesResult(
        aliases=__ret__.get('aliases'),
        id=__ret__.get('id'),
        ids=__ret__.get('ids'),
        name_regex=__ret__.get('nameRegex'),
        names=__ret__.get('names'),
        output_file=__ret__.get('outputFile'))
