'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Contact 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> Us</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our translation services? Need enterprise solutions? 
            We're here to help you reach global audiences.
          </p>
        </div>
      </div>

      {/* Main Contact Form Section */}
      <div className="w-full py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="w-4/5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Send us a Message</h2>
                <p className="text-lg text-slate-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Translation Quote</option>
                    <option value="support">Support</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="freelance">Freelance Opportunities</option>
                    <option value="career">Career Opportunities</option>
                    <option value="internship">Internship Opportunities</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 resize-none"
                    placeholder="Tell us about your project, questions, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🏢</div>
                    <div>
                      <p className="text-slate-700 font-medium">AcrossPages, Ailaysa Technologies Pvt Ltd</p>
                      <p className="text-slate-600">411, Ticel Biopark<br />Taramani, Chennai 600113<br />Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🕒</div>
                    <div>
                      <p className="text-slate-700 font-medium">Business Hours</p>
                      <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🌍</div>
                    <div>
                      <p className="text-slate-700 font-medium">Global Support</p>
                      <p className="text-slate-600">24/7 online support available worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Why Contact Us Section */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Why Contact Us?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're here to help you navigate your translation journey and answer any questions you might have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Expert Guidance</h3>
            <p className="text-slate-600">
              Get personalized advice on translation strategies, language pairs, and project planning from our experienced team.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Custom Solutions</h3>
            <p className="text-slate-600">
              Discuss your specific needs for bulk projects, specialized content, or unique formatting requirements.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Partnership Opportunities</h3>
            <p className="text-slate-600">
              Explore collaboration possibilities for publishers, literary agents, and translation service providers.
            </p>
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
                <li><a href="/services" className="text-slate-600 hover:text-amber-600 transition duration-200">Services</a></li>
                <li><a href="/contact" className="text-slate-600 hover:text-amber-600 transition duration-200">Contact</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#help" className="text-slate-600 hover:text-amber-600 transition duration-200">Help Center</a></li>
                <li><a href="#enterprise" className="text-slate-600 hover:text-amber-600 transition duration-200">Enterprise</a></li>
                <li><a href="/quote" className="text-slate-600 hover:text-amber-600 transition duration-200">Get Quote</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-slate-800 font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#privacy" className="text-slate-600 hover:text-amber-600 transition duration-200">Privacy Policy</a></li>
                <li><a href="#terms" className="text-slate-600 hover:text-amber-600 transition duration-200">Terms of Service</a></li>
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