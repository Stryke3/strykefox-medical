"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const navLinks = [
  { label: "CarePath", href: "https://carepath.strykefox.com", external: true },
  { label: "SPEAR", href: "/spear" },
  { label: "NorthStar", href: "https://northstar.strykefox.com", external: true },
  { label: "SoC13", href: "/soc13/deal-qa" },
  { label: "Maternity CarePath", href: "https://mommycarekit.strykefox.com", external: true },
  { label: "StrykePac Ex-Im", href: "/strykepac" },
  { label: "Founders", href: "/founders" },
  { label: "Adam W. Stryker", href: "https://www.adamwstryker.com", external: true },
];

const platforms = [
  {
    name: "CarePath",
    desc: "Coordinated recovery pathways from clinical event to fully aided recovery — with you every step of the way.",
    href: "https://carepath.strykefox.com",
  },
  {
    name: "SPEAR",
    desc: "Accelerates CarePath through AI learning models built to optimize recovery workflows, documentation, fulfillment, and execution.",
    href: "/spear",
  },
  {
    name: "StrykeREG Global",
    desc: "510(k), FDA, import/export, compliance readiness, and global deployment infrastructure.",
    href: "/strykepac",
  },
  {
    name: "NSI",
    desc: "Next-generation surgical technology, tool development, training, and certification pathways for FDA 510(k)-cleared orthopedic innovation.",
    href: "https://northstar.strykefox.com",
  },
  {
    name: "SoC13",
    desc: "13-point deal quality assessment for acquisition, integration, and healthcare lineage growth.",
    href: "/soc13/deal-qa",
  },
];

const doctrine = [
  { label: "ACCELERATE", platform: "CAREPATH", desc: "Move patients through pre-op, surgery, recovery, and post-acute care with less friction." },
  { label: "PREDICT", platform: "SPEAR", desc: "Score revenue risk, operational gaps, and deployment health from one connected loop." },
  { label: "IDENTIFY", platform: "NSI", desc: "Surface device, pathway, and logistics opportunities around real operating room workflow." },
  { label: "VALIDATE", platform: "SOC13", desc: "Keep documentation, claims, and audit trails aligned across regulated healthcare delivery." },
];

const verticals = [
  {
    tag: "RECOVERY COORDINATION",
    headline: "Recovery starts here. We make sure it finishes.",
    body: "CarePath activates the moment care is prescribed — coordinating the right recovery products, documentation, and support to meet every patient exactly where they are, from clinical event through full recovery.",
    cta: "ENTER CAREPATH →",
    href: "https://carepath.strykefox.com",
    image: "/images/hero.png",
    alt: "CarePath recovery coordination",
    dark: false,
  },
  {
    tag: "PLATFORM INTELLIGENCE",
    headline: "The intelligence layer behind every CarePath outcome.",
    body: "SPEAR powers CarePath with AI-driven workflow execution — learning from every case, every payer, and every recovery to make the next one faster, cleaner, and more complete.",
    cta: "ENTER SPEAR →",
    href: "/spear",
    dark: true,
  },
  {
    tag: "SURGICAL INNOVATION",
    headline: "Precision built. FDA cleared. OR ready.",
    body: "NSI develops FDA 510(k)-cleared orthopedic technology and delivers it through surgeon training, certification, and clinical integration programs designed around real operating room workflow and case volume.",
    cta: "ENTER NORTHSTAR →",
    href: "https://northstar.strykefox.com",
    image: "/images/northstar.png",
    alt: "NorthStar Surgical Innovations device platform",
    dark: true,
  },
  {
    tag: "STRATEGIC EXPANSION",
    headline: "Thirteen points before capital moves.",
    body: "SoC13 is the CARES deal-quality assessment layer — evaluating healthcare assets, pharmacy adjacency, compliance exposure, and integration readiness before capital deployment.",
    cta: "OPEN SOC13 ASSESSMENT →",
    href: "/soc13/deal-qa",
    image: "/images/Pharmacy.png",
    alt: "Pharmacy operations visual for SoC13 deal quality assessment",
    dark: false,
  },
  {
    tag: "MATERNAL RECOVERY",
    headline: "Every mother deserves a complete recovery.",
    body: "Maternity CarePath coordinates provider-directed postpartum recovery support — personalized to every mother's clinical pathway and delivered directly to her door.",
    cta: "ENTER MATERNITY CAREPATH →",
    href: "https://mommycarekit.strykefox.com",
    image: "/images/maternity.png",
    alt: "Maternity CarePath recovery coordination",
    dark: false,
  },
  {
    tag: "GLOBAL DISTRIBUTION",
    headline: "World-class surgical technology. Built for every market.",
    body: "StrykePac delivers compliant cross-border distribution infrastructure for DME, biologics, and surgical implants — structured for real international OR procurement with documentation built in from day one.",
    cta: "ENTER STRYKEPAC →",
    href: "/strykepac",
    image: "/images/strykepac.png",
    alt: "StrykePac global distribution infrastructure",
    dark: true,
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
          <Image src="/images/sfm-logo.png" alt="StrykeFox Medical" width={120} height={107} className="sfm-nav-logo" priority />
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
          <label htmlFor="sfm-mobile-nav-toggle" aria-label="Toggle navigation menu">
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
            <Image src="/images/doctor-hero.jpg" alt="Clinical recovery coordination" fill priority sizes="52vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
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
        <div className="sfm-platform-panel">
          <p className="sfm-platform-kicker fade-up">CARES HEALTHCARE LINEAGE PLATFORM</p>
          <div className="sfm-platform-list fade-up">
            {platforms.map((p) => (
              <Link key={p.name} href={p.href} className="sfm-platform-row">
                <span className="sfm-platform-name">
                  <span>{p.name}</span>
                </span>
                <span className="sfm-platform-desc">{p.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS 2-7 — PLATFORM VERTICALS */}
      {verticals.map((v, i) => {
        const isSpear = v.tag === "PLATFORM INTELLIGENCE";
        const isMaternity = v.tag === "MATERNAL RECOVERY";
        const isBleedImage = (
          v.tag === "RECOVERY COORDINATION" ||
          v.tag === "SURGICAL INNOVATION" ||
          v.tag === "STRATEGIC EXPANSION" ||
          v.tag === "GLOBAL DISTRIBUTION"
        );
        const bleedImageSide = i % 2 === 1 ? "left" : "right";
        const isSoc13 = v.tag === "STRATEGIC EXPANSION";

        return (
          <section
            key={v.headline}
            className={`snap-section sfm-vertical-section sfm-vertical-${v.dark ? "dark" : "light"}${isSpear ? " sfm-vertical-spear" : ""}${isMaternity ? " sfm-vertical-maternity" : ""}${isBleedImage ? ` sfm-vertical-bleed sfm-vertical-bleed-${bleedImageSide}` : ""}`}
            style={{ flexDirection: i % 2 === 1 ? "row-reverse" : "row" }}
            ref={(el) => { sectionRefs.current[i + 1] = el; }}
          >
            {isSpear && (
              <>
                <img src="/images/spear1.png" alt="" className="sfm-spear-background" aria-hidden="true" />
                <div className="sfm-spear-overlay" aria-hidden="true" />
              </>
            )}
            {isMaternity && v.image && (
              <div className="sfm-maternity-image-panel chapter-image" aria-hidden="true">
                <img src={v.image} alt="" />
                <div className="sfm-maternity-image-fade" />
              </div>
            )}
            {isBleedImage && v.image && (
              <div className={`sfm-bleed-image-panel sfm-bleed-image-${bleedImageSide} chapter-image${isSoc13 ? " sfm-bleed-image-soc13" : ""}`} aria-hidden="true">
                <img src={v.image} alt="" />
                <div className="sfm-bleed-image-fade" />
              </div>
            )}
            <div
              className={`sfm-vertical-grid${v.image && !isMaternity && !isBleedImage ? "" : " sfm-vertical-grid-no-media"}`}
              style={{ flexDirection: i % 2 === 1 ? "row-reverse" : "row" }}
            >
              <div className="fade-up sfm-vertical-copy">
                <p className="sfm-vertical-label">{v.tag}</p>
                <h2>{v.headline}</h2>
                <p>{v.body}</p>
                <Link href={v.href} className="sfm-vertical-cta">
                  {v.cta}
                </Link>
            </div>
              {v.image && !isMaternity && !isBleedImage && (
                <div className="sfm-vertical-media chapter-image" aria-hidden="true">
                <Image
                  src={v.image}
                  alt={v.alt ?? ""}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 768px) 100vw, 38vw"
                />
              </div>
              )}
              <div className="sfm-section-count">
                {String(i + 2).padStart(2, "0")} / 07
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
