
from tornado.web import HTTPError

from anthill.common import to_int
from anthill.common.internal import InternalError
from anthill.common.social import APIError, AuthResponse
from anthill.common.handler import AuthenticatedHandler
from anthill.common.access import scoped, AccessToken, parse_scopes
from anthill.common.validate import validate, validate_value, ValidationError

from . model.request import RequestError, RequestType, NoSuchRequest
from . model.connection import ConnectionError, ConnectionsModel
from . model.social import SocialNotFound, NoFriendsFound, SocialAuthenticationRequired
from . model.group import GroupError, GroupsModel, GroupFlags, NoSuchGroup, NoSuchParticipation, GroupJoinMethod
from . model.names import NameIsBusyError, NamesModelError

import ujson


class ConnectionsHandler(AuthenticatedHandler):
    @scoped()
    async def get(self):

        profile_fields = self.get_argument("profile_fields", None)

        if profile_fields:

            try:
                profile_fields = ujson.loads(profile_fields)
                profile_fields = validate_value(profile_fields, "json_list_of_strings")
            except (KeyError, ValueError, ValidationError):
                raise HTTPError(400, "Corrupted profile_fields")

        try:
            friends = await self.application.social.list_friends(
                self.token.get(AccessToken.GAMESPACE),
                self.token.account,
                profile_fields=profile_fields)

        except SocialAuthenticationRequired as e:
            raise HTTPError(401, ujson.dumps({
                "credential": e.credential,
                "username": e.username
            }))

        except NoFriendsFound:
            raise HTTPError(404, "No connections found")

        except APIError as e:
            raise HTTPError(e.code, e.body)

        self.dumps({
            "connections": friends
        })


class IncomingRequestsHandler(AuthenticatedHandler):
    @scoped()
    async def get(self):

        requests = self.application.requests

        profile_fields = self.get_argument("profile_fields", None)

        if profile_fields:

            try:
                profile_fields = ujson.loads(profile_fields)
                profile_fields = validate_value(profile_fields, "json_list_of_strings")
            except (KeyError, ValueError, ValidationError):
                raise HTTPError(400, "Corrupted profile_fields")

        try:
            requests = await requests.list_incoming_account_requests(
                self.token.get(AccessToken.GAMESPACE),
                self.token.account, profile_fields=profile_fields)

        except RequestError as e:
            raise HTTPError(401, e.message)

        result = {
            "requests": [
                r.dump()
                for r in requests
            ]
        }

        self.dumps(result)


class RequestsHandler(AuthenticatedHandler):
    @scoped()
    async def get(self):

        requests = self.application.requests

        profile_fields = self.get_argument("profile_fields", None)

        if profile_fields:

            try:
                profile_fields = ujson.loads(profile_fields)
                profile_fields = validate_value(profile_fields, "json_list_of_strings")
            except (KeyError, ValueError, ValidationError):
                raise HTTPError(400, "Corrupted profile_fields")

        try:
            requests = await requests.list_total_account_requests(
                self.token.get(AccessToken.GAMESPACE),
                self.token.account, profile_fields=profile_fields)

        except RequestError as e:
            raise HTTPError(401, e.message)

        result = {
            "requests": [
                r.dump()
                for r in requests
            ]
        }

        self.dumps(result)


class OutgoingRequestsHandler(AuthenticatedHandler):
    @scoped()
    async def get(self):

        requests = self.application.requests

        profile_fields = self.get_argument("profile_fields", None)

        if profile_fields:

            try:
                profile_fields = ujson.loads(profile_fields)
                profile_fields = validate_value(profile_fields, "json_list_of_strings")
            except (KeyError, ValueError, ValidationError):
                raise HTTPError(400, "Corrupted profile_fields")

        try:
            requests = await requests.list_outgoing_account_requests(
                self.token.get(AccessToken.GAMESPACE),
                self.token.account, profile_fields=profile_fields)

        except RequestError as e:
            raise HTTPError(401, e.message)

        result = {
            "requests": [
                r.dump()
                for r in requests
            ]
        }

        self.dumps(result)


class AccountConnectionHandler(AuthenticatedHandler):
    @scoped()
    async def delete(self, target_account):

        gamespace = self.token.get(AccessToken.GAMESPACE)

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        try:
            await self.application.connections.delete(
                gamespace, self.token.account, target_account, notify=notify)

        except ConnectionError as e:
            raise HTTPError(e.code, e.message)

    def options(self):
        self.set_header("Access-Control-Allow-Methods", "POST,DELETE,OPTIONS")

    @scoped()
    async def post(self, target_account):

        approval = self.get_argument("approval", "true") == "true"
        gamespace = self.token.get(AccessToken.GAMESPACE)

        payload_str = self.get_argument("payload", None)
        if payload_str:
            try:
                payload = ujson.loads(payload_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "payload is corrupted")
        else:
            payload = None

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        if not approval and not self.token.has_scope(ConnectionsModel.APPROVAL_SCOPE):
            raise HTTPError(403, "Scope '{0}' is required if approval is disabled".format(
                ConnectionsModel.APPROVAL_SCOPE))

        try:
            result = await self.application.connections.request_connection(
                gamespace, self.token.account, target_account, approval=approval, notify=notify,
                payload=payload)
        except ConnectionError as e:
            raise HTTPError(e.code, e.message)

        if result:
            self.dumps(result)


class ApproveConnectionHandler(AuthenticatedHandler):
    @scoped()
    async def post(self, approve_account_id):
        key = self.get_argument("key")
        gamespace = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        try:
            await self.application.connections.approve_connection(
                gamespace, account_id, approve_account_id, key, notify=notify)
        except ConnectionError as e:
            raise HTTPError(e.code, e.message)


class RejectConnectionHandler(AuthenticatedHandler):
    @scoped()
    async def post(self, reject_account_id):

        key = self.get_argument("key")
        gamespace = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        try:
            await self.application.connections.reject_connection(
                gamespace, account_id, reject_account_id, key, notify=notify)
        except ConnectionError as e:
            raise HTTPError(500, e.message)


class InternalHandler(object):
    def __init__(self, application):
        self.application = application

    async def acquire_name(self, gamespace, account, kind, name):
        names = self.application.names

        try:
            await names.acquire_name(gamespace, account, kind, name)
        except NameIsBusyError:
            raise InternalError(409, "Name is busy")
        except NamesModelError as e:
            raise InternalError(e.code, e.message)

        return "OK"

    async def check_name(self, gamespace, kind, name):
        names = self.application.names

        try:
            account_id = await names.check_name(gamespace, kind, name)
        except NamesModelError as e:
            raise InternalError(e.code, e.message)

        return account_id

    async def release_name(self, gamespace, account, kind):
        names = self.application.names

        try:
            released = await names.release_name(gamespace, account, kind)
        except NamesModelError as e:
            raise InternalError(e.code, e.message)
        return released

    async def attach_account(self, gamespace, credential, username, account, env=None, fetch_profile=True):
        await self.application.tokens.attach(
            gamespace,
            credential,
            username,
            account)

        if fetch_profile:
            try:
                api = self.application.social.api(credential)
            except SocialNotFound:
                raise InternalError(404, "No such credential: '{0}'.".format(credential))

            try:
                result = await api.get_social_profile(gamespace, username, account, env=env)
            except APIError as e:
                raise InternalError(e.code, str(e))
            else:
                return result
        else:
            return "OK"

    async def import_social(self, gamespace, username, credential, auth):

        if not isinstance(auth, dict):
            raise InternalError(400, "Auth should be a dict")

        auth = AuthResponse(**auth)

        social = self.application.social
        try:
            api = social.api(credential)
        except SocialNotFound:
            raise InternalError(404, "No such credential: '{0}'.".format(credential))

        try:
            result = await api.import_social(gamespace, username, auth)
        except APIError as e:
            raise HTTPError(e.code, str(e))
        else:
            return result

    async def get_connections(self, gamespace, account_id, profile_fields):

        connections_data = self.application.connections

        try:
            connections = await connections_data.get_connections_profiles(
                gamespace, account_id, profile_fields)
        except ConnectionError as e:
            raise HTTPError(e.code, e.message)

        return connections

    async def get_group(self, gamespace, group_id):

        try:
            group, participants = await self.application.groups.get_group_with_participants(
                gamespace, group_id)
        except NoSuchGroup:
            raise InternalError(404, "No such group")
        except GroupError as e:
            raise InternalError(e.code, e.message)

        group_out = {
            "group_id": group.group_id,
            "profile": group.profile,
            "join_method": str(group.join_method),
            "free_members": group.free_members,
            "owner": str(group.owner)
        }

        if group.name:
            group_out["name"] = group.name

        result = {
            "group": group_out,
            "participants": {
                int(participant.account): {
                    "role": participant.role,
                    "permissions": participant.permissions,
                    "profile": participant.profile
                }
                for participant in participants
            }
        }

        if GroupFlags.MESSAGE_SUPPORT in group.flags:
            result["message"] = {
                "recipient_class": GroupsModel.GROUP_CLASS,
                "recipient": str(group_id),
            }

        return result

    @validate(gamespace="int", group_id="int", profile="json_dict", path="json_list_of_strings", merge="bool")
    async def update_group_profile(self, gamespace, group_id, profile, path=None, merge=True):

        try:
            result = await self.application.groups.update_group_no_check(
                gamespace, group_id, profile, path=path, merge=merge)
        except GroupError as e:
            raise InternalError(e.code, e.message)

        return result

    @validate(gamespace="int", group_profiles="json_dict", path="json_list_of_strings", merge="bool", synced="bool")
    async def update_group_profiles(self, gamespace, group_profiles, path=None, merge=True, synced=False):

        try:
            if synced:
                result = await self.application.groups.update_groups(
                    gamespace, group_profiles, merge=merge)
            else:
                result = await self.application.groups.update_groups_no_check(
                    gamespace, group_profiles, path=path, merge=merge)
        except GroupError as e:
            raise InternalError(e.code, e.message)

        return result


class CreateGroupHandler(AuthenticatedHandler):
    @scoped(scopes=["group_create"])
    async def post(self):

        join_method_str = self.get_argument("join_method", GroupJoinMethod.FREE)
        max_members = self.get_argument("max_members", GroupsModel.DEFAULT_MAX_MEMBERS)
        group_name = self.get_argument("name", None)

        if join_method_str not in GroupJoinMethod.ALL:
            raise HTTPError(400, "Invalid join method")

        join_method = GroupJoinMethod(join_method_str)

        try:
            group_profile = ujson.loads(self.get_argument("group_profile", "{}"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        try:
            participation_profile = ujson.loads(self.get_argument("participation_profile", "{}"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        group_messages = self.get_argument("group_messages", "true") == "true"

        flags = GroupFlags()

        if group_messages:
            flags.set(GroupFlags.MESSAGE_SUPPORT)

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        try:
            group_id = await self.application.groups.create_group(
                gamespace, group_profile, flags, join_method, max_members,
                account, participation_profile, group_name=group_name)
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "id": group_id
        })


class SearchGroupsHandler(AuthenticatedHandler):
    @scoped()
    async def get(self):

        query = self.get_argument("query")

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        try:
            groups = await self.application.groups.search_groups(gamespace, query)
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "groups": [
                {
                    "group": {
                        "group_id": str(group.group_id),
                        "profile": group.profile,
                        "join_method": str(group.join_method),
                        "free_members": int(group.free_members),
                        "owner": str(group.owner),
                        "name": group.name
                    }
                } for group in groups
            ]
        })


class UniqueNamesAcquireHandler(AuthenticatedHandler):
    @scoped(scopes=["names_write"])
    async def post(self, kind):
        name = self.get_argument("name")

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account
        names = self.application.names

        try:
            await names.acquire_name(gamespace, account_id, kind, name)
        except NameIsBusyError:
            raise HTTPError(409, "Name is busy")
        except NamesModelError as e:
            raise HTTPError(e.code, e.message)


class UniqueNamesSearchHandler(AuthenticatedHandler):
    @scoped(scopes=["names"])
    async def get(self, kind):
        query = self.get_argument("query")

        gamespace = self.token.get(AccessToken.GAMESPACE)
        names = self.application.names

        profile_fields = self.get_argument("profile_fields", None)

        if profile_fields:

            try:
                profile_fields = ujson.loads(profile_fields)
                profile_fields = validate_value(profile_fields, "json_list_of_strings")
            except (KeyError, ValueError, ValidationError):
                raise HTTPError(400, "Corrupted profile_fields")

        try:
            names = await names.search_names(
                gamespace, kind, query,
                profile_fields=profile_fields)
        except NamesModelError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "names": [
                {
                    "account": name.account_id,
                    "name": name.name,
                    "profile": name.profile
                }
                for name in names
            ]
        })


class UniqueNamesDeleteHandler(AuthenticatedHandler):
    @scoped(scopes=["names_write"])
    async def delete(self, kind):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account
        names = self.application.names

        try:
            await names.release_name(gamespace, account_id, kind)
        except NamesModelError as e:
            raise HTTPError(e.code, e.message)


class GroupHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def get(self, group_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account

        try:
            group, participants, my_participation = await self.application.groups.get_group_with_participants(
                gamespace, group_id, account_id)
        except NoSuchGroup as e:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        group_out = {
            "group_id": group.group_id,
            "profile": group.profile,
            "join_method": str(group.join_method),
            "free_members": group.free_members,
            "owner": str(group.owner)
        }

        if group.name:
            group_out["name"] = group.name

        result = {
            "group": group_out,
            "participants": {
                participant.account: {
                    "role": participant.role,
                    "permissions": participant.permissions,
                    "profile": participant.profile
                }
                for participant in participants
            }
        }

        if my_participation:
            result["me"] = {
                "role": my_participation.role,
                "permissions": my_participation.permissions,
                "profile": my_participation.profile
            }

            if GroupFlags.MESSAGE_SUPPORT in group.flags:
                result["message"] = {
                    "recipient_class": GroupsModel.GROUP_CLASS,
                    "recipient": str(group_id),
                }

        self.dumps(result)

    @scoped(scopes=["group", "group_write"])
    async def post(self, group_id):

        new_name = self.get_argument("name", None)
        new_join_method_str = self.get_argument("join_method", None)

        if new_join_method_str:
            if new_join_method_str not in GroupJoinMethod.ALL:
                raise HTTPError(400, "Bad 'join_method'")

            new_join_method = GroupJoinMethod(new_join_method_str)
        else:
            new_join_method = None

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")
        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        try:
            await self.application.groups.update_group_summary(
                gamespace, group_id, account, name=new_name, join_method=new_join_method,
                notify=notify, authoritative=authoritative)
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupBatchProfilesHandler(AuthenticatedHandler):
    @scoped(scopes=["group_batch"])
    async def get(self):

        try:
            group_ids = ujson.loads(self.get_argument("group_ids"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Corrupted group ID's")

        gamespace = self.token.get(AccessToken.GAMESPACE)

        try:
            groups = await self.application.groups.list_groups(gamespace, group_ids)
        except NoSuchGroup as e:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        groups_out = {}

        for group in groups:
            group_out = {
                "group_id": group.group_id,
                "profile": group.profile,
                "join_method": str(group.join_method),
                "free_members": group.free_members,
                "owner": str(group.owner),
            }

            if group.name:
                group_out["name"] = group.name

            groups_out[str(group.group_id)] = group_out

        result = {
            "groups": groups_out
        }

        self.dumps(result)

    @scoped(scopes=["group_write", "group_batch"])
    async def post(self):

        try:
            group_profiles = ujson.loads(self.get_argument("profiles"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        merge = self.get_argument("merge", "true") == "true"
        gamespace = self.token.get(AccessToken.GAMESPACE)

        try:
            result = await self.application.groups.update_groups(
                gamespace, group_profiles, merge=merge)
        except NoSuchParticipation:
            raise HTTPError(406, "This account does not participate this group.")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "groups": {
                group_id: {
                    "profile": group_profile
                }
                for group_id, group_profile in result.items()
            }
        })


class GroupProfileHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def get(self, group_id):

        account_id = self.token.account
        gamespace = self.token.get(AccessToken.GAMESPACE)

        try:
            group = await self.application.groups.get_group(gamespace, group_id)
        except NoSuchGroup as e:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        try:
            participant = await self.application.groups.has_group_participation(gamespace, group_id, account_id)
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        group_out = {
            "group_id": group.group_id,
            "profile": group.profile,
            "join_method": str(group.join_method),
            "free_members": group.free_members,
            "owner": str(group.owner),
        }

        if group.name:
            group_out["name"] = group.name

        result = {
            "group": group_out,
            "participant": participant
        }

        self.dumps(result)

    @scoped(scopes=["group", "group_write"])
    async def post(self, group_id):

        try:
            group_profile = ujson.loads(self.get_argument("profile"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")
        merge = self.get_argument("merge", "true") == "true"
        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        try:
            result = await self.application.groups.update_group(
                gamespace, group_id, account, group_profile, merge=merge,
                notify=notify, authoritative=authoritative)
        except NoSuchParticipation:
            raise HTTPError(406, "This account does not participate this group.")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "group": {
                "profile": result
            }
        })


class GroupJoinHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        try:
            participation_profile = ujson.loads(self.get_argument("participation_profile", "{}"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.join_group(
                gamespace, group_id, account,
                participation_profile, notify=notify,
                authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupAcceptInvitationHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account
        key = self.get_argument("key")

        try:
            participation_profile = ujson.loads(self.get_argument("participation_profile", "{}"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.accept_group_invitation(
                gamespace, group_id, account,
                participation_profile, key=key,
                notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupRejectInvitationHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account
        key = self.get_argument("key")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.reject_group_invitation(
                gamespace, group_id, account, key=key,
                notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupLeaveHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.leave_group(
                gamespace, group_id, account, notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupOwnershipHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id):

        account_transfer_to = self.get_argument("account_transfer_to")
        account_my_role = self.get_argument("my_role", 0)

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.transfer_ownership(
                gamespace, group_id, account, account_transfer_to,
                account_my_role,
                notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupRequestJoinHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        account = self.token.account

        try:
            participation_profile = ujson.loads(self.get_argument("participation_profile", "{}"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            key = await self.application.groups.join_group_request(
                gamespace, group_id, account, participation_profile,
                notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "key": key
        })


class GroupInviteAccountJoinHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id, invite_account):

        gamespace_id = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account
        role = self.get_argument("role")

        try:
            permissions = ujson.loads(self.get_argument("permissions"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Permissions json is corrupted")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            key = await self.application.groups.invite_to_group(
                gamespace_id, group_id, account_id, invite_account,
                role, permissions, notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except NoSuchParticipation:
            raise HTTPError(406, "You are not a member of this group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "key": key
        })


class GroupApproveAccountJoinHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id, approve_account):

        gamespace_id = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account

        role = to_int(self.get_argument("role"))
        key = self.get_argument("key")

        try:
            permissions = ujson.loads(self.get_argument("permissions"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Permissions json is corrupted")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.approve_join_group(
                gamespace_id, group_id, account_id, approve_account,
                role, key, permissions, notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except NoSuchRequest:
            raise HTTPError(404, "No such request")
        except NoSuchParticipation:
            raise HTTPError(406, "You are not a member of this group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupRejectAccountJoinHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id, reject_account):

        gamespace_id = self.token.get(AccessToken.GAMESPACE)
        account_id = self.token.account

        key = self.get_argument("key")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.reject_join_group(
                gamespace_id, group_id, account_id, reject_account,
                key, notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except NoSuchRequest:
            raise HTTPError(404, "No such request")
        except NoSuchParticipation:
            raise HTTPError(406, "You are not a member of this group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupParticipationHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def get(self, group_id, account_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)

        if account_id == "me":
            account_id = self.token.account

        try:
            owner = await self.application.groups.is_group_owner(
                gamespace, group_id, account_id)
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        try:
            participation = await self.application.groups.get_group_participation(
                gamespace, group_id, account_id)
        except NoSuchParticipation as e:
            raise HTTPError(404, "Player is not participating this group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)

        self.dumps({
            "participation": {
                "profile": participation.profile,
                "role": participation.role,
                "permissions": participation.permissions
            },
            "owner": owner
        })

    @scoped(scopes=["group"])
    async def post(self, group_id, account_id):

        if account_id == "me":
            account_id = self.token.account
        else:
            account_id = to_int(account_id)

        try:
            participation_profile = ujson.loads(self.get_argument("profile"))
        except (KeyError, ValueError):
            raise HTTPError(400, "Profile is corrupted")

        gamespace = self.token.get(AccessToken.GAMESPACE)
        my_account = self.token.account

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")
        merge = self.get_argument("merge", "true") == "true"

        try:
            result = await self.application.groups.update_group_participation(
                gamespace, group_id, my_account, account_id, participation_profile, merge=merge,
                notify=notify, authoritative=authoritative)
        except NoSuchParticipation:
            raise HTTPError(404, "Player is not participating this group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)
        else:
            self.dumps({
                "profile": result
            })

    @scoped(scopes=["group"])
    async def delete(self, group_id, account_id):

        gamespace = self.token.get(AccessToken.GAMESPACE)
        my_account = self.token.account

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        try:
            await self.application.groups.kick_from_group(
                gamespace, group_id, my_account, account_id,
                notify=notify, authoritative=authoritative)
        except NoSuchParticipation:
            raise HTTPError(404, "Player is not participating this group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)


class GroupParticipationPermissionsHandler(AuthenticatedHandler):
    @scoped(scopes=["group"])
    async def post(self, group_id, account_id):

        if account_id == "me":
            account_id = self.token.account
        else:
            account_id = to_int(account_id)

        try:
            permissions = validate_value(ujson.loads(self.get_argument("permissions")), "json_list_of_str_name")
        except (KeyError, ValueError, ValidationError):
            raise HTTPError(400, "Permissions json is corrupted")

        notify_str = self.get_argument("notify", None)
        if notify_str:
            try:
                notify = ujson.loads(notify_str)
            except (KeyError, ValueError):
                raise HTTPError(400, "Notify is corrupted")
        else:
            notify = None

        authoritative = self.token.has_scope("message_authoritative")

        target_role = to_int(self.get_argument("role"))

        gamespace = self.token.get(AccessToken.GAMESPACE)
        my_account = self.token.account

        try:
            await self.application.groups.update_group_participation_permissions(
                gamespace, group_id, my_account, account_id, target_role, permissions,
                notify=notify, authoritative=authoritative)
        except NoSuchGroup:
            raise HTTPError(404, "No such group")
        except NoSuchParticipation:
            raise HTTPError(406, "Player is not participating this group")
        except GroupError as e:
            raise HTTPError(e.code, e.message)
