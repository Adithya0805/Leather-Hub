export type ProductCategory = "wallets" | "cardholders" | "belts" | "gift-sets";

export interface ProductColor {
  name: string;
  hex: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tag?: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  colors: ProductColor[];
  description: string;
  shortDescription: string;
  features: string[];
  imageAngles: string[]; // Front, angled, interior, and macro texture (1:1)
  cardImage?: string; // Uniform 4:5 aspect ratio
  leatherType: string;
  tanningProcess: string;
  dimensions: string;
  warranty: string;
  embossingAvailable: boolean;
  provenance: string;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "classic-bifold-coin-wallet",
    name: "Classic Bi-Fold Coin Wallet",
    category: "wallets",
    categoryLabel: "Full-Grain Wallets",
    tag: "Ambur Bestseller",
    price: 899,
    originalPrice: 1499,
    discountPercentage: 40,
    rating: 4.9,
    reviewsCount: 128,
    colors: [
      { name: "Ambur Tan", hex: "#C89D66", inStock: true },
      { name: "Espresso Black", hex: "#1A1412", inStock: true },
      { name: "Vintage Cognac", hex: "#8B4513", inStock: true },
    ],
    description:
      "Handcrafted by veteran artisans in Ambur, this signature bi-fold is forged from oil pull-up full-grain bovine leather. Engineered with an expandable gusset coin pocket, dual currency partitions, and 6 quick-draw card slots, it develops a deep, rich marble patina that uniquely mirrors your daily journey.",
    shortDescription: "Oil pull-up full-grain Ambur leather with coin pocket & heirloom patina finish.",
    features: [
      "100% Genuine Ambur Bovine Full-Grain Leather",
      "Signature Oil Pull-up finish with quick scratch self-healing patina",
      "Expandable brass-snap coin compartment",
      "6 precision-cut card slots & 2 concealed slip pockets",
      "Full-length dual currency partition tailored for Indian Rupee banknotes",
      "Reinforced bonded nylon saddle-stitching",
      "Complimentary laser/hot-stamped custom initials embossing",
    ],
    cardImage: "/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-hero-4x5-960.webp",
    imageAngles: [
      // Front View - Color Trio
      "/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-hero-1x1-960.webp",
      // Angled Perspective - Ambur Tan Display
      "/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-tan-display-1x1-960.webp",
      // Interior Details - Passcase & Card Flap
      "/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-interior-passcase-1x1-960.webp",
      // Macro Leather Texture (Always Last)
      "/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-macro-grain-1x1-960.webp",
    ],
    leatherType: "Full-Grain Bovine Oil Pull-Up Leather",
    tanningProcess: "Semi-Vegetable Tanned in Ambur Tannery Cluster",
    dimensions: "11.5 cm x 9.2 cm x 1.8 cm (Closed)",
    warranty: "5-Year Patina & Stitching Guarantee",
    embossingAvailable: true,
    provenance: "Ambur, Tamil Nadu • Factory Direct",
    inStock: true,
  },
  {
    id: "minimalist-slim-rfid-cardholder",
    name: "Minimalist Slim RFID Cardholder",
    category: "cardholders",
    categoryLabel: "Slim Cardholders",
    tag: "Front-Pocket Essential",
    price: 499,
    originalPrice: 899,
    discountPercentage: 44,
    rating: 4.8,
    reviewsCount: 94,
    colors: [
      { name: "Crazy Horse Tan", hex: "#B37D4E", inStock: true },
      { name: "Deep Saddle Brown", hex: "#2A1D17", inStock: true },
      { name: "Olive Hunter", hex: "#4B5320", inStock: true },
    ],
    description:
      "Crafted for modern everyday carry, this ultra-slim sleeve utilizes wax-infused Crazy Horse bovine leather. It shields your contactless credit/debit cards with an integrated Faraday RFID-blocking membrane while maintaining a razor-thin 4mm silhouette ideal for front-pocket comfort.",
    shortDescription: "Ultra-slim Crazy Horse finish with military-grade RFID protection.",
    features: [
      "Waxed Crazy Horse Bovine Leather that ages gracefully with handling",
      "Integrated 13.56 MHz RFID / NFC signal blocking liner",
      "Central stash sleeve for folded currency bills & receipts",
      "4 precision-cut quick access card slots",
      "Beveled & hand-burnished edges sealed with natural beeswax",
      "Ultra-compact featherweight profile (only 28 grams)",
      "Free custom monogram embossing on lower bezel",
    ],
    cardImage: "/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-hero-4x5-960.webp",
    imageAngles: [
      // Front View - Cardholder Trio
      "/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-hero-1x1-960.webp",
      // Angled Perspective - Tan Sleeve
      "/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-tan-sleeve-1x1-960.webp",
      // Cards Loaded View - Black Interior Slots
      "/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-black-interior-1x1-960.webp",
      // Macro Leather Texture (Always Last)
      "/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-macro-grain-1x1-960.webp",
    ],
    leatherType: "Crazy Horse Full-Grain Waxed Cowhide",
    tanningProcess: "Heavy Wax Impregnation & Mineral Tanning",
    dimensions: "10.2 cm x 7.4 cm x 0.4 cm",
    warranty: "3-Year Structure & Edge Guarantee",
    embossingAvailable: true,
    provenance: "Ambur, Tamil Nadu • Factory Direct",
    inStock: true,
  },
  {
    id: "reversible-formal-casual-belt",
    name: "Executive Automatic Ratchet Leather Belt",
    category: "belts",
    categoryLabel: "Artisan Belts",
    tag: "Micro-Adjust Precision",
    price: 1199,
    originalPrice: 1999,
    discountPercentage: 40,
    rating: 4.9,
    reviewsCount: 112,
    colors: [
      { name: "Executive Jet Black", hex: "#111111", inStock: true },
      { name: "Ambur Cognac Tan", hex: "#7B3F00", inStock: true },
    ],
    description:
      "Crafted from premium 3.8mm solid full-grain Ambur bovine leather, this executive belt pairs timeless leathercraft with modern ratchet engineering. Featuring an automatic micro-adjustment track with 32 millimeter-precise positions and a brushed stainless steel buckle with quick-release knurled lever, offering a perfect tailored fit with zero holes and zero creasing.",
    shortDescription: "Solid full-grain strap with 32-position automatic ratchet buckle.",
    features: [
      "Solid single-ply 3.8mm thick Ambur bovine leather (Zero bonded cardboard fillers)",
      "Brushed stainless alloy automatic buckle with geometric signature emblem",
      "Hidden 32-step micro-adjustment track with 1/4\" precision fitting (No ugly holes)",
      "Instant quick-release ergonomic side lever for effortless adjustment",
      "Perimeter saddle-stitching with feather-beveled hand-burnished edges",
      "Trimmable DIY sizing system to customize fit perfectly from 28\" to 46\" waist",
      "Includes luxury keepsake walnut presentation gift box & guarantee certificate",
      "Complimentary custom hot-stamped monogram on inner strap tip",
    ],
    cardImage: "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-4x5-960.webp",
    imageAngles: [
      // 1. Hero Coiled on Travertine - Executive Jet Black
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-1x1-960.webp",
      // 2. Color Variation - Rich Ambur Cognac Tan
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-angle-lifestyle-1x1-960.webp",
      // 3. Hidden Ratchet Track & Quick-Release Mechanism
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hardware-mechanism-1x1-960.webp",
      // 4. Handcrafted Keepsake Gift Box Presentation
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-giftbox-display-1x1-960.webp",
      // 5. Editorial On-Model / Worn Formal Suit Styling
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-worn-lifestyle-1x1-960.webp",
      // 6. Macro Grain & Brushed Buckle Texture (Always Last)
      "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-macro-grain-1x1-960.webp",
    ],
    leatherType: "Solid 3.8mm Full-Grain Ambur Bovine Strap",
    tanningProcess: "Drum-Dyed Chrome-Veg Retanned",
    dimensions: "Width: 35mm | Fits waist sizes 28\" to 46\"",
    warranty: "7-Year Anti-Cracking & Buckle Guarantee",
    embossingAvailable: true,
    provenance: "Ambur, Tamil Nadu • Factory Direct",
    inStock: true,
  },
  {
    id: "ambur-heritage-2in1-gift-box",
    name: "Ambur Heritage 2-in-1 Executive Gift Box",
    category: "gift-sets",
    categoryLabel: "Curated Gift Sets",
    tag: "Luxury Keepsake",
    price: 1699,
    originalPrice: 2999,
    discountPercentage: 43,
    rating: 5.0,
    reviewsCount: 215,
    colors: [
      { name: "Heritage Tan Ensemble", hex: "#C89D66", inStock: true },
      { name: "Midnight Onyx Ensemble", hex: "#1A1412", inStock: true },
    ],
    description:
      "The pinnacle of Ambur leather craftsmanship presented in an imperial gold-foil embossed keepsake rigid box. Pairs our bestselling Full-Grain Bi-Fold Wallet with our Reversible Artisan Belt, customized with matching personalized name or initials embossing for an unforgettable gifting experience.",
    shortDescription: "Personalized wallet + reversible belt set in rigid gold-foiled keepsake box.",
    features: [
      "Complete set: Handcrafted Bi-Fold Wallet + Reversible Full-Grain Belt",
      "Free matching gold-foil or blind debossed custom name personalization on both items",
      "Enclosed in a rigid magnetic-closure heritage gift box with velvet bed",
      "Includes Certificate of Ambur Authenticity & leather care cream sample",
      "Factory-direct pricing offering over 55% savings versus retail luxury boutiques",
      "Tamper-proof transit packaging with wax-sealed ribbon ready for direct gifting",
    ],
    cardImage: "/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-hero-4x5-960.webp",
    imageAngles: [
      // Gift Box Open View
      "/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-hero-1x1-960.webp",
      // Set Display - Tan Keepsake Unboxing
      "/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-unboxing-tan-1x1-960.webp",
      // Packaging Detail - Black Presentation
      "/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-unboxing-black-1x1-960.webp",
      // Macro Box Construction & Leather Corner (Always Last)
      "/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-macro-packaging-1x1-960.webp",
    ],
    leatherType: "100% Genuine Ambur Full-Grain Bovine Leather",
    tanningProcess: "Signature Palar-Basin Artisan Tanning",
    dimensions: "Gift Box: 26 cm x 20 cm x 6.5 cm",
    warranty: "5-Year Replacement Warranty on Both Articles",
    embossingAvailable: true,
    provenance: "Ambur, Tamil Nadu • Factory Direct",
    inStock: true,
  },
];

export interface BrandStoryHighlight {
  title: string;
  desc: string;
}

export interface BrandStory {
  city: string;
  state: string;
  country: string;
  pincode: string;
  tagline: string;
  heritageYears: number;
  highlights: BrandStoryHighlight[];
}

export const BRAND_STORY: BrandStory = {
  city: "Ambur",
  state: "Tamil Nadu",
  country: "India",
  pincode: "635802",
  tagline: "India's Leather Hub • Direct From Tanners To You",
  heritageYears: 50,
  highlights: [
    {
      title: "100% Ambur Bovine Leather",
      desc: "Ambur processes over 40% of India's leather exports. We bring that international export quality directly to you without retail markups.",
    },
    {
      title: "Heirloom Patina Longevity",
      desc: "We use only uncorrected full-grain hides. Every scuff and handling develops an organic, lustrous caramel patina that improves with age.",
    },
    {
      title: "Free Custom Embossing",
      desc: "Personalize your wallet or belt with your name or initials blind-debossed or stamped in heritage gold foil at no extra charge.",
    },
    {
      title: "Zero-Risk Factory Provenance",
      desc: "Dispatched straight from our workshop floor in Ambur, Tamil Nadu with a 5-year craftsmanship warranty.",
    },
  ],
};

export const DEFAULT_PRODUCT: Product = PRODUCTS[0];

export function getProductById(id?: string): Product | undefined {
  if (!id) return undefined;
  return PRODUCTS.find((p) => p.id === id);
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
