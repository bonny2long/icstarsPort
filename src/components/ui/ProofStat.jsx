export default function ProofStat({ detail, label, value }) {
  return (
    <div className="rounded-[1.35rem] border border-slate-200/80 bg-white/80 p-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}

