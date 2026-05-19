'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X, Building, Plane, Ship, CheckCircle, Wrench, Activity, TrendingUp } from 'lucide-react';

export default function NSIPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            STRYKEFOX MEDICAL
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
            <a href="#carepath" className="hover:text-blue-200 transition-colors">CarePath</a>
            <a href="#nsi" className="hover:text-blue-200 transition-colors">NSI</a>
            <a href="#spear" className="hover:text-blue-200 transition-colors">SPEAR</a>
            <a href="#soc13" className="hover:text-blue-200 transition-colors">SoC13</a>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-white bg-blue-900/90 p-4 rounded-lg">
            <a href="/" className="block py-2 hover:text-blue-200 transition-colors">Home</a>
            <a href="#carepath" className="block py-2 hover:text-blue-200 transition-colors">CarePath</a>
            <a href="#nsi" className="block py-2 hover:text-blue-200 transition-colors">NSI</a>
            <a href="#spear" className="block py-2 hover:text-blue-200 transition-colors">SPEAR</a>
            <a href="#soc13" className="block py-2 hover:text-blue-200 transition-colors">SoC13</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/nsi-hero-panama.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-800/70" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            NORTHSTAR SURGICAL INNOVATIONS
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold text-blue-200">
            EX-IM PIPELINE
          </p>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            BUILT FOR SPEED. DESIGNED FOR SCALE.
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Built for ASC operators, TKA innovation, and speed to market.
          </p>
        </div>
      </section>

      {/* EX-IM Pipeline Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Panama Pacífico Ex-Im Pipeline</h2>
            <p className="text-xl text-gray-600">Strategic infrastructure for compliant medical device sourcing and logistics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">STRATEGIC LOCATION</h3>
              <p className="text-gray-600">Global connectivity, U.S. gateway</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">COMPLIANCE FIRST</h3>
              <p className="text-gray-600">Documentation, QA, traceability built in</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">LOGISTICS ADVANTAGE</h3>
              <p className="text-gray-600">Faster flow, lower friction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">SCALE READY</h3>
              <p className="text-gray-600">Infrastructure today, capacity tomorrow</p>
            </div>
          </div>
        </div>
      </section>

      {/* TKA Innovation Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Practical innovation for TKA</h2>
            <p className="text-xl text-gray-600 mb-4">Built around how ASCs actually operate</p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              We identify workflow gaps and develop solutions for surgeons to perform with precision and efficiency, 
              improving throughput and outcomes in ASCs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* TKA Blocking System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <img 
                  src="/images/tka-blocking-system.jpg" 
                  alt="TKA Blocking System" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="relative z-10 text-center text-white px-6">
                  <h3 className="text-2xl font-bold mb-2">TKA BLOCKING SYSTEM</h3>
                  <p className="text-lg">ACCURACY. REPEATABILITY. CONFIDENCE.</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Engineered for precision. Designed for real-world OR workflows.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>Enhanced accuracy and reproducibility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>Optimized for ASC efficiency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>Streamlined surgical workflow</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="/images/nsi-platform.svg" target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                    View Platform Diagram
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mid-TKR Saw */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <img 
                  src="/images/mid-tkr-saw.jpg" 
                  alt="Mid-TKR Saw" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="relative z-10 text-center text-white px-6">
                  <h3 className="text-2xl font-bold mb-2">MID-TKR SAW</h3>
                  <p className="text-lg">VERTICAL. CURVED. JIGSAW ACTION. NOT TRADITIONAL.</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Designed to navigate the knee. Protect tissue. Improve efficiency. Redefine the cut.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Wrench className="text-blue-600" size={20} />
                    <span>Innovative vertical curved design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="text-blue-600" size={20} />
                    <span>Jigsaw action for precision cutting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="text-blue-600" size={20} />
                    <span>Tissue protection technology</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="/images/saw-logic-v2.pdf" target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                    Download Saw Logic v2
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Strategic Partnerships</h2>
            <p className="text-xl text-blue-100">Innovation through collaboration and strategic alliances</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Sensars Partnership</h3>
                <p className="text-blue-100 mb-6">
                  Advanced sensory technology integration for enhanced surgical precision and patient outcomes.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://www.sensars.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Visit Sensars
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">M&A Opportunities</h3>
                <p className="text-blue-100 mb-6">
                  Explore strategic investment and acquisition opportunities in the medical technology sector.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://us.businessesforsale.com/us/m-and-a-vault/register-interest" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    M&A Vault Access
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Panama Pacífico Logistics</h3>
              <p className="text-blue-100 mb-6">
                Strategic logistics hub for efficient medical device distribution and Ex-Im operations.
              </p>
              <a 
                href="/images/panama-pacifico-logistics.png" 
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-200 font-semibold hover:text-white transition-colors"
              >
                View Logistics Diagram
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ASC Operators Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">ASC OPERATORS</h2>
          <div className="mb-12">
            <p className="text-xl mb-6">You see the gaps. We build the solutions.</p>
            <p className="text-lg mb-8 text-blue-200">
              Recurring TKA bottlenecks? Instrument pain? Workflow drag? 
              Cost pressure with no good alternatives?
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8 mb-12">
            <p className="text-2xl font-bold mb-6">Let's fix it—together.</p>
            <p className="text-lg mb-8 text-blue-100">
              DM me 'ASC' and your knee volume + top 2 friction points. 
              I'll respond personally.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors">
              Contact NSI Team
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Process Flow */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="text-white" size={32} />
              </div>
              <h3 className="font-bold mb-2">OPERATOR INSIGHT</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="font-bold mb-2">SMARTER DESIGN</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="text-white" size={32} />
              </div>
              <h3 className="font-bold mb-2">SPEED TO MARKET</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="font-bold mb-2">BETTER OUTCOMES</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">ARCHITECT THE SYSTEM. REDUCE VARIANCE. DELIVER LEVERAGE.</h2>
          <p className="text-xl text-gray-300 mb-8">
            Northstar Surgical Innovations - Practical solutions for real-world surgical challenges.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-blue-400 mb-2">BLOCKING SYSTEM</h3>
              <p className="text-sm text-gray-400">Accuracy, Stability, Reproducibility</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">SAW DEVELOPMENT</h3>
              <p className="text-sm text-gray-400">Vertical design, Jigsaw action</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">ALTERNATIVE SOURCING</h3>
              <p className="text-sm text-gray-400">Reduce risk, cost, and lead time</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-2">OPERATOR-VALIDATED GAPS</h3>
              <p className="text-sm text-gray-400">Solving real problems where it matters</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
