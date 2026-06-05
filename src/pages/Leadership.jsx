import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionIntro from "../components/ui/SectionIntro";
import {
  leadershipImages,
  leadershipPillars,
} from "../data/portfolioContent";

const performanceLessons = [
  "Reset quickly after mistakes instead of spiraling.",
  "Keep momentum by stacking small wins when the pressure rises.",
  "Ask for help early instead of hiding confusion.",
  "Stay useful under pressure, even when the plan changes.",
];

const listeningLessons = [
  "Leadership starts with listening before reacting.",
  "Community is built through trust, not just coordination.",
  "Presence matters when speaking with mentors, clients, and teammates.",
];

export default function Leadership() {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] lg:items-end">
          <SectionIntro
            eyebrow="Leadership"
            title="The goal is not just to write code well. It is to become someone teams can rely on."
            subtitle="My leadership growth shows up in how I communicate, how I listen, how I handle pressure, and how I keep moving when the work gets hard."
          />

          <Card eyebrow="Employer-facing" title="What teams can expect from me">
            <p>
              Clear communication, steady follow-through, fast learning, and a
              willingness to take ownership without losing sight of the people using
              the system or the people building it together.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {leadershipPillars.map((pillar) => (
            <Card key={pillar.title} title={pillar.title}>
              <p>{pillar.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,420px)] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Resilience under pressure"
              title="Geek Week changed how I perform when the work gets intense."
              subtitle="It was one of the clearest moments in my growth: a week that exposed gaps in confidence early, then forced me to adapt, reset, and finish strong."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {performanceLessons.map((lesson) => (
                <Card key={lesson}>
                  <p>{lesson}</p>
                </Card>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              The technical part mattered, but the bigger lesson was performance:
              how to stay steady, keep learning, and keep moving even when the week
              stops going the way I expected.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_-55px_rgba(15,23,42,0.35)]">
            <img
              src={leadershipImages.geekWeek}
              alt="Geek Week challenge board"
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-950">
              <img
                src={leadershipImages.teamWeek}
                alt="Team week activities"
                className="h-72 w-full object-cover"
              />
            </div>
            <Card eyebrow="Listening" title="Leadership starts with understanding people first">
              <p>
                Team-centered work taught me that strong collaboration starts with
                listening well, paying attention to context, and building trust before
                trying to drive outcomes.
              </p>
              <ul className="mt-4 space-y-2">
                {listeningLessons.map((lesson) => (
                  <li key={lesson} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-950">
              <img
                src={leadershipImages.teaHost}
                alt="High Tea leadership event"
                className="h-72 w-full object-cover object-[50%_30%]"
              />
            </div>
            <Card eyebrow="Presence" title="Client and mentor conversations sharpened my delivery">
              <p>
                High-pressure conversations with mentors, leaders, and stakeholders
                pushed me to ask better questions, speak more clearly, and carry more
                confidence in technical and professional settings.
              </p>
              <p className="mt-4">
                That growth matters because being useful on a team is not only about
                writing the code. It is also about helping people understand the
                problem, the constraints, and the path forward.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <SectionIntro
              eyebrow="Long-term"
              title="I am growing toward the kind of engineer who can solve problems, support people, and keep teams steady."
              subtitle="That means continuing to build technical depth while becoming more reliable in communication, delivery, and collaboration."
            />
          </div>

          <Button to="/contact">Connect with me</Button>
        </div>
      </Section>
    </>
  );
}
