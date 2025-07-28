'use client';

import Navbar from '../components/Navbar'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Simple 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> Pricing</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transparent, affordable AI translation to help you reach global audiences.
          </p>
        </div>
      </div>

      {/* Main Pricing Box */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 border-2 border-amber-300 shadow-2xl text-center relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200 to-transparent rounded-tr-full opacity-50"></div>
            
            {/* Main Content */}
            <div className="relative z-10">
              {/* Main Price Display */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-700 mb-4">AI Translation Only</h2>
                <div className="mb-6">
                  <span className="text-7xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text">
                    $99
                  </span>
                  <span className="text-3xl font-bold text-slate-600 ml-2">only*</span>
                </div>
                <p className="text-lg text-slate-600 font-medium mb-8">
                  For books less than 50,000 words
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">What's Included:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                      ✓
                    </div>
                    <span className="text-slate-700">AI translation with self-adaptive technology</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                      ✓
                    </div>
                    <span className="text-slate-700">Self-post editing for enhanced quality</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                      ✓
                    </div>
                    <span className="text-slate-700">Professional process management</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0 mt-0.5 text-sm">
                      ✓
                    </div>
                    <span className="text-slate-700">Dedicated account manager</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-sm text-slate-500 mb-8">
                * For books under 50,000 words. Additional charges may apply for complex formatting or specialized content.
              </div>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 mb-6">
                Start Your Translation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="w-full py-20 px-4 bg-white/30 backdrop-blur-sm border-t border-amber-200">
        <div className="w-4/5 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-8">Need More Than AI Translation?</h2>
            <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              For premium features, volume discounts, human review, and additional publishing services, 
              get a customized quote tailored to your specific needs.
            </p>

            {/* Premium Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-slate-800 mb-2">Style Guides</h3>
                <p className="text-slate-600 text-sm">Custom terminology and style consistency</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="font-semibold text-slate-800 mb-2">Human Review</h3>
                <p className="text-slate-600 text-sm">Professional editor review and refinement</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-semibold text-slate-800 mb-2">Design Services</h3>
                <p className="text-slate-600 text-sm">Page layout and cover design</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-slate-800 mb-2">eBook Conversion</h3>
                <p className="text-slate-600 text-sm">Professional digital format conversion</p>
              </div>
            </div>

            {/* Volume Discounts */}
            <div className="bg-gradient-to-br from-slate-100 to-amber-100 rounded-xl p-8 mb-12 border border-amber-200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Volume Discounts Available</h3>
              <p className="text-slate-600 mb-6">
                Translating multiple books? Publishers and authors with series get special pricing. 
                Contact us for bulk discounts and enterprise solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-700">
                <div className="bg-white/60 px-4 py-2 rounded-lg">
                  <span className="font-medium">5+ Books:</span> 10% off
                </div>
                <div className="bg-white/60 px-4 py-2 rounded-lg">
                  <span className="font-medium">10+ Books:</span> 20% off
                </div>
                <div className="bg-white/60 px-4 py-2 rounded-lg">
                  <span className="font-medium">Publishers:</span> Custom rates
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/quote" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-center"
              >
                Get Custom Quote
              </a>
              <a 
                href="/contact" 
                className="border-2 border-amber-500 text-amber-600 font-bold py-4 px-8 rounded-lg transition duration-200 hover:bg-amber-50 text-center"
              >
                Contact Us for Details
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Pricing Section */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-8 text-center">Pricing FAQ</h2>
          
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What if my book is longer than 50,000 words?</h3>
              <p className="text-slate-600">
                Books over 50,000 words are priced based on word count and complexity. Use our quote form for accurate pricing on longer works.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Are there any hidden fees?</h3>
              <p className="text-slate-600">
                No hidden fees. The $99 price includes everything listed. Additional services like human review or design work are optional and clearly priced.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">How do I pay?</h3>
              <p className="text-slate-600">
                We accept all major credit cards, PayPal, and bank transfers. Payment is due upon project completion with our secure payment system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
                  AI-powered book translation service that preserves literary style and cultural authenticity.
                </p>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/" className="text-slate-600 hover:text-amber-600 transition duration-200">Home</a></li>
                <li><a href="/about" className="text-slate-600 hover:text-amber-600 transition duration-200">About</a></li>
                <li><a href="/pricing" className="text-slate-600 hover:text-amber-600 transition duration-200">Pricing</a></li>
                <li><a href="/contact" className="text-slate-600 hover:text-amber-600 transition duration-200">Contact</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/help" className="text-slate-600 hover:text-amber-600 transition duration-200">Help Center</a></li>
                <li><a href="/quote" className="text-slate-600 hover:text-amber-600 transition duration-200">Get Quote</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/privacy" className="text-slate-600 hover:text-amber-600 transition duration-200">Privacy Policy</a></li>
                <li><a href="/terms" className="text-slate-600 hover:text-amber-600 transition duration-200">Terms of Service</a></li>
                <li><a href="/gdpr" className="text-slate-600 hover:text-amber-600 transition duration-200">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-300 pt-8 text-center">
            <div className="text-slate-600 text-sm">
              © 2025 Ailaysa Technologies Pvt Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}