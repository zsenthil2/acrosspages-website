import './globals.css'

export const metadata = {
  title: 'AcrossPages - AI Book Translation Service',
  description: 'Authors, go global. Publishers, bring world-class titles home instantly—no quality compromises. AI-powered book translations that preserve literary style.',
  keywords: 'book translation, AI translation, publishing, authors, publishers, literary translation',
  openGraph: {
    title: 'AcrossPages - AI Book Translation Service',
    description: 'Authors, go global. Publishers, bring world-class titles home instantly—no quality compromises.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AcrossPages - AI Book Translation Service',
    description: 'Authors, go global. Publishers, bring world-class titles home instantly—no quality compromises.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}