# Copyright 2016,  A10 Networks
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
#    under the License.from neutron.db import model_base

from nose.plugins.attrib import attr
import sqlalchemy.orm

from a10_neutron_lbaas.tests.db import test_base


@attr(db=True)
class UnitTestBase(test_base.DbTestBase):

    def setUp(self):
        super(UnitTestBase, self).setUp()

        self.Session = sqlalchemy.orm.sessionmaker(bind=self.connection)
