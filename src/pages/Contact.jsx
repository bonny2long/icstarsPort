import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionIntro from "../components/ui/SectionIntro";
import resumePdf from "../data/Bonny_Makaniankhondo_Resume_FSD.pdf";
import { contactLinks, leadershipImages } from "../data/portfolioContent";

const strengths = [
  "Systems-minded engineering from backend structure to UI delivery.",
  "Practical experience building live SaaS, client dashboards, and AI-enabled workflows.",
  "Strong problem solving in fast-moving, ambiguous environments.",
  "Client-facing communication and ownership mindset.",
  "Growth orientation with real interest in strong teams and mentors.",
];

export default function Contact() {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Contact"
              title="Full Stack Software Engineer building product systems across frontend, backend, data, authentication, and AI workflows."
              subtitle="If you are building products that need thoughtful engineering, strong problem solving, and someone who can grow quickly in a fast-moving environment, I would like to connect."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href="mailto:bmakaniankhondo@icstars.org"
                className="w-full justify-center sm:w-auto"
              >
                Contact Me
              </Button>
              <Button
                href={resumePdf}
                download
                variant="secondary"
                className="w-full justify-center sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            <div className="mt-8 grid gap-3">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-slate-200/80 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_28px_80px_-55px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
              <img
                src={leadershipImages.headshot}
                alt="Bonny Makaniankhondo headshot"
                className="h-[28rem] w-full object-cover object-top"
              />
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Current focus
              </p>
              <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                Strong teams, meaningful product work, and environments that
                value clarity, reliability, and growth.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid gap-4 lg:grid-cols-2">
          {contactLinks.map((link) => (
            <Card key={link.label} title={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="text-base font-semibold text-slate-950 transition hover:text-teal-700"
              >
                {link.value}
              </a>
            </Card>
          ))}

          <Card title="Resume">
            <p className="mb-4">
              For a quick summary of my experience, projects, and current
              direction, download my latest resume.
            </p>
            <Button href={resumePdf} download variant="secondary">
              Download Resume
            </Button>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_28px_80px_-55px_rgba(15,23,42,0.6)] sm:p-10">
          <SectionIntro
            eyebrow="Let's connect"
            eyebrowClassName="text-teal-200"
            title="If you need a full stack engineer who can take ownership, understand the workflow, and build across UI, backend, data, authentication, and deployment, I would like to hear about the work."
            titleClassName="text-white"
            subtitle="I am especially interested in full stack, backend/API-focused, AI product, and solutions-oriented engineering roles where I can keep growing while contributing real value."
            subtitleClassName="text-slate-300"
          />
          <div className="mt-6">
            <Button
              href="mailto:bmakaniankhondo@icstars.org"
              className="!border-white !bg-white !text-slate-950 shadow-lg shadow-black/20 hover:!bg-stone-100 hover:!text-slate-950"
            >
              Email Me
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
