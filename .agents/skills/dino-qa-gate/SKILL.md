---
name: dino-qa-gate
description: "QA verification gate: type-check, lint, build, banned terms grep, responsive checks, lighthouse, and pass/fail table."
---

# dino-qa-gate: Release Audit Gate

Execute all steps at the end of each work phase.

## 1. Code Quality
Run terminal commands:
- `npm run type-check` (or `npx tsc --noEmit`): 0 errors, no `any`.
- `npm run lint`: 0 ESLint warnings or errors.
- `npm run build`: Next.js production build succeeds.

## 2. Banned Terms Grep Scan
Grep `src/`, `data/`, and `public/` for:
- Fabricated claims: `"4.9"`, `"Batch #"`, `"Est. 19"`, `"guaranteed"`
- Price strikethroughs: `line-through`, `strike-through`
- Third-party brands: Gucci, Coach, Fossil, Montblanc, etc.
- Uncited numbers: Any statistic without source and year in `ambur-facts`.
*Rule*: Any hit is an immediate FAIL.

## 3. Responsive Layout Check
Verify zero horizontal scrolling (overflow-x) and correct single-tag display at:
- `360px` (compact mobile)
- `390px` (standard mobile)
- `768px` (tablet portrait)
- `1280px` (desktop)

## 4. Lighthouse Mobile Audit
Audit mobile profile:
- Performance score >= 95
- LCP < 2.0s on 4G
- CLS = 0 (no layout shift)

## 5. Output Pass/Fail Table
Format audit results:

| Gate Check | Target | Result | Notes |
| :--- | :--- | :--- | :--- |
| TypeScript Strict | 0 errors, no `any` | PASS / FAIL | |
| ESLint Clean | 0 warnings/errors | PASS / FAIL | |
| Next.js Build | Clean build | PASS / FAIL | |
| Banned Terms Grep | 0 matches | PASS / FAIL | |
| Viewport 360/390/768/1280 | Zero overflow | PASS / FAIL | |
| Lighthouse Mobile | >= 95, LCP < 2s, CLS 0 | PASS / FAIL | |

*Rule*: If any check fails, STOP, report results, and await "continue".
