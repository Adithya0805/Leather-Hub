// ==============================================================================
// DINO LEATHERS — PRIVATE ADMIN SUPPLIER COSTS (SERVER-ONLY)
// Confidential workshop cost prices.
// NEVER import this file into client components or client bundles.
// ==============================================================================

export interface SupplierCostRecord {
  slug: string;
  supplierId: string;
  costPrice: number; // In INR (admin confidential)
  notes: string;
}

export const ADMIN_PRODUCT_COSTS: Record<string, SupplierCostRecord> = {
  "classic-bifold-wallet": {
    slug: "classic-bifold-wallet",
    supplierId: "ambur-ws-01",
    costPrice: 280,
    notes: "Workshop 01 - semi-vegetable bovine bifold",
  },
  "slim-rfid-card-wallet": {
    slug: "slim-rfid-card-wallet",
    supplierId: "ambur-ws-02",
    costPrice: 210,
    notes: "Workshop 02 - slim card sleeve",
  },
  "hunter-leather-trifold-wallet": {
    slug: "hunter-leather-trifold-wallet",
    supplierId: "ambur-ws-01",
    costPrice: 320,
    notes: "Workshop 01 - hunter finish trifold",
  },
  "vintage-coin-pocket-wallet": {
    slug: "vintage-coin-pocket-wallet",
    supplierId: "ambur-ws-03",
    costPrice: 310,
    notes: "Workshop 03 - snap coin pouch bifold",
  },
  "minimalist-front-pocket-wallet": {
    slug: "minimalist-front-pocket-wallet",
    supplierId: "ambur-ws-02",
    costPrice: 180,
    notes: "Workshop 02 - compact front pocket bifold",
  },
  "executive-zippered-travel-wallet": {
    slug: "executive-zippered-travel-wallet",
    supplierId: "ambur-ws-03",
    costPrice: 420,
    notes: "Workshop 03 - zippered travel passport wallet",
  },
  "executive-automatic-ratchet-belt": {
    slug: "executive-automatic-ratchet-belt",
    supplierId: "ambur-ws-04",
    costPrice: 380,
    notes: "Workshop 04 - ratchet track bovine belt strap",
  },
  "classic-pin-buckle-formal-belt": {
    slug: "classic-pin-buckle-formal-belt",
    supplierId: "ambur-ws-04",
    costPrice: 350,
    notes: "Workshop 04 - single-prong solid brass buckle belt",
  },
};

export function getSupplierCost(slug: string): SupplierCostRecord | undefined {
  return ADMIN_PRODUCT_COSTS[slug];
}
