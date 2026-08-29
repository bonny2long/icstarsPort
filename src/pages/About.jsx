import {
  ArrowRight,
  Compass,
  FileText,
  Github,
  Linkedin,
  Mail,
  Wrench,
} from "lucide-react";
import Section from "../components/layout/Section";
import SectionIntro from "../components/ui/SectionIntro";
import { leadershipImages, leadershipPillars } from "../data/leadership";
import { profile } from "../data/profile";
import { buildPrinciples } from "../data/skills";

const systemsFlow = [
  "Problem",
  "Data flow",
  "Ownership",
  "Reliability",
  "Interface",
];

const careerPath = [
  {
    stage: "Electrical, industrial, and construction",
    contribution:
      "Safety, diagnostics, planning, documentation, and respect for real-world constraints.",
  },
  {
    stage: "i.c.stars and United client work",
    contribution:
      "Software engineering, product delivery, stakeholder communication, and team execution under pressure.",
  },
  {
    stage: "Independent products and systems",
    contribution:
      "End-to-end ownership across full-stack products, applied AI workflows, and multi-service architecture.",
  },
  {
    stage: "Aon Data & Analytics",
    contribution:
      "Enterprise data and analytics development, business context, and a deeper understanding of data-driven operations.",
  },
];

const contactActions = [
  {
    label: "Email",
    value: profile.email,
    href: "mailto:" + profile.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: profile.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Explore the engineering",
    href: profile.links.github,
    icon: Github,
  },
  {
    label: "Resume",
    value: "Download the latest PDF",
    href: profile.resumeHref,
    icon: FileText,
    download: true,
  },
];

export default function About() {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,390px)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              About
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              I build systems that make complexity usable.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              I approach software and data by first understanding the problem,
              how information moves, who owns each decision, where failure can
              occur, and what the user needs to do with confidence.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              That systems-first perspective grew through electrical,
              industrial, construction, client-facing, and full-stack work. It
              keeps the interface connected to the responsibilities underneath
              it instead of treating polish as a substitute for clarity.
            </p>
          </div>

          <figure className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.75)]">
            <img
              src={leadershipImages.headshot}
              alt="Portrait of Bonny Makaniankhondo"
              className="h-[28rem] w-full object-cover object-top"
            />
          </figure>
        </div>
      </Section>

      <Section tone="subtle">
        <SectionIntro
          eyebrow="Systems first"
          title="Understand the system before polishing the surface."
          subtitle="The sequence is deliberate: clarify the work, map responsibility, protect the failure boundaries, and then make the interface feel simple."
        />

        <ol
          aria-label="Bonny's systems-first sequence"
          className="mt-9 grid overflow-hidden border-y border-slate-300/80 sm:grid-cols-5"
        >
          {systemsFlow.map((step, index) => (
            <li
              key={step}
              className="relative border-b border-slate-300/80 px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-semibold text-slate-950">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-x-8 gap-y-7 md:grid-cols-2">
          {buildPrinciples.map((principle) => (
            <article key={principle.title} className="border-t border-slate-300 pt-5">
              <h2 className="text-lg font-semibold text-slate-950">
                {principle.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {principle.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(230px,0.55fr)_minmax(0,1.45fr)]">
          <div>
            <Wrench className="h-6 w-6 text-teal-700" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              The path here
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Range became an engineering advantage.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Each chapter added a different way to understand risk, people,
              products, and the systems that connect them.
            </p>
          </div>

          <ol className="border-t border-slate-300">
            {careerPath.map((entry, index) => (
              <li
                key={entry.stage}
                className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[3rem_minmax(190px,0.7fr)_minmax(0,1.3fr)] sm:gap-6"
              >
                <span className="text-xs font-semibold tracking-[0.18em] text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-slate-950">{entry.stage}</h3>
                <p className="text-sm leading-6 text-slate-600">
                  {entry.contribution}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid gap-10 lg:grid-cols-[minmax(230px,0.55fr)_minmax(0,1.45fr)]">
          <div>
            <Compass className="h-6 w-6 text-teal-700" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              How I work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Clear ownership starts with clear communication.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              I work best where people listen carefully, explain tradeoffs,
              follow through, and make technical work understandable to the
              people relying on it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {leadershipPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="border-t border-slate-300 px-1 py-5"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        tabIndex={-1}
        tone="accent"
        className="scroll-mt-32 focus:outline-none"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
              Contact
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let’s build something useful.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I’m interested in work involving software engineering, data and
              analytics, backend and data systems, AI-enabled workflows, and
              systems-oriented product development.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {profile.targetAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/15">
            {contactActions.map((action) => {
              const Icon = action.icon;

              return (
                <a
                  key={action.label}
                  href={action.href}
                  download={action.download || undefined}
                  target={
                    action.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    action.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 border-b border-white/15 py-5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                >
                  <Icon className="h-5 w-5 shrink-0 text-teal-200" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{action.label}</span>
                    <span className="mt-1 block truncate text-sm text-slate-400">
                      {action.value}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
