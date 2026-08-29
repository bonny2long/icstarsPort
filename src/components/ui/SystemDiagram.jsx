const Node = ({ detail, label, tone = "default" }) => {
  const tones = {
    default: "border-white/15 bg-white/6",
    primary: "border-teal-300/45 bg-teal-300/12",
    safety: "border-amber-300/35 bg-amber-300/10",
    future: "border-dashed border-white/20 bg-transparent",
  };

  return (
    <div className={`rounded-xl border p-4 text-center ${tones[tone]}`}>
      <p className="text-sm font-semibold text-white">{label}</p>
      {detail ? <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p> : null}
    </div>
  );
};

const Arrow = ({ label = "↓" }) => (
  <div aria-hidden="true" className="py-2 text-center text-lg text-teal-300">
    {label}
  </div>
);

export default function SystemDiagram() {
  return (
    <figure
      id="architecture"
      className="scroll-mt-32 overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950 p-5 text-white sm:p-7"
    >
      <figcaption className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
            Conceptual architecture
          </p>
          <p className="mt-2 text-lg font-semibold">Media flow and ownership boundaries</p>
        </div>
        <p className="max-w-md text-xs leading-5 text-slate-400">
          Cleaner consumes move evidence; it does not sit in the playback path.
        </p>
      </figcaption>

      <div className="mx-auto mt-6 max-w-3xl">
        <Node detail="Stable completed uploads" label="Incoming Media" />
        <Arrow />
        <Node detail="Upload stability and ready-state promotion" label="Intake Watcher" tone="primary" />
        <Arrow />
        <Node detail="Classification · review · human approval · final move" label="Archive Assistant" tone="primary" />

        <div className="grid gap-5 pt-3 md:grid-cols-2 md:gap-8">
          <div>
            <Arrow label="↙" />
            <Node detail="Final owned library" label="Music / Audiobooks" />
            <Arrow />
            <Node detail="PostgreSQL · read-only media" label="BM Radio" tone="primary" />
            <Arrow />
            <Node detail="Library · radio · playlists · progress" label="Listener Experience" />
          </div>
          <div>
            <Arrow label="↘" />
            <Node detail="Final owned library" label="Movies / TV / Other" />
            <Arrow />
            <Node detail="Deliberately outside current scope" label="Future Reader Apps" tone="future" />
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-5">
          <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Archive Assistant move evidence
          </p>
          <Arrow />
          <Node detail="Report-only · fail closed · deletion disabled" label="Cleaner" tone="safety" />
        </div>
      </div>
    </figure>
  );
}
