---
name: dino-design-system
description: "Design system tokens and rules for The Ambur Ledger. Use when styling UI, layouts, motion, or components."
---

# dino-design-system: The Ambur Ledger

## Palette Tokens
- Canvas: `#14100D`
- Surface: `#1D1713`
- Text: `#EFE6D8`
- Muted: `#A8998A`
- Accent: `#B5651D`
- Brass Hairline: `#8A6A2F`

## Typography & Grid
- **Display**: Serif display (Playfair / Cormorant) for editorial titles and headings.
- **UI**: Sans UI (Inter) for body, specs, controls, and buttons.
- **Grid**: Strict 8px grid (`8`, `16`, `24`, `32`, `48`, `64px`). Mobile-first.

## Motion
- **Duration**: 200–350ms.
- **Allowed Properties**: `opacity` and `transform` ONLY. No layout-triggering properties.

## Product Card Rule
- Strictly **one tag maximum** per product card (e.g., "Full Grain"). Never stack tags.

## Component List
- `Header`: Minimalist brand mark, category nav (Wallets | Belts), mobile menu.
- `Hero`: Ambur heritage narrative banner with atmospheric backdrop.
- `ProductGrid`: 8px-aligned responsive grid.
- `ProductCard`: Single tag, brass hairline border, 200ms hover lift.
- `CategoryToggle`: Wallets vs Belts filter toggle.
- `SpecSheet`: Dimensions, leather grade, edge finish.
- `Footer`: Provenance citation, copyright, legal links.
