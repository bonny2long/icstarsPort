import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Card from "./Card";
import ProofStat from "./ProofStat";
import SystemDiagram from "./SystemDiagram";
import ProjectMedia from "./project-media/ProjectMedia";

export default function NasCaseStudy({ project }) {
  return (
    <article>
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {project.eyebrow}
            </p>
            <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-teal-800">
              {project.status}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            {project.summary} {project.productSummary}
          </p>
        </div>

        <Card eyebrow="Current status" title="Software proven locally">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
            <p>{project.secondary}</p>
          </div>
        </Card>
      </header>

      <section className="mt-16" aria-labelledby="bm-radio-product-heading">
        <div className="grid gap-7 lg:grid-cols-[minmax(240px,0.58fr)_minmax(0,1.42fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-700">
              Product layer
            </p>
            <h2
              id="bm-radio-product-heading"
              className="mt-4 scroll-mt-32 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              BM Radio is what the listener sees.
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            BM Radio turns the final music and audiobook libraries into a
            private listener-facing product with browsing, search, radio,
            playlists, playback history, source preference, and long-form
            audiobook playback.
          </p>
        </div>

        <div className="mt-8">
          <ProjectMedia project={project} variant="hero" />
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          Real product views shown with browser and local-network chrome
          intentionally excluded.
        </p>
      </section>

      <section className="mt-14 border-y border-slate-300 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            BM Radio is the product layer. Three supporting services protect
            and organize the archive underneath it.
          </p>
          <ArrowDown
            aria-hidden="true"
            className="mt-5 h-5 w-5 text-teal-700"
          />
        </div>
      </section>

      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <Card eyebrow="Problem" title="An archive needs more than storage.">
          <p>{project.problem}</p>
        </Card>
        <Card eyebrow="Safety model" title="Automation with explicit authority">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
            <p>
              Human approval guards final moves. Only Cleaner may eventually
              gain deletion authority, and destructive deletion remains
              disabled.
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <SystemDiagram />
      </div>

      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Service responsibilities
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Four applications, four narrow contracts.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {project.services.map((service, index) => (
            <Card
              key={service.name}
              eyebrow={
                "Service " +
                String(index + 1).padStart(2, "0") +
                " · " +
                service.responsibility
              }
              title={service.name}
            >
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(220px,0.6fr)_minmax(0,1.4fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Engineering decisions
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Safety is part of the architecture.
          </h2>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            PostgreSQL supports BM Radio’s listener state; SQLite supports
            Archive Assistant’s local review workflow. The database choices
            follow each service’s responsibility.
          </p>
        </div>
        <div className="grid gap-0 border-t border-slate-300 sm:grid-cols-2">
          {project.decisions.map((decision, index) => (
            <div
              key={decision}
              className={
                "border-b border-slate-300 p-5 text-sm leading-6 text-slate-600 " +
                (index % 2 === 0 ? "sm:border-r" : "")
              }
            >
              {decision}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="source-heading">
        <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.6fr)_minmax(0,1.4fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Source
            </p>
            <h2
              id="source-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-950"
            >
              Engineering repositories
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Each repository corresponds to an independently owned service
              boundary.
            </p>
          </div>

          <div className="border-t border-slate-300">
            {project.repositories.map((repository) => (
              <a
                key={repository.name}
                href={repository.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 border-b border-slate-300 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 sm:grid-cols-[minmax(150px,0.55fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-5"
              >
                <span className="font-semibold text-slate-950">
                  {repository.name}
                </span>
                <span className="text-sm leading-6 text-slate-600">
                  {repository.responsibility}
                </span>
                <ArrowUpRight className="h-4 w-4 text-teal-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 border border-slate-200/80 bg-stone-100/80 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Verified proof
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Acceptance evidence, not deployment theater.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.proof.map((stat) => (
            <ProofStat key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-6 grid border-t border-slate-300 sm:grid-cols-3">
          {project.supportingProof.map((stat, index) => (
            <div
              key={stat.label}
              className={
                "py-5 sm:px-5 " +
                (index ? "border-t border-slate-300 sm:border-l sm:border-t-0" : "")
              }
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {stat.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-950">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-slate-950 p-7 text-white sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
          Status
        </p>
        <h2 className="mt-4 max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Final local software acceptance complete. Physical TrueNAS deployment
          is intentionally deferred.
        </h2>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
          Cleaner destructive actions remain disabled. That constraint, along
          with human-reviewed moves, read-only playback, and retained audit
          evidence, is part of the engineering design.
        </p>
      </section>
    </article>
  );
}
