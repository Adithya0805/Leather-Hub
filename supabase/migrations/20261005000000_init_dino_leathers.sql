-- ==============================================================================
-- DINO LEATHERS — PRODUCTION DATABASE MIGRATION
-- Checkpoint 2: Schema, Constraints, RLS Security, and Catalog Seed Data
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 2. ENUMS & DOMAINS
-- ==============================================================================

-- Order Lifecycle Statuses:
-- pending_payment: WhatsApp order generated, waiting for UPI confirmation
-- paid: Payment verified by artisan team
-- embossing: Undergoing custom hot-foil or blind-debossing in workshop
-- shipped: Dispatched via courier with tracking
-- delivered: Safely received by customer
-- cancelled: Cancelled by customer or out-of-stock
CREATE TYPE order_status AS ENUM (
  'pending_payment',
  'paid',
  'embossing',
  'shipped',
  'delivered',
  'cancelled'
);

-- ==============================================================================
-- 3. TABLES
-- ==============================================================================

-- 3.1 CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY, -- 'wallets', 'cardholders', 'belts', 'gift-sets'
  name TEXT NOT NULL,
  label TEXT NOT NULL,
  description TEXT,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 3.2 PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY, -- e.g. 'classic-bifold-coin-wallet'
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category_id TEXT NOT NULL REFERENCES categories(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  category_label TEXT NOT NULL,
  tag TEXT,
  price INT NOT NULL CHECK (price >= 0),
  original_price INT NOT NULL CHECK (original_price >= price),
  discount_percentage INT GENERATED ALWAYS AS (
    CASE 
      WHEN original_price > 0 THEN ROUND(((original_price - price)::numeric / original_price::numeric) * 100)
      ELSE 0 
    END
  ) STORED,
  stock INT NOT NULL DEFAULT 50 CHECK (stock >= 0),
  images TEXT[] NOT NULL DEFAULT '{}',
  card_image TEXT,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  variants JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of { name, hex, inStock }
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  leather_type TEXT NOT NULL,
  tanning_process TEXT NOT NULL,
  dimensions TEXT NOT NULL,
  warranty TEXT NOT NULL,
  provenance TEXT NOT NULL DEFAULT 'Ambur, Tamil Nadu • Factory Direct',
  rating NUMERIC(2, 1) NOT NULL DEFAULT 4.9 CHECK (rating >= 1.0 AND rating <= 5.0),
  reviews_count INT NOT NULL DEFAULT 0 CHECK (reviews_count >= 0),
  embossing_available BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 3.3 ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_code TEXT UNIQUE NOT NULL, -- e.g. '#DINO-4892'
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  pincode TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'Tamil Nadu',
  totals INT NOT NULL CHECK (totals >= 0), -- Grand total in INR (free shipping)
  status order_status NOT NULL DEFAULT 'pending_payment',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 3.4 ORDER ITEMS TABLE
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL REFERENCES products(id) ON UPDATE CASCADE,
  product_name TEXT NOT NULL,
  qty INT NOT NULL CHECK (qty > 0),
  unit_price INT NOT NULL CHECK (unit_price >= 0),
  total_price INT NOT NULL CHECK (total_price >= 0),
  color TEXT NOT NULL,
  waist_size TEXT, -- For belts e.g. '34" (Medium)'
  monogram_text TEXT, -- e.g. 'V.S.R'
  emboss_style TEXT CHECK (emboss_style IN ('blind', 'gold') OR emboss_style IS NULL),
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW())
);

-- ==============================================================================
-- 4. PERFORMANCE INDEXES
-- ==============================================================================

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(active);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

CREATE INDEX IF NOT EXISTS idx_orders_code ON orders(order_code);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- ==============================================================================
-- 5. AUTOMATIC UPDATED_AT TRIGGER
-- ==============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_categories_updated_at ON categories;
CREATE TRIGGER trigger_update_categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_update_products_updated_at ON products;
CREATE TRIGGER trigger_update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_update_orders_updated_at ON orders;
CREATE TRIGGER trigger_update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ==============================================================================
-- 6. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all 4 tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- ------------------------------------------------------------------------------
-- 6.1 CATEGORIES RLS
-- Public can read all categories.
-- ------------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can view categories" ON categories;
CREATE POLICY "Public can view categories"
  ON categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- ------------------------------------------------------------------------------
-- 6.2 PRODUCTS RLS
-- Public can ONLY view ACTIVE products.
-- Inactive products are shielded from public catalog view.
-- ------------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can view active products" ON products;
CREATE POLICY "Public can view active products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (active = TRUE);

-- ------------------------------------------------------------------------------
-- 6.3 ORDERS & ORDER_ITEMS RLS
-- Zero public access.
-- Neither anon nor unprivileged authenticated users can SELECT, INSERT, UPDATE, or DELETE.
-- All writes occur strictly through server-side Route Handlers via SUPABASE_SERVICE_ROLE_KEY
-- which inherently bypasses RLS in Postgres/Supabase.
-- ------------------------------------------------------------------------------
-- (No SELECT/INSERT/UPDATE/DELETE policies granted to anon or authenticated users)

-- ==============================================================================
-- 7. SEED DATA (CURRENT 4 CORE DINO LEATHERS CATALOG PRODUCTS)
-- ==============================================================================

-- 7.1 SEED CATEGORIES
INSERT INTO categories (id, name, label, description, display_order)
VALUES
  ('wallets', 'Wallets', 'Full-Grain Wallets', 'Handcrafted Ambur bovine leather bi-folds with coin compartments', 1),
  ('cardholders', 'RFID Cardholders', 'Cardholders', 'Ultra-slim RFID-shielded minimalist front-pocket wallets', 2),
  ('belts', 'Reversible Belts', 'Artisan Belts', 'Automatic micro-ratchet and dual-tone solid bovine leather belts', 3),
  ('gift-sets', '2-in-1 Gift Boxes', 'Curated Gift Sets', 'Executive wooden keepsake presentation sets ready for gifting', 4)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  label = EXCLUDED.label,
  description = EXCLUDED.description,
  display_order = EXCLUDED.display_order;

-- 7.2 SEED PRODUCTS
INSERT INTO products (
  id,
  slug,
  name,
  category_id,
  category_label,
  tag,
  price,
  original_price,
  stock,
  images,
  card_image,
  active,
  variants,
  description,
  short_description,
  features,
  leather_type,
  tanning_process,
  dimensions,
  warranty,
  provenance,
  rating,
  reviews_count,
  embossing_available
)
VALUES
  (
    'classic-bifold-coin-wallet',
    'classic-bifold-coin-wallet',
    'Classic Bi-Fold Coin Wallet',
    'wallets',
    'Full-Grain Wallets',
    'Ambur Bestseller',
    899,
    1499,
    45,
    ARRAY[
      '/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-hero-1x1-960.webp',
      '/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-tan-display-1x1-960.webp',
      '/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-interior-passcase-1x1-960.webp',
      '/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-macro-grain-1x1-960.webp'
    ],
    '/images/products/classic-bifold-coin-wallet/classic-bifold-coin-wallet-hero-4x5-960.webp',
    TRUE,
    '[
      {"name": "Ambur Tan", "hex": "#C89D66", "inStock": true},
      {"name": "Espresso Black", "hex": "#1A1412", "inStock": true},
      {"name": "Vintage Cognac", "hex": "#8B4513", "inStock": true}
    ]'::jsonb,
    'Handcrafted by veteran artisans in Ambur, this signature bi-fold is forged from oil pull-up full-grain bovine leather. Engineered with an expandable gusset coin pocket, dual currency partitions, and 6 quick-draw card slots, it develops a deep, rich marble patina that uniquely mirrors your daily journey.',
    'Oil pull-up full-grain Ambur leather with coin pocket & heirloom patina finish.',
    ARRAY[
      '100% Genuine Ambur Bovine Full-Grain Leather',
      'Signature Oil Pull-up finish with quick scratch self-healing patina',
      'Expandable brass-snap coin compartment',
      '6 precision-cut card slots & 2 concealed slip pockets',
      'Full-length dual currency partition tailored for Indian Rupee banknotes',
      'Reinforced bonded nylon saddle-stitching',
      'Complimentary laser/hot-stamped custom initials embossing'
    ],
    'Full-Grain Bovine Oil Pull-Up Leather',
    'Semi-Vegetable Tanned in Ambur Tannery Cluster',
    '11.5 cm x 9.2 cm x 1.8 cm',
    '5-Year Stitching & Leather Guarantee',
    'Ambur, Tamil Nadu • Factory Direct',
    4.9,
    128,
    TRUE
  ),
  (
    'minimalist-slim-rfid-cardholder',
    'minimalist-slim-rfid-cardholder',
    'Minimalist Slim RFID Cardholder',
    'cardholders',
    'RFID Cardholders',
    'Front-Pocket Essential',
    599,
    999,
    60,
    ARRAY[
      '/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-hero-1x1-960.webp',
      '/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-tan-sleeve-1x1-960.webp',
      '/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-black-interior-1x1-960.webp',
      '/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-macro-grain-1x1-960.webp'
    ],
    '/images/products/minimalist-slim-rfid-cardholder/minimalist-slim-rfid-cardholder-hero-4x5-960.webp',
    TRUE,
    '[
      {"name": "Crazy Horse Tan", "hex": "#B87333", "inStock": true},
      {"name": "Carbon Black", "hex": "#1F1F1F", "inStock": true},
      {"name": "Hunter Green", "hex": "#2E4F4F", "inStock": true}
    ]'::jsonb,
    'Eliminate pocket bulge without relinquishing luxury. Sliced to an ultra-thin 4mm silhouette from resilient Crazy Horse wax-treated cowhide, this cardholder features military-grade RFID Faraday lining to thwart digital skimming.',
    'Ultra-thin 4mm profile with RFID-blocking core and central cash sleeve.',
    ARRAY[
      'Wax-treated Ambur Crazy Horse top-layer bovine leather',
      'German-engineered 13.56 MHz RFID signal-blocking inner lining',
      '4 rapid-access card slots + deep center cash/folded note pocket',
      'Burnished and waxed raw edges that never fray or peel',
      'Ultra-compact featherweight profile (only 28 grams)',
      'Free custom monogram embossing on lower bezel'
    ],
    'Crazy Horse Full-Grain Waxed Cowhide',
    'Heavy Wax Impregnation & Mineral Tanning',
    '10.2 cm x 7.4 cm x 0.4 cm',
    '3-Year Structure & Edge Guarantee',
    'Ambur, Tamil Nadu • Factory Direct',
    4.9,
    94,
    TRUE
  ),
  (
    'reversible-formal-casual-belt',
    'reversible-formal-casual-belt',
    'Executive Automatic Ratchet Leather Belt',
    'belts',
    'Artisan Belts',
    'Micro-Adjust Precision',
    1199,
    1999,
    35,
    ARRAY[
      '/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-1x1-960.webp',
      '/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-angle-lifestyle-1x1-960.webp',
      '/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hardware-mechanism-1x1-960.webp',
      '/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-giftbox-display-1x1-960.webp',
      '/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-worn-lifestyle-1x1-960.webp',
      '/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-macro-grain-1x1-960.webp'
    ],
    '/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-4x5-960.webp',
    TRUE,
    '[
      {"name": "Executive Jet Black", "hex": "#111111", "inStock": true},
      {"name": "Ambur Cognac Tan", "hex": "#7B3F00", "inStock": true}
    ]'::jsonb,
    'Crafted from premium 3.8mm solid full-grain Ambur bovine leather, this executive belt pairs timeless leathercraft with modern ratchet engineering. Featuring an automatic micro-adjustment track with 32 millimeter-precise positions and a brushed stainless steel buckle with quick-release knurled lever, offering a perfect tailored fit with zero holes and zero creasing.',
    'Solid full-grain strap with 32-position automatic ratchet buckle.',
    ARRAY[
      'Solid single-ply 3.8mm thick Ambur bovine leather (Zero bonded cardboard fillers)',
      'Brushed stainless alloy automatic buckle with geometric signature emblem',
      'Hidden 32-step micro-adjustment track with 1/4" precision fitting (No ugly holes)',
      'Instant quick-release ergonomic side lever for effortless adjustment',
      'Perimeter saddle-stitching with feather-beveled hand-burnished edges',
      'Trimmable DIY sizing system to customize fit perfectly from 28" to 46" waist',
      'Includes luxury keepsake walnut presentation gift box & guarantee certificate',
      'Complimentary custom hot-stamped monogram on inner strap tip'
    ],
    'Solid 3.8mm Full-Grain Ambur Bovine Strap',
    'Drum-Dyed Chrome-Veg Retanned',
    'Width: 35mm | Fits waist sizes 28" to 46"',
    '7-Year Anti-Cracking & Buckle Guarantee',
    'Ambur, Tamil Nadu • Factory Direct',
    4.9,
    112,
    TRUE
  ),
  (
    'ambur-heritage-2in1-gift-box',
    'ambur-heritage-2in1-gift-box',
    'Ambur Heritage 2-in-1 Executive Gift Box',
    'gift-sets',
    'Curated Gift Sets',
    'Signature Gift Curation',
    1499,
    2999,
    25,
    ARRAY[
      '/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-hero-1x1-960.webp',
      '/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-unboxing-tan-1x1-960.webp',
      '/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-unboxing-black-1x1-960.webp',
      '/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-macro-packaging-1x1-960.webp'
    ],
    '/images/products/ambur-heritage-2in1-gift-box/ambur-heritage-2in1-gift-box-hero-4x5-960.webp',
    TRUE,
    '[
      {"name": "Royal Tan & Brass", "hex": "#C89D66", "inStock": true},
      {"name": "Executive Black & Silver", "hex": "#1A1412", "inStock": true}
    ]'::jsonb,
    'The quintessential embodiment of Ambur leather craftsmanship presented in a bespoke rigid keepsake box. Pairs our bestselling Full-Grain Bi-Fold Coin Wallet with the reversible solid bovine leather belt.',
    'Curated duo of Bi-Fold Coin Wallet & Reversible Belt in gift packaging.',
    ARRAY[
      'Includes Full-Grain Ambur Bi-Fold Wallet & Matching Reversible Bovine Belt',
      'Solid pine and rigid matte-black presentation box with satin pull-ribbon',
      'Free dual personalization: Matching monogram on both wallet and belt',
      'Certificate of Authenticity directly signed by master tannery inspector',
      'Factory-direct pricing offering over 55% savings versus retail luxury boutiques',
      'Tamper-proof transit packaging with wax-sealed ribbon ready for direct gifting'
    ],
    '100% Genuine Ambur Full-Grain Bovine Leather',
    'Signature Palar-Basin Artisan Tanning',
    'Gift Box: 26 cm x 20 cm x 6.5 cm',
    '5-Year Replacement Warranty on Both Articles',
    'Ambur, Tamil Nadu • Factory Direct',
    5.0,
    67,
    TRUE
  )
ON CONFLICT (id) DO UPDATE SET
  slug = EXCLUDED.slug,
  name = EXCLUDED.name,
  category_id = EXCLUDED.category_id,
  category_label = EXCLUDED.category_label,
  tag = EXCLUDED.tag,
  price = EXCLUDED.price,
  original_price = EXCLUDED.original_price,
  stock = EXCLUDED.stock,
  images = EXCLUDED.images,
  card_image = EXCLUDED.card_image,
  active = EXCLUDED.active,
  variants = EXCLUDED.variants,
  description = EXCLUDED.description,
  short_description = EXCLUDED.short_description,
  features = EXCLUDED.features,
  leather_type = EXCLUDED.leather_type,
  tanning_process = EXCLUDED.tanning_process,
  dimensions = EXCLUDED.dimensions,
  warranty = EXCLUDED.warranty,
  provenance = EXCLUDED.provenance,
  rating = EXCLUDED.rating,
  reviews_count = EXCLUDED.reviews_count,
  embossing_available = EXCLUDED.embossing_available;
