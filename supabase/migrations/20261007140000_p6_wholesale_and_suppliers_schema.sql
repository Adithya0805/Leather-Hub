-- ==============================================================================
-- DINO LEATHERS — P6 SCHEMA MIGRATION: SUPPLIERS, WHOLESALE & ORDER EXTENSIONS
-- ==============================================================================

-- 1. EXTEND ORDER ENUM STATUSES
-- Add 'sent_to_supplier' and 'quality_checked'
ALTER TYPE order_status ADD VALUE IF NOT EXISTS 'sent_to_supplier';
ALTER TYPE order_status ADD VALUE IF NOT EXISTS 'quality_checked';

-- 2. EXTEND ORDERS TABLE
-- Add customer_type ('retail' | 'wholesale')
ALTER TABLE orders 
  ADD COLUMN IF NOT EXISTS customer_type TEXT NOT NULL DEFAULT 'retail' 
  CHECK (customer_type IN ('retail', 'wholesale'));

-- 3. CREATE SUPPLIERS TABLE (ADMIN-ONLY, NO PUBLIC ACCESS)
CREATE TABLE IF NOT EXISTS suppliers (
  id TEXT PRIMARY KEY, -- e.g. 'ambur-ws-01'
  shop_name TEXT NOT NULL,
  contact TEXT NOT NULL,
  city TEXT NOT NULL DEFAULT 'Ambur',
  notes TEXT, -- Confidential notes, payment terms, workshop capability
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW())
);

DROP TRIGGER IF EXISTS trigger_update_suppliers_updated_at ON suppliers;
CREATE TRIGGER trigger_update_suppliers_updated_at
  BEFORE UPDATE ON suppliers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 4. CREATE PRODUCT_COST TABLE (ADMIN-ONLY, NO PUBLIC ACCESS)
CREATE TABLE IF NOT EXISTS product_cost (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id TEXT NOT NULL REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
  supplier_id TEXT NOT NULL REFERENCES suppliers(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  cost_price INT NOT NULL CHECK (cost_price >= 0),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  CONSTRAINT uq_product_supplier_cost UNIQUE (product_id, supplier_id)
);

DROP TRIGGER IF EXISTS trigger_update_product_cost_updated_at ON product_cost;
CREATE TRIGGER trigger_update_product_cost_updated_at
  BEFORE UPDATE ON product_cost
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 5. CREATE WHOLESALE_PRICE_TIERS TABLE (PUBLIC READ FOR CATALOG DISPLAY)
CREATE TABLE IF NOT EXISTS wholesale_price_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id TEXT NOT NULL REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
  min_qty INT NOT NULL CHECK (min_qty > 0),
  price INT NOT NULL CHECK (price >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  CONSTRAINT uq_product_min_qty UNIQUE (product_id, min_qty)
);

-- 6. CREATE WHOLESALE_INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS wholesale_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  product_interest TEXT NOT NULL,
  quantity INT NOT NULL CHECK (quantity >= 1),
  gstin TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'converted', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT TIMEZONE('utc'::text, NOW())
);

DROP TRIGGER IF EXISTS trigger_update_wholesale_inquiries_updated_at ON wholesale_inquiries;
CREATE TRIGGER trigger_update_wholesale_inquiries_updated_at
  BEFORE UPDATE ON wholesale_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 7. PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_suppliers_city ON suppliers(city);
CREATE INDEX IF NOT EXISTS idx_product_cost_product_id ON product_cost(product_id);
CREATE INDEX IF NOT EXISTS idx_product_cost_supplier_id ON product_cost(supplier_id);
CREATE INDEX IF NOT EXISTS idx_wholesale_tiers_product_id ON wholesale_price_tiers(product_id);
CREATE INDEX IF NOT EXISTS idx_wholesale_inquiries_status ON wholesale_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_wholesale_inquiries_created_at ON wholesale_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_customer_type ON orders(customer_type);

-- 8. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_cost ENABLE ROW LEVEL SECURITY;
ALTER TABLE wholesale_price_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE wholesale_inquiries ENABLE ROW LEVEL SECURITY;

-- 8.1 SUPPLIERS RLS: STRICT ADMIN-ONLY (Zero public access)
-- No policies granted for anon or authenticated users.
-- Only service_role (which bypasses RLS) can access.

-- 8.2 PRODUCT_COST RLS: STRICT ADMIN-ONLY (Zero public access)
-- No policies granted for anon or authenticated users.
-- Only service_role (which bypasses RLS) can access.

-- 8.3 WHOLESALE_PRICE_TIERS RLS: Publicly readable
DROP POLICY IF EXISTS "Public can view wholesale price tiers" ON wholesale_price_tiers;
CREATE POLICY "Public can view wholesale price tiers"
  ON wholesale_price_tiers
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- 8.4 WHOLESALE_INQUIRIES RLS:
-- Never publicly readable (No SELECT policy for anon or authenticated).
-- Direct anon INSERT is denied by default (no INSERT policy for anon).

-- 9. SERVER-SIDE RPC FUNCTION (FOR SECURE SERVER-ROUTE SUBMISSION)
CREATE OR REPLACE FUNCTION submit_wholesale_inquiry(
  p_business_name TEXT,
  p_contact_name TEXT,
  p_phone TEXT,
  p_city TEXT,
  p_product_interest TEXT,
  p_quantity INT,
  p_gstin TEXT DEFAULT NULL,
  p_notes TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_new_id UUID;
BEGIN
  IF p_business_name IS NULL OR trim(p_business_name) = '' THEN
    RAISE EXCEPTION 'Business name is required';
  END IF;

  IF p_contact_name IS NULL OR trim(p_contact_name) = '' THEN
    RAISE EXCEPTION 'Contact name is required';
  END IF;

  IF p_phone IS NULL OR length(regexp_replace(p_phone, '\D', '', 'g')) < 10 THEN
    RAISE EXCEPTION 'Valid 10-digit phone number is required';
  END IF;

  IF p_quantity IS NULL OR p_quantity < 1 THEN
    RAISE EXCEPTION 'Quantity must be at least 1';
  END IF;

  INSERT INTO wholesale_inquiries (
    business_name,
    contact_name,
    phone,
    city,
    product_interest,
    quantity,
    gstin,
    notes,
    status
  ) VALUES (
    trim(p_business_name),
    trim(p_contact_name),
    trim(p_phone),
    trim(p_city),
    p_product_interest,
    p_quantity,
    NULLIF(trim(p_gstin), ''),
    NULLIF(trim(p_notes), ''),
    'new'
  )
  RETURNING id INTO v_new_id;

  RETURN jsonb_build_object(
    'success', true,
    'id', v_new_id,
    'message', 'Wholesale inquiry recorded successfully'
  );
END;
$$;
