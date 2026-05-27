import Image from "next/image";
import Link from "next/link";

const platformLinks = [
  { label: "CarePath", href: "/carepath" },
  { label: "Northstar Surgical Innovations", href: "/northstar-surgical-innovations" },
  { label: "SPEAR", href: "https://dashboard.strykefox.com" },
  { label: "Sensars", href: "/sensars" },
  { label: "SoC13", href: "/soc13" },
];

const carePathTags = [
  "Pre-Op",
  "Surgical",
  "Orthopedic",
  "Spine",
  "Biologics",
  "Maternal",
  "Mobility",
  "Wound",
  "El Cuidado",
  "Mommy Kit",
  "Post-Acute",
];

type ChapterProps = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  visual: "carepath" | "nsi" | "spear" | "sensars" | "soc13";
  tags?: string[];
  support?: string;
};

function Header() {
  return (
    <header className="sfm-header">
      <Link href="/" className="sfm-header-logo" aria-label="StrykeFox Medical home">
        <span className="sfm-fox-mark" />
        <span className="sfm-header-wordmark">
          <span>STRYKEFOX</span>
          <small>MEDICAL</small>
        </span>
      </Link>

      <nav className="sfm-nav" aria-label="Primary navigation">
        {platformLinks.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="sfm-hero sfm-hero-with-imagery">
      <div className="sfm-hero-water" />
      <div className="sfm-hero-sun" />
      <div className="sfm-hero-techgrid" />
      <div className="sfm-hero-photo-stack" aria-hidden="true">
        <div className="sfm-hero-photo sfm-hero-phone-photo">
          <Image src="/images/hero-healthcare.jpg" alt="" fill priority sizes="(max-width: 900px) 86vw, 480px" />
        </div>
        <div className="sfm-hero-photo sfm-hero-surgery-photo">
          <Image src="/images/surgical-hero.jpg" alt="" fill sizes="(max-width: 900px) 62vw, 330px" />
        </div>
      </div>
      <Header />

      <div className="sfm-hero-water" />
      <div className="sfm-hero-techgrid" />
      <div className="sfm-hero-sun" />

      <div className="sfm-hero-content">
        <div className="sfm-primary-logo" aria-label="StrykeFox Medical">
          <span className="sfm-primary-fox" />
          <div className="sfm-primary-wordmark">
            <span>STRY<span>K</span>EFOX</span>
            <small>MEDICAL</small>
          </div>
        </div>

        <h1>Healthcare infrastructure, engineered for what comes next.</h1>

        <p>CarePath. NSI. SPEAR. One operating platform.</p>

        <Link href="/carepath" className="sfm-hero-button">
          Enter Platform
          <span aria-hidden="true">›</span>
        </Link>
      </div>
    </section>
  );
}

function ChapterSection({
  id,
  eyebrow,
  title,
  body,
  cta,
  href,
  visual,
  tags,
  support,
}: ChapterProps) {
  return (
    <section id={id} className={`sfm-chapter sfm-chapter-${visual}`}>
      <div className="sfm-chapter-inner">
        <div className="sfm-chapter-copy">
          <div className="sfm-eyebrow">
            {eyebrow}
            <span />
          </div>

          <h2>{title}</h2>
          <p>{body}</p>

          {tags?.length ? (
            <div className="sfm-tags" aria-label={`${title} pathway tags`}>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          ) : null}

          {support ? (
            <div className="sfm-support-line">
              <span className="sfm-mini-trident" />
              <span>{support}</span>
            </div>
          ) : null}

          <a
            href={href}
            className="sfm-text-link"
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {cta}
            <span aria-hidden="true">›</span>
          </a>
        </div>

        <div className={`sfm-visual sfm-visual-${visual}`}>
          <div className="sfm-visual-overlay" />
          {visual === "carepath" && (
            <div className="sfm-clinical-scene">
              <div className="sfm-monitor">
                <span />
                <span />
                <span />
              </div>
              <div className="sfm-patient" />
              <div className="sfm-clinician" />
            </div>
          )}

          {visual === "nsi" && (
            <div className="sfm-nsi-scene">
              <span className="sfm-northstar-watermark">✦</span>
              <div className="sfm-blueprint-grid" />
              <div className="sfm-instrument sfm-instrument-main" />
              <div className="sfm-instrument sfm-instrument-small one" />
              <div className="sfm-instrument sfm-instrument-small two" />
            </div>
          )}

          {visual === "spear" && (
            <div className="sfm-spear-scene">
              <div className="sfm-data-field" />
              <div className="sfm-trident-mark">
                <span />
                <span />
                <span />
              </div>
              <div className="sfm-node n1" />
              <div className="sfm-node n2" />
              <div className="sfm-node n3" />
              <div className="sfm-node n4" />
            </div>
          )}

          {visual === "sensars" && (
            <div className="sfm-sensars-scene">
              <div className="sfm-sensars-overlay" />
            </div>
          )}

          {visual === "soc13" && (
            <div className="sfm-soc13-scene">
              <div className="sfm-column c1" />
              <div className="sfm-column c2" />
              <div className="sfm-column c3" />
              <div className="sfm-soc13-medallion">XIII</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="sfm-leadership">
      <div className="sfm-section-label">
        <span />
        PLATFORM LEADERSHIP
        <span />
      </div>

      <div className="sfm-leadership-grid">
        <article className="sfm-founder-card">
          <div className="sfm-founder-photo sfm-founder-adam">
            <span>AS</span>
          </div>
          <div>
            <h3>Adam Stryker</h3>
            <p>Platform Architect · Author</p>
            <a
              href="https://www.adamwstryker.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                border: "1px solid currentColor",
                padding: "0.35rem 0.75rem",
                borderRadius: "4px",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textDecoration: "none",
                marginTop: "0.5rem",
              }}
            >
              ↗ adamwstryker.com
            </a>
          </div>
        </article>

        <article className="sfm-founder-card">
          <div className="sfm-founder-photo sfm-founder-ben">
            <span>BF</span>
          </div>
          <div>
            <h3>Ben Fox</h3>
            <p>Co-Founder / Market Development</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sfm-footer">
      <div className="sfm-footer-main">
        <Link href="/" className="sfm-footer-logo" aria-label="StrykeFox Medical home">
          <span className="sfm-fox-mark" />
          <span className="sfm-header-wordmark">
            <span>STRYKEFOX</span>
            <small>MEDICAL</small>
          </span>
        </Link>

        <nav className="sfm-footer-nav" aria-label="Footer navigation">
          {platformLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="sfm-footer-bottom">
        <span>© 2025 StrykeFox Medical. All rights reserved.</span>
        <div>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="sfm-page">
      <Hero />

      <ChapterSection
        id="carepath"
        eyebrow="01 / CAREPATH"
        title="Care that follows the patient."
        body="From pre-op to recovery, CarePath organizes the healthcare lineage around documentation, coordination, and continuity."
        tags={carePathTags}
        cta="Explore CarePath"
        href="/carepath"
        visual="carepath"
      />

      <ChapterSection
        id="northstar"
        eyebrow="02 / NORTHSTAR SURGICAL INNOVATIONS"
        title="Innovation built around the operating room."
        body="NSI advances surgical tools, device commercialization, Ex-Im pathways, and emerging medical technologies designed for real-world clinical flow."
        cta="Explore NSI"
        href="/northstar-surgical-innovations"
        visual="nsi"
      />

      <ChapterSection
        id="spear"
        eyebrow="03 / SPEAR"
        title="Deployment intelligence behind the platform."
        body="SPEAR powers execution through integrated data capture, analysis, learning, and field deployment."
        support="Powered internally by Poseidon, Trident, and Aries."
        cta="Explore SPEAR"
        href="https://dashboard.strykefox.com"
        visual="spear"
      />

      <ChapterSection
        id="sensars"
        eyebrow="04 / SENSARS"
        title="Restore sensation before neuropathy becomes amputation."
        body="Closed-loop neurotechnology platform targeting the moment before diabetic neuropathy becomes ulcers, falls, and limb loss."
        support="268M at risk globally · $79B U.S. burden · FDA Breakthrough Device"
        cta="Explore Sensars"
        href="/sensars"
        visual="sensars"
      />

      <ChapterSection
        id="soc13"
        eyebrow="05 / SOC13"
        title="Expansion by design."
        body="SoC13 aligns verticals, integrates capabilities, and reduces friction across healthcare delivery."
        cta="Platform Expansion"
        href="/soc13"
        visual="soc13"
      />

      <Leadership />
      <Footer />
    </main>
  );
}
