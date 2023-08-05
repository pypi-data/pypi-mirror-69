# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetDisksResult:
    """
    A collection of values returned by getDisks.
    """
    def __init__(__self__, category=None, disks=None, encrypted=None, id=None, ids=None, instance_id=None, name_regex=None, output_file=None, resource_group_id=None, tags=None, type=None):
        if category and not isinstance(category, str):
            raise TypeError("Expected argument 'category' to be a str")
        __self__.category = category
        """
        Disk category. Possible values: `cloud` (basic cloud disk), `cloud_efficiency` (ultra cloud disk), `ephemeral_ssd` (local SSD cloud disk), `cloud_ssd` (SSD cloud disk), and `cloud_essd` (ESSD cloud disk).
        """
        if disks and not isinstance(disks, list):
            raise TypeError("Expected argument 'disks' to be a list")
        __self__.disks = disks
        """
        A list of disks. Each element contains the following attributes:
        """
        if encrypted and not isinstance(encrypted, str):
            raise TypeError("Expected argument 'encrypted' to be a str")
        __self__.encrypted = encrypted
        """
        Indicate whether the disk is encrypted or not. Possible values: `on` and `off`.
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
        if instance_id and not isinstance(instance_id, str):
            raise TypeError("Expected argument 'instance_id' to be a str")
        __self__.instance_id = instance_id
        """
        ID of the related instance. It is `null` unless the `status` is `In_use`.
        """
        if name_regex and not isinstance(name_regex, str):
            raise TypeError("Expected argument 'name_regex' to be a str")
        __self__.name_regex = name_regex
        if output_file and not isinstance(output_file, str):
            raise TypeError("Expected argument 'output_file' to be a str")
        __self__.output_file = output_file
        if resource_group_id and not isinstance(resource_group_id, str):
            raise TypeError("Expected argument 'resource_group_id' to be a str")
        __self__.resource_group_id = resource_group_id
        """
        The Id of resource group.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A map of tags assigned to the disk.
        """
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        __self__.type = type
        """
        Disk type. Possible values: `system` and `data`.
        """
class AwaitableGetDisksResult(GetDisksResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDisksResult(
            category=self.category,
            disks=self.disks,
            encrypted=self.encrypted,
            id=self.id,
            ids=self.ids,
            instance_id=self.instance_id,
            name_regex=self.name_regex,
            output_file=self.output_file,
            resource_group_id=self.resource_group_id,
            tags=self.tags,
            type=self.type)

def get_disks(category=None,encrypted=None,ids=None,instance_id=None,name_regex=None,output_file=None,resource_group_id=None,tags=None,type=None,opts=None):
    """
    This data source provides the disks of the current Alibaba Cloud user.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_alicloud as alicloud

    disks_ds = alicloud.ecs.get_disks(name_regex="sample_disk")
    pulumi.export("firstDiskId", disks_ds.disks[0]["id"])
    ```



    :param str category: Disk category. Possible values: `cloud` (basic cloud disk), `cloud_efficiency` (ultra cloud disk), `ephemeral_ssd` (local SSD cloud disk), `cloud_ssd` (SSD cloud disk), and `cloud_essd` (ESSD cloud disk).
    :param str encrypted: Indicate whether the disk is encrypted or not. Possible values: `on` and `off`.
    :param list ids: A list of disks IDs.
    :param str instance_id: Filter the results by the specified ECS instance ID.
    :param str name_regex: A regex string to filter results by disk name.
    :param str resource_group_id: The Id of resource group which the disk belongs.
    :param dict tags: A map of tags assigned to the disks. It must be in the format:
           ```
           data "ecs.getDisks" "disks_ds" {
           tags = {
           tagKey1 = "tagValue1",
           tagKey2 = "tagValue2"
           }
           }
           ```
    :param str type: Disk type. Possible values: `system` and `data`.
    """
    __args__ = dict()


    __args__['category'] = category
    __args__['encrypted'] = encrypted
    __args__['ids'] = ids
    __args__['instanceId'] = instance_id
    __args__['nameRegex'] = name_regex
    __args__['outputFile'] = output_file
    __args__['resourceGroupId'] = resource_group_id
    __args__['tags'] = tags
    __args__['type'] = type
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('alicloud:ecs/getDisks:getDisks', __args__, opts=opts).value

    return AwaitableGetDisksResult(
        category=__ret__.get('category'),
        disks=__ret__.get('disks'),
        encrypted=__ret__.get('encrypted'),
        id=__ret__.get('id'),
        ids=__ret__.get('ids'),
        instance_id=__ret__.get('instanceId'),
        name_regex=__ret__.get('nameRegex'),
        output_file=__ret__.get('outputFile'),
        resource_group_id=__ret__.get('resourceGroupId'),
        tags=__ret__.get('tags'),
        type=__ret__.get('type'))
