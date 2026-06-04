"use client";

export default function SoC13Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="onepager-shell">
      <section className="onepager-hero">
        <div>
          <p className="section-eyebrow">SoC13</p>
          <h1 className="section-title">Assessment temporarily unavailable.</h1>
          <p className="section-body">
            The SoC13 route isolated an error before it could interrupt the StrykeFox Medical site.
          </p>
          <div className="hero-cta-group">
            <button type="button" className="btn-primary" onClick={reset}>
              Retry Assessment
            </button>
            <a href="/" className="btn-secondary">Back to StrykeFox</a>
          </div>
        </div>
      </section>
    </main>
  );
}
