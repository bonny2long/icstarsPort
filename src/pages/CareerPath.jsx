import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/layout/Section";
import accenturePhoto from "../assets/photos/accenture.jpg";

export default function CareerPath() {
  return (
    <>
      {/* PAGE INTRO */}
      <Section bg="default">
        <SectionHeader
          title="Career Path"
          subtitle="Where I am growing next as a full stack engineer and systems-minded product builder."
        />
      </Section>

      {/* SHORT-TERM GOALS */}
      <Section bg="subtle">
        <Card title="Short-Term Goals: Keep Building Real Systems">
          <p className="mb-3">
            In the near term, I want to deepen my experience as a full stack
            engineer while staying close to AI-powered product work,
            backend/API development, and consulting-style problem solving.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-medium">Full Stack Software Engineer:</span>{" "}
              Building features end to end across React, TypeScript, backend
              APIs, authentication, SQL databases, and deployment workflows.
            </li>
            <li>
              <span className="font-medium">Backend/API-Focused Engineer:</span>{" "}
              Designing APIs, data models, auth flows, and workflow logic that
              make products reliable and maintainable.
            </li>
            <li>
              <span className="font-medium">
                AI-Integrated Product Engineer:
              </span>{" "}
              Building practical AI features like insight generation, semantic
              matching, structured recommendations, and workflow automation.
            </li>
            <li>
              <span className="font-medium">
                Technical Consultant / Solutions Engineer:
              </span>{" "}
              Using communication, systems thinking, and engineering skill to
              solve client and business problems.
            </li>
          </ul>
        </Card>
      </Section>

      {/* LONG-TERM GOALS */}
      <Section bg="default">
        <Card title="Long-Term Goals: Technical Depth, Leadership, and Community Impact">
          <p className="mb-3">
            Long term, I see myself growing into roles that blend technical
            depth, architecture, leadership, and community-centered product
            building.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-medium">
                Senior Software Engineer / Lead Engineer:
              </span>{" "}
              Mentoring others, designing maintainable architectures, and
              leading delivery.
            </li>
            <li>
              <span className="font-medium">
                Systems Designer / Technical Product Builder:
              </span>{" "}
              Creating tools that solve real operational problems for real
              people.
            </li>
            <li>
              <span className="font-medium">Founder / CTO:</span> Building
              community-centered technology that supports small businesses,
              local organizations, and overlooked communities.
            </li>
          </ul>
        </Card>
      </Section>

      {/* INDUSTRY LESSONS */}
      <Section bg="subtle">
        {/* INDUSTRY EXPOSURE IMAGE */}
        <div className="mb-8">
          <img
            src={accenturePhoto}
            alt="Industry workshop with Accenture"
            className="w-full h-48 sm:h-56 rounded-xl object-contain"
          />
        </div>

        <Card title="Lessons From Industry, Mentors, and Client Work">
          <p className="mb-3">
            Workshops, mentors, i.c.stars, client delivery, and my own product
            builds have shaped how I see my career. The biggest lesson is that
            strong engineering is not only about tools. It is about
            understanding the problem, communicating clearly, and building
            systems that can hold up in real use.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Define the problem clearly before writing code.</li>
            <li>Design systems around real users, not assumptions.</li>
            <li>Communicate simply, even when the system is complex.</li>
            <li>Build with maintainability, security, and ownership in mind.</li>
            <li>Keep learning fast while staying grounded in business value.</li>
          </ul>

          <p className="mt-3">
            I left i.c.stars with technical skills, client-facing experience,
            and a clearer sense of the kind of engineer I am becoming: someone
            who can build, explain, adapt, and keep growing.
          </p>
        </Card>
      </Section>
    </>
  );
}
