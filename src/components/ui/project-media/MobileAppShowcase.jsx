function MobileAppScreen({ className = "", screen, showLabel = true }) {
  return (
    <figure className={className}>
      <figcaption
        className={
          showLabel
            ? "mb-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-orange-100"
            : "sr-only"
        }
      >
        {screen.label}
      </figcaption>
      <div
        className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#11100f] shadow-[0_30px_80px_-30px_rgba(209,117,87,0.72)]"
        style={{ aspectRatio: "45 / 64" }}
      >
        <img
          src={screen.image}
          alt={screen.alt}
          className="absolute left-0 top-0 h-auto w-full max-w-none -translate-y-[9.8%]"
          decoding="async"
          loading="lazy"
          draggable="false"
        />
      </div>
    </figure>
  );
}

export default function MobileAppShowcase({ compact = false, screens }) {
  const primary = screens.find((screen) => screen.primary) ?? screens[0];
  const supporting = screens.filter((screen) => screen !== primary);

  if (compact) {
    return (
      <div className="grid grid-cols-[0.78fr_1fr_0.78fr] items-center">
        {screens.map((screen) => (
          <MobileAppScreen
            key={screen.label}
            className={
              screen.primary
                ? "z-20"
                : screen === screens[0]
                  ? "z-0 translate-x-5 scale-[0.84] opacity-80"
                  : "z-10 -translate-x-5 scale-[0.82] opacity-80"
            }
            screen={screen}
            showLabel={false}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="md:hidden">
        <MobileAppScreen
          className="z-20 mx-auto w-full max-w-[20rem]"
          screen={primary}
        />
        <div
          aria-label="Supporting Chef BonBon product views"
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-8"
          role="region"
          tabIndex={0}
        >
          {supporting.map((screen) => (
            <MobileAppScreen
              key={screen.label}
              className="w-[72%] max-w-[13.5rem] shrink-0 snap-center first:snap-start"
              screen={screen}
            />
          ))}
        </div>
      </div>

      <div className="hidden items-center md:grid md:grid-cols-[0.82fr_1fr_0.82fr] md:gap-0">
        {screens.map((screen, index) => (
          <MobileAppScreen
            key={screen.label}
            className={
              screen.primary
                ? "z-20 mx-auto w-full max-w-[20rem]"
                : index === 0
                  ? "z-0 mx-auto w-full max-w-[18rem] translate-x-8 scale-[0.88] opacity-90"
                  : "z-10 mx-auto w-full max-w-[18rem] -translate-x-8 scale-[0.86] opacity-90"
            }
            screen={screen}
          />
        ))}
      </div>
    </>
  );
}
