'use client'

import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'      // Use ./ instead of ../
import AnimatedH1 from './components/AnimatedH1' 
import Footer from './components/Footer'

export default function Home() {
  const [showLanguagesModal, setShowLanguagesModal] = useState(false)

  // Add this useEffect
  useEffect(() => {
    document.title = 'AcrossPages - AI Book Translation Service'
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Authors, go global. Publishers, bring world-class titles home instantly—no quality compromises. AI-powered book translations that preserve literary style.')
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = 'Authors, go global. Publishers, bring world-class titles home instantly—no quality compromises. AI-powered book translations that preserve literary style.'
      document.head.appendChild(metaDescription)
    }
  }, [])




  // Add this to your useEffect
const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AcrossPages",
  "description": "AI-powered book translation service",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free translation sample"
  }
}

const script = document.createElement('script')
script.type = 'application/ld+json'
script.textContent = JSON.stringify(schema)
document.head.appendChild(script)






  const allLanguages = [
    'Arabic', 'Chinese', 'English', 'French', 'Russian', 'Spanish',
    'Albanian', 'Armenian', 'Azerbaijani', 'Belarusian', 'Bosnian', 'Bulgarian', 'Catalan', 'Croatian', 'Czech', 'Danish', 'Dutch', 'Estonian', 'Finnish', 'Georgian', 'German', 'Greek', 'Hungarian', 'Icelandic', 'Irish', 'Italian', 'Latvian', 'Lithuanian', 'Macedonian', 'Maltese', 'Moldovan', 'Montenegrin', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Serbian', 'Slovak', 'Slovenian', 'Swedish', 'Turkish', 'Ukrainian',
    'Assamese', 'Bengali', 'Bodo', 'Dogri', 'Gujarati', 'Hindi', 'Kannada', 'Kashmiri', 'Konkani', 'Maithili', 'Malayalam', 'Manipuri', 'Marathi', 'Nepali', 'Odia', 'Punjabi', 'Sanskrit', 'Santali', 'Sindhi', 'Tamil', 'Telugu', 'Urdu', 'Bhojpuri', 'Kosali',
    'Kazakh', 'Kyrgyz', 'Tajik', 'Tatar', 'Turkmen', 'Uzbek',
    'Indonesian', 'Malay', 'Burmese', 'Khmer', 'Lao', 'Tagalog', 'Thai', 'Vietnamese',
    'Afrikaans', 'Amharic', 'Hausa', 'Igbo', 'Oromo', 'Shona', 'Somali', 'Swahili', 'Xhosa', 'Yoruba', 'Zulu',
    'Albanian', 'Hebrew', 'Japanese', 'Korean', 'Mongolian', 'Persian', 'Sinhala', 'Dari', 'Pashto', 'Kurdish'
  ].sort()

  const openModal = () => setShowLanguagesModal(true)
  const closeModal = () => setShowLanguagesModal(false)

  const languageColumns = []
  const itemsPerColumn = Math.ceil(allLanguages.length / 4)
  for (let i = 0; i < 4; i++) {
    languageColumns.push(
      allLanguages.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
    )
  }

  return (
   
           <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
        <Navbar />
        
        <div className="flex items-center justify-center pt-20 px-4">
          <div className="w-full">
            <AnimatedH1 />
            
            <div className="w-4/5 mx-auto text-center">
              <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                Authors, go global. Publishers, bring world-class titles home instantly—<br />no quality compromises.
              </p>
              
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

        <div className="w-full py-20 px-4 bg-slate-50">
          <div className="w-4/5 mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
              From manuscript to publish-ready translation in just three simple steps
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="text-4xl mb-4 mt-4">⚡</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Rapid Delivery</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Receive your publish-ready translation in hours or days, not weeks or months, with maintained literary elegance.
                  </p>
                </div>
              </div>
            </div>
            
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
            
            <div className="text-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl mr-4">
                Learn More About Our Process
              </button>
            </div>
          </div>
        </div>

        {/* Languages We Support Section */}
        <div className="w-full py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-100">
          <div className="w-4/5 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
                Languages We Support
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Connect with readers worldwide through our comprehensive language support. 
                Here are some of the most popular languages on demand.
              </p>
            </div>

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
            
            <div className="text-center">
              <button 
                onClick={openModal}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
              >
                See Full Languages List
              </button>
              <p className="text-slate-500 text-sm mt-4">
                Supporting {allLanguages.length}+ languages with more being added regularly
              </p>
            </div>
          </div>
        </div>

        {/* Languages Modal */}
        {showLanguagesModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
              
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">All Supported Languages</h3>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-amber-200 transition duration-200 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <p className="text-slate-600 mb-6 text-center">
                  We support {allLanguages.length} languages and counting. Here's our complete list:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {languageColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-2">
                      {column.map((language, index) => (
                        <div
                          key={index}
                          className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center hover:bg-amber-100 transition duration-200"
                        >
                          <span className="text-slate-800 font-medium">{language}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 px-6 py-4 text-center border-t border-slate-200">
                <p className="text-slate-600 text-sm mb-4">
                  Don't see your language? Contact us - we're always adding new languages.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium py-2 px-6 rounded-lg transition duration-200 hover:from-amber-600 hover:to-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators Section */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">📚</div>
            <div className="absolute top-20 right-20 text-4xl">✨</div>
            <div className="absolute bottom-10 left-20 text-5xl">🌍</div>
            <div className="absolute bottom-20 right-10 text-3xl">📖</div>
          </div>
          
          <div className="w-4/5 mx-auto text-center relative z-10">
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-amber-300 mb-4">
                Trusted by Authors & Publishers Worldwide
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Join hundreds of authors and publishers who trust AcrossPages for translation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

        {/* Final CTA Section */}
        <div className="w-full py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 text-8xl transform rotate-12">📚</div>
            <div className="absolute top-40 right-32 text-6xl transform -rotate-12">✨</div>
            <div className="absolute bottom-32 left-32 text-7xl transform rotate-45">🌍</div>
            <div className="absolute bottom-20 right-20 text-5xl transform -rotate-45">📖</div>
            <div className="absolute top-60 left-1/2 text-4xl transform rotate-90">🔤</div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></div>
          </div>

          <div className="w-4/5 mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center bg-amber-500/20 border border-amber-400/30 rounded-full px-6 py-2 mb-6">
                <span className="text-amber-300 text-sm font-medium">🎉 Gain in translation!</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Go
              <span className="block text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text">
                Global?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the power of contextual AI translation. 
              <span className="text-amber-300 font-semibold"> See your words come alive in any language.</span>
            </p>
            
            <div className="mb-8">
              <button className="group relative bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:via-amber-500 hover:to-yellow-500 text-slate-900 text-xl md:text-2xl font-bold px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                <span className="relative z-10 flex items-center justify-center">
                  📝 Start Translating Your Sample Free
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    
  )
}