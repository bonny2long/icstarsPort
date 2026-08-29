import chefBonBonImage from "../assets/photos/chefbot.png";
import syncUpDashboardImage from "../assets/photos/syncupV30.png";
import syncUpDirectoryImage from "../assets/photos/syncupV31.png";
import syncUpProjectImage from "../assets/photos/syncupV32.png";
import syncUpAdminImage from "../assets/photos/syncupV33.png";
import timeLedgerPrimaryImage from "../assets/photos/timeledger1 2.png";
import timeLedgerSecondaryImage from "../assets/photos/timeledger2.png";
import unitedImage from "../assets/photos/dasha.png";
import workingImage from "../assets/photos/working.png";

export const projects = [
  {
    slug: "time-ledger",
    eyebrow: "Full-stack SaaS",
    title: "Time Ledger",
    shortTitle: "Time Ledger",
    summary:
      "A live full-stack SaaS product for weekly timesheets, client billing, project tracking, team invites, workspace switching, and operational reporting.",
    secondary:
      "Built across React 19, TypeScript, FastAPI, Supabase Auth, PostgreSQL, SQLAlchemy, Alembic, TanStack Query, Railway, and Netlify.",
    highlights: [
      "Live product at timeledger.me for time tracking and billing workflows.",
      "Multi-workspace SaaS architecture with organization-level data isolation.",
      "Authenticated workflows for workspaces, team members, clients, projects, time entries, and billing summaries.",
      "Invite and onboarding flows, weekly timesheet review, drawer-based editing, archive states, and invoice-ready text generation.",
      "Used by i.c.stars participants to track real contract work and reduce unclear manual time reporting.",
    ],
    problem:
      "Small teams and independent contractors often manage clients, projects, hours, and billing across disconnected spreadsheets, messages, and notes. Time Ledger centralizes that workflow so teams can track work, review weekly totals, manage clients and projects, and generate cleaner client-ready billing summaries from one system.",
    systemTitle: "Architecture / stack",
    systemText:
      "Time Ledger is structured as a product-grade SaaS system: a React and TypeScript frontend, a FastAPI service layer, Supabase Auth for identity, and PostgreSQL-backed relational workflows for workspaces, memberships, clients, projects, time entries, archive states, and billing summaries.",
    system: [
      "Multi-tenant workspace model with every workflow scoped by organization.",
      "React 19, TypeScript, Vite, TanStack Query, Recharts, and Tailwind on the frontend.",
      "FastAPI, SQLAlchemy 2.x, Alembic, Pydantic settings, and PostgreSQL on the backend.",
      "Supabase Auth for user identity, login, protected workflows, and account access.",
      "Invite flows, onboarding, archived record handling, weekly review, and account lifecycle protections.",
    ],
    owned: [
      "Built the product end to end across frontend, backend, database, authentication, deployment, and workflow design.",
      "Designed the workspace, membership, client, project, invitation, time-entry, archive, and billing data flows.",
      "Implemented the workflows that turn tracked time into weekly summaries and invoice-ready client communication.",
      "Connected user-facing product decisions to backend models so the system stayed maintainable as features grew.",
    ],
    decisions: [
      "Designed around multi-tenant workspace isolation instead of treating permissions as an afterthought.",
      "Kept billing and reporting close to the time-entry workflow so users can move from logged work to client-ready output quickly.",
      "Used migrations, archive states, account lifecycle rules, and guarded data flows to make the product easier to maintain.",
      "Chose practical product workflows over unnecessary complexity so the app could support real users sooner.",
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
    slug: "nas-media-platform",
    eyebrow: "Multi-service systems engineering",
    title: "Personal Media & NAS Automation Platform",
    shortTitle: "NAS Media Automation Platform",
    summary:
      "A four-application media-ingestion, review, playback, and cleanup system designed around explicit ownership boundaries and conservative data safety.",
    secondary:
      "Locally proven with real copied media; physical TrueNAS deployment is intentionally deferred.",
    highlights: [
      "Final local four-application workflow acceptance: PASS.",
      "21-file real-media canary completed with zero SHA-256 mismatches.",
      "Clear write boundaries, human-approved final moves, and fail-closed cleanup behavior.",
      "BM Radio accepted 275 physical tracks and 261 logical recordings using PostgreSQL.",
    ],
    problem:
      "A long-term personal media archive needs more than storage. It needs safe intake, classification, human review, final-library organization, listener-facing access, auditability, and conservative leftover handling without accidental deletion.",
    systemTitle: "Four-service architecture",
    systemText:
      "Each application owns a narrow responsibility so upload handling, classification, playback, and cleanup evidence do not blur into one unsafe process.",
    system: [
      "Intake Watcher promotes stable completed uploads without deep classification or final-library ownership.",
      "Archive Assistant reconstructs and classifies non-photo media, supports human approval, performs final moves, and records manifests.",
      "BM Radio provides music and audiobook listening, playlists, history, and progress using PostgreSQL with read-only final-library media access.",
      "Cleaner reads post-move evidence and produces dry-run leftover reports; destructive deletion is disabled.",
    ],
    services: [
      {
        name: "Intake Watcher",
        responsibility: "Stable upload promotion",
        details: [
          "Checks upload stability before promotion into a ready state.",
          "Does not perform deep classification.",
          "Does not own final-library placement.",
        ],
      },
      {
        name: "Archive Assistant",
        responsibility: "Review and final moves",
        details: [
          "Reconstructs and classifies non-photo media.",
          "Supports metadata review and human approval.",
          "Performs approved final moves and records manifests for audit.",
        ],
      },
      {
        name: "BM Radio",
        responsibility: "Listener-facing playback",
        details: [
          "Provides music and audiobook library, radio, playlists, history, and progress.",
          "Uses PostgreSQL and preferred physical-source selection.",
          "Treats final-library media as read-only.",
        ],
      },
      {
        name: "Cleaner",
        responsibility: "Conservative leftover review",
        details: [
          "Reads Archive Assistant post-move evidence.",
          "Classifies leftovers and produces dry-run reports.",
          "Fails closed; destructive deletion remains disabled.",
        ],
      },
    ],
    owned: [
      "Designed the ownership and write boundaries across all four applications.",
      "Built acceptance around real media, duplicate handling, hashes, regression baselines, and recovery documentation.",
      "Kept human approval in front of final Archive Assistant moves and cleanup fail-closed.",
      "Chose PostgreSQL for BM Radio and SQLite for Archive Assistant based on their different responsibilities.",
    ],
    decisions: [
      "Only Cleaner may eventually gain deletion authority; deletion is currently disabled.",
      "Archive Assistant final moves require human approval and retain evidence for later review.",
      "Playback remains outside the cleanup path and uses read-only access to final media.",
      "Local acceptance is stated separately from deferred physical TrueNAS deployment.",
    ],
    proof: [
      {
        label: "Workflow acceptance",
        value: "PASS",
        detail: "Final local four-application workflow",
      },
      {
        label: "Real-media canary",
        value: "0 mismatches",
        detail: "21 copied files verified with SHA-256",
      },
      {
        label: "BM Radio library",
        value: "275 / 261",
        detail: "Physical tracks / logical recordings",
      },
      {
        label: "BM Radio regression",
        value: "63 / 0 / 4",
        detail: "Passed / failed / skipped",
      },
      {
        label: "Intake Watcher",
        value: "14 / 14",
        detail: "Tests passed",
      },
      {
        label: "Cleaner",
        value: "9 / 9",
        detail: "Tests passed · deletion disabled",
      },
    ],
    interesting:
      "This platform demonstrates systems engineering beyond a single application: service boundaries, data ownership, conservative automation, multiple intentional database choices, real-media verification, testing, and recovery discipline.",
    note:
      "Local software platform proven. Physical TrueNAS deployment is intentionally deferred. GitHub links will be added when their public URLs are confirmed.",
    status: "Local acceptance passed",
    imageAlt:
      "Conceptual four-service flow for the Personal Media and NAS Automation Platform",
    visualLabels: ["Intake Watcher", "Archive Assistant", "BM Radio", "Cleaner"],
  },
  {
    slug: "syncup",
    eyebrow: "Community operations platform",
    title: "ICAA Headquarters / SyncUp",
    shortTitle: "ICAA Headquarters",
    summary:
      "A community operations platform evolving from SyncUp into an ICAA headquarters for alumni, residents, mentors, administrators, projects, bookings, newsletters, and collaboration workflows.",
    secondary:
      "Built around role-aware dashboards, Supabase Auth, Supabase Postgres, protected routes, member visibility, admin workflows, and production-readiness planning.",
    highlights: [
      "Role-aware dashboards for alumni, residents, mentors, and administrators.",
      "Supabase Auth and Supabase Postgres direction for authentication, role management, and maintainable data workflows.",
      "Member directory, public projects, bookings, collaboration, newsletter integration, and admin workflow foundations.",
      "Improved mobile UX, protected routes, verification flows, role semantics, SMTP/email planning, and production-readiness checklists.",
      "Admin workflow planning for intern lifecycle, resident conversion, and community governance responsibilities.",
    ],
    problem:
      "Strong communities can still struggle when the systems around them are scattered. ICAA Headquarters is designed to centralize member visibility, collaboration, mentorship, projects, bookings, communication, and operational workflows so the community has a stronger digital home.",
    systemTitle: "Stack / system",
    systemText:
      "The platform is structured around real community roles and operational workflows. The goal is not just a directory or social page, but a system that supports alumni, residents, mentors, administrators, projects, bookings, newsletters, and long-term community coordination.",
    system: [
      "React 19, Vite, and Tailwind CSS on the frontend.",
      "Node.js and Express for API structure.",
      "Supabase Auth for login, verification, protected routes, and account access.",
      "Supabase Postgres for relational workflows and long-term maintainability.",
      "RBAC / role-based access control for alumni, residents, mentors, and administrators.",
      "Newsletter, SMTP/email, booking, directory, project, and admin-dashboard workflow foundations.",
    ],
    owned: [
      "Owned the architecture direction and day-to-day development.",
      "Drove discovery, requirements, data modeling, interface behavior, and iteration.",
      "Refined role semantics, onboarding flows, protected routes, admin behavior, and verification flows.",
      "Improved mobile UX, newsletter integration, and production-readiness planning.",
      "Treated the product as a system design problem, not just a collection of pages.",
    ],
    decisions: [
      "Model roles clearly so the platform can grow without confusing permissions and responsibilities.",
      "Move toward Supabase Postgres and Supabase Auth to simplify authentication, role management, and production deployment.",
      "Keep the product centered on useful community workflows instead of vanity features.",
      "Design admin and lifecycle workflows early so the system can support real operations later.",
      "Preserve long-term maintainability through documentation, smoke tests, and launch checklists.",
    ],
    interesting:
      "This project shows ownership beyond feature building. It required product direction, role semantics, data modeling, admin workflows, authentication decisions, mobile UX, production readiness, and a clear understanding of how a real community might operate inside software.",
    status: "Active platform build",
    image: syncUpDashboardImage,
    imageAlt: "ICAA Headquarters dashboard interface",
    gallery: [
      {
        image: syncUpDirectoryImage,
        alt: "ICAA Headquarters community directory interface",
        title: "Community directory",
      },
      {
        image: syncUpProjectImage,
        alt: "ICAA Headquarters project and collaboration interface",
        title: "Project collaboration",
      },
      {
        image: syncUpAdminImage,
        alt: "ICAA Headquarters admin workflow interface",
        title: "Admin workflow",
      },
    ],
    githubHref: "https://github.com/bonny2long/SyncUp",
  },
  {
    slug: "united-airlines-dashboard",
    eyebrow: "Client delivery",
    title: "United Airlines Dashboard",
    shortTitle: "United Airlines Dashboard",
    summary:
      "A full-stack analytics platform built during i.c.stars for United Airlines to help executives and analysts understand customer feedback, sentiment, and operational insights.",
    secondary:
      "Built under real client constraints with a KPI-driven interface, AI insight layer, role-aware access, and presentation-ready reporting flows.",
    highlights: [
      "Winning customer insights dashboard selected by United Airlines in a competitive RFP.",
      "AI-powered insight layer using Anthropic Claude to generate structured recommendations from customer feedback.",
      "KPI-driven dashboard experience for executive and analyst decision-making.",
      "Role-based access control for persona-specific data access.",
      "Built under client-facing deadlines with debugging, documentation, demos, and presentation support.",
    ],
    problem:
      "United needed a faster way for executives and analysts to understand customer feedback, sentiment trends, hub-level issues, and operational patterns without relying only on scattered reports and manual interpretation.",
    systemTitle: "Stack / system",
    systemText:
      "The project combined dashboard design, AI-supported insight generation, data visibility rules, and client-facing presentation. The focus was turning customer feedback into structured insights that could support better business decisions.",
    system: [
      "React-based dashboard architecture.",
      "KPI modules designed around executive and analyst workflows.",
      "AI-powered insight flow using Anthropic Claude.",
      "Role-aware views and data access patterns.",
      "Power BI used for visual reporting support during the client project.",
    ],
    owned: [
      "Built responsive KPI and dashboard sections in React.",
      "Helped shape how AI-powered insights surfaced in the interface.",
      "Translated stakeholder needs into dashboard requirements, layouts, and reporting flows.",
      "Contributed debugging, documentation, demos, delivery planning, and presentation support.",
      "Worked under deadline pressure with a cross-functional team.",
    ],
    decisions: [
      "Design for executive clarity before adding more interface complexity.",
      "Prioritize high-signal comparisons, filters, summaries, and recommendations.",
      "Translate business questions into dashboard states that support action.",
      "Keep the AI layer structured and useful instead of making it feel like a generic chatbot.",
    ],
    interesting:
      "This is one of the strongest proof points because it combines frontend architecture, product thinking, AI-supported workflows, business translation, and client-facing delivery pressure in one project.",
    note: "Winning solution delivered as part of a real client engagement with United Airlines through i.c.stars.",
    image: unitedImage,
    imageAlt: "United Airlines customer analytics dashboard interface",
    liveHref: "https://dash-by-metis.netlify.app/",
    githubHref: "https://github.com/bonny2long/Metis",
  },
  {
    slug: "resume-agent",
    eyebrow: "AI workflow system",
    title: "Resume Agent",
    shortTitle: "Resume Agent",
    summary:
      "An AI-assisted application workflow system that analyzes job descriptions, evaluates alignment, and generates tailored application materials from structured experience data.",
    secondary:
      "Built around semantic matching, structured scoring, keyword classification, document generation, and workflow automation instead of generic one-off prompting.",
    highlights: [
      "Job description parsing and structured requirement extraction.",
      "Semantic matching with PostgreSQL and pgvector concepts.",
      "ATS-style scoring rules, similarity ranking, and keyword classification.",
      "Tailored resume and cover letter generation tied to role requirements.",
      "Multi-provider LLM fallback strategy for more reliable output.",
      "Reduced manual resume tailoring time by roughly 80%.",
    ],
    problem:
      "Applying to multiple roles usually means repeated rewriting, inconsistent alignment, and a lot of manual comparison between job descriptions and experience. Resume Agent turns that messy process into a repeatable system.",
    systemTitle: "System focus",
    systemText:
      "The system is designed around structured application workflow: job intake, requirement parsing, semantic matching, ATS-style scoring, tailored generation, and tracking. The point is not just to generate text, but to keep the output tied to real role requirements.",
    system: [
      "Parsed job requirements feed each generation step.",
      "Structured experience data is compared against role requirements.",
      "Semantic matching supports better job-to-resume alignment.",
      "Tailored resume and cover-letter outputs stay tied to the source role.",
      "Multi-provider LLM fallback logic improves reliability.",
      "Tracking is treated as part of the workflow, not an afterthought.",
    ],
    owned: [
      "Framed the product around a real workflow problem instead of a one-off AI demo.",
      "Designed the system flow from job description intake to tailored application output.",
      "Implemented semantic matching concepts, scoring logic, and structured document generation flow.",
      "Used the project to turn repeated job-search work into a reusable engineering system.",
    ],
    decisions: [
      "Start from structured requirements rather than generic content generation.",
      "Keep the system useful for real applications, not just prompt experimentation.",
      "Separate parsing, matching, scoring, generation, and tracking into clear workflow stages.",
      "Use AI as part of a structured pipeline instead of relying on one ungrounded prompt.",
    ],
    interesting:
      "It combines AI output with systems thinking. The interesting part is not just generating documents, but building a workflow that stays aligned with real job requirements and reduces actual user friction.",
    note: "This is an expanding portfolio case study. The current version documents the product goal, workflow architecture, AI layers, and automation logic while leaving room for implementation detail as the build evolves.",
    status: "Active build",
    image: workingImage,
    imageAlt:
      "Bonny working on a laptop, representing the Resume Agent build in progress",
    githubHref: "https://github.com/bonny2long/resume-agent",
  },
  {
    slug: "chefbonbon",
    eyebrow: "AI product",
    title: "Chef BonBon",
    shortTitle: "Chef BonBon",
    summary:
      "An AI-powered recipe application that generates recipes from available ingredients and cooking method choices, then evolved toward a more scalable PostgreSQL/Supabase backend pattern.",
    secondary:
      "Originally built as an MVP, then improved as my understanding of backend structure, data modeling, and long-term maintainability matured.",
    highlights: [
      "AI-assisted recipe generation from ingredients and cooking method choices.",
      "React frontend with Node.js and Express backend.",
      "LLM API integration, rate limiting, and CORS configuration.",
      "Backend direction moved from Firebase-style storage toward PostgreSQL/Supabase patterns.",
      "Reworked architecture thinking around scalability, data isolation, and maintainability.",
    ],
    problem:
      "The app helps people cook from what they already have. The deeper engineering challenge was making the product structure strong enough to support future features, saved recipes, user data, and cleaner data access over time.",
    systemTitle: "Stack / system",
    systemText:
      "Chef BonBon started as an AI recipe MVP, but it became more valuable as a learning project when the backend direction changed. It shows growth from simply getting an AI feature working toward thinking more carefully about data structure, reliability, and maintainability.",
    system: [
      "React-based frontend workflow.",
      "Node.js and Express backend API.",
      "AI recipe generation tied to ingredient and cooking method input.",
      "Rate limiting and CORS configuration for safer API behavior.",
      "PostgreSQL/Supabase backend direction for more scalable data handling.",
    ],
    owned: [
      "Built the original MVP.",
      "Added cooking method choices after feedback.",
      "Designed API flow from user input to AI-generated output.",
      "Reconsidered the backend approach once the product's data needs became clearer.",
      "Used the migration direction as a chance to improve architecture instead of only swapping tools.",
    ],
    decisions: [
      "Move away from the original backend direction once the data model outgrew it.",
      "Choose relational structure for cleaner querying and stronger long-term maintainability.",
      "Keep AI output structured enough to be useful in the interface.",
      "Treat feedback as a reason to improve the product workflow, not just patch the UI.",
    ],
    interesting:
      "The strongest part of Chef BonBon is the backend rethink. It shows a willingness to revisit earlier choices and rebuild around better structure once the product's needs are clearer.",
    image: chefBonBonImage,
    imageAlt: "Chef BonBon recipe application interface",
    liveHref: "https://chefbonbon.netlify.app/",
    githubHref: "https://github.com/bonny2long/ChefBonBon",
  },
];
