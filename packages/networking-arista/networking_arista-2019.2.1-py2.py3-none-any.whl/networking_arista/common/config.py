# Copyright (c) 2013 OpenStack Foundation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
# implied.
# See the License for the specific language governing permissions and
# limitations under the License.


from oslo_config import cfg

from networking_arista._i18n import _


# Arista ML2 Mechanism driver specific configuration knobs.
#
# Following are user configurable options for Arista ML2 Mechanism
# driver. The eapi_username, eapi_password, and eapi_host are
# required options. Region Name must be the same that is used by
# Keystone service. This option is available to support multiple
# OpenStack/Neutron controllers.

ARISTA_DRIVER_OPTS = [
    cfg.StrOpt('eapi_username',
               default='',
               help=_('Username for Arista EOS. This is required field. '
                      'If not set, all communications to Arista EOS '
                      'will fail.')),
    cfg.StrOpt('eapi_password',
               default='',
               secret=True,  # do not expose value in the logs
               help=_('Password for Arista EOS. This is required field. '
                      'If not set, all communications to Arista EOS '
                      'will fail.')),
    cfg.StrOpt('eapi_host',
               default='',
               help=_('Arista EOS IP address. This is required field. '
                      'If not set, all communications to Arista EOS '
                      'will fail.'
                      'If CVX has been deployed in a highly available (HA) '
                      'cluster, specify each instance IP separated by '
                      'a comma.')),
    cfg.BoolOpt('use_fqdn',
                default=True,
                help=_('Defines if hostnames are sent to Arista EOS as FQDNs '
                       '("node1.domain.com") or as short names ("node1"). '
                       'This is optional. If not set, a value of "True" '
                       'is assumed.')),
    cfg.IntOpt('sync_interval',
               default=30,
               help=_('Sync interval in seconds between Neutron plugin and '
                      'EOS. This interval defines how often the '
                      'synchronization is performed. This is an optional '
                      'field. If not set, a value of 30 seconds is '
                      'assumed.')),
    cfg.IntOpt('conn_timeout',
               default=60,
               help=_('Connection timeout interval in seconds. This interval '
                      'defines how long an API request from the driver to '
                      'CVX waits before timing out. If not set, a value of 60 '
                      'seconds is assumed.')),
    cfg.StrOpt('region_name',
               default='RegionOne',
               help=_('Defines Region Name that is assigned to this OpenStack '
                      'Controller. This is useful when multiple '
                      'OpenStack/Neutron controllers are managing the same '
                      'Arista HW clusters. Note that this name must match '
                      'with the region name registered (or known) to keystone '
                      'service. Authentication with Keystone is performed by '
                      'EOS. This is optional. If not set, a value of '
                      '"RegionOne" is assumed.')),
    cfg.BoolOpt('sec_group_support',
                default=False,
                help=_('Specifies if the Security Groups needs to deployed '
                       'for baremetal deployments. If this flag is set to '
                       'True, this means switch_info(see below) must be '
                       'defined. If this flag is not defined, it is assumed '
                       'to be False')),
    cfg.ListOpt('switch_info',
                default=[],
                help=_('This is a comma separated list of Arista switches '
                       'where security groups (i.e. ACLs) need to be '
                       'applied. Each string has three values separated '
                       'by : in the follow format '
                       '<switch_ip>:<username>:<password>, ...\n'
                       'For Example: 172.13.23.55:admin:admin, '
                       '172.13.23.56:admin:admin, ...\n'
                       'This is required if sec_group_support is set to '
                       '"True"')),
    cfg.ListOpt('managed_physnets',
                default=[],
                help=_('This is a comma separated list of physical networks '
                       'which are managed by Arista switches. '
                       'This list will be used by the Arista ML2 plugin '
                       'to make the decision if it can participate in binding '
                       'or updating a port.\n'
                       'For Example: '
                       'managed_physnets = arista_network')),
    cfg.BoolOpt('manage_fabric',
                default=False,
                help=_('Specifies whether the Arista ML2 plugin should bind '
                       'ports to vxlan fabric segments and dynamically '
                       'allocate vlan segments based on the host to connect '
                       'the port to the vxlan fabric')),
]


""" Arista L3 Service Plugin specific configuration knobs.

Following are user configurable options for Arista L3 plugin
driver. The eapi_username, eapi_password, and eapi_host are
required options.
"""

ARISTA_L3_PLUGIN = [
    cfg.StrOpt('primary_l3_host_username',
               default='',
               help=_('Username for Arista EOS. This is required field. '
                      'If not set, all communications to Arista EOS '
                      'will fail')),
    cfg.StrOpt('primary_l3_host_password',
               default='',
               secret=True,  # do not expose value in the logs
               help=_('Password for Arista EOS. This is required field. '
                      'If not set, all communications to Arista EOS '
                      'will fail')),
    cfg.StrOpt('primary_l3_host',
               default='',
               help=_('Arista EOS IP address. This is required field. '
                      'If not set, all communications to Arista EOS '
                      'will fail')),
    cfg.StrOpt('secondary_l3_host',
               default='',
               help=_('Arista EOS IP address for second Switch MLAGed with '
                      'the first one. This is an optional field, however, if '
                      'mlag_config flag is set, then this is required. '
                      'If not set, all communications to Arista EOS '
                      'will fail')),
    cfg.IntOpt('conn_timeout',
               default=10,
               help=_('Connection timeout interval in seconds. This interval '
                      'defines how long an EAPI request from the driver to '
                      'EOS waits before timing out. If not set, a value of 10 '
                      'seconds is assumed.')),
    cfg.BoolOpt('mlag_config',
                default=False,
                help=_('This flag is used to indicate if Arista Switches are '
                       'configured in MLAG mode. If yes, all L3 config '
                       'is pushed to both the switches automatically. '
                       'If this flag is set to True, ensure to specify IP '
                       'addresses of both switches. '
                       'This is optional. If not set, a value of "False" '
                       'is assumed.')),
    cfg.BoolOpt('use_vrf',
                default=False,
                help=_('A "True" value for this flag indicates to create a '
                       'router in VRF. If not set, all routers are created '
                       'in default VRF. '
                       'This is optional. If not set, a value of "False" '
                       'is assumed.')),
    cfg.BoolOpt('vrf_default_route',
                default=False,
                help=_('A "True" value for this flag indicates to create a '
                       'default route in VRF. This setting is valid only '
                       'when used with the use_vrf=True. If not set, '
                       'all routers are created without default gateway.'
                       'This is optional. If not set, a value of "False" '
                       'is assumed.')),
    cfg.IntOpt('l3_sync_interval',
               default=180,
               help=_('Sync interval in seconds between L3 Service plugin '
                      'and EOS. This interval defines how often the '
                      'synchronization is performed. This is an optional '
                      'field. If not set, a value of 180 seconds is assumed')),
    cfg.BoolOpt('enable_cleanup',
                default=False,
                help=_('Toggle to enable cleanup of unused VLANs, VRFs and '
                       'SVIs on EOS L3 hosts in the sync worker. If enabled, '
                       'ensure that all non-openstack VLANs are added to '
                       'protected_vlans to ensure that they are not removed '
                       'by the sync worker. If not set, a value of "False" '
                       'is assumed.')),
    cfg.ListOpt('protected_vlans',
                default=[],
                help=_('List of vlans or <vlan_min>:<vlan_max> ranges that '
                       'should never be cleaned up by the L3 sync worker. '
                       'This applies to both VLANs and SVIs')),
]


ARISTA_TYPE_DRIVER_OPTS = [
    cfg.IntOpt('sync_interval',
               default=10,
               help=_('VLAN Sync interval in seconds between Neutron plugin '
                      'and EOS. This interval defines how often the VLAN '
                      'synchronization is performed. This is an optional '
                      'field. If not set, a value of 10 seconds is '
                      'assumed.')),
]

cfg.CONF.register_opts(ARISTA_L3_PLUGIN, "l3_arista")

cfg.CONF.register_opts(ARISTA_DRIVER_OPTS, "ml2_arista")

cfg.CONF.register_opts(ARISTA_TYPE_DRIVER_OPTS, "arista_type_driver")


def list_opts():
    return [
        ('ml2_arista',
         ARISTA_DRIVER_OPTS),
        ('l3_arista',
         ARISTA_L3_PLUGIN),
        ('arista_type_driver',
         ARISTA_TYPE_DRIVER_OPTS)
    ]
