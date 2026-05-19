import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sensars | Restore sensation before neuropathy becomes amputation',
  description: 'Closed-loop neurotechnology platform targeting the moment before diabetic neuropathy becomes ulcers, falls, and limb loss.',
  alternates: {
    canonical: 'https://strykefox.com/sensars',
  },
};

export default function SensarsPage() {
  return (
    <main className="onepager-shell">
      <div className="onepager-nav">
        <Link href="/">← StrykeFox</Link>
      </div>

      {/* Hero */}
      <section className="onepager-hero" style={{ background: 'linear-gradient(135deg, #071830 0%, #0a2a50 60%, #062348 100%)' }}>
        <div>
          <p className="section-eyebrow" style={{ color: '#5ab3ff' }}>Sensars</p>
          <h1 className="section-title" style={{ color: '#ffffff' }}>
            Restore sensation before neuropathy becomes amputation.
          </h1>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sensars is a closed-loop neurotechnology platform targeting the critical window before diabetic neuropathy progresses to ulcers, falls, and limb loss — restoring the sensory feedback loop that protects patients.
          </p>
          <div className="hero-cta-group">
            <a href="#thesis" className="btn-primary">Investment Thesis</a>
            <a href="mailto:adam.stryker@strykefox.com" className="btn-secondary">Contact Us</a>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          padding: '0.5rem',
        }}>
          {[
            { value: '268M', label: 'at risk globally' },
            { value: '$79B', label: 'U.S. annual burden' },
            { value: '25+', label: 'clinical publications' },
            { value: 'FDA', label: 'Breakthrough Device' },
          ].map((stat) => (
            <div key={stat.value} style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(90,179,255,0.2)',
              borderRadius: 8,
              padding: '1.25rem',
              textAlign: 'center',
            }}>
              <div style={{
                color: '#5ab3ff',
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '0.4rem',
              }}>{stat.value}</div>
              <div style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Missing Feedback Loop */}
      <section className="section-standard" style={{ background: '#f4f8fc' }}>
        <div className="section-header">
          <p className="section-eyebrow">The Problem</p>
          <h2 className="section-title">The Missing <em>Feedback Loop</em></h2>
          <p className="section-body">
            Diabetic neuropathy silently destroys the sensory signals that keep patients safe. Sensars closes the loop.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: 860,
          margin: '0 auto',
        }}>
          {/* Without Sensars */}
          <div style={{
            background: '#fff',
            border: '1px solid #e2ecf5',
            borderRadius: 10,
            padding: '2rem',
            borderTop: '4px solid #e53e3e',
          }}>
            <div style={{
              color: '#e53e3e',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>Without Intervention</div>
            {[
              'Nerve damage',
              'Disrupts sensory feedback loop',
              'Patient loses protective sensation',
              'Neuropathy complications',
              'Ulcers · Falls · Amputation',
            ].map((step, i, arr) => (
              <div key={step}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.6rem 0',
                }}>
                  <div style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: i === arr.length - 1 ? '#e53e3e' : '#fee',
                    border: '1px solid #feb2b2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#c53030',
                    flexShrink: 0,
                    marginTop: 2,
                  }}>{i + 1}</div>
                  <span style={{
                    fontSize: '0.88rem',
                    color: i === arr.length - 1 ? '#c53030' : '#4a5568',
                    fontWeight: i === arr.length - 1 ? 700 : 400,
                  }}>{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ marginLeft: 11, borderLeft: '2px dashed #fed7d7', height: 8 }} />
                )}
              </div>
            ))}
          </div>

          {/* With Sensars */}
          <div style={{
            background: '#fff',
            border: '1px solid #e2ecf5',
            borderRadius: 10,
            padding: '2rem',
            borderTop: '4px solid #38a169',
          }}>
            <div style={{
              color: '#38a169',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>With Sensars</div>
            {[
              'Nerve stimulation',
              'Restores sensory feedback loop',
              'Protective sensation maintained',
              'Neuropathy complications interrupted',
              'No ulcers · No falls · Limb preserved',
            ].map((step, i, arr) => (
              <div key={step}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.6rem 0',
                }}>
                  <div style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: i === arr.length - 1 ? '#38a169' : '#f0fff4',
                    border: '1px solid #9ae6b4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#276749',
                    flexShrink: 0,
                    marginTop: 2,
                  }}>{i + 1}</div>
                  <span style={{
                    fontSize: '0.88rem',
                    color: i === arr.length - 1 ? '#276749' : '#4a5568',
                    fontWeight: i === arr.length - 1 ? 700 : 400,
                  }}>{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ marginLeft: 11, borderLeft: '2px dashed #9ae6b4', height: 8 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section id="thesis" className="section-standard">
        <div className="section-header">
          <p className="section-eyebrow">Capital Partnership</p>
          <h2 className="section-title">Investment <em>Thesis</em></h2>
          <p className="section-body">
            Three reasons Sensars represents a category-defining opportunity.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {[
            {
              number: '01',
              title: 'Category-Defining Sensory Restoration',
              body: 'No approved closed-loop peripheral nerve stimulation device for diabetic neuropathy. Sensars is building the category from the ground up with strong IP positioning.',
            },
            {
              number: '02',
              title: 'Clear Clinical Milestone',
              body: 'FDA Breakthrough Device designation accelerates the path to approval. The clinical evidence base is established — Sensars is executing the regulatory and commercial strategy.',
            },
            {
              number: '03',
              title: 'Platform Upside Beyond Initial Indication',
              body: 'The closed-loop neurostimulation platform addresses neuropathy first but has clear expansion vectors into chronic pain, post-surgical recovery, and other sensory-deficit conditions.',
            },
          ].map((card) => (
            <div key={card.number} style={{
              background: '#fff',
              border: '1px solid #e2ecf5',
              borderRadius: 10,
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(6,35,72,0.06)',
            }}>
              <div style={{
                color: '#5ab3ff',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}>{card.number}</div>
              <h3 style={{
                color: '#062348',
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>{card.title}</h3>
              <p style={{
                color: '#5a7a95',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                margin: 0,
              }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #062348 0%, #0a3060 100%)',
        padding: '4rem 2.5rem',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#5ab3ff',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>Now Raising</p>
        <h2 style={{
          color: '#ffffff',
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
          fontWeight: 800,
          marginBottom: '1rem',
          lineHeight: 1.15,
        }}>
          Milestone capital for sensory restoration.
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: '1rem',
          maxWidth: 520,
          margin: '0 auto 2rem',
          lineHeight: 1.65,
        }}>
          We&apos;re working with capital partners who understand the scale of this problem and the precision of this solution.
        </p>
        <a
          href="mailto:adam.stryker@strykefox.com"
          style={{
            display: 'inline-block',
            background: '#3b9eff',
            color: '#fff',
            padding: '0.85rem 2rem',
            borderRadius: 6,
            fontSize: '0.88rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Connect with Adam ↗
        </a>
      </section>
    </main>
  );
}
