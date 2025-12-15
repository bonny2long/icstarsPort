import SectionHeader from "../components/ui/SectionHeader.jsx";
import Card from "../components/ui/Card.jsx";
import Section from "../components/layout/Section";

export default function Wellness() {
  return (
    <>
      {/* PAGE INTRO */}
      <Section bg="default">
        <SectionHeader
          title="Wellness Journey"
          subtitle="Building the foundation that supports my growth in tech and leadership."
        />
      </Section>

      {/* WELLNESS CARDS */}
      <Section bg="subtle">
        <div className="grid gap-8 md:grid-cols-2">
          <Card title="Financial Wellness">
            <p className="mb-3">
              During i.c.stars, I learned that financial stability is part of
              being able to take risks and pursue big goals. I started treating
              money as a tool that supports my future instead of something that
              just reacts to the moment.
            </p>

            <p className="mb-2 font-medium">Short-term goals (6–12 months):</p>
            <ul className="list-disc list-inside mb-3 space-y-1">
              <li>Build a 3–6 month emergency fund.</li>
              <li>Create a consistent budgeting routine.</li>
              <li>Track monthly expenses and reduce wasteful spending.</li>
              <li>Save toward learning resources and tools.</li>
            </ul>

            <p className="mb-2 font-medium">Long-term goals (1–5 years):</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Pay down debt strategically.</li>
              <li>Build investment habits and retirement savings.</li>
              <li>Grow a financial cushion that allows career flexibility.</li>
              <li>Invest in meaningful projects and communities.</li>
            </ul>
          </Card>

          <Card title="Emotional Wellness">
            <p className="mb-3">
              One of the biggest shifts at i.c.stars was realizing how powerful
              my inner voice is. I created a daily alignment practice that starts
              my mornings with gratitude, intention, and belief in my ability to
              solve hard problems.
            </p>

            <p className="mb-2 font-medium">Themes in my self-talk:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>I choose to start my day with purpose.</li>
              <li>I am capable of finding solutions to hard problems.</li>
              <li>Challenges grow me into the man I am becoming.</li>
              <li>I trust my journey and the timing of my life.</li>
              <li>My discipline is my advantage.</li>
            </ul>

            <p className="mt-3">
              These affirmations help me move from doubt to action, from fear to
              courage, and from perfectionism to progress.
            </p>
          </Card>

          <Card title="Mental Wellness">
            <p className="mb-3">
              The intensity of the program taught me to pay attention to my
              mental energy. Between coding, deadlines, and presentations, I had
              to learn how to reset, refocus, and protect my momentum.
            </p>

            <p className="mb-2 font-medium">Strategies that help me stay steady:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Short breaks to reset focus.</li>
              <li>Journaling when I feel overwhelmed.</li>
              <li>Breaking work into smaller, manageable steps.</li>
              <li>Asking for help instead of overthinking in isolation.</li>
              <li>Keeping a consistent sleep routine.</li>
            </ul>

            <p className="mt-3">
              These aren&apos;t just coping tools — they are performance tools
              that help me show up as a better developer and teammate.
            </p>
          </Card>

          <Card title="Physical Wellness">
            <p className="mb-3">
              My day starts at 5:30 AM with movement. I train, then journal, then
              get ready for work. That routine anchors my discipline and sets the
              tone for how I show up in everything else.
            </p>

            <p className="mb-2 font-medium">What this routine gives me:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Focus before I even open my laptop.</li>
              <li>Stress relief during intense weeks.</li>
              <li>Confidence that carries into my work.</li>
              <li>Energy supported by sleep tracking and structure.</li>
            </ul>

            <p className="mt-3">
              Physical, emotional, mental, and financial wellness all connect
              back to how I work. They give me the stability, energy, and
              resilience to grow in tech and leadership long term.
            </p>
          </Card>
        </div>
      </Section>

      {/* WELLNESS IN PRACTICE */}
      <Section bg="default">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-slate-900 mb-4 text-center">
            Wellness in Practice
          </h2>

          <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-8">
            These aren’t concepts they’re daily practices I use to stay grounded,
            focused, and consistent.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="w-full h-56 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 text-sm mb-3">
                Journal reflection screenshot
              </div>
              <p className="text-sm text-zinc-600">
                Daily journaling to reset my mindset, process pressure, and reinforce
                disciplined self-talk.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="w-full h-56 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 text-sm mb-3">
                Habit / routine tracker screenshot
              </div>
              <p className="text-sm text-zinc-600">
                Simple habit tracking to protect energy, sleep, and consistency during
                high-intensity weeks.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
