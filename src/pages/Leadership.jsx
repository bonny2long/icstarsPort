import SectionHeader from "../components/ui/SectionHeader.jsx";
import Section from "../components/layout/Section";

export default function Leadership() {
  return (
    <>
      {/* PAGE INTRO */}
      <Section bg="default">
        <SectionHeader
          title="Leadership Journey"
          subtitle="How i.c.stars shaped my mindset, confidence, and voice."
        />
      </Section>

      {/* TEAM WEEK */}
      <Section bg="subtle">
        <div className="mb-8">
          <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
            Team Week photo
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Team Week — Learning Each Other First
        </h2>
        <p className="text-zinc-700">
          Team Week was the first time our cohort came together not to write
          code, but to understand each other as people. We spent the week on
          structured walks, shared lunches, and small group activities where we
          heard each other&apos;s stories, backgrounds, and motivations.
        </p>
        <p className="mt-4 text-zinc-700">
          I learned that leadership starts with listening and that a strong team
          is built on relationships, not just tasks.
        </p>
      </Section>

    {/* GIFT PROJECT */}
<Section bg="default">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* TEXT */}
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 mb-3">
        Gift Project — Ancestor&apos;s Dinner
      </h2>

      <p className="mb-4 text-zinc-700">
        For the Gift Project, our team designed the Ancestor&apos;s Dinner — a
        potluck where everyone brought a dish from their heritage and shared
        the story behind it.
      </p>

      <p className="mb-4 text-zinc-700">
        I brought rice and beef stew, the kind of meal I grew up eating with my
        family while we shared stories around the table. Creating that space
        for culture, vulnerability, and connection reminded me that leadership
        is also about building environments where people feel seen.
      </p>

      <p className="text-zinc-700">
        This project taught me how powerful it is to intentionally create
        community inside a high-pressure program.
      </p>
    </div>

    {/* IMAGE SLOT */}
    <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-sm">
      Ancestor&apos;s Dinner photo
    </div>

  </div>
</Section>


      {/* PLANETARY RESPONSIBILITY */}
      <Section bg="subtle">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Planetary Responsibility — Defining My Impact
        </h2>
        <p className="text-zinc-700">
          Planetary Responsibility pushed me to think beyond myself. I started
          shaping my mission: to build technology that makes life easier,
          fairer, and more accessible, especially for communities that are often
          overlooked.
        </p>
        <p className="mt-4 text-zinc-700">
          It was the first time I clearly articulated the kind of world I want
          to help build and the responsibility that comes with technical skills.
        </p>
      </Section>

      {/* TEA HOSTS */}
      <Section bg="default">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Tea Hosts — Learning From Chicago&apos;s Leaders
        </h2>
        <p className="mb-4 text-zinc-700">
          Each High Tea brought in leaders from across Chicago who shared their
          journeys, failures, and wisdom. Hosting and engaging in those
          conversations taught me how to ask better questions, listen with
          intention, and speak with presence.
        </p>
        <p className="text-zinc-700">
          Through their feedback and encouragement, I started to see a pattern:
          when I speak, people listen. That&apos;s a responsibility I carry
          forward as I grow in tech and leadership.
        </p>
      </Section>

      {/* DREAM SPEECH */}
      <Section bg="subtle">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Dream Speech — Meeting My Future Self
        </h2>
        <p className="mb-4 text-zinc-700">
          In my Dream Speech, I imagined myself in 2050 receiving a Tech Leader
          Award for building systems that make technology accessible and useful
          for small businesses and communities.
        </p>
        <p className="mb-4 text-zinc-700">
          I talked about my journey from entry-level developer to senior
          engineer, CTO, and co-founder of Métis, and the projects that made a
          difference along the way.
        </p>
        <p className="text-zinc-700">
          The Dream Speech wasn&apos;t just about the future. It was about
          deciding who I want to be today and aligning my actions with that
          version of myself.
        </p>
      </Section>
    </>
  );
}
