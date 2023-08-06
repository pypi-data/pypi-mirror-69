# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2018-2019 Fetch.AI Limited
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#
# ------------------------------------------------------------------------------

"""This package contains the behaviour for the aries_faber skill."""

import json
from typing import Dict

from aea.skills.behaviours import OneShotBehaviour

from packages.fetchai.protocols.http.message import HttpMessage
from packages.fetchai.protocols.http.serialization import HttpSerializer

HTTP_PROTOCOL_PUBLIC_ID = HttpMessage.protocol_id
DEFAULT_ADMIN_HOST = "127.0.0.1"
DEFAULT_ADMIN_PORT = 8021

ADMIN_COMMAND_STATUS = "/status"


class FaberBehaviour(OneShotBehaviour):
    """This class represents the behaviour of faber."""

    def __init__(self, **kwargs):
        """Initialize the handler."""
        self.admin_host = kwargs.pop("admin_host", DEFAULT_ADMIN_HOST)
        self.admin_port = kwargs.pop("admin_port", DEFAULT_ADMIN_PORT)

        super().__init__(**kwargs)

        self.admin_url = "http://{}:{}".format(self.admin_host, self.admin_port)

    def admin_get(self, path: str, content: Dict = None):
        # Request message & envelope
        request_http_message = HttpMessage(
            performative=HttpMessage.Performative.REQUEST,
            method="GET",
            url=self.admin_url + path,
            headers="",
            version="",
            bodyy=b"" if content is None else json.dumps(content).encode("utf-8"),
        )
        self.context.outbox.put_message(
            to=self.admin_url,
            sender=self.context.agent_address,
            protocol_id=HTTP_PROTOCOL_PUBLIC_ID,
            message=HttpSerializer().encode(request_http_message),
        )

    def setup(self) -> None:
        """
        Implement the setup.

        :return: None
        """
        pass

    def act(self) -> None:
        """
        Implement the act.

        :return: None
        """
        self.admin_get(ADMIN_COMMAND_STATUS)

    def teardown(self) -> None:
        """
        Implement the task teardown.

        :return: None
        """
        pass
