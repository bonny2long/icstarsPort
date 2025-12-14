import Section from "../components/layout/Section";

export default function Home() {
  return (
    <>
      {/* HERO + QUICK NAV */}
      <Section bg="default">
        <section className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3">
            Bonny Makaniankhondo
          </h1>

          <p className="text-zinc-600 text-sm md:text-base tracking-wide mb-6">
            Full Stack Software Developer | Builder | Leader in Training
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            I build systems that solve real problems. I lead with curiosity,
            discipline, and a commitment to lifting others as I grow.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            I walked in as someone who loved technology. I walk out as someone
            who understands leadership, consulting, and problem-solving.
          </p>
        </section>

        {/* QUICK NAV BUTTONS */}
        <section className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            ["Leadership Journey", "/leadership"],
            ["United Airlines Client Project", "/client"],
            ["My Projects", "/projects"],
            ["Career Path", "/career"],
            ["Wellness Journey", "/wellness"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-5 py-2 bg-slate-50 border border-zinc-200 rounded-lg text-slate-700 hover:text-emerald-600 hover:border-emerald-500 transition"
            >
              {label}
            </a>
          ))}
        </section>
      </Section>

      {/* WHAT THIS PORTFOLIO REPRESENTS */}
      <Section bg="subtle">
        <section className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            What This Portfolio Represents
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            This site is more than a list of projects. It is a snapshot of who
            I've become — someone who shows up prepared and builds with intent.
          </p>

          <p className="text-zinc-700 leading-relaxed font-medium">
            My purpose is to empower — with code, leadership, and consistency.
          </p>
        </section>
      </Section>
    </>
  );
}
