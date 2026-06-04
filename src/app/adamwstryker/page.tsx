import { Bebas_Neue, Inter } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function HomePage() {
  return (
    <main
      className={`${bebas.variable} ${inter.variable} min-h-screen overflow-hidden bg-black text-white`}
    >
      <section className="relative min-h-screen bg-black">
        <Background />

        <Header />

        <Hero />

        <PlatformBanner />

        <AboutSection />
      </section>
    </main>
  );
}

function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/brand/panama-office-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        priority
        className="h-full w-full object-cover opacity-[0.58]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.96)_30%,rgba(0,0,0,0.42)_62%,rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_32%,rgba(0,92,255,0.16),transparent_27%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.12)_55%,#000_100%)]" />
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-40 flex h-[82px] items-center justify-between border-b border-white/10 bg-black/76 px-7 backdrop-blur-md md:px-12">
      <a href="/" className="flex items-center">
        <Image
          src="/brand/aws-logo.png"
          alt="Adam W. Stryker"
          width={180}
          height={48}
          className="h-[48px] w-auto object-contain"
        />
      </a>

      <nav className="hidden items-center gap-10 font-[var(--font-inter)] text-[12px] font-extrabold uppercase tracking-[0.16em] text-white/72 lg:flex">
        <a href="#about" className="transition hover:text-white">
          About
        </a>
        <a href="#platforms" className="transition hover:text-white">
          Platforms
        </a>
        <a href="#investments" className="transition hover:text-white">
          Investments
        </a>
        <a href="#author" className="transition hover:text-white">
          Author
        </a>
        <a href="#speaking" className="transition hover:text-white">
          Speaking
        </a>
        <a href="#media" className="transition hover:text-white">
          Media
        </a>
        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-8">
        <a
          href="#contact"
          className="hidden bg-[#005cff] px-8 py-4 font-[var(--font-inter)] text-[12px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_0_28px_rgba(0,92,255,0.38)] transition hover:bg-[#176dff] md:block"
        >
          Private Dossier
        </a>

        <button
          aria-label="Menu"
          className="flex h-8 w-8 flex-col justify-center gap-1.5"
        >
          <span className="h-[2px] w-8 bg-white/80" />
          <span className="h-[2px] w-8 bg-white/80" />
          <span className="h-[2px] w-8 bg-white/80" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-20 min-h-[620px] px-7 pb-8 pt-16 md:px-12 lg:pt-12">
      <div className="relative z-20 max-w-[560px]">
        <div className="mb-5 font-[var(--font-inter)] text-[12px] font-extrabold uppercase tracking-[0.36em] text-white/78">
          Operator. <span className="text-[#005cff]">Investor.</span>{" "}
          Systems Architect.
        </div>

        <div className="mb-7 h-[2px] w-[58px] bg-[#005cff]" />

        <h1 className="font-[var(--font-bebas)] text-[96px] leading-[0.82] tracking-[0.01em] text-white md:text-[142px] lg:text-[158px]">
          <span className="block">ADAM W.</span>
          <span className="block text-[#005cff]">STRYKER</span>
        </h1>

        <p className="mt-6 font-[var(--font-inter)] text-[18px] font-semibold leading-tight text-white/84 md:text-[20px]">
          Healthcare Operator. Investor. Systems Architect.
        </p>

        <div className="mt-6 h-[24px] w-[2px] rotate-[32deg] bg-[#005cff]" />

        <p className="mt-6 max-w-[455px] font-[var(--font-inter)] text-[15px] font-medium leading-[1.55] text-white/70 md:text-[16px]">
          Building compliance-first healthcare platforms across medical devices,
          surgical innovation, AI workflow infrastructure, private equity, and
          regulated services.
        </p>

        <div className="mt-8 flex flex-wrap gap-5">
          <a
            href="#contact"
            className="flex items-center gap-4 bg-[#005cff] px-8 py-4 font-[var(--font-inter)] text-[12px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_0_30px_rgba(0,92,255,0.34)] transition hover:bg-[#176dff]"
          >
            Private Dossier <span className="text-lg">↗</span>
          </a>

          <a
            href="#platforms"
            className="flex items-center gap-4 border border-white/32 bg-black/35 px-8 py-4 font-[var(--font-inter)] text-[12px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:border-white/70 hover:bg-white/5"
          >
            Media Kit <span className="text-lg">↗</span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-2px] right-[5%] z-10 hidden h-[640px] w-[560px] lg:block">
        <Image
          src="/brand/adam-hero.png"
          alt="Adam W. Stryker"
          width={560}
          height={640}
          priority
          className="absolute bottom-0 right-0 max-h-[640px] w-auto object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,0.86)]"
        />
      </div>

      <div className="absolute bottom-[58px] right-[7%] z-20 hidden text-right lg:block">
        <div className="font-[var(--font-inter)] text-[12px] font-semibold uppercase tracking-[0.42em] text-white/72">
          <span className="mr-3 text-[#005cff]">/</span> Relentless by Design.
        </div>
      </div>
    </section>
  );
}

function PlatformBanner() {
  return (
    <section id="platforms" className="relative z-40 bg-black px-3 md:px-5">
      <div className="mx-auto w-full max-w-[1920px]">
        <Image
          src="/brand/platform-banner.png"
          alt="Platforms I Build"
          width={1920}
          height={520}
          className="block h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 grid min-h-[330px] grid-cols-1 gap-0 bg-black px-7 py-14 md:px-12 lg:grid-cols-[30%_17%_17%_17%_19%]"
    >
      <div className="pr-10">
        <div className="mb-5 font-[var(--font-inter)] text-[12px] font-bold uppercase tracking-[0.36em] text-[#005cff]">
          About
        </div>

        <div className="mb-8 h-[2px] w-[70px] bg-[#005cff]" />

        <h2 className="font-[var(--font-bebas)] text-[64px] leading-[0.9] tracking-[0.01em] text-white md:text-[82px]">
          I Build What
          <br />
          Matters.
          <br />
          Then <span className="text-[#005cff]">Scale It.</span>
        </h2>
      </div>

      <InfoBlock
        icon="◎"
        title="Operator First"
        text="Hands-on executive with a track record of building, scaling, and turning platforms into leaders."
      />

      <InfoBlock
        icon="⚙"
        title="Systems Architect"
        text="Designing infrastructure that creates leverage, compliance, and compounding value."
      />

      <InfoBlock
        icon="↗"
        title="Investor Mindset"
        text="Backing teams and technologies that solve real problems and generate outsized returns."
      />

      <div className="relative mt-10 hidden overflow-hidden border border-white/10 lg:mt-0 lg:block">
        <Image
          src="/brand/gym-back.png"
          alt=""
          fill
          sizes="20vw"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}

function InfoBlock({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-l border-white/18 px-8 py-8">
      <div className="mb-6 font-[var(--font-inter)] text-[42px] leading-none text-[#005cff]">
        {icon}
      </div>

      <h3 className="mb-4 font-[var(--font-inter)] text-[12px] font-extrabold uppercase tracking-[0.14em] text-white">
        {title}
      </h3>

      <p className="max-w-[230px] font-[var(--font-inter)] text-[13px] leading-[1.6] text-white/62">
        {text}
      </p>
    </div>
  );
}
