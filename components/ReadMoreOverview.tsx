export function ReadMoreOverview() {
  return (
    <section
      aria-labelledby="overview-title"
      className="rounded-3xl bg-nw-section p-6 shadow-sm md:p-10"
    >
      <h2
        id="overview-title"
        className="text-2xl font-medium text-nw-primary md:text-3xl"
      >
        Project Overview
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-nw-primary/85">
        <p>
          Neowax Incubator is an initiative to re-think neonatal incubators from
          the ground up. Instead of relying on complex, expensive machinery, the
          design emphasizes natural thermal buffering, simple mechanics, and
          materials that are accessible and maintainable in low-resource
          environments.
        </p>
        <p>
          The core mission is to make life-saving thermal support for premature
          infants available to all communities, regardless of their
          infrastructure or purchasing power. By strategically simplifying the
          design and focusing on what matters most for infant safety, Neowax
          aims to bridge a critical care gap in global health.
        </p>
        <p className="rounded-2xl bg-nw-hero-alt p-4 sm:p-5 lg:p-6 text-sm md:text-base font-medium text-nw-primary">
          “Every premature infant deserves a safe start, regardless of geography
          or income.”
        </p>
      </div>
    </section>
  );
}


