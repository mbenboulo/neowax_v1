export function HomeTechnology() {
  return (
    <section
      id="technology"
      className="rounded-3xl bg-nw-hero-alt p-6 shadow-sm md:p-10"
      aria-labelledby="technology-title"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-nw-primary/60">
            Technology
          </p>
          <h2
            id="technology-title"
            className="text-2xl font-medium text-nw-primary md:text-3xl"
          >
            Our Technology
          </h2>
          <p className="text-base leading-relaxed text-nw-primary/80">
            Utilizing natural materials like beeswax, our incubator provides a
            stable thermal environment, reducing the need for expensive
            components.
          </p>
          <p className="text-base leading-relaxed text-nw-primary/80">
            By focusing on thermal buffering and simple mechanical systems, we
            lower both upfront and long-term costs while preserving safety and
            reliability for the most fragile patients.
          </p>
        </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          <div className="rounded-2xl bg-nw-surface/80 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-medium text-nw-primary">
              Beeswax-based thermal buffer
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-nw-primary/80">
              Phase-change properties of beeswax help maintain a stable
              temperature range, even when external conditions fluctuate.
            </p>
          </div>
          <div className="rounded-2xl bg-nw-surface/80 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-medium text-nw-primary">
              Minimalist mechanical design
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-nw-primary/80">
              Fewer moving parts reduce maintenance complexity and cost while
              improving durability in low-resource settings.
            </p>
          </div>
          <div className="rounded-2xl bg-nw-surface/80 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-medium text-nw-primary">
              Scalable and modular
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-nw-primary/80">
              Configurable components support different clinical workflows, from
              stationary units to transport-ready modules.
            </p>
          </div>
          <div className="rounded-2xl bg-nw-surface/80 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-medium text-nw-primary">
              Designed for real-world constraints
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-nw-primary/80">
              Optimized for environments with intermittent power, limited space,
              and variable clinical infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


