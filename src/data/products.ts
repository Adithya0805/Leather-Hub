// ==============================================================================
// DINO LEATHERS — PRODUCT DATA & TYPES
// Master Catalog: WALLETS and BELTS only.
// Marketplace Sourcing Model: Sourced from trusted Ambur workshops.
// Quality-checked before dispatch.
// ==============================================================================

export type ProductCategory = "wallet" | "belt";
export type BrandingStatus = "unbranded" | "dino_embossed";

export interface WholesaleTier {
  minQty: number;
  price: number; // in INR
}

export interface ProductColor {
  name: string;
  hex: string;
  inStock?: boolean;
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
  retailPrice: number; // Draft price in INR
  price: number; // Compatibility alias for retailPrice
  wholesalePrice: WholesaleTier[];
  moq: number; // Minimum order quantity for wholesale orders
  colors: ProductColor[];
  supplierId: string; // Private workshop identifier
  priceConfirmed: false; // Launch builds must fail if false
  brandingStatus: BrandingStatus; // 'unbranded' | 'dino_embossed' (required)
  isActive: false; // No product may be active without photos and brandingStatus
  stock: number;
  inStock: boolean;
  images: string[];
  cardImage?: string;
  description: string;
  shortDescription: string;
  features: string[];
  specs: ProductSpecs;
  embossingAvailable: boolean;
  isPlaceholderImage?: boolean;
}

export const PRODUCTS: Product[] = [
  // ----------------------------------------------------------------------------
  // WALLETS (6 Draft Placeholders)
  // ----------------------------------------------------------------------------
  {
    id: "classic-bifold-wallet",
    slug: "classic-bifold-wallet",
    name: "Classic Bi-Fold Wallet",
    category: "wallet",
    categoryLabel: "Wallets",
    tag: "Bifold",
    retailPrice: 899,
    price: 899,
    wholesalePrice: [
      { minQty: 50, price: 499 },
      { minQty: 100, price: 449 },
    ],
    moq: 50,
    colors: [
      { name: "Ambur Tan", hex: "#C89D66", inStock: false },
      { name: "Espresso Black", hex: "#1A1412", inStock: false },
      { name: "Cognac Brown", hex: "#8B4513", inStock: false },
    ],
    supplierId: "ambur-ws-01",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Bovine leather wallet sourced from Ambur workshops. Structured with card slots, currency partitions, and burnished edges.",
    shortDescription: "Ambur bovine leather wallet with card slots and cash partitions.",
    features: [
      "Ambur bovine leather",
      "Dedicated card slots and interior slip pockets",
      "Full-length dual currency partition for Indian Rupee banknotes",
      "Reinforced perimeter stitching",
      "Complimentary custom initial debossing upon request",
    ],
    specs: {
      leatherType: "Bovine Leather",
      tanningProcess: "Semi-Vegetable Tanned in Ambur Tannery Cluster",
      dimensions: "11.5 cm x 9.2 cm x 1.8 cm",
      hardware: "Brass-finish snap",
      stitching: "Bonded nylon thread",
      lining: "Pending client verification",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },
  {
    id: "slim-rfid-card-wallet",
    slug: "slim-rfid-card-wallet",
    name: "Slim RFID Card Wallet",
    category: "wallet",
    categoryLabel: "Wallets",
    tag: "Card Sleeve",
    retailPrice: 699,
    price: 699,
    wholesalePrice: [
      { minQty: 50, price: 399 },
      { minQty: 100, price: 349 },
    ],
    moq: 50,
    colors: [
      { name: "Espresso Black", hex: "#1A1412", inStock: false },
      { name: "Ambur Tan", hex: "#C89D66", inStock: false },
    ],
    supplierId: "ambur-ws-02",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Minimalist bovine leather card sleeve sourced from Ambur workshops. Features multi-slot access and integrated protective lining.",
    shortDescription: "Compact bovine leather card sleeve for front-pocket carry.",
    features: [
      "Ambur bovine leather",
      "4 quick-access external card slots",
      "Central compartment for folded banknotes",
      "Ultra-slim pocket profile",
    ],
    specs: {
      leatherType: "Bovine Leather",
      tanningProcess: "Drum-Dyed in Ambur Tannery Cluster",
      dimensions: "10.0 cm x 7.5 cm x 0.5 cm",
      stitching: "Bonded thread",
      lining: "Pending client verification",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },
  {
    id: "hunter-leather-trifold-wallet",
    slug: "hunter-leather-trifold-wallet",
    name: "Hunter Leather Tri-Fold Wallet",
    category: "wallet",
    categoryLabel: "Wallets",
    tag: "Trifold",
    retailPrice: 999,
    price: 999,
    wholesalePrice: [
      { minQty: 50, price: 549 },
      { minQty: 100, price: 499 },
    ],
    moq: 50,
    colors: [
      { name: "Hunter Olive", hex: "#4A5340", inStock: false },
      { name: "Vintage Tan", hex: "#B8860B", inStock: false },
    ],
    supplierId: "ambur-ws-01",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Tri-fold bovine leather wallet with ample card capacity and ID window, sourced from trusted Ambur workshops.",
    shortDescription: "High-capacity tri-fold wallet in matte bovine finish.",
    features: [
      "Ambur bovine leather",
      "9 card slots and clear ID window",
      "Spacious currency section",
      "Double-stitched stress points",
    ],
    specs: {
      leatherType: "Bovine Leather",
      tanningProcess: "Vegetable-Tanned Finish",
      dimensions: "11.0 cm x 8.8 cm x 2.2 cm",
      stitching: "High-tensile thread",
      lining: "Pending client verification",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },
  {
    id: "vintage-coin-pocket-wallet",
    slug: "vintage-coin-pocket-wallet",
    name: "Vintage Coin Pocket Wallet",
    category: "wallet",
    categoryLabel: "Wallets",
    tag: "Coin Pocket",
    retailPrice: 949,
    price: 949,
    wholesalePrice: [
      { minQty: 50, price: 529 },
      { minQty: 100, price: 479 },
    ],
    moq: 50,
    colors: [
      { name: "Cognac Brown", hex: "#8B4513", inStock: false },
      { name: "Jet Black", hex: "#111111", inStock: false },
    ],
    supplierId: "ambur-ws-03",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Traditional bifold with built-in snap button coin pocket, crafted from bovine leather sourced in Ambur.",
    shortDescription: "Bifold wallet featuring dedicated secure coin pouch.",
    features: [
      "Ambur bovine leather",
      "Interior coin flap with secure snap closure",
      "6 credit card pockets and slip sleeve",
      "Divided paper currency slot",
    ],
    specs: {
      leatherType: "Bovine Leather",
      tanningProcess: "Semi-Vegetable Tanned",
      dimensions: "11.5 cm x 9.5 cm x 2.0 cm",
      hardware: "Brass-finish snap",
      stitching: "Bonded nylon",
      lining: "Pending client verification",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },
  {
    id: "minimalist-front-pocket-wallet",
    slug: "minimalist-front-pocket-wallet",
    name: "Minimalist Front Pocket Wallet",
    category: "wallet",
    categoryLabel: "Wallets",
    tag: "Minimalist",
    retailPrice: 599,
    price: 599,
    wholesalePrice: [
      { minQty: 50, price: 329 },
      { minQty: 100, price: 299 },
    ],
    moq: 50,
    colors: [
      { name: "Ambur Tan", hex: "#C89D66", inStock: false },
      { name: "Espresso Black", hex: "#1A1412", inStock: false },
    ],
    supplierId: "ambur-ws-02",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Ultra-compact folded wallet optimized for front-pocket carry, sourced from Ambur workshops.",
    shortDescription: "Slim front-pocket design with thumb-slide card access.",
    features: [
      "Ambur bovine leather",
      "Quick thumb-slide card slot",
      "Accommodates up to 6 cards and folded cash",
      "Slim profile",
    ],
    specs: {
      leatherType: "Bovine Leather",
      tanningProcess: "Drum-Dyed Finish",
      dimensions: "9.8 cm x 7.0 cm x 0.8 cm",
      stitching: "Precision perimeter stitch",
      lining: "Pending client verification",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },
  {
    id: "executive-zippered-travel-wallet",
    slug: "executive-zippered-travel-wallet",
    name: "Executive Zippered Travel Wallet",
    category: "wallet",
    categoryLabel: "Wallets",
    tag: "Travel Organizer",
    retailPrice: 1299,
    price: 1299,
    wholesalePrice: [
      { minQty: 50, price: 749 },
      { minQty: 100, price: 699 },
    ],
    moq: 50,
    colors: [
      { name: "Deep Navy", hex: "#1B2838", inStock: false },
      { name: "Ambur Tan", hex: "#C89D66", inStock: false },
    ],
    supplierId: "ambur-ws-03",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Zip-around bovine leather passport and travel organizer wallet, sourced from Ambur workshops.",
    shortDescription: "Secure zip-around travel wallet with passport sleeve.",
    features: [
      "Ambur bovine leather",
      "Full wrap-around brass zipper closure",
      "Passport compartment and boarding pass sleeve",
      "8 card slots and pen loop",
    ],
    specs: {
      leatherType: "Bovine Leather",
      tanningProcess: "Vegetable Tanned",
      dimensions: "14.5 cm x 10.5 cm x 2.2 cm",
      hardware: "Antiqued brass zipper",
      stitching: "Reinforced bonded thread",
      lining: "Pending client verification",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },

  // ----------------------------------------------------------------------------
  // BELTS (2 Draft Placeholders)
  // ----------------------------------------------------------------------------
  {
    id: "executive-automatic-ratchet-belt",
    slug: "executive-automatic-ratchet-belt",
    name: "Executive Automatic Ratchet Leather Belt",
    category: "belt",
    categoryLabel: "Belts",
    tag: "Ratchet Track",
    retailPrice: 1199,
    price: 1199,
    wholesalePrice: [
      { minQty: 50, price: 649 },
      { minQty: 100, price: 599 },
    ],
    moq: 50,
    colors: [
      { name: "Classic Black", hex: "#141414", inStock: false },
      { name: "Mahogany Brown", hex: "#4A2C2A", inStock: false },
    ],
    supplierId: "ambur-ws-04",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Bovine leather belt strap with micro-adjustable ratchet track system, sourced from trusted Ambur workshops.",
    shortDescription: "Micro-adjustable automatic ratchet belt in bovine leather.",
    features: [
      "Ambur bovine leather strap",
      "32-position micro-track mechanism (0.6 cm increments)",
      "Quick-release lever buckle",
      "Burnished painted edges",
    ],
    specs: {
      leatherType: "Bovine Leather Strap",
      tanningProcess: "Vegetable-Tanned Drum Dye",
      dimensions: "3.5 cm width; lengths 30 to 44 inches",
      hardware: "Zinc-alloy ratchet buckle with brushed gunmetal finish",
      stitching: "Perimeter lockstitch",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },
  {
    id: "classic-pin-buckle-formal-belt",
    slug: "classic-pin-buckle-formal-belt",
    name: "Classic Pin Buckle Formal Belt",
    category: "belt",
    categoryLabel: "Belts",
    tag: "Classic Buckle",
    retailPrice: 1099,
    price: 1099,
    wholesalePrice: [
      { minQty: 50, price: 599 },
      { minQty: 100, price: 549 },
    ],
    moq: 50,
    colors: [
      { name: "Ambur Tan", hex: "#C89D66", inStock: false },
      { name: "Espresso Black", hex: "#1A1412", inStock: false },
    ],
    supplierId: "ambur-ws-04",
    priceConfirmed: false,
    brandingStatus: "unbranded",
    isActive: false,
    stock: 0,
    inStock: false,
    images: [],
    isPlaceholderImage: true,
    description:
      "Classic formal bovine leather belt with solid brass pin buckle, sourced from Ambur workshops.",
    shortDescription: "Single-prong solid buckle dress belt in bovine leather.",
    features: [
      "Ambur bovine leather strap",
      "Solid brass single-prong pin buckle",
      "5 teardrop sizing holes with beveled edges",
      "Single leather keeper loop",
    ],
    specs: {
      leatherType: "Bovine Leather Strap",
      tanningProcess: "Semi-Vegetable Tanned",
      dimensions: "3.2 cm width; lengths 30 to 42 inches",
      hardware: "Solid brass pin buckle",
      stitching: "Nylon bonded saddle stitch",
      origin: "Ambur, Tamil Nadu",
    },
    embossingAvailable: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
