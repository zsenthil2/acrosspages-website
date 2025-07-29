'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Help 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> Center</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the option that best describes your situation to get the help you need.
          </p>
        </div>
      </div>

      {/* Help Options Section */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Existing Customers */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
              <div className="text-5xl mb-6">👤</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Existing Customers</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                If you are an existing customer with ongoing projects, please contact your dedicated account manager for personalized assistance.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-slate-700 font-medium text-sm">
                  Your account manager's contact details are available in your project dashboard or welcome email.
                </p>
              </div>
            </div>

            {/* New Users */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
              <div className="text-5xl mb-6">❓</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">New Users</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                If you're new to AcrossPages and have questions about our services, pricing, or process, start with our FAQ section.
              </p>
              <a 
                href="/faq" 
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium py-3 px-6 rounded-lg transition duration-200 hover:scale-105"
              >
                Read FAQ
              </a>
            </div>

            {/* General Help */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">General Support</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For any other questions, technical issues, or general assistance, please reach out to us through our contact form.
              </p>
              <a 
                href="/contact" 
                className="inline-block border-2 border-amber-500 text-amber-600 font-medium py-3 px-6 rounded-lg transition duration-200 hover:bg-amber-50"
              >
                Contact Us
              </a>
            </div>

            {/* Urgent Support */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
              <div className="text-5xl mb-6">🚨</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Urgent Support</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For urgent matters that require immediate attention, please call our support hotline.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-slate-700 font-medium mb-2">Emergency Hotline</p>
                <a 
                  href="tel:+1-555-911-HELP" 
                  className="text-xl font-bold text-red-600 hover:text-red-700"
                >
                  +1 (555) 911-HELP
                </a>
                <p className="text-slate-600 text-sm mt-2">Available 24/7 for urgent issues</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />  
    </div>
  )
}