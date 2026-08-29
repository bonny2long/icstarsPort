import ProjectImagePreview from "./ProjectImagePreview";

export default function ProjectVisual({ compact = false, project }) {
  if (project.image) {
    return (
      <ProjectImagePreview
        alt={project.imageAlt}
        frameClassName={compact ? "aspect-[16/10]" : "aspect-[16/10]"}
        image={project.image}
        imageClassName="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        title={project.shortTitle ?? project.title}
      />
    );
  }

  return (
    <div
      aria-label={project.imageAlt}
      className={`flex w-full flex-col justify-between bg-slate-950 p-6 text-white ${
        compact ? "aspect-[16/10]" : "min-h-[18rem] sm:min-h-[22rem]"
      }`}
      role="img"
    >
      <div className="flex items-center justify-between gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-teal-200">
        <span>System map</span>
        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-emerald-200">
          Acceptance passed
        </span>
      </div>

      <div className="my-5 grid grid-cols-2 gap-2 sm:gap-3">
        {project.visualLabels?.map((label, index) => (
          <div
            key={label}
            className={`rounded-xl border px-3 py-3 text-center text-xs font-semibold sm:text-sm ${
              index === 1
                ? "border-teal-300/40 bg-teal-300/12 text-teal-100"
                : "border-white/12 bg-white/6 text-slate-200"
            }`}
          >
            <span className="mb-1 block text-[0.58rem] font-medium uppercase tracking-[0.18em] text-slate-400">
              Service {index + 1}
            </span>
            {label}
          </div>
        ))}
      </div>

      <p className="border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
        Stable intake → human-approved moves → read-only playback · cleanup
        remains report-only
      </p>
    </div>
  );
}

