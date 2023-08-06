
from tornado.httpclient import AsyncHTTPClient, HTTPRequest, HTTPError

from . import StoreComponent, StoreComponents, StoreComponentError
from .. order import OrdersModel

from anthill.common.social import steam

from urllib import parse
import ujson
import logging


class SteamErrorCodes(object):
    @staticmethod
    def convert_to_http(code):
        if code < 100:
            return code + 450
        if code < 200:
            return code + 380
        return code


class SteamStoreComponent(StoreComponent):
    API_URL = "https://api.steampowered.com/ISteamMicroTxn"
    SANDBOX_API_URL = "https://api.steampowered.com/ISteamMicroTxnSandbox"
    INIT_TX_VERSION = "V0002"
    UPDATE_TX_VERSION = "V0001"
    PURCHASE_AMOUNT_LIMIT = 1000000

    def __init__(self, api_url=API_URL, sandbox_api_url=SANDBOX_API_URL,
                 init_tx_version=INIT_TX_VERSION, update_tx_version=UPDATE_TX_VERSION):
        super(SteamStoreComponent, self).__init__()
        self.api_url = api_url
        self.sandbox_api_url = sandbox_api_url
        self.sandbox = False

        self.init_tx_version = init_tx_version
        self.update_tx_version = update_tx_version

        self.client = AsyncHTTPClient()

    def dump(self):
        result = super(SteamStoreComponent, self).dump()
        result.update({
            "sandbox": self.sandbox
        })
        return result

    def load(self, data):
        super(SteamStoreComponent, self).load(data)
        self.sandbox = data.get("sandbox")

    def __url__(self):
        return self.sandbox_api_url if self.sandbox else self.api_url

    def get_api(self, app):
        return app.steam_api

    async def update_order(self, app, gamespace_id, account_id, order, order_info):

        if order.status == OrdersModel.STATUS_APPROVED:
            result = (OrdersModel.STATUS_SUCCEEDED, {})
            return result

        order_id = order.order_id

        private_key = await self.get_api(app).get_private_key(gamespace_id)

        arguments = {
            "orderid": order_id,
            "appid": private_key.app_id,
            "key": private_key.key
        }

        request = HTTPRequest(
            url=self.__url__() + "/FinalizeTxn/" + self.update_tx_version,
            method="POST",
            body=parse.urlencode(arguments))

        try:
            response = await self.client.fetch(request)
        except HTTPError as e:
            if e.code == 400:
                raise StoreComponentError(
                    e.code, e.message,
                    update_status=(OrdersModel.STATUS_ERROR, {
                        "http_error_code": e.code,
                        "http_error_reason": e.response.body if e.response else e.message
                    }))

            logging.exception("Steam FinalizeTxn Connectivity issue: {0}".format(
                e.response.body if e.response else e.message
            ))
            raise StoreComponentError(
                e.code, e.message,
                update_status=(OrdersModel.STATUS_RETRY, {
                    "http_error_code": e.code,
                    "http_error_reason": e.message
                }))

        try:
            response = ujson.loads(response.body)["response"]
        except (KeyError, ValueError):
            raise StoreComponentError(500, "Corrupted FinalizeTxn response")

        failure = response.get("result", "Failure") != "OK"

        if failure:
            error = response.get("error", {})
            code = error.get("errorcode", 99)
            reason = error.get("errordesc", "Unknown")

            if code in [5, 7]:
                # try again later
                raise StoreComponentError(SteamErrorCodes.convert_to_http(code), reason)

            if code >= 10:
                # rejected
                raise StoreComponentError(SteamErrorCodes.convert_to_http(code), reason,
                                          update_status=(OrdersModel.STATUS_REJECTED, {
                                              "error_code": code,
                                              "error_reason": reason
                                          }))

            raise StoreComponentError(SteamErrorCodes.convert_to_http(code), reason,
                                      update_status=(OrdersModel.STATUS_ERROR, {
                                          "error_code": code,
                                          "error_reason": reason
                                      }))

        params = response.get("params", {})

        steam_order_id = params.get("orderid", 0)

        if str(steam_order_id) != str(order_id):
            raise StoreComponentError(500, "OrderID does not correspond the steam OrderId")

        transaction_id = params.get("transid", 0)

        if not transaction_id:
            raise StoreComponentError(500, "No TransactionID")

        result = (OrdersModel.STATUS_SUCCEEDED, {
            "transaction_id": transaction_id
        })

        return result

    # noinspection SpellCheckingInspection
    async def new_order(self, app, gamespace_id, account_id, order_id, currency,
                  price, amount, total, store, item, env, campaign_item):

        steam_id = env.get("steam_id")

        if not steam_id:
            raise StoreComponentError(400, "No username environment variable")

        ipaddress = env.get("ip_address")

        if amount > SteamStoreComponent.PURCHASE_AMOUNT_LIMIT:
            raise StoreComponentError(400, "Amount limit is reached")

        private_key = await self.get_api(app).get_private_key(gamespace_id)

        language = env.get("language", "EN")
        description = item.description(language)

        arguments = {
            "orderid": order_id,
            "steamid": steam_id,
            "appid": private_key.app_id,
            "itemcount": 1,
            "language": language,
            "currency": currency,
            "ipaddress": ipaddress,
            "usersession": "client",
            "key": private_key.key,

            "itemid[0]": item.item_id,
            "qty[0]": amount,
            "amount[0]": int(total),
            "description[0]": description
        }

        category = item.public_data.get("category")

        if category:
            arguments["category[0]"] = category

        arguments = {
            k: str(v).encode("utf-8")
            for k, v in arguments.items()
        }

        request = HTTPRequest(
            url=self.__url__() + "/InitTxn/" + self.init_tx_version,
            method="POST",
            body=parse.urlencode(arguments))

        try:
            response = await self.client.fetch(request)
        except HTTPError as e:
            raise StoreComponentError(e.code, e.message)

        try:
            response = ujson.loads(response.body)["response"]
        except (KeyError, ValueError):
            raise StoreComponentError(500, "Corrupted InitTxn response")

        failure = response.get("result", "Failure") != "OK"

        if failure:
            error = response.get("error", {})
            code = error.get("errorcode", 99)
            reason = error.get("errordesc", "Unknown")
            raise StoreComponentError(SteamErrorCodes.convert_to_http(code), reason)

        params = response.get("params", {})

        steam_order_id = params.get("orderid", 0)

        if str(steam_order_id) != str(order_id):
            raise StoreComponentError(406, "OrderID does not correspond the steam OrderId")

        transaction_id = params.get("transid", 0)

        if not transaction_id:
            raise StoreComponentError(412, "No TransactionID")

        return {
            "transaction_id": transaction_id
        }


StoreComponents.register_component("steam", SteamStoreComponent)
