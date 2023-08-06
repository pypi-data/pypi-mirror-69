import click

from .._version import __version__
from .bscan import bscan
from .gff import gff_dedup
from .press import press
from .scan import scan
from .score import score
from .strip import strip


@click.group(name="iseq", context_settings=dict(help_option_names=["-h", "--help"]))
@click.version_option(__version__)
def cli():
    """
    Find nucleotide sequences against protein profiles.
    """


cli.add_command(bscan)
cli.add_command(gff_dedup)
cli.add_command(press)
cli.add_command(scan)
cli.add_command(score)
cli.add_command(strip)
