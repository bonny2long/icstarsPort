import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";
import Section from "../components/layout/Section";

export default function Contact() {
  return (
    <>
      {/* PAGE INTRO */}
      <Section bg="default">
        <SectionHeader
          title="Contact Me"
          subtitle="Let's connect, collaborate, or build something meaningful."
        />
      </Section>

      {/* CONTACT CARD */}
      <Section bg="subtle">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm ring-1 ring-slate-100 p-8 max-w-2xl mx-auto text-center">
          
          {/* Headshot + Identity */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 flex items-center justify-center text-xs text-slate-500">
              Headshot
            </div>

            <h2 className="text-2xl font-semibold text-slate-900">
              Bonny Makaniankhondo
            </h2>

            {/* subtle identity accent */}
            <div className="w-12 h-1 bg-emerald-500 rounded-full my-3"></div>

            <p className="text-zinc-600">
              Full Stack Software Developer | Builder | Problem Solver
            </p>
          </div>

          {/* Intro text */}
          <p className="mb-6 text-zinc-700">
            Thank you for taking the time to explore my work and journey. If
            anything here resonates, whether it&apos;s my engineering approach,
            leadership mindset, or the systems I&apos;ve built. I&apos;d love
            to connect.
          </p>

          {/* Contact Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center gap-3 text-zinc-700">
              <span className="font-semibold text-slate-900">Email</span>
              <span className="text-slate-400">—</span>
              <a
                href="mailto:bmakaniankhondo@icstars.org"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition"
              >
                bmakaniankhondo@icstars.org
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-zinc-700">
              <span className="font-semibold text-slate-900">GitHub</span>
              <span className="text-slate-400">—</span>
              <a
                href="https://github.com/bonny2long"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition"
              >
                github.com/bonny2long
              </a>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="mb-8">
            <Button href="/Bonny_Makaniankhondo_Resume.pdf">
              Download Resume
            </Button>
          </div>

          {/* Closing statement */}
          <p className="text-zinc-700">
            I&apos;m moving into the next stage of my career with the same
            discipline, curiosity, and resilience that shaped my time at
            i.c.stars. If you&apos;re looking for someone who learns fast, takes
            ownership, and builds with purpose, let&apos;s talk.
          </p>
        </div>
      </Section>
    </>
  );
}
