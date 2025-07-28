'use client'

import { useState, useEffect } from 'react'

export default function AnimatedH1() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const bookTranslations = [
    { word: 'Book', lang: 'English', font: 'Playfair Display' },
    { word: 'Livre', lang: 'French', font: 'Playfair Display' },
    { word: '书', lang: 'Chinese', font: 'Noto Sans SC' },
    { word: 'كتاب', lang: 'Arabic', font: 'Noto Sans Arabic' },
    { word: 'Kitap', lang: 'Turkish', font: 'Playfair Display' },
    { word: '本', lang: 'Japanese', font: 'Noto Sans JP' },
    { word: 'पुस्तक', lang: 'Hindi', font: 'Noto Sans Devanagari' },
    { word: 'Buch', lang: 'German', font: 'Playfair Display' },
    { word: 'புத்தக', lang: 'Tamil', font: 'Noto Sans Tamil' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % bookTranslations.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [bookTranslations.length])

  const currentTranslation = bookTranslations[currentWordIndex]

  return (
    <div className="w-4/5 mx-auto text-center">
      <h1 className="text-6xl font-serif font-bold text-slate-800 mb-8 leading-tight">
        Publish-Ready AI{' '}
        <span className="relative inline-block text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text">
          {currentTranslation.word}
        </span>{' '}
        Translations
      </h1>
      
    
    </div>
  )
}