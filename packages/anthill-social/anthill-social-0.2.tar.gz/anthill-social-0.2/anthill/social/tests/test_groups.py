
from tornado.gen import multi
from tornado.testing import gen_test

from .. server import SocialServer
from .. model.group import GroupFlags, GroupJoinMethod, GroupError, GroupsModel
from .. model.request import NoSuchRequest

from anthill.common import testing
from .. import options as _opts


class GroupsTestCase(testing.ServerTestCase):
    GAMESPACE_ID = 1
    ACCOUNT_A = 1
    ACCOUNT_B = 2
    ACCOUNT_C = 3
    ACCOUNT_D = 4

    @classmethod
    def need_test_db(cls):
        return True

    @classmethod
    def get_server_instance(cls, db=None):
        return SocialServer(db)

    @gen_test
    async def test_group_create(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {})

        self.assertGreater(group_id, 0, "New group ID must be positive")

    @gen_test
    async def test_free_join(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        members = await self.application.groups.list_group_participants(GroupsTestCase.GAMESPACE_ID, group_id)

        self.assertEquals(len(members), 1, "Group should have one member from scratch")
        self.assertEquals(members[0].account, GroupsTestCase.ACCOUNT_A, "Member should be ACCOUNT_A")
        self.assertEquals(members[0].role, GroupsModel.MAXIMUM_ROLE, "Member role should be max")

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_B, {"test": "b"})

        members = await self.application.groups.list_group_participants(GroupsTestCase.GAMESPACE_ID, group_id)

        members = {
            member.account: member
            for member in members
        }

        self.assertEquals(len(members), 2, "After group join there should be two members")
        self.assertEquals(members[GroupsTestCase.ACCOUNT_A].profile, {"test": "a"})
        self.assertEquals(members[GroupsTestCase.ACCOUNT_B].profile, {"test": "b"})
        self.assertEquals(members[GroupsTestCase.ACCOUNT_B].role, GroupsModel.MINIMUM_ROLE,
                          "Free member role should be min")

    @gen_test
    async def test_same_join(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {})

        members = await self.application.groups.list_group_participants(GroupsTestCase.GAMESPACE_ID, group_id)
        self.assertEquals(len(members), 1, "Group should have one member from scratch")
        self.assertEquals(members[0].account, GroupsTestCase.ACCOUNT_A, "Member should be ACCOUNT_A")

        with self.assertRaises(GroupError) as e:
            await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                     GroupsTestCase.ACCOUNT_A, {"test": "b"})

        self.assertEqual(e.exception.code, 409)

        members = await self.application.groups.list_group_participants(GroupsTestCase.GAMESPACE_ID, group_id)
        self.assertEquals(len(members), 1, "Group should have one member from scratch")
        self.assertEquals(members[0].account, GroupsTestCase.ACCOUNT_A, "Member should be ACCOUNT_A")

    @gen_test
    async def test_join_limit(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 2, GroupsTestCase.ACCOUNT_A, {})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_B, {"test": "a"})

        with self.assertRaises(GroupError) as e:
            await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                     GroupsTestCase.ACCOUNT_C, {"test": "b"})

    @gen_test
    async def test_concurrent_group_profile(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {"value": 1}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        await multi([self.application.groups.update_group(
            GroupsTestCase.GAMESPACE_ID, group_id,
            GroupsTestCase.ACCOUNT_A, {"value": {"@func": "++", "@value": 1}}
        ) for x in range(0, 10)])

        updated_group = await self.application.groups.get_group(GroupsTestCase.GAMESPACE_ID, group_id)

        self.assertEquals(updated_group.profile, {"value": 11})

    @gen_test
    async def test_concurrent_group_participation_profile(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"value": 100})

        await multi([self.application.groups.update_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_A,
            {"value": {"@func": "--", "@value": 1}}
        ) for x in range(0, 10)])

        updated_group_participation = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id,
            GroupsTestCase.ACCOUNT_A)

        self.assertEquals(updated_group_participation.profile, {"value": 90})

    @gen_test
    async def test_roles(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_B, {"test": "b"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_C, {"test": "c"})

        # as an owner I should be able to do that
        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_C,
            1000, [])

        # downgrade own roles
        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_C,
            500, [])

        # now try to push them back up
        with self.assertRaises(GroupError):
            await self.application.groups.update_group_participation_permissions(
                GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_C,
                1000, [])

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_B,
            200, [])

        with self.assertRaises(GroupError):
            await self.application.groups.update_group_participation_permissions(
                GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B, GroupsTestCase.ACCOUNT_A,
                100, [])

    @gen_test
    async def test_owner(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_A,
            999999999, [])

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_A,
            0, [])

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_A,
            5000, ["root"])

        updated_group_participation = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A)

        self.assertEqual(updated_group_participation.permissions, {"root"},
                         "Permissions of account C should be root")
        self.assertEqual(updated_group_participation.role, 5000, "Role should be 5000")

    @gen_test
    async def test_ownership(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_B, {"test": "b"})

        with (self.assertRaises(GroupError)) as e:
            await self.application.groups.leave_group(GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A)
        self.assertEqual(e.exception.code, 409)

        with (self.assertRaises(GroupError)) as e:
            await self.application.groups.transfer_ownership(GroupsTestCase.GAMESPACE_ID, group_id,
                                                             GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_C)
        self.assertEqual(e.exception.code, 406)

        await self.application.groups.transfer_ownership(GroupsTestCase.GAMESPACE_ID, group_id,
                                                         GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_B)
        await self.application.groups.leave_group(GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A)

    @gen_test
    async def test_roles_permissions(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_B, {"test": "b"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_C, {"test": "c"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_D, {"test": "d"})

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_B,
            200, ["cat", "dog", "cow"])

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B, GroupsTestCase.ACCOUNT_C,
            199, ["cow", "cat", "fox"])

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_D,
            198, ["cat", "chicken", "pig"])

        updated_group_participation = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C)

        self.assertEqual(updated_group_participation.permissions, {"cat", "cow"},
                         "Permissions of account C should be cat,cow")

        updated_group_participation = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_D)

        self.assertEqual(updated_group_participation.permissions, {"cat"},
                         "Permissions of account D should be cat")

    @gen_test
    async def test_kick(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.FREE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_B, {"test": "b"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_C, {"test": "c"})

        await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                 GroupsTestCase.ACCOUNT_D, {"test": "d"})

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_B,
            500, [])

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_C,
            400, [GroupsModel.PERMISSION_KICK])

        await self.application.groups.update_group_participation_permissions(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_D,
            300, [])

        # kick an owner
        with self.assertRaises(GroupError) as e:
            await self.application.groups.kick_from_group(
                GroupsTestCase.GAMESPACE_ID, group_id,
                GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_A)

        self.assertEqual(e.exception.code, 406, "Should be 'You cannot kick an owner'")

        # kick higher role
        with self.assertRaises(GroupError) as e:
            await self.application.groups.kick_from_group(
                GroupsTestCase.GAMESPACE_ID, group_id,
                GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_B)

        self.assertEqual(e.exception.code, 406, "Should be'You cannot kick a player with a higher role'")

        # kick with no permissions to
        with self.assertRaises(GroupError) as e:
            await self.application.groups.kick_from_group(
                GroupsTestCase.GAMESPACE_ID, group_id,
                GroupsTestCase.ACCOUNT_B, GroupsTestCase.ACCOUNT_C)

        self.assertEqual(e.exception.code, 406, "Should be 'You have no permission to kick'")

        # should kick just fine
        await self.application.groups.kick_from_group(
            GroupsTestCase.GAMESPACE_ID, group_id,
            GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_D)

        # kick being owner
        await self.application.groups.kick_from_group(
            GroupsTestCase.GAMESPACE_ID, group_id,
            GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_C)

    @gen_test
    async def test_approve(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.APPROVE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        # free join to approve-based group is prohibited
        with (self.assertRaises(GroupError)) as e:
            await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                     GroupsTestCase.ACCOUNT_B, {"test": "b"})

        self.assertEqual(e.exception.code, 409)

        key_b = await self.application.groups.join_group_request(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B, {"bbb": 555})
        key_c = await self.application.groups.join_group_request(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C, {"ccc": 666})
        key_d = await self.application.groups.join_group_request(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_D, {"ddd": 777})

        await self.application.groups.approve_join_group(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_B,
            900, key_b, ["test"])

        # give account C a permission to approve other requests
        await self.application.groups.approve_join_group(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_C,
            950, key_c, [GroupsModel.PERMISSION_REQUEST_APPROVAL])

        # approve by B who has no such permission
        with self.assertRaises(GroupError) as e:
            await self.application.groups.approve_join_group(
                GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B, GroupsTestCase.ACCOUNT_D,
                800, key_d, [])

        self.assertEqual(e.exception.code, 406, "Should be 'You have no permission to approve items'")

        # approve by C but raise the role more than us
        with self.assertRaises(GroupError) as e:
            await self.application.groups.approve_join_group(
                GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_D,
                960, key_d, [])

        self.assertEqual(e.exception.code, 409, "Should be 'Approved role cannot be higher than your role'")

        # do the actual approval
        await self.application.groups.approve_join_group(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C, GroupsTestCase.ACCOUNT_D,
            940, key_d, [])

        updated_group_participation_b = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B)
        updated_group_participation_c = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C)
        updated_group_participation_d = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_D)

        self.assertEquals(updated_group_participation_b.role, 900)
        self.assertEquals(updated_group_participation_b.profile, {"bbb": 555})
        self.assertEquals(updated_group_participation_c.role, 950)
        self.assertEquals(updated_group_participation_c.profile, {"ccc": 666})
        self.assertEquals(updated_group_participation_d.role, 940)
        self.assertEquals(updated_group_participation_d.profile, {"ddd": 777})

        # use same key twice
        with (self.assertRaises(NoSuchRequest)):
            await self.application.groups.approve_join_group(
                GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A, GroupsTestCase.ACCOUNT_B,
                950, key_b, ["test"])

    @gen_test
    async def test_invite(self):
        group_id = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.INVITE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"})

        # free join to invite-based group is prohibited
        with (self.assertRaises(GroupError)) as e:
            await self.application.groups.join_group(GroupsTestCase.GAMESPACE_ID, group_id,
                                                     GroupsTestCase.ACCOUNT_B, {"test": "b"})

        self.assertEqual(e.exception.code, 409)

        key_b = await self.application.groups.invite_to_group(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A,
            GroupsTestCase.ACCOUNT_B, 500, [])

        key_c = await self.application.groups.invite_to_group(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_A,
            GroupsTestCase.ACCOUNT_C, 600, [GroupsModel.PERMISSION_SEND_INVITE])

        await self.application.groups.accept_group_invitation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B, {"b": True}, key_b)

        await self.application.groups.accept_group_invitation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C, {"c": True}, key_c)

        updated_group_participation_b = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B)

        self.assertEquals(updated_group_participation_b.role, 500)
        self.assertEquals(updated_group_participation_b.profile, {"b": True})

        updated_group_participation_c = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C)

        self.assertEquals(updated_group_participation_c.role, 600)
        self.assertEquals(updated_group_participation_c.profile, {"c": True})

        with (self.assertRaises(GroupError)) as e:
            await self.application.groups.invite_to_group(
                GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_B,
                GroupsTestCase.ACCOUNT_D, 400, [])

        self.assertEqual(e.exception.code, 406, "Should be 'You have no permission to send invites'")

        key_d = await self.application.groups.invite_to_group(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_C,
            GroupsTestCase.ACCOUNT_D, 400, [])

        # use wrong key
        with (self.assertRaises(GroupError)) as e:
            await self.application.groups.accept_group_invitation(
                GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_D, {"d": False}, key_c)

        self.assertEqual(e.exception.code, 410, "Should be 'No such invite request'")

        await self.application.groups.accept_group_invitation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_D, {"d": False}, key_d)

        updated_group_participation_d = await self.application.groups.get_group_participation(
            GroupsTestCase.GAMESPACE_ID, group_id, GroupsTestCase.ACCOUNT_D)

        self.assertEquals(updated_group_participation_d.role, 400)
        self.assertEquals(updated_group_participation_d.profile, {"d": False})

    @gen_test
    async def test_search(self):
        group_a = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.INVITE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"},
            group_name="Lorem ipsum dolor sit amet, consectetur adipiscing elit, including same text at the end!")

        group_b = await self.application.groups.create_group(
            GroupsTestCase.GAMESPACE_ID, {}, GroupFlags([]),
            GroupJoinMethod(GroupJoinMethod.INVITE), 50, GroupsTestCase.ACCOUNT_A, {"test": "a"},
            group_name="The quick brown fox jumps over the lazy dog, including same text at the end!")

        result_1 = await self.application.groups.search_groups(GroupsTestCase.GAMESPACE_ID, "quick brown fox")
        self.assertEquals(len(result_1), 1)
        self.assertEquals(result_1[0].group_id, group_b)

        result_2 = await self.application.groups.search_groups(GroupsTestCase.GAMESPACE_ID, "Lor")
        self.assertEquals(len(result_2), 1)
        self.assertEquals(result_2[0].group_id, group_a)

        result_3 = await self.application.groups.search_groups(GroupsTestCase.GAMESPACE_ID, "including same text")
        self.assertEquals(len(result_3), 2)
