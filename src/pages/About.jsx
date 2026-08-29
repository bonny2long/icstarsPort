import { ArrowRight, Compass, MessageSquareText, Wrench } from "lucide-react";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionIntro from "../components/ui/SectionIntro";
import { leadershipImages, leadershipPillars } from "../data/leadership";
import { profile } from "../data/profile";
import { aboutSignals, buildPrinciples } from "../data/skills";

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
              I bring a systems-first mindset to software, data, and the way teams work.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              {profile.shortBio}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              My path through electrical, industrial, construction, client-facing,
              and full-stack work gives me a practical way of seeing systems: define
              ownership, understand the flow, protect what matters, and communicate
              the plan clearly.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.75)]">
            <img
              src={leadershipImages.headshot}
              alt="Bonny Makaniankhondo"
              className="h-[28rem] w-full object-cover object-top"
            />
          </div>
        </div>
      </Section>

      <Section tone="subtle">
        <SectionIntro
          eyebrow="Systems first"
          title="Problem, data flow, ownership, reliability—then interface."
          subtitle="I make the work easier to reason about before I make it look polished. That order helps the product stay understandable as it grows."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {buildPrinciples.map((principle) => (
            <Card key={principle.title} title={principle.title}>
              <p>{principle.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <Wrench className="h-6 w-6 text-teal-700" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Career transition as an engineering asset.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Industrial constraints made safety, diagnostics, planning,
              documentation, and reliability concrete long before I wrote software.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {aboutSignals.map((signal) => (
              <Card key={signal.title} title={signal.title}>
                <p>{signal.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="accent">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] lg:items-center">
          <div>
            <MessageSquareText className="h-6 w-6 text-teal-200" />
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Client work sharpened the communication around the code.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              i.c.stars and the United Airlines RFP delivery strengthened how I
              translate stakeholder needs, present technical decisions, listen under
              pressure, and help a team move toward a clear outcome.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {leadershipPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={leadershipImages.unitedTeam}
            alt="Bonny and team after the United Airlines client project"
            className="h-96 w-full rounded-[1.75rem] object-cover"
            loading="lazy"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end">
          <div>
            <Compass className="h-6 w-6 text-teal-700" />
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              The current chapter adds enterprise data and analytics.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Aon's Construction & Infrastructure apprenticeship adds business
              context, enterprise exposure, structured technical development, and
              Harold Washington College coursework to the software and AI systems
              work I was already building.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/experience">
              View experience
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/contact" variant="secondary">Contact</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

