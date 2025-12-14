import PageWrapper from "../components/layout/PageWrapper.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";

export default function ClientProject() {
  return (
    <PageWrapper>
      <SectionHeader
        title="Client Project: United Airlines"
        subtitle="Metis Customer Analytics Dashboard"
      />

      <p className="mb-6">
        During the client project, our cohort partnered with United Airlines to
        solve a real business challenge. Our team, Metis, delivered a customer
        analytics platform with AI-powered insights, executive dashboards, and
        data visualizations that helped leaders understand customer feedback
        across hubs.
      </p>

      <h2 className="text-2xl font-semibold mb-2">The Business Problem</h2>
      <p className="mb-6">
        United receives massive amounts of customer feedback through surveys,
        comments, and internal systems. Executives needed a faster way to see
        sentiment trends, feedback volume, and loyalty metrics across hubs, and
        to identify issues that required immediate attention. They needed one
        place for clear, real-time insight instead of scattered reports and
        manual analysis.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Approach as Metis Consulting</h2>
      <p className="mb-4">
        We treated the engagement like a real consulting project. We met with
        stakeholders to understand the decisions they needed to make, designed
        wireframes around executive workflows, and planned an architecture that
        combined a React-based dashboard, AI insights powered by Anthropic
        Claude, and Power BI integration for deeper reporting.
      </p>
      <p className="mb-6">
        We focused on clarity, speed, and usability: fast filtering, clear KPIs,
        hub comparisons, and AI summaries that surfaced what mattered most.
      </p>

      <h2 className="text-2xl font-semibold mb-2">My Individual Contribution</h2>
      <div className="grid gap-4 mb-6">
        <Card title="Front-End Architecture & UI">
          <ul className="list-disc list-inside space-y-1">
            <li>Helped define the component structure for the executive dashboard.</li>
            <li>Built responsive layouts and KPI sections in React.</li>
            <li>
              Focused on simple, executive-friendly UI that still held depth for
              analysts.
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
              Supported teammates and took ownership of complex pieces of the
              dashboard.
            </li>
          </ul>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Winning the Competition</h2>
      <p className="mb-4">
        Four teams competed to solve United&apos;s challenge. Metis won.
        United told us we were the team that truly understood the problem and
        delivered a functional product that aligned with their needs. Our
        dashboard didn&apos;t just look good; it solved the exact pain points
        they described during discovery.
      </p>
      <p className="mb-6">
        That recognition from a global airline confirmed for me that I can
        deliver at a professional level right now, in both engineering and
        consulting environments.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What I Learned</h2>
      <p className="mb-3 font-medium">Technical growth:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Building scalable React dashboards and architectures.</li>
        <li>Designing interfaces for executive users.</li>
        <li>Integrating AI into real business workflows.</li>
        <li>Managing state, filters, and performance.</li>
      </ul>

      <p className="mb-3 font-medium">Business and leadership growth:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Translating business requirements into technical decisions.</li>
        <li>Presenting complex systems simply.</li>
        <li>Working under real deadlines with real clients.</li>
        <li>Thinking like a consultant, not just a developer.</li>
      </ul>
    </PageWrapper>
  );
}
