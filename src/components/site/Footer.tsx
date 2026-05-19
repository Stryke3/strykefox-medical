export function Footer() {
  return (
    <footer className="px-5 py-10 sm:px-8 lg:px-14" id="maternal">
      <div className="mx-auto max-w-[1500px] border-t border-sky-300/10 pt-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-rajdhani text-2xl font-bold tracking-[0.18em] text-white">
              STRYKE<span className="text-sky-500">FOX</span>
            </div>
            <p className="mt-2 font-rajdhani text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              CarePath Infrastructure Platform
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Healthcare infrastructure, engineered for what comes next.
            </p>
          </div>

          <div>
            <h3 className="font-rajdhani text-sm font-bold uppercase tracking-[0.22em] text-slate-400 mb-4">Platform</h3>
            <nav className="flex flex-col gap-2" aria-label="Platform links">
              <a className="footer-link" href="/carepath">CarePath</a>
              <a className="footer-link" href="/northstar-surgical-innovations">Northstar Surgical Innovations</a>
              <a className="footer-link" href="/spear">SPEAR</a>
              <a className="footer-link" href="/soc13">SoC13</a>
            </nav>
          </div>

          <div>
            <h3 className="font-rajdhani text-sm font-bold uppercase tracking-[0.22em] text-slate-400 mb-4">External</h3>
            <nav className="flex flex-col gap-2" aria-label="External links">
              <a className="footer-link" href="https://www.adamwstryker.com" target="_blank" rel="noopener noreferrer">Adam Stryker</a>
              <a className="footer-link" href="https://www.sensars.com" target="_blank" rel="noopener noreferrer">Sensars</a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sky-300/10 text-center">
          <p className="text-sm text-slate-500">© 2026 StrykeFox Medical LLC</p>
        </div>
      </div>
    </footer>
  );
}
