import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative isolate min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-14 lg:pb-12 lg:pt-28" id="platform">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(0,116,255,0.18),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(30,144,255,0.18),transparent_34%),linear-gradient(180deg,#020711_0%,#041021_52%,#020711_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(59,130,246,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.055)_1px,transparent_1px)] bg-[size:42px_42px] opacity-80" />
      <div className="hero-scan" />

      <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.78fr_1.22fr] xl:gap-14">
        <div className="relative z-10 max-w-2xl">
          <p className="micro-label mb-7">
            <span className="h-px w-8 bg-sky-500" />
            Healthcare Execution Infrastructure
          </p>

          <h1 className="font-rajdhani text-[clamp(4.5rem,8vw,8.2rem)] font-bold uppercase leading-[0.78] tracking-[0.015em] text-white">
            Care<span className="text-sky-500 drop-shadow-[0_0_24px_rgba(0,122,255,0.45)]">Path</span>
          </h1>

          <p className="mt-7 font-rajdhani text-xl font-semibold uppercase tracking-[0.42em] text-slate-300 sm:text-2xl">
            Verify <span className="text-sky-500">.</span> Document <span className="text-sky-500">.</span> Deliver
          </p>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300/90">
            CarePath is the recovery infrastructure layer between clinical need and the patient environment. We unify
            verification, documentation, coordination, and pathway control to ensure every patient receives the right
            care, at the right time, in the right setting.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a className="premium-button h-12 px-7" href="/carepath">
              Enter Platform
              <ArrowRight size={16} />
            </a>
            <a className="secondary-button h-12 px-7" href="#providers">
              For Providers
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 font-rajdhani text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            <ShieldCheck className="text-sky-500" size={17} />
            Trusted by providers. Built for outcomes.
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-2xl border border-sky-300/20 bg-[#030b16]/60 p-8 backdrop-blur-xl">
            <div className="aspect-square w-full max-w-md mx-auto">
              <Image
                src="/images/sfm-logo.jpeg"
                alt="StrykeFox Medical Platform" 
                width={420}
                height={420}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
