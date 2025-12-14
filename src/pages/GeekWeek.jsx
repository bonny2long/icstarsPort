import SectionHeader from "../components/ui/SectionHeader.jsx";
import Section from "../components/layout/Section";

export default function GeekWeek() {
  return (
    <>
      {/* INTRO */}
      <Section bg="default">
        <SectionHeader
          title="Geek Week"
          subtitle="Fifteen tasks, a lot of pressure, and a turning point in how I perform."
        />

        <p className="mb-4 text-zinc-700">
          Geek Week was one of the most intense parts of i.c.stars. We had fifteen
          technical tasks — SQL, Excel, hotkeys, data analysis, and more — all
          under strict time and performance expectations. Everything was tracked.
        </p>

        <p className="mb-4 text-zinc-700">
          Day one went well. I finished two tasks and felt confident. I expected
          to cruise with three or four tasks a day. Then days two and three hit.
        </p>
      </Section>

      {/* STRUGGLE */}
      <Section bg="muted">
        <p className="mb-4 text-zinc-700">
          On day two, I made mistakes early, got in my head, and finished with
          nothing completed. Day three, I only completed one task. By Thursday I
          had finished five out of fifteen and felt like everyone else was moving
          forward while I was stuck.
        </p>
        <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm mb-8">
    Geek Week progress / sticker photo
  </div>

        <p className="text-zinc-700">
          The pressure wasn’t just technical — it was mental. I started measuring
          myself against others instead of focusing on my own progress.
        </p>
      </Section>

      {/* BREAKTHROUGH */}
      <Section bg="subtle">
        <p className="mb-4 text-zinc-700">
          On Friday, something shifted. I decided to stop fearing failure and
          just show up with everything I had. I signed up for every open testing
          slot, moved quickly, and grouped tasks together.
        </p>

        <p className="mb-4 text-zinc-700">
          Momentum built with each small win. By the end of the day, I was close,
          but not done — so I came back on Saturday.
        </p>

        <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm mb-8">
    Geek Week progress / sticker photo
  </div>

        <p className="text-zinc-700 font-medium">
          I completed task fifteen that Saturday and earned the Geek Week
          sticker. It wasn&apos;t just a reward; it proved that when I stop
          letting fear control me, I can build anything, including myself.
        </p>
      </Section>

      {/* GROWTH */}
      <Section bg="default">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          What I Gained From Geek Week
        </h2>

        <p className="mb-3 font-medium text-slate-900">
          Technical growth:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 text-zinc-700">
          <li>Stronger SQL fundamentals.</li>
          <li>Faster, more accurate Excel work and hotkeys.</li>
          <li>Better debugging under time pressure.</li>
          <li>More disciplined use of GitHub and version control.</li>
        </ul>

        <p className="mb-3 font-medium text-slate-900">
          Mindset and performance growth:
        </p>

        <ul className="list-disc list-inside space-y-1 text-zinc-700">
          <li>How fear can quietly slow performance.</li>
          <li>The power of momentum from small wins.</li>
          <li>How to reset after mistakes instead of spiraling.</li>
          <li>How to ask for help instead of hiding confusion.</li>
          <li>How to keep going even when I feel behind.</li>
        </ul>

        <p className="mt-6 text-zinc-700">
          Geek Week didn&apos;t just train my technical skills. It trained my
          discipline, resilience, and belief in my ability to push through
          difficult weeks. Those lessons now show up in how I handle deadlines,
          debugging, and new challenges in my projects.
        </p>
      </Section>
    </>
  );
}
