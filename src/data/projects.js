import chefBonBonCookBuilderImage from "../assets/projects/chefbonbon/chefbonbon-cook-builder.jpg";
import chefBonBonCookModeImage from "../assets/projects/chefbonbon/chefbonbon-cook-mode.jpg";
import chefBonBonCookTimerImage from "../assets/projects/chefbonbon/chefbonbon-cook-timer.jpg";
import chefBonBonGeneratingImage from "../assets/projects/chefbonbon/chefbonbon-generating.jpg";
import chefBonBonProfileImage from "../assets/projects/chefbonbon/chefbonbon-profile.jpg";
import chefBonBonRecipeDetailImage from "../assets/projects/chefbonbon/chefbonbon-recipe-detail.jpg";
import chefBonBonSavedRecipesImage from "../assets/projects/chefbonbon/chefbonbon-saved-recipes.jpg";
import syncUpDashboardImage from "../assets/photos/syncupV30.png";
import syncUpDirectoryImage from "../assets/photos/syncupV31.png";
import syncUpProjectImage from "../assets/photos/syncupV32.png";
import syncUpAdminImage from "../assets/photos/syncupV33.png";
import timeLedgerBillingImage from "../assets/projects/time-ledger/time-ledger-billing.png";
import timeLedgerClientsImage from "../assets/projects/time-ledger/time-ledger-clients.png";
import timeLedgerInsightsImage from "../assets/projects/time-ledger/time-ledger-insights.png";
import timeLedgerProjectsImage from "../assets/projects/time-ledger/time-ledger-projects.png";
import timeLedgerSignInImage from "../assets/projects/time-ledger/time-ledger-sign-in.png";
import timeLedgerTimesheetsImage from "../assets/projects/time-ledger/time-ledger-timesheets.png";
import unitedImage from "../assets/photos/dasha.png";
import workingImage from "../assets/photos/working.png";
import bmRadioAudiobookImage from "../assets/projects/bm-radio/bm-radio-audiobook.jpg";
import bmRadioLibraryImage from "../assets/projects/bm-radio/bm-radio-library.jpg";
import bmRadioNowPlayingImage from "../assets/projects/bm-radio/bm-radio-now-playing.jpg";

export const projects = [
  {
    slug: "time-ledger",
    eyebrow: "Full-stack SaaS",
    title: "Time Ledger",
    shortTitle: "Time Ledger",
    summary:
      "A live multi-tenant time tracking and billing platform rebuilt through a production V2 rollout, with weekly timesheets, direct invoice delivery, shared-team billing, access recovery, and operational reporting.",
    secondary:
      "Production V2 combines server-authoritative billing, audited email delivery, multi-workspace isolation, and responsive workflows for small teams.",
    highlights: [
      "Live V2 product at timeledger.me with a rebuilt responsive application shell and workflow-specific views.",
      "Multi-workspace SaaS architecture with organization-level data isolation.",
      "Server-authoritative invoice review, short or detailed email delivery, idempotency protection, and delivery history.",
      "Shared-team rates, incomplete-time warnings that name missing teammates, and one-time reminder emails.",
      "Google and password access, password setup and recovery, invites, onboarding, archive states, and account safeguards.",
    ],
    problem:
      "Small teams and independent contractors often manage clients, projects, hours, and billing across disconnected spreadsheets, messages, and notes. Time Ledger centralizes that workflow so teams can track work, review weekly totals, manage clients and projects, and generate cleaner client-ready billing summaries from one system.",
    systemTitle: "Architecture / stack",
    systemText:
      "Time Ledger is structured as a product-grade SaaS system: a React and TypeScript frontend, a FastAPI service layer, Supabase Auth for identity, and PostgreSQL-backed relational workflows for workspaces, memberships, clients, projects, time entries, invoice delivery, reminders, and reporting.",
    system: [
      "Multi-tenant workspace model with every workflow scoped by organization.",
      "React 19, TypeScript, Vite, TanStack Query, Recharts, and Tailwind on the frontend.",
      "FastAPI, SQLAlchemy 2.x, Alembic, Pydantic settings, and PostgreSQL on the backend.",
      "Supabase Auth for Google or password access, protected workflows, password setup, and recovery.",
      "Server-generated billing totals, audited invoice delivery, shared-team reminders, and required work descriptions.",
    ],
    owned: [
      "Built the product end to end across frontend, backend, database, authentication, deployment, and workflow design.",
      "Designed the workspace, membership, client, project, invitation, time-entry, archive, and billing data flows.",
      "Implemented the workflows that turn tracked time into weekly summaries, shared-team billing review, and directly delivered client invoices.",
      "Rebuilt the product through a phased V2 rollout with contract tests protecting permissions, billing rules, and account lifecycle behavior.",
      "Connected user-facing product decisions to backend models so the system stayed maintainable as features grew.",
    ],
    decisions: [
      "Designed around multi-tenant workspace isolation instead of treating permissions as an afterthought.",
      "Kept billing authority on the server so invoice totals, line items, recipients, and send history are based on persisted records.",
      "Used idempotency records and delivery history so retries cannot silently send the same invoice twice.",
      "Used migrations, archive states, account lifecycle rules, and guarded data flows to make the product easier to maintain.",
      "Chose practical product workflows over unnecessary complexity so the app could support real users sooner.",
    ],
    interesting:
      "Time Ledger is the strongest portfolio proof point because it covers the real surface area of a production SaaS product: tenancy, auth, invoice delivery, shared-team billing, reminders, data modeling, reporting, deployment, testing, and lifecycle safeguards.",
    note: "The live product and public repository document the production V2 architecture, billing invariants, rollout decisions, and tested account workflows.",
    status: "Live V2 product",
    workMeta: "React 19 · FastAPI · PostgreSQL · Production V2",
    image: timeLedgerTimesheetsImage,
    imageAlt: "Time Ledger weekly timesheet workspace",
    media: {
      kind: "dashboard",
      tone: "ink",
      indexAspect: "aspect-[16/9]",
      objectPosition: "object-top",
    },
    liveHref: "https://timeledger.me/",
    githubHref: "https://github.com/bonny2long/timeledger",
    gallery: [
      {
        image: timeLedgerBillingImage,
        alt: "Time Ledger client billing and invoice delivery workflow",
        title: "Billing delivery",
        caption:
          "A scoped client-and-period workflow moves recorded work into invoice review, delivery, and a persistent audit trail.",
      },
      {
        image: timeLedgerInsightsImage,
        alt: "Time Ledger workspace reporting and insights dashboard",
        title: "Workspace insights",
        caption:
          "Read-only reporting filters recorded time and amount patterns by client and period without rewriting historical rate behavior.",
      },
      {
        image: timeLedgerClientsImage,
        alt: "Time Ledger client records workspace",
        title: "Client records",
        caption:
          "Searchable active and archived client states keep billing identity and downstream project relationships explicit.",
      },
      {
        image: timeLedgerProjectsImage,
        alt: "Time Ledger project management workspace",
        title: "Client-first projects",
        caption:
          "Project creation respects the data model: an active client must exist before project work can begin.",
      },
      {
        image: timeLedgerSignInImage,
        alt: "Time Ledger secure workspace sign-in screen",
        title: "Workspace access",
        caption:
          "The production access surface supports email and password, recovery, account creation, and Google sign-in.",
      },
    ],
  },
  {
    slug: "nas-media-platform",
    eyebrow: "Multi-service systems engineering",
    title: "Personal Media Infrastructure Platform",
    shortTitle: "Personal Media Infrastructure",
    summary:
      "Designed and built a four-service personal media infrastructure platform that moves digital media from safe intake through human-reviewed organization into private listener-facing libraries.",
    secondary:
      "Final local software acceptance complete. Physical TrueNAS deployment is intentionally deferred.",
    productSummary:
      "BM Radio provides the music and audiobook experience, while Intake Watcher, Archive Assistant, and Cleaner independently manage stability, archive organization, and evidence-driven cleanup.",
    highlights: [
      "Four independently owned services with final local workflow acceptance.",
      "21-file real-media canary completed with zero SHA-256 mismatches.",
      "Clear write boundaries, human-approved final moves, quarantine evidence, and production-gated empty-folder cleanup.",
      "BM Radio indexed 275 physical tracks as 261 logical recordings using PostgreSQL.",
      "September production work corrected suite navigation, shipped multi-disc audiobook chapter ordering, completed the quarantine lifecycle and gated empty-folder execution, and synchronized current-state documentation with NAS runbook v12.",
    ],
    problem:
      "A long-term personal media archive needs more than storage. It needs safe intake, classification, human review, final-library organization, listener-facing access, auditability, and conservative leftover handling without accidental deletion.",
    systemTitle: "Four-service architecture",
    systemText:
      "Each application owns a narrow responsibility so upload handling, classification, playback, and cleanup evidence do not blur into one unsafe process.",
    system: [
      "Intake Watcher promotes stable completed uploads without deep classification or final-library ownership.",
      "Archive Assistant classifies non-photo media, groups multi-disc releases, manages quarantine review, requires human approval, performs final moves, and records manifests.",
      "BM Radio provides music and audiobook listening, playlists, history, progress, and correct multi-disc audiobook ordering using PostgreSQL with read-only final-library media access.",
      "Cleaner reads post-move evidence and remains report-only for files; reviewed empty folders can be removed only when every production gate is enabled.",
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
          "Classifies non-photo media and groups multi-disc albums and audiobooks as single releases.",
          "Supports metadata review, quarantine/restore/discard states, and human approval.",
          "Performs approved final moves and writes move manifests plus append-only disposition records.",
        ],
      },
      {
        name: "BM Radio",
        responsibility: "Listener-facing playback",
        details: [
          "Provides music and audiobook library, radio, playlists, history, progress, and multi-disc chapter ordering.",
          "Uses PostgreSQL and preferred physical-source selection.",
          "Treats final-library media as read-only.",
        ],
      },
      {
        name: "Cleaner",
        responsibility: "Conservative leftover review",
        details: [
          "Reads Archive Assistant post-move evidence.",
          "Classifies leftovers and produces reviewable plan reports with a 30-day default age gate.",
          "Never deletes files; reviewed empty folders require four explicit production gates and fresh evidence.",
        ],
      },
    ],
    owned: [
      "Designed the ownership and write boundaries across all four applications.",
      "Built acceptance around real media, duplicate handling, hashes, regression baselines, and recovery documentation.",
      "Kept human approval in front of final Archive Assistant moves, quarantine dispositions, and Cleaner execution.",
      "Chose PostgreSQL for BM Radio and SQLite for Archive Assistant based on their different responsibilities.",
      "Closed a coordinated production pass across all four repositories without weakening the system's read-only and human-approval boundaries.",
    ],
    decisions: [
      "Kept file deletion out of Cleaner while allowing only reviewed empty-folder removal behind four production gates.",
      "Archive Assistant final moves require human approval and retain evidence for later review.",
      "Quarantine actions append disposition records so restore, discard, and recovery decisions remain auditable.",
      "Playback remains outside the cleanup path and uses read-only access to final media.",
      "Local acceptance is stated separately from deferred physical TrueNAS deployment.",
    ],
    proof: [
      {
        label: "Independently owned services",
        value: "4",
        detail: "Narrow contracts across intake, organization, playback, and cleanup",
      },
      {
        label: "Real-media acceptance",
        value: "21 / 21",
        detail: "Copied files completed",
      },
      {
        label: "SHA-256 mismatches",
        value: "0",
        detail: "Every acceptance file verified",
      },
      {
        label: "Logical recordings indexed",
        value: "261",
        detail: "From 275 physical tracks",
      },
    ],
    supportingProof: [
      {
        label: "BM Radio",
        value: "63 passed · 0 failed · 4 skipped",
      },
      {
        label: "Intake Watcher",
        value: "14 / 14 passed",
      },
      {
        label: "Cleaner",
        value: "Files report-only · empty folders gated",
      },
    ],
    interesting:
      "This platform demonstrates systems engineering beyond a single application: service boundaries, data ownership, conservative automation, multiple intentional database choices, real-media verification, testing, and recovery discipline.",
    note:
      "Cleaner never deletes files. Its only executable cleanup is reviewed empty-folder removal behind four production gates. Playback remains isolated from cleanup, and BM Radio cannot mutate archive media.",
    status: "Local acceptance passed",
    workMeta: "4 services · 21 / 21 files · 0 hash mismatches",
    imageAlt:
      "BM Radio listener interface representing the product layer of the personal media infrastructure platform",
    visualLabels: ["Intake Watcher", "Archive Assistant", "BM Radio", "Cleaner"],
    media: {
      kind: "mobile-stack",
      tone: "violet",
      images: {
        nowPlaying: bmRadioNowPlayingImage,
        library: bmRadioLibraryImage,
        audiobook: bmRadioAudiobookImage,
      },
    },
    repositories: [
      {
        name: "BM Radio",
        responsibility: "Listener-facing music and audiobook product",
        href: "https://github.com/bonny2long/BM_radio",
      },
      {
        name: "Archive Assistant",
        responsibility: "Human-reviewed organization and final moves",
        href: "https://github.com/bonny2long/archive_assistant",
      },
      {
        name: "Cleaner",
        responsibility: "Evidence-driven review with production-gated empty-folder cleanup",
        href: "https://github.com/bonny2long/cleaner",
      },
      {
        name: "Intake Watcher",
        responsibility: "Stable upload promotion",
        href: "https://github.com/bonny2long/intake-watcher",
      },
    ],
  },
  {
    slug: "syncup",
    eyebrow: "Community operations platform",
    title: "ICAA Headquarters / SyncUp",
    shortTitle: "ICAA Headquarters",
    summary:
      "A full-stack ICAA community operations platform connecting collaboration, mentorship, chat, member discovery, opportunities, project portfolios, newsletters, evidence-based skill tracking, and administration.",
    secondary:
      "A September production-stability pass added CI quality gates, security upgrades, consolidated analytics queries, safer transaction handling, and mentorship scheduling that rejects expired time slots.",
    highlights: [
      "Ten role-aware platform areas spanning administration, collaboration, SyncChat, member discovery, newsletters, opportunities, mentorship, project portfolios, the Intern Lobby, and skill tracking.",
      "Mentorship Bridge supports availability, session requests, and rescheduling through shared date/time controls with server-side rejection of expired bookings.",
      "Supabase authentication and PostgreSQL-backed workflows support protected community, project, lifecycle, and governance operations.",
      "Production hardening upgraded the React, Vite, React Router, Express, charting, rate-limit, upload, email, and PDF foundations while closing dependency vulnerabilities.",
      "GitHub Actions now gates releases with client lint/build, server tests, and PostgreSQL SQL validation; consolidated analytics queries and deferred requests reduce dashboard overhead.",
    ],
    problem:
      "Strong communities can still struggle when the systems around them are scattered. ICAA Headquarters is designed to centralize member visibility, collaboration, mentorship, projects, bookings, communication, and operational workflows so the community has a stronger digital home.",
    systemTitle: "Production architecture",
    systemText:
      "The platform pairs a React 19 and Vite 8 client with an Express 5 API, a Supabase authentication bridge, and PostgreSQL-backed operational workflows. Role-aware product areas share services and domain rules without collapsing community, mentorship, project, skill, and admin responsibilities into one oversized surface.",
    system: [
      "React 19.2, Vite 8, Tailwind CSS 4, React Router 7, AG Charts 14, and Lucide React on the client.",
      "Node.js 20+, Express 5, PostgreSQL, Supabase bearer-token authentication, rate limiting, and Swagger/OpenAPI on the server.",
      "Role-based access separates interns, residents, alumni, mentors, and administrators across protected workflows.",
      "Mentorship date/time validation is shared across availability, booking, profile, and rescheduling flows, with authoritative server checks and regression tests.",
      "GitHub Actions runs deterministic client lint/build checks, server tests, and a PostgreSQL SQL guard before release work merges.",
      "Consolidated admin and headquarters analytics queries, deferred system requests, and a trimmed chart bundle reduce avoidable client and API work.",
    ],
    owned: [
      "Owned architecture and day-to-day delivery across the client, API, authentication bridge, relational workflows, and release process.",
      "Built and refined ten connected product areas around distinct community roles instead of a generic one-size-fits-all dashboard.",
      "Strengthened mentorship scheduling across availability, requests, profiles, and rescheduling while enforcing expired-time rules on the server.",
      "Stabilized production through dependency and security upgrades, analytics query consolidation, request deferral, bundle trimming, and CI quality gates.",
      "Hardened lifecycle operations with retryable cohort cleanup, transaction savepoints, and test coverage for best-effort work.",
    ],
    decisions: [
      "Model roles clearly so the platform can grow without confusing permissions and responsibilities.",
      "Use Supabase authentication and PostgreSQL-backed services to keep account identity and relational operations maintainable.",
      "Reject expired mentorship times on the server even when the interface already filters them out.",
      "Consolidate analytics queries and defer non-critical admin requests to reduce avoidable dashboard load.",
      "Protect best-effort lifecycle work with savepoints and retries so one secondary failure does not corrupt the larger operation.",
      "Keep the product centered on useful community workflows instead of vanity features.",
      "Make linting, builds, server tests, and PostgreSQL SQL validation release gates instead of manual afterthoughts.",
    ],
    interesting:
      "SyncUp demonstrates both product breadth and operational depth: ten connected community surfaces, role and lifecycle semantics, mentorship domain rules, evidence-based skill data, production performance work, security maintenance, and automated release checks.",
    status: "Production-hardened active build",
    workMeta: "React 19 · Vite 8 · Express 5 · Supabase",
    image: syncUpDashboardImage,
    imageAlt: "ICAA Headquarters dashboard interface",
    media: {
      kind: "workflow",
      tone: "sand",
      indexAspect: "aspect-[16/10]",
      objectPosition: "object-top",
    },
    gallery: [
      {
        image: syncUpDirectoryImage,
        alt: "ICAA Headquarters community directory interface",
        title: "Community directory",
        caption:
          "Role-aware member discovery designed around a real community operating model.",
      },
      {
        image: syncUpProjectImage,
        alt: "ICAA Headquarters project and collaboration interface",
        title: "Project collaboration",
        caption:
          "Projects and collaboration workflows connect members to active work.",
      },
      {
        image: syncUpAdminImage,
        alt: "ICAA Headquarters admin workflow interface",
        title: "Admin workflow",
        caption:
          "Administrative controls make lifecycle and governance responsibilities visible.",
      },
    ],
    githubHref: "https://github.com/bonny2long/SyncUp",
  },
  {
    slug: "united-airlines-customer-insights",
    eyebrow: "i.c.stars client / RFP delivery",
    title: "United Airlines Customer Insights",
    shortTitle: "United Customer Insights",
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
    status: "Winning client delivery",
    workMeta: "React · AI insights · KPI dashboards · Winning RFP",
    image: unitedImage,
    imageAlt: "United Airlines customer analytics dashboard interface",
    media: {
      kind: "data",
      tone: "blue",
      indexAspect: "aspect-[4/3]",
      objectPosition: "object-top",
    },
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
    eyebrow: "Live AI consumer product",
    title: "Chef BonBon",
    shortTitle: "Chef BonBon",
    summary:
      "A production mobile-first recipe product that turns ingredients already in the kitchen into structured food or drink recipes, then supports saving, sharing, remixing, and step-by-step cooking.",
    secondary:
      "Chef BonBon V2 is live at chefbonbon.com as an installable PWA with structured AI output, a saved library, guided cook mode, social workflows, and production guardrails.",
    highlights: [
      "Live at chefbonbon.com with a mobile-first app shell, dark/light themes, and installable PWA behavior.",
      "Strict structured recipe generation through the OpenAI Responses API, including quantities, servings, timed steps, tips, and drink-specific fields.",
      "Full-screen cook mode with ingredient checklists, servings scaling, Wake Lock support, and per-step timers with chime and vibration.",
      "Supabase Auth, Postgres, Row Level Security, profiles, saved recipes, feeds, reactions, comments, follows, remixes, and Mystery Basket challenges.",
      "Layered food-only guardrails, moderation, quotas, rate limits, and safe error recovery around the AI workflow.",
    ],
    problem:
      "Most recipe apps begin with a dish and send people shopping. Chef BonBon begins with what someone already has, then has to turn inconsistent ingredient input into a safe, structured recipe that remains useful through saving, sharing, scaling, and the actual cooking session on a phone.",
    systemTitle: "Production V2 architecture",
    systemText:
      "The browser owns product interaction and reads social data directly through Supabase policies. A focused Express API verifies the caller, enforces quotas and guardrails, and turns ingredient requests into a strict recipe schema through the OpenAI Responses API.",
    system: [
      "React 19, Vite, Tailwind CSS, React Router, PWA manifest, and mobile safe-area-aware navigation on Netlify.",
      "Node.js and Express on Railway for authenticated recipe generation, remixes, health checks, quotas, moderation, and rate limiting.",
      "OpenAI Responses API with strict JSON Schema output so every recipe has a predictable, cookable structure.",
      "Supabase Auth, anonymous guest sessions, Postgres, Storage, realtime updates, and Row Level Security for private and public data.",
      "Shareable recipe and profile routes, link previews, resilient loading/error states, and stale-deploy recovery.",
    ],
    owned: [
      "Rebuilt the original MVP into the production V2 product across interaction design, frontend, API, data model, security policies, and deployment.",
      "Designed the ingredient-to-recipe workflow, strict recipe schema, generation sequence, recipe detail view, and full-screen cook mode.",
      "Implemented saved recipes, social feeds, profiles, follows, reactions, comments, remixes, cook-photo posts, and weekly challenges.",
      "Migrated the product toward one relational recipe model with visibility rules instead of duplicating private and public records.",
      "Added production safeguards for unsafe or off-topic requests, prompt injection patterns, guest quotas, request abuse, and recoverable failures.",
    ],
    decisions: [
      "Chose a mobile-first PWA so the product works immediately on a phone while retaining an upgrade path to a native client.",
      "Required strict structured output instead of parsing free-form model text, enabling scaling, checklists, timers, feed cards, and consistent storage.",
      "Kept recipe generation in a narrow API while ordinary product data flows directly through Supabase and Row Level Security.",
      "Used anonymous Supabase sessions plus server-side quotas so guests can try the product without making cost controls browser-dependent.",
      "Built safety as a layered server concern: input screening, moderation, schema-level refusal, rate limiting, and food-handling constraints.",
    ],
    interesting:
      "Chef BonBon now demonstrates a complete consumer AI product rather than an isolated generation demo: constrained model output, relational data and permissions, a mobile interaction system, social loops, real cooking utilities, safety controls, and independent frontend/API deployment.",
    note:
      "The public V2 product is live on its own domain. The screenshots below show the production mobile workflow from ingredient entry through generation, saving, and timed cook mode.",
    status: "Live V2 product",
    workMeta: "React 19 · OpenAI Responses API · Supabase · Mobile PWA",
    imageAlt: "Chef BonBon mobile recipe generation and guided cooking interface",
    media: {
      kind: "mobile-showcase",
      tone: "terracotta",
      screens: [
        {
          image: chefBonBonCookBuilderImage,
          label: "Build from ingredients",
          alt: "Chef BonBon ingredient and cooking-method builder",
        },
        {
          image: chefBonBonRecipeDetailImage,
          label: "Structured recipe",
          alt: "Chef BonBon structured recipe with servings and cooking actions",
          primary: true,
        },
        {
          image: chefBonBonCookModeImage,
          label: "Guided cook mode",
          alt: "Chef BonBon step-by-step cook mode with an integrated timer action",
        },
      ],
    },
    gallery: [
      {
        image: chefBonBonGeneratingImage,
        alt: "Chef BonBon staged recipe-generation progress screen",
        title: "Designed generation state",
        caption:
          "A staged progress sequence makes the model wait understandable instead of leaving the cook with a generic spinner.",
        frameClassName: "aspect-[45/64]",
        imageClassName:
          "absolute left-0 top-0 h-auto w-full max-w-none -translate-y-[9.8%]",
      },
      {
        image: chefBonBonSavedRecipesImage,
        alt: "Chef BonBon saved recipe library with search and filters",
        title: "Searchable saved library",
        caption:
          "Saved recipes can be searched and filtered by food or drink type and cooking method.",
        frameClassName: "aspect-[45/64]",
        imageClassName:
          "absolute left-0 top-0 h-auto w-full max-w-none -translate-y-[9.8%]",
      },
      {
        image: chefBonBonProfileImage,
        alt: "Chef BonBon public profile and shared recipe area",
        title: "Profiles and sharing",
        caption:
          "Profiles connect shared recipes, follows, reactions, comments, and cook-photo posts to a visible identity.",
        frameClassName: "aspect-[45/64]",
        imageClassName:
          "absolute left-0 top-0 h-auto w-full max-w-none -translate-y-[9.8%]",
      },
      {
        image: chefBonBonCookTimerImage,
        alt: "Chef BonBon cook mode with an active step timer",
        title: "Cooking-aware timers",
        caption:
          "Timers live inside the active recipe step and continue alongside the ingredient checklist and serving state.",
        frameClassName: "aspect-[45/64]",
        imageClassName:
          "absolute left-0 top-0 h-auto w-full max-w-none -translate-y-[9.8%]",
      },
    ],
    liveHref: "https://chefbonbon.com/",
    githubHref: "https://github.com/bonny2long/ChefBonBon",
  },
];
