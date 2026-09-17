# Artemis Civil Systems — Website

Company website for **Artemis Civil Systems**, built with **Next.js (App Router) +
TypeScript + Tailwind CSS**.

The homepage is written for a general audience and follows the order
*forest → value → pressures → what we do → who we are → ARGUS*. Technical detail
lives on the dedicated `/argus` page rather than on the landing page.

All factual content is taken from the company's own executive summary and the
ARGUS platform architecture document.

## Tech stack

- **Next.js 14** (App Router, React 18) — every route is statically rendered
- **TypeScript**
- **Tailwind CSS**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Production build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx              # fonts, metadata, language provider
  page.tsx                # homepage composition + structured data
  argus/page.tsx          # ARGUS detail page
  impressum/page.tsx      # legal notice
  globals.css             # theme tokens + utilities
components/
  LanguageProvider.tsx    # DE/EN context, persisted in localStorage
  LanguageToggle.tsx      # DE/EN switch
  Nav.tsx  Footer.tsx  Contact.tsx  Logo.tsx  Reveal.tsx  SkipLink.tsx
  home/                   # Hero, Value, Threats, Mission, Team, ArgusTeaser
  argus/                  # ArgusContent, Turntable (360° viewer)
  Photo.tsx               # responsive <img> driven by the photo manifest
  illustrations/          # Icons — hand-drawn line icons for the content blocks
lib/
  i18n.ts                 # ALL site copy, German and English
  photos.ts               # photo manifest: paths, sizes, origin and licence
  company.ts              # name, contact email, location
  site-url.ts             # canonical URL helper
```

## Editing content

**Nearly all copy lives in `lib/i18n.ts`.** It holds a `de` and an `en` object
with an identical shape — TypeScript fails the build if the two drift apart, so
a German change must be mirrored in English.

- **Contact email, company name:** `lib/company.ts`
- **Team members:** `lib/i18n.ts` → `team.members`. Each member has an empty
  `personal` field for their personal connection to the forest; fill it in and
  the line renders automatically on the card.
- **Colours:** `tailwind.config.ts` — `paper` (warm off-white backgrounds),
  `forest` (greens), `amber` (warm accent), `bark` (body text).

## Language handling

German is the default. English is an explicit choice made via the toggle, stored
in `localStorage` and re-applied on the next visit; the `<html lang>` attribute
follows the selection. The browser locale is deliberately *not* sniffed.

## Imagery

All photographs are registered in `lib/photos.ts` together with where they came
from and under which licence they may be used, and are rendered through
`components/Photo.tsx`, which builds the `srcset` from pre-generated WebP
variants. Do not reference a file in `public/images/photos` directly — go
through the manifest, so provenance stays traceable.

The ARGUS photographs are the company's own material. **The two forest
photographs on the homepage are not yet licence-cleared** — see
`public/images/photos/README.md` for what needs establishing before go-live, and
`photosNeedingLicenceReview()` for the list in code.

`public/frames` holds a 125-frame studio turntable of ARGUS II; the viewer on
`/argus` uses every fifth frame and only starts loading once scrolled near.

## Accessibility notes

- Scroll reveal animations are scoped to a `.js` class set before first paint,
  so content is never hidden from visitors without JavaScript.
- `prefers-reduced-motion` disables reveals and smooth scrolling.
- The turntable is operable by keyboard through its range slider.
