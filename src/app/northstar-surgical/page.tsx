"use client";

import { useEffect } from "react";
import { Barlow, Cormorant_Garamond, Rajdhani } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-barlow",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export default function NorthstarSurgicalPage() {
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 50);

    window.addEventListener("scroll", onScroll);
    onScroll();

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const revealElements = document.querySelectorAll<HTMLElement>(
      ".cap-card,.approach-item,.sector,.s-title,.s-body",
    );

    revealElements.forEach((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(16px)";
      element.style.transition = `opacity .6s ease-out ${index * 0.05}s, transform .6s ease-out ${
        index * 0.05
      }s`;
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className={`${barlow.variable} ${cormorant.variable} ${rajdhani.variable}`}>
      <style>{`
*{margin:0;padding:0;box-sizing:border-box}
:root{--d:#040d1a;--d2:#0a1929;--d3:#0f2744;--s1:#e8edf2;--s2:#c8d3de;--s3:#9bafc4;--s4:#6d8aa5;--s5:#4a6d8c;--w:#f0f4f8}
html{scroll-behavior:smooth;background:var(--d)}
body{font-family:var(--font-barlow),'Barlow',sans-serif;color:var(--s2);background:var(--d);overflow-x:hidden;-webkit-font-smoothing:antialiased}

nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:20px 60px;display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(20px);background:rgba(4,13,26,0.6);border-bottom:1px solid rgba(200,211,222,0.04);transition:all .4s}
nav.scrolled{padding:12px 60px;background:rgba(4,13,26,0.94)}
.nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none}
.nav-logo-img{width:32px;height:32px;transition:transform .3s}
.nav-logo:hover .nav-logo-img{transform:rotate(45deg)}
.nav-logo-text{font-family:var(--font-rajdhani),'Rajdhani',sans-serif;font-weight:700;font-size:18px;letter-spacing:6px;text-transform:uppercase;color:var(--s1)}
.nav-logo-text span{color:var(--s4);font-weight:300;font-size:10px;letter-spacing:3px;display:block;margin-top:-2px}
.nav-links{display:flex;gap:40px}
.nav-links a{color:var(--s4);text-decoration:none;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:400;transition:color .3s}
.nav-links a:hover{color:var(--s1)}

.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;padding:0 40px}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 35%,rgba(26,58,92,0.3) 0%,transparent 65%);animation:pulse 10s ease-in-out infinite alternate}
@keyframes pulse{0%{opacity:.5}100%{opacity:.9}}
.hero-logo{width:280px;margin-bottom:60px;opacity:0;animation:logoIn 1.2s ease-out .3s forwards;position:relative;z-index:2}
@keyframes logoIn{0%{opacity:0;transform:scale(.85)}100%{opacity:1;transform:scale(1)}}
.hero-logo img{width:100%;height:auto;filter:drop-shadow(0 0 50px rgba(200,220,240,0.2))}
.hero-sub{font-family:var(--font-cormorant),'Cormorant Garamond',serif;font-weight:300;font-size:clamp(17px,2.2vw,24px);letter-spacing:2px;color:var(--s3);max-width:600px;line-height:1.8;z-index:2;opacity:0;animation:fu .8s ease-out 1s forwards;margin-top:20px}
.hero-tag{margin-top:48px;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:var(--s5);z-index:2;opacity:0;animation:fu .8s ease-out 1.3s forwards}
@keyframes fu{0%{opacity:0;transform:translateY(24px)}100%{opacity:1;transform:translateY(0)}}
.scroll-cue{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);opacity:0;animation:fu .8s ease-out 1.7s forwards}
.scroll-cue span{display:block;width:1px;height:40px;background:linear-gradient(180deg,var(--s5),transparent);margin:0 auto}

section{padding:140px 80px;position:relative}
.s-label{font-family:var(--font-rajdhani),'Rajdhani',sans-serif;font-size:10px;letter-spacing:7px;text-transform:uppercase;color:var(--s5);margin-bottom:20px}
.s-title{font-family:var(--font-cormorant),'Cormorant Garamond',serif;font-weight:300;font-size:clamp(30px,4vw,50px);color:var(--s1);line-height:1.15;margin-bottom:28px;max-width:700px}
.s-body{font-weight:300;font-size:15px;line-height:2;color:var(--s3);max-width:600px}

.about{background:linear-gradient(180deg,var(--d),var(--d2));border-top:1px solid rgba(200,211,222,0.03)}

.capabilities{background:var(--d2);border-top:1px solid rgba(200,211,222,0.03)}
.cap-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:80px;background:rgba(200,211,222,0.03)}
.cap-card{padding:56px 36px 48px;background:var(--d2);position:relative;overflow:hidden;transition:all .5s}
.cap-card::before{content:'';position:absolute;top:0;left:0;width:0;height:2px;background:linear-gradient(90deg,var(--s4),transparent);transition:width .6s}
.cap-card:hover::before{width:100%}
.cap-card:hover{background:rgba(15,39,68,0.5)}
.cap-num{font-family:var(--font-rajdhani),'Rajdhani',sans-serif;font-weight:700;font-size:64px;color:rgba(200,211,222,0.04);line-height:1;margin-bottom:24px;transition:color .5s}
.cap-card:hover .cap-num{color:rgba(200,211,222,0.08)}
.cap-card h3{font-family:var(--font-rajdhani),'Rajdhani',sans-serif;font-weight:600;font-size:15px;letter-spacing:4px;text-transform:uppercase;color:var(--s1);margin-bottom:20px}
.cap-card p{font-weight:300;font-size:13px;line-height:1.9;color:var(--s4)}

.approach{background:linear-gradient(180deg,var(--d2),var(--d));border-top:1px solid rgba(200,211,222,0.03)}
.approach-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:60px;max-width:1100px}
.approach-item{padding-left:24px;border-left:1px solid rgba(200,211,222,0.08)}
.approach-item h4{font-family:var(--font-rajdhani),'Rajdhani',sans-serif;font-weight:500;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--s1);margin-bottom:12px}
.approach-item p{font-weight:300;font-size:14px;line-height:1.9;color:var(--s4)}

.sectors{background:var(--d);border-top:1px solid rgba(200,211,222,0.03)}
.sector-row{display:flex;gap:1px;margin-top:60px}
.sector{flex:1;padding:48px 32px;background:rgba(15,39,68,0.15);border:1px solid rgba(200,211,222,0.03);text-align:center;transition:all .4s}
.sector:hover{background:rgba(15,39,68,0.35);border-color:rgba(200,211,222,0.08)}
.sector h4{font-family:var(--font-rajdhani),'Rajdhani',sans-serif;font-weight:500;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--s2);margin-bottom:8px}
.sector p{font-size:12px;color:var(--s5);font-weight:300;letter-spacing:1px}

.contact{background:linear-gradient(180deg,var(--d),var(--d2));border-top:1px solid rgba(200,211,222,0.03);text-align:center}
.contact .s-title{margin-left:auto;margin-right:auto}
.contact-email{display:inline-block;margin-top:32px;padding:14px 48px;border:1px solid rgba(200,211,222,0.12);font-family:var(--font-rajdhani),'Rajdhani',sans-serif;font-size:13px;letter-spacing:4px;text-transform:uppercase;color:var(--s2);text-decoration:none;transition:all .4s}
.contact-email:hover{border-color:var(--s3);background:rgba(15,39,68,0.4);color:var(--s1)}

footer{padding:60px;text-align:center;border-top:1px solid rgba(200,211,222,0.03);background:var(--d)}
.ft-logo{width:160px;margin:0 auto 20px;opacity:.6}
.ft-logo img{width:100%;height:auto}
footer p{font-size:10px;color:var(--s5);letter-spacing:2px}

@media(max-width:1024px){.cap-grid{grid-template-columns:1fr 1fr}.approach-grid{grid-template-columns:1fr;gap:40px}.sector-row{flex-direction:column}}
@media(max-width:768px){nav{padding:16px 24px}.nav-logo-img{width:24px;height:24px}.nav-logo-text{font-size:14px;letter-spacing:4px}.nav-links{display:none}section{padding:100px 28px}.cap-grid{grid-template-columns:1fr}}
      `}</style>

      <nav id="mainNav">
        <a href="#" className="nav-logo">
          <img src="/images/nsi-logo.png" alt="Northstar" className="nav-logo-img" />
          <div className="nav-logo-text">
            NORTHSTAR<span>Surgical Innovations</span>
          </div>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-logo">
          <img src="/images/nsi-logo.png" alt="Northstar Surgical Innovations" />
        </div>
        <p className="hero-sub">We import, develop, train, and distribute surgical innovation at scale.</p>
        <p className="hero-tag">
          Orthopedic Instrumentation &middot; Implant Systems &middot; Surgical Education &middot; Revenue
          Intelligence
        </p>
        <div className="scroll-cue">
          <span />
        </div>
      </section>

      <section className="about" id="about">
        <div className="s-label">Who We Are</div>
        <div className="s-title">A vertically integrated platform for surgical innovation.</div>
        <p className="s-body">
          Northstar Surgical Innovations operates at the intersection of medical device development, international
          supply chain management, surgeon education, and healthcare technology. We control the full lifecycle &mdash;
          from concept to operating room &mdash; through purpose-built infrastructure and deep clinical partnerships.
        </p>
        <p className="s-body" style={{ marginTop: 24 }}>
          We are not a distributor. We are not a device company. We are the platform that connects the two and
          everything between them.
        </p>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="s-label">What We Do</div>
        <div className="s-title">Four pillars. Full control.</div>
        <div className="cap-grid">
          <div className="cap-card">
            <div className="cap-num">01</div>
            <h3>Import</h3>
            <p>
              Global procurement and logistics infrastructure for orthopedic implants and instrumentation. FDA-grade
              warehousing, inventory management, and customs coordination through our international operations hub. Full
              chain-of-custody traceability from manufacturer to market.
            </p>
          </div>
          <div className="cap-card">
            <div className="cap-num">02</div>
            <h3>Develop</h3>
            <p>
              Proprietary instrumentation IP engineered for the minimally invasive surgery migration. Our development
              pipeline bridges the gap between surgeon insight and commercialization-ready products &mdash; from design
              controls and prototyping through regulatory clearance and market launch.
            </p>
          </div>
          <div className="cap-card">
            <div className="cap-num">03</div>
            <h3>Train</h3>
            <p>
              Structured surgical education programs built for safe adoption and reproducible outcomes. CME-accredited
              cadaver labs, proctored case programs, and certification pathways developed in partnership with academic
              medical institutions. Training is the product, not an afterthought.
            </p>
          </div>
          <div className="cap-card">
            <div className="cap-num">04</div>
            <h3>Distribute</h3>
            <p>
              Direct-to-facility sales infrastructure serving ambulatory surgery centers, hospitals, and physician
              practices. Per-case deployment model aligned with GPO reimbursement. Our distribution network turns
              inventory into procedures and procedures into predictable revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="s-label">How We Think</div>
        <div className="s-title">Architecture over ambition.</div>
        <p className="s-body">
          Every business line we operate stands on its own economics. We build systems designed to scale nationally
          &mdash; not local operations designed to survive.
        </p>
        <div className="approach-grid">
          <div className="approach-item">
            <h4>Vertical Integration</h4>
            <p>
              We control procurement, development, education, and distribution under one infrastructure. This eliminates
              middlemen, compresses timelines, and protects margin at every node in the chain.
            </p>
          </div>
          <div className="approach-item">
            <h4>Compliance-First Operations</h4>
            <p>
              Our entity architecture, contract structures, and physician engagement models are built to withstand
              regulatory scrutiny from day one. Ethics and compliance are operating constraints, not afterthoughts.
            </p>
          </div>
          <div className="approach-item">
            <h4>Capital Efficiency</h4>
            <p>
              Asset-light manufacturing partnerships. Procedure-driven revenue models. Working capital deployed into
              inventory that converts to cases within weeks, not quarters. Every dollar earns its seat.
            </p>
          </div>
          <div className="approach-item">
            <h4>Platform Compounding</h4>
            <p>
              Shared infrastructure across business lines creates compounding value. Physician relationships built
              through training generate distribution volume. Distribution volume unlocks procurement leverage. Each line
              strengthens the others.
            </p>
          </div>
        </div>
      </section>

      <section className="sectors">
        <div className="s-label">Where We Operate</div>
        <div className="s-title">Surgical markets in transition.</div>
        <p className="s-body">
          We focus on specialties where the shift from hospital to ambulatory settings is creating structural demand for
          new instrumentation, new supply chains, and new training infrastructure.
        </p>
        <div className="sector-row">
          <div className="sector">
            <h4>Total Knee Arthroplasty</h4>
            <p>Minimally invasive instrumentation for the ASC migration</p>
          </div>
          <div className="sector">
            <h4>Orthopedic Implants</h4>
            <p>Direct-import distribution with per-case economics</p>
          </div>
          <div className="sector">
            <h4>Surgical Education</h4>
            <p>CME-accredited training with academic partnerships</p>
          </div>
          <div className="sector">
            <h4>Revenue Cycle</h4>
            <p>AI-powered denial prediction and reimbursement optimization</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="s-label">Get in Touch</div>
        <div className="s-title">Built for partnership.</div>
        <p className="s-body" style={{ margin: "0 auto" }}>
          Whether you are a surgeon exploring new instrumentation, a facility evaluating implant economics, or a partner
          seeking platform-level collaboration &mdash; we should talk.
        </p>
        <a href="mailto:info@northstarsurgical.com" className="contact-email">
          info@northstarsurgical.com
        </a>
      </section>

      <footer>
        <div className="ft-logo">
          <img src="/images/nsi-logo.png" alt="Northstar Surgical Innovations" />
        </div>
        <p>&copy; 2026 Northstar Surgical Innovations, LLC &middot; All Rights Reserved</p>
      </footer>
    </main>
  );
}
