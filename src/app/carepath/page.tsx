import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Home, PenTool, Stethoscope, Baby, Activity, Orbit, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CarePath by StrykeFox | Care that follows the patient',
  description: 'CarePath organizes recovery products, documentation, fulfillment coordination, proof-of-delivery capture, and billing-ready packets across the patient journey.',
  alternates: {
    canonical: 'https://strykefox.com/carepath',
  },
};

const carePathways = [
  {
    title: 'CarePath Surgical',
    description: 'Precision coordination for elective and complex surgical recovery.',
    icon: PenTool,
    features: ['Pre-operative planning', 'Post-surgical coordination', 'Recovery tracking', 'Documentation control'],
  },
  {
    title: 'CarePath Orthopedic',
    description: 'Comprehensive musculoskeletal recovery across the continuum of care.',
    icon: Stethoscope,
    features: ['Joint recovery pathways', 'Physical therapy coordination', 'Durable medical equipment', 'Progress monitoring'],
  },
  {
    title: 'Maternity CarePath',
    description: 'Specialized pathways for maternity and postnatal recovery.',
    icon: Baby,
    features: ['Postpartum care coordination', 'Maternal health monitoring', 'Newborn supplies', 'Insurance navigation'],
    externalLinks: [
      { label: 'Maternity CarePath', url: 'https://mommy.strykefox.com' },
      { label: 'El Cuidado Platform', url: 'https://cuidado.strykefox.com' }
    ]
  },
  {
    title: 'CarePath Mobility',
    description: 'Robotic and mobility-enabled recovery with intelligent coordination.',
    icon: Activity,
    features: ['Mobility equipment', 'Training coordination', 'Progress tracking', 'Adaptive support'],
  },
  {
    title: 'CarePath Wound',
    description: 'Advanced wound care coordination and outcomes monitoring.',
    icon: Orbit,
    features: ['Wound care supplies', 'Treatment adherence', 'Healing progress', 'Documentation'],
  },
  {
    title: 'CarePath Post-Acute',
    description: 'Post-acute recovery continuity with seamless care transitions.',
    icon: Home,
    features: ['Transition coordination', 'Home health setup', 'Medication management', 'Follow-up care'],
  },
  {
    title: 'El Cuidado',
    description: 'Cultural competence in Spanish-language care coordination.',
    icon: ShieldCheck,
    features: ['Spanish-language support', 'Cultural navigation', 'Family coordination', 'Community resources'],
  },
];

export default function CarePathPage() {
  return (
    <main className="onepager-shell">
      <div className="onepager-nav">
        <a href="/">Back to StrykeFox</a>
      </div>

      <section className="onepager-hero">
        <div>
          <p className="section-eyebrow">CarePath by StrykeFox</p>
          <h1 className="section-title">Care that <em>follows the patient.</em></h1>
          <p className="section-body">
            CarePath organizes recovery products, documentation, fulfillment coordination, proof-of-delivery capture, 
            and billing-ready packets across the patient journey.
          </p>
          <div className="hero-cta-group">
            <a href="#pathways" className="btn-primary">Start CarePath Intake</a>
            <a href="#pathways" className="btn-secondary">View Pathways</a>
          </div>
        </div>
        <div className="onepager-logo-card">
          <Image src="/images/sfm-logo.jpeg" alt="CarePath by StrykeFox" width={420} height={420} priority />
        </div>
      </section>

      <section id="pathways" className="section-standard">
        <div className="section-header">
          <p className="section-eyebrow">Care Pathways</p>
          <h2 className="section-title">Specialized Recovery <em>Coordination</em></h2>
          <p className="section-body">
            Evidence-based pathways designed for specific clinical needs and recovery scenarios.
          </p>
        </div>
        
        <div className="pathway-grid">
          {carePathways.map((pathway, index) => {
            const IconComponent = pathway.icon;
            return (
              <div key={index} className="pathway-card">
                <div className="pathway-icon">
                  <IconComponent size={24} />
                </div>
                <h3 className="pathway-title">{pathway.title}</h3>
                <p className="pathway-description">{pathway.description}</p>
                <ul className="pathway-features">
                  {pathway.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                {pathway.externalLinks && (
                  <div className="pathway-external-links">
                    {pathway.externalLinks.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                      >
                        {link.label}
                        <ArrowRight size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-standard bg-slate-50">
        <div className="section-header">
          <p className="section-eyebrow">Get Started</p>
          <h2 className="section-title">CarePath <em>Intake</em></h2>
          <p className="section-body">
            Begin the care coordination process with our comprehensive intake system.
          </p>
        </div>
        
        <div className="intake-form-container">
          <div className="intake-form">
            <h3>Patient Pathway Intake</h3>
            <form className="form-grid">
              <div className="form-group">
                <label htmlFor="provider">Provider / Facility</label>
                <input type="text" id="provider" placeholder="Hospital or clinic name" disabled />
              </div>
              <div className="form-group">
                <label htmlFor="patient-status">Patient Status</label>
                <select id="patient-status" disabled>
                  <option value="">Select status</option>
                  <option value="pre-op">Pre-operative</option>
                  <option value="post-discharge">Post-discharge</option>
                  <option value="transfer">Care transfer</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pathway">Care Pathway</label>
                <select id="pathway" disabled>
                  <option value="">Select pathway</option>
                  {carePathways.map((pathway, index) => (
                    <option key={index} value={pathway.title.toLowerCase().replace(/\s+/g, '-')}>
                      {pathway.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="urgency">Urgency Level</label>
                <select id="urgency" disabled>
                  <option value="">Select urgency</option>
                  <option value="routine">Routine (3-5 days)</option>
                  <option value="urgent">Urgent (24-48 hours)</option>
                  <option value="stat">Stat (same day)</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="documentation">Required Documentation</label>
                <textarea 
                  id="documentation" 
                  placeholder="List clinical documentation, orders, and requirements..."
                  rows={3}
                  disabled
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn-primary" disabled>
                  Submit Intake Request
                  <ArrowRight size={16} />
                </button>
                <p className="form-note">
                  Intake system coming soon. Contact us directly for immediate care coordination needs.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
