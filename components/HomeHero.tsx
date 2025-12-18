export function HomeHero() {
  return (
    <section className="grid gap-10 rounded-3xl bg-nw-hero p-6 shadow-sm md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-10">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-balance text-3xl font-medium leading-tight text-nw-primary sm:text-4xl md:text-5xl">
          Neowax Incubator: Affordable Innovation for Premature Infants
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-nw-primary/80">
          We’re reimagining neonatal care with low-cost, thermally stable
          incubators that can reach every community, keeping premature infants
          safer during critical moments.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#motivation"
            className="rounded-full bg-nw-primary px-6 py-2 text-sm font-semibold text-nw-surface shadow-sm transition hover:bg-nw-primary-strong"
          >
            Learn More
          </a>
          <a
            href="/read-more"
            className="rounded-full border border-nw-primary/30 bg-nw-surface/70 px-6 py-2 text-sm font-semibold text-nw-primary shadow-sm transition hover:bg-nw-surface"
          >
            Read Full Story
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/5 bg-nw-surface shadow-md md:max-w-lg lg:max-w-xl">
          <img
            src="/banner.png"
            alt="Neowax incubator banner illustration"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-nw-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-nw-primary shadow-sm">
            For premature infants
          </div>
        </div>
      </div>
    </section>
  );
}


