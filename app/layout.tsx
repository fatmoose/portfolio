import type { Metadata } from 'next'
import { JetBrains_Mono, Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'Yash Katwal - Software Engineer',
  description: 'Portfolio of Yash Katwal - Software Engineer, Full Stack Developer, and Tech Enthusiast',
  keywords: 'Yash Katwal, Software Engineer, Full Stack Developer, React, Next.js, Node.js, Python, Portfolio',
  authors: [{ name: 'Yash Katwal' }],
  openGraph: {
    title: 'Yash Katwal - Software Engineer',
    description: 'Portfolio of Yash Katwal - Software Engineer, Full Stack Developer, and Tech Enthusiast',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} ${roboto.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 