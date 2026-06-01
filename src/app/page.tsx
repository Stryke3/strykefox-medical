"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const navLinks = [
  { label: "Providers", href: "/providers" },
  { label: "Life Sciences", href: "/life-sciences" },
  { label: "Platform", href: "/platform" },
  { label: "Compliance", href: "/compliance" },
  { label: "StrykePac Ex-Im SA", href: "/strykepac" },
];

const platforms = [
  { name: "CarePath", desc: "Healthcare lineage and patient pathway coordination", href: "https://carepath.strykefox.com" },
  { name: "SPEAR", desc: "Trident AI scoring, Poseidon storage, Aries deployment", href: "/platform" },
  { name: "StrykePac Ex-Im SA", desc: "International gateway to world-class surgical technology", href: "/strykepac" },
  { name: "NSI", desc: "Surgical device commercialization and OR workflow", href: "https://northstar.strykefox.com" },
  { name: "SoC13", desc: "Compliance engine for documentation and billing", href: "https://soc13.strykefox.com" },
];

const doctrine = [
  { label: "ACCELERATE", platform: "CAREPATH", desc: "Move patients through pre-op, surgery, recovery, and post-acute care with less friction." },
  { label: "PREDICT", platform: "SPEAR", desc: "Score revenue risk, operational gaps, and deployment health from one connected loop." },
  { label: "IDENTIFY", platform: "NSI", desc: "Surface device, pathway, and logistics opportunities around real operating room workflow." },
  { label: "VALIDATE", platform: "SOC13", desc: "Keep documentation, claims, and audit trails aligned across regulated healthcare delivery." },
];

const verticals = [
  {
    name: "CarePath",
    tag: "Healthcare Lineage",
    headline: "Every patient. Every pathway. Every step.",
    body: "CarePath coordinates pre-op through post-acute care — documenting, tracking, and closing gaps across the entire healthcare journey.",
    cta: "Enter CarePath",
    href: "https://carepath.strykefox.com",
    image: "/images/hero-healthcare.jpg",
    bg: "#fff",
    color: "#0a0a0a",
    accent: "#2563eb",
  },
  {
    name: "SPEAR",
    tag: "Platform Intelligence",
    headline: "Score risk before it becomes revenue loss.",
    body: "Trident AI scoring, Poseidon storage, and Aries field deployment operate in one continuous intelligence loop — no handoffs, no gaps.",
    cta: "Enter SPEAR",
    href: "/platform",
    image: "/images/Spear.PNG",
    bg: "#090E1C",
    color: "#fff",
    accent: "#2563eb",
  },
  {
    name: "StrykePac Ex-Im SA",
    tag: "Export & Import",
    headline: "World-class surgical technology. Global reach.",
    body: "Compliant cross-border distribution for DME, biologics, and implants — structured for real international OR procurement.",
    cta: "Enter StrykePac",
    href: "/strykepac",
    image: "/images/strykepac.png",
    bg: "#fff",
    color: "#0a0a0a",
    accent: "#2563eb",
  },
  {
    name: "NSI",
    tag: "Surgical Innovation",
    headline: "From the OR floor to commercial launch.",
    body: "NorthStar Innovations commercializes surgical devices and builds Ex-Im pathways designed around real operating room workflow.",
    cta: "Enter NSI",
    href: "https://northstar.strykefox.com",
    image: "/images/surgical-hero.jpg",
    bg: "#090E1C",
    color: "#fff",
    accent: "#2563eb",
  },
  {
    name: "SoC13",
    tag: "Compliance Engine",
    headline: "Documentation that defends itself.",
    body: "Automated HIPAA billing validation, audit trail generation, and regulatory compliance across every vertical — always current, always defensible.",
    cta: "Enter SoC13",
    href: "https://soc13.strykefox.com",
    image: "/images/northstar.png",
    bg: "#fff",
    color: "#0a0a0a",
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
        <Link href="https://dashboard.strykefox.com" style={{ fontSize: 11, fontWeight: 600, color: "#0a0a0a", textDecoration: "none", letterSpacing: "0.1em", border: "1.5px solid #0a0a0a", padding: "10px 20px", textTransform: "uppercase" }}>
          SPEAR Login
        </Link>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="snap-section" ref={(el) => { sectionRefs.current[0] = el; }} style={{ display: "flex" }}>
        {/* LEFT */}
        <div style={{ flex: "0 0 52%", background: "#fff", backgroundImage: "none", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
          <div style={{ padding: "120px 56px 0", zIndex: 10, position: "relative" }} className="fade-up">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#2563eb", marginBottom: 24, textTransform: "uppercase" }}>StrykeFox Medical</p>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(3.5rem, 6vw, 6.5rem)", lineHeight: 1.0, color: "#0a0a0a", margin: 0, maxWidth: 620 }}>
              CarePath organizes the journey. Healthcare Lineage scales the platform.
            </h1>
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

      {/* SECTIONS 2-6 — PLATFORM VERTICALS */}
      {verticals.map((v, i) => (
        <section
          key={v.name}
          className="snap-section"
          ref={(el) => { sectionRefs.current[i + 1] = el; }}
          style={{ background: v.bg, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "0 10vw", position: "relative" }}
        >
          <img src={v.image} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: v.color === "#fff" ? 0.34 : 0.42 }} />
          <div style={{ position: "absolute", inset: 0, background: v.color === "#fff" ? "linear-gradient(90deg, rgba(255,255,255,0.94), rgba(255,255,255,0.76), rgba(255,255,255,0.38))" : "linear-gradient(90deg, rgba(9,14,28,0.94), rgba(9,14,28,0.78), rgba(9,14,28,0.42))" }} />
          <div className="fade-up" style={{ position: "relative", zIndex: 2 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: v.accent, marginBottom: 24, textTransform: "uppercase" }}>{v.tag}</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(3rem, 5.5vw, 5.5rem)", lineHeight: 1.05, color: v.color, maxWidth: 800, marginBottom: 32 }}>{v.headline}</h2>
            <p style={{ fontSize: 18, color: v.color === "#fff" ? "rgba(255,255,255,0.55)" : "#555", maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>{v.body}</p>
            <Link href={v.href} style={{ display: "inline-block", background: v.color === "#fff" ? "#fff" : "#0a0a0a", color: v.color === "#fff" ? "#090E1C" : "#fff", padding: "16px 36px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase", borderRadius: 2 }}>
              {v.cta} →
            </Link>
          </div>
          {/* Section indicator */}
          <div style={{ position: "absolute", bottom: 40, right: 56, zIndex: 2, fontSize: 11, color: v.color === "#fff" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)", letterSpacing: "0.1em", fontWeight: 600 }}>
            0{i + 2} / 06
          </div>
        </section>
      ))}
    </div>
  );
}
