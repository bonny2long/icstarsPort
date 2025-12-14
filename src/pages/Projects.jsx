import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/layout/Section";

export default function Projects() {
  return (
    <>
      {/* PAGE INTRO */}
      <Section bg="default">
        <SectionHeader
          title="Projects"
          subtitle="Full stack systems that show my growth as an engineer."
        />
      </Section>

      {/* ===================== */}
      {/* SYNCUP PROJECT */}
      {/* ===================== */}
      <Section bg="subtle">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          SyncUp — Collaboration & Mentorship Platform
        </h2>

        <p className="mb-4 text-zinc-700">
          SyncUp is a full-stack platform in active development designed to help
          interns, alumni, and mentors in the i.c.stars community connect,
          collaborate, and track growth. It started as a two-person project and
          has grown into a system where I now own the architecture, development,
          and direction.
        </p>

        <p className="mb-4 text-zinc-700">
          The goal is to create a central hub where people can find collaborators,
          share opportunities, log reflections, and support each other across
          cycles.
        </p>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="https://github.com/sofieicstars/SyncUp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium hover:text-indigo-700 transition"
          >
            View GitHub Repository →
          </a>
          <span className="text-sm text-zinc-500">
            Live demo coming soon
          </span>
        </div>

        {/* Screenshot Placeholder */}
        <div className="mb-6 w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
          SyncUp dashboard screenshot
        </div>

        <Card title="SyncUp — Stack & Responsibilities">
          <p className="mb-2 font-medium">Tech stack:</p>
          <ul className="list-disc list-inside mb-3 space-y-1">
            <li>Frontend: React 19, Vite 7, Tailwind CSS 4, Lucide React</li>
            <li>Backend: Node.js, Express 5</li>
            <li>Database: MySQL (local), planning for Azure SQL</li>
            <li>Cloud/Analytics: Azure Cognitive Services, Power BI (planned)</li>
          </ul>

          <p className="mb-2 font-medium">What it does:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Connects interns, alumni, and mentors.</li>
            <li>Helps people find and join projects.</li>
            <li>Tracks skills and reflections over time.</li>
            <li>Supports feedback loops between mentors and interns.</li>
          </ul>

          <p className="mt-3">
            I have driven the SDLC end-to-end: discovery, requirements, data
            modeling, architecture planning, UI design, full stack development,
            and iteration. This project demonstrates that I don&apos;t just build
            features — I design systems.
          </p>
        </Card>
      </Section>

      {/* ===================== */}
      {/* CHEFBONBON PROJECT */}
      {/* ===================== */}
      <Section bg="default">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          ChefBonBon (ChefBot) — AI-Powered Recipe App
        </h2>

        <p className="mb-4 text-zinc-700">
          ChefBonBon is an AI-driven recipe generator that helps people cook with
          what they already have. It started as a personal project before
          i.c.stars and evolved as my understanding of relational databases and
          architecture grew.
        </p>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="https://chefbonbon.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 font-medium hover:text-emerald-700 transition"
          >
            View Live App →
          </a>
        </div>

        {/* Screenshot Placeholder */}
        <div className="mb-6 w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
          ChefBonBon app screenshot
        </div>

        <Card title="From Firebase to Supabase">
          <p className="mb-3">
            The first version used Firebase and was a fully functional MVP.
            Users could enter ingredients, generate recipes with AI, and save
            favorites. After learning SQL and relational modeling at i.c.stars,
            I realized the app needed a more scalable backend, so I migrated it
            to Supabase with PostgreSQL.
          </p>

          <p className="mb-2 font-medium">Why I migrated:</p>
          <ul className="list-disc list-inside mb-3 space-y-1">
            <li>Cleaner relational schema using SQL.</li>
            <li>Better long-term performance and querying.</li>
            <li>More control over data, indexing, and policies.</li>
            <li>Lower cost for scaling over time.</li>
          </ul>

          <p className="mb-2 font-medium">What I learned:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>How to plan and execute a real backend migration.</li>
            <li>How to normalize relational data.</li>
            <li>How to refactor front-end logic around new APIs.</li>
            <li>
              How to think like an engineer — choosing tools based on structure
              and scalability.
            </li>
          </ul>
        </Card>
      </Section>
    </>
  );
}
