import Link from "next/link";

export default function Home() {
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
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#products" className="text-slate-700 hover:text-blue-600 transition-colors">Products</Link>
              <Link href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Innovative IT Solutions
              <span className="block text-blue-600">for Your Business</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Transform your business operations with our cutting-edge technology solutions. 
              From accounting systems to email hosting, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-semibold">
                Explore Our Products
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all hover:scale-105 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-2xl">💻</span>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xl">⚡</span>
          </div>
          <div className="absolute bottom-32 left-1/4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center animate-bounce delay-300">
            <span className="text-2xl">🔧</span>
          </div>
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
            {/* Accounting System */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Accounting System</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive financial management solution with automated reporting, 
                invoice generation, and real-time analytics for your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Automated Invoicing
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Financial Reporting
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Tax Management
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>

            {/* HR and Payroll */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">HR & Payroll</h3>
              <p className="text-slate-600 mb-6">
                Complete human resources management with payroll processing, 
                employee records, and automated compliance tracking.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Payroll Processing
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Employee Management
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Compliance Tracking
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>

            {/* Email Hosting */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Email Hosting</h3>
              <p className="text-slate-600 mb-6">
                Professional email hosting with advanced security, 
                spam protection, and 99.9% uptime guarantee for your business.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  99.9% Uptime
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Advanced Security
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Spam Protection
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Learn More
              </button>
            </div>
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
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Implementation</h3>
              <p className="text-slate-600">Quick deployment and seamless integration with your existing systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Secure & Reliable</h3>
              <p className="text-slate-600">Enterprise-grade security with 24/7 monitoring and support</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation First</h3>
              <p className="text-slate-600">Latest technology solutions designed for modern businesses</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Support</h3>
              <p className="text-slate-600">Dedicated technical support team available when you need us</p>
            </div>
          </div>
        </div>
      </section>

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
                <li>📞 +1 (555) 123-4567</li>
                <li>📧 info@jk-innovative.com</li>
                <li>📍 123 Tech Street, Innovation City</li>
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
