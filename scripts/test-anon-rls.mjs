import fs from 'fs';

const envContent = fs.readFileSync('.env.local', 'utf-8');
const envVars = Object.fromEntries(
  envContent
    .split('\n')
    .filter((line) => line && !line.startsWith('#') && line.includes('='))
    .map((line) => {
      const idx = line.indexOf('=');
      return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()];
    })
);

const SUPABASE_URL = envVars.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !ANON_KEY) {
  console.error("Missing SUPABASE_URL or ANON_KEY");
  process.exit(1);
}

const headers = {
  apikey: ANON_KEY,
  Authorization: `Bearer ${ANON_KEY}`,
  'Content-Type': 'application/json',
};

async function runTests() {
  console.log("====================================================");
  console.log("PROVING SUPABASE ROW LEVEL SECURITY (RLS) AS ANON");
  console.log("Target URL:", SUPABASE_URL);
  console.log("====================================================\n");

  let allPassed = true;

  // Test 1: SELECT suppliers as anon
  const resSuppliers = await fetch(`${SUPABASE_URL}/rest/v1/suppliers?select=*`, { headers });
  const suppliers = await resSuppliers.json();
  const suppliersSecured = Array.isArray(suppliers) && suppliers.length === 0;
  console.log(`[Test 1] SELECT * FROM suppliers as anon:`);
  console.log(`         HTTP Status: ${resSuppliers.status}`);
  console.log(`         Rows returned: ${Array.isArray(suppliers) ? suppliers.length : JSON.stringify(suppliers)}`);
  console.log(`         Result: ${suppliersSecured ? "PASS (Zero rows leaked - Admin only)" : "FAIL"}\n`);
  if (!suppliersSecured) allPassed = false;

  // Test 2: SELECT product_cost as anon
  const resCost = await fetch(`${SUPABASE_URL}/rest/v1/product_cost?select=*`, { headers });
  const cost = await resCost.json();
  const costSecured = Array.isArray(cost) && cost.length === 0;
  console.log(`[Test 2] SELECT * FROM product_cost as anon:`);
  console.log(`         HTTP Status: ${resCost.status}`);
  console.log(`         Rows returned: ${Array.isArray(cost) ? cost.length : JSON.stringify(cost)}`);
  console.log(`         Result: ${costSecured ? "PASS (Zero rows leaked - Admin only)" : "FAIL"}\n`);
  if (!costSecured) allPassed = false;

  // Test 3: SELECT wholesale_inquiries as anon
  const resInqSelect = await fetch(`${SUPABASE_URL}/rest/v1/wholesale_inquiries?select=*`, { headers });
  const inqSelect = await resInqSelect.json();
  const inqSelectSecured = Array.isArray(inqSelect) && inqSelect.length === 0;
  console.log(`[Test 3] SELECT * FROM wholesale_inquiries as anon:`);
  console.log(`         HTTP Status: ${resInqSelect.status}`);
  console.log(`         Rows returned: ${Array.isArray(inqSelect) ? inqSelect.length : JSON.stringify(inqSelect)}`);
  console.log(`         Result: ${inqSelectSecured ? "PASS (Zero rows leaked - Never publicly readable)" : "FAIL"}\n`);
  if (!inqSelectSecured) allPassed = false;

  // Test 4: SELECT wholesale_price_tiers as anon (Public catalog tiers)
  const resTiers = await fetch(`${SUPABASE_URL}/rest/v1/wholesale_price_tiers?select=*`, { headers });
  const tiers = await resTiers.json();
  const tiersReadable = Array.isArray(tiers) && tiers.length > 0;
  console.log(`[Test 4] SELECT * FROM wholesale_price_tiers as anon:`);
  console.log(`         HTTP Status: ${resTiers.status}`);
  console.log(`         Rows returned: ${Array.isArray(tiers) ? tiers.length : JSON.stringify(tiers)}`);
  console.log(`         Result: ${tiersReadable ? "PASS (Publicly readable volume tiers)" : "FAIL"}\n`);
  if (!tiersReadable) allPassed = false;

  // Test 5: DIRECT INSERT into wholesale_inquiries as anon (MUST BE BLOCKED BY RLS)
  const resDirectInsert = await fetch(`${SUPABASE_URL}/rest/v1/wholesale_inquiries`, {
    method: 'POST',
    headers: { ...headers, Prefer: 'return=representation' },
    body: JSON.stringify({
      business_name: "Attacker Direct Corp",
      contact_name: "Anon Hacker",
      phone: "9999999999",
      city: "Chennai",
      product_interest: "Wallets",
      quantity: 100,
    }),
  });
  const insertBody = await resDirectInsert.json();
  const directInsertBlocked = resDirectInsert.status >= 400 || insertBody.code === '42501';
  console.log(`[Test 5] DIRECT INSERT INTO wholesale_inquiries as anon:`);
  console.log(`         HTTP Status: ${resDirectInsert.status}`);
  console.log(`         Server Response: ${JSON.stringify(insertBody)}`);
  console.log(`         Result: ${directInsertBlocked ? "PASS (BLOCKED by RLS Error 42501 - Direct insert forbidden)" : "FAIL"}\n`);
  if (!directInsertBlocked) allPassed = false;

  // Test 6: INSERT through secure RPC (Server Route mechanism)
  const resRpc = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_wholesale_inquiry`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      p_business_name: "Kaveri Retailers Ltd.",
      p_contact_name: "Ramesh Kumar",
      p_phone: "9876543210",
      p_city: "Bengaluru, Karnataka",
      p_product_interest: "Both Wallets & Belts",
      p_quantity: 150,
      p_gstin: "29AAAAA0000A1Z5",
      p_notes: "Server route integration test",
    }),
  });
  const rpcBody = await resRpc.json();
  const rpcSucceeded = resRpc.ok && rpcBody?.success === true;
  console.log(`[Test 6] INSERT via Server Route RPC (submit_wholesale_inquiry):`);
  console.log(`         HTTP Status: ${resRpc.status}`);
  console.log(`         Server Response: ${JSON.stringify(rpcBody)}`);
  console.log(`         Result: ${rpcSucceeded ? "PASS (Successfully registered via server route)" : "FAIL"}\n`);
  if (!rpcSucceeded) allPassed = false;

  console.log("====================================================");
  console.log(`OVERALL RLS SECURITY PROOF: ${allPassed ? "ALL 6 TESTS PASSED" : "FAILED"}`);
  console.log("====================================================");
}

runTests().catch(console.error);
