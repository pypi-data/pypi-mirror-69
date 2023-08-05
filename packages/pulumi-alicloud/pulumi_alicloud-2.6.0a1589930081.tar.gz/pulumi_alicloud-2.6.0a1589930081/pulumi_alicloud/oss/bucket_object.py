# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class BucketObject(pulumi.CustomResource):
    acl: pulumi.Output[str]
    """
    The [canned ACL](https://www.alibabacloud.com/help/doc-detail/52284.htm) to apply. Defaults to "private".
    """
    bucket: pulumi.Output[str]
    """
    The name of the bucket to put the file in.
    """
    cache_control: pulumi.Output[str]
    """
    Specifies caching behavior along the request/reply chain. Read [RFC2616 Cache-Control](https://www.ietf.org/rfc/rfc2616.txt) for further details.
    """
    content: pulumi.Output[str]
    """
    The literal content being uploaded to the bucket.
    """
    content_disposition: pulumi.Output[str]
    """
    Specifies presentational information for the object. Read [RFC2616 Content-Disposition](https://www.ietf.org/rfc/rfc2616.txt) for further details.
    """
    content_encoding: pulumi.Output[str]
    """
    Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [RFC2616 Content-Encoding](https://www.ietf.org/rfc/rfc2616.txt) for further details.
    """
    content_length: pulumi.Output[str]
    """
    the content length of request.
    """
    content_md5: pulumi.Output[str]
    """
    The MD5 value of the content. Read [MD5](https://www.alibabacloud.com/help/doc-detail/31978.htm) for computing method.
    """
    content_type: pulumi.Output[str]
    """
    A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.
    """
    etag: pulumi.Output[str]
    """
    the ETag generated for the object (an MD5 sum of the object content).
    """
    expires: pulumi.Output[str]
    """
    Specifies expire date for the the request/response. Read [RFC2616 Expires](https://www.ietf.org/rfc/rfc2616.txt) for further details.
    """
    key: pulumi.Output[str]
    """
    The name of the object once it is in the bucket.
    """
    kms_key_id: pulumi.Output[str]
    """
    Specifies the primary key managed by KMS. This parameter is valid when the value of `server_side_encryption` is set to KMS.
    """
    server_side_encryption: pulumi.Output[str]
    """
    Specifies server-side encryption of the object in OSS. Valid values are `AES256`, `KMS`. Default value is `AES256`.
    """
    source: pulumi.Output[str]
    """
    The path to the source file being uploaded to the bucket.
    """
    version_id: pulumi.Output[str]
    """
    A unique version ID value for the object, if bucket versioning is enabled.
    """
    def __init__(__self__, resource_name, opts=None, acl=None, bucket=None, cache_control=None, content=None, content_disposition=None, content_encoding=None, content_md5=None, content_type=None, expires=None, key=None, kms_key_id=None, server_side_encryption=None, source=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a resource to put a object(content or file) to a oss bucket.

        ## Example Usage

        ### Uploading a file to a bucket

        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        object_source = alicloud.oss.BucketObject("object-source",
            bucket="your_bucket_name",
            key="new_object_key",
            source="path/to/file")
        ```

        ### Uploading a content to a bucket

        ```python
        import pulumi
        import pulumi_alicloud as alicloud

        example = alicloud.oss.Bucket("example",
            acl="public-read",
            bucket="your_bucket_name")
        object_content = alicloud.oss.BucketObject("object-content",
            bucket=example.bucket,
            content="the content that you want to upload.",
            key="new_object_key")
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] acl: The [canned ACL](https://www.alibabacloud.com/help/doc-detail/52284.htm) to apply. Defaults to "private".
        :param pulumi.Input[str] bucket: The name of the bucket to put the file in.
        :param pulumi.Input[str] cache_control: Specifies caching behavior along the request/reply chain. Read [RFC2616 Cache-Control](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] content: The literal content being uploaded to the bucket.
        :param pulumi.Input[str] content_disposition: Specifies presentational information for the object. Read [RFC2616 Content-Disposition](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] content_encoding: Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [RFC2616 Content-Encoding](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] content_md5: The MD5 value of the content. Read [MD5](https://www.alibabacloud.com/help/doc-detail/31978.htm) for computing method.
        :param pulumi.Input[str] content_type: A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.
        :param pulumi.Input[str] expires: Specifies expire date for the the request/response. Read [RFC2616 Expires](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] key: The name of the object once it is in the bucket.
        :param pulumi.Input[str] kms_key_id: Specifies the primary key managed by KMS. This parameter is valid when the value of `server_side_encryption` is set to KMS.
        :param pulumi.Input[str] server_side_encryption: Specifies server-side encryption of the object in OSS. Valid values are `AES256`, `KMS`. Default value is `AES256`.
        :param pulumi.Input[str] source: The path to the source file being uploaded to the bucket.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['acl'] = acl
            if bucket is None:
                raise TypeError("Missing required property 'bucket'")
            __props__['bucket'] = bucket
            __props__['cache_control'] = cache_control
            __props__['content'] = content
            __props__['content_disposition'] = content_disposition
            __props__['content_encoding'] = content_encoding
            __props__['content_md5'] = content_md5
            __props__['content_type'] = content_type
            __props__['expires'] = expires
            if key is None:
                raise TypeError("Missing required property 'key'")
            __props__['key'] = key
            __props__['kms_key_id'] = kms_key_id
            __props__['server_side_encryption'] = server_side_encryption
            __props__['source'] = source
            __props__['content_length'] = None
            __props__['etag'] = None
            __props__['version_id'] = None
        super(BucketObject, __self__).__init__(
            'alicloud:oss/bucketObject:BucketObject',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, acl=None, bucket=None, cache_control=None, content=None, content_disposition=None, content_encoding=None, content_length=None, content_md5=None, content_type=None, etag=None, expires=None, key=None, kms_key_id=None, server_side_encryption=None, source=None, version_id=None):
        """
        Get an existing BucketObject resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] acl: The [canned ACL](https://www.alibabacloud.com/help/doc-detail/52284.htm) to apply. Defaults to "private".
        :param pulumi.Input[str] bucket: The name of the bucket to put the file in.
        :param pulumi.Input[str] cache_control: Specifies caching behavior along the request/reply chain. Read [RFC2616 Cache-Control](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] content: The literal content being uploaded to the bucket.
        :param pulumi.Input[str] content_disposition: Specifies presentational information for the object. Read [RFC2616 Content-Disposition](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] content_encoding: Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [RFC2616 Content-Encoding](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] content_length: the content length of request.
        :param pulumi.Input[str] content_md5: The MD5 value of the content. Read [MD5](https://www.alibabacloud.com/help/doc-detail/31978.htm) for computing method.
        :param pulumi.Input[str] content_type: A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.
        :param pulumi.Input[str] etag: the ETag generated for the object (an MD5 sum of the object content).
        :param pulumi.Input[str] expires: Specifies expire date for the the request/response. Read [RFC2616 Expires](https://www.ietf.org/rfc/rfc2616.txt) for further details.
        :param pulumi.Input[str] key: The name of the object once it is in the bucket.
        :param pulumi.Input[str] kms_key_id: Specifies the primary key managed by KMS. This parameter is valid when the value of `server_side_encryption` is set to KMS.
        :param pulumi.Input[str] server_side_encryption: Specifies server-side encryption of the object in OSS. Valid values are `AES256`, `KMS`. Default value is `AES256`.
        :param pulumi.Input[str] source: The path to the source file being uploaded to the bucket.
        :param pulumi.Input[str] version_id: A unique version ID value for the object, if bucket versioning is enabled.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["acl"] = acl
        __props__["bucket"] = bucket
        __props__["cache_control"] = cache_control
        __props__["content"] = content
        __props__["content_disposition"] = content_disposition
        __props__["content_encoding"] = content_encoding
        __props__["content_length"] = content_length
        __props__["content_md5"] = content_md5
        __props__["content_type"] = content_type
        __props__["etag"] = etag
        __props__["expires"] = expires
        __props__["key"] = key
        __props__["kms_key_id"] = kms_key_id
        __props__["server_side_encryption"] = server_side_encryption
        __props__["source"] = source
        __props__["version_id"] = version_id
        return BucketObject(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

