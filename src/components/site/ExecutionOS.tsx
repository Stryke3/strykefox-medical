import { ArrowRight } from 'lucide-react';

const osEngines = [
  {
    name: 'Poseidon',
    label: 'Data & Orchestration Layer',
    description:
      'The foundational data ocean that unifies systems, normalizes information, and orchestrates the flow of care across the ecosystem.',
    icon: '🌊',
  },
  {
    name: 'Trident',
    label: 'Intelligence Layer',
    description:
      'AI-driven intelligence that interprets signals, predicts needs, and informs optimal pathway decisions without exposing internal mechanics.',
    icon: '🔱',
  },
  {
    name: 'Aries',
    label: 'Deployment & Execution Layer',
    description:
      'The execution engine that deploys workflows, coordinates networks, and drives measurable outcomes across the care continuum.',
    icon: '⚡',
  },
];

export function ExecutionOS() {
  return (
    <section className="section-shell pt-0" id="technology">
      <div className="glass-section">
        <p className="section-label">The Healthcare Execution OS.</p>
        <div className="grid gap-3 lg:grid-cols-3">
          {osEngines.map((engine) => (
            <article
              className="os-card group"
              key={engine.name}
            >
              <div className="relative z-10 flex gap-6">
                <div className="shrink-0 text-cyan-300">
                  <span className="text-5xl">{engine.icon}</span>
                </div>
                <div>
                  <h3 className="font-rajdhani text-2xl font-bold uppercase tracking-[0.22em] text-white">
                    {engine.name}
                  </h3>
                  <p className="mt-1 font-rajdhani text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                    {engine.label}
                  </p>
                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-300/90">{engine.description}</p>
                </div>
              </div>
              <span className="absolute bottom-5 right-5 grid h-9 w-9 place-items-center rounded-md border border-sky-300/15 bg-white/[0.035] text-sky-300 transition group-hover:border-sky-300/40 group-hover:bg-sky-500/10">
                <ArrowRight size={16} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
