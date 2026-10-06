# dino-guardrails

- **Catalog Scope**: Wallets and belts only. No other categories.
- **Data Integrity**: Never invent ratings, reviews, prices, MRPs, dates, guarantees, or statistics. Missing data must be marked `TODO: [Pending client verification]`.
- **Brand Protection**: No third-party brand names or logos anywhere in code, copy, or images.
- **Tech Stack**: Next.js 14 App Router, TypeScript strict (no `any`), Tailwind CSS. Mobile-first.
- **Performance**: Lighthouse mobile 95+, LCP < 2s on 4G, zero layout shift (CLS 0).
- **Phased Workflow**: Work in phases. After each phase run `dino-qa-gate`, report results, STOP, and wait for "continue".
- **Security**: Never read, print, or commit secrets. Service keys stay server-only.
