import chefBonBonImage from "../assets/photos/chefbot.png";
import geekWeekImage from "../assets/photos/geekweek2.jpg";
import headshotImage from "../assets/photos/headshot_contact.jpg";
import syncUpLoginImage from "../assets/photos/syncup-login.png";
import syncUpRegisterImage from "../assets/photos/syncup-register.png";
import teaHostImage from "../assets/photos/teaguest.jpg";
import teamWeekImage from "../assets/photos/teamweek.jpg";
import timeLedgerPrimaryImage from "../assets/photos/timeledger1 2.png";
import timeLedgerSecondaryImage from "../assets/photos/timeledger2.png";
import unitedTeamImage from "../assets/photos/winning_team.jpg";
import unitedImage from "../assets/photos/dasha.png";
import workingImage from "../assets/photos/working.png";

export const portfolioProjects = [
  {
    slug: "time-ledger",
    eyebrow: "Full-stack SaaS",
    title: "Time Ledger",
    shortTitle: "Time Ledger",
    summary:
      "A live full-stack SaaS product for weekly timesheets, client billing, project tracking, team invites, and workspace operations.",
    secondary:
      "Built across React, TypeScript, FastAPI, Supabase Auth, PostgreSQL, SQLAlchemy, Alembic, TanStack Query, and billing/reporting workflows.",
    highlights: [
      "Live product at timeledger.me for time tracking and billing workflows",
      "Multi-workspace SaaS architecture with organization-level data isolation",
      "Role-aware workflows for admins, managers, members, clients, projects, and time entries",
      "Weekly timesheet grid, billing summaries, invoice-ready text, onboarding, and invite flows",
    ],
    problem:
      "Small teams and independent contractors often manage clients, projects, hours, and billing across disconnected spreadsheets and messages. Time Ledger centralizes that workflow so teams can track work, review weekly totals, and generate cleaner client-ready billing summaries from one system.",
    systemTitle: "Architecture / stack",
    systemText:
      "Time Ledger is structured as a product-grade SaaS system: a React and TypeScript frontend, a FastAPI service layer, Supabase Auth for identity, and PostgreSQL-backed relational workflows for workspaces, memberships, clients, projects, time entries, and billing summaries.",
    system: [
      "Multi-tenant workspace model with every query scoped by organization",
      "React 19, TypeScript, Vite, TanStack Query, Recharts, and Tailwind on the frontend",
      "FastAPI, SQLAlchemy 2.x, Alembic, and Pydantic settings on the backend",
      "Invite flows, onboarding, archived record handling, and account lifecycle protections",
    ],
    owned: [
      "Built the product end to end across frontend, backend, database, authentication, deployment, and workflow design",
      "Designed the workspace, membership, client, project, invitation, time-entry, and billing data flows",
      "Implemented the product workflows that turn tracked time into weekly summaries and invoice-ready client communication",
    ],
    decisions: [
      "Designed around multi-tenant workspace isolation instead of treating permissions as an afterthought",
      "Kept billing and reporting close to the time-entry workflow so users can move from logged work to client-ready output quickly",
      "Used migrations, archived states, account lifecycle rules, and guarded data flows to make the product easier to maintain as it grows",
    ],
    interesting:
      "Time Ledger is the strongest portfolio proof point because it covers the real surface area of a SaaS product: tenancy, auth, invites, role-aware behavior, data modeling, billing logic, reporting, onboarding, deployment, and lifecycle safeguards.",
    note: "The live product is public at timeledger.me. The repository is private, so this case study focuses on architecture, workflow decisions, and product behavior rather than source-code access.",
    status: "Live product",
    image: timeLedgerPrimaryImage,
    imageAlt: "Time Ledger workspace dashboard and timesheet interface",
    liveHref: "https://timeledger.me/",
    gallery: [
      {
        image: timeLedgerSecondaryImage,
        alt: "Time Ledger billing and reporting interface",
        title: "Billing and reporting view",
      },
    ],
  },
  {
    slug: "syncup",
    eyebrow: "Community platform",
    title: "ICAA Headquarters / SyncUp",
    shortTitle: "ICAA Headquarters",
    summary:
      "A community operations platform evolving from SyncUp into an ICAA headquarters for alumni, residents, mentors, projects, events, and collaboration workflows.",
    secondary:
      "Built around role-aware dashboards, member visibility, collaboration tools, and operational workflows for a growing community.",
    highlights: [
      "Role-aware dashboards for alumni, residents, mentors, and administrators",
      "Member directory, project visibility, collaboration, and event-style workflow foundations",
      "React, Tailwind, Node.js, Express, relational data modeling, and Supabase direction",
    ],
    problem:
      "Communities can have strong people and weak systems. ICAA Headquarters is designed to centralize member visibility, collaboration, mentorship, project activity, and operational workflows so the community has a stronger digital home.",
    systemTitle: "Stack / system",
    system: [
      "React 19, Vite, and Tailwind CSS on the front end",
      "Node.js and Express for API structure",
      "Relational data modeling for users, projects, and skills",
      "Platform architecture built around mentorship and collaboration workflows",
    ],
    owned: [
      "Owned the architecture direction and day-to-day development",
      "Drove discovery, requirements, data modeling, and iteration",
      "Treated the product as a system design problem, not just a collection of pages",
    ],
    decisions: [
      "Model relationships clearly so the platform can grow without becoming brittle",
      "Keep the product centered on useful collaboration flows",
      "Design with long-term maintainability in mind from the start",
    ],
    interesting:
      "This project shows ownership beyond feature building. It required product direction, role semantics, data modeling, admin workflows, UI polish, and a clear understanding of how a real community might operate inside software.",
    status: "Active platform build",
    image: syncUpLoginImage,
    imageAlt: "SyncUp login screen with Chicago skyline background",
    gallery: [
      {
        image: syncUpRegisterImage,
        alt: "SyncUp registration screen for the iCAA community",
        title: "Community registration flow",
      },
    ],
  },
  {
    slug: "united-airlines-dashboard",
    eyebrow: "Client delivery",
    title: "United Airlines Dashboard",
    shortTitle: "United Airlines Dashboard",
    summary:
      "A full-stack analytics platform built for United Airlines to help executives understand customer feedback, sentiment, and operational insights in real time.",
    secondary:
      "Built under real client constraints, with a KPI-driven interface designed for decision making.",
    highlights: [
      "React dashboard architecture",
      "AI-powered insight layer",
      "KPI-driven UI for decision making",
      "Built under real client constraints",
    ],
    problem:
      "United needed a faster way for executives to understand customer feedback, sentiment trends, and operational issues without relying on scattered reports and manual interpretation.",
    systemTitle: "Stack / system",
    system: [
      "React-based dashboard architecture",
      "AI-powered insight layer for summarizing signal",
      "Role-aware executive views and KPI modules",
      "Real-time analytics framing built around client workflows",
    ],
    owned: [
      "Built responsive KPI and dashboard sections in React",
      "Helped shape how AI-powered insights surfaced in the interface",
      "Worked across debugging, refinement, and presentation under deadline",
    ],
    decisions: [
      "Design for executive clarity before adding more interface complexity",
      "Prioritize high-signal comparisons, filters, and summaries",
      "Translate business questions into dashboard states that support action",
    ],
    interesting:
      "This is one of the strongest proof points because it combines front-end architecture, product thinking, AI-assisted workflows, and client-facing delivery pressure in one project.",
    note: "Winning solution delivered as part of a real client engagement with United Airlines.",
    image: unitedImage,
    imageAlt: "United Airlines customer analytics dashboard interface",
    liveHref: "https://dash-by-metis.netlify.app/",
    githubHref: "https://github.com/bonny2long/Metis",
  },
  {
    slug: "chefbonbon",
    eyebrow: "AI product",
    title: "ChefBonBon",
    shortTitle: "ChefBonBon",
    summary:
      "An AI-powered application that generates recipes from available ingredients, redesigned with a scalable PostgreSQL backend.",
    secondary:
      "Originally built as an MVP, then reworked with a stronger backend model as my understanding of system design matured.",
    highlights: [
      "AI-assisted recipe generation",
      "Migration from Firebase to Supabase with PostgreSQL",
      "Backend redesign for better structure and long-term scale",
    ],
    problem:
      "The app helps people cook from what they already have, but the deeper engineering challenge was making the product's data model strong enough to support it over time.",
    systemTitle: "Stack / system",
    system: [
      "React-based front-end workflow",
      "AI recipe generation tied to ingredient input",
      "Supabase and PostgreSQL backend redesign",
      "Schema decisions made for maintainability and future growth",
    ],
    owned: [
      "Built the original MVP",
      "Planned and executed the migration to a relational backend",
      "Refactored front-end logic around the new data layer",
    ],
    decisions: [
      "Move away from the original backend once the data model outgrew it",
      "Choose a relational structure that supports cleaner querying and scale",
      "Use the migration as a chance to improve architecture, not just swap tools",
    ],
    interesting:
      "The strongest part of ChefBonBon is the backend rethink. It shows a willingness to revisit earlier choices and rebuild around better structure once the product's needs are clearer.",
    image: chefBonBonImage,
    imageAlt: "ChefBonBon recipe application interface",
    liveHref: "https://chefbonbon.netlify.app/",
    githubHref: "https://github.com/bonny2long/ChefBonBon",
  },
  {
    slug: "resume-agent",
    eyebrow: "AI workflow system",
    title: "Resume Agent",
    summary:
      "An AI-assisted application workflow system that analyzes job descriptions, evaluates alignment, and generates tailored application materials from structured experience data.",
    secondary:
      "Built around semantic matching, structured scoring, document generation, and workflow automation instead of generic one-off prompting.",
    highlights: [
      "Job description parsing and structured requirement extraction",
      "Semantic matching with PostgreSQL and pgvector concepts",
      "ATS-style scoring rules and tailored document generation",
      "Multi-provider LLM fallback strategy for reliability",
    ],
    problem:
      "Applying to multiple roles usually means repeated rewriting and inconsistent alignment. Resume Agent is designed to turn that messy process into a repeatable system.",
    systemTitle: "System focus",
    systemText:
      "The current case study centers on workflow architecture first: job intake, parsing, tailored generation, tracking, and outreach automation.",
    system: [
      "Parsed job requirements feed each generation step",
      "Tailored resume and cover-letter outputs stay tied to the source role",
      "Tracking is treated as part of the product, not an afterthought",
      "Automation is used to reduce repetitive work without losing usefulness",
    ],
    owned: [
      "Framing the product around a real workflow problem instead of a one-off AI demo",
      "Designing the system flow from job description intake to tailored application output",
      "Structuring the case study so deeper implementation details can be added cleanly over time",
    ],
    decisions: [
      "Start from structured requirements rather than generic content generation",
      "Keep the system useful for real applications, not just prompt experimentation",
      "Separate parsing, generation, tracking, and outreach into clear workflow stages",
    ],
    interesting:
      "It combines AI output with system thinking. The interesting part is not just generating documents, but building a workflow that stays aligned with real job requirements and reduces actual user friction.",
    note: "This is an expanding portfolio case study. The current version documents the product goal, workflow architecture, and automation layers while leaving room for implementation detail as the build evolves.",
    status: "Active build",
    image: workingImage,
    imageAlt:
      "Bonny working on a laptop, representing the Resume Agent build in progress",
    githubHref: "https://github.com/bonny2long/resume-agent",
  },
];

export const buildPrinciples = [
  {
    title: "Start with the problem",
    body: "Every project begins with understanding what is actually broken, what matters to the user, and what the system needs to support.",
  },
  {
    title: "Map the data flow",
    body: "I think through entities, relationships, state, and API responsibilities early so the product can grow without getting tangled.",
  },
  {
    title: "Build for clarity",
    body: "I prefer understandable systems over clever ones. Clear structure makes performance, maintenance, and collaboration easier later.",
  },
  {
    title: "Refine the interface last",
    body: "Once the backend shape and system flow are solid, I use the UI to make the product understandable, useful, and fast to navigate.",
  },
];

export const aboutSignals = [
  {
    title: "Systems-minded",
    body: "I approach problems from the ground up, focusing on architecture, data flow, and product usefulness before surface polish.",
  },
  {
    title: "Performance-aware",
    body: "I care about speed, efficiency, and reducing unnecessary complexity so the product feels dependable in real use.",
  },
  {
    title: "Maintainability-focused",
    body: "The goal is not just to ship, but to leave behind code and structure that a team can keep building on.",
  },
];

export const leadershipPillars = [
  {
    title: "Communication",
    body: "I keep technical conversations clear, direct, and grounded in the problem so teams and stakeholders can move faster.",
  },
  {
    title: "Listening",
    body: "A lot of better engineering starts with listening well: hearing what users need, what teammates are seeing, and where the real friction is.",
  },
  {
    title: "Client-facing growth",
    body: "Real delivery work taught me how to translate constraints, feedback, and business context into better product decisions.",
  },
  {
    title: "Resilience",
    body: "Pressure has made me steadier. When something breaks or a deadline tightens, I reset, adapt, and keep moving.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:bmakaniankhondo@icstars.org",
    value: "bmakaniankhondo@icstars.org",
  },
  {
    label: "GitHub",
    href: "https://github.com/bonny2long",
    value: "github.com/bonny2long",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bonny-makaniankhondo-bb95a3321/",
    value: "linkedin.com/in/bonny-makaniankhondo",
  },
];

export const leadershipImages = {
  geekWeek: geekWeekImage,
  headshot: headshotImage,
  teaHost: teaHostImage,
  teamWeek: teamWeekImage,
  unitedTeam: unitedTeamImage,
};
