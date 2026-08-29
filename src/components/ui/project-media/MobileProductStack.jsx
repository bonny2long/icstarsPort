const cropSettings = {
  nowPlaying: {
    aspectRatio: "53 / 100",
    transform: "translateY(-9.4%)",
  },
  library: {
    aspectRatio: "60 / 100",
    transform: "translateY(-12.2%)",
  },
  audiobook: {
    aspectRatio: "60 / 100",
    transform: "translateY(-12.2%)",
  },
};

const fullLayoutClasses = {
  library:
    "order-2 mx-auto w-full max-w-[19rem] md:order-1 md:translate-x-8 md:scale-[0.88] md:opacity-90",
  nowPlaying:
    "order-1 z-20 mx-auto w-full max-w-[20rem] md:order-2",
  audiobook:
    "order-3 mx-auto w-full max-w-[19rem] md:-translate-x-8 md:scale-[0.84] md:opacity-90",
};

const compactLayoutClasses = {
  library: "z-0 translate-x-4 scale-[0.84] opacity-80",
  nowPlaying: "z-20",
  audiobook: "z-10 -translate-x-4 scale-[0.8] opacity-80",
};

function PublicSafeMobileScreenshot({
  alt,
  className,
  crop,
  image,
  label,
  showLabel,
}) {
  const cropSetting = cropSettings[crop];

  return (
    <figure className={className}>
      <figcaption
        className={
          showLabel
            ? "mb-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-100"
            : "sr-only"
        }
      >
        {label}
      </figcaption>
      <div
        className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#05040d] shadow-[0_30px_80px_-30px_rgba(76,29,149,0.9)]"
        style={{ aspectRatio: cropSetting.aspectRatio }}
      >
        <img
          src={image}
          alt={alt}
          className="absolute left-0 top-0 h-auto w-full max-w-none"
          style={{ transform: cropSetting.transform }}
          decoding="async"
          loading="lazy"
          draggable="false"
        />
      </div>
    </figure>
  );
}

export default function MobileProductStack({ compact = false, images }) {
  const items = [
    {
      key: "library",
      label: "Library",
      alt: "BM Radio artist library with browsing and playback controls",
      image: images.library,
    },
    {
      key: "nowPlaying",
      label: "Now playing",
      alt: "BM Radio now-playing interface with album art and audio controls",
      image: images.nowPlaying,
    },
    {
      key: "audiobook",
      label: "Audiobooks",
      alt: "BM Radio audiobook playback interface with progress and speed controls",
      image: images.audiobook,
    },
  ];
  if (compact) {
    return (
      <div className="grid grid-cols-[0.78fr_1fr_0.72fr] items-center">
        {items.map((item) => (
          <PublicSafeMobileScreenshot
            key={item.key}
            alt={item.alt}
            className={compactLayoutClasses[item.key]}
            crop={item.key}
            image={item.image}
            label={item.label}
            showLabel={false}
          />
        ))}
      </div>
    );
  }

  const nowPlaying = items.find((item) => item.key === "nowPlaying");
  const supportingViews = items.filter((item) => item.key !== "nowPlaying");

  return (
    <>
      <div className="md:hidden">
        <PublicSafeMobileScreenshot
          alt={nowPlaying.alt}
          className="z-20 mx-auto w-full max-w-[20rem]"
          crop={nowPlaying.key}
          image={nowPlaying.image}
          label={nowPlaying.label}
          showLabel
        />
        <div
          aria-label="Supporting BM Radio product views"
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-8"
          role="region"
          tabIndex={0}
        >
          {supportingViews.map((item) => (
            <PublicSafeMobileScreenshot
              key={item.key}
              alt={item.alt}
              className="w-[72%] max-w-[13rem] shrink-0 snap-center first:snap-start"
              crop={item.key}
              image={item.image}
              label={item.label}
              showLabel
            />
          ))}
        </div>
      </div>

      <div className="hidden items-center md:grid md:grid-cols-[0.82fr_1fr_0.78fr] md:gap-0">
        {items.map((item) => (
          <PublicSafeMobileScreenshot
            key={item.key}
            alt={item.alt}
            className={fullLayoutClasses[item.key]}
            crop={item.key}
            image={item.image}
            label={item.label}
            showLabel
          />
        ))}
      </div>
    </>
  );
}
