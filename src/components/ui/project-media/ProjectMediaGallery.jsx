import ProductCanvas from "./ProductCanvas";
import ProductScreenshot from "./ProductScreenshot";

const placements = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-8 lg:col-start-3",
];

export default function ProjectMediaGallery({ project }) {
  if (!project.gallery?.length) {
    return null;
  }

  const usesLightCanvas = project.media?.tone === "sand";

  return (
    <section aria-labelledby={project.slug + "-media-heading"}>
      <div className="flex flex-col gap-3 border-t border-slate-300 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Product details
          </p>
          <h2
            id={project.slug + "-media-heading"}
            className="mt-3 scroll-mt-32 text-3xl font-semibold tracking-tight text-slate-950"
          >
            Supporting interface evidence
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-600">
          Each view highlights a different workflow instead of repeating the
          same generic screenshot frame.
        </p>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {project.gallery.map((item, index) => (
          <ProductCanvas
            key={project.slug + "-" + item.title}
            className={
              "rounded-[1.25rem] p-3 sm:p-4 " +
              (project.gallery.length === 1
                ? "lg:col-span-12"
                : placements[index] ?? "lg:col-span-6")
            }
            tone={project.media?.tone}
          >
            <ProductScreenshot
              alt={item.alt}
              caption={item.caption}
              captionClassName={
                usesLightCanvas ? "text-slate-600" : "text-slate-300"
              }
              image={item.image}
              title={item.title}
            />
            <p
              className={
                "mt-3 text-sm font-semibold " +
                (usesLightCanvas ? "text-slate-950" : "text-white/90")
              }
            >
              {item.title}
            </p>
          </ProductCanvas>
        ))}
      </div>
    </section>
  );
}
