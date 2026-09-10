# 3PLUS website

B2B/HoReCa distributor site for 3PLUS (Baku, Azerbaijan). Next.js 14 (App Router) +
Tailwind CSS + Sanity CMS, bilingual (AZ/EN). Spec: [`3PLUS_Website_Spec.md`](./3PLUS_Website_Spec.md).

## Stack

- **Next.js 14** App Router, TypeScript, `src/` layout
- **Tailwind CSS** — brand tokens (`warmwhite`, `graphite`, `brand-green`, `brand-green-soft`) in [`tailwind.config.ts`](./tailwind.config.ts)
- **next-intl** — locale-prefixed routing at `/az` and `/en` (`az` is the default)
- **Sanity CMS** — schemas for `Brand`, `Product`, `SolutionCategory`, `Page` in [`src/sanity/schemaTypes`](./src/sanity/schemaTypes), embedded Studio at `/studio`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/az`.

### Connecting Sanity

The site runs with local seed content (see [`src/lib/seed-data.ts`](./src/lib/seed-data.ts))
until Sanity is configured, so `npm run dev` works out of the box. To connect a real project:

1. `npx sanity login`
2. `npx sanity init` (in this directory) — this creates a project and dataset, and can
   write the project ID into `.env.local` for you
2. Copy `.env.local.example` to `.env.local` and fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`
   (and `NEXT_PUBLIC_SANITY_DATASET` if you used something other than `production`)
3. Run the dev server and open http://localhost:3000/studio to add Brands and Products

Once at least one `brand` document exists in Sanity with `featuredOnHome` checked, Home
switches from the seed data to live Sanity content automatically.

### WhatsApp button

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` (international format, digits only,
e.g. `994501234567`) to show the floating WhatsApp button. It's hidden until set.

## Project structure

```
src/app/[locale]/       localized routes (layout wires up header/footer/i18n)
src/app/studio/         embedded Sanity Studio (not localized)
src/components/layout/  header, footer, locale switcher, WhatsApp button
src/components/home/    Home page sections (spec section 4.1)
src/sanity/             Sanity client, image URL builder, schemas, GROQ queries
src/i18n/                next-intl routing/navigation config
messages/az.json        Azerbaijani UI copy
messages/en.json        English UI copy
```

## What's built so far

- Project setup, Tailwind theme, AZ/EN routing
- Sanity schemas for `Brand` and `Product` (plus `SolutionCategory` and `Page` from the
  spec's data model, for the pages below)
- Home page (spec §4.1): hero, Our Brands, pillars (Distribution / Corporate Supply /
  Sourcing), Who We Serve, Featured Products, Why 3PLUS, CTA, footer with WhatsApp

## Not yet built

Per the sitemap in spec §3: About, Brands (index) + brand pages (§4.2), Solutions (§4.4),
Product page template (§4.3), For Brands (§4.5), Corporate & Office Solutions (§4.6),
Contact/forms, sitemap.xml, analytics. The `Page` schema exists for the flexible-content
pages but no routes consume it yet.
