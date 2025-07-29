'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function VendorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Partner with 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> AcrossPages</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join our network of skilled professionals to help authors and publishers reach global audiences 
            with exceptional translation and publishing services.
          </p>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="w-4/5 mx-auto mb-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Why Partner with Us?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're building a global network to augment our AI-powered services with human expertise 
            across multiple languages, scripts, and publishing formats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Growing Client Base</h3>
            <p className="text-slate-600">
              Access to a steady stream of translation and publishing projects from authors worldwide.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Fair Compensation</h3>
            <p className="text-slate-600">
              Competitive rates with timely payments and clear project terms.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Professional Support</h3>
            <p className="text-slate-600">
              Dedicated project management and technical support for all vendor partners.
            </p>
          </div>
        </div>
      </div>

      {/* Vendor Types Section */}
      <div className="w-full py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="w-4/5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Vendor Categories We're Seeking</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're looking for experienced professionals in these key areas to expand our service capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Freelance Translators */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Freelance Translators & Editors</h3>
              <p className="text-slate-600 mb-4">
                Native speakers and certified translators for quality assurance, human review, and specialized content translation.
              </p>
              <div className="text-sm text-slate-500">
                <strong>We need:</strong> Literary translators, technical writers, proofreaders, cultural consultants
              </div>
            </div>

            {/* Language Service Providers */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Language Service Providers</h3>
              <p className="text-slate-600 mb-4">
                Established translation agencies and LSPs for large-scale projects and specialized language pairs.
              </p>
              <div className="text-sm text-slate-500">
                <strong>We need:</strong> Multi-language agencies, specialized domain experts, quality assurance teams
              </div>
            </div>

            {/* Freelance Designers */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Freelance Designers</h3>
              <p className="text-slate-600 mb-4">
                Creative professionals for book cover design, illustrations, and visual elements that resonate across cultures.
              </p>
              <div className="text-sm text-slate-500">
                <strong>We need:</strong> Book cover designers, illustrators, graphic artists, cultural design specialists
              </div>
            </div>

            {/* Layout Artists */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Layout Artists</h3>
              <p className="text-slate-600 mb-4">
                Typography and layout specialists for different scripts, reading directions, and cultural formatting preferences.
              </p>
              <div className="text-sm text-slate-500">
                <strong>We need:</strong> InDesign experts, typography specialists, multi-script layout artists
              </div>
            </div>

            {/* Print on Demand */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
              <div className="text-4xl mb-4">🖨️</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Print on Demand Providers</h3>
              <p className="text-slate-600 mb-4">
                Printing services offering various trim sizes, paper types, and binding options for global distribution.
              </p>
              <div className="text-sm text-slate-500">
                <strong>We need:</strong> Global POD networks, specialty paper providers, custom binding services
              </div>
            </div>

            {/* eBook Conversion */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">eBook Conversion Experts</h3>
              <p className="text-slate-600 mb-4">
                Technical specialists for converting books into various digital formats with proper formatting and metadata.
              </p>
              <div className="text-sm text-slate-500">
                <strong>We need:</strong> ePub specialists, Kindle formatters, accessibility experts, metadata specialists
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">What We Look For</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Standards</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Proven Experience</p>
                  <p className="text-slate-600 text-sm">Portfolio of published work or verified client testimonials</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Quality Focus</p>
                  <p className="text-slate-600 text-sm">Commitment to high-quality deliverables and attention to detail</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Reliability</p>
                  <p className="text-slate-600 text-sm">Consistent meeting of deadlines and communication standards</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Cultural Awareness</p>
                  <p className="text-slate-600 text-sm">Understanding of target markets and cultural nuances</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Partnership Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ★
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Steady Workflow</p>
                  <p className="text-slate-600 text-sm">Regular project assignments based on capacity and expertise</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ★
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Prompt Payment</p>
                  <p className="text-slate-600 text-sm">Net 15-30 payment terms with secure payment methods</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ★
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Clear Communication</p>
                  <p className="text-slate-600 text-sm">Dedicated project managers and clear project specifications</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                  ★
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Professional Growth</p>
                  <p className="text-slate-600 text-sm">Opportunity to work on diverse, high-quality literary projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="w-full py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="w-4/5 mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Join Our Network?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We're excited to connect with talented professionals who share our commitment to 
            quality translation and publishing services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-amber-300 mb-3">1. Contact Us</h3>
              <p className="text-slate-300 text-sm">
                Reach out through our contact form with your specialization and experience details.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6">
              <div className="text-3xl mb-4">📂</div>
              <h3 className="text-lg font-semibold text-amber-300 mb-3">2. Portfolio Review</h3>
              <p className="text-slate-300 text-sm">
                We'll review your portfolio, credentials, and discuss potential collaboration opportunities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-amber-300 mb-3">3. Partnership</h3>
              <p className="text-slate-300 text-sm">
                Sign partnership agreement and start receiving projects that match your expertise.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Get Started Today</h3>
            <p className="text-slate-600 mb-6">
              Tell us about your expertise, experience, and how you'd like to contribute to helping 
              authors reach global audiences.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us to Apply
            </a>
            <p className="text-slate-500 text-sm mt-4">
              Please mention "Vendor Partnership" in your message subject
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}