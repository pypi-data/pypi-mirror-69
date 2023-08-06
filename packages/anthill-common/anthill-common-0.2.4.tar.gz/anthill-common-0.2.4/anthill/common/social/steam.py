
import tornado.httpclient
import ujson
import abc
from urllib import parse

from .. import admin as a
from .. social import SocialNetworkAPI, APIError, AuthResponse, SocialPrivateKey


class SteamAPI(SocialNetworkAPI, metaclass=abc.ABCMeta):

    STEAM_API = "https://api.steampowered.com"
    NAME = "steam"

    def __init__(self, cache, name=NAME, steam_api=STEAM_API):
        super(SteamAPI, self).__init__(name, cache)
        self.steam_api = steam_api

    async def api_auth(self, gamespace, ticket, app_id):

        private_key = await self.get_private_key(gamespace)

        if private_key.app_id != app_id:
            raise APIError(400, "Wrong app_id")

        fields = {
            "key": private_key.key,
            "ticket": ticket,
            "appid": app_id
        }

        try:
            response = await self.api_get("ISteamUserAuth/AuthenticateUserTicket", fields)
        except tornado.httpclient.HTTPError as e:
            raise APIError(
                e.code,
                e.response.body if hasattr(e.response, "body") else str(e))
        else:
            if "params" not in response:
                raise APIError(500, "Steam error: no response/params field")

            params = response["params"]

            steam_id = str(params["steamid"])

            if params.get("vacbanned", False):
                raise APIError(403, "VAC Banned")

            result = AuthResponse(
                username=steam_id,
                import_social=False)

            return result

    async def api_get_user_info(self, username=None, key=None, env=None):
        try:
            response = await self.api_get(
                "ISteamUser/GetPlayerSummaries",
                {},
                v="v0002",
                key=key,
                steamids=username)

        except tornado.httpclient.HTTPError as e:
            raise APIError(e.code, e.response.body)
        else:
            try:
                data = response["players"][0]
            except KeyError:
                raise APIError(500, "Steam error: bad user info response")

            main_data = SteamAPI.process_user_info(data)

            try:
                kwargs = {
                    "key": key,
                    "steamid": username
                }

                if env and "ip_address" in env:
                    kwargs["ipaddress"] = env["ip_address"]

                response = await self.api_get(
                    "ISteamMicroTxn/GetUserInfo",
                    {},
                    v="v0001",
                    **kwargs)

            except tornado.httpclient.HTTPError as e:
                pass
            else:
                if "params" in response:
                    params = response["params"]

                    main_data.update(SteamAPI.process_user_payment_info(params))

            return main_data

    async def api_get(self, operation, fields, v="v1", **kwargs):

        fields.update(**kwargs)

        result = await self.client.fetch(
            self.steam_api + "/" + operation + "/" + v + "?" +
            parse.urlencode(fields))

        try:
            response_object = ujson.loads(result.body)
        except (KeyError, ValueError):
            raise APIError(500, "Corrupted steam response")

        if "response" not in response_object:
            raise APIError(500, "Steam error: no response field")

        response = response_object["response"]

        if "error" in response:
            error = response["error"]
            raise APIError(
                400, "Steam error: " + str(error["errorcode"]) + " " + error["errordesc"])

        return response

    async def api_post(self, operation, fields, v="v1", **kwargs):

        fields.update(**kwargs)
        result = await self.client.fetch(
            self.steam_api + "/" + operation + "/" + v + "/",
            method="POST",
            body=parse.urlencode(fields))

        return result

    @staticmethod
    def process_user_info(data):
        return {
            "name": data["personaname"],
            "avatar": data["avatarmedium"],
            "profile": data["profileurl"]
        }

    @staticmethod
    def process_user_payment_info(data):
        return {
            "currency": data.get("currency", "USD"),
            "country": data.get("country", "unknown"),
            "steam_status": data.get("status", "unknown")
        }

    def has_private_key(self):
        return True

    def new_private_key(self, data):
        return SteamPrivateKey(data)


class SteamPrivateKey(SocialPrivateKey):
    def __init__(self, key):
        super(SteamPrivateKey, self).__init__(key)

        self.key = self.data.get("key", "") if self.data else None
        self.app_id = self.data.get("app_id", "") if self.data else None

    def get_app_id(self):
        return self.app_id

    def dump(self):
        return {
            "key": self.key,
            "app_id": self.app_id
        }

    def has_ui(self):
        return True

    def get(self):
        return {
            "key": self.key,
            "app_id": self.app_id
        }

    def render(self):
        return {
            "app_id": a.field(
                "Steam Game ID", "text", "primary", "non-empty",
                order=1),
            "key": a.field(
                "Encrypted App Ticket Key", "text", "primary", "non-empty",
                order=2,
                description="Open <a href=\"https://partner.steamgames.com/apps/\">Steam Apps</a>, select "
                            "Steamworks Admin, select \"Security\" tab, then copy the \"Encrypted App Ticket Key\" "
                            "from the SDK Auth page." )
        }

    def update(self, key, app_id, **ignored):
        self.key = key
        self.app_id = app_id
