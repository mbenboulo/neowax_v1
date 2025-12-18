export function ReadMoreCTA() {
  return (
    <section className="rounded-3xl bg-nw-section p-6 shadow-sm md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-nw-primary">Get Involved</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-nw-primary/85">
            We welcome collaboration with clinicians, researchers, NGOs, and
            partners who share our goal of improving neonatal care in
            low-resource settings.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:info@example.com"
            className="rounded-full bg-nw-primary px-6 py-2 text-sm font-semibold text-nw-surface shadow-sm transition hover:bg-nw-primary-strong"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="rounded-full border border-nw-primary/30 bg-nw-surface/80 px-6 py-2 text-sm font-semibold text-nw-primary shadow-sm transition hover:bg-nw-surface"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}


