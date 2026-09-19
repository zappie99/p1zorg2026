# P1Zorg website (Astro)

A static, fast, SEO-friendly rebuild of the P1Zorg homepage and vacatures (job listings) page in
[Astro](https://astro.build), styled with Tailwind CSS to match the supplied designs.

## Getting started

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser. The dev server hot-reloads as you edit files.

To build the production site:

```bash
npm run build
npm run preview   # preview the built site locally
```

The build output lands in `dist/` — upload that folder's contents to any static host (Netlify,
Vercel, Cloudflare Pages, a plain Nginx/Apache server, etc.).

## Project structure

```
src/
  components/     Reusable page sections (Header, Footer, HeroHome, JobCard, …)
  content/
    vacatures/    One .md file per job listing (30 included as example content)
    functies/     The 6 job-category cards ("Welke functie past bij jou?")
    reviews/      The testimonial cards on the homepage
    config.ts     Schema/validation for the above (field names, required fields)
  layouts/
    Layout.astro  Shared <head>, header, footer wrapper
  pages/
    index.astro          Homepage
    vacatures/index.astro   Job listings page (search, filter, grid)
    vacatures/[slug].astro  Individual job detail page (auto-generated per listing)
public/
  images/         Placeholder images — replace with real photography (see below)
```

## Editing job listings

Each vacature is a Markdown file in `src/content/vacatures/`. To add a new listing, copy an existing
file and edit the frontmatter plus the body text:

```markdown
---
titel: "Verzorgende IG"
functie: "verzorgende-ig"   # must match a filename in src/content/functies/
regio: "Breda"
uren: "24 - 32 uur"
dienstverband: "Loondienst"  # or "ZZP"
samenvatting: "One-line summary used for the page's meta description."
uitgelicht: true              # featured listings are shown first / always visible
gepubliceerd: 2026-01-15
---

Full job description in Markdown goes here — supports headings, bullet lists, etc.
```

To remove a listing, delete its file. To edit one, just edit the file — no rebuild steps beyond
`npm run build` / redeploying are needed. There is no database and no admin login: content lives in
these files, so whoever maintains the site will need basic comfort editing text files (or you can wire
up a lightweight Git-based CMS like [Decap CMS](https://decapcms.org) later for a form-based editor
without changing this structure).

The **search and filter** on `/vacatures` is entirely client-side JavaScript — it filters the 30
listings already on the page by `functie` and `regio`, so it needs no backend and works even on a
plain static host.

## Editing the 6 job categories

`src/content/functies/*.md` — one file per card shown in "Welke functie past bij jou?". The `icoon`
field must be one of the six values already used (see `src/components/RoleIcon.astro`) since each maps
to a hand-drawn icon.

## Editing testimonials / homepage stats

- Reviews: `src/content/reviews/*.md`
- Stats (500+, 25+, 2019): hardcoded in `src/components/Stats.astro` — edit the `stats` array directly.

## Images

The `public/images/*.svg` files are placeholders (gradient + icon) standing in for the real photography
used in the original design (hero shots of staff and clients). Replace them with actual JPG/PNG/WebP
photos and update the `src` paths in `HeroHome.astro`, `HeroVacatures.astro`, `OpenSollicitatie.astro`,
and `ContactCTA.astro` accordingly.

## Brand tokens

Colors, fonts, and spacing live in `tailwind.config.mjs` (`navy`, `teal`, `clay` color scales) and
`src/layouts/Layout.astro` (Google Fonts: Baloo 2 for headings, Inter for body text).

## Notes / next steps

- Contact form: the "Open sollicitatie" and contact CTAs currently link to `mailto:` and `tel:` — wire
  up a real form (e.g. via [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or a
  small serverless function) if you want submissions captured directly rather than via email.
- Legal pages (`/privacyverklaring`, `/algemene-voorwaarden`) are placeholders — fill in real content.
- `astro.config.mjs` sets `site: 'https://www.p1zorg.nl'` — update if the final domain differs (used
  for canonical URLs / sitemaps if you add `@astrojs/sitemap` later).
