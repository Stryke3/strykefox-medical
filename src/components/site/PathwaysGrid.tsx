import { ArrowRight } from 'lucide-react';

const pathways = [
  {
    label: 'CarePath',
    title: 'Surgical',
    description: 'Precision coordination for elective and complex surgical recovery.',
    icon: '🏥',
  },
  {
    label: 'CarePath',
    title: 'Orthopedic',
    description: 'Comprehensive musculoskeletal recovery across the continuum of care.',
    icon: '🦴',
  },
  {
    label: 'CarePath',
    title: 'Maternal',
    description: 'Specialized pathways for maternity and postnatal recovery.',
    icon: '👶',
  },
  {
    label: 'CarePath',
    title: 'Mobility',
    description: 'Robotic and mobility-enabled recovery with intelligent coordination.',
    icon: '🚶',
  },
  {
    label: 'CarePath',
    title: 'Wound',
    description: 'Advanced wound care coordination and outcomes monitoring.',
    icon: '🩹',
  },
  {
    label: 'CarePath',
    title: 'Post-Acute',
    description: 'Post-acute recovery continuity with seamless care transitions.',
    icon: '🏠',
  },
];

export function PathwaysGrid() {
  return (
    <section className="section-shell" id="pathways">
      <div className="glass-section">
        <p className="section-label">The Owned Pathways</p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {pathways.map((pathway, index) => (
            <article
              className="command-card group min-h-[230px]"
              key={pathway.title}
            >
              <div className="mb-5 text-sky-400">
                <span className="text-4xl">{pathway.icon}</span>
              </div>
              <p className="font-rajdhani text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                {pathway.label}
              </p>
              <h3 className="mt-1 font-rajdhani text-xl font-bold uppercase tracking-[0.14em] text-white">
                {pathway.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300/85">{pathway.description}</p>
              <span className="absolute bottom-4 right-4 grid h-8 w-8 place-items-center rounded-md border border-sky-300/15 bg-white/[0.035] text-sky-300 transition group-hover:border-sky-300/40 group-hover:bg-sky-500/10">
                <ArrowRight size={16} />
              </span>
              <span className="absolute right-4 top-4 font-rajdhani text-xs font-bold text-sky-400/20">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
