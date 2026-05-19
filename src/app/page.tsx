import "./homepage.css";
import Image from "next/image";
import Link from "next/link";

/* ── NAV ─────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Image src="/images/sfm-fox.jpeg" alt="StrykeFox Medical" width={36} height={36} />
        <div className="nav-logo-text">
          <span className="top">STRYKEFOX</span>
          <span className="bot">MEDICAL</span>
        </div>
      </div>

      <div className="nav-links">
        <Link href="/carepath">CarePath</Link>
        <Link href="/northstar-surgical-innovations">NSI</Link>
        <a href="https://dashboard.strykefox.com" target="_blank" rel="noopener noreferrer">
          SPEAR
        </a>
        <Link href="/soc13">SoC13</Link>
      </div>

      <Link href="/carepath" className="nav-cta">
        Request Access
      </Link>
    </nav>
  );
}

/* ── SPHERE ──────────────────────────────────────────────── */

function Sphere() {
  return (
    <div className="sphere-wrap">
      <div className="sphere-glow" />
      <div className="sphere">
        <div className="sphere-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
            <circle cx="32" cy="32" r="13" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" />
            <circle cx="32" cy="32" r="4" fill="rgba(255,255,255,0.82)" />
            <line x1="32" y1="4" x2="32" y2="60" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
            <line x1="4" y1="32" x2="60" y2="32" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
            <line x1="11" y1="11" x2="53" y2="53" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line x1="53" y1="11" x2="11" y2="53" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          </svg>
        </div>
      </div>
      <Link href="/carepath" className="sphere-pill">
        <span>Explore Platform</span>
        <span className="pill-arrow">
          <svg viewBox="0 0 9 9" fill="none" stroke="#fff" strokeWidth="1.6">
            <path d="M2 7L7 2" />
            <path d="M4 2h3v3" />
          </svg>
        </span>
      </Link>
    </div>
  );
}

/* ── MOCKUPS ─────────────────────────────────────────────── */

function Mockups() {
  return (
    <div className="mockup-row">
      <div className="mockup-tablet">
        <div className="mockup-bar">
          <div className="dot" />
          <span>CarePath — Patient Dashboard</span>
        </div>
        <div className="mockup-body">
          <div className="mrow a" />
          <div className="mrow b" />
          <div className="mrow c" />
          <div className="mrow g" />
          <div className="mgrid">
            <div className="mc x" />
            <div className="mc" />
            <div className="mc y" />
            <div className="mc" />
            <div className="mc" />
            <div className="mc x" />
            <div className="mc" />
            <div className="mc y" />
          </div>
        </div>
      </div>

      <div className="mockup-phone">
        <div className="phone-bar">SFM</div>
        <div className="phone-body">
          <div className="prow p" />
          <div className="prow q" />
          <div className="prow" />
          <div className="prow" />
          <div className="prow q" />
        </div>
      </div>
    </div>
  );
}

/* ── HERO ────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero">
      {/* Left — dark photo panel */}
      <div className="hero-left">
        <div className="hero-left-photo">
          <Image
            src="/images/nurse-patient.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="hero-left-overlay" />

        <div className="hero-left-inner">
          <h1 className="hero-headline">
            CarePath organizes the journey. Healthcare Lineage scales the platform.
          </h1>

          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-label">
                Healthcare Lineage
                <span className="sub">CarePath</span>
              </div>
              <div className="feature-body">
                Pre-op through post-acute — every pathway documented, coordinated, and tracked.
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-label">
                Platform Intelligence
                <span className="sub">SPEAR</span>
              </div>
              <div className="feature-body">
                Trident AI scoring, Poseidon storage, and Aries field deployment in one loop.
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-label">
                Surgical Innovation
                <span className="sub">NSI</span>
              </div>
              <div className="feature-body">
                Device commercialization and Ex-Im pathways built for real OR workflow.
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-label">
                Compliance Engine
                <span className="sub">SoC13</span>
              </div>
              <div className="feature-body">
                Automated regulatory compliance and HIPAA billing validation across all verticals.
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <strong>4</strong> active verticals
            </div>
            <div className="stat-item">
              <strong>HIPAA</strong> compliant by design
            </div>
            <div className="stat-item">
              <strong>2026</strong> fully deployed
            </div>
          </div>
        </div>
      </div>

      {/* Right — blue-grey sphere panel */}
      <div className="hero-right">
        <div className="hero-right-bg" />
        <div className="right-inner">
          <p className="right-label">Platform Intelligence</p>
          <Sphere />
          <Mockups />
          <Link href="/carepath" className="explore-cta">
            Enter Platform
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 12L12 2" />
              <path d="M7 2h5v5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── PRODUCT SECTIONS ────────────────────────────────────── */

type MetaItem = { label: string; text: string };

type SectionProps = {
  num: string;
  eyebrow: string;
  title: string;
  lead: string;
  meta: MetaItem[];
  cta: string;
  href: string;
  img: string;
  imgAlt: string;
  reversed?: boolean;
};

function Section({ num, eyebrow, title, lead, meta, cta, href, img, imgAlt, reversed }: SectionProps) {
  const isExternal = href.startsWith("http");

  const copy = (
    <div>
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2 className="sec-h2">{title}</h2>
      <p className="sec-lead">{lead}</p>
      <div className="sec-meta">
        {meta.map((m) => (
          <div key={m.label}>
            <strong>{m.label}</strong>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
      {isExternal ? (
        <a href={href} className="sec-btn" target="_blank" rel="noopener noreferrer">
          {cta} <span aria-hidden="true">→</span>
        </a>
      ) : (
        <Link href={href} className="sec-btn">
          {cta} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );

  const visual = (
    <div className="sec-visual">
      <Image src={img} alt={imgAlt} fill style={{ objectFit: "cover" }} />
      <span className="vis-label">{eyebrow}</span>
    </div>
  );

  return (
    <section className="section">
      <span className="sec-num" aria-hidden="true">
        {num}
      </span>
      <div className="sec-inner">
        {reversed ? (
          <>
            {visual}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-eyebrow">Platform Operating System</div>
          <h3 className="footer-h3">One OS. Four Verticals. Zero Compromise.</h3>
          <p className="footer-body">
            StrykeFox Medical builds precision infrastructure for regulated healthcare. CarePath,
            NSI, SPEAR, and SoC13 operate as one integrated platform — engineered for clinical
            reality, scaled by design.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/carepath">CarePath</Link>
          <Link href="/northstar-surgical-innovations">Northstar Surgical Innovations</Link>
          <a href="https://dashboard.strykefox.com" target="_blank" rel="noopener noreferrer">
            SPEAR Dashboard
          </a>
          <Link href="/soc13">SoC13</Link>
          <a href="https://www.adamwstryker.com" target="_blank" rel="noopener noreferrer">
            Adam Stryker
          </a>
        </nav>
      </div>

      <div className="footer-bottom">
        <Image
          src="/images/sfm-fox.jpeg"
          alt="StrykeFox Medical"
          width={22}
          height={22}
          className="fox"
        />
        <span>© 2026 StrykeFox Medical. All rights reserved.</span>
      </div>
    </footer>
  );
}

/* ── PAGE ────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="sfx-homepage">
      <Nav />
      <Hero />

      <Section
        num="01"
        eyebrow="CarePath"
        title="Care that follows the patient."
        lead="From pre-op to recovery, CarePath organizes healthcare lineage around documentation, coordination, and continuity — across every pathway and every site of care."
        meta={[
          {
            label: "Healthcare Lineage",
            text: "Every patient interaction captured and tracked across the full care continuum.",
          },
          {
            label: "Pathway Coverage",
            text: "Pre-Op, Surgical, Orthopedic, Spine, Biologics, Maternal, Wound, Post-Acute.",
          },
          {
            label: "Bilingual Portals",
            text: "Mommy Kit (English) and El Cuidado de Maternidad (Spanish) — built-in.",
          },
          {
            label: "Integrated Billing",
            text: "HIPAA-compliant documentation with EDI 837P/835 billing loop.",
          },
        ]}
        cta="Explore CarePath"
        href="/carepath"
        img="/images/nurse-patient.jpg"
        imgAlt="Nurse and patient — CarePath care coordination"
      />

      <Section
        num="02"
        eyebrow="Northstar Surgical Innovations"
        title="Innovation built around the operating room."
        lead="NSI advances surgical tools, device commercialization, Ex-Im pathways, and emerging medical technologies designed for real-world clinical flow — not adapted to it."
        meta={[
          {
            label: "Device Commercialization",
            text: "Surgical instrument pipeline from concept through regulatory clearance.",
          },
          {
            label: "Ex-Im Pathways",
            text: "International distribution frameworks and logistics for medical devices.",
          },
          {
            label: "OR Integration",
            text: "Tools engineered for surgical workflow with minimal adaptation overhead.",
          },
          {
            label: "NSI Platform",
            text: "Unified device and supply management across the full NSI portfolio.",
          },
        ]}
        cta="Explore NSI"
        href="/northstar-surgical-innovations"
        img="/images/surgical-instruments.jpg"
        imgAlt="Surgical instruments — Northstar Surgical Innovations"
        reversed
      />

      <Section
        num="03"
        eyebrow="SPEAR"
        title="Deployment intelligence behind the platform."
        lead="SPEAR powers execution through integrated data capture, Trident AI revenue-risk scoring, field deployment, and continuous learning across the entire Stryker OS."
        meta={[
          {
            label: "Poseidon Core",
            text: "Central storage layer — patient records, billing data, and API routing.",
          },
          {
            label: "Trident AI",
            text: "Revenue risk scoring, predictive analytics, and intelligent aggregates.",
          },
          {
            label: "Aries Deploy",
            text: "Field-level deployment and automated health monitoring for the full stack.",
          },
          {
            label: "EDI Integration",
            text: "837P/835 billing loop via STEDI with real-time claim validation.",
          },
        ]}
        cta="Explore SPEAR"
        href="https://dashboard.strykefox.com"
        img="/images/spear-hero.jpg"
        imgAlt="SPEAR platform intelligence dashboard"
      />

      <Section
        num="04"
        eyebrow="SoC13"
        title="Expansion by design."
        lead="SoC13 aligns verticals, integrates capabilities, and reduces friction across healthcare delivery — the compliance engine that makes the platform scale without breaking."
        meta={[
          {
            label: "Automated Compliance",
            text: "Regulatory documentation generated at the point of care, not after.",
          },
          {
            label: "Vertical Integration",
            text: "Connecting CarePath, NSI, and SPEAR into one unified compliance layer.",
          },
          {
            label: "Billing Validation",
            text: "HIPAA-compliant EDI validation with real-time rejection handling.",
          },
          {
            label: "Full Audit Trail",
            text: "Complete lineage from patient intake through claim adjudication.",
          },
        ]}
        cta="Explore SoC13"
        href="/soc13"
        img="/images/architectural-columns.jpg"
        imgAlt="SoC13 compliance architecture"
        reversed
      />

      <Footer />
    </main>
  );
}
