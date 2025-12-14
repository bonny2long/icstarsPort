import SectionHeader from "../components/ui/SectionHeader";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12">
      
      {/* HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3">
          Bonny Makaniankhondo
        </h1>

        <p className="text-zinc-600 text-sm md:text-base tracking-wide mb-6">
          Full Stack Software Developer | Builder | Leader in Training
        </p>

        <p className="text-zinc-700 leading-relaxed mb-4">
          I build systems that solve real problems. I lead with curiosity,
          discipline, and a commitment to lifting others as I grow. This
          portfolio reflects my 14-week transformation at i.c.stars — where I
          learned how to think, lead, build, and take responsibility for my
          voice in tech.
        </p>

        <p className="text-zinc-700 leading-relaxed">
          I walked in as someone who loved technology. I walk out as someone who
          understands leadership, consulting, problem-solving, and the impact
          technology can have on people and businesses. This site shares the
          projects I built, the lessons I learned, and the mindset that now
          drives how I work.
        </p>
      </section>

      {/* QUICK NAV BUTTONS */}
      <section className="flex flex-wrap justify-center gap-4">
        <a
          href="/leadership"
          className="px-5 py-2 bg-slate-50 border border-zinc-200 rounded-lg text-slate-700 hover:text-emerald-600 hover:border-emerald-500 transition"
        >
          Leadership Journey
        </a>

        <a
          href="/client"
          className="px-5 py-2 bg-slate-50 border border-zinc-200 rounded-lg text-slate-700 hover:text-emerald-600 hover:border-emerald-500 transition"
        >
          United Airlines Client Project
        </a>

        <a
          href="/projects"
          className="px-5 py-2 bg-slate-50 border border-zinc-200 rounded-lg text-slate-700 hover:text-emerald-600 hover:border-emerald-500 transition"
        >
          My Projects
        </a>

        <a
          href="/career"
          className="px-5 py-2 bg-slate-50 border border-zinc-200 rounded-lg text-slate-700 hover:text-emerald-600 hover:border-emerald-500 transition"
        >
          Career Path
        </a>

        <a
          href="/wellness"
          className="px-5 py-2 bg-slate-50 border border-zinc-200 rounded-lg text-slate-700 hover:text-emerald-600 hover:border-emerald-500 transition"
        >
          Wellness Journey
        </a>
      </section>

      {/* WHAT THIS PORTFOLIO REPRESENTS */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          What This Portfolio Represents
        </h2>

        <p className="text-zinc-700 leading-relaxed mb-4">
          This site is more than a list of projects. It is a snapshot of who
          I've become: someone who shows up early and prepared, asks better
          questions, pushes through doubt, and builds systems with intention. I
          care about making technology useful, accessible, and grounded in real
          needs — and I bring that mindset into every project and team I join.
        </p>

        <p className="text-zinc-700 leading-relaxed font-medium">
          My purpose is to empower — with code, with leadership, and with the
          kind of consistency that builds trust. And I'm just getting started.
        </p>
      </section>
    </div>
  );
}
