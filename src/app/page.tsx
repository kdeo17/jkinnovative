"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">JK</span>
              <span className="text-2xl font-bold text-blue-600 ml-1">Innovative</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#products" className="text-slate-700 hover:text-blue-600 transition-colors">Products</Link>
              <Link href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-8 h-8 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                  <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              <Link href="#home" className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#services" className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="#products" className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
              <Link href="#contact" className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fadeInUp">
              Innovative IT Solutions
              <span className="block gradient-text">for Your Business</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Transform your business operations with our cutting-edge technology solutions. 
              From accounting systems to email hosting, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-xl">
                Explore Our Products
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all hover:scale-105 font-semibold hover:border-blue-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-float">
            <span className="text-2xl">💻</span>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xl">⚡</span>
          </div>
          <div className="absolute bottom-32 left-1/4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
            <span className="text-2xl">🔧</span>
          </div>
          <div className="absolute top-1/2 right-10 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-lg">⚙️</span>
          </div>
          <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
            <span className="text-xl">🌐</span>
          </div>
        </div>
        
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Featured Products
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to streamline your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              icon="📊"
              title="Accounting System"
              description="Comprehensive financial management solution with automated reporting, invoice generation, and real-time analytics for your business."
              features={["Automated Invoicing", "Financial Reporting", "Tax Management"]}
              buttonColor="bg-blue-600"
              iconBgColor="bg-blue-100"
            />
            
            <ProductCard
              icon="👥"
              title="HR & Payroll"
              description="Complete human resources management with payroll processing, employee records, and automated compliance tracking."
              features={["Payroll Processing", "Employee Management", "Compliance Tracking"]}
              buttonColor="bg-green-600"
              iconBgColor="bg-green-100"
            />
            
            <ProductCard
              icon="📧"
              title="Email Hosting"
              description="Professional email hosting with advanced security, spam protection, and 99.9% uptime guarantee for your business."
              features={["99.9% Uptime", "Advanced Security", "Spam Protection"]}
              buttonColor="bg-purple-600"
              iconBgColor="bg-purple-100"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose JK Innovative?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🚀"
              title="Fast Implementation"
              description="Quick deployment and seamless integration with your existing systems"
              bgColor="bg-blue-100"
            />
            
            <FeatureCard
              icon="🔒"
              title="Secure & Reliable"
              description="Enterprise-grade security with 24/7 monitoring and support"
              bgColor="bg-green-100"
            />
            
            <FeatureCard
              icon="💡"
              title="Innovation First"
              description="Latest technology solutions designed for modern businesses"
              bgColor="bg-purple-100"
            />
            
            <FeatureCard
              icon="🤝"
              title="Expert Support"
              description="Dedicated technical support team available when you need us"
              bgColor="bg-orange-100"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section (hidden) */}
      {/*
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide for reliable IT solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "JK Innovative transformed our accounting processes completely. The automated system saved us hours every week and improved our accuracy significantly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Michael Chen</h4>
                  <p className="text-slate-500 text-sm">CFO, TechCorp Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "Their HR and Payroll system streamlined our entire workforce management. The support team is incredibly responsive and knowledgeable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩‍💼</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Sarah Johnson</h4>
                  <p className="text-slate-500 text-sm">HR Director, Global Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "Professional email hosting with 99.9% uptime as promised. Our communication has never been more reliable and secure."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨‍💻</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">David Rodriguez</h4>
                  <p className="text-slate-500 text-sm">IT Manager, StartupHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our IT solutions can streamline your operations and boost productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all hover:scale-105 font-semibold">
              Get Free Consultation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all hover:scale-105 font-semibold">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">JK</span>
                <span className="text-2xl font-bold text-blue-400 ml-1">Innovative</span>
              </div>
              <p className="text-slate-400 mb-4">
                Empowering businesses with innovative IT solutions for the digital age.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Accounting System</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HR & Payroll</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email Hosting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-slate-400">
                <li>📞 +63 (917) 300-2031</li>
                <li>📧 info@jkinnovative.com</li>
                <li>📍 Unit 307 Casa Rafael, Quezon Ave, Quezon City, Philippines</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 JK Innovative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
