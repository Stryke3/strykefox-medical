'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X, Shield, Lock, Mail, User, Eye, EyeOff, Activity, Database, Zap } from 'lucide-react';

export default function SpearLoginPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      // Redirect to actual SPEAR platform
      window.location.href = 'https://dashboard.strykefox.com/login';
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <a href="/northstar-surgical-innovations" className="hover:text-blue-200 transition-colors">NSI</a>
            <a href="/spear" className="hover:text-blue-200 transition-colors">SPEAR</a>
            <a href="/carepath" className="hover:text-blue-200 transition-colors">CarePath</a>
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
            backgroundImage: 'url("/images/spear-hero.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-indigo-800/80" />
        
        <div className="relative z-10 w-full max-w-md px-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={40} />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">SPEAR LOGIN</h1>
              <p className="text-blue-100">
                {isLogin ? 'Access the healthcare execution OS' : 'Reset your password'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {isLogin && (
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              )}

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirm new password"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  'Processing...'
                ) : (
                  <>
                    {isLogin ? 'Sign In' : 'Reset Password'}
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-100 hover:text-white transition-colors"
              >
                {isLogin ? 'Forgot password?' : 'Back to login'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">SPEAR Platform Features</h2>
            <p className="text-xl text-gray-600">Powered by Poseidon, Trident, and Aries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">Poseidon</h3>
              <p className="text-gray-600">Data capture and analysis infrastructure for healthcare operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">Trident</h3>
              <p className="text-gray-600">Three-pronged approach to healthcare execution and workflow management</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">Aries</h3>
              <p className="text-gray-600">Rapid deployment and field execution capabilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
