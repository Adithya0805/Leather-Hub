# DINO-2026 Project Master Roadmap

> **Single Source of Truth (SSOT)** for Dino Leathers engineering, design, data, and launch operations.  
> Target: Authentic, handcrafted bovine leather goods from Ambur, Tamil Nadu (`https://dinoleathers.in`).

---

## 🎯 Diwali MVP Scope
Phases marked with **`[DIWALI MVP]`** constitute the critical release milestone for the upcoming festive launch:
- **P0**: Truth & cleanup
- **P0.5**: Marketplace pivot & wholesale architecture
- **P1**: Design system (light)
- **P2**: Home
- **P3**: Shop & product
- **P6**: Database
- **P7**: Live data & order API
- **P8**: Admin panel (core)
- **P11**: Domain, analytics, audit, launch

---

## 📜 Execution Rules
1. **Single Source of Truth**: Update this `ROADMAP.md` at the start and completion of every phase and task.
2. **Quality Gate Requirement**: Never mark a phase or release milestone `done` without passing all checks in `dino-qa-gate`:
   - TypeScript: 0 errors (`npx tsc --noEmit`), no `any`.
   - ESLint: 0 warnings or errors (`npm run lint`).
   - Next.js Build: Clean production build (`npm run build`).
   - Banned Terms Grep Scan: 0 hits in `src/`, `data/`, `public/` (no fake ratings like `"4.9"`, `"Batch #"`, `"Est. 19"`, `"guaranteed"`, price strikethroughs, competitor brands, uncited numbers).
   - Responsive Layout: Zero horizontal overflow at 360px, 390px, 768px, 1280px.
   - Lighthouse Mobile: Score >= 95, LCP < 2.0s, CLS = 0.
3. **Execution Stop Rule**: **STOP** at the end of each phase and await user review and explicit `"continue"` before advancing to the next phase.

---

## Phase Breakdown

### P0: Truth & Cleanup `[DIWALI MVP]`
*Goal: Remove all fabricated marketing claims, sanitize product schemas, align copy with verified Ambur heritage facts, and establish clean baseline QA.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P0-01** | Banned Terms & Fabricated Claims Audit & Purge | `done` | antigravity | Grep scan for `"4.9"`, `"Batch #"`, `"Est. 19"`, `"guaranteed"`, `line-through` yields 0 matches across `src/`, `data/`, `public/`. | None |
| **DINO-P0-02** | Product Catalog & Schema Integrity Cleanup | `done` | antigravity | `src/data/products.ts` complies strictly with `dino-product-data` schema; categories are strictly `'wallet' \| 'belt'`; unverified prices/specs set to `null` or `TODO`. | None |
| **DINO-P0-03** | Heritage Copy Grounding in `ambur-facts` | `done` | antigravity | All historical, industrial, and ecological claims match the 7 verified facts in `ambur-facts` (CSIR-CLRI 1948, TEE DGFT, 40-45% TN export share, Palar basin origins, CETP ZLD). | None |
| **DINO-P0-04** | Baseline `dino-qa-gate` Audit & Pass Table | `done` | antigravity | Run full `dino-qa-gate` suite; generate clean pass/fail table before proceeding. | None |

---

### P0.5: Marketplace Pivot & Wholesale Architecture `[DIWALI MVP]`
*Business Model: Dino Leathers is an online marketplace-style seller sourcing wallets and belts from small Ambur workshops, selling RETAIL and WHOLESALE. We are NOT the manufacturer.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P0.5-01** | Catalog Reset (6 Wallets, 2 Belts Drafts) | `done` | antigravity | Remove old 4-item list; populate clean `/data/products.ts` with 8 draft items (`category`, `retailPrice`, `wholesalePrice` tiers, `moq`, `colors`, `supplierId`, `priceConfirmed: false`, `brandingStatus: 'unbranded' \| 'dino_embossed'`, `isActive: false`). Server-only `costPrice` kept separate from client bundle. | None |
| **DINO-P0.5-02** | Neutral Sourcing Copy Alignment | `done` | antigravity | Replace every manufacturer/workshop/factory-direct/founded/MC Road claim with "Sourced from trusted Ambur workshops. Quality-checked before dispatch." via `/data/claims.ts` with `confirmed: false`. | None |
| **DINO-P0.5-03** | Wholesale Portal (`/wholesale`) | `done` | antigravity | Dedicated `/wholesale` route explaining MOQ, tier pricing tables, and inquiry form opening structured WhatsApp message with DB-ready schema. | None |
| **DINO-P0.5-04** | Retail Flow Delivery & Shipping Line | `done` | antigravity | WhatsApp checkout modal and bag drawer updated with "Delivery time and shipping charge confirmed on WhatsApp." | None |
| **DINO-P0.5-05** | Extended Banned Terms QA Gate Audit | `done` | antigravity | Run `dino-qa-gate` with extended banned-term list (brands, ratings, fake pricing, unverified claims). 100% PASS table. | None |

---

### P1: Design System (Light) `[DIWALI MVP]`
*Goal: Institutionalize "The Ambur Ledger" design system tokens, typography, grid, and strict motion budgets.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P1-01** | Color Token Standardization | `todo` | antigravity | CSS/Tailwind tokens reflect `#14100D` Canvas, `#1D1713` Surface, `#EFE6D8` Text, `#A8998A` Muted, `#B5651D` Accent, `#8A6A2F` Brass Hairline. | None |
| **DINO-P1-02** | Typography & 8px Grid Enforcement | `todo` | antigravity | Cormorant/Playfair serif headings, Inter sans UI body; all layouts and padding align to strict 8px rhythm (8, 16, 24, 32, 48, 64px). | None |
| **DINO-P1-03** | Motion & Product Card Interaction Rules | `todo` | antigravity | Motion limited to 200–350ms on `opacity` and `transform` only; product cards strictly enforce maximum 1 tag per card (no tag stacking). | None |

---

### P2: Home `[DIWALI MVP]`
*Goal: Craft high-conversion, mobile-first homepage showcasing genuine Ambur bovine leather goods.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P2-01** | Ambur Ledger Hero Narrative | `todo` | antigravity | Editorial banner with provenance citation, authentic imagery, and smooth anchor CTA to catalog. | None |
| **DINO-P2-02** | 8px-Aligned Featured Product Showcase | `todo` | antigravity | Responsive grid presenting wallets and belts with brass hairline borders, honest INR pricing, and zero fake review badges. | None |
| **DINO-P2-03** | Pull-Up Patina Education Section | `todo` | antigravity | Educational full-grain leather aging guide without hype, illustrating vegetable-tanned grain characteristics. | None |
| **DINO-P2-04** | Mobile Thumb Navigation & Announcement Bar | `todo` | antigravity | Bottom navigation bar and announcement banner responsive across 360px–1280px with zero layout shift. | None |

---

### P3: Shop & Product `[DIWALI MVP]`
*Goal: Intuitive category navigation, truthful spec sheets, touch galleries, and personalization preview.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P3-01** | Wallets vs Belts Filter Toggle | `todo` | antigravity | Instant filter toggle between wallet and belt categories without page reload or layout jank. | None |
| **DINO-P3-02** | Transparent Spec Sheet Component | `todo` | antigravity | Displays leather thickness, tanning type, edge burnishing, and hardware details; missing specs cleanly labeled `TODO: [Pending client verification]`. | None |
| **DINO-P3-03** | Mobile-First Product Gallery | `todo` | antigravity | Multi-angle view (front, back, interior, detail) conforming to `dino-[category]-[slug]-[color]-[angle].webp` naming standards. | Waiting for client photos |
| **DINO-P3-04** | Embossing Studio Initial Customizer | `todo` | antigravity | Interactive initials customizer (blind deboss / gold foil) with preview, character limiter, and live validation. | None |

---

### P4: Story & Bilingual
*Goal: Honor Ambur's centuries-old tanning legacy with deep-dive journalism and Tamil/English bilingual capability.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P4-01** | Ambur Heritage Deep Dive (`/ambur-heritage`) | `todo` | antigravity | Interactive archive highlighting CSIR-CLRI 1948 founding, Palar river basin history, and modern ZLD CETP infrastructure. | None |
| **DINO-P4-02** | Tamil & English Language Switcher | `todo` | antigravity | Clean header toggle rendering verified Tamil translations (தோல், பாரம்பரியம், அம்பூர்) without layout breaks. | Translation review |
| **DINO-P4-03** | Artisan Workshop Photo Essay | `todo` | antigravity | High-res photo journal of pattern cutting, skiving, and hand-saddle stitching in Ambur workshops. | Waiting for artisan footage |

---

### P5: Bag, PWA, SEO & QA
*Goal: Robust offline capabilities, mobile installability, persistent bag state, and peak search indexation.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P5-01** | Cart Drawer & Persistent State | `todo` | antigravity | Cart drawer with quantity increment, item deletion, local persistence, and free delivery threshold indicator. | None |
| **DINO-P5-02** | PWA Web App Manifest & Service Worker | `todo` | antigravity | `manifest.webmanifest` configured with icons, standalone display mode, and service worker caching static routes. | None |
| **DINO-P5-03** | Rich Snippet Schemas & GEO Optimization | `todo` | antigravity | Validate `LocalBusiness`, `Product`, `Offer`, `BreadcrumbList` via Google Rich Results; verify `llms.txt` and `robots.ts`. | None |
| **DINO-P5-04** | Multi-Device Responsive & Speed Audit | `todo` | antigravity | Tested on physical/emulated viewports (360px, 390px, 768px, 1280px); Lighthouse mobile score >= 95. | None |

---

### P6: Database `[DIWALI MVP]`
*Goal: Resilient PostgreSQL / Supabase backend architecture with strict security and seed data.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P6-01** | Supabase Relational Schema Creation | `done` | antigravity | Core tables created: `categories`, `products`, `orders`, `order_items` with proper foreign keys and constraints. | None |
| **DINO-P6-02** | Row Level Security (RLS) & Access Policies | `done` | antigravity | RLS enabled on all tables; public read for active products; zero public leak of confidential records. | None |
| **DINO-P6-03** | Master Catalog Seed Migration | `done` | antigravity | SQL seed script synchronizing categories, 8 draft catalog items, and draft attributes into Supabase. | None |
| **DINO-P6-04** | Wholesale & Supplier Marketplace Schema | `done` | antigravity | Added `suppliers` (admin-only), `product_cost` (admin-only), `wholesale_price_tiers` (public read), `wholesale_inquiries` (RLS insert-blocked for anon; server route insertion only), and `orders.customer_type` ('retail'\|'wholesale') with 'sent_to_supplier' and 'quality_checked' statuses. | None |

---

### P7: Live Data & Order API `[DIWALI MVP]`
*Goal: Connect client frontend to live Supabase backend and implement frictionless WhatsApp direct checkout.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P7-01** | Supabase Client Data Layer Integration | `todo` | antigravity | Frontend fetches products dynamically from Supabase with fallback to cached static ISR data on error. | None |
| **DINO-P7-02** | Order Processing API Endpoint (`/api/orders`) | `todo` | antigravity | Next.js API route validating order payloads, calculating totals, creating DB records, and returning structured IDs. | None |
| **DINO-P7-03** | WhatsApp Direct Order Dispatcher | `todo` | antigravity | Generates pre-formatted WhatsApp chat link with itemized breakdown, chosen color, embossing initials, and delivery address. | Client WhatsApp number |

---

### P8: Admin Panel (Core) `[DIWALI MVP]`
*Goal: Secure back-office operations for order fulfillment and catalog adjustments.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P8-01** | Admin Authentication & Route Protection | `todo` | antigravity | `/admin` routes protected via Supabase Auth session or secure server-side middleware. | None |
| **DINO-P8-02** | Order Fulfillment Console | `todo` | antigravity | Admin view listing orders with search, date filters, and status progression (`pending` -> `processing` -> `shipped` -> `delivered`). | None |
| **DINO-P8-03** | Real-Time Inventory & Price Adjuster | `todo` | antigravity | Admin control to toggle product availability or adjust stock quantities without requiring application redeployment. | None |

---

### P9: Order Tracking
*Goal: Post-purchase peace of mind with real-time shipment transparency.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P9-01** | Self-Service Tracking Portal (`/track`) | `todo` | antigravity | Customers can look up status by Order ID and Phone Number. | None |
| **DINO-P9-02** | Visual Fulfillment Stepper | `todo` | antigravity | Visual step-indicator: Order Placed -> Embossing/Workshop -> Dispatched -> Out for Delivery. | None |
| **DINO-P9-03** | Automated Tracking Updates | `todo` | antigravity | Webhook / SMS dispatch notification integration with carrier tracking link. | Logistics partner API |

---

### P10: Conversion & Verified Reviews
*Goal: Credibility acceleration with verified customer feedback and festive gifting packages.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P10-01** | Verified Buyer Review Pipeline | `todo` | antigravity | Review submission restricted to verified order IDs; strictly zero unverified testimonials. | None |
| **DINO-P10-02** | Community Patina Photo Gallery | `todo` | antigravity | Customer upload feature for 6-month and 1-year aged leather items with moderation queue. | None |
| **DINO-P10-03** | Festive Corporate Gifting Flow | `todo` | antigravity | Dedicated bulk gifting inquiry form with custom embossing and gift packaging calculator. | Gifting catalog photos |

---

### P11: Domain, Analytics, Audit & Launch `[DIWALI MVP]`
*Goal: Production domain rollout, search console registration, final QA gate validation, and commercial launch.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P11-01** | Custom Domain & SSL Deployment | `todo` | me | `dinoleathers.in` resolving securely with valid SSL certificate and canonical www/non-www redirect. | Domain DNS access |
| **DINO-P11-02** | Search Console & Analytics Activation | `todo` | me | Google Search Console ownership verified; `sitemap.xml` submitted; privacy-compliant analytics tracking visits. | GSC verification |
| **DINO-P11-03** | Final Diwali MVP `dino-qa-gate` Certification | `todo` | antigravity | Complete `dino-qa-gate` audit table generated with 100% PASS across TypeScript, ESLint, Build, Grep, Responsive, and Lighthouse. | None |
| **DINO-P11-04** | Commercial Production Release | `todo` | me / antigravity | Storefront live for public purchasing with verified checkout and active stock. | Client signoff |

---

### P12: Ask Dino & Growth
*Goal: AI-powered conversational leather care and international wholesale expansion.*

| Task Code | Task Description | Status | Owner | Acceptance Test | Blocker |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **DINO-P12-01** | "Ask Dino" Leather Concierge (Gemini API) | `todo` | antigravity | Conversational agent answering leather care, conditioning, and patina queries grounded in genuine artisan advice. | Gemini API key |
| **DINO-P12-02** | Wholesale & Export Inquiry Portal | `todo` | antigravity | B2B buyer form capturing bulk requirements, citing Ambur TEE credentials and export standards. | Export terms sheet |
| **DINO-P12-03** | Continuous AI Citation & GEO Monitoring | `todo` | antigravity | Periodic audits ensuring Dino Leathers is cited by Perplexity, Gemini, and ChatGPT Search for Ambur leather queries. | None |

---

## 🚦 Phase Status Tracker
- [x] **P0: Truth & cleanup** `[DIWALI MVP]` *(DONE)*
- [x] **P0.5: Marketplace pivot & wholesale architecture** `[DIWALI MVP]` *(DONE)*
- [ ] **P1: Design system (light)** `[DIWALI MVP]`
- [ ] **P2: Home** `[DIWALI MVP]`
- [ ] **P3: Shop & product** `[DIWALI MVP]`
- [ ] **P4: Story & bilingual**
- [ ] **P5: Bag/PWA/SEO/QA**
- [ ] **P6: Database** `[DIWALI MVP]`
- [ ] **P7: Live data & order API** `[DIWALI MVP]`
- [ ] **P8: Admin panel (core)** `[DIWALI MVP]`
- [ ] **P9: Order tracking**
- [ ] **P10: Conversion & verified reviews**
- [ ] **P11: Domain, analytics, audit, launch** `[DIWALI MVP]`
- [ ] **P12: Ask Dino & growth**
