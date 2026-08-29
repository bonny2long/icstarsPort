import { CheckCircle2, ShieldCheck } from "lucide-react";
import Card from "./Card";
import ProofStat from "./ProofStat";
import SystemDiagram from "./SystemDiagram";

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
            {project.summary}
          </p>
        </div>

        <Card eyebrow="Current status" title="Software proven locally">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
            <p>{project.secondary}</p>
          </div>
        </Card>
      </header>

      <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <Card eyebrow="Problem" title="An archive needs more than storage.">
          <p>{project.problem}</p>
        </Card>
        <Card eyebrow="Safety model" title="Automation with explicit authority">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
            <p>
              Human approval guards final moves. Only Cleaner may eventually gain
              deletion authority, and destructive deletion is currently disabled.
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
              eyebrow={`Service ${String(index + 1).padStart(2, "0")} · ${service.responsibility}`}
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
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {project.decisions.map((decision) => (
            <div
              key={decision}
              className="rounded-[1.25rem] border border-slate-200 bg-white/75 p-5 text-sm leading-6 text-slate-600"
            >
              {decision}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] border border-slate-200/80 bg-stone-100/80 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Verified proof
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Acceptance evidence, not deployment theater.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.proof.map((stat) => (
            <ProofStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.75rem] bg-slate-950 p-7 text-white sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
          Why it matters
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
          {project.interesting}
        </p>
        <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
          Local software platform proven. Physical TrueNAS deployment is intentionally deferred.
        </p>
      </section>

      {/* TODO: Add real product screenshots after public-safe assets are available. */}
    </article>
  );
}

