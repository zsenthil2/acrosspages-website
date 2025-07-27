'use client';

import Navbar from '../components/Navbar'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Privacy 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> Policy</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            How we collect, use, and protect your personal information and content.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg prose prose-slate max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Personal Information</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Name and email address</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communication history and support requests</li>
                <li>Account preferences and settings</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Content and Files</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Documents and manuscripts you submit for translation</li>
                <li>Project specifications and instructions</li>
                <li>Translated content and project outputs</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Technical Information</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li>IP address and browser information</li>
                <li>Usage patterns and service interactions</li>
                <li>Device information and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">2. How We Use Your Information</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Service Delivery</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Process and translate your content</li>
                <li>Communicate about your projects</li>
                <li>Provide customer support</li>
                <li>Deliver completed translations</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Business Operations</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Process payments and manage accounts</li>
                <li>Improve our services and technology</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Communications</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li>Send project updates and completion notices</li>
                <li>Provide customer support responses</li>
                <li>Share service announcements (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">3. Data Protection and Security</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Encryption and Storage</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We use secure cloud infrastructure with multiple backup systems and access controls.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Access Controls</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Only authorized personnel can access your content</li>
                <li>All access is logged and monitored</li>
                <li>Staff sign confidentiality agreements</li>
                <li>Multi-factor authentication required for system access</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">AI Model Training</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>We do not use your content to train our AI models.</strong> Your manuscripts and translations remain private and are not used to improve our algorithms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">4. Data Sharing and Disclosure</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">We Never Share Your Content</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your manuscripts, translations, and creative content are never shared with third parties, except as required by law or with your explicit consent.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Service Providers</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may share limited personal information with trusted service providers who help us operate our business:
              </p>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Payment processors (Stripe, PayPal)</li>
                <li>Cloud hosting providers (AWS, Google Cloud)</li>
                <li>Email service providers</li>
                <li>Analytics services (anonymized data only)</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Legal Requirements</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may disclose information when required by law, court order, or to protect our rights and safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">5. Data Retention</h2>
              
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li><strong>Project Files:</strong> Deleted 90 days after project completion (unless you request longer retention)</li>
                <li><strong>Account Information:</strong> Retained while your account is active</li>
                <li><strong>Payment Records:</strong> Kept for 7 years for tax and legal compliance</li>
                <li><strong>Support Communications:</strong> Retained for 3 years for service improvement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">6. Your Rights and Choices</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Access and Control</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Request copies of your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in common formats</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Communication Preferences</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Opt out of marketing communications</li>
                <li>Choose notification preferences</li>
                <li>Update contact information</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">For EU Residents (GDPR Rights)</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li>Right to be forgotten (data erasure)</li>
                <li>Data portability</li>
                <li>Restrict processing</li>
                <li>Object to processing</li>
                <li>Lodge complaints with supervisory authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">7. Cookies and Tracking</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Essential Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Required for basic website functionality, security, and user authentication.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Analytics Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Help us understand how visitors use our website (anonymized data only).
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Managing Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can control cookies through your browser settings. Disabling essential cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">8. International Data Transfers</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our primary servers are located in India. For EU customers, we ensure adequate protection through:
              </p>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Equivalent data protection measures</li>
                <li>Secure transfer protocols</li>
                <li>Regular security audits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">9. Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our services are not intended for children under 16. We do not knowingly collect personal information from children. If we discover such data, we will delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update this Privacy Policy periodically. Significant changes will be communicated via email and website notice. The "Last updated" date indicates when changes were made.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">11. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For privacy-related questions or to exercise your rights, contact us at:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-slate-700 font-medium">Data Protection Officer</p>
                <p className="text-slate-600">Email: privacy@acrosspages.com</p>
                <p className="text-slate-600">Address: Ailaysa Technologies Pvt Ltd</p>
                <p className="text-slate-600">123 Innovation Street, Tech District, Mumbai 400001, India</p>
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