#   Copyright 2018 Red Hat, Inc.
#
#   Licensed under the Apache License, Version 2.0 (the "License"); you may
#   not use this file except in compliance with the License. You may obtain
#   a copy of the License at
#
#        http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
#   WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
#   License for the specific language governing permissions and limitations
#   under the License.
#
from oslo_config import cfg
from oslo_log import log as logging

from osc_lib.i18n import _
from osc_lib import utils

from tripleoclient import command
from tripleoclient import constants
from tripleoclient import utils as oooutils
from tripleoclient.v1.overcloud_deploy import DeployOvercloud
from tripleoclient.workflows import deployment
from tripleoclient.workflows import package_update

CONF = cfg.CONF
logging.register_options(CONF)
logging.setup(CONF, '')


class FFWDUpgradePrepare(DeployOvercloud):
    """Run heat stack update for overcloud nodes to refresh heat stack outputs.

       The heat stack outputs are what we use later on to generate ansible
       playbooks which deliver the ffwd upgrade workflow. This is used as the
       first step for a fast forward upgrade of your overcloud.
    """

    log = logging.getLogger(__name__ + ".FFWDUpgradePrepare")

    def get_parser(self, prog_name):
        parser = super(FFWDUpgradePrepare, self).get_parser(prog_name)
        parser.add_argument('--yes',
                            action='store_true',
                            help=_("Use --yes to skip the confirmation "
                                   "required before any ffwd-upgrade "
                                   "operation. Use this with caution! "),
                            )
        return parser

    def take_action(self, parsed_args):
        self.log.debug("take_action(%s)" % parsed_args)
        oooutils.ffwd_upgrade_operator_confirm(parsed_args.yes, self.log)

        clients = self.app.client_manager

        stack = oooutils.get_stack(clients.orchestration,
                                   parsed_args.stack)

        stack_name = stack.stack_name

        # In case of update and upgrade we need to force the
        # update_plan_only. The heat stack update is done by the
        # packag_update mistral action
        parsed_args.update_plan_only = True

        # Add the prepare environment into the args to unset noop etc
        templates_dir = (parsed_args.templates or
                         constants.TRIPLEO_HEAT_TEMPLATES)
        if not parsed_args.environment_files:
            parsed_args.environment_files = []
        parsed_args.environment_files = oooutils.prepend_environment(
            parsed_args.environment_files, templates_dir,
            constants.FFWD_UPGRADE_PREPARE_ENV)

        super(FFWDUpgradePrepare, self).take_action(parsed_args)
        package_update.update(clients, container=stack_name)
        oooutils.get_config(
            clients, container=stack_name,
            container_config='{}-config'.format(stack.stack_name))

        deployment.create_overcloudrc(container=stack_name)

        # refresh stack info and enable ssh admin for Ansible-via-Mistral
        stack = oooutils.get_stack(clients.orchestration, parsed_args.stack)
        deployment.get_hosts_and_enable_ssh_admin(
            stack,
            parsed_args.overcloud_ssh_network,
            parsed_args.overcloud_ssh_user,
            self.get_key_pair(parsed_args),
            parsed_args.overcloud_ssh_port_timeout,
            verbosity=oooutils.playbook_verbosity(self=self)
        )

        self.log.info("FFWD Upgrade Prepare on stack {0} complete.".format(
                      parsed_args.stack))


class FFWDUpgradeRun(command.Command):
    """Run fast forward upgrade ansible playbooks on Overcloud nodes

       This will run the fast_forward_upgrade_playbook.yaml ansible playbook.
       This playbook was generated when you ran the 'ffwd-upgrade prepare'
       command. Running 'ffwd-upgrade run ' is the second step in the ffwd
       upgrade workflow.
    """
    log = logging.getLogger(__name__ + ".FFWDUpgradeRun")

    def get_parser(self, prog_name):
        parser = super(FFWDUpgradeRun, self).get_parser(prog_name)
        parser.add_argument('--yes',
                            action='store_true',
                            help=_("Use --yes to skip the confirmation "
                                   "required before any ffwd-upgrade "
                                   "operation. Use this with caution! "),
                            )
        parser.add_argument('--static-inventory',
                            dest='static_inventory',
                            action="store",
                            default=None,
                            help=_('Path to an existing ansible inventory to '
                                   'use. If not specified, one will be '
                                   'generated in '
                                   '~/tripleo-ansible-inventory.yaml')
                            )
        parser.add_argument("--ssh-user",
                            dest="ssh_user",
                            action="store",
                            default="tripleo-admin",
                            help=_("DEPRECATED: Only tripleo-admin should be "
                                   "used as ssh user.")
                            )
        parser.add_argument('--stack', dest='stack',
                            help=_('Name or ID of heat stack '
                                   '(default=Env: OVERCLOUD_STACK_NAME)'),
                            default=utils.env('OVERCLOUD_STACK_NAME',
                                              default='overcloud')
                            )
        parser.add_argument('--no-workflow', dest='no_workflow',
                            action='store_true',
                            default=True,
                            help=_('This option no longer has any effect.')
                            )
        return parser

    def take_action(self, parsed_args):
        self.log.debug("take_action(%s)" % parsed_args)
        _, ansible_dir = self.get_ansible_key_and_dir(
            no_workflow=True,
            stack=parsed_args.stack,
            orchestration=self.app.client_manager.orchestration
        )
        deployment.config_download(
            log=self.log,
            clients=self.app.client_manager,
            stack=oooutils.get_stack(
                self.app.client_manager.orchestration,
                parsed_args.stack
            ),
            output_dir=ansible_dir,
            verbosity=oooutils.playbook_verbosity(self=self),
            ansible_playbook_name=constants.FFWD_UPGRADE_PLAYBOOK,
            inventory_path=oooutils.get_tripleo_ansible_inventory(
                parsed_args.static_inventory,
                parsed_args.ssh_user,
                parsed_args.stack,
                return_inventory_file_path=True
            )
        )
        self.log.info("Completed Overcloud FFWD Upgrade Run.")


class FFWDUpgradeConverge(DeployOvercloud):
    """Converge the fast-forward upgrade on Overcloud Nodes

       This is the last step for completion of a fast forward upgrade.
       The main task is updating the plan and stack to unblock future
       stack updates. For the ffwd upgrade workflow we have set and
       used the config-download Software/Structured Deployment for the
       OS::TripleO and OS::Heat resources. This unsets those back to
       their default values.
    """

    log = logging.getLogger(__name__ + ".FFWDUpgradeConverge")

    def get_parser(self, prog_name):
        parser = super(FFWDUpgradeConverge, self).get_parser(prog_name)
        parser.add_argument('--yes',
                            action='store_true',
                            help=_("Use --yes to skip the confirmation "
                                   "required before any ffwd-upgrade "
                                   "operation. Use this with caution! "),
                            )
        return parser

    def take_action(self, parsed_args):
        self.log.debug("take_action(%s)" % parsed_args)
        oooutils.ffwd_upgrade_operator_confirm(parsed_args.yes, self.log)

        # Add the converge environment into the args to unset noop etc
        templates_dir = (parsed_args.templates or
                         constants.TRIPLEO_HEAT_TEMPLATES)
        if not parsed_args.environment_files:
            parsed_args.environment_files = []
        parsed_args.environment_files = oooutils.prepend_environment(
            parsed_args.environment_files, templates_dir,
            constants.FFWD_UPGRADE_CONVERGE_ENV)

        super(FFWDUpgradeConverge, self).take_action(parsed_args)
        self.log.info("FFWD Upgrade Converge on stack {0} complete.".format(
                      parsed_args.stack))
