import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import Card from "./Card";
import ProjectImagePreview from "./ProjectImagePreview";

function DetailBlock({ items, text, title }) {
  return (
    <Card className="flex h-full min-h-[14.5rem] flex-col" title={title}>
      {text ? <p className={items?.length ? "mb-4" : ""}>{text}</p> : null}
      {items?.length ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}

export default function ProjectCaseStudy({ index = 0, project }) {
  const reverse = index % 2 === 1;
  const links = [
    project.liveHref
      ? { label: "Live App", href: project.liveHref, primary: true }
      : null,
    project.githubHref
      ? { label: "GitHub", href: project.githubHref, primary: !project.liveHref }
      : null,
  ].filter(Boolean);
  const galleryItems = project.gallery?.length
    ? [
        {
          image: project.image,
          alt: project.imageAlt,
          title: project.title,
        },
        ...project.gallery,
      ]
    : null;

  return (
    <article
      id={project.slug}
      className="scroll-mt-32 rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_28px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
        <div
          className={`grid gap-6 lg:gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] ${
            reverse ? "xl:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
            <ProjectImagePreview
              alt={project.imageAlt}
              frameClassName="aspect-[16/10]"
              image={project.image}
              imageClassName="object-cover object-top"
              title={project.title}
            />
          </div>

          <div className="flex h-full flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                {project.eyebrow}
              </p>
              {project.status ? (
                <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                  {project.status}
                </span>
              ) : null}
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {project.title}
            </h2>

            <div className="mt-5 flex flex-1 flex-col">
              <div className="space-y-4">
                <p className="text-base leading-7 text-slate-600 sm:text-lg">
                  {project.summary}
                </p>

                {project.secondary ? (
                  <p className="text-sm font-medium leading-6 text-slate-800 sm:text-base">
                    {project.secondary}
                  </p>
                ) : null}
              </div>

              {links.length ? (
                <div className="mt-6 flex flex-wrap gap-3 xl:mt-auto">
                  {links.map((link) => (
                    <Button
                      key={link.label}
                      href={link.href}
                      to={link.to}
                      variant={link.primary ? "primary" : "secondary"}
                    >
                      {link.label}
                      {link.href?.startsWith("http") ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : null}
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>

            {project.note ? (
              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-stone-50/90 px-5 py-4 text-sm leading-6 text-slate-600">
                {project.note}
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DetailBlock text={project.problem} title="What problem it solves" />
          <DetailBlock
            items={project.system}
            text={project.systemText}
            title={project.systemTitle}
          />
          <DetailBlock items={project.owned} title="What I owned" />
          <DetailBlock items={project.decisions} title="Technical decisions that mattered" />
        </div>

        {galleryItems ? (
          <div className="rounded-[1.5rem] border border-slate-200 bg-stone-50/80 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Interface views
              </p>
              <p className="text-xs text-slate-500">
                {galleryItems.length} screenshots
              </p>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {galleryItems.map((item) => (
                <div
                  key={`${project.slug}-${item.title}`}
                  className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-950"
                >
                  <ProjectImagePreview
                    alt={item.alt}
                    frameClassName="aspect-[16/10]"
                    image={item.image}
                    imageClassName="object-cover object-top"
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="w-full rounded-[1.5rem] bg-slate-950 px-6 py-5 text-white sm:px-7 sm:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
            Why it stands out
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-[0.95rem]">
            {project.interesting}
          </p>
        </div>
      </div>
    </article>
  );
}
