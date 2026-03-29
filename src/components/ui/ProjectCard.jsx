import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ featured = false, project }) {
  const imageHref = project.liveHref ?? project.githubHref;

  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.35)] backdrop-blur-sm ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`grid h-full ${featured ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
        <div className="overflow-hidden bg-slate-950">
          {imageHref ? (
            <a
              href={imageHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} ${project.liveHref ? "live app" : "GitHub repository"}`}
              className="block"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className={`w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] ${
                  featured ? "h-full min-h-[18rem] lg:min-h-[19rem]" : "h-56"
                }`}
              />
            </a>
          ) : (
            <img
              src={project.image}
              alt={project.imageAlt}
              className={`w-full object-cover object-top ${
                featured ? "h-full min-h-[18rem] lg:min-h-[19rem]" : "h-56"
              }`}
            />
          )}
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

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            {project.liveHref ? (
              <a
                href={project.liveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 transition hover:text-teal-700"
              >
                Live App
              </a>
            ) : null}
            {project.githubHref ? (
              <a
                href={project.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-950 transition hover:text-teal-700"
              >
                GitHub
              </a>
            ) : null}
          </div>

          <Link
            to={`/projects#${project.slug}`}
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
