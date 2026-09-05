# Fit To Films™ — Next.js

Pixel-faithful Next.js (App Router + TypeScript) implementation of the Fit To Films™ landing page — India's First Screen-Ready & Cinema Transformation Ecosystem. Fully mobile responsive.

## Run

```bash
npm install
npm run dev      # development → http://localhost:3000
npm run build    # production build (fully static)
npm start        # serve production build
```

## Structure

```
app/
  layout.tsx     # Metadata, SEO/OG tags, self-hosted Google fonts (next/font)
  page.tsx       # Section composition (Act I → Act III)
  globals.css    # Full design system: tokens, sections, live-theme overrides,
                 # mobile nav + responsive polish
components/
  Navbar.tsx         # Fixed glass nav + working mobile hamburger menu
  Hero.tsx           # Cinematic hero, animated stat counters, duration pills
  Vision.tsx         # Statement, manifesto, 6-mantra swipe scroller
  Pillars.tsx        # Ecosystem grid: flagship entry + 5 award categories
  Journey.tsx        # 7-step transformation timeline
  Health.tsx         # Medical baseline + assessment card
  Pledge.tsx         # Natural pledge + animated shield SVG
  Transmedia.tsx     # 8 story-universe deliverables
  Archetypes.tsx     # 8 screen-ready archetype cards
  Passport.tsx       # Transformation Passport + 3D credential card
  Awards.tsx         # 22 awards across 3 tiers
  Finale.tsx         # Cinematica Expo stage + crowd silhouette
  Challenges.tsx     # 60-day & 45-day arc pricing
  Governance.tsx     # Eligibility, judging, rules, social policy
  EcosystemStrip.tsx # Cinematica Expo integration chain
  FinalCta.tsx       # Closing call to action
  Footer.tsx         # Brand, link columns, contact
  RevealObserver.tsx # Client: IntersectionObserver scroll reveals
  CountUp.tsx        # Client: en-IN formatted count-up numbers
```

## Notes

- **Fonts** are self-hosted via `next/font/google` (Bebas Neue, Anton, Oswald, Inter,
  Manrope, Plus Jakarta Sans, Cormorant Garamond) and exposed as CSS variables that the
  design tokens in `globals.css` consume — no layout shift, no external requests at runtime.
- **Scroll reveals** use a single `IntersectionObserver` (`RevealObserver`) watching every
  `[data-reveal]` element; CSS classes `.reveal`, `.reveal-l`, `.reveal-r`, `.reveal-scale`
  animate to `.in` — identical behaviour to the original site.
- **Mobile**: hamburger menu with slide-down panel, body scroll-lock, Escape to close,
  fluid `clamp()` typography, stacked grids, full-width CTAs and adjusted pricing cards.
- Respects `prefers-reduced-motion`.
