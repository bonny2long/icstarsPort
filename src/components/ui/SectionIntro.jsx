import PretextHeading from "./PretextHeading";

export default function SectionIntro({
  align = "left",
  className = "",
  eyebrow,
  eyebrowClassName = "",
  experimental = false,
  subtitle,
  subtitleClassName = "",
  titleClassName = "",
  title,
  titleAs = "h2",
  titleSizes,
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      ) : null}

      {experimental ? (
        <PretextHeading
          as={titleAs}
          className={`text-slate-950 ${titleClassName}`}
          lineClassName="tracking-tight"
          sizes={titleSizes}
          text={title}
        />
      ) : (
        <h2
          className={`text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl ${titleClassName}`}
        >
          {title}
        </h2>
      )}

      {subtitle ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
