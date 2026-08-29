import { Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function PreviewModal({ alt, image, onClose, title }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/88 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.9)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title + " preview"}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/85 text-white transition hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Close image preview"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex min-h-[50vh] max-h-[88vh] flex-col">
          <div className="border-b border-white/10 px-5 py-4 pr-16 sm:px-6">
            <p className="text-sm font-semibold text-white">{title}</p>
          </div>
          <div className="flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_40%)] p-4 sm:p-6">
            <img
              src={image}
              alt={alt}
              className="max-h-[74vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function ProjectImagePreview({
  alt,
  eager = false,
  frameClassName = "",
  image,
  imageClassName = "h-auto w-full",
  showControl = true,
  title,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const closePreview = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };
  const triggerClasses = [
    "relative block w-full overflow-hidden bg-slate-950 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
    frameClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className={triggerClasses}
        aria-label={"Preview " + title}
      >
        <img
          src={image}
          alt={alt}
          className={imageClassName}
          decoding="async"
          loading={eager ? "eager" : "lazy"}
        />
        {showControl ? (
          <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-slate-950/30">
            <Expand className="h-3.5 w-3.5" />
            Expand
          </span>
        ) : null}
      </button>

      {isOpen ? (
        <PreviewModal
          alt={alt}
          image={image}
          onClose={closePreview}
          title={title}
        />
      ) : null}
    </>
  );
}
