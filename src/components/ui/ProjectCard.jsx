import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ featured = false, project }) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.35)] backdrop-blur-sm ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`grid h-full ${featured ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
        <div className="overflow-hidden bg-slate-950">
          <ProjectVisual compact={!featured} project={project} />
        </div>

        <div className="flex h-full flex-col p-6 sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {project.eyebrow}
            </p>
            {project.status ? (
              <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                {project.status}
              </span>
            ) : null}
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            {project.shortTitle ?? project.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-[0.95rem]">
            {project.summary}
          </p>

          {project.secondary ? (
            <p className="mt-4 text-sm font-medium leading-6 text-slate-800">
              {project.secondary}
            </p>
          ) : null}

          <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-600">
            {project.highlights.slice(0, featured ? 4 : 3).map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveHref ? (
              <Button
                href={project.liveHref}
                variant="primary"
                className="px-4 py-2.5"
              >
                Live App
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            ) : null}
            {project.githubHref ? (
              <Button
                href={project.githubHref}
                variant="secondary"
                className="px-4 py-2.5"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            ) : null}
          </div>

          <Link
            to={`/work/${project.slug}`}
            className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-slate-950 transition group-hover:text-teal-700"
          >
            View case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
