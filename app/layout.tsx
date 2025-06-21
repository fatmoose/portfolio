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
  title: 'Yash Katwal Portfolio',
  description: 'Portfolio of Yash Katwal - Software Engineer, Admin Assistant, and GIS Analyst',
  keywords: 'Yash Katwal, Software Engineer, Full Stack Developer, React, Next.js, Node.js, Python, Portfolio',
  authors: [{ name: 'Yash Katwal' }],
  icons: {
    icon: '/profile.jpg',
    shortcut: '/profile.jpg',
    apple: '/profile.jpg',
  },
  openGraph: {
    title: 'Yash Katwal Portfolio',
    description: 'Portfolio of Yash Katwal - Software Engineer, Full Stack Developer, and Tech Enthusiast',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Yash Katwal Profile Picture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yash Katwal Portfolio',
    description: 'Portfolio of Yash Katwal - Software Engineer, Full Stack Developer, and Tech Enthusiast',
    images: ['/profile.jpg'],
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