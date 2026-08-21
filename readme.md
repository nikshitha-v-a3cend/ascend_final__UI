# readme.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server on port 3000
npm run build     # tsc (type-check) then vite build
npm run lint      # alias for `tsc --noEmit` — there is no ESLint/Prettier config in this repo
npm run preview   # preview the production build
```

There is no test framework configured (no Jest/Vitest, no test script, no test files). Verification for changes in this repo means: `npx tsc --noEmit` passes, and (for anything visual) actually looking at the rendered page.

## Architecture

**Stack:** Vite + React 18 + TypeScript, React Router v6, Tailwind CSS v3. Path alias `@` → `src/` (defined in both `vite.config.ts` and `tsconfig.json`).

**This is a marketing/wireframe site, not a live product.** Every interactive "product" surface — `TryItWorkbench`, `FormatSelectorWidget`, the Framework page's editable competency matrix, etc. — is a fully client-side mock: fake progress via `setInterval`, hardcoded transcripts/scores, no backend, no AI calls, no persistence. Don't assume a button triggers real generation or scoring; check the component first.

**Installed but effectively unused:** `@tanstack/react-query` wraps the app in `App.tsx` but nothing calls `useQuery`/`useMutation` anywhere — all content is static, imported from `src/data/*.ts`. `framer-motion`, `lucide-react`, `@radix-ui/*`, `clsx`, and `tailwind-merge` are in `package.json` but not imported anywhere in `src/`. Animations are hand-rolled Tailwind keyframes (`animate-floatSm`/`floatSlow`/`floatRev`, `a3marquee`, etc.), and icons are hand-authored inline SVGs, not an icon library. `three.js`, by contrast, *is* live — every hero's particle-field background is `HeroParticleCanvas` (`src/components/common/HeroParticleCanvas.tsx`), a small WebGL scene keyed by a `canvasId` prop.

**Two stylesheets exist; only one loads.** `src/index.css` is the sole stylesheet imported (in `main.tsx`) — it defines every CSS custom property (`--brand-600`, `--coral-500`, ...), all `.a3-*` classes (`.a3-btn-*`, `.a3-glass-card`, `.a3-tag--*`, `.a3-eyebrow`, ...), and keyframes. `src/assets/a3cend-theme.css` is a ~2000-line near-duplicate that is **never imported** and has zero effect on the site. If a class appears to do nothing, check it was added to `index.css`, not this dead file.

**Brand colors are defined twice and have drifted apart.** Once in `tailwind.config.js` (`theme.extend.colors`, backs utility classes like `bg-coral-500`) and again as CSS custom properties in `src/index.css` `:root` (backs `var(--coral-500)` used in inline styles and inside `.a3-*` classes). They don't always match — e.g. `coral-500` is `#fa6793` via Tailwind but `#ff4081` via the CSS var. When matching a color, check which mechanism the surrounding code already uses rather than assuming they're interchangeable.

**`.a3-glass-card` silently overrides Tailwind border utilities.** It sets a full `border: 1.5px solid ...` shorthand; combining it with directional utilities like `border-t-4 border-brand-600` loses the color/width to the shorthand, so the accent never renders. Use an explicit inner `h-1.5` div for a colored top-accent on a glass card instead of `border-t-*`.

**Floating corner badges over hero images are fragile at small widths.** The `-bottom-4 -left-3` / `-top-3 -right-3` absolutely-positioned badge pattern (score ring + two-line label, used across most hero sections) is sized for desktop and does not scale with the image as it shrinks — on narrow viewports it can overflow past the card edge or collide with the other badge. Some heroes fix this with responsive `sm:` sizing; others hide the badges below `sm:` entirely where the underlying image already has busy corners (e.g. `img-rehearse.png`, which has its own baked-in score ring and stat bars). Follow whichever pattern is already on the page you're touching rather than introducing a third approach.

**Layout:** `App.tsx` renders `<AnnouncementBanner />` + `<Navbar />` (fixed chrome) around `<Routes>`, then `<Footer />`. `ScrollToTop` (in `App.tsx`) scrolls to top or to a `#hash` target on every route change.

**`Navbar.tsx` has two separate nav data sources.** The desktop hover dropdowns ("Platform", "Solutions") are hardcoded inline JSX; the mobile drawer renders from its own `navLinks` array. Renaming, adding, or reordering a nav item requires editing both — they will silently drift out of sync otherwise.

- Pages: `src/pages/*.tsx` (flat) plus `src/pages/solutions/*.tsx` for the four Solutions pages (Leadership, Sales, Onboarding, Compliance), which all follow the same section order — hero → positioning shift → practice-capability pillars → model steps → interactive demo → CTA.
- Presentational hero/product-mockup illustrations (built from divs/inline SVG, not screenshots) live in `src/components/common/*Graphics.tsx` and `PlatformCardMockups.tsx` — one prop-less component per page or content format.
- Copy and list-driven content (team bios, stage/format descriptions, talk archives, etc.) lives in `src/data/*.ts`, imported by the page that renders it. Prefer editing the data file over the page component when the content is data-shaped.
- `TryItWorkbench` (`src/components/interactive/TryItWorkbench.tsx`) is shared by three routes — `/try-it`, `/try/live-presenter`, `/try/simulation` — via `initialTool`, `showSwitcher`, and `autoStart` props; the dedicated `/try/*` routes render it pre-started with the tool switcher hidden.
