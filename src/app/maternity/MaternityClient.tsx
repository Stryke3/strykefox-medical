'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X, Baby, Heart, Users, Calendar } from 'lucide-react';

export default function MaternityPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const maternitySites = [
    {
      name: "Mommy Care",
      description: "Comprehensive maternity care platform for modern mothers",
      url: "https://mommycarekit.strykefox.com",
      icon: Baby,
      features: ["Prenatal tracking", "Postpartum support", "Health monitoring", "Community support"]
    },
    {
      name: "El Kit de Cuidado",
      description: "Maternity care platform for Spanish-speaking mothers",
      url: "https://elkitdecuidado.strykefox.com",
      icon: Heart,
      features: ["Atención prenatal", "Apoyo postparto", "Monitoreo de salud", "Comunidad"]
    }
  ];

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
            <a href="/nsi" className="hover:text-blue-200 transition-colors">NSI</a>
            <a href="/spear" className="hover:text-blue-200 transition-colors">SPEAR</a>
            <a href="/maternity" className="hover:text-blue-200 transition-colors">Maternity</a>
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
            <a href="/nsi" className="block py-2 hover:text-blue-200 transition-colors">NSI</a>
            <a href="/spear" className="block py-2 hover:text-blue-200 transition-colors">SPEAR</a>
            <a href="/maternity" className="block py-2 hover:text-blue-200 transition-colors">Maternity</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/maternity-hero.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-pink-800/80" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MATERNITY CARE
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-purple-100">
            Comprehensive care platforms for mothers and families
          </p>
          <p className="text-xl mb-8 text-purple-200">
            Supporting every step of the maternity journey
          </p>
        </div>
      </section>

      {/* Maternity Sites Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Maternity Platforms</h2>
            <p className="text-xl text-gray-600">Specialized care solutions for diverse maternal health needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {maternitySites.map((site, index) => {
              const IconComponent = site.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <IconComponent className="text-white" size={64} />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{site.name}</h3>
                    <p className="text-gray-600 mb-6">{site.description}</p>
                    <div className="space-y-2 mb-6">
                      {site.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={site.url}
                      className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                    >
                      Visit {site.name}
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Maternity Support</h2>
            <p className="text-xl text-gray-600">Evidence-based care for every stage of motherhood</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-purple-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">Prenatal Care</h3>
              <p className="text-gray-600">Track pregnancy milestones, appointments, and health metrics</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-purple-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">Postpartum Support</h3>
              <p className="text-gray-600">Recovery tracking, mental health support, and community resources</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-purple-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">Connect with other mothers and healthcare professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
