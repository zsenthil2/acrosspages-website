// Test commit to confirm git is working

'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does translation cost?",
      answer: "Pricing depends on word count, language pair, and services needed. AI translation starts at $0.08 per word. Human review adds $0.04 per word. We provide detailed quotes before starting any work."
    },
    {
      question: "How long does translation take?",
      answer: "AI translation: 2-6 hours for most books. Human review: 2-5 business days depending on length. Rush orders available for urgent projects."
    },
    {
      question: "Which languages do you support?",
      answer: "We support 32+ languages including Spanish, French, German, Chinese, Japanese, Arabic, Portuguese, Italian, and many others. Contact us if you need a specific language not listed."
    },
    {
      question: "Is my manuscript secure?",
      answer: "Yes. We use bank-level encryption and signed NDAs. Your content is never used to train AI models. All files are deleted after project completion unless you request otherwise."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept Word documents (.doc, .docx), PDFs, plain text files, and most ebook formats. We can also work with InDesign files for layout preservation."
    },
    {
      question: "How accurate is AI translation?",
      answer: "Our AI achieves 95-99% accuracy for most language pairs. Quality varies by content complexity and language combination. We recommend human review for published works."
    },
    {
      question: "Can you maintain my book's formatting?",
      answer: "Yes. We preserve chapter breaks, paragraph structure, and basic formatting. For complex layouts, we offer professional formatting services as an add-on."
    },
    {
      question: "Do you offer bulk discounts for publishers?",
      answer: "Yes. Publishers get volume discounts starting at 10 books. We also offer API integration and custom workflows for large publishers. Contact us for enterprise pricing."
    },
    {
      question: "What if I'm not satisfied with the translation?",
      answer: "We offer unlimited revisions within 30 days. If you're still not satisfied, we provide a full refund. Most issues are resolved quickly with minor adjustments."
    },
    {
      question: "Can you translate series with consistent terminology?",
      answer: "Yes. We maintain glossaries and style guides across book series to ensure character names, places, and terminology remain consistent throughout all volumes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Frequently Asked 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> Questions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Quick answers to common questions about our translation services.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/70 transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-amber-600 text-2xl flex-shrink-0">
                    {openQuestion === index ? '−' : '+'}
                  </span>
                </button>
                
                {openQuestion === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-amber-200 pt-4">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="w-full py-20 px-4 bg-white/30 backdrop-blur-sm border-t border-amber-200">
        <div className="w-4/5 mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? We're here to help with any specific questions about your translation project.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Get a Quote</h3>
              <p className="text-slate-600 mb-4">
                Upload your sample and get detailed pricing for your specific project.
              </p>
              <a 
                href="/quote" 
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium py-2 px-6 rounded-lg transition duration-200 hover:scale-105"
              >
                Get Quote
              </a>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Contact Us</h3>
              <p className="text-slate-600 mb-4">
                Send us a message and we'll respond within 24 hours.
              </p>
              <a 
                href="/contact" 
                className="inline-block border-2 border-amber-500 text-amber-600 font-medium py-2 px-6 rounded-lg transition duration-200 hover:bg-amber-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}