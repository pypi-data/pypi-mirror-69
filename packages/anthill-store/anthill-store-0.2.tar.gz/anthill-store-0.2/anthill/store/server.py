
from anthill.common.options import options

from . import handler as h
from . import options as _opts

from anthill.common import server, database, access, keyvalue

from anthill.common.social.steam import SteamAPI
from anthill.common.social.xsolla import XsollaAPI
from anthill.common.social.mailru import MailRuAPI

from . import admin
from . model.store import StoreModel
from . model.item import ItemModel
from . model.category import CategoryModel
from . model.tier import TierModel, CurrencyModel
from . model.order import OrdersModel
from . model.campaign import CampaignsModel


class StoreServer(server.Server):
    # noinspection PyShadowingNames
    def __init__(self):
        super(StoreServer, self).__init__()

        self.db = database.Database(
            host=options.db_host,
            database=options.db_name,
            user=options.db_username,
            password=options.db_password)

        self.cache = keyvalue.KeyValueStorage(
            host=options.cache_host,
            port=options.cache_port,
            db=options.cache_db,
            max_connections=options.cache_max_connections)

        self.steam_api = SteamAPI(self.cache)
        self.xsolla_api = XsollaAPI(self.cache)
        self.mailru_api = MailRuAPI(self.cache)

        self.items = ItemModel(self.db)
        self.categories = CategoryModel(self.db)
        self.tiers = TierModel(self.db)
        self.currencies = CurrencyModel(self.db)
        self.campaigns = CampaignsModel(self.db)
        self.stores = StoreModel(self.db, self.items, self.tiers, self.currencies, self.campaigns)
        self.orders = OrdersModel(self, self.db, self.tiers, self.campaigns)

        admin.init()

    def get_models(self):
        return [self.currencies, self.categories, self.stores,
                self.items, self.tiers, self.orders, self.campaigns]

    def get_admin(self):
        return {
            "index": admin.RootAdminController,
            "stores": admin.StoresController,
            "store": admin.StoreController,
            "store_settings": admin.StoreSettingsController,
            "new_store_component": admin.NewStoreComponentController,
            "new_store": admin.NewStoreController,
            "categories": admin.CategoriesController,
            "category": admin.CategoryController,
            "new_category": admin.NewCategoryController,
            "category_common": admin.CategoryCommonController,
            "choose_category": admin.ChooseCategoryController,
            "new_item": admin.NewStoreItemController,
            "item": admin.StoreItemController,
            "tiers": admin.StoreTiersController,
            "new_tier_component": admin.NewTierComponentController,
            "tier": admin.StoreTierController,
            "new_tier": admin.NewStoreTierController,
            "currencies": admin.CurrenciesController,
            "currency": admin.CurrencyController,
            "new_currency": admin.NewCurrencyController,
            "orders": admin.OrdersController,
            "campaigns": admin.StoreCampaignsController,
            "new_campaign": admin.NewStoreCampaignController,
            "campaign": admin.StoreCampaignController,
            "new_campaign_item_select": admin.NewCampaignItemSelectController,
            "new_campaign_item": admin.NewCampaignItemController,
            "campaign_item": admin.CampaignItemController
        }

    def get_internal_handler(self):
        return h.InternalHandler(self)

    def get_metadata(self):
        return {
            "title": "Store",
            "description": "In-App Purchasing, with server validation",
            "icon": "shopping-cart"
        }

    def get_handlers(self):
        return [
            (r"/store/(.*)", h.StoreHandler),
            (r"/order/new", h.NewOrderHandler),
            (r"/orders", h.OrdersHandler),
            (r"/order/(.*)", h.OrderHandler),
            (r"/hook/([0-9]+)/(.*)/(.*)", h.WebHookHandler),
            (r"/front/xsolla", h.XsollaFrontHandler),
        ]


if __name__ == "__main__":
    stt = server.init()
    access.AccessToken.init([access.public()])
    server.start(StoreServer)
