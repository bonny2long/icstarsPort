import ProjectImagePreview from "../ProjectImagePreview";

export default function ProductScreenshot({
  alt,
  caption,
  captionClassName = "text-slate-300",
  className = "",
  frameClassName = "",
  image,
  imageClassName = "h-auto w-full",
  title,
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden border border-white/10 bg-slate-950/70 shadow-[0_28px_70px_-40px_rgba(2,6,23,0.9)]">
        <ProjectImagePreview
          alt={alt}
          frameClassName={frameClassName}
          image={image}
          imageClassName={imageClassName}
          title={title}
        />
      </div>
      {caption ? (
        <figcaption
          className={"mt-3 text-sm leading-6 " + captionClassName}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
