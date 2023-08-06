
import datetime

from anthill.common.social import APIError
from anthill.common.social.apis import GoogleAPI

from .. social import SocialAPI, SocialAuthenticationRequired
from .. token import NoSuchToken


class GoogleSocialAPI(SocialAPI, GoogleAPI):
    def __init__(self, application, tokens, cache):
        SocialAPI.__init__(self, application, tokens, "google", cache)
        GoogleAPI.__init__(self, cache)

    async def call(self, gamespace, account_id, method, *args, **kwargs):
        """
        Makes google API call.
        Validates everything, gathers tokens and then awaits `method` with all information.
        """

        try:
            token_data = await self.tokens.get_token(
                gamespace,
                account_id,
                self.credential_type)

        except NoSuchToken:
            raise SocialAuthenticationRequired(self.credential_type, None)

        expires_at = token_data.expires_at
        access_token = token_data.access_token
        data = token_data.payload

        try:
            if datetime.datetime.now() > expires_at:
                raise APIError(403, "token expired")

            kwargs["access_token"] = access_token

            result = await method(*args, **kwargs)

        except APIError as e:
            if e.code == 401:
                raise SocialAuthenticationRequired(self.credential_type, token_data.username)
            if (e.code > 400) and (e.code <= 499):
                # probably, token expired, try generating new token

                if "refresh_token" in data:
                    refresh_token = data["refresh_token"]
                    try:
                        new_token = await self.api_refresh_token(refresh_token, gamespace)
                    except APIError:
                        raise SocialAuthenticationRequired(self.credential_type, token_data.username)

                    access_token = new_token["access_token"]
                    expires_in = new_token["expires_in"]

                    await self.import_data(gamespace, account_id, access_token, expires_in, None)

                    # after generating a new token, try again

                    kwargs["access_token"] = access_token
                    result = await method(*args, **kwargs)
                    return result

            raise e
        else:
            return result

    async def list_friends(self, gamespace, account_id):
        raise NotImplementedError()

    def has_friend_list(self):
        return False

    async def get_social_profile(self, gamespace, username, account_id, env=None):
        user_info = await self.call(
            gamespace,
            account_id,
            self.api_get_user_info)

        return user_info

    async def import_social(self, gamespace, username, auth):

        access_token = auth.access_token
        expires_in = auth.expires_in

        data = {k: v for k, v in {
            "refresh_token": auth.refresh_token
        }.items() if v}

        result = await self.import_data(
            gamespace,
            username,
            access_token,
            expires_in, data)

        return result
