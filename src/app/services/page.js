'use client'

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 px-4">
        <div className="w-4/5 mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-slate-800 mb-6">
            Your Script, in Every Script!
          </h1>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional AI-powered book translation services designed specifically for authors and publishers. 
            From manuscripts to market-ready publications, in hours and days.
          </p>
        </div>
      </div>

      {/* Core AI Translation Service */}
      <div className="w-full py-20 px-4">
        <div className="w-4/5 mx-auto">
         

          <div className="bg-white/70 backdrop-blur-sm border border-amber-200 rounded-xl p-12 shadow-xl mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">
                  AI Book Translation
                </h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">📚</span>
                    <div>
                      <strong>Context-Aware Processing:</strong>Our AI understands your entire book as a unified work—maintaining character voices and plot consistency in fiction, or preserving your expertise and argument flow in non-fiction.

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">🎨</span>
                    <div>
                      <strong>Style Preservation:</strong> Maintains your unique writing style, tone, and literary devices across languages.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">🌍</span>
                    <div>
                      <strong>Cultural Adaptation:</strong> Ensures cultural nuances and references resonate with target audiences, so readers feel the story was written just for them. Add our human localization experts for even deeper local connection.

                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">⚡</span>
                    <div>
                      <strong>Rapid Turnaround:</strong> Complete translations delivered in hours for shorter works, days for big ones—not the months traditional translation takes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-slate-100 rounded-lg p-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">What's Included with AI Translation:</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Full manuscript translation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Style and terminology consistency
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Cultural adaptation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Quality assurance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multiple file format support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* Do We Really Need Human Review Section */}
<div className="w-full py-20 px-4 bg-gradient-to-br from-amber-50 to-slate-100">
  <div className="w-4/5 mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
        Do We Really Need Human Review?
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        The honest answer about when human review adds value to your AI translation
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image Placeholder */}
      <div className="order-2 lg:order-1">
        <div className="bg-gradient-to-br from-slate-200 to-amber-200 rounded-lg p-12 text-center border-2 border-dashed border-slate-400">
          <div className="text-6xl mb-4">🤔</div>
          <p className="text-slate-600 font-medium">
            [Image Placeholder: AI vs Human Review Comparison]
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Visual showing AI translation quality with optional human enhancement
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2">
        <div className="space-y-6">
          {/* Point 1 */}
          <div className="flex items-start">
            <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
              <span className="text-amber-600 font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">It's Completely Optional</h3>
              <p className="text-slate-600 leading-relaxed">
                While our AI delivers excellent translations for many language pairs and genres, some combinations 
                benefit significantly from human expertise. The choice is entirely yours—whether you use our human 
                review service, your own editors, or go AI-only depends on your project's specific needs.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex items-start">
            <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
              <span className="text-amber-600 font-bold">💡</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Use Your Own Editors</h3>
              <p className="text-slate-600 leading-relaxed">
                Already have trusted editors or native speakers? Perfect! Get your AI translation first, 
                then have them review it. This hybrid approach often works best for bilingual authors.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex items-start">
            <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
              <span className="text-amber-600 font-bold">🏆</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">For Premium Publishing Standards</h3>
              <p className="text-slate-600 leading-relaxed">
                High-stakes publishing or specific markets may require human validation. Our domain-specialized, 
                native-speaking translators exclusively focus on books. We handpick the industry's finest book translators and editors to deliver that perfect finishing touch.
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
              <span className="text-green-600 font-bold">💰</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Still More Affordable</h3>
              <p className="text-slate-600 leading-relaxed">
                Even with human review added, our AI + Human combo costs significantly less than 
                traditional manual translation, while delivering superior speed and consistency.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 p-6 bg-white/80 rounded-lg border border-amber-200">
          <h4 className="text-lg font-semibold text-slate-800 mb-3">Our Recommendation:</h4>
          <p className="text-slate-600 mb-4">
            Start with AI-only translation for most projects. Add human review for your most important releases 
            or when targeting premium markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 rounded-lg transition duration-200">
              Try Free AI-Only Translation
            </button>
            <button className="border border-amber-500 hover:bg-amber-50 text-amber-700 font-semibold px-6 py-2 rounded-lg transition duration-200">
              Get Quote with Human Review
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



















      {/* Service Categories */}
      <div className="w-full py-20 px-4 bg-slate-50">
        <div className="w-4/5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored solutions for different genres and publishing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fiction Translation */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Fiction Translation</h3>
              <p className="text-slate-600 mb-4">
                Specialized in novels, short stories, and creative writing with focus on narrative flow and character development.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Character voice consistency</li>
                <li>• Dialogue naturalization</li>
                <li>• Cultural reference adaptation</li>
                <li>• Genre-specific terminology</li>
              </ul>
            </div>

            {/* Non-Fiction Translation */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Non-Fiction Translation</h3>
              <p className="text-slate-600 mb-4">
                Expert translation of non-fiction genres: biographies, memoirs, business, self-help, history, wellness, psychology, science, and more.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Standard terminologies pre-applied</li>
                <li>• Citation and reference handling</li>
                <li>• Industry-specific knowledge</li>
                <li>• Industry writing standards</li>
              </ul>
            </div>

            {/* Children's Books */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🧸</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Children's Literature</h3>
              <p className="text-slate-600 mb-4">
                Age-appropriate translations that maintain wonder, educational value, and cultural sensitivity.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Age-appropriate language</li>
                <li>• Educational content adaptation</li>
                <li>• Rhyme and rhythm preservation</li>
                <li>• Cultural sensitivity review</li>
              </ul>
            </div>

             {/* Academic Works */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Academic Works</h3>
              <p className="text-slate-600 mb-4">
                Specialized translation for STEM fields, higher education textbooks, academic journals, and courseware with technical precision.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• STEM terminology accuracy</li>
                <li>• Academic citation standards</li>
                <li>• Educational content adaptation</li>
                <li>• Journal publication formatting</li>
              </ul>
            </div>

            {/* Religious & Spiritual */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Religious & Spiritual</h3>
              <p className="text-slate-600 mb-4">
                Respectful translation of religious texts and spiritual literature with cultural and theological accuracy.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Theological accuracy</li>
                <li>• Cultural sensitivity</li>
                <li>• Sacred text handling</li>
                <li>• Community review process</li>
              </ul>
            </div>

            {/* Business & Self-Help */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Business & Self-Help</h3>
              <p className="text-slate-600 mb-4">
                Professional translation for business books, self-help guides, and motivational literature.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Business terminology</li>
                <li>• Market-specific adaptation</li>
                <li>• Motivational tone preservation</li>
                <li>• Action-oriented language</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="w-full py-20 px-4">
        <div className="w-4/5 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">
              Additional Publishing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete your publishing journey with our optional enhancement services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Human Review & Editing */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 text-center hover:bg-slate-700 transition duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-amber-300 mb-3">Human Review & Editing</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Professional editors and native speakers polish your AI translation to perfection with expert literary refinement.
              </p>
            </div>

            {/* Layout & Design */}
            <div className="bg-amber-600 p-6 rounded-lg shadow-xl border border-amber-500 text-center hover:bg-amber-500 transition duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Layout & Design</h3>
              <p className="text-sm text-slate-800 leading-relaxed">
                Professional book formatting, typography, and interior design services that meet international publishing standards.
              </p>
            </div>

            {/* Cover Design */}
            <div className="bg-slate-700 p-6 rounded-lg shadow-xl border border-slate-600 text-center hover:bg-slate-600 transition duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Cover Design</h3>
              <p className="text-sm text-slate-100 leading-relaxed">
                Culturally appropriate cover designs tailored for specific international markets and local reader preferences.
              </p>
            </div>

            {/* Multi-Format Publishing */}
            <div className="bg-amber-500 p-6 rounded-lg shadow-xl border border-amber-400 text-center hover:bg-amber-400 transition duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Multi-Format Publishing</h3>
              <p className="text-sm text-slate-800 leading-relaxed">
                Complete ebook, print, and audiobook conversion services with professional standards and quality control.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* CTA Section */}
      <div className="w-full py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="w-4/5 mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-amber-300 mb-6">
            Ready to Translate Your Book?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the power of contextual AI.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl">
              📖 Start Free Sample Translation
            </button>
            <button className="w-full sm:w-auto border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 font-semibold py-4 px-8 rounded-lg transition duration-200">
              💬 Speak with a Translation Expert
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gradient-to-br from-slate-50 to-amber-50 border-t border-slate-200">
        <div className="w-4/5 mx-auto py-16 px-4">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
              📚 AcrossPages
            </h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              AI-powered book translation service preserving literary excellence across cultures.
            </p>
            <div className="border-t border-slate-300 pt-8">
              <p className="text-slate-600 text-sm">
                © 2025 Ailaysa Technologies Pvt Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}