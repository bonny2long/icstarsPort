import PageWrapper from "../components/layout/PageWrapper.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";

export default function CareerPath() {
  return (
    <PageWrapper>
      <SectionHeader
        title="Career Path"
        subtitle="Where I'm heading after i.c.stars and how I plan to grow."
      />

      <Card title="Short-Term Goals (6–24 Months)">
        <p className="mb-3">
          In the near term, I want to deepen my experience as a full stack
          engineer while staying close to AI-powered tools and consulting-style
          work.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">Full Stack Software Developer:</span>{" "}
            Building features end-to-end using React, Node, SQL, and cloud
            services.
          </li>
          <li>
            <span className="font-medium">AI-Integrated Web Engineer:</span>{" "}
            Continuing to build apps like ChefBonBon that combine AI with
            practical workflows.
          </li>
          <li>
            <span className="font-medium">
              Technical Consultant / Solutions Engineer:
            </span>{" "}
            Using my communication skills and engineering background to solve
            client problems.
          </li>
        </ul>
      </Card>

      <Card title="Long-Term Goals (2–10 Years)">
        <p className="mb-3">
          Long term, I see myself moving into roles that blend technical depth,
          leadership, and community impact.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">
              Senior Software Developer / Lead Engineer:
            </span>{" "}
            mentoring others, designing architectures, and leading delivery.
          </li>
          <li>
            <span className="font-medium">
              Technical Product Builder & Systems Designer:
            </span>{" "}
            creating tools that solve real problems for real people.
          </li>
          <li>
            <span className="font-medium">Founder / CTO (Métis):</span> growing
            a company that builds community-first technology for small
            businesses and under-served communities.
          </li>
        </ul>
      </Card>

      <Card title="Lessons From Industry & Mentors">
        <p className="mb-3">
          Workshops with partners like Accenture and Salesforce, plus guidance
          from mentors and Tea Hosts, shaped how I see my career.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Define the problem clearly before writing code.</li>
          <li>Design systems around real users, not assumptions.</li>
          <li>Communicate simply, even when the system is complex.</li>
          <li>Lead with consistency, reliability, and presence.</li>
        </ul>
        <p className="mt-3">
          I leave i.c.stars with not just technical skills, but a clearer sense
          of who I am as a developer and the kind of leader I&apos;m becoming.
        </p>
      </Card>
    </PageWrapper>
  );
}
