export function ReadMoreInnovative() {
  return (
    <section
      aria-labelledby="innovative-title"
      className="rounded-3xl bg-nw-section p-6 shadow-sm md:p-10"
    >
      <h2
        id="innovative-title"
        className="text-2xl font-medium text-nw-primary md:text-3xl"
      >
        Our Innovative Approach
      </h2>
      <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-base leading-relaxed text-nw-primary/85">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-nw-primary/60">
            Thermal Innovation with Beeswax
          </h3>
          <p>
            At the heart of the Neowax Incubator is a beeswax-based thermal
            buffer. Beeswax acts as a phase-change material, absorbing and
            releasing heat as it transitions between states. This helps keep the
            incubator environment within a safer temperature range even when
            ambient conditions fluctuate.
          </p>
          <p>
            By leveraging this natural property, we can reduce dependence on
            continuous active heating and complex control systems, lowering
            energy requirements and simplifying the hardware.
          </p>

          <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-nw-primary/60">
            Design for Low-Resource Settings
          </h3>
          <p>
            The incubator is designed to be robust, maintainable, and intuitive
            to use. Components are selected and arranged to tolerate variable
            power availability, limited spare parts, and real-world handling.
            The design also considers cleaning, disinfection, and training needs
            for busy clinical teams.
          </p>

          <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-nw-primary/60">
            Built for Transport and Field Use
          </h3>
          <p>
            Transport is a particularly vulnerable time for premature infants.
            Neowax aims to support safer transfers by enabling a stable,
            portable thermal environment. Modular configurations can be adapted
            for use in ambulances, between wards, or in outreach settings,
            helping keep preemies safer across the entire care journey.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl bg-nw-hero-alt p-5 sm:p-6 lg:p-7 shadow-sm text-sm md:text-base text-nw-primary/85">
          <h3 className="text-sm font-medium text-nw-primary">
            Development Journey
          </h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5">
            <li>
              <span className="font-medium">Concept &amp; exploration:</span>{" "}
              Identifying the key constraints and opportunities for simpler,
              more accessible incubator designs.
            </li>
            <li>
              <span className="font-medium">Prototype design:</span>{" "}
              Integrating beeswax-based thermal buffering with a mechanically
              simple incubator structure.
            </li>
            <li>
              <span className="font-medium">Iterative testing:</span>{" "}
              Refining performance based on thermal measurements, usability
              feedback, and simulated field conditions.
            </li>
            <li>
              <span className="font-medium">Pilot deployment:</span> Planning
              real-world evaluations in collaboration with clinicians and
              partner organizations.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}


