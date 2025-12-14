import PageWrapper from "../components/layout/PageWrapper.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function GeekWeek() {
  return (
    <PageWrapper>
      <SectionHeader
        title="Geek Week"
        subtitle="Fifteen tasks, a lot of pressure, and a turning point in how I perform."
      />

      <p className="mb-4">
        Geek Week was one of the most intense parts of i.c.stars. We had fifteen
        technical tasks — SQL, Excel, hotkeys, data analysis, and more — all
        under strict time and performance expectations. Everything was tracked.
      </p>

      <p className="mb-4">
        Day one went well. I finished two tasks and felt confident. I expected
        to cruise with three or four tasks a day. Then days two and three hit.
      </p>

      <p className="mb-4">
        On day two, I made mistakes early, got in my head, and finished with
        nothing completed. Day three, I only completed one task. By Thursday I
        had finished five out of fifteen and felt like everyone else was moving
        forward while I was stuck.
      </p>

      <p className="mb-4">
        On Friday, something shifted. I decided to stop fearing failure and
        just show up with everything I had. I signed up for every open testing
        slot, moved quickly, and grouped tasks together. Momentum built with
        each small win. By the end of the day, I was close, but not done — so I
        came back on Saturday.
      </p>

      <p className="mb-6">
        I completed task fifteen that Saturday and earned the Geek Week
        sticker. It wasn&apos;t just a reward; it proved that when I stop
        letting fear control me, I can build anything, including myself.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What I Gained From Geek Week</h2>
      <p className="mb-3 font-medium">Technical growth:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Stronger SQL fundamentals.</li>
        <li>Faster, more accurate Excel work and hotkeys.</li>
        <li>Better debugging under time pressure.</li>
        <li>More disciplined use of GitHub and version control.</li>
      </ul>

      <p className="mb-3 font-medium">Mindset and performance growth:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>How fear can quietly slow performance.</li>
        <li>The power of momentum from small wins.</li>
        <li>How to reset after mistakes instead of spiraling.</li>
        <li>How to ask for help instead of hiding confusion.</li>
        <li>How to keep going even when I feel behind.</li>
      </ul>

      <p className="mt-6">
        Geek Week didn&apos;t just train my technical skills. It trained my
        discipline, resilience, and belief in my ability to push through
        difficult weeks. Those lessons now show up in how I handle deadlines,
        debugging, and new challenges in my projects.
      </p>
    </PageWrapper>
  );
}
