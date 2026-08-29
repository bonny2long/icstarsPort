# Portfolio V2 — 2026 Handoff

## Summary

The portfolio now presents Bonny as a software engineer working across Data & Analytics and AI-enabled systems, with the current Aon Construction & Infrastructure apprenticeship visible throughout. The redesign preserves the warm cream, ink, teal, editorial visual direction while adding clearer proof, stronger case studies, an experience timeline, an employer-facing About page, and a verified 2026 resume.

Deployment was not performed as part of this work.

## Current Routes

| Route | Purpose |
|---|---|
| `/` | Current identity, engineering profile, proof strip, selected work, and current chapter |
| `/work` | Flagship Work and compact More Work index |
| `/work/:slug` | Reusable direct case-study route |
| `/experience` | Aon-first experience timeline, prior technical background, education, and professional development |
| `/about` | Systems approach, career path, working style, current direction, and the `#contact` action section |
| `/contact` | Legacy redirect to `/about#contact` |

Legacy redirects are preserved:

- `/projects` → `/work`
- `/leadership`, `/geekweek`, `/wellness` → `/about`
- `/career` → `/experience`
- `/client` → `/work`
- `/contact` → `/about#contact`
- `/work/united-airlines-dashboard` → `/work/united-airlines-customer-insights`

## Key Content Changes

- New headline: **Software Engineer · Data & Analytics · AI Systems**.
- Aon is current and described conservatively as a new Data & Analytics apprenticeship within Construction & Infrastructure.
- i.c.stars is complete with dates of Aug 2025 – Dec 2025.
- Harold Washington College is accurately described as Aon Apprenticeship Coursework, not a degree.
- Time Ledger remains the live SaaS flagship.
- The Personal Media & NAS Automation Platform is now a full flagship case study with service boundaries, a responsive architecture diagram, safety decisions, exact acceptance proof, and a deferred TrueNAS status.
- United Airlines client/RFP delivery and ICAA Headquarters / SyncUp remain flagship work.
- Resume Agent and Chef BonBon are presented as More Work.
- Leadership content is integrated into the employer-facing About story instead of remaining a primary route.

## Data and Component Structure

Content now has clear sources of truth:

- `src/data/profile.js`
- `src/data/projects.js`
- `src/data/experience.js`
- `src/data/education.js`
- `src/data/skills.js`
- `src/data/leadership.js`

Reusable project and proof components include `ProjectCard`, `ProjectCaseStudy`, `ProjectVisual`, `NasCaseStudy`, `SystemDiagram`, and `ProofStat`.

## Resume Status

**PASS.**

- Canonical source: `docs/resume/Bonny_Makaniankhondo_Resume_2026_SOURCE.md`
- Targeted draft: `docs/resume/Bonny_Makaniankhondo_Resume_2026_ONE_PAGE_DRAFT.md`
- Print source: `docs/resume/Bonny_Makaniankhondo_Resume_2026_PRINT.html`
- Served PDF: `src/data/Bonny_Makaniankhondo_Resume_2026.pdf`

The final PDF was verified as:

- exactly two pages,
- selectable text,
- eight clickable link annotations,
- clean visual page breaks,
- current Aon and Harold Washington content,
- completed i.c.stars dates,
- Time Ledger, NAS platform, SyncUp, and United work,
- no entry-level language or fabricated Aon outcomes.

The old FSD PDF is archived at `docs/resume/archive/Bonny_Makaniankhondo_Resume_FSD.pdf` and is no longer imported or bundled.

## New and Removed Files

Major new files:

- current data modules under `src/data/`
- `src/pages/Work.jsx`, `WorkDetail.jsx`, `Experience.jsx`, and the rebuilt `About.jsx`
- NAS architecture/proof components under `src/components/ui/`
- canonical, targeted, and print-ready resume sources
- verified 2026 resume PDF
- this handoff and the progress tracker

Removed after redirects were established:

- `src/pages/Projects.jsx`
- `src/pages/Leadership.jsx`
- `src/pages/CareerPath.jsx`
- `src/pages/ClientProject.jsx`
- `src/pages/GeekWeek.jsx`
- `src/pages/Wellness.jsx`
- unused `PageWrapper.jsx` and `SectionHeader.jsx`
- temporary responsive-QA screenshots and runner

Original project and leadership image assets were preserved.

## Dependencies

No project dependency was added or removed. React, Vite, Tailwind, React Router, Lucide, and Pretext remain the application foundation.

Temporary PDF extraction/rendering tools were installed only outside the project for verification and are not project dependencies.

## Validation

- Baseline lint: PASS
- Baseline build: PASS
- Final lint: PASS
- Final production build: PASS
- Existing automated test script: none; no unit tests were claimed
- Production preview: PASS at `127.0.0.1:4173`
- Required responsive widths checked: 390, 430, 768, 1024, 1280, 1440, and 1920 pixels
- Horizontal overflow across checked views: 0
- Checked pages: Home, Work, all four flagship detail routes, Experience, About, Contact, NAS architecture anchor, and all legacy redirects
- Heading QA: exactly one `h1` on every checked page
- Image QA: no broken images on checked routes
- Mobile menu QA: keyboard focus, expanded ARIA state, visible panel, and all navigation actions confirmed

## PORTFOLIO V2.1 REFINEMENT

### Information architecture

- About and Contact no longer compete as duplicate biography pages.
- `src/pages/Contact.jsx` was removed.
- `/contact` remains compatible through a redirect to `/about#contact`.
- Desktop and mobile navigation present Contact as a stronger action next to the separate Resume action.
- `ScrollManager` now resolves hash targets by ID, respects reduced-motion preferences, focuses the destination section, and reliably reaches Contact from Home, Work, Work details, Experience, About, and the mobile menu.
- About now has distinct sections for systems thinking, career progression, working style, and concise contact actions. The professional portrait appears only in the About hero.

### Project-media system

- Added reusable media components under `src/components/ui/project-media/`: `ProductCanvas`, `ProductScreenshot`, `MobileProductStack`, `ProjectMedia`, and `ProjectMediaGallery`.
- Product views now use editorial canvases, real aspect ratios, deliberate crops, asymmetric supporting layouts, and restrained project-specific atmosphere.
- Repeated white screenshot cards and forced repeated 16:10 galleries were removed from active case-study presentation.
- Time Ledger uses a wide product/dashboard treatment.
- United uses a clean data/dashboard treatment and is explicitly labeled as i.c.stars client/RFP work.
- ICAA Headquarters / SyncUp uses a light workflow canvas with role-aware supporting views.
- Resume Agent and Chef BonBon remain visually subordinate in compact More Work rows.

### BM Radio and Personal Media Infrastructure

- Added the three original JPEGs under `src/assets/projects/bm-radio/`.
- The public presentation uses CSS crop boundaries that exclude mobile browser chrome, the private local address, and bottom browser controls without stretching, recoloring, or altering the source screenshots.
- Now Playing is dominant, Library is secondary, and Audiobook is supporting.
- The case study is now titled **Personal Media Infrastructure Platform**.
- BM Radio leads as the listener-facing product; Intake Watcher, Archive Assistant, and Cleaner remain supporting infrastructure with narrow ownership contracts.
- Architecture, safety decisions, primary proof, supporting regression proof, honest deployment status, and Cleaner’s disabled destructive authority remain visible.
- Confirmed public repositories are listed in a dedicated Source section rather than the hero.

### Work hierarchy

- Flagship order is Time Ledger, Personal Media Infrastructure Platform, United Airlines Customer Insights, and ICAA Headquarters / SyncUp.
- Each flagship has a project number, project type, distinct visual, concise summary, key stack/proof line, and direct case-study action.
- Resume Agent and Chef BonBon use smaller editorial rows.
- The United detail route is now `/work/united-airlines-customer-insights`; the former dashboard slug redirects for compatibility.

### Files added and removed

Added:

- `src/assets/projects/bm-radio/bm-radio-now-playing.jpg`
- `src/assets/projects/bm-radio/bm-radio-library.jpg`
- `src/assets/projects/bm-radio/bm-radio-audiobook.jpg`
- all five reusable files under `src/components/ui/project-media/`

Removed:

- `src/pages/Contact.jsx`

Updated areas include routing, navigation, scrolling, About, Home links, Experience heading behavior, Work, all project case-study media, NAS architecture/proof/source content, project data, footer copy, shared UI behavior, README, and this documentation.

### V2.1 validation

- Baseline Git status: `portfolio-v2-2026...origin/portfolio-v2-2026`; only the three supplied BM Radio images were untracked before refinement.
- Baseline lint: PASS.
- Baseline build: PASS outside the filesystem sandbox; the sandbox-only attempt could not let Vite/esbuild inspect a parent directory.
- Final lint: PASS.
- Final production build: PASS.
- Production preview: PASS at `127.0.0.1:4173`.
- Responsive browser checks: PASS at 390, 430, 768, 1024, 1280, and 1440 pixels.
- Horizontal overflow: none on checked pages and widths.
- Heading structure: exactly one `h1` on every checked route.
- Contact routing: direct `/about#contact`, legacy `/contact`, desktop Contact clicks, and mobile-menu Contact all reached and focused `#contact`.
- Reduced motion: hash navigation resolved with `scroll-behavior: auto`.
- BM Radio: no local IP in rendered page text; visual review confirmed browser/local-network chrome stays outside the public crop at desktop and mobile widths.
- Visual review covered Work, Time Ledger, BM Radio/NAS, SyncUp supporting media, About, and Contact at desktop and mobile sizes.
- No deployment, commit, push, merge, or history reset occurred.

## Remaining TODOs

1. Revisit larger SyncUp and United image assets if measured production performance shows they need compression; below-the-fold project images lazy-load.
4. Confirm the production domain still resolves to `https://bonnymak.tech/` before deployment if hosting configuration has changed.
5. Physical TrueNAS deployment remains intentionally deferred, and Cleaner destructive actions must remain disabled until separately authorized and validated.

## Future Aon Updates

As real work becomes documented, update `src/data/experience.js`, `src/data/profile.js`, and the canonical resume source with:

- delivered dashboards or analytics products,
- specific tools used in real work,
- documented responsibilities,
- validated business or operational outcomes,
- completed training or credentials.

Do not add production ownership, savings, revenue, client outcomes, or Databricks expertise before those facts are verified.

## Deployment Notes

- The Vite foundation and `public/_redirects` were preserved.
- `dist/` was generated locally for validation and should follow the repository's existing ignore/deployment policy.
- Work is on the Git-enabled `portfolio-v2-2026` branch.
- No Git commit, push, merge, or history reset was performed during V2.1.
