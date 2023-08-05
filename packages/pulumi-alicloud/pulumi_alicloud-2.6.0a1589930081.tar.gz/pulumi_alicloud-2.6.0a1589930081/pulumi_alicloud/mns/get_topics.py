# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetTopicsResult:
    """
    A collection of values returned by getTopics.
    """
    def __init__(__self__, id=None, name_prefix=None, names=None, output_file=None, topics=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if name_prefix and not isinstance(name_prefix, str):
            raise TypeError("Expected argument 'name_prefix' to be a str")
        __self__.name_prefix = name_prefix
        if names and not isinstance(names, list):
            raise TypeError("Expected argument 'names' to be a list")
        __self__.names = names
        """
        A list of topic names.
        """
        if output_file and not isinstance(output_file, str):
            raise TypeError("Expected argument 'output_file' to be a str")
        __self__.output_file = output_file
        if topics and not isinstance(topics, list):
            raise TypeError("Expected argument 'topics' to be a list")
        __self__.topics = topics
        """
        A list of topics. Each element contains the following attributes:
        """
class AwaitableGetTopicsResult(GetTopicsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetTopicsResult(
            id=self.id,
            name_prefix=self.name_prefix,
            names=self.names,
            output_file=self.output_file,
            topics=self.topics)

def get_topics(name_prefix=None,output_file=None,opts=None):
    """
    This data source provides a list of MNS topics in an Alibaba Cloud account according to the specified parameters.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_alicloud as alicloud

    topics = alicloud.mns.get_topics(name_prefix="tf-")
    pulumi.export("firstTopicId", topics.topics[0]["id"])
    ```



    :param str name_prefix: A string to filter resulting topics by their name prefixs.
    """
    __args__ = dict()


    __args__['namePrefix'] = name_prefix
    __args__['outputFile'] = output_file
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('alicloud:mns/getTopics:getTopics', __args__, opts=opts).value

    return AwaitableGetTopicsResult(
        id=__ret__.get('id'),
        name_prefix=__ret__.get('namePrefix'),
        names=__ret__.get('names'),
        output_file=__ret__.get('outputFile'),
        topics=__ret__.get('topics'))
