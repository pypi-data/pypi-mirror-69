# Copyright 2019 Genymobile
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""
gmsaas entry point
"""

import sys

import click

import gmsaas
from gmsaas.cli.auth import auth
from gmsaas.cli.config import config
from gmsaas.storage.configcache import PROXY_KEY
from gmsaas.cli.recipes import recipes
from gmsaas.cli.instances import instances
from gmsaas.cli.logzip import logzip
from gmsaas.gmsaas.logger import enable_stdout, LOGGER
from gmsaas.gmsaas.proxy import setup_proxy


def get_loggable_args(args):
    """
    Return the args list to log, critical data are removed.
    """
    command = []
    command_idx = 0
    for idx, arg in enumerate(args):
        if not arg.startswith("-"):
            command.append(arg)
            command_idx = idx
            if command == ["auth", "login"] or command == ["config", "set", PROXY_KEY]:
                return args[: command_idx + 1]
    return args


@click.group()
@click.version_option(version=gmsaas.__version__)
@click.option("--verbose", "-v", is_flag=True, help="Print logs in stdout.")
@click.pass_context
def main(ctx, verbose):
    """
    Command line utility for Genymotion SaaS
    """
    if verbose:
        enable_stdout()
    LOGGER.info("==== START args: %s ====", get_loggable_args(sys.argv[1:]))
    setup_proxy()
    ctx.ensure_object(dict)


main.add_command(auth)
main.add_command(config)
main.add_command(instances)
main.add_command(recipes)
main.add_command(logzip)


if __name__ == "__main__":
    main()  # pylint: disable=no-value-for-parameter
