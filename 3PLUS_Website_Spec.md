# 3PLUS — Website Technical Spec (for Claude Code)

Source: `3PLUS_Website_Brief_FINAL_v3.pptx` (20 slides). This is a structured summary,
ready to hand to Claude Code as a working spec. (Note: this file was reconstructed in
English from a Russian-language brief that arrived with irrecoverable text corruption;
all factual content — colors, sitemap, page specs, tech recommendations — is preserved.)

---

## 1. Project essence

- **Domain:** 3plus.az, Baku, Azerbaijan
- **Site type:** B2B / HoReCa — a sales + trust-building site, **not an online store**
- **Languages:** AZ + EN (language switcher required)
- **Positioning:** "Distribution • Corporate Supply • International Sourcing" — 3PLUS is broader than just HoReCa
- **Main job of the site:** make 3PLUS look "bigger" than the company appears today — premium, modern, credible, easy to expand with new brands/categories

### Three commercial directions (keep focus on all three)
1. **HoReCa Distribution** — plant-based drinks, ingredients, coffee, future brands
2. **Corporate & Office Supply** — offices, business centers, recurring supply, cleaning
3. **Premium & Luxury Sourcing** — sourcing premium products on request (do NOT say "we sell luxury brands" — only "we source on request," since there's no official distribution contract)

---

## 2. Design direction

**Style:** Premium European B2B — minimalism, large typography, strong product photography, lots of whitespace. Avoid: gradients, stock photos, "cheap e-commerce" look.

**Palette (confirm exact HEX against the brand book if one exists; otherwise use presentation reference):**
- Warm white — background, ~ `#F5F4EF`
- Graphite — text / dark blocks, ~ `#1A1A1A`
- 3PLUS green — accent, ~ `#2F5D4F`
- Soft green — secondary background/accent, ~ `#C9D9CD`

**Typography:** bold, clean sans-serif (e.g. Inter, General Sans, Helvetica Now — pick one family with a wide weight range)

**Other:**
- Large, real product photography (not stock)
- Animation — barely noticeable (micro-interactions), not "wow effects"
- No decorative bars/backgrounds under headings — plain whitespace

**Homepage layout reference** (from slide 18 screenshot): header with logo on the left, short menu, hero with a large headline on the left and product photo on the right, then sections "Our Brands" → "Solutions for Your Business" → "Why Choose 3PLUS" → featured products → CTA → footer.

---

## 3. Site structure (Sitemap)

Final navigation (slide 16), top menu is short, everything else is nested content:

```
HOME | BRANDS | SOLUTIONS | SOURCING | ABOUT | FOR BRANDS | CONTACT | AZ|EN
```

8 main pages + a reusable product template:

| # | Page | Purpose |
|---|------|---------|
| 1 | **Home** | Overview + hero |
| 2 | **About 3PLUS** | Company capabilities |
| 3 | **Brands** | The Bridge Bio • Beyond The Bean • future brands |
| 4 | **The Bridge Bio** (brand page) | Dedicated brand world |
| 5 | **Beyond The Bean** (brand page) | Dedicated brand world |
| 6 | **Solutions** | HoReCa • Corporate • Professional |
| 7 | **For Brands** | Market entry to Azerbaijan for new manufacturers |
| 8 | **Contact / Partner** | B2B enquiry / WhatsApp |
| + | **Product page (template)** | One reusable template per SKU |
| + | **Corporate & Office Solutions** | Dedicated section/page for office clients (slide 14) |

Requirement: new products/brands/categories (coffee, cleaning, etc.) must be addable
**without rebuilding the site and without a developer** — i.e. through CMS/admin.

---

## 4. Page specifications

### 4.1 Home
Required sections, top to bottom:
1. Header: logo left, short menu, AZ|EN, "Business Enquiry" button
2. Hero — headline + 2 CTAs ("Explore Brands", "Become a Partner"), product photo
   - Recommended copy: *"Selected Brands. Reliable Supply. Smarter Sourcing."* / subheadline about international products & sourcing for HoReCa, offices, and business clients
3. Our Brands — cards: The Bridge Bio, Beyond The Bean, Coffee (Soon)
4. Distribution / Corporate Supply / Sourcing — three pillar columns
5. Who We Serve / Solutions by customer type — Coffee Shops, Hotels & Restaurants, Bakeries, Corporate/Professional
6. Featured products
7. Why 3PLUS
8. B2B contact CTA / Become a Partner
9. Footer + visible WhatsApp button
10. Strong mobile version required

### 4.2 Brand page (template, 1 per brand)
Blocks: Brand story, Country of origin, Key advantages, Barista range / Category navigation, Product cards, Applications, CTA (Request Sample / B2B enquiry).
**Important:** preserve each brand-manufacturer's own visual identity inside 3PLUS's
neutral system (don't "flatten" the brand's identity).

### 4.3 Product page (single template for all SKUs)
Fields:
- Name + short description
- Large product photo
- Key benefits
- Pack size / case
- Application
- Ingredients / allergens
- Documents / certificates (files)
- CTA: "Request Sample", "Get B2B Price"

### 4.4 Solutions
4 cards by customer type:
- Coffee Shops — barista drinks, matcha, chai, frappé, coffee
- Hotels & Restaurants — breakfast, beverage, plant-based alternatives
- Bakeries — chocolate, matcha, specialty ingredients
- Professional — cleaning & hygiene (future category)

### 4.5 For Brands
Audience: international manufacturers and prospective principals considering entry into the Azerbaijan market.
Blocks: Market Entry / Import / Distribution, Sales / Marketing / Brand Development.
CTA: "Introduce Your Brand".
Tone: 3PLUS as a serious local partner, not just an importer.

### 4.6 Corporate & Office Solutions
Audience: offices, business centers, corporate procurement, HQ operations, facility management.
Positioning: *"One supplier. Multiple business needs."*
Categories: Office Supply, Cleaning & Hygiene, Coffee & Pantry, Special Requests.
CTA: "Request a Corporate Offer".

### 4.7 Premium Sourcing (important wording)
- ❌ Do not write "we sell luxury brands" / "Luxury Brands Distributor"
- ✅ Do write: "Premium & Luxury Sourcing — selected international brands sourced on request for corporate and professional clients"

---

## 5. Technical requirements

| Requirement | Details |
|---|---|
| Responsiveness | Desktop / tablet / mobile |
| Languages | AZ + EN, full switching |
| CMS/Admin | Edit text, photos, brands, products without a developer |
| Forms | Partner enquiry, Sample request, B2B enquiry |
| WhatsApp | Visible contact button (usually a floating button) |
| SEO | Titles, meta descriptions, sitemap.xml, clean URLs |
| Performance | Image compression, fast load (Core Web Vitals) |
| Analytics | Google Analytics + Search Console |
| Security | SSL + regular backups |
| Domain | Deploy to 3plus.az |

---

## 6. Definition of Done

- [ ] All main pages ready in AZ + EN
- [ ] Mobile/tablet checked and polished
- [ ] CMS/admin access handed to client
- [ ] Products and brands editable without a developer
- [ ] Forms and WhatsApp tested
- [ ] Basic SEO configured
- [ ] Domain + SSL in production
- [ ] Short admin-panel instructions handed over

Target visual quality: broader and more premium than the current competitor reference
site — simple, credible, fast.

---

## 7. Tech stack recommendations for building via Claude Code

Given the requirements (CMS without a developer, scalability for new brands/categories, AZ/EN, SEO, speed):

**Option A — simplest for a single developer, fast start:**
- **Next.js 14+ (App Router)** + **Tailwind CSS**
- Brand/product content via **Sanity.io** (free tier, friendly Studio admin, easy to model "Brand" and "Product" as reusable types) or **Payload CMS** (self-hosted, full control)
- next-intl or next-i18next for AZ/EN
- Forms — Resend/Formspree or a custom API route + email/Telegram notification
- Deploy: Vercel (fast, SSL out of the box) + custom domain 3plus.az

**Option B — maximally simple, no external services:**
- **Astro** + Content Collections (Markdown/MDX files as the source for brands/products) + a minimal custom admin UI on bare Next.js API routes, or a Git-based CMS (Decap CMS / TinaCMS) on top of the same files
- Cheaper to maintain, but the admin is less "friendly" for a non-technical 3PLUS staff member

**Recommendation:** Option A (Next.js + Sanity), since the brief explicitly requires
"editing products and brands without a developer" — that calls for a friendly visual
CMS, not Markdown files in a repository.

### Data structure (CMS models)
- `Brand` (name, logo, hero image, story, country of origin, key advantages[], CTA)
- `Product` (name, brand ref, images[], benefits[], pack size, application, ingredients/allergens, documents[], category)
- `SolutionCategory` (title, icon, description, related products)
- `Page` (for About/For Brands/Contact — flexible content blocks)

### Kickoff prompt for Claude Code
```
Build the 3PLUS website (B2B/HoReCa distributor, Azerbaijan) on Next.js 14 App Router
+ Tailwind + Sanity CMS, bilingual (AZ/EN). Follow 3PLUS_Website_Spec.md as the single
source of truth for page structure, content, design tokens, and data model. Start with:
(1) project setup and Tailwind theme with the specified colors/typography, (2) Sanity
schemas for Brand and Product, (3) the Home page per spec section 4.1.
```

---

## 8. Open questions for the client (not covered by the presentation)

- Is there a ready vector 3PLUS logo (SVG/PNG)? The presentation indicates a text wordmark is currently used
- Exact brand-book HEX values (the presentation only has color swatches, no codes)
- Domain/hosting: who is the registrar for 3plus.az, is DNS access already available
- The specific "reference site" mentioned as a quality benchmark (slide 11) is not named
- Volume of real content available at launch: how many products/certificates exist right now to populate the site
