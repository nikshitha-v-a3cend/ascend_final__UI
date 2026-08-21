# A3CEND Website — Codebase Guide

A walkthrough of every source file in this project and what it's for. For terse architecture notes aimed at AI coding tools, see `CLAUDE.md` instead — this document is the human-readable version.

## What this project is

A marketing/wireframe website for "A3CEND," an AI learning-and-coaching platform. It's built with **Vite + React 18 + TypeScript + React Router + Tailwind CSS**. There is no backend: every "product" demo on the site (the AI presenter, the rehearsal simulator, the skill matrix editor) is a client-side mock — fake progress bars, hardcoded scores/transcripts, no real API calls. All page copy and list content lives in plain TypeScript data files under `src/data/`, separate from the page components that render it.

## Running it

```bash
npm run dev       # start the dev server (localhost:3000)
npm run build     # type-check, then production build
npm run lint      # alias for `tsc --noEmit` — there's no ESLint/Prettier configured
npm run preview   # preview the production build
```

There's no test suite in this repo.

## Folder structure

```
src/
├── main.tsx, App.tsx, vite-env.d.ts     # entry point, routing, ambient types
├── index.css                             # the ONE stylesheet actually loaded
├── assets/                               # images + a3cend-theme.css (unused, see below)
├── components/
│   ├── layout/                           # Navbar, Footer, AnnouncementBanner
│   ├── interactive/                      # stateful demo widgets
│   └── common/                           # static illustration/mockup components
├── pages/                                # one file per route
│   └── solutions/                        # the 4 "Solutions" pages
├── data/                                 # copy & list content, per page/section
└── hooks/                                # useScrollReveal
```

## Entry point & routing

- **`index.html`** — the Vite HTML shell; nothing app-specific beyond the root div and font links.
- **`src/main.tsx`** — mounts `<App />` inside `<BrowserRouter>` and `<React.StrictMode>`, and is the **only place `index.css` is imported**.
- **`src/App.tsx`** — defines every route via React Router's `<Routes>`, wraps the page content in `<AnnouncementBanner />` + `<Navbar />` (fixed chrome) and `<Footer />`, wires up a `QueryClientProvider` (see gotcha below), and includes a small `ScrollToTop` component that scrolls to top or to a `#hash` target whenever the route changes.
- **`src/vite-env.d.ts`** — standard Vite ambient types; declares that `*.png/.jpg/.jpeg/.svg/.webp` imports are strings, nothing custom.

## Layout components — `src/components/layout/`

- **`Navbar.tsx`** — sticky header with a scroll-triggered shadow, two hover dropdowns ("Platform", "Solutions") built as **hardcoded inline JSX**, plus a separate mobile drawer driven by its own `navLinks` array. **These two are not the same data source** — renaming or reordering a nav item means editing both the desktop dropdown JSX and the `navLinks` array separately, or they'll drift out of sync.
- **`Footer.tsx`** — full site footer: a dark newsletter-signup banner, four collapsible link sections (Platform/Events/Company/Access, driven by a `FOOTER_SECTIONS` data array with inline icon SVGs), a centered social-icon row, and a bottom address/copyright bar. The sections are always expanded on desktop (`md:`) and independently collapsible accordions on mobile via `openSections` state.
- **`AnnouncementBanner.tsx`** — the thin gradient bar above the navbar announcing news, linking to `/rehearse`. Desktop-only (`hidden md:flex`) — there's no mobile equivalent, it just disappears below the `md` breakpoint.

## Pages — `src/pages/`

- **`HomePage.tsx`** — the main landing page: hero, trusted-logos marquee, a 3-card "Platform Overview" (Content Orchestrator / REHEARSE / Skill Framework), a "Try it yourself" 2-card section, the "3C Philosophy" (Content/Context/Coaching) section, the interactive "Our Approach" cycle, and a closing CTA.
- **`AboutPage.tsx`** — company story, mission/vision, and the leadership team grid (rendered from `TEAM_MEMBERS` in `aboutData.ts`).
- **`RehearsePage.tsx`** — the REHEARSE product page: hero with a live-simulation mockup, per-role "Solutions" cards (Leadership/Sales), a measurement/cross-promo section, and a CTA.
- **`ContentOrchestratorPage.tsx`** — the Content Orchestrator product page: hero, a 3-stage pipeline (Ingest → Generate → Compose) rendered from `ORCHESTRATOR_STAGES`, and the interactive `FormatSelectorWidget`.
- **`FrameworkPage.tsx`** — the Skill Framework / analytics product page, centered on an editable-looking competency matrix (`ENTERPRISE_LIBRARIES` / `SKILL_FRAMEWORK_DATA` from `frameworkData.ts`) with a domain selector and a toast-driven "Editable" toggle that doesn't actually persist anything.
- **`TryItPage.tsx`** — the `/try-it` overview page: hero, the two tool-switcher cards, a "How it works" 3-step section, and feature deep-dives for both tools.
- **`LivePresenterPage.tsx`** / **`SimulationPage.tsx`** — thin wrapper pages for `/try/live-presenter` and `/try/simulation`; each just renders `<TryItWorkbench>` pinned to one tool with the switcher hidden and `autoStart` on, so the demo begins immediately.
- **`ContactPage.tsx`** — "Book a demo" page: contact info (leadership emails, office address, LinkedIn), a "what happens next" 3-step card, and a demo-request form. The form has no real submission — `handleSubmit` just calls `preventDefault()` and flips a local `submitted` flag.
- **`PowerTalksPage.tsx`** — the PowerTalks keynote-series archive page: hero, an archive grid of past talks (`PAST_TALKS` in `powerTalksData.ts`), a "Why A3CEND" stats section, and a CTA.
- **`pages/solutions/{Leadership,Sales,Onboarding,Compliance}SolutionPage.tsx`** — the four industry/role "Solutions" pages. Each follows the same section order (hero → positioning shift → practice-capability pillars → model steps → interactive demo → CTA) with its own copy and color accent (teal for Leadership/Onboarding, coral for Sales/Compliance).

## Interactive components — `src/components/interactive/`

- **`TryItWorkbench.tsx`** — the shared engine behind `/try-it`, `/try/live-presenter`, and `/try/simulation`. Takes `initialTool` ('presenter' | 'sim'), `showSwitcher`, and `autoStart` props; manages all the mock state for both the "Live Presenter" flow (pick a topic → fake generation progress → view slides) and the "Simulation" flow (pick a persona → fake live rehearsal with a timer → scorecard → email-gated "full scorecard").
- **`FormatSelectorWidget.tsx`** — click-through list of content formats (from `FORMAT_OPTIONS` in `orchestratorData.ts`) that swaps in a matching static preview graphic from `OrchestratorFormatGraphics.tsx` on the right.
- **`ApproachInteractiveCycle.tsx`** — the 4-stage (Assess/Create/Simulate/Measure) clickable cycle on the homepage, driven by `CYCLE_STAGES` in `homeData.ts`; clicking a stage swaps the detail panel below it.

## Static illustration components — `src/components/common/`

These are all presentational, prop-less components — hand-built product-mockup illustrations out of styled divs and inline SVG, not screenshots:

- **`HeroParticleCanvas.tsx`** — the only component actually using `three.js`; a small WebGL particle-field background dropped into nearly every hero section, keyed by a `canvasId` prop (each usage needs a unique id).
- **`PlatformCardMockups.tsx`** — `ContentOrchestratorMockup` and `RehearseSimulationMockup`, the two "browser window" style mockups used on the homepage's Platform Overview cards.
- **`OrchestratorFormatGraphics.tsx`** — one mockup component per content format (`ElearningFormatGraphic`, `MicroVideoFormatGraphic`, `MicroCardsFormatGraphic`, `AssessmentsFormatGraphic`, `SimulationsFormatGraphic`) plus `ContentOrchestratorHeroGraphic`, all consumed by `FormatSelectorWidget` and the Content Orchestrator page hero.
- **`SolutionPageGraphics.tsx`** — one hero mockup per Solutions page (`LeadershipSolutionGraphic`, `SalesSolutionGraphic`, `OnboardingSolutionGraphic`, `ComplianceSolutionGraphic`), each a "browser window" card with its own stats/scenario content.
- **`ThreeCVisuals.tsx`** — `ContentVisualHeader`, `ContextVisualHeader`, `CoachingVisualHeader`: the three small card-header illustrations for the homepage's "3C Philosophy" section.
- **`RehearseLiveSimGraphic.tsx`** — a standalone dark-themed "live simulation" HUD graphic (avatar, waveform, transcript, signal bar).
- **`BottomCtaBanner.tsx`** — the reusable gradient closing-CTA banner used at the bottom of most pages, configurable via `eyebrow`/`heading`/`subheading`/primary+secondary CTA props.

## Data files — `src/data/`

Plain TypeScript arrays/objects with no logic, each imported by the page(s) that render it:

- **`homeData.ts`** — `BRANDS` (client-logo marquee names) and `CYCLE_STAGES` (the 4-stage Approach cycle content + per-stage color tokens).
- **`aboutData.ts`** — `TEAM_MEMBERS` (name, bio, LinkedIn, email, headshot import for the 3 leadership bios).
- **`frameworkData.ts`** — `ENTERPRISE_LIBRARIES`, `SKILL_FRAMEWORK_DATA`, `USER_ANALYTICS_COHORTS`, `CONTENT_ANALYTICS_DATA` — everything backing the Framework page's matrix and analytics mockups.
- **`orchestratorData.ts`** — `ORCHESTRATOR_STAGES` (Ingest/Generate/Compose pipeline) and `FORMAT_OPTIONS` (the 5 content formats used by `FormatSelectorWidget`).
- **`tryItData.ts`** — `TRY_IT_TOOLS`, `PRESENTER_TOPICS`, `AUDIENCE_OPTIONS`, `SIMULATION_PERSONAS`, `SIMULATION_LEVELS` — all content for `TryItWorkbench`.
- **`powerTalksData.ts`** — `POWERTALKS_STATS`, `POWERTALKS_FEATURES`, `PAST_TALKS`, `WHY_A3CEND` — content for the PowerTalks archive page.

## Hooks — `src/hooks/`

- **`useScrollReveal.ts`** — finds every element with class `.a3-scroll-reveal` on mount and uses an `IntersectionObserver` to add `.is-visible` (which `index.css` uses to trigger a fade/slide-in animation) as each scrolls into view.

## Styles

- **`src/index.css`** — the **only stylesheet actually imported** (in `main.tsx`). Defines every CSS custom property (`--brand-600`, `--coral-500`, etc.), all the `.a3-*` utility classes (`.a3-btn-*`, `.a3-glass-card`, `.a3-tag--*`, `.a3-eyebrow`, `.a3-footer-*`, ...), and keyframes.
- **`src/assets/a3cend-theme.css`** — a ~2000-line near-duplicate of `index.css` that **is never imported anywhere** and has zero effect on the rendered site. It's easy to mistakenly edit this file expecting a style change to show up — it won't. If a class isn't working, check its definition exists in `index.css`.

## Config files

- **`vite.config.ts`** — Vite + React plugin setup; defines the `@` → `src/` path alias and dev server port (3000).
- **`tailwind.config.js`** — brand color palette (`brand`, `coral`, `ink`, etc.), custom font families, and the hand-rolled float/marquee/pulse keyframes/animations. **Note:** its `coral-500`/`coral-700` hex values don't match the `--coral-500`/`--coral-700` CSS variables in `index.css` — the two color systems have drifted apart, so `bg-coral-500` and `var(--coral-500)` render slightly different pinks.
- **`tsconfig.json`** — TypeScript config; mirrors the `@/*` path alias, strict mode on, but `noUnusedLocals`/`noUnusedParameters` are off.
- **`postcss.config.js`** — just wires up `tailwindcss` + `autoprefixer`.
- **`package.json`** — scripts and dependencies. Notably, `@tanstack/react-query`, `framer-motion`, `lucide-react`, `@radix-ui/*`, `clsx`, and `tailwind-merge` are all installed but **not actually used anywhere in `src/`** — animations, icons, and data-fetching are all hand-rolled instead.
