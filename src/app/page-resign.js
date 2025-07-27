'use client'

import Navbar from './components/Navbar'
import AnimatedH1 from './components/AnimatedH1'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section with Animated H1 */}
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="w-full">
          <AnimatedH1 />
          
          {/* Main Content */}
          <div className="w-4/5 mx-auto text-center">
            {/* Description */}
            <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Advanced AI delivers culturally authentic, publish-ready translations <br /> 
              that help authors and publishers reach global audiences
            </p>
            
            {/* Key Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Contextual AI</h3>
                <p className="text-slate-600">Long-form context awareness for consistent narrative flow</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Cultural Fit</h3>
                <p className="text-slate-600">Culturally appropriate translations that resonate with target audiences</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">One-stop Shop</h3>
                <p className="text-slate-600">Beyond AI, add optional human review and publishing services</p>
              </div>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-8">
              <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-10 rounded-lg transition duration-200 shadow-lg hover:shadow-xl text-lg">
                📖 Start Translating, Free!
              </button>
              <button className="w-full sm:w-auto border-2 border-slate-300 hover:border-amber-400 hover:bg-amber-50 text-slate-700 font-semibold py-4 px-10 rounded-lg transition duration-200 text-lg">
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full py-20 px-4 bg-slate-50">
        <div className="w-4/5 mx-auto text-center">
          {/* Section Headline */}
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            From manuscript to publish-ready translation in just three simple steps
          </p>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div className="text-4xl mb-4 mt-4">🔒</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Secure Upload</h3>
                <p className="text-slate-600 leading-relaxed">
                  Share your manuscript through our encrypted platform with enterprise-grade data protection.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div className="text-4xl mb-4 mt-4">🧠</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">AI Analysis & Translation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our contextual AI analyzes your unique style, terminology, and subject matter to deliver culturally authentic translations.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div className="text-4xl mb-4 mt-4">⚡</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Rapid Delivery</h3>
                <p className="text-slate-600 leading-relaxed">
                  Receive your publish-ready translation in hours, not weeks, with maintained literary elegance.
                </p>
              </div>
            </div>
          </div>
          
          {/* Optional Step */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg border border-amber-200 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-slate-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  +
                </span>
                <h3 className="text-xl font-semibold text-slate-800">Professional Enhancement</h3>
                <span className="ml-3 text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                  Optional
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Add human review, layout design, cover creation, ebook conversion, and audiobook production for complete publishing readiness.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl mr-4">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators Section */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-16 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">📚</div>
          <div className="absolute top-20 right-20 text-4xl">✨</div>
          <div className="absolute bottom-10 left-20 text-5xl">🌍</div>
          <div className="absolute bottom-20 right-10 text-3xl">📖</div>
        </div>
        
        <div className="w-4/5 mx-auto text-center relative z-10">
          {/* Main Trust Statement */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-amber-300 mb-4">
              Trusted by Authors & Publishers Worldwide
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Join hundreds of authors and publishers who trust AcrossPages for translation
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Accuracy Stat */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-6xl mb-4 group-hover:animate-pulse">⭐</div>
                <div className="text-4xl font-bold text-amber-300 mb-2">95%-99%</div>
                <div className="text-slate-200 font-semibold text-lg mb-2">Translation Accuracy</div>
                <div className="text-slate-400 text-sm">
                  Verified by professional editors and native speakers
                </div>
              </div>
            </div>
            
            {/* Speed Stat */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-6xl mb-4 group-hover:animate-bounce">🚀</div>
                <div className="text-4xl font-bold text-amber-300 mb-2">10x Faster</div>
                <div className="text-slate-200 font-semibold text-lg mb-2">Than Human Translation</div>
                <div className="text-slate-400 text-sm">
                  Hours instead of weeks for complete manuscripts
                </div>
              </div>
            </div>
            
            {/* Security Stat */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-6xl mb-4 group-hover:animate-pulse">🔒</div>
                <div className="text-4xl font-bold text-amber-300 mb-2">No training</div>
                <div className="text-slate-200 font-semibold text-lg mb-2">with your data</div>
                <div className="text-slate-400 text-sm">
                  Enterprise encryption with confidentiality agreements
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-300 text-sm">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              24/7 Support
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Money-Back Guarantee
            </div>
          </div>
          
          {/* Testimonial Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-lg p-6">
              <blockquote className="text-slate-200 text-lg italic mb-4">
                "AcrossPages transformed our publishing timeline. What used to take months now takes hours, 
                without compromising the literary quality our readers expect."
              </blockquote>
              <div className="text-amber-300 font-semibold">
                — International Publishing House, London
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Languages We Support Section */}
      <div className="w-full py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-100">
        <div className="w-4/5 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
              Languages We Support
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Connect with readers worldwide through our comprehensive language support. 
              Here are some of the most popular languages on demand.
            </p>
          </div>

          {/* Languages Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Arabic</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Bengali</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Bulgarian</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Chinese</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Czech</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Danish</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Dutch</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">English</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Finnish</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">French</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">German</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Greek</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Hebrew</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Hindi</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Hungarian</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Indonesian</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Italian</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Japanese</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Korean</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Norwegian</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Persian</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Polish</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Portuguese</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Russian</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Spanish</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Swahili</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Swedish</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Tamil</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Thai</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Turkish</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Urdu</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-lg p-4 text-center hover:bg-white/90 transition duration-200 hover:scale-105">
                <div className="font-medium text-slate-800">Vietnamese</div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl">
              See Full Languages List
            </button>
            <p className="text-slate-500 text-sm mt-4">
              Supporting 100+ languages with more being added regularly
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="w-full py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-8xl transform rotate-12">📚</div>
          <div className="absolute top-40 right-32 text-6xl transform -rotate-12">✨</div>
          <div className="absolute bottom-32 left-32 text-7xl transform rotate-45">🌍</div>
          <div className="absolute bottom-20 right-20 text-5xl transform -rotate-45">📖</div>
          <div className="absolute top-60 left-1/2 text-4xl transform rotate-90">🔤</div>
        </div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></div>
        </div>

        <div className="w-4/5 mx-auto text-center relative z-10">
          {/* Attention Grabber */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-amber-500/20 border border-amber-400/30 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-300 text-sm font-medium">🎉 Gain in translation!</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Ready to Go
            <span className="block text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text">
              Global?
            </span>
          </h2>
          
          {/* Supporting Headline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the power of contextual AI translation. 
            <span className="text-amber-300 font-semibold"> See your words come alive in any language.</span>
          </p>
          
          {/* Main CTA Button */}
          <div className="mb-8">
            <button className="group relative bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:via-amber-500 hover:to-yellow-500 text-slate-900 text-xl md:text-2xl font-bold px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
              <span className="relative z-10 flex items-center justify-center">
                📝 Start Translating Your Sample Free
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-gradient-to-br from-slate-50 to-amber-50 border-t border-slate-200">
        <div className="w-4/5 mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 flex items-center">
                  📚 AcrossPages
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  AI-powered book translation service that preserves literary style and cultural authenticity, 
                  helping authors and publishers reach global audiences with contextual, publish-ready translations.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-slate-500 hover:text-amber-600 transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-500 hover:text-amber-600 transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-500 hover:text-amber-600 transition duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Main Navigation Column */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#service" className="text-slate-600 hover:text-amber-600 transition duration-200">Service</a></li>
                <li><a href="#how-it-works" className="text-slate-600 hover:text-amber-600 transition duration-200">How it Works</a></li>
                <li><a href="#pricing" className="text-slate-600 hover:text-amber-600 transition duration-200">Pricing</a></li>
                <li><a href="#about" className="text-slate-600 hover:text-amber-600 transition duration-200">About</a></li>
                <li><a href="#languages" className="text-slate-600 hover:text-amber-600 transition duration-200">Languages</a></li>
              </ul>
            </div>
            
            {/* Support Column */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#contact" className="text-slate-600 hover:text-amber-600 transition duration-200">Contact Us</a></li>
                <li><a href="#help" className="text-slate-600 hover:text-amber-600 transition duration-200">Help Center</a></li>
                <li><a href="#vendors" className="text-slate-600 hover:text-amber-600 transition duration-200">Vendors</a></li>
                <li><a href="#enterprise" className="text-slate-600 hover:text-amber-600 transition duration-200">Enterprise</a></li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#privacy" className="text-slate-600 hover:text-amber-600 transition duration-200">Privacy Policy</a></li>
                <li><a href="#terms" className="text-slate-600 hover:text-amber-600 transition duration-200">Terms of Service</a></li>
                <li><a href="#cookies" className="text-slate-600 hover:text-amber-600 transition duration-200">Cookie Policy</a></li>
                <li><a href="#gdpr" className="text-slate-600 hover:text-amber-600 transition duration-200">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-600 text-sm mb-4 md:mb-0">
              © 2025 Ailaysa Technologies Pvt Ltd. All rights reserved.
            </div>
            
            {/* Quick Access */}
            <div className="flex space-x-6 text-xs text-slate-500">
              <a href="#security" className="hover:text-amber-600 transition duration-200">Security</a>
              <a href="#status" className="hover:text-amber-600 transition duration-200">Status</a>
              <a href="#blog" className="hover:text-amber-600 transition duration-200">Blog</a>
              <a href="#careers" className="hover:text-amber-600 transition duration-200">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}