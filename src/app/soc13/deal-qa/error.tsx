"use client";

export default function DealQAError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="onepager-shell">
      <section className="onepager-hero">
        <div>
          <p className="section-eyebrow">SoC13 Deal Quality Assessment</p>
          <h1 className="section-title">Assessment temporarily unavailable.</h1>
          <p className="section-body">
            The deal-quality module isolated an error before it could affect the rest of the platform.
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
