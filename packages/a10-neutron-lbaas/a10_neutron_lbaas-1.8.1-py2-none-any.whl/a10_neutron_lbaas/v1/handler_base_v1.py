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

from a10_neutron_lbaas import handler_base
from a10_neutron_lbaas.v1 import neutron_ops


class HandlerBaseV1(handler_base.HandlerBase):

    def __init__(self, a10_driver):
        super(HandlerBaseV1, self).__init__(a10_driver)
        self.neutron = neutron_ops.NeutronOpsV1(self)
