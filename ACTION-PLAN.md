# SEO Action Plan: Dino Leathers

**Roadmap Version**: 1.0  
**Target**: Dino Leathers (`https://dinoleathers.in`)  
**Based on**: Agentic SEO Sub-Skills (`seo-technical`, `seo-schema`, `seo-sitemap`, `seo-geo`, `seo-github`)

---

## Phase 1: Core Foundation & Search Crawling (COMPLETED ✅)

- [x] **Dynamic Sitemap Generation (`/sitemap.xml`)**
  - **File**: `src/app/sitemap.ts`
  - **Details**: Provides search engines with canonical URLs, priority values, and modification dates for all pages and catalog items.
- [x] **Automated Crawl Policy (`/robots.txt`)**
  - **File**: `src/app/robots.ts`
  - **Details**: Directs search engine crawlers to `/sitemap.xml` and explicitly allows AI answer engine crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
- [x] **Generative Engine Optimization (`/llms.txt`)**
  - **File**: `public/llms.txt`
  - **Details**: Follows the `llmstxt.org` standard, anchoring the brand's verified Ambur heritage, 5-year patina guarantee, and product SKUs for direct AI citations.
- [x] **Schema.org Rich Results Graph Enhancement**
  - **File**: `src/components/LocalBusinessSchema.tsx`
  - **Details**: Added `WebSite` and `BreadcrumbList` schemas alongside the existing `LocalBusiness` and `ItemList` (Products) schemas.
- [x] **Turbopack & TypeScript Production Build Validation**
  - **Status**: Verified build passes (8/8 static routes prerendered).

---

## Phase 2: GitHub Repository Polish (Immediate Next Step)

- [ ] **Add Open-Source / Commercial License**
  - Add `LICENSE` file (MIT or Apache-2.0 or Proprietary) to the repository root.
- [ ] **Configure Repository Metadata on GitHub**
  - Set description to: *"Mobile-First D2C E-Commerce Web App for authentic, handcrafted bovine leather goods from Ambur, Tamil Nadu."*
  - Set website to: `https://dinoleathers.in`
  - Add repository topics: `nextjs16`, `ambur-leather`, `d2c-store`, `tailwind-v4`, `ecommerce-pwa`, `typescript`.

---

## Phase 3: Post-Launch Growth & Search Visibility

- [ ] **Google Search Console Verification**
  - Add DNS TXT record or HTML verification tag to `src/app/layout.tsx`.
  - Submit sitemap index: `https://dinoleathers.in/sitemap.xml`.
- [ ] **Bing Webmaster Tools & IndexNow**
  - Register site with IndexNow to enable instant URL submission to Bing and Yandex on catalog updates.
- [ ] **Passage-Level Answer Optimization for Ambur Leather**
  - Target queries like *"Why is Ambur leather famous?"*, *"What is full-grain pull-up leather?"*, and *"How does vegetable tanning age over time?"* with 130–160 word concise answer blocks.
