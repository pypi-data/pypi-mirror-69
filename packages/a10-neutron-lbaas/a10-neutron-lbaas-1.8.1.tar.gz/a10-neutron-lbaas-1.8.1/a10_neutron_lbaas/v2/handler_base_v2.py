# Copyright 2014, Doug Wiegley (dougwig), A10 Networks
#
#    Licensed under the Apache License, Version 2.0 (the "License"); you may
#    not use this file except in compliance with the License. You may obtain
#    a copy of the License at
#
#         http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
#    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
#    License for the specific language governing permissions and limitations
#    under the License.

import a10_neutron_lbaas.handler_base as base
from a10_neutron_lbaas.v2 import neutron_ops

import re
from six import iteritems


class HandlerBaseV2(base.HandlerBase):
    def __init__(self, a10_driver, openstack_manager, neutron=None):
        super(HandlerBaseV2, self).__init__(a10_driver)
        self.openstack_manager = openstack_manager
        if neutron:
            self.neutron = neutron
        else:
            self.neutron = neutron_ops.NeutronOpsV2(self)

    """
    Pass in an element, it's openstack name, and a dictionary of matches.
    """
    def _get_name_matches(self, elem, os_name, redict):
        # for each key in the vport_defaults dictionary
        if not os_name or len(os_name) < 1:
            return

        for k, v in list(iteritems(redict)):
            # check to see if the regex value matches.
            v = redict[k]

            regex_str = v["regex"]
            json_merge = v["json"]
            regex = re.compile(regex_str)
            matched = regex.search(os_name)

            if matched:
                # If so, take those dictionary values and apply them to the object
                elem.update(json_merge)
                break

    def _get_config_defaults(self, c, os_name):
        rv = {}
        # Device-specific defaults have precedence over global
        self._get_name_matches(rv, os_name, self._get_expressions(c))
        return rv
