"""Rio_cogeo.scripts.cli."""

import os
import warnings

import click
import numpy
from rasterio.enums import Resampling as ResamplingEnums
from rasterio.rio import options

from rio_cogeo import version as cogeo_version
from rio_cogeo.cogeo import cog_translate, cog_validate
from rio_cogeo.profiles import cog_profiles

IN_MEMORY_THRESHOLD = int(os.environ.get("IN_MEMORY_THRESHOLD", 10980 * 10980))


class BdxParamType(click.ParamType):
    """Band index type."""

    name = "bidx"

    def convert(self, value, param, ctx):
        """Validate and parse band index."""
        try:
            bands = [int(x) for x in value.split(",")]
            assert all(b > 0 for b in bands)
            return bands

        except (ValueError, AttributeError, AssertionError):
            raise click.ClickException(
                "bidx must be a string of comma-separated integers (> 0), "
                "representing the band indexes."
            )


class NodataParamType(click.ParamType):
    """Nodata type."""

    name = "nodata"

    def convert(self, value, param, ctx):
        """Validate and parse band index."""
        try:
            if value.lower() == "nan":
                return numpy.nan
            elif value.lower() in ["nil", "none", "nada"]:
                return None
            else:
                return float(value)
        except (TypeError, ValueError):
            raise click.ClickException("{} is not a valid nodata value.".format(value))


class ThreadsParamType(click.ParamType):
    """num_threads index type."""

    name = "threads"

    def convert(self, value, param, ctx):
        """Validate and parse thread number."""
        try:
            if value.lower() == "all_cpus":
                return "ALL_CPUS"
            else:
                return int(value)
        except (TypeError, ValueError):
            raise click.ClickException("{} is not a valid thread value.".format(value))


@click.group(short_help="Create and Validate COGEO")
@click.version_option(version=cogeo_version, message="%(version)s")
def cogeo():
    """Rasterio cogeo subcommands."""
    pass


@cogeo.command(short_help="Create COGEO")
@options.file_in_arg
@options.file_out_arg
@click.option("--bidx", "-b", type=BdxParamType(), help="Band indexes to copy.")
@click.option(
    "--cog-profile",
    "-p",
    "cogeo_profile",
    type=click.Choice(cog_profiles.keys(), case_sensitive=False),
    default="deflate",
    help="CloudOptimized GeoTIFF profile (default: deflate).",
)
@click.option(
    "--nodata",
    type=NodataParamType(),
    metavar="NUMBER|nan",
    help="Set nodata masking values for input dataset.",
)
@click.option(
    "--add-mask",
    is_flag=True,
    help="Force output dataset creation with an internal mask (convert alpha "
    "band or nodata to mask).",
)
@click.option("--blocksize", type=int, help="Overwrite profile's tile size.")
@options.dtype_opt
@click.option(
    "--overview-level",
    type=int,
    help="Overview level (if not provided, appropriate overview level will be "
    "selected until the smallest overview is smaller than the value of the "
    "internal blocksize)",
)
@click.option(
    "--overview-resampling",
    help="Overview creation resampling algorithm (default: nearest).",
    type=click.Choice(
        [it.name for it in ResamplingEnums if it.value in [0, 1, 2, 3, 4, 5, 6, 7]]
    ),
    default="nearest",
)
@click.option(
    "--overview-blocksize",
    default=lambda: os.environ.get("GDAL_TIFF_OVR_BLOCKSIZE", 128),
    help="Overview's internal tile size (default defined by "
    "GDAL_TIFF_OVR_BLOCKSIZE env or 128)",
)
@click.option(
    "--web-optimized", "-w", is_flag=True, help="Create COGEO optimized for Web."
)
@click.option(
    "--latitude-adjustment/--global-maxzoom",
    default=None,
    help="Use dataset native mercator resolution for MAX_ZOOM calculation "
    "(linked to dataset center latitude, default) or ensure MAX_ZOOM equality for multiple "
    "dataset accross latitudes.",
)
@click.option(
    "--resampling",
    "-r",
    help="Resampling algorithm (default: nearest). Will only be applied with the `--web-optimized` option.",
    type=click.Choice(
        [it.name for it in ResamplingEnums if it.value in [0, 1, 2, 3, 4, 5, 6, 7]]
    ),
    default="nearest",
)
@click.option(
    "--in-memory/--no-in-memory",
    default=None,
    help="Force processing raster in memory / not in memory (default: process in memory "
    "if smaller than {:.0f} million pixels)".format(IN_MEMORY_THRESHOLD // 1e6),
)
@click.option(
    "--allow-intermediate-compression",
    default=False,
    is_flag=True,
    help="Allow intermediate file compression to reduce memory/disk footprint.",
)
@click.option(
    "--forward-band-tags",
    default=False,
    is_flag=True,
    help="Forward band tags to output bands.",
)
@click.option(
    "--threads",
    type=ThreadsParamType(),
    default="ALL_CPUS",
    help="Number of worker threads for multi-threaded compression (default: ALL_CPUS)",
)
@options.creation_options
@click.option(
    "--config",
    "config",
    metavar="NAME=VALUE",
    multiple=True,
    callback=options._cb_key_val,
    help="GDAL configuration options.",
)
@click.option(
    "--quiet", "-q", help="Remove progressbar and other non-error output.", is_flag=True
)
def create(
    input,
    output,
    bidx,
    cogeo_profile,
    nodata,
    dtype,
    add_mask,
    blocksize,
    overview_level,
    overview_resampling,
    overview_blocksize,
    web_optimized,
    latitude_adjustment,
    resampling,
    in_memory,
    allow_intermediate_compression,
    forward_band_tags,
    threads,
    creation_options,
    config,
    quiet,
):
    """Create Cloud Optimized Geotiff."""
    if latitude_adjustment is not None and not web_optimized:
        warnings.warn(
            "'latitude_adjustment' option has to be used with --web-optimized options. "
            "Will be ignored."
        )

    output_profile = cog_profiles.get(cogeo_profile)
    output_profile.update(dict(BIGTIFF=os.environ.get("BIGTIFF", "IF_SAFER")))
    if creation_options:
        output_profile.update(creation_options)

    if blocksize:
        output_profile["blockxsize"] = blocksize
        output_profile["blockysize"] = blocksize

    config.update(
        dict(
            GDAL_NUM_THREADS=threads,
            GDAL_TIFF_INTERNAL_MASK=os.environ.get("GDAL_TIFF_INTERNAL_MASK", True),
            GDAL_TIFF_OVR_BLOCKSIZE=str(overview_blocksize),
        )
    )

    cog_translate(
        input,
        output,
        output_profile,
        indexes=bidx,
        nodata=nodata,
        dtype=dtype,
        add_mask=add_mask,
        overview_level=overview_level,
        overview_resampling=overview_resampling,
        web_optimized=web_optimized,
        latitude_adjustment=latitude_adjustment,
        resampling=resampling,
        in_memory=in_memory,
        config=config,
        allow_intermediate_compression=allow_intermediate_compression,
        forward_band_tags=forward_band_tags,
        quiet=quiet,
    )


@cogeo.command(short_help="Validate COGEO")
@options.file_in_arg
@click.option("--strict", default=False, is_flag=True, help="Treat warnings as errors.")
def validate(input, strict):
    """Validate Cloud Optimized Geotiff."""
    if cog_validate(input, strict=strict):
        click.echo("{} is a valid cloud optimized GeoTIFF".format(input))
    else:
        click.echo("{} is NOT a valid cloud optimized GeoTIFF".format(input))
