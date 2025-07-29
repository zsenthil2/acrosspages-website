'use client';

import Link from 'next/link';

export default function Footer() {
  return (
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
          </div>

          {/* Main Navigation Column */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
               <li><Link href="/services" className="text-slate-600 hover:text-amber-600 transition duration-200">Services</Link></li>
              <li><Link href="/quote" className="text-slate-600 hover:text-amber-600 transition duration-200">Get a quote</Link></li>
              <li><Link href="/pricing" className="text-slate-600 hover:text-amber-600 transition duration-200">Pricing</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-amber-600 transition duration-200">About</Link></li>
              
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-slate-600 hover:text-amber-600 transition duration-200">Contact Us</Link></li>
              <li><Link href="/help" className="text-slate-600 hover:text-amber-600 transition duration-200">Help Center</Link></li>
              <li><Link href="/vendors" className="text-slate-600 hover:text-amber-600 transition duration-200">Vendors</Link></li>
              <li><Link href="/enterprise" className="text-slate-600 hover:text-amber-600 transition duration-200">Enterprise</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-slate-600 hover:text-amber-600 transition duration-200">Privacy Policy</Link></li>
              <li><Link href="/termsofservice" className="text-slate-600 hover:text-amber-600 transition duration-200">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-slate-600 hover:text-amber-600 transition duration-200">Cookie Policy</Link></li>
              <li><Link href="/gdpr" className="text-slate-600 hover:text-amber-600 transition duration-200">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-600 text-sm mb-4 md:mb-0">
            © 2025 Ailaysa Technologies Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
