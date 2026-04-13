import {
  ArrowRight,
  Cpu,
  Database,
  Download,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PretextHeading from "../components/ui/PretextHeading";
import ProjectCard from "../components/ui/ProjectCard";
import SectionIntro from "../components/ui/SectionIntro";
import resumePdf from "../data/Bonny_Makaniankhondo_Resume_FSD.pdf";
import {
  aboutSignals,
  buildPrinciples,
  leadershipImages,
  leadershipPillars,
  portfolioProjects,
} from "../data/portfolioContent";

const heroCards = [
  {
    icon: <Database className="h-5 w-5 text-teal-300" />,
    title: "Backend-first thinking",
    body: "I start with data flow, system shape, and API responsibility before I move into interface polish.",
  },
  {
    icon: <Workflow className="h-5 w-5 text-teal-300" />,
    title: "Workflow ownership",
    body: "I like turning messy manual processes into systems that are clear, repeatable, and useful.",
  },
  {
    icon: <Cpu className="h-5 w-5 text-teal-300" />,
    title: "AI workflow experience",
    body: "I use AI where it improves alignment, speed, and signal instead of treating it like a gimmick.",
  },
  {
    icon: <MessageSquareText className="h-5 w-5 text-teal-300" />,
    title: "Client-facing delivery",
    body: "I work toward being the kind of engineer who can build clearly, explain tradeoffs, and handle feedback well.",
  },
];

export default function Home() {
  return (
    <>
      <Section className="pt-4 sm:pt-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)] lg:items-center">
          <div className="max-w-[42rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Systems-minded full stack engineer
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-slate-950 sm:text-5xl md:text-6xl lg:text-8xl">
              Bonny Makaniankhondo
            </h1>

            <PretextHeading
              as="p"
              className="mt-6 text-slate-950"
              lineClassName="font-display text-stone-700"
              sizes={[
                {
                  minWidth: 0,
                  fontFamily: '"Instrument Serif"',
                  fontSize: 34,
                  fontStyle: "italic",
                  fontWeight: 400,
                  idealLines: 2,
                  letterSpacing: "-0.03em",
                  lineHeight: 38,
                },
                {
                  minWidth: 640,
                  fontFamily: '"Instrument Serif"',
                  fontSize: 46,
                  fontStyle: "italic",
                  fontWeight: 400,
                  idealLines: 2,
                  letterSpacing: "-0.035em",
                  lineHeight: 48,
                },
                {
                  minWidth: 960,
                  fontFamily: '"Instrument Serif"',
                  fontSize: 56,
                  fontStyle: "italic",
                  fontWeight: 400,
                  idealLines: 2,
                  letterSpacing: "-0.04em",
                  lineHeight: 56,
                },
              ]}
              text="Full Stack Software Engineer"
            />

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-800 sm:text-2xl">
              I build products from the backend out, connecting data, APIs, and
              UI into systems that are clear, scalable, and useful.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Focused on structure, performance, and real-world workflows.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Looking for strong teams where I can keep shipping, keep learning,
              and keep raising my technical bar.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/projects" className="w-full justify-center sm:w-auto">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                className="w-full justify-center sm:w-auto"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.18),transparent_36%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.9)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200/80">
                What I bring
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Builder mindset, strong systems instincts, and fast growth.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroCards.map(({ body, icon, title }) => (
                  <div
                    key={title}
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4"
                  >
                    {icon}
                    <p className="mt-4 text-sm font-semibold text-white">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Target roles
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Full Stack Software Engineer, backend and API-focused roles,
                  and solutions or consulting-oriented engineering work.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="selected-work" tone="subtle">
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] lg:items-start">
          <SectionIntro
            eyebrow="Selected Work"
            title="Projects that show how I think in systems."
            subtitle="The strongest proof of my work is taking an unclear problem, defining the structure, and shipping something people can actually use."
            experimental
            titleSizes={[
              {
                minWidth: 0,
                fontFamily: '"Manrope"',
                fontSize: 34,
                fontWeight: 800,
                idealLines: 2,
                letterSpacing: "-0.05em",
                lineHeight: 36,
              },
              {
                minWidth: 640,
                fontFamily: '"Manrope"',
                fontSize: 42,
                fontWeight: 800,
                idealLines: 2,
                letterSpacing: "-0.055em",
                lineHeight: 44,
              },
            ]}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                featured={index === 0}
                project={project}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section id="about">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionIntro
            eyebrow="About"
            title="I'm a systems-minded full stack engineer who starts with structure."
            subtitle="I focus on backend shape, data flow, and architecture before moving into the UI, so the product stays clear, maintainable, and useful."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutSignals.map((signal) => (
              <Card key={signal.title} title={signal.title}>
                <p>{signal.body}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          My background and experiences have shaped how I think about systems:
          design with intention, build for reliability, and always keep the user
          in mind.
        </div>
      </Section>

      <Section id="how-i-build" tone="subtle">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,330px)_minmax(0,1fr)]">
          <SectionIntro
            eyebrow="How I Build"
            title="I start with the system, not the interface."
            subtitle="Every project starts with the problem, the data flow, and the backend responsibilities before I refine the interface."
            experimental
            titleSizes={[
              {
                minWidth: 0,
                fontFamily: '"Manrope"',
                fontSize: 36,
                fontWeight: 800,
                idealLines: 3,
                letterSpacing: "-0.05em",
                lineHeight: 38,
              },
              {
                minWidth: 640,
                fontFamily: '"Manrope"',
                fontSize: 48,
                fontWeight: 800,
                idealLines: 3,
                letterSpacing: "-0.055em",
                lineHeight: 48,
              },
            ]}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {buildPrinciples.map((principle) => (
              <Card key={principle.title} title={principle.title}>
                <p>{principle.body}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white/70 px-6 py-5 text-base leading-7 text-slate-800 sm:text-lg">
          I care about clarity over complexity, performance and efficiency,
          maintainable systems that scale, and building things people actually
          use. If the system doesn't solve a real problem, it doesn't matter how
          polished it looks.
        </div>
      </Section>

      <Section id="beyond-code">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Beyond Code"
              title="My growth as an engineer is tied to how I show up, not just what I build."
              subtitle="Through client work, team environments, and high-pressure challenges, I've learned how to communicate clearly, stay steady under pressure, adapt quickly, and support the people around me."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {leadershipPillars.map((pillar) => (
                <Card key={pillar.title} title={pillar.title}>
                  <p>{pillar.body}</p>
                </Card>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-base leading-7 text-slate-800 sm:text-lg">
              I don't just want to write code. I want to build systems and be
              someone teams can rely on.
            </p>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-950">
              <img
                src={leadershipImages.unitedTeam}
                alt="Bonny and team celebrating after the United Airlines project"
                className="h-80 w-full object-cover"
              />
            </div>

            <Card
              eyebrow="Discipline"
              title="Consistency is part of the engineering story"
            >
              <p>
                I keep a performance mindset outside the code too. Routine,
                discipline, and staying steady under pressure matter because
                they affect how I show up for delivery, learning, and the people
                around me.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section tone="accent">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionIntro
            eyebrow="Let's Build Something"
            eyebrowClassName="text-teal-200"
            title="If you're looking for someone who learns fast, thinks in systems, and takes ownership, I'd love to connect."
            titleClassName="text-white"
            subtitle="I'm looking for strong teams, meaningful product work, and environments that value clarity, performance, and growth."
            subtitleClassName="text-slate-300"
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              to="/contact"
              variant="secondary"
              className="w-full justify-center !border-white/45 !bg-white/12 !text-white shadow-lg shadow-black/20 hover:!bg-white/20 hover:!text-white sm:w-auto"
            >
              Contact Me
            </Button>
            <Button
              href={resumePdf}
              download
              className="w-full justify-center !border-white !bg-white !text-slate-950 shadow-lg shadow-black/20 hover:!bg-stone-100 hover:!text-slate-950 sm:w-auto"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
