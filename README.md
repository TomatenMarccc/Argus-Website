# Artemis Civil Systems — ARGUS II Website

Website for **Artemis Civil Systems** and **ARGUS II**, built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

The content is based on the Solve for Tomorrow pitch deck and executive summary.

## Tech stack

- **Next.js 14** (App Router, React 18)
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
  layout.tsx        # fonts, metadata
  page.tsx          # section composition
  globals.css       # theme + utilities
components/
  Nav.tsx           # sticky navigation
  Hero.tsx          # landing hero
  Modules.tsx       # technology detail cards
  Applications.tsx  # use cases
  Specs.tsx         # project status and sensor overview
  Contact.tsx       # CTA + contact form
  Footer.tsx
lib/
  modules.ts        # module content (edit copy here)
```

## Editing content

- **System element names & descriptions:** `lib/modules.ts`.
- **Applications, project status, hero copy:** in the matching component under `components/`.
- **Colours:** `tailwind.config.ts` (`ink` = charcoal scale, `signal` = green accent,
  `studio` = the grey that matches the frame background).
