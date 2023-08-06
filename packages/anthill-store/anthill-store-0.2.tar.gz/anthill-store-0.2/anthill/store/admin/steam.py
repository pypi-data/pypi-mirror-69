
from . import StoreAdminComponents, TierAdminComponents, StoreComponentAdmin, TierComponentAdmin
from .. model.components.steam import SteamStoreComponent

import anthill.common.admin as a


class SteamStoreComponentAdmin(StoreComponentAdmin):
    def __init__(self, name, action, store_id, component=SteamStoreComponent):
        super(SteamStoreComponentAdmin, self).__init__(name, action, store_id, component)

    def get(self):
        return {
            "sandbox": self.component.sandbox
        }

    def icon(self):
        return "steam"

    def render(self):
        return {
            "sandbox": a.field("Sandbox environment", "switch", "primary", "non-empty")
        }

    def update(self, sandbox=False, **fields):
        self.component.sandbox = sandbox


StoreAdminComponents.register_component("steam", SteamStoreComponentAdmin)
