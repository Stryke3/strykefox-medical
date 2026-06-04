import type { Metadata } from 'next';
import Image from 'next/image';
import { Building2, Network, Shield, TrendingUp, Link, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SoC13 | Expansion by design',
  description: 'SoC13 aligns verticals, integrates capabilities, and reduces friction across healthcare delivery through platform expansion, acquisition architecture, and healthcare lineage integration.',
  alternates: {
    canonical: 'https://strykefox.com/soc13',
  },
};

const thesisAreas = [
  {
    title: 'Healthcare Lineage',
    description: 'StrykeFox organizes healthcare capabilities around the patient journey, connecting vertical service lines through shared operational infrastructure.',
    icon: Link,
    details: [
      'Patient-centered care coordination',
      'Vertical service line integration',
      'Shared operational infrastructure',
      'Continuum of care alignment',
    ],
  },
  {
    title: 'Acquisition Architecture',
    description: 'SoC13 evaluates, integrates, and scales healthcare assets that strengthen the platform\'s operating base.',
    icon: Building2,
    details: [
      'Strategic asset evaluation',
      'Integration methodology',
      'Operational scaling',
      'Platform strengthening',
    ],
  },
  {
    title: 'Integration Discipline',
    description: 'The model prioritizes documentation, compliance readiness, workflow control, and cash-conversion visibility.',
    icon: Shield,
    details: [
      'Documentation standards',
      'Compliance readiness',
      'Workflow optimization',
      'Financial visibility',
    ],
  },
  {
    title: 'Operating Leverage',
    description: 'Shared infrastructure improves execution speed, reduces duplication, and creates scalable platform economics.',
    icon: TrendingUp,
    details: [
      'Infrastructure sharing',
      'Execution acceleration',
      'Cost optimization',
      'Scalable economics',
    ],
  },
  {
    title: 'Platform Expansion',
    description: 'SoC13 supports disciplined growth across clinical, operational, device, pharmacy, post-acute, and recovery infrastructure.',
    icon: Network,
    details: [
      'Clinical capabilities',
      'Operational excellence',
      'Device innovation',
      'Pharmacy integration',
      'Post-acute care',
      'Recovery coordination',
    ],
  },
];

const founderCards = [
  {
    name: 'Adam Stryker',
    title: 'Founder / Platform Architect',
    body: 'Healthcare operator, investor, and systems architect focused on integrated medical infrastructure, regulated healthcare platforms, surgical innovation, and operating leverage.',
    initials: 'AS',
    personalLink: 'https://www.adamwstryker.com',
  },
  {
    name: 'Ben Fox',
    title: 'Co-Founder / Market Development',
    body: 'Healthcare growth operator focused on provider relationships, market execution, and field-level expansion across the StrykeFox Medical platform.',
    initials: 'BF',
    personalLink: '/',
  },
];

export default function SoC13Page() {
  return (
    <main className="onepager-shell">
      <div className="onepager-nav">
        <a href="/">Back to StrykeFox</a>
      </div>

      <section className="onepager-hero">
        <div>
          <p className="section-eyebrow">SoC13</p>
          <h1 className="section-title">Expansion by <em>design.</em></h1>
          <p className="section-body">
            SoC13 aligns verticals, integrates capabilities, and reduces friction across healthcare delivery through 
            platform expansion, acquisition architecture, and healthcare lineage integration.
          </p>
          <div className="hero-cta-group">
            <a href="#thesis" className="btn-primary">Review Expansion Thesis</a>
            <a href="/soc13/deal-qa" className="btn-secondary">Open 13-Point Assessment</a>
          </div>
        </div>
        <div className="onepager-logo-card">
          <Image src="/images/Pharmacy.png" alt="SoC13 pharmacy adjacency assessment" width={520} height={293} priority />
        </div>
      </section>

      <section id="thesis" className="section-standard">
        <div className="section-header">
          <p className="section-eyebrow">Expansion Thesis</p>
          <h2 className="section-title">Strategic <em>Integration</em></h2>
          <p className="section-body">
            Five core disciplines that guide SoC13\'s approach to healthcare platform expansion and integration.
          </p>
        </div>
        
        <div className="thesis-grid">
          {thesisAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="thesis-card">
                <div className="thesis-icon">
                  <IconComponent size={24} />
                </div>
                <h3 className="thesis-title">{area.title}</h3>
                <p className="thesis-description">{area.description}</p>
                <ul className="thesis-details">
                  {area.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-standard bg-slate-50">
        <div className="section-header">
          <p className="section-eyebrow">Platform Leadership</p>
          <h2 className="section-title">Founder <em>Vision</em></h2>
          <p className="section-body">
            Leadership team with deep healthcare operations expertise and platform development experience.
          </p>
        </div>
        
        <div className="founders-grid">
          {founderCards.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-avatar">
                <span className="founder-initials">{founder.initials}</span>
              </div>
              <div className="founder-content">
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-title">{founder.title}</p>
                <p className="founder-bio">{founder.body}</p>
                <div className="founder-links">
                  {founder.personalLink !== '/' ? (
                    <a 
                      href={founder.personalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="founder-link"
                    >
                      Personal Website
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <a href="/" className="founder-link">
                      StrykeFox Medical
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-standard">
        <div className="section-header">
          <p className="section-eyebrow">Growth Strategy</p>
          <h2 className="section-title">Disciplined <em>Expansion</em></h2>
          <p className="section-body">
            SoC13 follows a structured approach to platform growth and capability integration.
          </p>
        </div>
        
        <div className="strategy-phases">
          <div className="phase">
            <div className="phase-number">01</div>
            <h3>Evaluation</h3>
            <p>Strategic assessment of healthcare assets and capabilities for platform alignment.</p>
          </div>
          <div className="phase">
            <div className="phase-number">02</div>
            <h3>Integration</h3>
            <p>Systematic incorporation of new capabilities into shared operational infrastructure.</p>
          </div>
          <div className="phase">
            <div className="phase-number">03</div>
            <h3>Optimization</h3>
            <p>Continuous improvement of integrated workflows and cross-platform synergies.</p>
          </div>
          <div className="phase">
            <div className="phase-number">04</div>
            <h3>Scaling</h3>
            <p>Expansion of proven models across new markets and healthcare verticals.</p>
          </div>
        </div>
      </section>

      <section className="section-standard bg-slate-900 text-slate-100">
        <div className="section-header">
          <p className="section-eyebrow">Platform Impact</p>
          <h2 className="section-title">Healthcare <em>Transformation</em></h2>
        </div>
        
        <div className="impact-areas">
          <div className="impact-item">
            <h3>Clinical Excellence</h3>
            <p>Elevated care standards through integrated clinical pathways and shared best practices.</p>
          </div>
          <div className="impact-item">
            <h3>Operational Efficiency</h3>
            <p>Reduced friction and improved outcomes through standardized operating procedures.</p>
          </div>
          <div className="impact-item">
            <h3>Financial Performance</h3>
            <p>Enhanced cash conversion and sustainable economics through platform leverage.</p>
          </div>
          <div className="impact-item">
            <h3>Market Expansion</h3>
            <p>Strategic growth into new healthcare verticals and geographic markets.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
