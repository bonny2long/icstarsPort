import chefBonBonImage from "../assets/photos/chefbot.png";
import geekWeekImage from "../assets/photos/geekweek2.jpg";
import headshotImage from "../assets/photos/headshot_contact.jpg";
import syncUpImage from "../assets/photos/syncup.png";
import teaHostImage from "../assets/photos/teaguest.jpg";
import teamWeekImage from "../assets/photos/teamweek.jpg";
import unitedTeamImage from "../assets/photos/winning_team.jpg";
import unitedImage from "../assets/photos/dasha.png";
import workingImage from "../assets/photos/working.png";

export const portfolioProjects = [
  {
    slug: "resume-agent",
    eyebrow: "Featured build",
    title: "Resume Agent",
    summary:
      "An AI-powered system that automates the job application process by analyzing job descriptions, generating tailored resumes and cover letters, and tracking applications.",
    secondary:
      "Built to remove the repetitive work of applying while improving alignment with real job requirements.",
    highlights: [
      "AI-driven resume and cover letter generation",
      "Job description parsing and semantic matching",
      "Application tracking system",
      "Workflow automation for outreach",
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
    slug: "syncup",
    eyebrow: "Platform design",
    title: "SyncUp",
    shortTitle: "SyncUp",
    summary:
      "A mentorship and collaboration platform designed to connect interns, alumni, and teams while tracking growth and skills over time.",
    secondary:
      "The goal is to create a central place for collaboration, skill visibility, and long-term community support.",
    highlights: [
      "React front end with a Node and Express backend foundation",
      "Relational data modeling for people, projects, and skills",
      "Architecture focused on collaboration instead of isolated features",
    ],
    problem:
      "Communities often have strong people but weak systems for keeping collaboration, mentoring, and growth visible over time. SyncUp is designed to make those connections actionable.",
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
      "What makes SyncUp interesting is the mix of community context and system design. It is a product about relationships, but the engineering challenge is structuring those relationships clearly.",
    image: syncUpImage,
    imageAlt: "SyncUp collaboration platform dashboard",
    githubHref: "https://github.com/bonny2long/SyncUp",
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
