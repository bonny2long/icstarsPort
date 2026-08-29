import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  MapPin,
} from "lucide-react";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PretextHeading from "../components/ui/PretextHeading";
import ProjectCard from "../components/ui/ProjectCard";
import SectionIntro from "../components/ui/SectionIntro";
import { leadershipImages } from "../data/leadership";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { engineeringProfile } from "../data/skills";

const profileIcons = {
  "Software Engineering": <Code2 className="h-5 w-5 text-teal-200" />,
  "Data & Analytics": <BarChart3 className="h-5 w-5 text-teal-200" />,
  "AI-Enabled Systems": <BrainCircuit className="h-5 w-5 text-teal-200" />,
  "Systems Engineering": <Database className="h-5 w-5 text-teal-200" />,
};

const proofPoints = [
  ["Shipped", "Live SaaS product"],
  ["Delivered", "United Airlines client/RFP work"],
  ["Current", "Aon Data & Analytics apprenticeship"],
  ["Proven locally", "Four-application NAS platform"],
];

const selectedSlugs = [
  "time-ledger",
  "nas-media-platform",
  "united-airlines-dashboard",
];

const selectedWork = selectedSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

const secondaryProject = projects.find(
  (project) => project.slug === "syncup",
);

export default function Home() {
  return (
    <>
      <Section className="pt-4 sm:pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
          <div className="max-w-[46rem]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              <span>{profile.shortHeadline}</span>
              <span className="hidden h-px w-10 bg-slate-300 sm:block" />
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal text-slate-600">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            </div>

            <h1 className="mt-7 break-words text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5rem]">
              <span className="block">Bonny</span>
              {" "}
              <span className="block">Makaniankhondo</span>
            </h1>

            <PretextHeading
              as="p"
              className="mt-7 text-slate-950"
              lineClassName="font-display text-stone-700"
              sizes={[
                {
                  minWidth: 0,
                  fontFamily: '"Instrument Serif"',
                  fontSize: 34,
                  fontStyle: "italic",
                  fontWeight: 400,
                  idealLines: 3,
                  letterSpacing: "-0.03em",
                  lineHeight: 38,
                },
                {
                  minWidth: 640,
                  fontFamily: '"Instrument Serif"',
                  fontSize: 48,
                  fontStyle: "italic",
                  fontWeight: 400,
                  idealLines: 2,
                  letterSpacing: "-0.035em",
                  lineHeight: 50,
                },
              ]}
              text={profile.headline}
            />

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-800 sm:text-2xl">
              {profile.shortBio}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Currently a {profile.currentRole} within {profile.currentCompany}'s{" "}
              {profile.currentPractice} practice in Chicago, combining enterprise
              analytics development with a full-stack engineering background.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/work" className="w-full justify-center sm:w-auto">
                View Work
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                to="/experience"
                variant="secondary"
                className="w-full justify-center sm:w-auto"
              >
                Experience
              </Button>
              <Button
                to="/contact"
                variant="ghost"
                className="w-full justify-center sm:w-auto"
              >
                Contact
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.15),transparent_38%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.95)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
                Current profile
              </p>
              <p className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white">
                Software engineering depth with a growing enterprise data and
                analytics focus.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {engineeringProfile.map(({ body, title }) => (
                  <div
                    key={title}
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4"
                  >
                    {profileIcons[title]}
                    <p className="mt-4 text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/75 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map(([label, value], index) => (
            <div
              key={value}
              className={`px-5 py-5 ${
                index ? "border-t border-slate-200/80 sm:border-l sm:border-t-0" : ""
              } ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal-700">
                {label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">
                {value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Selected Work"
            title="Systems that have to work beyond the demo."
            subtitle="My strongest projects combine technical architecture with real workflow problems, clear ownership, and evidence that the system works."
          />
          <Button to="/work" variant="secondary" className="self-start lg:self-auto">
            View all work
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {selectedWork.map((project, index) => (
            <ProjectCard
              key={project.slug}
              featured={index === 0}
              project={project}
            />
          ))}
        </div>

        {secondaryProject ? (
          <Card
            className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            eyebrow="Also building"
            title={secondaryProject.title}
          >
            <div className="max-w-3xl">
              <p>{secondaryProject.summary}</p>
            </div>
            <Button
              to={`/work/${secondaryProject.slug}`}
              variant="secondary"
              className="shrink-0"
            >
              Read case study
            </Button>
          </Card>
        ) : null}
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Current Chapter"
              title="Building at the intersection of software and data."
              subtitle="In 2026 I joined Aon's Construction & Infrastructure practice as a Data & Analytics Apprentice. The role adds enterprise analytics, reporting, and data-platform development to the full-stack and AI systems work I built through i.c.stars and independent products."
            />
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              Employer-supported coursework at Harold Washington College adds a
              structured academic track alongside on-the-job learning. I describe
              this chapter as development and training—real outcomes will be added
              only as they are documented.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/experience">View experience</Button>
              <Button to="/about" variant="secondary">
                How I work
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.75)]">
            <img
              src={leadershipImages.unitedTeam}
              alt="Bonny and his team after the United Airlines client project"
              className="h-80 w-full object-cover sm:h-96"
              loading="lazy"
            />
            <div className="border-t border-white/10 p-6 text-white sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
                Systems first
              </p>
              <p className="mt-3 text-lg font-semibold">
                Problem definition, data flow, ownership, reliability—then the
                interface.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="accent">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionIntro
            eyebrow="About"
            eyebrowClassName="text-teal-200"
            title="Industrial discipline, client-facing growth, and a software builder's mindset."
            titleClassName="text-white"
            subtitle="My electrical, industrial, and construction background shaped how I think about safety, diagnostics, planning, documentation, and reliability under real constraints."
            subtitleClassName="text-slate-300"
          />
          <Button
            to="/about"
            className="!border-white !bg-white !text-slate-950 hover:!bg-stone-100"
          >
            Read my approach
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
