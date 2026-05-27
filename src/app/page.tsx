"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const navLinks = [
  { label: "CarePath", href: "/carepath" },
  { label: "SPEAR", href: "/platform" },
  { label: "NorthStar Surgical", href: "https://northstar.strykefox.com" },
  { label: "Maternity", href: "https://mommycarekit.strykefox.com" },
  { label: "SoC13", href: "https://soc13.strykefox.com" },
  { label: "StrykePac Ex-Im", href: "/strykepac" },
];

const platforms = [
  {
    name: "CarePath",
    desc: "Care-pathway infrastructure — verification, documentation, fulfillment, POD, and billing-ready packet assembly.",
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
    desc: "Pregnancy and postpartum recovery coordination — bilingual, provider-directed, compliance-safe.",
    href: "https://mommycarekit.strykefox.com",
  },
  {
    name: "SoC13",
    desc: "Automated HIPAA billing validation, audit trail generation, and regulatory compliance across all verticals.",
    href: "https://soc13.strykefox.com",
  },
  {
    name: "StrykePac Ex-Im SA",
    desc: "International gateway for DME, biologics, and implants — compliant cross-border distribution.",
    href: "/strykepac",
  },
];

const doctrine = [
  {
    label: "VERIFY",
    platform: "BENEFITS",
    desc: "Eligibility confirmed before a single product moves. No surprises for the patient or the practice.",
  },
  {
    label: "DOCUMENT",
    platform: "PATHWAY",
    desc: "Documentation packets built to payer standards — provider-directed, compliance-forward.",
  },
  {
    label: "COORDINATE",
    platform: "FULFILLMENT",
    desc: "Product coordination, delivery scheduling, and proof-of-delivery capture handled end to end.",
  },
  {
    label: "DELIVER",
    platform: "READY",
    desc: "Billing-ready packet assembled and recovery continuity supported. Providers stay focused on care.",
  },
];

const verticals = [
  {
    name: "CarePath",
    tag: "Healthcare Lineage",
    headline: "Between the clinical trigger and the patient's recovery environment.",
    body: "CarePath verifies the need, documents the pathway, coordinates fulfillment, captures proof of delivery, and creates the billing-ready packet that allows recovery care to scale across providers, products, payers, and specialties. Providers stay focused on care. CarePath manages the operating workflow.",
    cta: "Enter CarePath",
    href: "https://carepath.strykefox.com",
    bg: "#fff",
    color: "#0a0a0a",
    accent: "#2563eb",
  },
  {
    name: "SPEAR",
    tag: "Platform Intelligence",
    headline: "Score risk before it becomes revenue loss.",
    body: "Trident AI scoring, Poseidon storage, and Aries field deployment operate in one continuous intelligence loop — no handoffs, no gaps, no revenue left on the table. SPEAR gives the platform operational visibility across every active patient episode.",
    cta: "Enter SPEAR",
    href: "/platform",
    bg: "#090E1C",
    color: "#fff",
    accent: "#2563eb",
  },
  {
    name: "NorthStar Surgical",
    tag: "Surgical Innovation",
    headline: "From the OR floor to commercial launch.",
    body: "NorthStar Innovations commercializes surgical devices and builds Ex-Im pathways designed around real operating room workflow and case volume. Case-ready support. Documented recovery pathways. Built for spine surgeons, orthopedic surgeons, surgical practices, and ASCs.",
    cta: "Enter NorthStar",
    href: "https://northstar.strykefox.com",
    bg: "#fff",
    color: "#0a0a0a",
    accent: "#2563eb",
  },
  {
    name: "Maternity",
    tag: "CarePath Maternal",
    headline: "Maternal recovery, coordinated correctly.",
    body: "CarePath Maternal helps women's health clinics coordinate pregnancy and postpartum recovery products through provider-directed documentation, benefit verification, patient education, and fulfillment support. Bilingual. Compliance-forward. Available in English and Spanish.",
    cta: "Enter Maternity",
    href: "https://mommycarekit.strykefox.com",
    bg: "#090E1C",
    color: "#fff",
    accent: "#2563eb",
  },
  {
    name: "SoC13",
    tag: "Compliance Engine",
    headline: "Documentation that defends itself.",
    body: "Automated HIPAA billing validation, audit trail generation, and regulatory compliance across every vertical — always current, always billing-ready, always defensible. SoC13 keeps the platform aligned with payer policy, documentation standards, and reimbursement requirements.",
    cta: "Enter SoC13",
    href: "https://soc13.strykefox.com",
    bg: "#fff",
    color: "#0a0a0a",
    accent: "#2563eb",
  },
  {
    name: "StrykePac Ex-Im SA",
    tag: "Export & Import",
    headline: "World-class surgical technology. Global reach.",
    body: "Compliant cross-border distribution for DME, biologics, and implants — structured for real international OR procurement with documentation and compliance built in from day one. StrykePac gives manufacturers a serious local operating partner built for regulated healthcare execution.",
    cta: "Enter StrykePac",
    href: "/strykepac",
    bg: "#090E1C",
    color: "#fff",
    accent: "#2563eb",
  },
];

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="snap-container">
      {/* NAV — fixed over all sections */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", padding: "20px 48px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 48 }}>
          <span style={{ fontWeight: 800, fontSize: 15, color: "#0a0a0a", letterSpacing: "0.05em" }}>STRYKEFOX</span>
          <span style={{ fontWeight: 300, fontSize: 12, color: "#0a0a0a", letterSpacing: "0.1em" }}>MEDICAL</span>
        </Link>
        <div style={{ display: "flex", gap: 32, flex: 1 }}>
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} style={{ fontSize: 12, fontWeight: 500, color: "#0a0a0a", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/request-access" style={{ fontSize: 11, fontWeight: 600, color: "#0a0a0a", textDecoration: "none", letterSpacing: "0.1em", border: "1.5px solid #0a0a0a", padding: "10px 20px", textTransform: "uppercase" }}>
          Request Access
        </Link>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="snap-section" ref={(el) => { sectionRefs.current[0] = el; }} style={{ display: "flex" }}>
        {/* LEFT */}
        <div style={{ flex: "0 0 52%", background: "#fff", backgroundImage: "none", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
          <div style={{ padding: "120px 56px 0", zIndex: 10, position: "relative" }} className="fade-up">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#2563eb", marginBottom: 24, textTransform: "uppercase" }}>StrykeFox Medical</p>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(3.5rem, 6vw, 6.5rem)", lineHeight: 1.0, color: "#0a0a0a", margin: 0, maxWidth: 620 }}>
              Care-pathway infrastructure for modern healthcare recovery.
            </h1>
            <p style={{ fontSize: 18, color: "#555", marginBottom: 32 }}>Verified. Documented. Delivered.</p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Link href="/providers" style={{ display: "inline-block", background: "#0a0a0a", color: "#fff", padding: "14px 24px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase", border: "1.5px solid #0a0a0a", borderRadius: 2 }}>
                For Providers →
              </Link>
              <Link href="/carepath" style={{ display: "inline-block", background: "transparent", color: "#0a0a0a", padding: "14px 24px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase", border: "1.5px solid #0a0a0a", borderRadius: 2 }}>
                Explore CarePath →
              </Link>
            </div>
          </div>
          <div style={{ flex: 1, position: "relative", marginTop: 32 }}>
            <img src="/images/doctor-hero.jpg" alt="Clinical" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {doctrine.map((d, i) => (
                <div key={d.label} style={{ padding: "24px 20px", borderRight: i < 3 ? "1px solid rgba(0,0,0,0.08)" : "none" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "#0a0a0a", margin: "0 0 4px" }}>{d.label}</p>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#2563eb", margin: "0 0 10px" }}>{d.platform}</p>
                  <p style={{ fontSize: 11, color: "#555", margin: 0, lineHeight: 1.5 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div style={{ flex: 1, background: "#090E1C", backgroundImage: "none", display: "flex", flexDirection: "column", padding: "120px 56px 0", overflow: "hidden" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#2563eb", marginBottom: 40, textTransform: "uppercase" }} className="fade-up">Discover Our Platform</p>
          <div style={{ flex: 1 }} className="fade-up">
            {platforms.map((p) => (
              <Link key={p.name} href={p.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.07)", textDecoration: "none" }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: "#fff", minWidth: 180 }}>{p.name}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textAlign: "right", maxWidth: 320 }}>{p.desc}</span>
              </Link>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
          </div>
          <div style={{ marginTop: 40, height: 220, overflow: "hidden" }}>
            <img src="/images/doctor-hero.jpg" alt="Clinical" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
          </div>
        </div>
      </section>

      {/* SECTIONS 2-7 — PLATFORM VERTICALS */}
      {verticals.map((v, i) => (
        <section
          key={v.name}
          className="snap-section"
          ref={(el) => { sectionRefs.current[i + 1] = el; }}
          style={{ background: v.bg, backgroundImage: "none", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "0 10vw" }}
        >
          <div className="fade-up">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: v.accent, marginBottom: 24, textTransform: "uppercase" }}>{v.tag}</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(3rem, 5.5vw, 5.5rem)", lineHeight: 1.05, color: v.color, maxWidth: 800, marginBottom: 32 }}>{v.headline}</h2>
            <p style={{ fontSize: 18, color: v.color === "#fff" ? "rgba(255,255,255,0.55)" : "#555", maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>{v.body}</p>
            <Link href={v.href} style={{ display: "inline-block", background: v.color === "#fff" ? "#fff" : "#0a0a0a", color: v.color === "#fff" ? "#090E1C" : "#fff", padding: "16px 36px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase", borderRadius: 2 }}>
              {v.cta} →
            </Link>
          </div>
          {/* Section indicator */}
          <div style={{ position: "absolute", bottom: 40, right: 56, fontSize: 11, color: v.color === "#fff" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)", letterSpacing: "0.1em", fontWeight: 600 }}>
            0{i + 2} / 07
          </div>
        </section>
      ))}
    </div>
  );
}
