"use client";

import { useState, FormEvent } from "react";

export function ReadMoreCTA() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setMessage(null);
    setError(null);

    const formData = new FormData(form);
    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      profession: formData.get("profession")?.toString() || "",
      comment: formData.get("comment")?.toString() || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        return;
      }

      setError(null);
      setMessage("Your message has been sent. Thank you!");
      form.reset();
      setOpen(false);
      setShowThanks(true);
      window.setTimeout(() => setShowThanks(false), 3000);
    } catch (err: any) {
      console.error("Contact form request failed", err);
      setMessage(null);
      setError(
        err instanceof Error && err.message
          ? `Failed to send message. Please try again.`
          : "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl bg-nw-section p-6 shadow-sm md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-medium text-nw-primary">Get Involved</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-nw-primary/85">
            We welcome collaboration with clinicians, researchers, NGOs, and
            partners who share our goal of improving neonatal care in
            low-resource settings.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full bg-nw-primary px-6 py-2 text-sm font-medium text-nw-surface shadow-sm transition hover:bg-nw-primary-strong"
          >
            Contact Us
          </button>
          <a
            href="/"
            className="rounded-full border border-nw-primary/30 bg-nw-surface/80 px-6 py-2 text-sm font-medium text-nw-primary shadow-sm transition hover:bg-nw-surface"
          >
            Back to Home
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-nw-surface p-6 shadow-lg">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-nw-primary">
                  Contact Neowax Team
                </h3>
                <p className="mt-1 text-xs text-nw-primary/70">
                  Share your interest or questions and we&apos;ll get back to
                  you by email.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setMessage(null);
                  setError(null);
                }}
                className="rounded-full border border-black/10 px-2 py-1 text-xs font-medium text-nw-primary hover:bg-black/5"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex flex-col gap-1 text-sm">
                    <label htmlFor="name" className="font-medium text-nw-primary">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-nw-primary outline-none ring-0 focus:border-nw-primary focus:ring-1 focus:ring-nw-primary/40"
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <label
                    htmlFor="email"
                    className="font-medium text-nw-primary"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-nw-primary outline-none ring-0 focus:border-nw-primary focus:ring-1 focus:ring-nw-primary/40"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label
                  htmlFor="profession"
                  className="font-medium text-nw-primary"
                >
                  Profession
                </label>
                <select
                  id="profession"
                  name="profession"
                  className="rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-nw-primary outline-none ring-0 focus:border-nw-primary focus:ring-1 focus:ring-nw-primary/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your profession
                  </option>
                  <option value="Clinician / Healthcare worker">
                    Clinician / Healthcare worker
                  </option>
                  <option value="Researcher / Academic">
                    Researcher / Academic
                  </option>
                  <option value="NGO / Non-profit">
                    NGO / Non-profit
                  </option>
                  <option value="Engineer / Technologist">
                    Engineer / Technologist
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label
                  htmlFor="comment"
                  className="font-medium text-nw-primary"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  required
                  rows={4}
                  className="rounded-xl border border-black/15 bg-white px-3 py-2 text-sm text-nw-primary outline-none ring-0 focus:border-nw-primary focus:ring-1 focus:ring-nw-primary/40"
                />
              </div>

              {error && (
                <p className="text-xs font-medium text-red-700">{error}</p>
              )}

              <div className="mt-2 flex justify-end gap-3 text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setMessage(null);
                    setError(null);
                  }}
                  className="rounded-full border border-nw-primary/30 bg-white px-5 py-2 font-medium text-nw-primary hover:bg-black/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-nw-primary px-6 py-2 font-medium text-nw-surface shadow-sm transition hover:bg-nw-primary-strong disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showThanks && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="max-w-sm rounded-3xl bg-nw-surface p-6 text-center shadow-2xl">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-nw-primary/10">
              <span className="text-2xl text-nw-primary">✓</span>
            </div>
            <h3 className="text-lg font-medium text-nw-primary">
              Message sent
            </h3>
            <p className="mt-2 text-sm text-nw-primary/80">
              Thank you for reaching out. We&apos;ll get back to you by email
              as soon as we can.
            </p>
            <button
              type="button"
              onClick={() => setShowThanks(false)}
              className="mt-4 rounded-full bg-nw-primary px-6 py-2 text-sm font-medium text-nw-surface shadow-sm hover:bg-nw-primary-strong"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

