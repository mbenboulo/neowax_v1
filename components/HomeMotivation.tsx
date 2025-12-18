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
          project focuses on three core barriers that prevent many babies from
          receiving safe incubator care.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid w-full max-w-sm gap-4 rounded-2xl border border-black/5 bg-nw-surface p-4 shadow-md md:max-w-md lg:max-w-lg">
          <div className="flex items-center gap-3 rounded-2xl bg-nw-page px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nw-primary text-nw-accent">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  d="M12 2.75a6.25 6.25 0 0 0-6.25 6.25c0 4.19 3.9 7.84 5.87 9.37a1.6 1.6 0 0 0 1.76 0c1.97-1.53 5.87-5.18 5.87-9.37A6.25 6.25 0 0 0 12 2.75Zm0 3a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z"
                  fill="currentColor"
                />
                <path
                  d="M4 20.25a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5H4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-xs leading-snug text-nw-primary/85">
              <p className="font-medium">Limited Access</p>
              <p>Many communities still have no reliable incubator nearby.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-nw-page px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nw-primary text-nw-accent">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  d="M10 4a2 2 0 1 1 4 0v7.34a4.25 4.25 0 1 1-4 0V4Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6.5V4.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="text-xs leading-snug text-nw-primary/85">
              <p className="font-medium">Thermoregulation</p>
              <p>Preemies are extremely vulnerable to temperature swings.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-nw-page px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nw-primary text-nw-accent">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  d="M6 7.5h8.75A3.25 3.25 0 0 1 18 10.75v.5A3.75 3.75 0 0 1 14.25 15H6m0-7.5V5.25A1.25 1.25 0 0 1 7.25 4h9.5A1.25 1.25 0 0 1 18 5.25V7.5m-12 0V19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-xs leading-snug text-nw-primary/85">
              <p className="font-medium">Cost Barriers</p>
              <p>Conventional incubators are costly to buy and maintain.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


