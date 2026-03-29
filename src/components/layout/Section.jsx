export default function Section({
  children,
  className = "",
  id,
  innerClassName = "",
  tone = "default",
}) {
  const tones = {
    default: "bg-transparent",
    subtle: "bg-white/75 backdrop-blur-sm",
    muted: "bg-stone-100/80",
    accent: "bg-slate-950 text-slate-50",
  };

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}
    >
      <div className={`mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
