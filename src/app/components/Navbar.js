'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-amber-600 transition duration-200">
              📚 AcrossPages
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link 
                href="/services" 
                className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200"
              >
                Services
              </Link>
              <Link 
                href="/pricing" 
                className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200"
              >
                Pricing
              </Link>
              <Link 
                href="/faq" 
                className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200"
              >
                FAQ
              </Link>
              <Link 
                href="/about" 
                className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200"
              >
                About
              </Link>
              <Link 
                href="/help" 
                className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200"
              >
                Help Center
              </Link>
            </div>
          </div>

          {/* Right Side - Quote Button & Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/quote" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-600 hover:to-orange-600 transition duration-200 shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
            
            {/* Auth Buttons */}
            <Link 
              href="/signin" 
              className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg text-sm font-medium transition duration-200"
            >
              Sign Up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-amber-600 focus:outline-none focus:text-amber-600 transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-amber-200 shadow-lg">
            <Link 
              href="/services" 
              className="text-slate-600 hover:text-amber-600 block px-3 py-2 text-base font-medium transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/pricing" 
              className="text-slate-600 hover:text-amber-600 block px-3 py-2 text-base font-medium transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/faq" 
              className="text-slate-600 hover:text-amber-600 block px-3 py-2 text-base font-medium transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/about" 
              className="text-slate-600 hover:text-amber-600 block px-3 py-2 text-base font-medium transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/help" 
              className="text-slate-600 hover:text-amber-600 block px-3 py-2 text-base font-medium transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help Center
            </Link>
            
            {/* Mobile Quote Button */}
            <Link 
              href="/quote" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white block px-3 py-2 rounded-lg text-base font-medium hover:from-amber-600 hover:to-orange-600 transition duration-200 mx-3 text-center shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
            
            {/* Mobile Auth Links */}
            <div className="border-t border-amber-200 pt-4 mt-4">
              <Link 
                href="/signin" 
                className="text-slate-600 hover:text-amber-600 block px-3 py-2 text-base font-medium transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="border border-amber-500 text-amber-600 hover:bg-amber-50 block px-3 py-2 rounded-lg text-base font-medium transition duration-200 mx-3 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}