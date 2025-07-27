'use client';

import Navbar from '../components/Navbar'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Terms of 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> Service</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our translation services.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg prose prose-slate max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing and using AcrossPages services provided by Ailaysa Technologies Pvt Ltd ("Company," "we," "us"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">2. Description of Services</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                AcrossPages provides AI-powered book translation services, including but not limited to:
              </p>
              <ul className="text-slate-600 leading-relaxed mb-4 list-disc list-inside space-y-2">
                <li>Automated translation of written content</li>
                <li>Human review and editing services</li>
                <li>Formatting and layout services</li>
                <li>File conversion services</li>
                <li>Related publishing support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">3. User Responsibilities</h2>
              <div className="text-slate-600 leading-relaxed mb-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">You agree to:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Only submit content you own or have rights to translate</li>
                  <li>Not upload illegal, harmful, or infringing content</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all fees as agreed upon</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-slate-800 mb-2">You agree not to:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reverse engineer or attempt to extract our AI models</li>
                  <li>Use our services for illegal or harmful purposes</li>
                  <li>Share your account credentials with others</li>
                  <li>Violate any intellectual property rights</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">4. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You retain all rights to your original content. By using our services, you grant us a limited license to process, translate, and deliver your content back to you. We do not claim ownership of your content or translations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our AI models, software, and methodology remain our proprietary intellectual property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">5. Payment Terms</h2>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li>Payment is due upon project completion unless otherwise agreed</li>
                <li>Prices are quoted in USD and may vary by project complexity</li>
                <li>Refunds are available as outlined in our refund policy</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are exclusive of applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">6. Quality and Warranties</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We strive to provide high-quality translations but do not guarantee perfection. AI translation accuracy typically ranges from 95-99% depending on language pair and content complexity.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Services are provided "as is" without warranties of any kind, express or implied.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our liability is limited to the fees paid for the specific service. We are not liable for indirect, incidental, or consequential damages, including lost profits or business interruption.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Maximum liability shall not exceed the amount paid for the service in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">8. Privacy and Data Protection</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your privacy is important to us. Our data practices are governed by our Privacy Policy and GDPR Compliance Policy. We do not use your content to train our AI models.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">9. Termination</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Either party may terminate services with reasonable notice. Upon termination, you remain responsible for any outstanding fees, and we will return or destroy your content as requested.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">10. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                These terms are governed by Indian law for customers worldwide. For EU customers, local consumer protection laws may also apply. Disputes will be resolved through arbitration or in courts of competent jurisdiction in Mumbai, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">11. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update these terms periodically. Significant changes will be communicated via email or website notice. Continued use after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">12. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-slate-700 font-medium">Ailaysa Technologies Pvt Ltd</p>
                <p className="text-slate-600">Email: legal@acrosspages.com</p>
                <p className="text-slate-600">Address: 123 Innovation Street, Tech District, Mumbai 400001, India</p>
              </div>
            </section>

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
                <li><a href="/faq" className="text-slate-600 hover:text-amber-600 transition duration-200">FAQ</a></li>
                <li><a href="/contact" className="text-slate-600 hover:text-amber-600 transition duration-200">Contact</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#help" className="text-slate-600 hover:text-amber-600 transition duration-200">Help Center</a></li>
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