"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contactNumber: '',
    bestTimeToCall: ''
  });
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuoteInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuoteFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({
      name: '',
      company: '',
      contactNumber: '',
      bestTimeToCall: ''
    });
    setIsModalOpen(false);
    alert('Thank you! We will contact you soon.');
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Quote Request from ${quoteFormData.name}`;
    const body = `Hello JK Innovative,

I would like to request a quote for the following project:

Name: ${quoteFormData.name}
Company: ${quoteFormData.company}
Email: ${quoteFormData.email}
Phone: ${quoteFormData.phone}

Project Type: ${quoteFormData.projectType}
Budget Range: ${quoteFormData.budget}
Timeline: ${quoteFormData.timeline}

Project Description:
${quoteFormData.description}

Please provide a detailed quote for this project.

Best regards,
${quoteFormData.name}`;

    // Create mailto link
    const mailtoLink = `mailto:info@jkinnovative.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form and close modal
    setQuoteFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">JK</span>
              <span className="text-2xl font-bold text-blue-400 ml-1">Innovative</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-white/80 hover:text-blue-400 transition-colors">Home</Link>
              <Link href="#services" className="text-white/80 hover:text-blue-400 transition-colors">Services</Link>
              <Link href="#solutions" className="text-white/80 hover:text-blue-400 transition-colors">Solutions</Link>
              <Link href="#industries" className="text-white/80 hover:text-blue-400 transition-colors">Industries</Link>
              <Link href="#contact" className="text-white/80 hover:text-blue-400 transition-colors">Contact</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-8 h-8 text-white hover:text-blue-400 transition-colors"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 border-t border-white/20">
              <Link href="#home" className="block px-3 py-2 text-white/80 hover:text-blue-400 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#services" className="block px-3 py-2 text-white/80 hover:text-blue-400 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="#solutions" className="block px-3 py-2 text-white/80 hover:text-blue-400 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
              <Link href="#industries" className="block px-3 py-2 text-white/80 hover:text-blue-400 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              <Link href="#contact" className="block px-3 py-2 text-white/80 hover:text-blue-400 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <span className="text-3xl animate-bounce">🤖</span>
              <span className="text-3xl animate-pulse">💻</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>🌐</span>
              <span className="text-3xl animate-pulse" style={{animationDelay: '0.4s'}}>📱</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
              Innovative <span className="text-blue-400">IT Solutions 💻</span> 
              <span className="block mt-2">Transforming <span className="text-green-400">Business Growth 📈</span></span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <span className="text-yellow-400 font-semibold">JK Innovative </span>
              empowers businesses across the Philippines with 
              <span className="text-blue-400 font-semibold"> cutting-edge technology solutions 🚀 </span>
              that streamline operations, boost productivity, and drive 
              <span className="text-green-400 font-semibold"> sustainable growth 🌱 </span>
              through 
              <span className="text-pink-400 font-semibold"> reliable innovation</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-xl">
                Start Your Digital Journey →
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all hover:scale-105 font-semibold">
                Discover Our Solutions
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center animate-float">
            <span className="text-2xl">⚡</span>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xl">🎯</span>
          </div>
          <div className="absolute bottom-32 left-1/4 w-14 h-14 bg-green-400/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
            <span className="text-2xl">🚀</span>
          </div>
          <div className="absolute top-1/2 right-10 w-10 h-10 bg-orange-400/20 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-lg">💸</span>
          </div>
          <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-pink-400/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
            <span className="text-xl">🧨</span>
          </div>
        </div>
      </section>

      {/* Company Identity Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Built in Manila. 🇵🇭 Trusted Nationwide.
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From our headquarters in Quezon City, <span className="text-blue-600 font-semibold">JK Innovative</span> delivers 
              <span className="text-blue-600 font-semibold"> enterprise-grade solutions 🏢</span> that 
              <span className="text-green-600 font-semibold"> optimize workflows ⚙️</span>, 
              <span className="text-purple-600 font-semibold"> enhance efficiency </span>, and 
              <span className="text-red-600 font-semibold"> maximize ROI 💰 </span>
              for businesses of all sizes across the Philippines.
            </p>
          </div>

          {/* Technologies & Tools Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Technologies We Master</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
              {/* Programming Languages */}
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors group">
                <Image src="/logos/react.svg" alt="React" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">React</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-green-100 transition-colors group">
                <Image src="/logos/nodejs.png" alt="Node.js" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-green-700">Node.js</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors group">
                <Image src="/logos/typescript.png" alt="TypeScript" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-yellow-100 transition-colors group">
                <Image src="/logos/javascript.png" alt="JavaScript" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-yellow-700">JavaScript</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors group">
                <Image src="/logos/python.png" alt="Python" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Python</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-red-100 transition-colors group">
                <Image src="/logos/php.png" alt="PHP" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-red-700">PHP</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-orange-100 transition-colors group">
                <Image src="/logos/java.png" alt="Java" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-700">Java</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-purple-100 transition-colors group">
                <Image src="/logos/csharp.png" alt="C#" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-purple-700">C#</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
              {/* Frameworks & Tools */}
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors group">
                <Image src="/logos/nextjs.png" alt="Next.js" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-green-100 transition-colors group">
                <Image src="/logos/vuejs.png" alt="Vue.js" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-green-700">Vue.js</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-red-100 transition-colors group">
                <Image src="/logos/angular.png" alt="Angular" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-red-700">Angular</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-green-100 transition-colors group">
                <Image src="/logos/mongodb.png" alt="MongoDB" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-green-700">MongoDB</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors group">
                <Image src="/logos/postgresql.png" alt="PostgreSQL" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-orange-100 transition-colors group">
                <Image src="/logos/mysql.png" alt="MySQL" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-700">MySQL</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors group">
                <Image src="/logos/docker.png" alt="Docker" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Docker</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-purple-100 transition-colors group">
                <Image src="/logos/kubernetes.png" alt="Kubernetes" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-purple-700">Kubernetes</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-orange-100 transition-colors group">
                <Image src="/logos/git.png" alt="Git" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-700">Git</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-yellow-100 transition-colors group">
                <Image src="/logos/aws.png" alt="AWS" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-yellow-700">AWS</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors group">
                <Image src="/logos/azure.png" alt="Azure" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">Azure</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-indigo-100 transition-colors group">
                <Image src="/logos/flutter.png" alt="Flutter" width={48} height={48} className="mb-2" unoptimized />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-700">Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accounting System */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Accounting & Auditing</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive financial management solution with automated reporting, invoice generation, and real-time analytics.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Automated Invoicing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Financial Reporting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Internal Control Systems
                </li>
              </ul>
              <a href="#accounting" className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold">
                Learn More
              </a>
            </div>

            {/* HR & Payroll */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">HR & Payroll Systems</h3>
              <p className="text-slate-600 mb-6">
                Complete human resources management with payroll processing, employee records, and compliance tracking.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Payroll Processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Employee Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  HRIS Integration
                </li>
              </ul>
              <a href="#hr-payroll" className="block w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-semibold">
                Learn More
              </a>
            </div>

            {/* Email Hosting */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Email Hosting</h3>
              <p className="text-slate-600 mb-6">
                Professional email hosting with advanced security, spam protection, and 99.9% uptime guarantee.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  99.9% Uptime
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Advanced Security
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Spam Protection
                </li>
              </ul>
              <a href="#email-hosting" className="block w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-center font-semibold">
                Learn More
              </a>
            </div>

            {/* AI Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Development</h3>
              <p className="text-slate-600 mb-6">
                Custom artificial intelligence solutions to automate processes and enhance decision-making capabilities.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Process Automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Data Analytics
                </li>
              </ul>
              <a href="#ai-development" className="block w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors text-center font-semibold">
                Learn More
              </a>
            </div>

            {/* Ecommerce */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">💵</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Enterprise Ecommerce</h3>
              <p className="text-slate-600 mb-6">
                Scalable ecommerce platforms with integrated payment systems, inventory management, and analytics.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Payment Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Inventory Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Sales Analytics
                </li>
              </ul>
              <a href="#ecommerce" className="block w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors text-center font-semibold">
                Learn More
              </a>
            </div>

            {/* Web & Mobile */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Web & Mobile Apps</h3>
              <p className="text-slate-600 mb-6">
                Custom web and mobile applications designed for optimal user experience and performance.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Cross-Platform
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Performance Optimized
                </li>
              </ul>
              <a href="#web-mobile" className="block w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center font-semibold">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Accounting System Details */}
          <div id="accounting" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Accounting & Auditing Systems</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Streamline your financial operations with our comprehensive accounting solution. From automated invoicing to real-time financial reporting, our system ensures accuracy and compliance while saving you valuable time.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Automated Invoicing:</strong> Generate and send professional invoices automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Financial Reporting:</strong> Real-time dashboards and comprehensive reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Tax Management:</strong> Automated tax calculations and BIR compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Audit Trail:</strong> Complete transaction history and internal controls</span>
                  </li>
                </ul>
                {/*<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Request Demo
                </button>*/}
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⏱️</span>
                    <span className="text-gray-800 font-medium">Save 80% time on manual bookkeeping</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📈</span>
                    <span className="text-gray-800 font-medium">Real-time financial insights</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔒</span>
                    <span className="text-gray-800 font-medium">Bank-level security and data protection</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✅</span>
                    <span className="text-gray-800 font-medium">BIR compliant and audit-ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HR & Payroll Details */}
          <div id="hr-payroll" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 rounded-xl p-8 order-2 md:order-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Features Include</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💰</span>
                    <span className="text-gray-800 font-medium">Automated payroll processing</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📅</span>
                    <span className="text-gray-800 font-medium">Leave and attendance tracking</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📋</span>
                    <span className="text-gray-800 font-medium">Employee self-service portal</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📊</span>
                    <span className="text-gray-800 font-medium">HR analytics and reporting</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-3xl">👥</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">HR & Payroll Management</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Manage your entire workforce with our integrated HR and payroll solution. From recruitment to retirement, handle all employee-related processes efficiently and compliantly.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Payroll Processing:</strong> Automated salary calculations with tax deductions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Employee Records:</strong> Centralized database with document management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Compliance Tracking:</strong> SSS, PhilHealth, and Pag-IBIG integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Performance Management:</strong> Goals tracking and evaluation system</span>
                  </li>
                </ul>
                {/*<button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Schedule Consultation
                </button>*/}
              </div>
            </div>
          </div>

          {/* Email Hosting Details */}
          <div id="email-hosting" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-3xl">📧</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Professional Email Hosting</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Establish your professional presence with our reliable email hosting service. Enjoy enterprise-grade security, 99.9% uptime, and seamless integration with your business tools.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>99.9% Uptime:</strong> Guaranteed reliable email service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Advanced Security:</strong> Anti-spam and malware protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Mobile Access:</strong> Email sync across all devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Custom Domain:</strong> Professional @yourbusiness.com addresses</span>
                  </li>
                </ul>
               {/*} <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Get Started
                </button>*/}
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Hosting Plans</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Basic Plan</h5>
                    <p className="text-sm text-gray-700">5GB storage, 5 email accounts</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Business Plan</h5>
                    <p className="text-sm text-gray-700">25GB storage, 25 email accounts</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Enterprise Plan</h5>
                    <p className="text-sm text-gray-700">Unlimited storage and accounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Development Details */}
          <div id="ai-development" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 rounded-xl p-8 order-2 md:order-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">AI Solutions</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🧠</span>
                    <span className="text-gray-800 font-medium">Machine Learning Models</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💬</span>
                    <span className="text-gray-800 font-medium">Chatbots & Virtual Assistants</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📊</span>
                    <span className="text-gray-800 font-medium">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔍</span>
                    <span className="text-gray-800 font-medium">Computer Vision Systems</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">AI Development Services</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Harness the power of artificial intelligence to automate processes, gain insights, and make smarter business decisions. Our AI solutions are tailored to your specific industry needs.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Process Automation:</strong> Automate repetitive tasks and workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Data Analytics:</strong> Extract insights from your business data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Custom Models:</strong> AI solutions built for your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Integration:</strong> Seamless integration with existing systems</span>
                  </li>
                </ul>
                {/*<button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                  Explore AI Solutions
                </button>*/}
              </div>
            </div>
          </div>

          {/* Ecommerce Details */}
          <div id="ecommerce" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-3xl">💵</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Enterprise Ecommerce</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Build a powerful online presence with our scalable ecommerce solutions. From simple online stores to complex marketplace platforms, we create solutions that drive sales and growth.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Payment Integration:</strong> Multiple payment gateways and methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Inventory Management:</strong> Real-time stock tracking and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Order Management:</strong> Automated order processing and fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Analytics:</strong> Detailed sales reports and customer insights</span>
                  </li>
                </ul>
                {/* <button className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold">
                  View Portfolio
                </button> */}
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Platform Features</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🛒</span>
                    <span className="text-gray-800 font-medium">Shopping cart and checkout</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📱</span>
                    <span className="text-gray-800 font-medium">Mobile-responsive design</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔍</span>
                    <span className="text-gray-800 font-medium">SEO optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📊</span>
                    <span className="text-gray-800 font-medium">Admin dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Web & Mobile Details */}
          <div id="web-mobile" className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 rounded-xl p-8 order-2 md:order-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Development Services</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💻</span>
                    <span className="text-gray-800 font-medium">Custom Web Applications</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📱</span>
                    <span className="text-gray-800 font-medium">Mobile App Development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌐</span>
                    <span className="text-gray-800 font-medium">Progressive Web Apps</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <span className="text-gray-800 font-medium">Performance Optimization</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-3xl">🌐</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Web & Mobile Development</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Create exceptional digital experiences with our custom web and mobile applications. We build scalable, user-friendly solutions that engage your audience and drive business results.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Responsive Design:</strong> Perfect experience on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Cross-Platform:</strong> iOS, Android, and web compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>Modern Tech Stack:</strong> Latest frameworks and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                    <span><strong>User Experience:</strong> Intuitive and engaging interfaces</span>
                  </li>
                </ul>
                {/*<button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Start Your Project
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Make it Happen
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with our innovative IT solutions? Get in touch with us today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Philippines 🇵🇭</h3>
              <div className="space-y-2 text-blue-100">
                <p>📍 Unit 307 Casa Rafael, Quezon Ave</p>
                <p>Quezon City, Philippines 1100</p>
                <p>📞 +63 (917) 300-2031</p>
                <p>📧 info@jkinnovative.com</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Get Started</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  Schedule Consultation
                </button>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full border border-white text-white py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Accounting Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HR & Payroll</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Development</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
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

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            
            {/* Modal header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Consultation</h3>
              <p className="text-gray-600">Let's discuss how we can help transform your business with our IT solutions.</p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name / Company *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="Your name or company name"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="Company name"
                />
              </div>
              
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="+63 912 345 6789"
                />
              </div>
              
              <div>
                <label htmlFor="bestTimeToCall" className="block text-sm font-medium text-gray-700 mb-1">
                  Best Time to Call *
                </label>
                <select
                  id="bestTimeToCall"
                  name="bestTimeToCall"
                  value={formData.bestTimeToCall}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              
              {/* Form buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Schedule Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            
            {/* Modal header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Quote</h3>
              <p className="text-gray-600">Tell us about your project and we'll send you a detailed quote via email.</p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    value={quoteFormData.name}
                    onChange={handleQuoteInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="quote-company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="quote-company"
                    name="company"
                    value={quoteFormData.company}
                    onChange={handleQuoteInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    placeholder="Company name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={quoteFormData.email}
                    onChange={handleQuoteInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={quoteFormData.phone}
                    onChange={handleQuoteInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    placeholder="+63 912 345 6789"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="quote-projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type *
                </label>
                <select
                  id="quote-projectType"
                  name="projectType"
                  value={quoteFormData.projectType}
                  onChange={handleQuoteInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="">Select project type</option>
                  <option value="Accounting System">Accounting System</option>
                  <option value="HR and Payroll">HR and Payroll System</option>
                  <option value="Email Hosting">Email Hosting</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App Development</option>
                  <option value="System Integration">System Integration</option>
                  <option value="Custom Software">Custom Software Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range *
                  </label>
                  <select
                    id="quote-budget"
                    name="budget"
                    value={quoteFormData.budget}
                    onChange={handleQuoteInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="₱50,000 - ₱100,000">₱50,000 - ₱100,000</option>
                    <option value="₱100,000 - ₱250,000">₱100,000 - ₱250,000</option>
                    <option value="₱250,000 - ₱500,000">₱250,000 - ₱500,000</option>
                    <option value="₱500,000 - ₱1,000,000">₱500,000 - ₱1,000,000</option>
                    <option value="₱1,000,000+">₱1,000,000+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quote-timeline" className="block text-sm font-medium text-gray-700 mb-1">
                    Timeline *
                  </label>
                  <select
                    id="quote-timeline"
                    name="timeline"
                    value={quoteFormData.timeline}
                    onChange={handleQuoteInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP (Rush)">ASAP (Rush)</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1+ years">1+ years</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="quote-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Description *
                </label>
                <textarea
                  id="quote-description"
                  name="description"
                  value={quoteFormData.description}
                  onChange={handleQuoteInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white resize-vertical"
                  placeholder="Please describe your project requirements, features needed, and any specific requirements or constraints..."
                />
              </div>
              
              {/* Form buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}