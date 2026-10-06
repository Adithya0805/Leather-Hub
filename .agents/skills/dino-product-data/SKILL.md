---
name: dino-product-data
description: "Schema, placeholder rules, and image naming conventions for Dino Leathers in /data/products.ts."
---

# dino-product-data

## Catalog Schema (`/data/products.ts`)
```typescript
export interface Product {
  id: string;
  category: 'wallet' | 'belt';
  slug: string;
  name: string;
  price: number | null; // null if unverified, marked with TODO
  colors: { name: string; hex: string }[];
  images: string[];     // paths relative to /public
  specs: Record<string, string>;
  stock: number | 'in_stock' | 'out_of_stock';
}
```

## Placeholder Rules
- Unverified prices, MRPs, specs, or dimensions MUST be `null` or `TODO: [Pending client verification]`.
- Never invent prices, discount strikethroughs, or fake reviews.
- Category must strictly be `'wallet' | 'belt'`.

## Image Naming Standards
- Path: `/public/images/products/`
- Pattern: `dino-[category]-[slug]-[color]-[angle].[ext]`
  - Example: `dino-wallet-bifold-cognac-front.webp`
- Rules: Lowercase, hyphens only, WebP/AVIF format. Angles: `front`, `back`, `interior`, `detail`. No third-party logos or watermarks.
