const trustItems = [
  {
    title: 'HIPAA Compliant',
    description: 'Patient privacy protected',
    icon: '🛡️',
  },
  {
    title: 'Encrypted & Audited',
    description: 'End-to-end data protection',
    icon: '🔒',
  },
  {
    title: 'SOC 2 Type II',
    description: 'Security & availability validated',
    icon: '✓',
  },
  {
    title: 'Built for Healthcare',
    description: 'Trusted. Secure. Compliant.',
    icon: '🏥',
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-sky-300/10 bg-[#030b16]/90 px-5 py-8 sm:px-8 lg:px-14" id="providers">
      <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2 xl:grid-cols-4">
        {trustItems.map((item) => (
          <div className="flex items-center gap-5 border-sky-300/10 xl:border-r xl:last:border-r-0" key={item.title}>
            <span className="shrink-0 text-slate-300 text-2xl">{item.icon}</span>
            <div>
              <p className="font-rajdhani text-sm font-bold uppercase tracking-[0.2em] text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
