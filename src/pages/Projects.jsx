import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ProjectCaseStudy from "../components/ui/ProjectCaseStudy";
import SectionIntro from "../components/ui/SectionIntro";
import { portfolioProjects } from "../data/portfolioContent";

const summaryCards = [
  {
    title: "Systems first",
    body: "The common thread across these projects is structure: understanding the problem, shaping the data flow, and building a system that stays useful as it grows.",
  },
  {
    title: "AI with purpose",
    body: "I’m interested in AI when it improves real workflows, whether that means insight generation, content alignment, or reducing repetitive work.",
  },
  {
    title: "Ownership",
    body: "I work best when I can take a problem from ambiguity to a clearer architecture, a functional product, and a better delivery story.",
  },
];

export default function Projects() {
  return (
    <>
      <Section>
        <SectionIntro
          eyebrow="Projects"
          title="Case studies built around systems, not just screens."
          subtitle="These projects show how I think: define the problem, design the flow, make the system understandable, and build something people can actually use."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {summaryCards.map((card) => (
            <Card key={card.title} title={card.title}>
              <p>{card.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <div className="space-y-8">
          {portfolioProjects.map((project, index) => (
            <ProjectCaseStudy key={project.slug} index={index} project={project} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_28px_80px_-55px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-10">
          <SectionIntro
            eyebrow="Next"
            title="I’m looking for environments where I can keep building and keep getting sharper."
            subtitle="If you need a systems-minded engineer who can grow quickly, work across backend and UI concerns, and contribute in client-facing environments, let’s talk."
          />

          <div className="mt-6">
            <Button to="/contact">Start a conversation</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
