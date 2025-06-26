"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">ShopNest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/product" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Products</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">About</Link>
            <Link href="/pages/contacts" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-3 mt-4 pb-4">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Products</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;