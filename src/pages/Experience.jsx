import { createElement } from "react";
import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionIntro from "../components/ui/SectionIntro";
import { education, professionalDevelopment } from "../data/education";
import { experience, priorExperience } from "../data/experience";

function ExperienceEntry({ entry, headingAs = "h2", index }) {
  return (
    <article className="relative grid gap-5 pb-12 last:pb-0 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
      <div className="md:text-right">
        <p className="text-sm font-semibold text-slate-950">{entry.dates}</p>
        <p className="mt-1 text-xs text-slate-500">{entry.location}</p>
      </div>

      <div className="relative border-l border-slate-300 pl-7 sm:pl-9">
        <span className="absolute -left-[0.43rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-stone-50 bg-teal-600 ring-4 ring-teal-100" />
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          {entry.current ? (
            <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-teal-800">
              Current
            </span>
          ) : null}
        </div>
        {createElement(
          headingAs,
          {
            className:
              "mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl",
          },
          entry.role,
        )}
        <p className="mt-2 text-base font-semibold text-teal-800">
          {entry.company}
          {entry.practice ? ` · ${entry.practice}` : ""}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {entry.summary}
        </p>
        {entry.bullets?.length ? (
          <ul className="mt-5 max-w-3xl space-y-3 text-sm leading-6 text-slate-600 sm:text-base">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function EducationCard({ entry, label }) {
  return (
    <Card
      className="h-full"
      eyebrow={label ?? entry.dates}
      title={entry.institution}
    >
      <p className="font-semibold text-slate-900">{entry.program}</p>
      {entry.location ? (
        <p className="mt-1 text-sm text-slate-500">{entry.location}</p>
      ) : null}
      <p className="mt-4">{entry.details}</p>
    </Card>
  );
}

export default function Experience() {
  return (
    <>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end">
          <SectionIntro
            eyebrow="Experience"
            title="Building range across software, data, analytics, and real-world systems."
            titleAs="h1"
            titleClassName="!text-4xl sm:!text-5xl"
            subtitle="My current work adds enterprise analytics development to a background in full-stack engineering, client delivery, electrical systems, and industrial operations."
          />
          <Card eyebrow="Current chapter" title="Aon · Chicago">
            <p>
              Data & Analytics apprenticeship within Construction & Infrastructure,
              paired with Harold Washington College coursework.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="mb-10 flex items-center gap-3">
          <BriefcaseBusiness className="h-5 w-5 text-teal-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Professional experience
          </p>
        </div>
        <div className="max-w-5xl">
          {experience.map((entry, index) => (
            <ExperienceEntry key={`${entry.company}-${entry.role}`} entry={entry} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)]">
          <div>
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-teal-700" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Technical foundation
              </p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
              Reliability learned under real constraints.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {priorExperience.map((entry, index) => (
              <ExperienceEntry
                key={entry.company}
                entry={entry}
                headingAs="h3"
                index={index + experience.length}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-teal-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Education & development
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Structured learning alongside the work.
        </h2>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {education.map((entry) => (
            <EducationCard key={entry.institution} entry={entry} />
          ))}
          {professionalDevelopment.map((entry) => (
            <EducationCard
              key={entry.institution}
              entry={entry}
              label="Professional development"
            />
          ))}
        </div>
      </Section>

      <Section tone="accent">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionIntro
            eyebrow="The through line"
            eyebrowClassName="text-teal-200"
            title="Safety, diagnostics, communication, and systems thinking carry forward."
            titleClassName="text-white"
            subtitle="The tools changed. The habits—understand the system, document the work, protect what matters, and communicate clearly—did not."
            subtitleClassName="text-slate-300"
          />
          <Button
            to="/about"
            className="!border-white !bg-white !text-slate-950 hover:!bg-stone-100"
          >
            Read how I work
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
