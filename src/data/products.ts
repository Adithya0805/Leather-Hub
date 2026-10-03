export interface ProductColor {
  name: string;
  hex: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: "wallets" | "cardholders" | "belts" | "gift-sets";
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
  imageAngles: string[]; // Front, angled, interior, and macro texture
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
    imageAngles: [
      // Front View
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
      // Angled Perspective
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80",
      // Interior Details
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80",
      // Macro Leather Texture
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
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
    imageAngles: [
      // Front View
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
      // Angled Perspective
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80",
      // Cards Loaded View
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
      // Macro Leather Texture
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
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
    name: "Reversible Formal / Casual Belt",
    category: "belts",
    categoryLabel: "Artisan Belts",
    tag: "Dual-Tone Versatility",
    price: 999,
    originalPrice: 1799,
    discountPercentage: 44,
    rating: 4.9,
    reviewsCount: 86,
    colors: [
      { name: "Black & Tan Reversible", hex: "#1A1412", inStock: true },
      { name: "Espresso & Cognac Reversible", hex: "#3A2318", inStock: true },
    ],
    description:
      "One solid strap, two timeless moods. Cut from thick 3.8mm top-tier Ambur bovine leather, this reversible belt seamlessly transitions from boardroom Black to weekend Ambur Tan with an ergonomic twist of its solid brass swivel buckle. Unsplit and unbonded for enduring tensile strength.",
    shortDescription: "Solid full-grain strap with 360° rotating solid brass buckle.",
    features: [
      "Solid single-ply 3.8mm thick Ambur bovine leather (No cheap cardboard fillers)",
      "High-tensile 360° rotating precision buckle in antique brushed brass",
      "One side formal Executive Jet Black; reverse side warm Ambur Tan",
      "Smooth feather-edged hand-dyed borders",
      "5 custom oval adjustment holes with reinforced strain relief",
      "Easily trimmable DIY sizing system for tailored bespoke fit",
      "Complimentary custom heat-stamped name foil on inner tip",
    ],
    imageAngles: [
      // Front Buckle View
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      // Coiled Perspective
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80",
      // Hardware Macro
      "https://images.unsplash.com/photo-1585859707440-f6ac7900b396?auto=format&fit=crop&w=900&q=80",
      // Leather Grain & Edges
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
    ],
    leatherType: "Solid 3.8mm Full-Grain Ambur Bovine Strap",
    tanningProcess: "Drum-Dyed Chrome-Veg Retanned",
    dimensions: "Width: 35mm | Fits waist sizes 30\" to 44\"",
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
    imageAngles: [
      // Gift Box Open View
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
      // Set Display
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
      // Belt Detail
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      // Packaging Detail
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
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

export const BRAND_STORY = {
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
