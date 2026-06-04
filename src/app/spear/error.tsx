"use client";

export default function SpearError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="spear-login-shell">
      <section className="spear-login-card" aria-labelledby="spear-error-title">
        <div className="spear-login-heading">
          <div className="spear-login-eyebrow">SPEAR</div>
          <h1 id="spear-error-title">Access temporarily unavailable.</h1>
          <p className="spear-login-copy">
            The login surface isolated an error before it could affect the rest of StrykeFox Medical.
          </p>
        </div>
        <button type="button" onClick={reset}>
          Retry SPEAR
        </button>
      </section>
    </main>
  );
}
