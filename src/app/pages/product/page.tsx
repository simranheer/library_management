"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';
export default function productPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Intuitive Book Catalog",
      description: "Browse thousands of books with advanced search and filtering options.",
      icon: "📚"
    },
    {
      title: "Member Management",
      description: "Easily manage library members with detailed profiles and activity tracking.",
      icon: "👥"
    },
    {
      title: "Loan Tracking",
      description: "Automated due date reminders and fine calculations for overdue books.",
      icon: "⏱️"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights into library usage and popular titles.",
      icon: "📊"
    }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Libra | Modern Library Management System</title>
        <meta name="description" content="Next-gen library management solution" />
      </Head>

      {/* Animated Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 bg-white shadow-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600">Library Lynx</span>
              <span className="hidden md:block text-sm font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">v2.1</span>
            </div>
            
            {/* Desktop Navigation */}
            {/* <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </div> */}
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <div className="hidden md:block">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {/* {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-3 pb-3">
              <a href="#features" className="block text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="block text-gray-700 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-indigo-600 transition-colors">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg mt-2">
                Get Started
              </button>
            </div>
          )} */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Modern <span className="text-indigo-600">Library Management</span> Made Simple
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Streamline your library operations with our intuitive, cloud-based solution designed for schools, universities, and public libraries.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-all">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-20 -right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 transform transition-all hover:scale-105">
                <img 
                  src="/library-dashboard.png" 
                  alt="Library Management Dashboard" 
                  className="rounded-lg border border-gray-200"
                  onError={(e) => {
                    (e.target as HTMLImageElement).onerror = null; 
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Library+Dashboard";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your library efficiently and provide excellent service to your patrons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${activeFeature === index ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <div className="relative w-full h-64 md:h-80">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="text-6xl mb-6 transform hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your library's needs. No hidden fees, cancel anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "per month",
                description: "Perfect for small libraries and schools",
                features: ["Up to 1,000 books", "500 member capacity", "product reporting", "Email support"]
              },
              {
                name: "Professional",
                price: "$79",
                period: "per month",
                description: "Ideal for medium-sized libraries",
                features: ["Up to 10,000 books", "5,000 member capacity", "Advanced analytics", "Priority support", "API access"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large institutions and consortia",
                features: ["Unlimited books", "Unlimited members", "Dedicated account manager", "Custom integrations", "On-premise option"]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 ${plan.popular ? 'border-2 border-indigo-500 relative' : 'border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                    {plan.period && <span className="text-gray-600"> {plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by Libraries Worldwide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Libra has transformed how we manage our school library. Circulation is up 30% since implementation.",
                name: "Sarah Johnson",
                role: "Head Librarian, Greenfield High",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "The analytics dashboard alone is worth the price. We've optimized our collection based on the data.",
                name: "Michael Chen",
                role: "Library Director, Metro Public",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "Our members love the new self-checkout feature. Staff can now focus on reader advisory services.",
                name: "Emma Rodriguez",
                role: "Children's Librarian, Sunnyvale Library",
                avatar: "https://randomuser.me/api/portraits/women/63.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="mb-6 text-indigo-500 text-3xl">“</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null; 
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/100?text=Avatar";
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Library?</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Join hundreds of libraries already enjoying streamlined operations and happier patrons.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
              Start Your Free 30-Day Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Libra</h3>
              <p className="mb-4">Modern library management for the digital age.</p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <address className="not-italic">
                <p className="mb-2">Garhshankar</p>
                <p className="mb-2">Hoshiarpur, CC 144523</p>
                <p className="mb-2">Email: info@libra.example</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Libra Library Management. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}