const tones = {
  ink: "border-slate-800",
  violet: "border-violet-400/20",
  blue: "border-sky-300/25",
  sand: "border-amber-200/50",
};

const backgrounds = {
  ink: "radial-gradient(circle at 20% 10%, rgba(45, 212, 191, 0.16), transparent 34%), linear-gradient(145deg, #0f172a, #020617)",
  violet:
    "radial-gradient(circle at 50% 28%, rgba(124, 58, 237, 0.42), transparent 34%), radial-gradient(circle at 12% 82%, rgba(79, 70, 229, 0.22), transparent 38%), #070611",
  blue:
    "radial-gradient(circle at 75% 15%, rgba(56, 189, 248, 0.22), transparent 36%), linear-gradient(145deg, #082f49, #0f172a 58%, #020617)",
  sand:
    "radial-gradient(circle at 20% 10%, rgba(20, 184, 166, 0.2), transparent 32%), linear-gradient(145deg, #f5efe1, #dfe9e7)",
};

export default function ProductCanvas({
  children,
  className = "",
  tone = "ink",
}) {
  const classes = [
    "relative overflow-hidden border",
    tones[tone] ?? tones.ink,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={{ background: backgrounds[tone] ?? backgrounds.ink }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
      />
      {children}
    </div>
  );
}
