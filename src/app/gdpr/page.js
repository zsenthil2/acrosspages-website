'use client';

import Navbar from '../components/Navbar';
export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            GDPR 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> Compliance</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to protecting the privacy rights of EU residents under the General Data Protection Regulation.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>
      </div>

      {/* GDPR Content */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg prose prose-slate max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">1. GDPR Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that applies to all EU residents. As a global service provider, AcrossPages (operated by Ailaysa Technologies Pvt Ltd) is committed to full GDPR compliance for all EU customers.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                This document outlines how we meet GDPR requirements and protect your rights as an EU data subject.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">2. Legal Basis for Processing</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We process personal data under the following legal bases:
              </p>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Contract Performance (Article 6(1)(b))</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Processing translation projects</li>
                <li>Delivering completed translations</li>
                <li>Customer support and communication</li>
                <li>Payment processing</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Legitimate Interest (Article 6(1)(f))</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Service improvement and analytics</li>
                <li>Fraud prevention and security</li>
                <li>Marketing to existing customers (with opt-out option)</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Consent (Article 6(1)(a))</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li>Optional marketing communications</li>
                <li>Non-essential cookies</li>
                <li>Newsletter subscriptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">3. Your GDPR Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                As an EU resident, you have the following rights under GDPR:
              </p>

              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Right of Access (Article 15)</h3>
                  <p className="text-slate-600">Request copies of your personal data and information about how we process it.</p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Right to Rectification (Article 16)</h3>
                  <p className="text-slate-600">Correct inaccurate or incomplete personal data.</p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Right to Erasure (Article 17)</h3>
                  <p className="text-slate-600">Request deletion of your personal data ("right to be forgotten").</p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Right to Restrict Processing (Article 18)</h3>
                  <p className="text-slate-600">Limit how we use your personal data in certain circumstances.</p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Right to Data Portability (Article 20)</h3>
                  <p className="text-slate-600">Receive your data in a machine-readable format or transfer it to another service.</p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Right to Object (Article 21)</h3>
                  <p className="text-slate-600">Object to processing based on legitimate interest or for direct marketing.</p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Right to Withdraw Consent (Article 7)</h3>
                  <p className="text-slate-600">Withdraw consent at any time for processing based on consent.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">4. How to Exercise Your Rights</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact Methods</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Email: gdpr@acrosspages.com</li>
                <li>Contact form on our website</li>
                <li>Written request to our postal address</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Response Timeline</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>We respond within 1 month of receiving your request</li>
                <li>Complex requests may take up to 3 months (we'll inform you)</li>
                <li>We may request identity verification for security</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">No Cost</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Exercising your GDPR rights is free of charge, unless requests are manifestly unfounded or excessive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">5. Data Protection Measures</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Technical Safeguards</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>End-to-end encryption for all data transfers</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Multi-factor authentication for system access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure backup and disaster recovery systems</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Organizational Measures</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Staff training on data protection</li>
                <li>Confidentiality agreements for all personnel</li>
                <li>Access controls and need-to-know basis</li>
                <li>Regular review of data processing activities</li>
                <li>Incident response procedures</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Privacy by Design</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We implement privacy protection from the ground up in all our systems and processes, ensuring minimal data collection and maximum protection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">6. International Data Transfers</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Transfer Mechanisms</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When transferring EU personal data outside the EEA, we use appropriate safeguards:
              </p>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions where available</li>
                <li>Additional security measures and encryption</li>
                <li>Regular assessment of transfer risks</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Data Locations</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our primary servers are in India, with backup systems in secure facilities. All locations meet international security standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">7. Data Retention</h2>
              
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Retention Periods</h3>
                <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                  <li><strong>Project files:</strong> 90 days after completion (or as requested)</li>
                  <li><strong>Account data:</strong> While account is active + 1 year</li>
                  <li><strong>Payment records:</strong> 7 years (legal requirement)</li>
                  <li><strong>Marketing data:</strong> Until consent is withdrawn</li>
                  <li><strong>Support tickets:</strong> 3 years for service improvement</li>
                </ul>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-4">
                Data is automatically deleted when retention periods expire, unless legal obligations require longer retention.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">8. Breach Notification</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Our Obligations</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2 mb-4">
                <li>Report breaches to supervisory authorities within 72 hours</li>
                <li>Notify affected individuals if there's high risk to their rights</li>
                <li>Document all breaches and response measures</li>
                <li>Implement measures to prevent future breaches</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">What We'll Tell You</h3>
              <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                <li>Nature of the breach and data involved</li>
                <li>Likely consequences and risks</li>
                <li>Measures taken to address the breach</li>
                <li>Steps you can take to protect yourself</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">9. Supervisory Authority</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you're not satisfied with how we handle your personal data or GDPR requests, you have the right to lodge a complaint with your local supervisory authority.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Common EU Supervisory Authorities</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li><strong>Germany:</strong> Bundesbeauftragte für den Datenschutz</li>
                  <li><strong>France:</strong> Commission Nationale de l'Informatique et des Libertés (CNIL)</li>
                  <li><strong>UK:</strong> Information Commissioner's Office (ICO)</li>
                  <li><strong>Ireland:</strong> Data Protection Commission (DPC)</li>
                  <li><strong>Netherlands:</strong> Autoriteit Persoonsgegevens (AP)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">10. Data Protection Officer</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Data Protection Officer oversees GDPR compliance and serves as your primary contact for data protection matters.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact Our DPO</h3>
                <p className="text-slate-600"><strong>Email:</strong> dpo@acrosspages.com</p>
                <p className="text-slate-600"><strong>Address:</strong> Data Protection Officer</p>
                <p className="text-slate-600">Ailaysa Technologies Pvt Ltd</p>
                <p className="text-slate-600">123 Innovation Street, Tech District</p>
                <p className="text-slate-600">Mumbai 400001, India</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">11. Updates to This Policy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We review and update our GDPR compliance regularly. Significant changes will be communicated to EU customers via email and website notice.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We maintain records of all policy versions and the reasons for changes as required by GDPR.
              </p>
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