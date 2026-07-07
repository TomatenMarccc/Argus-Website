# ARGUS Civil Systems — Website

Modern marketing site for **ARGUS Civil Systems**, built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

The centrepiece is a scroll-driven canvas sequence: as you scroll, the UGV rotates
from front to side view and then disassembles into its five modules, with animated
callouts revealing each one.

## Tech stack

- **Next.js 14** (App Router, React 18)
- **TypeScript**
- **Tailwind CSS**
- Pure CSS `sticky` + `requestAnimationFrame` scroll engine (no heavy animation deps)
- 125-frame WebP image sequence rendered to `<canvas>` (`public/frames/`)

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
  layout.tsx        # fonts, metadata
  page.tsx          # section composition
  globals.css       # theme + utilities
components/
  Nav.tsx           # sticky navigation
  Hero.tsx          # landing hero
  ScrollSequence.tsx# canvas frame-sequence + module callouts (the core interaction)
  Modules.tsx       # module detail cards
  Applications.tsx  # use cases
  Specs.tsx         # technical spec sheet
  Contact.tsx       # CTA + contact form
  Footer.tsx
lib/
  modules.ts        # module content (edit copy here)
public/
  frames/           # frame-0001.webp … frame-0125.webp
```

## Editing content

- **Module names & descriptions:** `lib/modules.ts`. The `yPct` / `side` fields control
  where each callout sits over the exploded UGV — tweak them if you re-render the frames.
- **Applications, specs, hero copy:** in the matching component under `components/`.
- **Colours:** `tailwind.config.ts` (`ink` = charcoal scale, `signal` = green accent,
  `studio` = the grey that matches the frame background).

## Replacing the scroll frames

1. Drop a new numbered `.webp` sequence into `public/frames/` as `frame-0001.webp …`.
2. Update `FRAME_COUNT` in `components/ScrollSequence.tsx`.
3. Adjust `EXPLODE_START` (0–1) so the callouts appear when the vehicle separates.

Frames are compressed to WebP (~2.9 MB total for 125 frames) for fast loading.
