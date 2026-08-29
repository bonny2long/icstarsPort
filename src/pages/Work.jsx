import { ArrowRight, ArrowUpRight } from "lucide-react";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import SectionIntro from "../components/ui/SectionIntro";
import ProjectMedia from "../components/ui/project-media/ProjectMedia";
import { projects } from "../data/projects";

const flagshipOrder = [
  "time-ledger",
  "nas-media-platform",
  "united-airlines-customer-insights",
  "syncup",
];

const moreWorkOrder = ["resume-agent", "chefbonbon"];

const getOrderedProjects = (slugs) =>
  slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

const flagshipProjects = getOrderedProjects(flagshipOrder);
const moreWork = getOrderedProjects(moreWorkOrder);

function FlagshipProject({ index, project }) {
  const mediaOnRight = index % 2 === 1;

  return (
    <article
      id={project.slug}
      className="scroll-mt-32 border-t border-slate-300 py-12 first:pt-0"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-[0.22em] text-teal-700">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-right text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {project.eyebrow}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className={mediaOnRight ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
          <ProjectMedia project={project} variant="index" />
        </div>

        <div className={mediaOnRight ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {project.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            {project.summary}
          </p>
          <p className="mt-6 border-l-2 border-teal-500 pl-4 text-sm font-semibold leading-6 text-slate-900">
            {project.workMeta}
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            {project.highlights[0]}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button to={"/work/" + project.slug}>
              View case study
              <ArrowRight className="h-4 w-4" />
            </Button>
            {project.liveHref ? (
              <a
                href={project.liveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-700"
              >
                Live product
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }) {
  return (
    <article className="grid gap-4 border-t border-slate-300 py-6 last:border-b sm:grid-cols-[minmax(150px,0.4fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {project.eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
          {project.title}
        </h3>
      </div>
      <p className="text-sm leading-6 text-slate-600">{project.summary}</p>
      <Button
        to={"/work/" + project.slug}
        variant="secondary"
        className="justify-self-start px-4 py-2.5 sm:justify-self-end"
      >
        Case study
        <ArrowRight className="h-4 w-4" />
      </Button>
    </article>
  );
}

export default function Work() {
  return (
    <>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.48fr)] lg:items-end">
          <SectionIntro
            eyebrow="Work"
            title="Products and systems built around real operations."
            titleAs="h1"
            titleClassName="!text-4xl sm:!text-5xl lg:!text-6xl"
            subtitle="Four flagship case studies show how I approach architecture, workflows, product decisions, and evidence. Smaller builds follow with intentionally lighter visual weight."
          />
          <p className="border-l border-slate-300 pl-5 text-sm leading-6 text-slate-600">
            From a live multi-tenant SaaS product to private media
            infrastructure, client analytics, and a role-aware community
            platform.
          </p>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro
            eyebrow="Flagship work"
            title="The clearest evidence of how I build."
            subtitle="Each project has a distinct visual role because each system solves a different kind of problem."
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            04 case studies
          </p>
        </div>

        <div>
          {flagshipProjects.map((project, index) => (
            <FlagshipProject
              key={project.slug}
              index={index}
              project={project}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.45fr)_minmax(0,1.55fr)]">
          <SectionIntro
            eyebrow="More work"
            title="Focused builds and product experiments."
            subtitle="Smaller projects that demonstrate applied AI and iterative product learning without competing with the flagship work."
          />
          <div>
            {moreWork.map((project) => (
              <CompactProject key={project.slug} project={project} />
            ))}
          </div>
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
            to="/about#contact"
            className="!border-white !bg-white !text-slate-950 hover:!bg-stone-100"
          >
            Start a conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
