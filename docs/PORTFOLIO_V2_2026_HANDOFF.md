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
| `/about` | Systems approach, career transition, communication, and current development |
| `/contact` | Contact links and 2026 resume access |

Legacy redirects are preserved:

- `/projects` → `/work`
- `/leadership`, `/geekweek`, `/wellness` → `/about`
- `/career` → `/experience`
- `/client` → `/work`

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

Temporary PDF extraction/rendering tools were installed only under `C:\tmp` for verification and are not project dependencies.

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

## Remaining TODOs

1. Confirm whether `bmakaniankhondo@icstars.org` should remain the primary email address.
2. Add public-safe screenshots to the NAS case study when real assets are ready.
3. Add separate public GitHub URLs for Archive Assistant, BM Radio, Intake Watcher, and Cleaner only after each URL is confirmed.
4. Revisit larger SyncUp and United image assets if measured production performance shows they need compression; current below-the-fold project images lazy-load.
5. Confirm the production domain still resolves to `https://bonnymak.tech/` before deployment if hosting configuration has changed.

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
- No Git commit, push, merge, reset, or repository initialization was performed.
- Git status could not be recorded because this working copy did not contain Git metadata.

