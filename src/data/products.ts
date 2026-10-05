// ==============================================================================
// DINO LEATHERS — PRODUCT DATA & TYPES
// Master Catalog: WALLETS and BELTS only.
// Zero fake reviews, zero fake ratings, zero fake MRP markups.
// ==============================================================================

export type ProductCategory = "wallet" | "belt";

export interface ProductVariant {
  name: string;
  hex: string;
  inStock: boolean;
}

export interface ProductSpecs {
  leatherType: string;
  tanningProcess: string;
  dimensions: string;
  hardware?: string;
  stitching?: string;
  lining?: string;
  origin: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tag?: string;
  price: number; // Honest single price in INR
  stock: number;
  colors: ProductVariant[];
  images: string[];
  cardImage?: string;
  description: string;
  shortDescription: string;
  features: string[];
  specs: ProductSpecs;
  embossingAvailable: boolean;
  inStock: boolean;
  isPlaceholderImage?: boolean;
}

export const PRODUCTS: Product[] = [
  // ----------------------------------------------------------------------------
  // 1. CLASSIC BI-FOLD COIN WALLET (Category: wallet)
  // ----------------------------------------------------------------------------
  {
    id: "classic-bifold-coin-wallet",
    slug: "classic-bifold-coin-wallet",
    name: "Classic Bi-Fold Coin Wallet",
    category: "wallet",
    categoryLabel: "Wallets",
    tag: "Artisan Bestseller",
    price: 899,
    stock: 45,
    colors: [
      { name: "Ambur Tan", hex: "#C89D66", inStock: true },
      { name: "Espresso Black", hex: "#1A1412", inStock: true },
      { name: "Vintage Cognac", hex: "#8B4513", inStock: true },
    ],
    // Clean neutral placeholder until non-branded studio photoshoot arrives
    images: [],
    isPlaceholderImage: true,
    description:
      "Handcrafted by veteran leather artisans in Ambur. Structured from top-grade full-grain bovine hide with an expandable gusset coin pocket, dual currency partitions, and 6 quick-access card slots. Finished with burnished edges that develop a deep, lustrous patina with honest everyday use.",
    shortDescription: "Full-grain Ambur bovine leather with coin pocket and dual cash partitions.",
    features: [
      "100% Genuine Ambur Bovine Full-Grain Leather",
      "Expandable brass-snap coin compartment",
      "6 precision-cut card slots and 2 concealed slip pockets",
      "Full-length dual currency partition for Indian Rupee banknotes",
      "Reinforced bonded nylon perimeter saddle-stitching",
      "Complimentary initials hot-foil or blind debossing",
    ],
    specs: {
      leatherType: "Full-Grain Bovine Leather",
      tanningProcess: "Semi-Vegetable Tanned in Ambur Tannery Cluster",
      dimensions: "11.5 cm x 9.2 cm x 1.8 cm",
      hardware: "Brass-finish snap button",
      stitching: "Bonded nylon saddle thread",
      lining: "TODO: Artisan confirmation needed",
      origin: "Ambur, Tamil Nadu • Workshop Direct",
    },
    embossingAvailable: true,
    inStock: true,
  },

  // ----------------------------------------------------------------------------
  // 2. EXECUTIVE AUTOMATIC RATCHET LEATHER BELT (Category: belt)
  // ----------------------------------------------------------------------------
  {
    id: "reversible-formal-casual-belt",
    slug: "executive-automatic-ratchet-belt",
    name: "Executive Automatic Ratchet Leather Belt",
    category: "belt",
    categoryLabel: "Belts",
    tag: "Micro-Adjust Precision",
    price: 1199,
    stock: 35,
    colors: [
      { name: "Executive Jet Black", hex: "#111111", inStock: true },
      { name: "Ambur Cognac Tan", hex: "#7B3F00", inStock: true },
    ],
    cardImage:
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-4x5-960.webp",
    images: [
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-1x1-960.webp",
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-angle-lifestyle-1x1-960.webp",
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hardware-mechanism-1x1-960.webp",
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-giftbox-display-1x1-960.webp",
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-worn-lifestyle-1x1-960.webp",
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-macro-grain-1x1-960.webp",
    ],
    description:
      "Crafted from solid 3.8mm thick Ambur bovine leather with no synthetic cardboard core. Equipped with an aerospace-grade brushed stainless alloy automatic ratchet buckle and a 32-step micro-adjustment track, providing custom 1/4\" precision fitting without punched holes or leather creasing.",
    shortDescription: "Solid full-grain strap with 32-position automatic ratchet buckle.",
    features: [
      "Solid single-ply 3.8mm Ambur bovine leather (Zero cardboard fillers)",
      "Brushed alloy automatic ratchet buckle with geometric emblem",
      "Hidden 32-notch micro-adjustment track for exact 1/4\" custom comfort fit",
      "Quick-release ergonomic knurled lever for smooth unlatching",
      "Perimeter saddle-stitching with burnished feather edges",
      "Trimmable strap fits waist sizes 28\" to 44\"",
      "Complimentary custom hot-foil or blind debossed initials on inner tip",
    ],
    specs: {
      leatherType: "Solid 3.8mm Full-Grain Ambur Bovine Strap",
      tanningProcess: "Drum-Dyed Chrome-Veg Retanned",
      dimensions: "Width: 35mm | Fits waist sizes 28\" to 44\"",
      hardware: "Brushed stainless alloy ratchet mechanism",
      stitching: "High-tensile bonded nylon",
      lining: "Solid single-ply (No synthetic backing)",
      origin: "Ambur, Tamil Nadu • Workshop Direct",
    },
    embossingAvailable: true,
    inStock: true,
  },
];

export const DEFAULT_PRODUCT: Product = PRODUCTS[0];

export function getProductById(id?: string): Product | undefined {
  if (!id) return undefined;
  return PRODUCTS.find((p) => p.id === id || p.slug === id);
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getSafeProduct(productOrId?: Product | string | null): Product {
  if (!productOrId) return DEFAULT_PRODUCT;
  if (typeof productOrId === "string") {
    return getProductById(productOrId) || DEFAULT_PRODUCT;
  }
  return productOrId;
}
