# mautrix-facebook - A Matrix-Facebook Messenger puppeting bridge
# Copyright (C) 2019 Tulir Asokan
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
from itertools import chain

from mautrix.bridge import Bridge

from .config import Config
from .db import init as init_db
from .sqlstatestore import SQLStateStore
from .user import User, init as init_user
from .portal import init as init_portal
from .puppet import Puppet, init as init_puppet
from .matrix import MatrixHandler
from .context import Context
from .version import version, linkified_version
from .web import PublicBridgeWebsite


class MessengerBridge(Bridge):
    name = "mautrix-facebook"
    module = "mautrix_facebook"
    command = "python -m mautrix-facebook"
    description = "A Matrix-Facebook Messenger puppeting bridge."
    repo_url = "https://github.com/tulir/mautrix-facebook"
    real_user_content_key = "net.maunium.facebook.puppet"
    version = version
    markdown_version = linkified_version
    config_class = Config
    matrix_class = MatrixHandler
    state_store_class = SQLStateStore

    config: Config
    public_website: PublicBridgeWebsite

    def prepare_bridge(self) -> None:
        init_db(self.db)
        context = Context(az=self.az, config=self.config, loop=self.loop, bridge=self)
        self.matrix = context.mx = MatrixHandler(context)
        self.add_startup_actions(init_user(context))
        init_portal(context)
        self.add_startup_actions(init_puppet(context))
        self._prepare_website()

    def _prepare_website(self) -> None:
        self.public_website = PublicBridgeWebsite(self.config["appservice.public.shared_secret"])
        self.az.app.add_subapp(self.config["appservice.public.prefix"], self.public_website.app)

    def prepare_shutdown(self) -> None:
        self.log.debug("Stopping puppet syncers")
        for puppet in Puppet.by_custom_mxid.values():
            puppet.stop()
        self.log.debug("Saving user sessions and stopping listeners")
        for mxid, user in User.by_mxid.items():
            user.stop_listening()
            user.save()


MessengerBridge().run()
