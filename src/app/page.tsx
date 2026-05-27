"use client";

const doctrine = [
  {
    label: "VERIFY",
    platform: "BENEFITS",
    desc: "Eligibility confirmed before a single product moves. Provider-directed. Documentation-backed.",
  },
  {
    label: "DOCUMENT",
    platform: "PATHWAY",
    desc: "Documentation packets built to payer standards. Compliance-forward. Audit-ready at every step.",
  },
  {
    label: "COORDINATE",
    platform: "FULFILLMENT",
    desc: "Product coordination, delivery scheduling, and proof-of-delivery capture handled end to end.",
  },
  {
    label: "DELIVER",
    platform: "READY",
    desc: "Billing-ready packet assembled. Providers stay focused on care. CarePath manages the workflow.",
  },
];

const platforms = [
  {
    name: "CarePath",
    desc: "Recovery coordination infrastructure — verification, documentation, fulfillment, and billing-ready packet assembly.",
    href: "https://carepath.strykefox.com",
  },
  {
    name: "SPEAR",
    desc: "Trident AI scoring, Poseidon storage, and Aries field deployment in one continuous intelligence loop.",
    href: "/platform",
  },
  {
    name: "NorthStar Surgical",
    desc: "Surgical device commercialization, implant-adjacent support, and OR workflow infrastructure.",
    href: "https://northstar.strykefox.com",
  },
  {
    name: "Maternity",
    desc: "Pregnancy and postpartum recovery coordination — provider-directed, compliance-safe, bilingual.",
    href: "https://mommycarekit.strykefox.com",
  },
  {
    name: "SoC13",
    desc: "HIPAA billing validation, audit trail generation, and regulatory compliance across all verticals.",
    href: "https://soc13.strykefox.com",
  },
  {
    name: "StrykePac Ex-Im SA",
    desc: "Compliant cross-border distribution for DME, biologics, and implants — built for real OR procurement.",
    href: "/strykepac",
  },
];

const verticals = [
  {
    name: "CarePath",
    tag: "RECOVERY COORDINATION",
    headline: "Between the clinical trigger and the patient's recovery environment.",
    body: "CarePath verifies the need, documents the pathway, coordinates fulfillment, captures proof of delivery, and assembles the billing-ready packet. Providers identify the clinical need. CarePath manages the operating workflow behind the scenes.",
    cta: "Enter CarePath",
    href: "https://carepath.strykefox.com",
    dark: false,
  },
  {
    name: "SPEAR",
    tag: "PLATFORM INTELLIGENCE",
    headline: "Score risk before it becomes revenue loss.",
    body: "Trident AI scoring, Poseidon storage, and Aries field deployment operate in one continuous intelligence loop. No handoffs. No gaps. Operational visibility across every active patient episode and provider account.",
    cta: "Enter SPEAR",
    href: "/platform",
    dark: true,
  },
  {
    name: "NorthStar Surgical",
    tag: "SURGICAL INNOVATION",
    headline: "Device commercialization built for the OR floor.",
    body: "NorthStar Innovations builds Ex-Im pathways and commercializes surgical devices around real operating room workflow and case volume. Case-ready support. Documentation discipline. Built for surgeons, surgical practices, and ASCs.",
    cta: "Enter NorthStar",
    href: "https://northstar.strykefox.com",
    dark: false,
  },
  {
    name: "Maternity",
    tag: "CAREPATH MATERNAL",
    headline: "Maternal recovery coordination, done correctly.",
    body: "CarePath Maternal helps women's health clinics coordinate pregnancy and postpartum recovery products through provider-directed documentation, benefit verification, and fulfillment support. Available in English and Spanish.",
    cta: "Enter Maternity",
    href: "https://mommycarekit.strykefox.com",
    dark: true,
  },
  {
    name: "SoC13",
    tag: "COMPLIANCE ENGINE",
    headline: "Documentation that defends itself.",
    body: "Automated HIPAA billing validation, audit trail generation, and regulatory compliance across every vertical. Always current. Always billing-ready. Built to stay aligned with payer policy, documentation standards, and reimbursement requirements.",
    cta: "Enter SoC13",
    href: "https://soc13.strykefox.com",
    dark: false,
  },
  {
    name: "StrykePac Ex-Im SA",
    tag: "EXPORT & IMPORT",
    headline: "Surgical technology with global distribution infrastructure.",
    body: "Compliant cross-border distribution for DME, biologics, and implants — structured for real international OR procurement. Documentation and compliance built in from day one. A serious operating partner for regulated healthcare execution.",
    cta: "Enter StrykePac",
    href: "/strykepac",
    dark: true,
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; overflow: hidden; }
        .sfm-scroll {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }
        .sfm-section {
          height: 100vh;
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        .platform-card {
          display: flex;
          flex-direction: column;
          padding: 16px 20px;
          border-left: 2px solid rgba(255,255,255,0.06);
          text-decoration: none;
          transition: border-color 0.2s ease;
        }
        .platform-card:hover {
          border-left-color: #2563eb;
        }
        .doctrine-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 32px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .doctrine-col:last-child {
          border-right: none;
        }
        .nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #0a0a0a;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 0.5; }
        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          padding-bottom: 4px;
          border-bottom: 1px solid;
          transition: opacity 0.2s;
        }
        .cta-link:hover { opacity: 0.6; }
      `}</style>

      <div className="sfm-scroll">

        {/* SECTION 1: HERO */}
        <section className="sfm-section" style={{ display: "flex", flexDirection: "column" }}>

          {/* NAV */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 64px",
            background: "#ffffff",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            zIndex: 10,
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.1em",
              color: "#0a0a0a",
            }}>
              STRYKEFOX MEDICAL
            </span>
            <nav style={{ display: "flex", gap: "36px" }}>
              {[
                { label: "Platform", href: "/platform" },
                { label: "Verticals", href: "#verticals" },
                { label: "Compliance", href: "https://soc13.strykefox.com" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* SPLIT HERO */}
          <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

            {/* LEFT: WHITE */}
            <div style={{
              flex: "0 0 58%",
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "48px 72px 32px",
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#2563eb",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}>
                StrykeFox Medical / Poseidon OS
              </p>
              <h1 style={{
                fontFamily: "'Inter Tight', Inter, sans-serif",
                fontSize: "clamp(34px, 3.8vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.07,
                color: "#0a0a0a",
                marginBottom: "22px",
                maxWidth: "540px",
              }}>
                Care-pathway infrastructure for modern healthcare recovery.
              </h1>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                color: "#9ca3af",
                marginBottom: "44px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                Verified. Documented. Delivered.
              </p>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <a href="https://carepath.strykefox.com" style={{
                  display: "inline-block",
                  background: "#0a0a0a",
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "14px 30px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}>
                  Enter Platform
                </a>
                <a href="/platform" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#6b7280",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                }}>
                  View all verticals &rarr;
                </a>
              </div>
            </div>

            {/* RIGHT: DARK NAVY */}
            <div style={{
              flex: "0 0 42%",
              background: "#090E1C",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "32px 40px 32px 44px",
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.14em",
                color: "#2563eb",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}>
                Active Verticals
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {platforms.map((p) => (
                  <a key={p.name} href={p.href} className="platform-card">
                    <span style={{
                      fontFamily: "'Inter Tight', Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "3px",
                    }}>
                      {p.name}
                    </span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11.5px",
                      color: "rgba(255,255,255,0.42)",
                      lineHeight: 1.55,
                    }}>
                      {p.desc}
                    </span>
                  </a>
                ))}
              </div>

              <div style={{
                display: "flex",
                gap: "32px",
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                {[
                  { val: "6", label: "Verticals" },
                  { val: "HIPAA", label: "Compliant" },
                  { val: "2026", label: "Active" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontFamily: "'Inter Tight', Inter, sans-serif",
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}>
                      {s.val}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DOCTRINE STRIP */}
          <div style={{
            background: "#0a0a0a",
            display: "flex",
            height: "110px",
            flexShrink: 0,
          }}>
            {doctrine.map((d) => (
              <div key={d.label} className="doctrine-col">
                <div style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  marginBottom: "6px",
                }}>
                  <span style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    {d.label}
                  </span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "#2563eb",
                    letterSpacing: "0.1em",
                  }}>
                    {d.platform}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTIONS 2-7: VERTICALS */}
        {verticals.map((v) => (
          <section
            key={v.name}
            className="sfm-section"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: v.dark ? "#090E1C" : "#ffffff",
              padding: "0 10vw",
            }}
          >
            <div style={{ maxWidth: "720px", width: "100%" }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#2563eb",
                marginBottom: "28px",
                textTransform: "uppercase",
              }}>
                {v.tag}
              </p>
              <h2 style={{
                fontFamily: "'Inter Tight', Inter, sans-serif",
                fontSize: "clamp(30px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: v.dark ? "#ffffff" : "#0a0a0a",
                marginBottom: "24px",
                maxWidth: "620px",
              }}>
                {v.headline}
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "17px",
                lineHeight: 1.8,
                color: v.dark ? "rgba(255,255,255,0.5)" : "#6b7280",
                marginBottom: "44px",
                maxWidth: "580px",
              }}>
                {v.body}
              </p>
              <a
                href={v.href}
                className="cta-link"
                style={{
                  color: v.dark ? "#ffffff" : "#0a0a0a",
                  borderColor: v.dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)",
                }}
              >
                {v.cta} &rarr;
              </a>
            </div>
          </section>
        ))}

      </div>
    </>
  );
}
