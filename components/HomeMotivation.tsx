export function HomeMotivation() {
  return (
    <section
      id="motivation"
      className="grid gap-10 rounded-3xl bg-nw-section p-6 shadow-sm md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:p-10"
      aria-labelledby="motivation-title"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-nw-primary/60">
          Motivation
        </p>
        <h2
          id="motivation-title"
          className="text-2xl font-medium text-nw-primary md:text-3xl"
        >
          Why Neowax?
        </h2>
        <p className="text-base leading-relaxed text-nw-primary/80">
          Premature infants face significant challenges in thermoregulation. Our
          project aims to make incubators accessible to all by reducing costs
          through innovative design.
        </p>
        <ul className="mt-2 space-y-2 text-sm text-nw-primary/80">
          <li>
            <span className="font-semibold">Limited access:</span> Many
            communities lack affordable incubator technology.
          </li>
          <li>
            <span className="font-semibold">Thermoregulation challenges:</span>{" "}
            Preemies are highly vulnerable to temperature swings.
          </li>
          <li>
            <span className="font-semibold">Cost barriers:</span> Traditional
            incubators are expensive to purchase and maintain.
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-black/5 bg-nw-surface shadow-md md:max-w-md lg:max-w-lg">
          <img
            src="/Neowax%20Illustration%20light.png"
            alt="Illustration of Neowax incubator supporting premature infants"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}


