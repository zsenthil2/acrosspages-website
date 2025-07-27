'use client'; // Add this if using App Router (Next.js 13+)

import { useState } from 'react';

export default function QuotePage() {
  const [pairCounter, setPairCounter] = useState(0);
  const [languagePairs, setLanguagePairs] = useState([{ id: 0 }]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showOthersText, setShowOthersText] = useState(false);

  const languages = [
    'Arabic', 'Bengali', 'Bulgarian', 'Chinese', 'Czech', 'Danish', 'Dutch', 'English',
    'Finnish', 'French', 'German', 'Greek', 'Hebrew', 'Hindi', 'Hungarian', 'Indonesian',
    'Italian', 'Japanese', 'Korean', 'Norwegian', 'Persian', 'Polish', 'Portuguese',
    'Russian', 'Spanish', 'Swahili', 'Swedish', 'Tamil', 'Thai', 'Turkish', 'Urdu', 'Vietnamese'
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const addLanguagePair = () => {
    const newCounter = pairCounter + 1;
    setPairCounter(newCounter);
    setLanguagePairs([...languagePairs, { id: newCounter }]);
  };

  const removePair = (id) => {
    if (languagePairs.length > 1) {
      setLanguagePairs(languagePairs.filter(pair => pair.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Here you would typically send data to your API
    alert('Thank you for your quote request! We will get back to you within 24 hours.');
    
    // Reset form
    e.target.reset();
    setSelectedFile(null);
    setShowOthersText(false);
    setLanguagePairs([{ id: 0 }]);
    setPairCounter(0);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-slate-800 hover:text-amber-600 transition duration-200">
                TranslateHub
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200">Home</a>
                <a href="/services" className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200">Services</a>
                <a href="/languages" className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200">Languages</a>
                <a href="/about" className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200">About</a>
                <a href="/contact" className="text-slate-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition duration-200">Contact</a>
                <a href="/quote" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-600 hover:to-orange-600 transition duration-200">Get Quote</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Get Your Free Quote</h1>
            <p className="text-lg text-slate-600">Professional translation services tailored to your needs</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-amber-200">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200"
                  />
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Sample File</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 transition duration-200">
                <input 
                  type="file" 
                  id="sampleFile" 
                  name="sampleFile" 
                  onChange={handleFileChange}
                  className="hidden" 
                  accept=".pdf,.doc,.docx,.txt,.ppt,.pptx,.xls,.xlsx"
                />
                <label htmlFor="sampleFile" className="cursor-pointer">
                  <div className="text-gray-600">
                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-lg">Click to upload sample file</p>
                    <p className="text-sm text-gray-500">PDF, DOC, DOCX, TXT, PPT, PPTX, XLS, XLSX (Max 10MB)</p>
                  </div>
                </label>
              </div>
              {selectedFile && (
                <div className="mt-2 text-sm text-gray-600">
                  Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                </div>
              )}
            </div>

            {/* Language Pairs */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Language Pairs</h2>
              <p className="text-sm text-gray-600 mb-4">Select source and target languages for your translation needs. You can add multiple language pairs.</p>
              
              {languagePairs.map((pair, index) => (
                <div key={pair.id} className="border-2 border-gray-200 rounded-lg p-4 mb-4 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-slate-700">Language Pair {index + 1}</h3>
                    {languagePairs.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removePair(pair.id)}
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Source Language *</label>
                      <select 
                        name="sourceLanguage[]" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200"
                      >
                        <option value="">Select source language</option>
                        {languages.map(lang => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Target Language *</label>
                      <select 
                        name="targetLanguage[]" 
                        required 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200"
                      >
                        <option value="">Select target language</option>
                        {languages.map(lang => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
              
              <button 
                type="button" 
                onClick={addLanguagePair}
                className="mt-4 px-6 py-2 border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition duration-200 font-medium"
              >
                + Add Another Language Pair
              </button>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Required Services</h2>
              <p className="text-sm text-gray-600 mb-4">Select all services you need (multiple selections allowed):</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'AI translation only',
                  'Human Review',
                  'Page Layout',
                  'Cover Redesign',
                  'eBook (ePub) conversion'
                ].map(service => (
                  <label key={service} className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition duration-200">
                    <input 
                      type="checkbox" 
                      name="services[]" 
                      value={service} 
                      className="mr-3 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    />
                    <span className="text-slate-700">{service}</span>
                  </label>
                ))}
                
                <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition duration-200">
                  <input 
                    type="checkbox" 
                    name="services[]" 
                    value="Others"
                    onChange={(e) => setShowOthersText(e.target.checked)}
                    className="mr-3 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                  />
                  <span className="text-slate-700">Others</span>
                </label>
              </div>
              
              {showOthersText && (
                <div className="mt-4">
                  <textarea 
                    name="otherServices" 
                    placeholder="Please specify other services you need..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 resize-none" 
                    rows="3"
                  />
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Instructions</h2>
              <textarea 
                id="instructions" 
                name="instructions" 
                rows="4" 
                placeholder="Please provide any specific instructions, deadlines, or special requirements for your translation project..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 resize-none"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mb-8">
              <label className="flex items-start p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition duration-200">
                <input 
                  type="checkbox" 
                  name="agreeTerms" 
                  required 
                  className="mr-3 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded mt-1"
                />
                <span className="text-slate-700">
                  I agree to the{' '}
                  <a href="/terms" className="text-amber-600 hover:text-amber-700 underline">Terms and Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</a> *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition duration-200 shadow-lg"
              >
                Get My Free Quote
              </button>
              <p className="text-sm text-gray-600 mt-4">We'll get back to you within 24 hours with a detailed quote</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}