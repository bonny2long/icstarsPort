import MobileProductStack from "./MobileProductStack";
import ProductCanvas from "./ProductCanvas";
import ProductScreenshot from "./ProductScreenshot";

function SystemMap({ project }) {
  return (
    <div
      aria-label={project.imageAlt}
      className="flex min-h-[20rem] flex-col justify-between p-6 text-white"
      role="img"
    >
      <div className="flex items-center justify-between gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-teal-200">
        <span>System map</span>
        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-emerald-200">
          Acceptance passed
        </span>
      </div>
      <div className="my-6 grid grid-cols-2 gap-3">
        {project.visualLabels?.map((label, index) => (
          <div
            key={label}
            className={
              index === 2
                ? "border border-violet-300/45 bg-violet-300/15 px-3 py-4 text-center text-sm font-semibold text-violet-100"
                : "border border-white/12 bg-white/6 px-3 py-4 text-center text-sm font-semibold text-slate-200"
            }
          >
            {label}
          </div>
        ))}
      </div>
      <p className="border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
        Safe intake → human-reviewed organization → private playback
      </p>
    </div>
  );
}

export default function ProjectMedia({ project, variant = "hero" }) {
  const media = project.media ?? {};
  const isIndex = variant === "index";
  const canvasClassName = isIndex
    ? "rounded-[1.25rem] p-3 sm:p-5"
    : "rounded-[1.5rem] p-3 sm:p-5 lg:p-7";

  if (media.kind === "mobile-stack") {
    return (
      <ProductCanvas
        className={
          isIndex
            ? "rounded-[1.25rem] px-3 py-5 sm:px-5"
            : "rounded-[1.5rem] px-5 py-8 sm:px-8 sm:py-10"
        }
        tone="violet"
      >
        <MobileProductStack compact={isIndex} images={media.images} />
      </ProductCanvas>
    );
  }

  return (
    <ProductCanvas className={canvasClassName} tone={media.tone}>
      {project.image ? (
        <ProductScreenshot
          alt={project.imageAlt}
          frameClassName={isIndex ? media.indexAspect : ""}
          image={project.image}
          imageClassName={
            isIndex
              ? "h-full w-full object-cover " + (media.objectPosition ?? "object-top")
              : "h-auto w-full"
          }
          title={project.shortTitle ?? project.title}
        />
      ) : (
        <SystemMap project={project} />
      )}
    </ProductCanvas>
  );
}
