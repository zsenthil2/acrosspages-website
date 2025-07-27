'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-lg border-b-2 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-bold text-amber-300 hover:text-amber-200 transition duration-200 cursor-pointer">
                📚 AcrossPages
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/services" className="text-slate-100 hover:text-amber-300 px-3 py-2 text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-amber-300">
              Services
              </a>
              <a href="#how-it-works" className="text-slate-100 hover:text-amber-300 px-3 py-2 text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-amber-300">
                How it works
              </a>
              <a href="#pricing" className="text-slate-100 hover:text-amber-300 px-3 py-2 text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-amber-300">
                Pricing
              </a>
              <a href="#about" className="text-slate-100 hover:text-amber-300 px-3 py-2 text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-amber-300">
                About
              </a>
            </div>
          </div>

          {/* Sign Up/Sign In Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text-slate-100 hover:text-amber-300 px-4 py-2 text-sm font-medium transition duration-200">
                Sign In
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 shadow-md hover:shadow-lg">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-100 hover:text-amber-300 focus:outline-none focus:text-amber-300 transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700 border-t border-slate-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#service" className="text-slate-100 hover:text-amber-300 hover:bg-slate-600 block px-3 py-2 text-base font-medium transition duration-200 rounded-md">
              Service
            </a>
            <a href="#how-it-works" className="text-slate-100 hover:text-amber-300 hover:bg-slate-600 block px-3 py-2 text-base font-medium transition duration-200 rounded-md">
              How it works
            </a>
            <a href="#pricing" className="text-slate-100 hover:text-amber-300 hover:bg-slate-600 block px-3 py-2 text-base font-medium transition duration-200 rounded-md">
              Pricing
            </a>
            <a href="#about" className="text-slate-100 hover:text-amber-300 hover:bg-slate-600 block px-3 py-2 text-base font-medium transition duration-200 rounded-md">
              About
            </a>
            <div className="pt-4 pb-3 border-t border-slate-600">
              <div className="space-y-2">
                <button className="text-slate-100 hover:text-amber-300 hover:bg-slate-600 block px-3 py-2 text-base font-medium w-full text-left transition duration-200 rounded-md">
                  Sign In
                </button>
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 block px-3 py-2 text-base font-semibold w-full text-left transition duration-200 rounded-md">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}