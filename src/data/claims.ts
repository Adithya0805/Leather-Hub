// ==============================================================================
// DINO LEATHERS — UNCONFIRMED CLAIMS REGISTRY
// Every claim defaults to confirmed: false.
// Components render ONLY the neutral fallback until approved.
// ==============================================================================

export interface ClaimItem {
  id: string;
  category:
    | "leather_grade"
    | "craftsmanship"
    | "workshop_address"
    | "founding_story"
    | "shipping_terms"
    | "sourcing_model";
  text: string;
  confirmed: boolean;
  neutralFallback: string;
}

export const CLAIMS: Record<string, ClaimItem> = {
  leatherGrade: {
    id: "leatherGrade",
    category: "leather_grade",
    text: "100% Genuine Full-Grain Bovine Leather",
    confirmed: false,
    neutralFallback: "Bovine leather",
  },
  craftsmanship: {
    id: "craftsmanship",
    category: "craftsmanship",
    text: "Handcrafted by veteran artisans in Ambur",
    confirmed: false,
    neutralFallback: "Sourced from trusted Ambur workshops. Quality-checked before dispatch.",
  },
  sourcingModel: {
    id: "sourcingModel",
    category: "sourcing_model",
    text: "Direct manufacturer workshop with master artisans in Ambur",
    confirmed: false,
    neutralFallback: "Sourced from trusted Ambur workshops. Quality-checked before dispatch.",
  },
  workshopAddress: {
    id: "workshopAddress",
    category: "workshop_address",
    text: "Direct from our workshop at MC Road (PIN 635802), Ambur",
    confirmed: false,
    neutralFallback: "Ambur, Tamil Nadu",
  },
  foundingStory: {
    id: "foundingStory",
    category: "founding_story",
    text: "Founded as an Ambur leather manufacturer",
    confirmed: false,
    neutralFallback: "Sourced from trusted Ambur workshops. Quality-checked before dispatch.",
  },
  shippingTerms: {
    id: "shippingTerms",
    category: "shipping_terms",
    text: "Free Pan-India Express Shipping on all orders",
    confirmed: false,
    neutralFallback: "Delivery time and shipping charge confirmed on WhatsApp.",
  },
};

export function getClaim(id: keyof typeof CLAIMS): string {
  const item = CLAIMS[id];
  return item && item.confirmed ? item.text : item?.neutralFallback || "";
}
