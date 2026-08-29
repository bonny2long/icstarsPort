# Bonny Makaniankhondo — Portfolio V2

A React portfolio presenting my current work across software engineering, data and analytics, and AI-enabled systems.

## Current Profile

I am a Software Engineer and Data & Analytics Apprentice at Aon within its Construction & Infrastructure practice in Chicago. The portfolio connects current enterprise analytics development with my background in full-stack products, backend systems, client-facing delivery, and applied AI workflows.

## Featured Work

- **Time Ledger** — a live multi-workspace SaaS product for time tracking, teams, clients, projects, reporting, and billing workflows
- **Personal Media & NAS Automation Platform** — a locally proven four-application system for safe media intake, human-reviewed final moves, playback, and fail-closed cleanup reporting
- **United Airlines Customer Insights** — a client/RFP analytics and AI-supported insight solution delivered through i.c.stars
- **ICAA Headquarters / SyncUp** — a role-aware community operations platform for members, projects, bookings, collaboration, and administration
- **Resume Agent** and **Chef BonBon** — additional applied-AI and product engineering work

## Stack

- React 19 and React Router 7
- Vite 7
- Tailwind CSS 4 and custom application styles
- Lucide React
- `@chenglou/pretext` for selected editorial headings

No component framework or new runtime dependency was added for the V2 redesign.

## Routes

- `/` — Home
- `/work` — flagship and additional work
- `/work/:slug` — reusable project case studies
- `/experience` — experience, education, and professional development
- `/about` — systems approach, technical background, and communication/leadership growth
- `/contact` — contact links and verified 2026 resume

Legacy paths (`/projects`, `/leadership`, `/career`, `/client`, `/geekweek`, and `/wellness`) redirect to the appropriate current route.

## Project Structure

```text
docs/
  resume/       Canonical 2026 resume source, print template, and drafts
src/
  components/   Shared layout and UI components
  data/         Profile, projects, experience, education, skills, and leadership data
  pages/        Home, Work, WorkDetail, Experience, About, and Contact
```

## Local Development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview
```

There is currently no automated unit-test script in `package.json`.

## Links

- Portfolio: [bonnymak.tech](https://bonnymak.tech)
- Time Ledger: [timeledger.me](https://timeledger.me)
- LinkedIn: [Bonny Makaniankhondo](https://www.linkedin.com/in/bonny-makaniankhondo-bb95a3321/)
- GitHub: [bonny2long](https://github.com/bonny2long)

