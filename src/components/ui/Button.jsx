import { Link } from "react-router-dom";

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const variants = {
  primary:
    "border-slate-950 bg-slate-950 px-5 py-3 text-white shadow-lg shadow-slate-950/10 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-slate-950",
  secondary:
    "border-slate-300 bg-white/70 px-5 py-3 text-slate-900 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-white focus-visible:ring-slate-900",
  ghost:
    "border-transparent bg-transparent px-4 py-2 text-slate-700 hover:bg-white/70 hover:text-slate-950 focus-visible:ring-slate-900",
};

export default function Button({
  children,
  className = "",
  download = false,
  href,
  onClick,
  rel,
  target,
  to,
  variant = "primary",
}) {
  const classNameValue = `${baseClassName} ${variants[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classNameValue}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");

    return (
      <a
        href={href}
        className={classNameValue}
        target={target ?? (download || !isExternal ? "_self" : "_blank")}
        rel={rel ?? (download || !isExternal ? undefined : "noopener noreferrer")}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classNameValue}>
      {children}
    </button>
  );
}
