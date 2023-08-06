"""`matflow.cli.py`

Module that exposes a command line interface for `matflow`.

"""

from pathlib import Path

import click

from matflow import __version__
from matflow import api


@click.group()
@click.version_option(version=__version__)
def cli():
    pass


@cli.command()
@click.option('--directory', '-d')
@click.argument('profile', type=click.Path(exists=True))
def make(profile, directory=None):
    """Generate a new Workflow."""
    print('matflow.cli.make', flush=True)
    api.make_workflow(profile_path=profile, directory=directory)


@cli.command()
@click.option('--directory', '-d')
@click.argument('profile', type=click.Path(exists=True))
def go(profile, directory=None):
    """Generate and submit a new Workflow."""
    print('matflow.cli.go', flush=True)
    api.go(profile_path=profile, directory=directory)


@cli.command()
@click.option('--task-idx', '-t', type=click.INT, required=True)
@click.option('--directory', '-d', type=click.Path(exists=True))
def prepare_task(task_idx, directory=None):
    print('matflow.cli.prepare_task', flush=True)
    api.prepare_task(task_idx, directory)


@cli.command()
@click.option('--task-idx', '-t', type=click.INT, required=True)
@click.option('--directory', '-d', type=click.Path(exists=True))
def process_task(task_idx, directory=None):
    print('matflow.cli.process_task', flush=True)
    api.process_task(task_idx, directory)


@cli.command()
@click.option('--task-idx', '-t', type=click.INT, required=True)
@click.option('--element-idx', '-e', type=click.INT, required=True)
@click.option('--directory', '-d', type=click.Path(exists=True))
def run_python_task(task_idx, element_idx, directory=None):
    print('matflow.cli.run_python_task', flush=True)
    api.run_python_task(task_idx, element_idx, directory)


@cli.command()
@click.argument('schema_source_path', type=click.Path(exists=True))
def append_schema_source(schema_source_path):
    api.append_schema_source(schema_source_path)


@cli.command()
@click.argument('schema_source_path', type=click.Path(exists=True))
def prepend_schema_source(schema_source_path):
    api.prepend_schema_source(schema_source_path)


if __name__ == '__main__':
    cli()
