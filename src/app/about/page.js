'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-4/5 mx-auto pt-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            About 
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text"> AcrossPages</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Bridging languages, connecting cultures, and empowering authors to reach global audiences 
            through intelligent AI translation technology.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="w-full py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="w-4/5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2024, AcrossPages emerged from a simple yet powerful observation: 
                  brilliant stories were trapped by language barriers, preventing them from reaching readers worldwide.
                </p>
                <p>
                  Traditional translation services were either too slow, too expensive, or failed to capture 
                  the nuanced literary style that makes each author's voice unique. We knew there had to be a better way.
                </p>
                <p>
                  Combining cutting-edge AI technology with deep understanding of literature and culture, 
                  we created a translation platform that preserves the soul of storytelling while making 
                  global publishing accessible to authors everywhere.
                </p>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-lg">
              <div className="text-6xl mb-6 text-center">📖</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-slate-700 font-semibold mb-4">Books Translated</div>
                <div className="text-3xl font-bold text-amber-600 mb-2">32</div>
                <div className="text-slate-700 font-semibold mb-4">Languages Supported</div>
                <div className="text-3xl font-bold text-amber-600 mb-2">150+</div>
                <div className="text-slate-700 font-semibold">Happy Authors</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            To democratize global publishing by making high-quality literary translation 
            accessible, affordable, and authentically cultural.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Global Reach</h3>
            <p className="text-slate-600">
              Breaking down language barriers to connect authors with readers across continents and cultures.
            </p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality First</h3>
            <p className="text-slate-600">
              Preserving the artistic integrity and emotional depth of original works through intelligent translation.
            </p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Innovation</h3>
            <p className="text-slate-600">
              Leveraging cutting-edge AI to make professional translation faster and more accessible than ever.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="w-full py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="w-4/5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Our Values</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do at AcrossPages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-amber-300 mb-3">Authenticity</h3>
              <p className="text-slate-300 text-sm">
                Every translation preserves the author's unique voice and cultural context.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-amber-300 mb-3">Privacy</h3>
              <p className="text-slate-300 text-sm">
                Your manuscripts are secure with enterprise-level protection and confidentiality.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-amber-300 mb-3">Excellence</h3>
              <p className="text-slate-300 text-sm">
                We continuously improve our technology to deliver the highest quality results.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-amber-300 mb-3">Support</h3>
              <p className="text-slate-300 text-sm">
                Dedicated assistance throughout your entire translation journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-4/5 mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Meet Our Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A passionate group of technologists, linguists, and literature enthusiasts 
            working to revolutionize global publishing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              👨‍💼
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Sarah Chen</h3>
            <p className="text-amber-600 font-medium mb-2">CEO & Co-Founder</p>
            <p className="text-slate-600 text-sm">
              Former linguist and tech executive with 15+ years in AI and natural language processing.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              👨‍💻
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Marcus Rodriguez</h3>
            <p className="text-amber-600 font-medium mb-2">CTO & Co-Founder</p>
            <p className="text-slate-600 text-sm">
              AI researcher and former publishing industry veteran, specializing in contextual language models.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-md text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              👩‍🎨
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Elena Petrov</h3>
            <p className="text-amber-600 font-medium mb-2">Head of Cultural Adaptation</p>
            <p className="text-slate-600 text-sm">
              Multilingual literature expert ensuring cultural authenticity across all translations.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full py-20 px-4 bg-white/30 backdrop-blur-sm border-t border-amber-200">
        <div className="w-4/5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">Why Choose AcrossPages?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Literary Expertise</h3>
                  <p className="text-slate-600">
                    Our AI is trained specifically on literary works, understanding narrative flow, character development, and stylistic nuances.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Cultural Intelligence</h3>
                  <p className="text-slate-600">
                    Beyond literal translation, we ensure cultural relevance and emotional resonance for target audiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Complete Service</h3>
                  <p className="text-slate-600">
                    From translation to formatting, cover design, and eBook conversion - everything you need for global publishing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Author-Centric</h3>
                  <p className="text-slate-600">
                    Built by authors, for authors. We understand the creative process and respect your artistic vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
              <div className="text-center">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Go Global?</h3>
                <p className="text-slate-600 mb-6">
                  Join hundreds of authors who have already expanded their reach with AcrossPages.
                </p>
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                  Start Your Translation Journey
                </button>
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