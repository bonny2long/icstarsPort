import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/layout/Section";

export default function ClientProject() {
  return (
    <>
      {/* PAGE INTRO */}
      <Section bg="default">
        <SectionHeader
          title="Client Project: United Airlines"
          subtitle="Metis Customer Analytics Dashboard"
        />

        {/* HERO PRODUCT IMAGE */}
        <div className="mt-10 w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
          United Airlines dashboard overview
        </div>

        <p className="mt-8 text-zinc-700">
          During the client project, our cohort partnered with United Airlines to
          solve a real business challenge. Our team, Metis, delivered a customer
          analytics platform with AI-powered insights, executive dashboards, and
          data visualizations that helped leaders understand customer feedback
          across hubs.
        </p>
      </Section>

      {/* BUSINESS PROBLEM */}
      <Section bg="subtle">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          The Business Problem
        </h2>

        <p className="text-zinc-700">
          United receives massive amounts of customer feedback through surveys,
          comments, and internal systems. Executives needed a faster way to see
          sentiment trends, feedback volume, and loyalty metrics across hubs, and
          to identify issues that required immediate attention. They needed one
          place for clear, real-time insight instead of scattered reports and
          manual analysis.
        </p>
      </Section>

      {/* APPROACH */}
      <Section bg="default">
        {/* SYSTEM IMAGE */}
        <div className="mb-8 w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
          Data flow, AI insights, or analytics view
        </div>

        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Our Approach as Metis Consulting
        </h2>

        <p className="mb-4 text-zinc-700">
          We treated the engagement like a real consulting project. We met with
          stakeholders to understand the decisions they needed to make, designed
          wireframes around executive workflows, and planned an architecture
          that combined a React-based dashboard, AI insights powered by
          Anthropic Claude, and Power BI integration for deeper reporting.
        </p>

        <p className="text-zinc-700">
          We focused on clarity, speed, and usability: fast filtering, clear
          KPIs, hub comparisons, and AI summaries that surfaced what mattered
          most.
        </p>
      </Section>

      {/* CONTRIBUTIONS */}
      <Section bg="subtle">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          My Individual Contribution
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Front-End Architecture & UI">
            <ul className="list-disc list-inside space-y-1">
              <li>Helped define the component structure for the executive dashboard.</li>
              <li>Built responsive layouts and KPI sections in React.</li>
              <li>
                Focused on simple, executive-friendly UI that still held depth
                for analysts.
              </li>
            </ul>
          </Card>

          <Card title="AI Integration & Data Logic">
            <ul className="list-disc list-inside space-y-1">
              <li>Worked on the flow of prompts and responses for Sparky AI.</li>
              <li>Helped shape how AI insights were displayed to executives.</li>
              <li>Connected front-end components to data sources and state.</li>
            </ul>
          </Card>

          <Card title="Collaboration & Presentation">
            <ul className="list-disc list-inside space-y-1">
              <li>Debugged issues with the team under tight deadlines.</li>
              <li>
                Contributed to how we explained the solution to United&apos;s
                stakeholders.
              </li>
              <li>
                Supported teammates and took ownership of complex dashboard
                pieces.
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* WIN / OUTCOME */}
      <Section bg="default">
        {/* OUTCOME IMAGE */}
        <div className="mb-8 w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
          Final presentation or client approval moment
        </div>

        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Winning the Competition
        </h2>

        <p className="mb-4 text-zinc-700">
          Four teams competed to solve United&apos;s challenge. Metis won. United
          told us we were the team that truly understood the problem and
          delivered a functional product that aligned with their needs.
        </p>

        <p className="text-zinc-700">
          That recognition from a global airline confirmed for me that I can
          deliver at a professional level right now, in both engineering and
          consulting environments.
        </p>
      </Section>

      {/* LEARNINGS */}
      <Section bg="subtle">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What I Learned
        </h2>

        <p className="mb-3 font-medium text-slate-900">
          Technical growth:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1 text-zinc-700">
          <li>Building scalable React dashboards and architectures.</li>
          <li>Designing interfaces for executive users.</li>
          <li>Integrating AI into real business workflows.</li>
          <li>Managing state, filters, and performance.</li>
        </ul>

        <p className="mb-3 font-medium text-slate-900">
          Business and leadership growth:
        </p>
        <ul className="list-disc list-inside space-y-1 text-zinc-700">
          <li>Translating business requirements into technical decisions.</li>
          <li>Presenting complex systems simply.</li>
          <li>Working under real deadlines with real clients.</li>
          <li>Thinking like a consultant, not just a developer.</li>
        </ul>
      </Section>
    </>
  );
}
