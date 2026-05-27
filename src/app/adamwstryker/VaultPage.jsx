"use client";

import { useState, useEffect, useRef } from "react";

/**
 * AdamWStryker.com — VAULT ARCHITECTURE
 *
 * TWO STATES:
 * 1. LOCKED  — What the world sees. A sealed door. Intentionally scarce.
 * 2. UNLOCKED — Full site. Revealed only after NDA + vetting + access code.
 *
 * ACCESS FLOW:
 * - Visitor requests access via the form (name, email, organization, purpose)
 * - You review. If vetted, you send them an access code.
 * - They enter the code. Vault unlocks. Full narrative revealed.
 *
 * TO CONFIGURE:
 * - Set ACCESS_CODE below to whatever you want (change it per contact for tracking)
 * - Wire the request form to your backend (Formspree, email, etc.)
 * - The unlocked state renders the full site you already have
 *
 * DROP-IN: Save as app/page.jsx
 */

const ACCESS_CODE = "EGEIRO2026"; // Change this. Can also be dynamic via API.

// ─── LOCKED STATE ────────────────────────────────────────────────────────────

function VaultLocked({ onUnlock }) {
  const [phase, setPhase] = useState("landing"); // landing | request | code
  const [form, setForm] = useState({ name: "", email: "", org: "", purpose: "" });
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const intervalRef = useRef(null);

  // Subtle glitch on the title every few seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCodeSubmit = () => {
    if (code.trim().toUpperCase() === ACCESS_CODE) {
      onUnlock();
    } else {
      setCodeError(true);
      setTimeout(() => setCodeError(false), 2000);
    }
  };

  const handleRequestSubmit = async () => {
    // Wire to your backend. Example: Formspree
    // await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setSubmitted(true);
  };

  return (
    <div className="vault-shell">
      {/* Grain texture overlay */}
      <div className="vault-hero-bg" />
      <div className="vault-grain" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 1px); clip-path: inset(20% 0 30% 0); }
          40% { transform: translate(2px, -1px); clip-path: inset(60% 0 10% 0); }
          60% { transform: translate(-1px, 2px); clip-path: inset(40% 0 50% 0); }
          80% { transform: translate(1px, -1px); clip-path: inset(80% 0 5% 0); }
          100% { transform: translate(0); clip-path: none; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .vault-shell {
          min-height: 100svh;
          background: #050505;
          color: #f5f4f1;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-x: hidden;
          isolation: isolate;
        }
        .vault-hero-bg {
          position: fixed;
          inset: 0;
          z-index: -3;
          background:
            linear-gradient(90deg, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.82) 38%, rgba(5,5,5,0.56) 72%, rgba(5,5,5,0.92) 100%),
            linear-gradient(180deg, rgba(5,5,5,0.32) 0%, rgba(5,5,5,0.78) 72%, #050505 100%);
          filter: saturate(0.78) contrast(1.05);
        }
        .vault-hero-bg::before {
          content: "";
          position: absolute;
          inset: 4svh 0 4svh auto;
          width: min(54vw, 72svh);
          background: url('/images/adam-hero.png') right center / contain no-repeat;
        }
        .vault-hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 16%, rgba(139,30,30,0.22), transparent 30%),
            radial-gradient(circle at 12% 78%, rgba(31,57,70,0.34), transparent 36%);
        }
        .vault-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          opacity: 0.26;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.10'/%3E%3C/svg%3E");
        }
        .vault-nav {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          padding: 28px clamp(24px, 5vw, 56px);
          border-bottom: 1px solid rgba(245,244,241,0.08);
          background: rgba(5,5,5,0.55);
          backdrop-filter: blur(18px);
        }
        .vault-brand {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: #fff;
        }
        .vault-kicker {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: rgba(245,244,241,0.42);
          text-align: center;
        }
        .vault-nav .vault-link {
          justify-self: end;
        }
        .vault-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(48px, 8vh, 86px) clamp(22px, 7vw, 84px);
          position: relative;
          z-index: 5;
        }
        .vault-landing {
          width: min(760px, 100%);
          animation: fadeUp 0.8s ease forwards;
        }
        .vault-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(139,30,30,0.54);
          background: rgba(10,10,10,0.58);
          padding: 8px 14px;
          margin-bottom: clamp(28px, 5vw, 46px);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #d14b45;
        }
        .vault-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #b52a27;
          animation: blink 2s ease-in-out infinite;
          display: inline-block;
          flex: 0 0 auto;
        }
        .vault-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(58px, 11vw, 124px);
          line-height: 0.86;
          letter-spacing: -0.025em;
          margin: 0 0 26px;
          color: #fff;
          max-width: 9ch;
          text-wrap: balance;
          position: relative;
        }
        .vault-title span {
          color: #a32323;
          display: block;
        }
        .vault-tagline {
          font-size: clamp(17px, 2.1vw, 23px);
          color: rgba(245,244,241,0.72);
          margin: 0 0 12px;
          line-height: 1.45;
          max-width: 620px;
        }
        .vault-series {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(245,244,241,0.34);
          margin: 0 0 clamp(34px, 5vw, 54px);
        }
        .vault-hook {
          max-width: 550px;
          text-align: left;
          border-left: 2px solid rgba(139,30,30,0.6);
          padding: 4px 0 4px 22px;
          margin: 0 0 clamp(34px, 5vw, 54px);
          background: linear-gradient(90deg, rgba(5,5,5,0.42), rgba(5,5,5,0));
        }
        .vault-hook p {
          margin: 0 0 10px;
          font-size: 17px;
          line-height: 1.55;
          color: rgba(245,244,241,0.70);
        }
        .vault-hook p:first-child {
          color: #c93230;
          font-weight: 700;
          font-size: clamp(18px, 2.7vw, 26px);
        }
        .vault-hook p:nth-last-child(-n + 3) {
          color: rgba(255,255,255,0.96);
          font-weight: 700;
        }
        .vault-redacted {
          display: block;
          width: min(100%, 430px);
          height: 13px;
          margin: 16px 0;
          opacity: 0.38;
          background: repeating-linear-gradient(90deg, rgba(245,244,241,0.16) 0 18px, rgba(245,244,241,0.06) 18px 19px);
        }
        .vault-credentials {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          width: min(760px, 100%);
          margin: 0 0 clamp(34px, 5vw, 52px);
        }
        .vault-credential {
          border-top: 1px solid rgba(245,244,241,0.14);
          padding-top: 14px;
        }
        .vault-credential strong {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          color: #fff;
          margin-bottom: 4px;
        }
        .vault-credential span {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.16em;
          line-height: 1.45;
          text-transform: uppercase;
          color: rgba(245,244,241,0.36);
        }
        .vault-actions {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }
        .vault-fine {
          margin: 34px 0 0;
          max-width: 640px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(245,244,241,0.22);
          line-height: 1.8;
        }
        .vault-input {
          background: rgba(245,244,241,0.04);
          border: 1px solid rgba(245,244,241,0.12);
          color: #f5f4f1;
          padding: 14px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .vault-input:focus { border-color: rgba(139,30,30,0.7); }
        .vault-input::placeholder { color: rgba(245,244,241,0.25); }
        .vault-btn {
          background: #8b1e1e;
          color: #f5f4f1;
          border: none;
          padding: 16px 40px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .vault-btn:hover { background: #a02222; }
        .vault-btn:active { transform: scale(0.98); }
        .vault-link {
          color: rgba(245,244,241,0.4);
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
          background: none;
          border: none;
          padding: 0;
        }
        .vault-link:hover { color: rgba(245,244,241,0.75); }
        .vault-footer {
          position: relative;
          z-index: 10;
          padding: 20px clamp(24px, 5vw, 56px);
          border-top: 1px solid rgba(245,244,241,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: rgba(5,5,5,0.64);
          backdrop-filter: blur(18px);
        }
        .vault-footer div {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,244,241,0.26);
        }
        @media (max-width: 760px) {
          .vault-hero-bg {
            position: absolute;
            height: min(76svh, 680px);
            bottom: auto;
            overflow: hidden;
            background:
              linear-gradient(180deg, rgba(5,5,5,0.12) 0%, rgba(5,5,5,0.18) 42%, rgba(5,5,5,0.78) 82%, #050505 100%),
              linear-gradient(90deg, rgba(5,5,5,0.42) 0%, rgba(5,5,5,0.08) 48%, rgba(5,5,5,0.46) 100%),
              #050505;
          }
          .vault-hero-bg::before {
            inset: 12px 0 auto;
            width: 100%;
            height: min(64svh, 128vw);
            background-position: center top;
            background-size: contain;
          }
          .vault-hero-bg::after {
            background:
              linear-gradient(180deg, transparent 0%, transparent 54%, #050505 100%),
              radial-gradient(circle at 50% 18%, rgba(139,30,30,0.14), transparent 40%);
          }
          .vault-nav {
            grid-template-columns: 1fr auto;
            padding: 18px 22px;
          }
          .vault-kicker {
            display: none;
          }
          .vault-main {
            justify-content: flex-start;
            min-height: calc(100svh - 126px);
            padding: min(66svh, 570px) 22px 38px;
          }
          .vault-title {
            font-size: clamp(46px, 16vw, 68px);
            line-height: 0.9;
            max-width: 7.5ch;
            margin-bottom: 18px;
          }
          .vault-badge {
            font-size: 9px;
            letter-spacing: 0.22em;
            padding: 7px 11px;
            margin-bottom: 24px;
          }
          .vault-tagline {
            font-size: 17px;
            max-width: 310px;
          }
          .vault-series {
            font-size: 9px;
            letter-spacing: 0.18em;
            line-height: 1.7;
            margin-bottom: 30px;
            max-width: 310px;
          }
          .vault-hook {
            padding-left: 16px;
            margin-bottom: 32px;
          }
          .vault-hook p {
            font-size: 16px;
            line-height: 1.5;
          }
          .vault-credentials {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px 18px;
          }
          .vault-actions {
            align-items: stretch;
            flex-direction: column;
          }
          .vault-actions .vault-btn,
          .vault-actions .vault-link {
            width: 100%;
            text-align: center;
          }
          .vault-footer {
            padding: 18px 22px 28px;
          }
        }
      `}</style>

      {/* Scanline */}
      <div style={{
        position: "fixed", left: 0, right: 0, height: "2px",
        background: "linear-gradient(to right, transparent, rgba(139,30,30,0.4), transparent)",
        animation: "scanline 6s linear infinite",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* NAV */}
      <nav className="vault-nav">
        <div className="vault-brand">
          AWS
        </div>
        <div className="vault-kicker">
          ἐγείρω · EGEIRO HOLDINGS
        </div>
        <button
          className="vault-link"
          onClick={() => setPhase("code")}
        >
          Enter Access Code
        </button>
      </nav>

      {/* MAIN */}
      <main className="vault-main">

        {/* LANDING PHASE */}
        {phase === "landing" && (
          <div className="vault-landing">

            {/* Classified badge */}
            <div className="vault-badge">
              <span className="vault-badge-dot" />
              Restricted Access
            </div>

            {/* Name */}
            <h1
              className="vault-title"
              style={{ animation: glitching ? "glitch 0.15s steps(2) forwards" : "none" }}
            >
              ADAM W.<br />
              <span>STRYKER</span>
            </h1>

            {/* Tagline */}
            <p className="vault-tagline">
              Healthcare Operator. Investor. Systems Architect.
            </p>

            {/* Series name */}
            <p className="vault-series">
              Author · Candor Through Fire
            </p>

            {/* The hook — redacted lines */}
            <div className="vault-hook">
              {[
                "Fraud. Deceit. Corruption. Theft.",
                "A decade of deliberate destruction",
                "by those closest to him.",
                "redacted",
                "They thought it was over.",
                "redacted",
                "It wasn't.",
                "He stood back up.",
                "He always does.",
              ].map((line, i) => (
                line === "redacted"
                  ? <span key={i} className="vault-redacted" aria-hidden="true" />
                  : <p key={i}>{line}</p>
              ))}
            </div>

            {/* Credential strip */}
            <div className="vault-credentials">
              {[
                ["Inc. 5000", "Fast-Growth Recognition"],
                ["Top 300", "Healthcare Executives"],
                ["Top 10", "GHM Infrastructure Leaders 2026"],
                ["Still", "Standing"],
              ].map(([stat, label]) => (
                <div key={stat} className="vault-credential">
                  <strong>{stat}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="vault-actions">
              <button className="vault-btn" onClick={() => setPhase("request")}>
                Request Access
              </button>
              <button
                className="vault-link"
                style={{ padding: "16px 24px" }}
                onClick={() => setPhase("code")}
              >
                I have an access code →
              </button>
            </div>

            {/* Fine print */}
            <p className="vault-fine">
              Access subject to NDA execution and vetting.<br />
              Publishing rights, advisory, and strategic options available by arrangement.<br />
              Unauthorized distribution will be prosecuted.
            </p>
          </div>
        )}

        {/* REQUEST ACCESS PHASE */}
        {phase === "request" && !submitted && (
          <div style={{ animation: "fadeUp 0.6s ease forwards", maxWidth: "520px", width: "100%", textAlign: "left" }}>
            <button
              className="vault-link"
              onClick={() => setPhase("landing")}
              style={{ marginBottom: "40px", display: "block" }}
            >
              ← Back
            </button>

            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#8b1e1e", marginBottom: "16px",
            }}>
              Access Request
            </div>

            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.1,
              marginBottom: "12px", color: "#f5f4f1",
            }}>
              Who are you?
            </h2>
            <p style={{
              color: "rgba(245,244,241,0.45)", fontSize: "15px",
              marginBottom: "40px", lineHeight: 1.6,
            }}>
              Requests are reviewed personally. If you're in the right room, you'll hear back within 48 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              <input
                className="vault-input"
                placeholder="Full name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="vault-input"
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="vault-input"
                placeholder="Organization / firm"
                value={form.org}
                onChange={e => setForm({ ...form, org: e.target.value })}
              />
              <textarea
                className="vault-input"
                placeholder="Why are you requesting access? (publishing, advisory, acquisition, media)"
                value={form.purpose}
                onChange={e => setForm({ ...form, purpose: e.target.value })}
                rows={4}
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              className="vault-btn"
              style={{ width: "100%" }}
              onClick={handleRequestSubmit}
            >
              Submit Request
            </button>
          </div>
        )}

        {/* SUBMITTED */}
        {phase === "request" && submitted && (
          <div style={{ animation: "fadeUp 0.6s ease forwards", maxWidth: "480px", textAlign: "center" }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#8b1e1e", marginBottom: "24px",
            }}>
              Request Received
            </div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.1,
              color: "#f5f4f1", marginBottom: "20px",
            }}>
              Stand by.
            </h2>
            <p style={{
              color: "rgba(245,244,241,0.45)", fontSize: "15px", lineHeight: 1.7,
              marginBottom: "40px",
            }}>
              Your request has been logged. If you belong in this conversation, you'll receive a personal response and access code within 48 hours.
            </p>
            <button className="vault-link" onClick={() => setPhase("landing")}>
              ← Return
            </button>
          </div>
        )}

        {/* ACCESS CODE PHASE */}
        {phase === "code" && (
          <div style={{ animation: "fadeUp 0.6s ease forwards", maxWidth: "420px", width: "100%", textAlign: "center" }}>
            <button
              className="vault-link"
              onClick={() => setPhase("landing")}
              style={{ marginBottom: "48px", display: "block", margin: "0 auto 48px" }}
            >
              ← Back
            </button>

            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#8b1e1e", marginBottom: "24px",
            }}>
              Vault Access
            </div>

            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1.05,
              color: "#f5f4f1", marginBottom: "40px",
            }}>
              Enter your code.
            </h2>

            <input
              className="vault-input"
              placeholder="ACCESS CODE"
              value={code}
              onChange={e => setCode(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleCodeSubmit()}
              style={{
                textAlign: "center",
                fontSize: "18px",
                letterSpacing: "0.3em",
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: "16px",
                border: codeError
                  ? "1px solid rgba(139,30,30,0.8)"
                  : "1px solid rgba(245,244,241,0.12)",
                transition: "border-color 0.3s",
              }}
            />

            {codeError && (
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#8b1e1e",
                marginBottom: "16px",
              }}>
                Access denied. Try again.
              </p>
            )}

            <button className="vault-btn" style={{ width: "100%" }} onClick={handleCodeSubmit}>
              Unlock
            </button>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="vault-footer">
        <div>
          © 2026 Adam W. Stryker · All Rights Reserved
        </div>
        <div>
          Las Vegas · Dallas · Panama
        </div>
      </footer>
    </div>
  );
}

// ─── UNLOCKED STATE ───────────────────────────────────────────────────────────
// VAULT INTERIOR — Tabbed document view system
// Renders all documents as tabbed HTML views behind the access code.

const TABS = [
  { id: "author", label: "About the Author" },
  { id: "series", label: "Candor Through Fire" },
  { id: "chapters", label: "Chapter Architecture" },
  { id: "brand", label: "Brand Architecture" },
  { id: "mediakit", label: "Media Kit" },
];

// ─── SHARED STYLES ─────────────────────────────────────────────────────────

const S = {
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "9px", letterSpacing: "0.3em",
    textTransform: "uppercase", color: "#8b1e1e",
    marginBottom: "12px", display: "block",
  },
  h1: {
    fontFamily: "'Syne', sans-serif", fontWeight: 800,
    fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1.0,
    letterSpacing: "-0.02em", color: "#1a1a1a",
    marginBottom: "40px",
  },
  h2: {
    fontFamily: "'Syne', sans-serif", fontWeight: 800,
    fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.1,
    color: "#1a1a1a", marginBottom: "12px", marginTop: "48px",
  },
  h3: {
    fontFamily: "'Syne', sans-serif", fontWeight: 700,
    fontSize: "18px", color: "#1a1a1a",
    marginBottom: "8px", marginTop: "32px",
  },
  p: {
    fontSize: "15px", lineHeight: 1.8,
    color: "rgba(26,26,26,0.8)", marginBottom: "16px",
  },
  rule: {
    border: "none", borderTop: "1px solid rgba(26,26,26,0.1)",
    margin: "40px 0",
  },
  tag: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "9px", letterSpacing: "0.2em",
    textTransform: "uppercase", color: "rgba(26,26,26,0.4)",
    border: "1px solid rgba(26,26,26,0.15)",
    padding: "3px 8px", display: "inline-block",
    marginBottom: "16px",
  },
  redAccent: { color: "#8b1e1e" },
  bold: { fontWeight: 700, color: "#1a1a1a" },
  italic: { fontStyle: "italic" },
  pullQuote: {
    borderLeft: "3px solid #8b1e1e", paddingLeft: "20px",
    margin: "32px 0", fontSize: "18px", fontWeight: 700,
    fontFamily: "'Syne', sans-serif", lineHeight: 1.4, color: "#1a1a1a",
  },
  grid2: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    gap: "32px", marginBottom: "32px",
  },
  card: {
    borderLeft: "2px solid #8b1e1e", paddingLeft: "16px",
    paddingBottom: "8px",
  },
};

// ─── TAB: ABOUT THE AUTHOR ──────────────────────────────────────────────────

function TabAuthor() {
  return (
    <div>
      <span style={S.label}>About the Author</span>
      <h1 style={S.h1}>Adam W. Stryker</h1>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "64px", alignItems: "start" }}>
        <div>
          <p style={{ ...S.p, fontSize: "18px", fontWeight: 700, color: "#1a1a1a" }}>
            He doesn't just stand up. He fights back.
          </p>
          {[
            "For eighteen years, Adam Stryker has built regulated platforms across healthcare, private equity, and medical device infrastructure—turning complex, compliance-sensitive environments into scalable operating systems. He served as CTO and SVP of Strategy at Americans for Prosperity, directing technology, data, and field operations across 35 states and 2,500+ team members.",
            "He built Orthopedic Motion to Inc. 5000 recognition, 225% revenue growth, multi-market expansion across Nevada, Reno, and Omaha, and a documented $12M sale valuation. He was named one of the Top 300 Healthcare Executives and recognized by Global Healthcare Magazine as one of the 10 Most Influential Healthcare Infrastructure Leaders to Watch in 2026.",
            "In 2015, his ex-wife signed papers tying his name to Orthopedic Motion. What he discovered beneath the surface was a system built on fraud, deceit, and the deliberate theft of institutional trust. Under Nevada community property law, every liability was already his. He stayed. For nine years he dismantled the corruption and rebuilt the company on clean systems.",
            "In 2024, as the sale closed in due diligence, she brought in a billionaire's foundation and executed a coordinated assault to bury him before the deeper fraud surfaced. The $12M sale collapsed. In October 2024, he walked away—hospitalized twice with a life-threatening infection, leaving the ER against medical advice to drive through a South Dakota blizzard to reach his children.",
            "For nine months, he drove DoorDash, skipped meals so his children could eat, sat in welfare offices, and slept in his car. By Christmas 2024, he had built StrykeFox Medical from a couch in a sparse apartment. By early 2025, he had secured the SENSARS board seat, launched Northstar Surgical Innovations, and was recruited to build healthcare M&A at Dark Alpha Capital.",
            "He documented everything. What they built to destroy him became the foundation he rebuilt on. He defended himself pro se in family court against an army of Ivy League attorneys, got opposing counsel disqualified from the case, filed a bar complaint for his conduct, and won.",
          ].map((p, i) => <p key={i} style={S.p}>{p}</p>)}

          <div style={S.pullQuote}>
            The methodology is still running.
          </div>

          <p style={{ ...S.p, fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "rgba(26,26,26,0.45)" }}>
            Las Vegas · Dallas · Panama · Father of two.
          </p>
        </div>

        <aside>
          <div style={{
            background: "#e8e7e4", marginBottom: "32px",
            aspectRatio: "3/4", overflow: "hidden",
            position: "relative",
          }}>
            <img
              src="/headshots/adam-hero.jpg"
              alt="Adam W. Stryker"
              style={{ 
                width: "120%", 
                height: "120%", 
                objectFit: "cover", 
                objectPosition: "top center",
                position: "absolute",
                top: "-10%",
                left: "-10%",
                opacity: 0.85,
              }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(232,231,228,0) 0%, rgba(232,231,228,0.3) 50%, rgba(232,231,228,0.7) 100%)",
            }} />
          </div>

          {[
            { heading: "Recognition", items: [
              ["Global Healthcare Magazine", "10 Most Influential Healthcare Infrastructure Leaders 2026"],
              ["Top 300", "Healthcare Executives"],
              ["Inc. 5000", "Orthopedic Motion, 2019"],
            ]},
            { heading: "Operating Portfolio", items: [
              ["StrykeFox Medical", "Founder & CEO"],
              ["Dark Alpha Capital", "VP of Acquisitions"],
              ["Northstar Surgical Innovations", "Founder"],
              ["SENSARS Neuroprosthetics", "Board · Executive Finance"],
            ]},
            { heading: "Contact", items: [
              ["Press", "press@adamwstryker.com"],
              ["Publishing", "publishing@adamwstryker.com"],
              ["Speaking", "speaking@adamwstryker.com"],
            ]},
          ].map(({ heading, items }) => (
            <div key={heading} style={{ marginBottom: "32px" }}>
              <div style={S.label}>{heading}</div>
              {items.map(([a, b]) => (
                <div key={a} style={{ borderTop: "1px solid rgba(26,26,26,0.1)", padding: "10px 0" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>{a}</div>
                  <div style={{ fontSize: "11px", color: "rgba(26,26,26,0.5)", marginTop: "2px" }}>{b}</div>
                </div>
              ))}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

// ─── TAB: CANDOR THROUGH FIRE ────────────────────────────────────────────────

function TabSeries() {
  return (
    <div>
      <span style={S.label}>Candor Through Fire · Series Overview</span>
      <h1 style={S.h1}>A name inherited.<br />A man delivered.</h1>

      <p style={{ ...S.p, fontSize: "17px" }}>
        Candor Through Fire is a four-volume work of commercial nonfiction by Adam Stryker, founder of Egeiro Holdings. The series tracks one man's passage through a thermal arc—ignition, forging, revelation, resurrection—against the backdrop of a real American political and healthcare landscape that he built his way into on his own ground, and the parallel private crisis that eventually collided with the public ascent and reshaped the rest of his operating life.
      </p>
      <p style={S.p}>
        Volume I is a narrative-nonfiction reconstruction of how the arc began. Volume II is a strategic field manual drawn from the same years, written for operators. Volume III is a movement book for the unseen architects of commerce—the salesmen and builders whose work disappears into the infrastructure and whose absence is the proof the system is functioning. Volume IV is the capstone: a philosophical reckoning with what remains after a life is burned down to its foundations and rebuilt.
      </p>
      <p style={{ ...S.p, fontStyle: "italic", color: "rgba(26,26,26,0.6)" }}>
        The series is rooted in primary documentation. The access is not recoverable by another writer.
      </p>

      <hr style={S.rule} />

      {/* VOL I */}
      <div style={{ marginBottom: "56px" }}>
        <span style={{ ...S.tag, borderColor: "#8b1e1e", color: "#8b1e1e" }}>Volume I · Manuscript Complete · Agent Query Ready</span>
        <h2 style={{ ...S.h2, marginTop: "12px" }}>Collateral Damage</h2>
        <div style={{ fontStyle: "italic", color: "rgba(26,26,26,0.5)", marginBottom: "20px", fontSize: "15px" }}>Stepping Into Fire · Ignition</div>

        <div style={S.pullQuote}>
          A self-made political operator, seated at Donald Trump's table a year before the election, discovers that while he has been building his public trajectory on earned ground, a private fire has been burning at his kitchen table.
        </div>

        <p style={S.p}>
          Las Vegas, 2015. A private lunch at Treasure Island. Donald Trump at the head of the table, a year before he wins. Adam Stryker is thirty, one of the youngest men in the room—and he is in that room because he put himself there. He started in Sheldon Adelson's shop under Andy Abboud, left to join Americans for Prosperity, and kept the bridge to the Adelson network. The political architecture around him is real and it is his.
        </p>
        <p style={S.p}>
          What no one at that lunch knows is that a second fire is already burning at home. A private storm is gathering around his marriage and the medical billing business his ex-wife has become entangled in. The two tracks have nothing to do with each other on paper. On the ground, they are about to collide.
        </p>
        <p style={S.p}>
          The book opens earlier still: a gentle, competitive father—one of the builders of Minnesota girls' hockey—dying of a heart attack at fifty-three in 2003, his name permanently installed by the Minnesota Wild as the State of Hockey's benchmark for what a coach is supposed to be. A son left to metabolize a legacy he did not fully understand until twenty years later.
        </p>
        <p style={S.p}>
          Stepping Into Fire is the reconstruction of how the collision happened and how he came out the other side of it holding his name, his children, and a blueprint for what would become Egeiro Holdings. The book moves with the velocity of a thriller and the documentation of a ledger.
        </p>

        <div style={{ marginTop: "24px" }}>
          <div style={S.label}>Comparable Titles</div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              "Catch and Kill (Farrow)",
              "Bad Blood (Carreyrou)",
              "Just Mercy (Stevenson)",
            ].map(c => <span key={c} style={S.tag}>{c}</span>)}
          </div>
        </div>
      </div>

      <hr style={S.rule} />

      {/* VOL II */}
      <div style={{ marginBottom: "56px" }}>
        <span style={S.tag}>Volume II · Manuscript in Development</span>
        <h2 style={{ ...S.h2, marginTop: "12px" }}>Architect of Leverage</h2>
        <div style={{ fontStyle: "italic", color: "rgba(26,26,26,0.5)", marginBottom: "20px", fontSize: "15px" }}>Fire Forges Iron · Forging</div>
        <p style={S.p}>
          Where Collateral Damage is the wreckage, Architect of Leverage is the doctrine. Leverage is structured asymmetry: legal position, cash flow, narrative control, and optionality. Stryker extracts a four-pillar operational model from a decade of crisis-tested execution—how to build enterprises that survive contact with regulatory storms, litigation pressure, and institutional betrayal.
        </p>
        <p style={S.p}>
          Compliance is a weapon. Documentation is leverage. Ethics is not idealism; it is structural integrity. The epilogue line: An architect does not complain about gravity. He designs for it.
        </p>
      </div>

      <hr style={S.rule} />

      {/* VOL III */}
      <div style={{ marginBottom: "56px" }}>
        <span style={S.tag}>Volume III · Thesis Stage</span>
        <h2 style={{ ...S.h2, marginTop: "12px" }}>The Empty Seat of the Unknown Salesman</h2>
        <div style={{ fontStyle: "italic", color: "rgba(26,26,26,0.5)", marginBottom: "20px", fontSize: "15px" }}>Character Is Revealed in the Heat · Revelation</div>
        <p style={S.p}>
          The deepest application of the Execution Model: the relational operating model where the salesman disappears by design. The system makes the decision. The patient, the beneficiary, the user never knows the architect existed. That is not failure. That is the architecture working.
        </p>
        <p style={S.p}>
          The discipline the series instills: you will never get credit from the person who benefits most from what you do. That's not a failure of the system. That's the design of the system. The moment you need the credit, you've broken the architecture.
        </p>
        <p style={S.p}>
          Built on case studies from StrykeFox, SPEAR, Northstar, and SENSARS. Positioned for enterprise CROs, MedTech VPs, and the future of compliance-first selling.
        </p>
      </div>

      <hr style={S.rule} />

      {/* VOL IV */}
      <div style={{ marginBottom: "40px" }}>
        <span style={S.tag}>Volume IV · Capstone · In Development</span>
        <h2 style={{ ...S.h2, marginTop: "12px" }}>Still Standing</h2>
        <div style={{ fontStyle: "italic", color: "rgba(26,26,26,0.5)", marginBottom: "20px", fontSize: "15px" }}>From the Ashes · Resurrection</div>
        <p style={S.p}>
          The philosophical capstone. What does it mean to survive something designed to end you? Not a how-to. A meditation on identity, endurance, the genetic inheritance of integrity, and what you do with the fact that you are still standing.
        </p>
        <p style={S.p}>
          The Code—anchored to Charlie Stryker's coaching philosophy, the Joe Burke Award, and the institutional standard a father's name became—runs as the structural thesis. The relational operating model's proof of success is that the beneficiary never knows the architect existed. Invisibility equals system working, not failure.
        </p>
      </div>
    </div>
  );
}

// ─── TAB: CHAPTER ARCHITECTURE ──────────────────────────────────────────────

function TabChapters() {
  return (
    <div>
      <span style={S.label}>Trilogy · Chapter Architecture & Intellectual Framework</span>
      <h1 style={S.h1}>The Unified Thesis</h1>

      <div style={S.pullQuote}>
        Every salesperson in every industry is trained to focus on the person across the table. But the real beneficiary is someone they'll never meet, never know, never hear from. The close isn't the close. The close is what happens downstream—to someone who has no idea you exist.
      </div>

      <p style={S.p}>
        The discipline the trilogy instills: you will never get credit from the person who benefits most from what you do. That's not a failure of the system. That's the design of the system. The moment you need the credit, you've broken the architecture.
      </p>
      <p style={{ ...S.p, fontStyle: "italic", color: "rgba(26,26,26,0.6)" }}>
        This is Good Profit extrapolated and deployed across every industry where a chain exists between seller and ultimate beneficiary. It is the invisible hand—functioning as designed.
      </p>

      <hr style={S.rule} />

      {/* Intellectual architecture table */}
      <h2 style={S.h2}>Intellectual Architecture</h2>
      <div style={{ marginBottom: "40px" }}>
        {[
          ["Russell Brand — Recovery", "Ego dismantling, addiction to credit, 'Am I fucked?' as qualifying question", "Book 1: Collateral Damage"],
          ["Tony Robbins", "Belief-state-action loop; state determines action, belief determines state", "Book 1 → Book 2 bridge"],
          ["Charles Koch — Good Profit / MBM", "Good profit vs. bad profit; Market Based Management's five dimensions as personal OS", "Book 2: Architect of Leverage"],
          ["Friedrich Hayek", "Distributed knowledge problem; frontline actors hold information central planners cannot", "Book 2 & Book 3"],
          ["Milton Friedman", "Self-interest properly channeled produces optimal system outcomes; capitalism completed", "Book 3: The Execution Model"],
          ["Peter Thiel — Zero to One", "Monopoly architecture; category creation over competition", "Book 3: The Execution Model"],
          ["Daniel Kahneman — Thinking, Fast and Slow", "System 1 entrenchment; decision made before conscious deliberation", "Book 3: The Execution Model"],
          ["Jim Manzi — Uncontrolled", "Causal inference limits; clean attribution is impossible in complex systems", "Book 3: The Execution Model"],
          ["Adam Smith — Invisible Hand", "System-level beneficiary chain; positive externalities as design output", "Book 3: The Execution Model"],
          ["GOTV / Political Operations", "Invisible infrastructure; uncredited impact; precinct-level system design", "All three books"],
          ["Lance Armstrong — It's Not About the Bike", "Process integrity; outcome as byproduct of architecture; endurance frame", "Trilogy throughline"],
        ].map(([influence, contribution, placement]) => (
          <div key={influence} style={{
            display: "grid", gridTemplateColumns: "1fr 2fr 1fr",
            gap: "24px", borderTop: "1px solid rgba(26,26,26,0.08)",
            padding: "16px 0", alignItems: "start",
          }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>{influence}</div>
            <div style={{ fontSize: "13px", color: "rgba(26,26,26,0.7)", lineHeight: 1.6 }}>{contribution}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
              letterSpacing: "0.1em", color: "#8b1e1e",
              textTransform: "uppercase",
            }}>{placement}</div>
          </div>
        ))}
      </div>

      <hr style={S.rule} />

      {/* Book One chapter breakdown */}
      <h2 style={S.h2}>Book One: Collateral Damage</h2>
      <div style={{ ...S.tag }}>The Audit of Bad Profit</div>
      <p style={S.p}>What happens when you optimize for extraction—from yourself, from relationships, from transactions. The wreckage isn't just personal. It's systemic.</p>

      <h3 style={S.h3}>Part I — Am I Fucked?</h3>
      {[
        ["Chapter 1: The Scoreboard That Lies", "How winning felt like proof—until it wasn't. The traditional metrics of success and the moment you realize they've been measuring the wrong thing. Introduction of the central question borrowed from Brand's framework: a brutally honest self-assessment that collapses every defense mechanism in one pass."],
        ["Chapter 2: The Wreckage Inventory", "A systematic audit of the collateral damage created by operating without a downstream framework. The deals that closed but shouldn't have. The relationships extracted. The people who were collateral."],
      ].map(([title, desc]) => (
        <div key={title} style={{ marginBottom: "24px", paddingLeft: "20px", borderLeft: "2px solid rgba(26,26,26,0.1)" }}>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{title}</div>
          <div style={{ fontSize: "13px", color: "rgba(26,26,26,0.7)", lineHeight: 1.7 }}>{desc}</div>
        </div>
      ))}
    </div>
  );
}

// ─── TAB: BRAND ARCHITECTURE ────────────────────────────────────────────────

function TabBrand() {
  return (
    <div>
      <span style={S.label}>Brand Architecture v2.0 · Confidential · April 2026</span>
      <h1 style={S.h1}>The Brand Thesis</h1>

      <div style={S.pullQuote}>
        Adam Stryker is not an author who happened to live an interesting life. He is an operator who built political machines, uncovered institutional fraud, survived a billionaire-funded professional assassination, and rebuilt from the wreckage—and is now documenting the architecture of how it was done.
      </div>

      <p style={S.p}>
        The brand premise is simple: the books are the receipts, and the author is the system.
      </p>

      <h2 style={S.h2}>Brand Positioning Statement</h2>
      <p style={S.p}>
        Adam Stryker writes at the intersection of corporate power, systemic leverage, and personal survival. His work delivers operational frameworks forged in real-world crisis—not theory, not memoir, not motivational abstraction. Every principle in every book was stress-tested against a billionaire's legal apparatus, a state fraud investigation, and the total collapse of a business, a marriage, and a reputation. What survived became the methodology.
      </p>

      <hr style={S.rule} />

      <h2 style={S.h2}>One-Line Descriptors by Audience</h2>
      <div style={{ marginBottom: "40px" }}>
        {[
          ["Literary Agents / Publishers", "A former Koch Network executive and PE operator delivers the playbook on surviving institutional betrayal—with the legal receipts and an ongoing investigation to prove it."],
          ["Business / Strategy Readers", "The operator who built an $889M political machine, turned a compromised enterprise into an Inc. 5000 company, and is now pioneering AI-driven healthcare infrastructure while rebuilding from a billionaire-funded takedown."],
          ["Media / Podcast Hosts", "He uncovered a pediatric medical fraud, engaged with the state's investigation through defense counsel, and now runs surgical innovation, AI healthcare tech, and multinational operations from two countries."],
          ["General Audience", "The true story of a man who lost everything because he was right—and built an empire because he refused to stop."],
        ].map(([audience, line]) => (
          <div key={audience} style={{
            borderTop: "1px solid rgba(26,26,26,0.1)",
            padding: "20px 0",
          }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b1e1e", marginBottom: "8px" }}>{audience}</div>
            <div style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(26,26,26,0.8)", fontStyle: "italic" }}>{line}</div>
          </div>
        ))}
      </div>

      <hr style={S.rule} />

      <h2 style={S.h2}>The Onion: Brand Architecture Layers</h2>
      <p style={S.p}>The Adam Stryker brand is built in concentric layers—each one reveals more depth, more credibility, and more leverage. No matter where someone encounters the brand, they get a coherent, escalating narrative.</p>

      {[
        {
          layer: "Layer 1: The Surface",
          sub: "Public-Facing Identity",
          content: "Who he is in 10 seconds: Corporate strategist, PE executive, healthcare platform builder, and author of the Execution Model series. Visual identity: Controlled, professional, strategic. Think private equity partner meets intelligence analyst. Tone: Measured authority. Never defensive, never performative. Speaks in frameworks, not feelings.",
        },
        {
          layer: "Layer 2: The Credibility Engine",
          sub: "Verifiable Track Record",
          content: "Every claim is documentable. Built the Koch Network's targeting infrastructure ($889M deployed). Turned a compromised enterprise into an Inc. 5000 company. Uncovered pediatric helmet fraud (E&Y audit confirming 20% revenue/COGS discrepancy). Rebuilt multinational enterprise post-collapse across StrykeFox Medical, Dark Alpha Capital, Panama operations hub.",
        },
        {
          layer: "Layer 3: The Narrative Core",
          sub: "The Story That Sells the System",
          content: "The Candor Through Fire series is not autobiography. It is architecture. The books document the collapse, extract the framework, deploy the model, and deliver the philosophy. Each volume serves a different audience while remaining part of one coherent arc.",
        },
        {
          layer: "Layer 4: The IP Layer",
          sub: "The Execution Model",
          content: "The proprietary framework underlying all four books. Outcome = Direction × Velocity × Leverage. Leverage = (Control × Repeatability × Density × Trust) ÷ Complexity. The six-layer stack: Direction, Control, Repeatability, Density, Capital, Trust. This is not a framework derived from business school. It is derived from surviving.",
        },
      ].map(({ layer, sub, content }) => (
        <div key={layer} style={{
          borderLeft: "3px solid #8b1e1e", paddingLeft: "24px",
          marginBottom: "32px",
        }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "18px", color: "#1a1a1a", marginBottom: "4px" }}>{layer}</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b1e1e", marginBottom: "12px" }}>{sub}</div>
          <p style={{ ...S.p, marginBottom: 0 }}>{content}</p>
        </div>
      ))}

      <hr style={S.rule} />

      <h2 style={S.h2}>Signature Brand Assets</h2>
      <div style={S.grid2}>
        {[
          ["Signature Symbol", "The Striker Mark — locked to 'Stryker' in a way no other author can replicate."],
          ["Signature Slogan", '"The architecture is the argument."'],
          ["Signature Surprise", "The best salesman is invisible. Proof of success is that no one knows you exist."],
          ["Salient Idea", '"Execution is architecture, not activity."'],
          ["Signature Story", "Ch6 storm-year arc — character is not built in the fire. It is revealed by it."],
          ["Series Mark", "ἐγείρω (Egeiro) — to rise. The Greek character as recurring brand mark."],
        ].map(([title, desc]) => (
          <div key={title} style={S.card}>
            <div style={{ fontWeight: 700, fontSize: "13px", color: "#1a1a1a", marginBottom: "6px" }}>{title}</div>
            <div style={{ fontSize: "13px", color: "rgba(26,26,26,0.7)", fontStyle: "italic", lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TAB: MEDIA KIT ─────────────────────────────────────────────────────────

function TabMediaKit() {
  return (
    <div>
      <span style={S.label}>Official Media Kit · May 2026</span>
      <h1 style={S.h1}>Adam W. Stryker</h1>

      <h2 style={{ ...S.h2, marginTop: "0" }}>One-Line Positioning</h2>
      <p style={{ ...S.p, fontStyle: "italic", fontSize: "17px" }}>
        Adam W. Stryker is a healthcare operator, investor, and systems architect. Inc. 5000. $12M sale valuation. Top 300 Healthcare Executive. He survived a coordinated billionaire-backed assault, rebuilt three companies across two countries in nine months, and defended himself pro se against an army of Ivy League attorneys—and won.
      </p>

      <hr style={S.rule} />

      <h2 style={S.h2}>Short Bio (150 words)</h2>
      <p style={S.p}>
        Adam W. Stryker is a healthcare operator, investor, and systems architect. He built Orthopedic Motion to Inc. 5000 recognition, 225% revenue growth, and a $12M sale valuation. He was named one of the Top 300 Healthcare Executives in the industry and recognized by Global Healthcare Magazine as one of the 10 Most Influential Healthcare Infrastructure Leaders to Watch in 2026. He served as CTO and SVP of Strategy at Americans for Prosperity across 35 states. Today he operates StrykeFox Medical, Northstar Surgical Innovations, and SENSARS Neuroprosthetics, and was recruited to Dark Alpha Capital to build the healthcare M&A practice.
      </p>
      <p style={S.p}>
        In 2015, he inherited a system his ex-wife had built on fraud and deceit. For nine years he dismantled the corruption and rebuilt the company. In 2024, as the OMI sale closed in due diligence, she brought in a billionaire's foundation and executed a coordinated assault to bury him. He walked away, rebuilt three companies across Las Vegas, Dallas, and Panama in nine months, defended himself pro se in family court, got opposing counsel disqualified, filed a bar complaint, and won.
      </p>
      <p style={{ ...S.p, fontWeight: 700 }}>He doesn't just stand up. He fights back.</p>

      <hr style={S.rule} />

      <h2 style={S.h2}>Recognition & Credentials</h2>

      {[
        {
          heading: "Industry Recognition",
          items: [
            "Global Healthcare Magazine — 10 Most Influential Healthcare Infrastructure Leaders to Watch in 2026",
            "Top 300 Healthcare Executives — Industry Recognition",
            "Inc. 5000 — Orthopedic Motion, fast-growth recognition (2019)",
          ],
        },
        {
          heading: "Operating Track Record",
          items: [
            "Orthopedic Motion: 225% revenue growth, $12M sale valuation, multi-market expansion across Las Vegas, Reno, and Omaha",
            "Sole provider for University Medical Center, Las Vegas",
            "24-hour on-call contracts with every major hospital in Nevada",
            "Veterans prosthetic and orthotic services through VA hospital channels",
            "Built and operated a 6,000-square-foot O&P manufacturing facility and lab",
          ],
        },
        {
          heading: "Political Infrastructure (Americans for Prosperity, 2010–2015)",
          items: [
            "CTO and SVP of Strategy across a national organization operating in 35 states",
            "Directed 2,500+ team members across technology, data, field operations, and communications",
            "Architected a Salesforce data warehouse managing 3M+ records with full data integrity protocols",
          ],
        },
        {
          heading: "Current Operating Portfolio",
          items: [
            "StrykeFox Medical (Founder & CEO) — Vertically integrated medical distribution and healthcare execution platform. 40–73% margin platform.",
            "Dark Alpha Capital (VP of Acquisitions) — Recruited to build the healthcare M&A practice. $10M–$100M+ enterprise value range.",
            "Northstar Surgical Innovations (Founder) — Medical device IP, surgical tools, royalty and distribution arm.",
            "SENSARS Neuroprosthetics (Board-level Executive Finance) — FDA Breakthrough Device Designation. Commercial launch preparation.",
          ],
        },
        {
          heading: "Legal & Strategic Record",
          items: [
            "Defended himself pro se in family court against an army of Ivy League attorneys—and won",
            "Got opposing counsel disqualified from the case",
            "Filed a bar complaint against opposing counsel for misconduct",
            "Filed an ex parte restraining order against opposing counsel",
          ],
        },
        {
          heading: "Education",
          items: [
            "Creighton University — BSBA, International Business & Management",
            "Pepperdine Graziadio Business School — MBA candidate, coursework completed",
            "Stanford University School of Medicine — Leadership Series and Pediatric Grand Rounds: Transplanting Hope (2024)",
          ],
        },
      ].map(({ heading, items }) => (
        <div key={heading} style={{ marginBottom: "32px" }}>
          <div style={{ ...S.label, marginBottom: "12px" }}>{heading}</div>
          {items.map((item, i) => (
            <div key={i} style={{
              borderTop: "1px solid rgba(26,26,26,0.08)",
              padding: "10px 0", fontSize: "14px",
              color: "rgba(26,26,26,0.8)", lineHeight: 1.6,
              display: "flex", gap: "12px",
            }}>
              <span style={{ color: "#8b1e1e", flexShrink: 0, marginTop: "2px" }}>▸</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}

      <hr style={S.rule} />

      <h2 style={S.h2}>Contact</h2>
      <div style={S.grid2}>
        {[
          ["Press & Media", "press@adamwstryker.com"],
          ["Publishing", "publishing@adamwstryker.com"],
          ["Speaking & Advisory", "speaking@adamwstryker.com"],
          ["Office", "office@adamwstryker.com"],
        ].map(([label, email]) => (
          <div key={label}>
            <div style={S.label}>{label}</div>
            <a href={`mailto:${email}`} style={{ fontSize: "14px", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid rgba(26,26,26,0.2)" }}>
              {email}
            </a>
          </div>
        ))}
      </div>

      <p style={{ ...S.p, fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", marginTop: "32px", color: "rgba(26,26,26,0.4)" }}>
        www.adamwstryker.com · Las Vegas, Nevada · Dallas, Texas · Panama City, Panama<br />
        Egeiro Holdings (ἐγείρω — to rise) · © 2026 Adam W. Stryker. All Rights Reserved.
      </p>
    </div>
  );
}

// ─── VAULT UNLOCKED ROOT ─────────────────────────────────────────────────────

function VaultUnlocked({ onLock }) {
  const [activeTab, setActiveTab] = useState("author");

  return (
    <div style={{ minHeight: "100vh", background: "#f5f4f1", color: "#1a1a1a", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>

      {/* TOP NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(245,244,241,0.97)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(26,26,26,0.1)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 48px",
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "18px", color: "#1a1a1a" }}>
          AWS · VAULT
        </div>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px", letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "8px 14px",
                background: activeTab === tab.id ? "#1a1a1a" : "transparent",
                color: activeTab === tab.id ? "#f5f4f1" : "rgba(26,26,26,0.5)",
                border: activeTab === tab.id ? "1px solid #1a1a1a" : "1px solid transparent",
                cursor: "pointer", transition: "all 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          onClick={onLock}
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "9px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(26,26,26,0.35)", background: "none",
            border: "none", cursor: "pointer", padding: "8px",
          }}
        >
          Lock ⌘
        </button>
      </nav>

      {/* VAULT BANNER */}
      <div style={{
        background: "#1a1a1a", padding: "12px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: "9px",
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(245,244,241,0.35)",
        }}>
          ● Secure Access · NDA Executed · Egeiro Holdings · May 2026
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: "9px",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(245,244,241,0.25)",
        }}>
          Confidential · Not for Distribution
        </div>
      </div>

      {/* CONTENT */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 48px" }}>
        {activeTab === "author" && <TabAuthor />}
        {activeTab === "series" && <TabSeries />}
        {activeTab === "chapters" && <TabChapters />}
        {activeTab === "brand" && <TabBrand />}
        {activeTab === "mediakit" && <TabMediaKit />}
      </main>

      {/* FOOTER */}
      <footer style={{
        background: "#1a1a1a", borderTop: "1px solid rgba(245,244,241,0.08)",
        padding: "24px 48px", display: "flex",
        justifyContent: "space-between", alignItems: "center",
        color: "rgba(245,244,241,0.25)",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase",
      }}>
        <span>© 2026 Adam W. Stryker · Egeiro Holdings · All Rights Reserved</span>
        <span>Confidential · NDA Protected · Unauthorized Distribution Prohibited</span>
      </footer>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked
    ? <VaultUnlocked onLock={() => setUnlocked(false)} />
    : <VaultLocked onUnlock={() => setUnlocked(true)} />;
}
