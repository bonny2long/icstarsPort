export default function Button({ children, href, onClick, download }) {
  const base =
    "px-6 py-2.5 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition shadow-sm hover:shadow-md";

  if (href) {
    return (
      <a
        href={href}
        className={base}
        target={download ? "_self" : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
