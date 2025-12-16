export default function Section({ children, bg = "default" }) {
  const backgrounds = {
    default: "bg-transparent",
    subtle: "bg-white",
    muted: "bg-slate-100",
  };

  return (
    <section className={`${backgrounds[bg]} py-16 sm:py-20 lg:py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}
