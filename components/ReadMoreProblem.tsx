export function ReadMoreProblem() {
  return (
    <section
      aria-labelledby="problem-title"
      className="rounded-3xl bg-nw-hero-alt p-6 shadow-sm md:p-10"
    >
      <h2
        id="problem-title"
        className="text-2xl font-medium text-nw-primary md:text-3xl"
      >
        The Problem We Address
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-nw-primary/85">
        <p>
          Prematurity is a leading cause of neonatal mortality worldwide.
          Premature infants struggle to regulate their body temperature and can
          quickly become hypothermic without stable thermal support. In many
          regions, traditional incubators are either too expensive, difficult to
          maintain, or dependent on reliable power and infrastructure that may
          not exist.
        </p>
        <p>
          As a result, healthcare workers frequently improvise with blankets,
          warm water bottles, or skin-to-skin methods alone, which may not be
          sufficient during transport or in overcrowded facilities. These
          limitations contribute to preventable complications and deaths among
          some of the most vulnerable patients.
        </p>
        <div className="mt-4 grid gap-4 lg:gap-6 text-sm text-nw-primary/85 md:grid-cols-3">
          <div className="rounded-2xl bg-nw-surface/90 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-medium text-nw-primary">
              Healthcare infrastructure gaps
            </h3>
            <p className="mt-2 leading-relaxed">
              Many clinics lack the resources to purchase, operate, and maintain
              conventional incubators, especially in rural or low-income areas.
            </p>
          </div>
          <div className="rounded-2xl bg-nw-surface/90 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-medium text-nw-primary">
              Cost and complexity
            </h3>
            <p className="mt-2 leading-relaxed">
              High acquisition costs, complex electronics, and specialized
              maintenance limit the number of functional units available where
              they are needed most.
            </p>
          </div>
          <div className="rounded-2xl bg-nw-surface/90 p-4 sm:p-5 lg:p-6 shadow-sm">
            <h3 className="text-sm font-medium text-nw-primary">
              Risks during transport
            </h3>
            <p className="mt-2 leading-relaxed">
              Moving premature infants between facilities or levels of care
              introduces additional thermal risk when stable, portable incubator
              options are not available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


