import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/layout/Section";
import dashHero from "../assets/photos/dasha.png";
import analyticsFlow from "../assets/photos/clientwork.png";
import teamWinPhoto from "../assets/photos/winning_team.jpg";

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
        <img
          src={dashHero}
          alt="United Airlines dashboard overview"
          className="mt-10 w-full h-52 sm:h-64 rounded-xl object-cover object-[50%_20%]"
        />

        {/* PRIMARY CTA */}
        <div className="mt-6 text-center">
          <a
            href="https://dash-by-metis.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition text-center"
          >
            View Live Dashboard
          </a>
        </div>

        <p className="mt-8 text-zinc-700 max-w-3xl mx-auto">
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

        <p className="text-zinc-700 max-w-3xl">
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
        <div className="mb-8 w-full h-52 sm:h-64 rounded-xl overflow-hidden">
          <img
            src={analyticsFlow}
            alt="Data flow and AI insights for the dashboard"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Our Approach as Metis Consulting
        </h2>

        <p className="mb-4 text-zinc-700 max-w-3xl">
          We treated the engagement like a real consulting project. We met with
          stakeholders to understand the decisions they needed to make, designed
          wireframes around executive workflows, and planned an architecture
          that combined a React-based dashboard, AI insights powered by
          Anthropic Claude, and Power BI integration for deeper reporting.
        </p>

        <p className="text-zinc-700 max-w-3xl">
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
              <li>Defined component structure for the executive dashboard.</li>
              <li>Built responsive KPI layouts in React.</li>
              <li>Designed executive-friendly UI with analytical depth.</li>
            </ul>
          </Card>

          <Card title="AI Integration & Data Logic">
            <ul className="list-disc list-inside space-y-1">
              <li>Worked on prompt and response flow for Sparky AI.</li>
              <li>Shaped how AI insights surfaced for executives.</li>
              <li>Connected front-end components to data and state.</li>
            </ul>
          </Card>

          <Card title="Collaboration & Presentation">
            <ul className="list-disc list-inside space-y-1">
              <li>Debugged under tight deadlines with the team.</li>
              <li>Helped present the solution to United stakeholders.</li>
              <li>Owned complex dashboard sections end-to-end.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* WIN / OUTCOME */}
      <Section bg="default">
        <div className="mb-8 w-full h-52 sm:h-64 rounded-xl overflow-hidden">
          <img
            src={teamWinPhoto}
            alt="Team Metis celebrating the client presentation"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Winning the Competition
        </h2>

        <p className="mb-4 text-zinc-700 max-w-3xl">
          Four teams competed to solve United&apos;s challenge. Metis won. United
          told us we were the team that truly understood the problem and
          delivered a functional product aligned with their needs.
        </p>

        <p className="mb-6 text-zinc-700 max-w-3xl">
          That recognition from a global airline confirmed that I can deliver
          at a professional level right now, in both engineering and consulting
          environments.
        </p>

        {/* SECONDARY CTA */}
        <a
          href="https://dash-by-metis.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition text-center"
        >
          Explore the Live Dashboard
        </a>
      </Section>

      {/* LEARNINGS */}
      <Section bg="subtle">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What I Learned
        </h2>

        <p className="mb-3 font-medium text-slate-900">Technical growth:</p>
        <ul className="list-disc list-inside mb-6 space-y-1 text-zinc-700">
          <li>Scalable React dashboard architecture.</li>
          <li>Designing for executive decision-making.</li>
          <li>Integrating AI into real business workflows.</li>
          <li>Managing state, filters, and performance.</li>
        </ul>

        <p className="mb-3 font-medium text-slate-900">
          Business and leadership growth:
        </p>
        <ul className="list-disc list-inside space-y-1 text-zinc-700">
          <li>Translating business needs into technical solutions.</li>
          <li>Communicating complex systems clearly.</li>
          <li>Delivering under real client deadlines.</li>
          <li>Thinking like a consultant, not just a developer.</li>
        </ul>
      </Section>
    </>
  );
}
