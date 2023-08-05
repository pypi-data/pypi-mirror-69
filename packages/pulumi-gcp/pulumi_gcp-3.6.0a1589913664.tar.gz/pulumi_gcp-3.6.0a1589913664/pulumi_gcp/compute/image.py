# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Image(pulumi.CustomResource):
    archive_size_bytes: pulumi.Output[float]
    """
    Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
    """
    creation_timestamp: pulumi.Output[str]
    """
    Creation timestamp in RFC3339 text format.
    """
    description: pulumi.Output[str]
    """
    An optional description of this resource. Provide this property when
    you create the resource.
    """
    disk_size_gb: pulumi.Output[float]
    """
    Size of the image when restored onto a persistent disk (in GB).
    """
    family: pulumi.Output[str]
    """
    The name of the image family to which this image belongs. You can
    create disks by specifying an image family instead of a specific
    image name. The image family always returns its latest image that is
    not deprecated. The name of the image family must comply with
    RFC1035.
    """
    guest_os_features: pulumi.Output[list]
    """
    A list of features to enable on the guest operating system.
    Applicable only for bootable images.  Structure is documented below.

      * `type` (`str`) - The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options.
    """
    label_fingerprint: pulumi.Output[str]
    """
    The fingerprint used for optimistic locking of this resource. Used internally during updates.
    """
    labels: pulumi.Output[dict]
    """
    Labels to apply to this Image.
    """
    licenses: pulumi.Output[list]
    """
    Any applicable license URI.
    """
    name: pulumi.Output[str]
    """
    Name of the resource; provided by the client when the resource is
    created. The name must be 1-63 characters long, and comply with
    RFC1035. Specifically, the name must be 1-63 characters long and
    match the regular expression `a-z?` which means
    the first character must be a lowercase letter, and all following
    characters must be a dash, lowercase letter, or digit, except the
    last character, which cannot be a dash.
    """
    project: pulumi.Output[str]
    """
    The ID of the project in which the resource belongs.
    If it is not provided, the provider project is used.
    """
    raw_disk: pulumi.Output[dict]
    """
    The parameters of the raw disk image.  Structure is documented below.

      * `containerType` (`str`) - The format used to encode and transmit the block device, which
        should be TAR. This is just a container and transmission format
        and not a runtime format. Provided by the client when the disk
        image is created.
      * `sha1` (`str`) - An optional SHA1 checksum of the disk image before unpackaging.
        This is provided by the client when the disk image is created.
      * `source` (`str`) - The full Google Cloud Storage URL where disk storage is stored
        You must provide either this property or the sourceDisk property
        but not both.
    """
    self_link: pulumi.Output[str]
    """
    The URI of the created resource.
    """
    source_disk: pulumi.Output[str]
    """
    The source disk to create this image based on.
    You must provide either this property or the
    rawDisk.source property but not both to create an image.
    """
    def __init__(__self__, resource_name, opts=None, description=None, disk_size_gb=None, family=None, guest_os_features=None, labels=None, licenses=None, name=None, project=None, raw_disk=None, source_disk=None, __props__=None, __name__=None, __opts__=None):
        """
        Represents an Image resource.

        Google Compute Engine uses operating system images to create the root
        persistent disks for your instances. You specify an image when you create
        an instance. Images contain a boot loader, an operating system, and a
        root file system. Linux operating system images are also capable of
        running containers on Compute Engine.

        Images can be either public or custom.

        Public images are provided and maintained by Google, open-source
        communities, and third-party vendors. By default, all projects have
        access to these images and can use them to create instances.  Custom
        images are available only to your project. You can create a custom image
        from root persistent disks and other images. Then, use the custom image
        to create an instance.


        To get more information about Image, see:

        * [API documentation](https://cloud.google.com/compute/docs/reference/v1/images)
        * How-to Guides
            * [Official Documentation](https://cloud.google.com/compute/docs/images)

        ## Example Usage - Image Basic


        ```python
        import pulumi
        import pulumi_gcp as gcp

        example = gcp.compute.Image("example", raw_disk={
            "source": "https://storage.googleapis.com/bosh-cpi-artifacts/bosh-stemcell-3262.4-google-kvm-ubuntu-trusty-go_agent-raw.tar.gz",
        })
        ```
        ## Example Usage - Image Guest Os


        ```python
        import pulumi
        import pulumi_gcp as gcp

        example = gcp.compute.Image("example",
            guest_os_features=[
                {
                    "type": "SECURE_BOOT",
                },
                {
                    "type": "MULTI_IP_SUBNET",
                },
            ],
            raw_disk={
                "source": "https://storage.googleapis.com/bosh-cpi-artifacts/bosh-stemcell-3262.4-google-kvm-ubuntu-trusty-go_agent-raw.tar.gz",
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: An optional description of this resource. Provide this property when
               you create the resource.
        :param pulumi.Input[float] disk_size_gb: Size of the image when restored onto a persistent disk (in GB).
        :param pulumi.Input[str] family: The name of the image family to which this image belongs. You can
               create disks by specifying an image family instead of a specific
               image name. The image family always returns its latest image that is
               not deprecated. The name of the image family must comply with
               RFC1035.
        :param pulumi.Input[list] guest_os_features: A list of features to enable on the guest operating system.
               Applicable only for bootable images.  Structure is documented below.
        :param pulumi.Input[dict] labels: Labels to apply to this Image.
        :param pulumi.Input[list] licenses: Any applicable license URI.
        :param pulumi.Input[str] name: Name of the resource; provided by the client when the resource is
               created. The name must be 1-63 characters long, and comply with
               RFC1035. Specifically, the name must be 1-63 characters long and
               match the regular expression `a-z?` which means
               the first character must be a lowercase letter, and all following
               characters must be a dash, lowercase letter, or digit, except the
               last character, which cannot be a dash.
        :param pulumi.Input[str] project: The ID of the project in which the resource belongs.
               If it is not provided, the provider project is used.
        :param pulumi.Input[dict] raw_disk: The parameters of the raw disk image.  Structure is documented below.
        :param pulumi.Input[str] source_disk: The source disk to create this image based on.
               You must provide either this property or the
               rawDisk.source property but not both to create an image.

        The **guest_os_features** object supports the following:

          * `type` (`pulumi.Input[str]`) - The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options.

        The **raw_disk** object supports the following:

          * `containerType` (`pulumi.Input[str]`) - The format used to encode and transmit the block device, which
            should be TAR. This is just a container and transmission format
            and not a runtime format. Provided by the client when the disk
            image is created.
          * `sha1` (`pulumi.Input[str]`) - An optional SHA1 checksum of the disk image before unpackaging.
            This is provided by the client when the disk image is created.
          * `source` (`pulumi.Input[str]`) - The full Google Cloud Storage URL where disk storage is stored
            You must provide either this property or the sourceDisk property
            but not both.
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

            __props__['description'] = description
            __props__['disk_size_gb'] = disk_size_gb
            __props__['family'] = family
            __props__['guest_os_features'] = guest_os_features
            __props__['labels'] = labels
            __props__['licenses'] = licenses
            __props__['name'] = name
            __props__['project'] = project
            __props__['raw_disk'] = raw_disk
            __props__['source_disk'] = source_disk
            __props__['archive_size_bytes'] = None
            __props__['creation_timestamp'] = None
            __props__['label_fingerprint'] = None
            __props__['self_link'] = None
        super(Image, __self__).__init__(
            'gcp:compute/image:Image',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, archive_size_bytes=None, creation_timestamp=None, description=None, disk_size_gb=None, family=None, guest_os_features=None, label_fingerprint=None, labels=None, licenses=None, name=None, project=None, raw_disk=None, self_link=None, source_disk=None):
        """
        Get an existing Image resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] archive_size_bytes: Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
        :param pulumi.Input[str] creation_timestamp: Creation timestamp in RFC3339 text format.
        :param pulumi.Input[str] description: An optional description of this resource. Provide this property when
               you create the resource.
        :param pulumi.Input[float] disk_size_gb: Size of the image when restored onto a persistent disk (in GB).
        :param pulumi.Input[str] family: The name of the image family to which this image belongs. You can
               create disks by specifying an image family instead of a specific
               image name. The image family always returns its latest image that is
               not deprecated. The name of the image family must comply with
               RFC1035.
        :param pulumi.Input[list] guest_os_features: A list of features to enable on the guest operating system.
               Applicable only for bootable images.  Structure is documented below.
        :param pulumi.Input[str] label_fingerprint: The fingerprint used for optimistic locking of this resource. Used internally during updates.
        :param pulumi.Input[dict] labels: Labels to apply to this Image.
        :param pulumi.Input[list] licenses: Any applicable license URI.
        :param pulumi.Input[str] name: Name of the resource; provided by the client when the resource is
               created. The name must be 1-63 characters long, and comply with
               RFC1035. Specifically, the name must be 1-63 characters long and
               match the regular expression `a-z?` which means
               the first character must be a lowercase letter, and all following
               characters must be a dash, lowercase letter, or digit, except the
               last character, which cannot be a dash.
        :param pulumi.Input[str] project: The ID of the project in which the resource belongs.
               If it is not provided, the provider project is used.
        :param pulumi.Input[dict] raw_disk: The parameters of the raw disk image.  Structure is documented below.
        :param pulumi.Input[str] self_link: The URI of the created resource.
        :param pulumi.Input[str] source_disk: The source disk to create this image based on.
               You must provide either this property or the
               rawDisk.source property but not both to create an image.

        The **guest_os_features** object supports the following:

          * `type` (`pulumi.Input[str]`) - The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options.

        The **raw_disk** object supports the following:

          * `containerType` (`pulumi.Input[str]`) - The format used to encode and transmit the block device, which
            should be TAR. This is just a container and transmission format
            and not a runtime format. Provided by the client when the disk
            image is created.
          * `sha1` (`pulumi.Input[str]`) - An optional SHA1 checksum of the disk image before unpackaging.
            This is provided by the client when the disk image is created.
          * `source` (`pulumi.Input[str]`) - The full Google Cloud Storage URL where disk storage is stored
            You must provide either this property or the sourceDisk property
            but not both.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["archive_size_bytes"] = archive_size_bytes
        __props__["creation_timestamp"] = creation_timestamp
        __props__["description"] = description
        __props__["disk_size_gb"] = disk_size_gb
        __props__["family"] = family
        __props__["guest_os_features"] = guest_os_features
        __props__["label_fingerprint"] = label_fingerprint
        __props__["labels"] = labels
        __props__["licenses"] = licenses
        __props__["name"] = name
        __props__["project"] = project
        __props__["raw_disk"] = raw_disk
        __props__["self_link"] = self_link
        __props__["source_disk"] = source_disk
        return Image(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

