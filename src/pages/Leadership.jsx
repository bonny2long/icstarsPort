import SectionHeader from "../components/ui/SectionHeader.jsx";
import Section from "../components/layout/Section";
import teamWeekPhoto from "../assets/photos/teamweek.jpg";
import ancestorsDinnerPhoto from "../assets/photos/dinner.jpg";
import teaHostPhoto from "../assets/photos/teaguest.jpg";
import dreamSpeechVideo from "../assets/photos/dreamspeach.MOV";



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
          <img
            src={teamWeekPhoto}
            alt="Team Week cohort activities"
            className="w-full h-52 sm:h-64 rounded-xl object-cover object-[50%_40%]"
          />
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
    <img
      src={ancestorsDinnerPhoto}
      alt="Ancestor&apos;s Dinner potluck"
      className="w-full h-52 sm:h-64 rounded-xl object-cover"
    />

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
  <div className="max-w-4xl mx-auto">

    <img
      src={teaHostPhoto}
      alt="High Tea with Chicago tech leaders"
      className="w-full h-52 sm:h-64 rounded-xl object-cover object-[50%_30%] mb-6"
    />

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

  </div>
</Section>


     {/* DREAM SPEECH */}
<Section bg="subtle">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-2xl font-semibold text-slate-900 mb-4">
      Dream Speech — Meeting My Future Self
    </h2>

    {/* VIDEO */}
    <video
      src={dreamSpeechVideo}
      controls
      playsInline
      className="w-full aspect-video rounded-xl mb-6"
    />

    <p className="mb-4 text-zinc-700">
      In my Dream Speech, I imagined myself in 2050 receiving a Tech Leader
      Award for building systems that make technology accessible and useful
      for small businesses and communities.
    </p>

    <p className="mb-4 text-zinc-700">
      I talked about my journey from entry-level developer to senior engineer,
      CTO, and co-founder of Métis, and the projects that made a difference
      along the way.
    </p>

    <p className="text-zinc-700">
      The Dream Speech wasn&apos;t just about the future. It was about deciding
      who I want to be today and aligning my actions with that version of myself.
    </p>

  </div>
</Section>

    </>
  );
}
