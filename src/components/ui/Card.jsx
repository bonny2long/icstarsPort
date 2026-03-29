import { createElement } from "react";

export default function Card({
  as = "article",
  children,
  className = "",
  eyebrow,
  title,
}) {
  return createElement(
    as,
    {
      className: `rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-6 ${className}`.trim(),
    },
    <>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
          {title}
        </h3>
      ) : null}
      <div className={`${title ? "mt-3" : ""} text-sm leading-6 text-slate-600 sm:text-[0.95rem]`}>
        {children}
      </div>
    </>,
  );
}
