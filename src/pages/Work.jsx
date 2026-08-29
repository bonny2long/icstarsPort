import { ArrowRight, ArrowUpRight } from "lucide-react";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ProjectCard from "../components/ui/ProjectCard";
import SectionIntro from "../components/ui/SectionIntro";
import { projects } from "../data/projects";

const flagshipOrder = [
  "time-ledger",
  "nas-media-platform",
  "united-airlines-dashboard",
  "syncup",
];

const moreWorkOrder = ["resume-agent", "chefbonbon"];

const getOrderedProjects = (slugs) =>
  slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

const flagshipProjects = getOrderedProjects(flagshipOrder);
const moreWork = getOrderedProjects(moreWorkOrder);

export default function Work() {
  return (
    <>
      <Section>
        <SectionIntro
          eyebrow="Work"
          title="Systems, products, and client work."
          titleAs="h1"
          experimental
          subtitle="My strongest projects combine technical architecture with real workflow problems: SaaS operations, client analytics, community platforms, AI-supported tools, and a multi-service personal media platform."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Card eyebrow="01" title="Architecture">
            <p>Clear data flow, ownership, permissions, and maintainable system boundaries.</p>
          </Card>
          <Card eyebrow="02" title="Workflow">
            <p>Real operational problems shaped into useful, understandable product behavior.</p>
          </Card>
          <Card eyebrow="03" title="Proof">
            <p>Live delivery, client outcomes, local acceptance, and documented system evidence.</p>
          </Card>
        </div>
      </Section>

      <Section tone="subtle">
        <SectionIntro
          eyebrow="Flagship Work"
          title="The clearest evidence of how I build."
          subtitle="Each case study goes past the interface into the problem, architecture, ownership, decisions, and proof."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {flagshipProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              featured={index === 0}
              project={project}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="More Work"
          title="Focused builds in applied AI and product iteration."
          subtitle="Smaller case studies that still show useful technical decisions and product learning."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {moreWork.map((project) => (
            <Card
              key={project.slug}
              className="flex h-full flex-col"
              eyebrow={project.eyebrow}
              title={project.title}
            >
              <p>{project.summary}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <Button
                  to={`/work/${project.slug}`}
                  variant="secondary"
                  className="px-4 py-2.5"
                >
                  Case study
                  <ArrowRight className="h-4 w-4" />
                </Button>
                {project.liveHref ? (
                  <Button href={project.liveHref} variant="ghost" className="px-4 py-2.5">
                    Live app
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="accent">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionIntro
            eyebrow="Next"
            eyebrowClassName="text-teal-200"
            title="Good systems make complex work easier to understand and operate."
            titleClassName="text-white"
            subtitle="If that is the kind of engineering your team values, I would like to hear about the work."
            subtitleClassName="text-slate-300"
          />
          <Button
            to="/contact"
            className="!border-white !bg-white !text-slate-950 hover:!bg-stone-100"
          >
            Start a conversation
          </Button>
        </div>
      </Section>
    </>
  );
}

