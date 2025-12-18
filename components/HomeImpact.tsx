export function HomeImpact() {
  return (
    <section
      id="impact"
      className="rounded-3xl bg-nw-section p-6 shadow-sm md:p-10"
      aria-labelledby="impact-title"
    >
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nw-primary/60">
            Impact
          </p>
          <h2
            id="impact-title"
            className="text-2xl font-semibold text-nw-primary md:text-3xl"
          >
            Projected Impact
          </h2>
          <p className="mt-3 text-base leading-relaxed text-nw-primary/80">
            Our incubator aims to reduce infant mortality and make safe
            transport of preemies possible in all communities.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:gap-6">
          <div className="flex flex-col gap-2 rounded-2xl bg-nw-surface/80 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-nw-primary">
              Reduced mortality
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-nw-primary/80">
              Providing thermally stable environments can prevent
              temperature-related complications that contribute to infant
              mortality.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-nw-surface/80 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-nw-primary">
              Increased access
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-nw-primary/80">
              Lower costs and simplified design make it easier for rural clinics
              and low-resource hospitals to provide incubator care.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-nw-surface/80 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-nw-primary">
              Safer transport
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-nw-primary/80">
              Transport-ready configurations help maintain safe conditions when
              premature infants move between facilities or levels of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


