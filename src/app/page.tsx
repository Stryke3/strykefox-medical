"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const navLinks = [
  { label: "CarePath", href: "https://carepath.strykefox.com", external: true },
  { label: "SPEAR", href: "/spear" },
  { label: "NorthStar", href: "https://northstar.strykefox.com", external: true },
  { label: "SoC13", href: "https://soc13.strykefox.com", external: true },
  { label: "Mommy Care Kit", href: "https://mommycarekit.strykefox.com", external: true },
  { label: "StrykePac Ex-Im", href: "/strykepac" },
  { label: "Founders", href: "/founders" },
  { label: "Adam W. Stryker", href: "https://www.adamwstryker.com", external: true },
];

const platforms = [
  { name: "CarePath", desc: "Healthcare lineage and patient pathway coordination", href: "https://carepath.strykefox.com" },
  { name: "SPEAR", desc: "Trident AI scoring, Poseidon storage, Aries deployment", href: "/spear" },
  { name: "NorthStar", desc: "Surgical intelligence and documented OR workflow", href: "https://northstar.strykefox.com" },
  { name: "SoC13", desc: "Compliance engine for documentation and billing", href: "https://soc13.strykefox.com" },
  { name: "Mommy Care Kit", desc: "Bilingual maternity recovery coordination", href: "https://mommycarekit.strykefox.com" },
  { name: "StrykePac Ex-Im SA", desc: "International gateway to world-class surgical technology", href: "/strykepac" },
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
    tag: "RECOVERY COORDINATION",
    headline: "Every patient. Every pathway. Every step.",
    body: "CarePath coordinates pre-op through post-acute care — documenting, tracking, and closing gaps across the entire healthcare journey.",
    cta: "ENTER CAREPATH →",
    href: "https://carepath.strykefox.com",
    image: "/images/hero-healthcare.jpg",
    tone: "light",
  },
  {
    name: "SPEAR",
    tag: "PLATFORM INTELLIGENCE",
    headline: "Score risk before it becomes revenue loss.",
    body: "Trident AI scoring, Poseidon storage, and Aries field deployment operate in one continuous intelligence loop — no handoffs, no gaps.",
    cta: "ENTER SPEAR →",
    href: "/spear",
    image: "/images/Spear.PNG",
    tone: "dark",
  },
  {
    name: "NorthStar",
    tag: "SURGICAL INTELLIGENCE",
    headline: "From the OR to the payer. Closed loop.",
    body: "NorthStar connects surgical device commercialization, implant-adjacent support, and OR workflow into one documented, billable sequence.",
    cta: "ENTER NORTHSTAR →",
    href: "https://northstar.strykefox.com",
    image: "/images/surgical-hero.jpg",
    tone: "dark",
  },
  {
    name: "SoC13",
    tag: "EXPANSION & DEVELOPMENT",
    headline: "The engine that builds what's next.",
    body: "SoC13 is the development and expansion platform behind SFM — the infrastructure and integration layer that launches new healthcare verticals and scales them into revenue.",
    cta: "ENTER SOC13 →",
    href: "https://soc13.strykefox.com",
    image: "/images/northstar.png",
    tone: "light",
  },
  {
    name: "Mommy Care Kit",
    tag: "MATERNITY RECOVERY",
    headline: "From delivery to full recovery.",
    body: "Bilingual, provider-directed maternity and postpartum recovery coordination — verified, documented, and compliance-safe at every step.",
    cta: "ENTER MOMMY CARE KIT →",
    href: "https://mommycarekit.strykefox.com",
    image: "/images/maternity.png",
    tone: "light",
  },
  {
    name: "StrykePac Ex-Im SA",
    tag: "GLOBAL DISTRIBUTION",
    headline: "World-class DME. Cross-border ready.",
    body: "Compliant cross-border distribution for DME, biologics, and implants — built for real OR procurement and international healthcare delivery.",
    cta: "ENTER STRYKEPAC →",
    href: "/strykepac",
    image: "/images/strykepac.png",
    tone: "dark",
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
      <nav className="sfm-snap-nav">
        <Link href="/" className="sfm-snap-brand">
          <Image src="/images/strykefox-logo.svg" alt="StrykeFox Medical" width={36} height={36} />
          <span>STRYKEFOX</span>
          <small>MEDICAL</small>
        </Link>
        <div className="sfm-snap-nav-links">
          {navLinks.map((l) => (
            l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            )
          ))}
        </div>
        <Link href="/spear" className="sfm-spear-login">
          SPEAR Login
        </Link>
        <div className="sfm-mobile-menu">
          <input id="sfm-mobile-nav-toggle" type="checkbox" aria-label="Open navigation" />
          <label htmlFor="sfm-mobile-nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div>
            {navLinks.map((l) => (
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              )
            ))}
            <Link href="/spear">SPEAR Login</Link>
          </div>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="snap-section" ref={(el) => { sectionRefs.current[0] = el; }} style={{ display: "flex" }}>
        {/* LEFT */}
        <div style={{ flex: "0 0 52%", background: "#fff", backgroundImage: "none", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
          <div style={{ padding: "120px 56px 0", zIndex: 10, position: "relative" }} className="fade-up">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#2563eb", marginBottom: 24, textTransform: "uppercase" }}>StrykeFox Medical</p>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(3.5rem, 6vw, 6.5rem)", lineHeight: 1.0, color: "#0a0a0a", margin: 0, maxWidth: 620 }}>
              CarePath organizes<br />
              the journey.<br />
              Healthcare<br />
              Lineage scales<br />
              the<br />
              platform.
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

      {/* SECTIONS 2-7 — PLATFORM VERTICALS */}
      {verticals.map((v, i) => (
        <section
          key={v.name}
          className={`snap-section sfm-vertical-section sfm-vertical-${v.tone}`}
          ref={(el) => { sectionRefs.current[i + 1] = el; }}
        >
          <div className="sfm-vertical-grid">
            <div className="fade-up sfm-vertical-copy">
              <p className="sfm-vertical-label">{v.tag}</p>
              <h2>{v.headline}</h2>
              <p>{v.body}</p>
              <Link href={v.href} className="sfm-vertical-cta">
                {v.cta}
              </Link>
            </div>
            <div className="sfm-vertical-media" aria-hidden="true">
              <img src={v.image} alt="" />
            </div>
            <div className="sfm-section-count">
              {String(i + 2).padStart(2, "0")} / 07
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
