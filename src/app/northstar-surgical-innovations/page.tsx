import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Northstar Surgical Innovations | Innovation. Infrastructure. Impact.',
  description: 'Building the ex-im pipeline in Panama Pacífico to accelerate TKA innovation and speed U.S. market access.',
  alternates: {
    canonical: 'https://strykefox.com/northstar-surgical-innovations',
  },
};

export default function NorthstarPage() {
  return (
    <main style={{
      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      background: '#ffffff',
      color: '#062348',
      minHeight: '100vh',
    }}>

      {/* Back nav */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 50 }}>
        <a href="/" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: '#062348', textDecoration: 'none', opacity: 0.55,
        }}>← StrykeFox</a>
      </div>

      {/* HERO — 2-col split */}
      <section className="nsi-hero-grid">

        {/* Left: content */}
        <div className="nsi-left">

          {/* Wordmark */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2.5rem' }}>
              <Image
                src="/images/nsi-logo.jpeg"
                alt="Northstar Surgical Innovations"
                width={80}
                height={80}
                style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '4px' }}
              />
            </div>

            <h1 style={{
              fontSize: 'clamp(46px, 6vw, 78px)',
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              margin: '0 0 1.25rem 0',
              color: '#062348',
            }}>
              INNOVATION.<br />
              INFRASTRUCTURE.<br />
              <span style={{ color: '#0a66c2' }}>IMPACT.</span>
            </h1>
            <div style={{ width: '44px', height: '3px', background: '#0a66c2', margin: '0 0 1.25rem 0' }} />
            <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(6,35,72,0.68)', maxWidth: '380px', margin: 0 }}>
              Building the ex-im pipeline in Panama Pacífico to accelerate TKA innovation and speed U.S. market access.
            </p>
          </div>

          {/* 4-capability row */}
          <div className="nsi-caps">
            {[
              {
                svg: <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="12" stroke="#0a66c2" strokeWidth="1.4"/><path d="M15 3C15 3 10 7 10 15C10 23 15 27 15 27C15 27 20 23 20 15C20 7 15 3 15 3Z" stroke="#0a66c2" strokeWidth="1.4"/><line x1="3" y1="15" x2="27" y2="15" stroke="#0a66c2" strokeWidth="1.4"/></svg>,
                title: 'EX-IM\nPIPELINE',
                body: ['Compliant. Efficient.', 'Built for speed.'],
              },
              {
                svg: <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="5" y="10" width="20" height="14" rx="2" stroke="#0a66c2" strokeWidth="1.4"/><path d="M10 10V8C10 6 12 4 15 4C18 4 20 6 20 8V10" stroke="#0a66c2" strokeWidth="1.4"/><circle cx="15" cy="17" r="2" fill="#0a66c2"/></svg>,
                title: 'ALTERNATIVE\nSOURCING',
                body: ['More options.', 'Lower risk.', 'Faster to market.'],
              },
              {
                svg: <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 2L3 8V16C3 22 8.5 27 15 29C21.5 27 27 22 27 16V8L15 2Z" stroke="#0a66c2" strokeWidth="1.4"/><path d="M10 15L13.5 18.5L20 12" stroke="#0a66c2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: 'QUALITY &\nCOMPLIANCE',
                body: ['Documentation.', 'Traceability.', 'Market ready.'],
              },
              {
                svg: <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="2" y="13" width="18" height="11" rx="2" stroke="#0a66c2" strokeWidth="1.4"/><path d="M5 13V9C5 7 7 5 9 5H20" stroke="#0a66c2" strokeWidth="1.4"/><path d="M20 5L24 9M20 5L24 1" stroke="#0a66c2" strokeWidth="1.4" strokeLinecap="round"/><circle cx="6.5" cy="18.5" r="2.5" stroke="#0a66c2" strokeWidth="1.4"/><circle cx="13.5" cy="18.5" r="2.5" stroke="#0a66c2" strokeWidth="1.4"/></svg>,
                title: 'U.S. MARKET\nACCESS',
                body: ['Predictable flow.', 'Reliable delivery.', 'Real impact.'],
              },
            ].map((cap, i) => (
              <div key={i} className="nsi-cap-item">
                <div style={{ marginBottom: '10px' }}>{cap.svg}</div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: '#062348', whiteSpace: 'pre-line', lineHeight: 1.4, marginBottom: '6px' }}>{cap.title}</div>
                {cap.body.map((line, j) => (
                  <div key={j} style={{ fontSize: '11px', color: 'rgba(6,35,72,0.58)', lineHeight: 1.6 }}>{line}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <div className="nsi-bottom-bar">
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0a66c2', marginBottom: '5px' }}>ASC OPERATORS:</div>
              <div style={{ fontSize: '12px', color: 'rgba(6,35,72,0.68)', lineHeight: 1.5 }}>Let's solve what slows your TKA cases down.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <svg width="32" height="26" viewBox="0 0 32 26" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                <rect x="1" y="1" width="30" height="20" rx="3" stroke="#0a66c2" strokeWidth="1.4"/>
                <path d="M1 5L16 14L31 5" stroke="#0a66c2" strokeWidth="1.4"/>
              </svg>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#062348', marginBottom: '2px' }}>DM me "ASC"</div>
                <div style={{ fontSize: '11px', color: 'rgba(6,35,72,0.6)', lineHeight: 1.5 }}>Share your top 2 friction points<br />and knee volume.</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#0a66c2', lineHeight: 1.9 }}>
                OPERATOR INSIGHT.<br />
                PRACTICAL SOLUTIONS.<br />
                BETTER OUTCOMES.
              </div>
            </div>
          </div>
        </div>

        {/* Right: photo panel */}
        <div className="nsi-right">
          {/* Background: Panama port photo */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("/images/nsi-hero-panama.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          {/* Light left-fade so text stays readable */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 40%)',
          }} />

          {/* Product image: Mid-TKR Saw */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("/images/mid-tkr-saw.jpg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 2,
          }} />

          {/* Panama Pacífico badge */}
          <div style={{
            position: 'absolute', top: '2rem', right: '1.5rem', zIndex: 4,
            background: 'rgba(255,255,255,0.94)',
            borderRadius: '6px', padding: '12px 16px', maxWidth: '190px',
            border: '1px solid rgba(6,35,72,0.1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                <path d="M1 2C5 0.5 15 0.5 19 2" stroke="#0a66c2" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M1 6.5C5 5 15 5 19 6.5" stroke="#0a66c2" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M1 11C5 9.5 15 9.5 19 11" stroke="#0a66c2" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', color: '#062348' }}>PANAMA PACÍFICO</div>
            </div>
            <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.08em', color: '#062348', opacity: 0.55, marginBottom: '5px' }}>SPECIAL ECONOMIC AREA</div>
            <div style={{ width: '28px', height: '1.5px', background: '#0a66c2', marginBottom: '5px' }} />
            <div style={{ fontSize: '9px', color: 'rgba(6,35,72,0.65)', lineHeight: 1.4 }}>A STRATEGIC NODE FOR GLOBAL MEDICAL DEVICE FLOW</div>
          </div>

          {/* TKA Innovation callout */}
          <div style={{
            position: 'absolute', bottom: '2rem', right: '1.5rem', zIndex: 4,
            background: 'rgba(255,255,255,0.94)',
            borderRadius: '6px', padding: '14px 18px', maxWidth: '210px',
            border: '1px solid rgba(6,35,72,0.1)',
          }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', color: '#0a66c2', marginBottom: '10px' }}>TKA INNOVATION</div>
            {[
              { name: 'Blocking System', desc: 'Designed for accuracy and repeatability.' },
              { name: 'Vertical Saw', desc: 'Vertical. Curved blade. Jigsaw action. Not traditional.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '9px', marginBottom: i === 0 ? '10px' : 0 }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0a66c2', flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#062348', marginBottom: '2px' }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(6,35,72,0.62)', lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .nsi-hero-grid {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .nsi-left {
          padding: clamp(80px, 10vw, 116px) clamp(36px, 5vw, 72px) 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        .nsi-right {
          position: relative;
          overflow: hidden;
          background: #c8dcea;
        }
        .nsi-caps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(6,35,72,0.1);
          padding-top: 1.75rem;
          margin-top: auto;
          gap: 0;
        }
        .nsi-cap-item {
          padding-right: 16px;
          border-right: 1px solid rgba(6,35,72,0.1);
        }
        .nsi-cap-item:last-child {
          border-right: none;
          padding-left: 16px;
          padding-right: 0;
        }
        .nsi-cap-item:nth-child(2),
        .nsi-cap-item:nth-child(3) {
          padding-left: 16px;
        }
        .nsi-bottom-bar {
          margin-top: 1.5rem;
          border-top: 1px solid rgba(6,35,72,0.1);
          padding-top: 1.25rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .nsi-hero-grid { grid-template-columns: 1fr; }
          .nsi-right { min-height: 400px; }
          .nsi-caps { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .nsi-cap-item { border-right: none; padding: 0 0 16px 0 !important; border-bottom: 1px solid rgba(6,35,72,0.1); }
          .nsi-bottom-bar { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
