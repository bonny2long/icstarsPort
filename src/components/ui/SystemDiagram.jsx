const tones = {
  default: "border-white/15 bg-white/6",
  primary: "border-teal-300/45 bg-teal-300/12",
  product: "border-violet-300/50 bg-violet-300/15",
  safety: "border-amber-300/35 bg-amber-300/10",
  future: "border-dashed border-white/20 bg-transparent",
};

function Node({ detail, label, tone = "default" }) {
  return (
    <div className={"border p-4 text-center " + tones[tone]}>
      <p className="text-sm font-semibold text-white">{label}</p>
      {detail ? (
        <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
      ) : null}
    </div>
  );
}

function Arrow({ label = "↓" }) {
  return (
    <div aria-hidden="true" className="py-2 text-center text-lg text-teal-300">
      {label}
    </div>
  );
}

export default function SystemDiagram() {
  return (
    <figure
      id="architecture"
      aria-describedby="architecture-note"
      className="scroll-mt-32 overflow-hidden border border-slate-800 bg-slate-950 p-5 text-white sm:p-7"
    >
      <figcaption className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
            Conceptual architecture
          </p>
          <p className="mt-2 text-lg font-semibold">
            Media flow and ownership boundaries
          </p>
        </div>
        <p
          id="architecture-note"
          className="max-w-md text-xs leading-5 text-slate-400"
        >
          Cleaner consumes move evidence after organization. It never sits in
          BM Radio’s playback path.
        </p>
      </figcaption>

      <div className="mx-auto mt-7 max-w-4xl">
        <div className="mx-auto max-w-lg">
          <Node detail="Stable completed uploads" label="Incoming Media" />
          <Arrow />
          <Node
            detail="Stability gate and safe ready-state promotion"
            label="Intake Watcher"
            tone="primary"
          />
          <Arrow />
          <Node
            detail="Classification · reconstruction · human review · approved final move"
            label="Archive Assistant"
            tone="primary"
          />
        </div>

        <div className="mt-2 grid gap-7 md:grid-cols-2 md:gap-10">
          <div>
            <Arrow label="↙" />
            <Node
              detail="Final owned library"
              label="Final Music / Audiobooks"
            />
            <Arrow />
            <Node
              detail="PostgreSQL · final media read-only"
              label="BM Radio"
              tone="product"
            />
            <Arrow />
            <Node
              detail="Library · radio · playlists · history · progress"
              label="Listener Experience"
            />
          </div>

          <div>
            <Arrow label="↘" />
            <Node detail="Final owned library" label="Other final media" />
            <Arrow />
            <Node
              detail="Outside the current listener-product scope"
              label="Other consumers"
              tone="future"
            />
          </div>
        </div>

        <div className="mx-auto mt-9 max-w-lg border-t border-dashed border-amber-300/25 pt-6">
          <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-amber-200">
            Separate evidence-only path
          </p>
          <p className="mt-2 text-center text-xs leading-5 text-slate-400">
            Archive Assistant move evidence
          </p>
          <Arrow />
          <Node
            detail="Report-only · fail-closed · deletion disabled"
            label="Cleaner"
            tone="safety"
          />
        </div>
      </div>
    </figure>
  );
}
