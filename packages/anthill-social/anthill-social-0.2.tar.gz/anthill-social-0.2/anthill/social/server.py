
from anthill.common.options import options
from anthill.common import server, database, access, sign, keyvalue

from . model.connection import ConnectionsModel
from . model.request import RequestsModel
from . model.social import SocialAPIModel
from . model.token import SocialTokensModel
from . model.group import GroupsModel
from . model.names import NamesModel
from . import handler as h
from . import options as _opts
from . import admin


class SocialServer(server.Server):
    # noinspection PyShadowingNames
    def __init__(self, db=None):
        super(SocialServer, self).__init__()

        self.db = db or database.Database(
            host=options.db_host,
            database=options.db_name,
            user=options.db_username,
            password=options.db_password)

        self.cache = keyvalue.KeyValueStorage(
            host=options.cache_host,
            port=options.cache_port,
            db=options.cache_db,
            max_connections=options.cache_max_connections)

        self.tokens = SocialTokensModel(self.db)
        self.requests = RequestsModel(self.db, self.cache)
        self.connections = ConnectionsModel(self.db, self.cache, self.requests)
        self.social = SocialAPIModel(self, self.tokens, self.connections, self.cache)
        self.groups = GroupsModel(self.db, self.requests)
        self.names = NamesModel(self.db, self.cache)

    def get_models(self):
        return [self.tokens, self.requests, self.connections, self.groups, self.names]

    def get_admin(self):
        return {
            "index": admin.RootAdminController
        }

    def get_handlers(self):
        return [
            (r"/requests", h.RequestsHandler),
            (r"/requests/incoming", h.IncomingRequestsHandler),
            (r"/requests/outgoing", h.OutgoingRequestsHandler),

            (r"/connections", h.ConnectionsHandler),
            (r"/connection/([0-9]+)/approve", h.ApproveConnectionHandler),
            (r"/connection/([0-9]+)/reject", h.RejectConnectionHandler),
            (r"/connection/([0-9]+)", h.AccountConnectionHandler),

            (r"/groups/create", h.CreateGroupHandler),
            (r"/groups/search", h.SearchGroupsHandler),
            (r"/groups/profiles", h.GroupBatchProfilesHandler),
            (r"/group/([0-9]+)/participation/(.+)/permissions", h.GroupParticipationPermissionsHandler),
            (r"/group/([0-9]+)/participation/(.+)", h.GroupParticipationHandler),
            (r"/group/([0-9]+)/join", h.GroupJoinHandler),
            (r"/group/([0-9]+)/leave", h.GroupLeaveHandler),
            (r"/group/([0-9]+)/profile", h.GroupProfileHandler),
            (r"/group/([0-9]+)/ownership", h.GroupOwnershipHandler),
            (r"/group/([0-9]+)/request", h.GroupRequestJoinHandler),
            (r"/group/([0-9]+)/invitation/accept", h.GroupAcceptInvitationHandler),
            (r"/group/([0-9]+)/invitation/reject", h.GroupRejectInvitationHandler),
            (r"/group/([0-9]+)/approve/([0-9]+)", h.GroupApproveAccountJoinHandler),
            (r"/group/([0-9]+)/reject/([0-9]+)", h.GroupRejectAccountJoinHandler),
            (r"/group/([0-9]+)/invite/([0-9]+)", h.GroupInviteAccountJoinHandler),
            (r"/group/([0-9]+)", h.GroupHandler),

            (r"/names/acquire/(.*)", h.UniqueNamesAcquireHandler),
            (r"/names/delete/(.*)", h.UniqueNamesDeleteHandler),
            (r"/names/search/(.*)", h.UniqueNamesSearchHandler)
        ]

    def get_metadata(self):
        return {
            "title": "Social",
            "description": "Manage social networks, groups and friend connections",
            "icon": "share-alt-square"
        }

    def get_internal_handler(self):
        return h.InternalHandler(self)


if __name__ == "__main__":
    stt = server.init()
    access.AccessToken.init([access.public()])
    server.start(SocialServer)
