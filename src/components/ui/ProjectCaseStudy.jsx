import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import ProjectMedia from "./project-media/ProjectMedia";
import ProjectMediaGallery from "./project-media/ProjectMediaGallery";

function DetailBlock({ items, text, title }) {
  return (
    <section className="border-t border-slate-300 pt-5">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
      ) : null}
      {items?.length ? (
        <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default function ProjectCaseStudy({ project }) {
  const links = [
    project.liveHref
      ? { label: "Live app", href: project.liveHref, primary: true }
      : null,
    project.githubHref
      ? {
          label: "GitHub",
          href: project.githubHref,
          primary: !project.liveHref,
        }
      : null,
  ].filter(Boolean);

  return (
    <article id={project.slug} className="scroll-mt-32">
      <header className="grid gap-9 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {project.eyebrow}
            </p>
            {project.status ? (
              <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                {project.status}
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            {project.summary}
          </p>
          {project.secondary ? (
            <p className="mt-5 border-l-2 border-teal-500 pl-4 text-sm font-medium leading-6 text-slate-800">
              {project.secondary}
            </p>
          ) : null}

          {links.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  variant={link.primary ? "primary" : "secondary"}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          <ProjectMedia project={project} variant="hero" />
        </div>
      </header>

      {project.note ? (
        <p className="mt-8 max-w-4xl border-y border-slate-300 py-5 text-sm leading-6 text-slate-600">
          {project.note}
        </p>
      ) : null}

      <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.45fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            What the product has to make easier.
          </h2>
        </div>
        <p className="text-lg leading-8 text-slate-700">{project.problem}</p>
      </section>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <DetailBlock
          items={project.system}
          text={project.systemText}
          title={project.systemTitle}
        />
        <DetailBlock items={project.owned} title="What I owned" />
      </div>

      <section className="mt-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.45fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Engineering decisions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Choices that shaped the system.
            </h2>
          </div>
          <div className="grid border-t border-slate-300 sm:grid-cols-2">
            {project.decisions.map((decision, index) => (
              <p
                key={decision}
                className={
                  "border-b border-slate-300 p-5 text-sm leading-6 text-slate-600 " +
                  (index % 2 === 0 ? "sm:border-r" : "")
                }
              >
                {decision}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-14">
        <ProjectMediaGallery project={project} />
      </div>

      <section className="mt-14 bg-slate-950 px-6 py-7 text-white sm:px-8 sm:py-9">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
          Why it stands out
        </p>
        <p className="mt-4 max-w-5xl text-base leading-7 text-slate-200 sm:text-lg">
          {project.interesting}
        </p>
      </section>
    </article>
  );
}
