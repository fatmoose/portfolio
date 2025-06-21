'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Briefcase, Menu, X } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const navItems = [
  { name: 'About', href: '#about', number: '01' },
  { name: 'Experience', href: '#experience', number: '02' },
  { name: 'Projects', href: '#projects', number: '03' },
  { name: 'Contact', href: '#contact', number: '04' },
]

export default function ModernNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', ...navItems.map(item => item.href.substring(1))]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const styles = theme === 'technical' 
    ? {
        nav: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`,
        container: 'max-w-6xl mx-auto px-6 lg:px-24',
        content: 'flex items-center justify-between h-16',
        logo: 'text-terminal-green font-mono text-lg font-bold hover:text-terminal-green transition-colors',
        desktop: 'hidden md:flex items-center space-x-8',
        navItem: 'text-slate-400 hover:text-terminal-green transition-colors duration-200 text-sm font-mono flex items-center',
        navNumber: 'text-terminal-green mr-1',
        themeToggle: 'p-2 rounded-lg transition-colors bg-slate-800 text-terminal-green hover:bg-slate-700',
        mobileButton: 'md:hidden text-slate-400 hover:text-terminal-green transition-colors',
        mobileMenu: `md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`,
        mobileContent: 'flex flex-col items-center justify-center h-full space-y-8',
        mobileItem: 'text-slate-200 hover:text-terminal-green transition-colors text-xl font-mono flex items-center'
      }
    : {
        nav: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`,
        container: 'max-w-6xl mx-auto px-6 lg:px-24',
        content: 'flex items-center justify-between h-16',
        logo: 'text-blue-600 font-roboto text-lg font-bold hover:text-blue-700 transition-colors',
        desktop: 'hidden md:flex items-center space-x-8',
        navItem: 'text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center',
        navNumber: 'text-blue-600 mr-1 font-mono',
        themeToggle: 'p-2 rounded-lg transition-colors bg-slate-100 text-blue-600 hover:bg-slate-200',
        mobileButton: 'md:hidden text-slate-600 hover:text-blue-600 transition-colors',
        mobileMenu: `md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`,
        mobileContent: 'flex flex-col items-center justify-center h-full space-y-8',
        mobileItem: 'text-slate-900 hover:text-blue-600 transition-colors text-xl flex items-center'
      }

  return (
    <>
      <motion.nav
        className={styles.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          <div className={styles.content}>
            <motion.button
              onClick={() => scrollToSection('#hero')}
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
            >
              {theme === 'technical' ? 'YK' : 'Yash Katwal'}
            </motion.button>

            <div className={styles.desktop}>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={styles.navItem}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={styles.navNumber}>{item.number}.</span>
                  {item.name}
                </motion.button>
              ))}
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 border transition-all duration-200 text-sm ${
                  theme === 'technical' 
                    ? 'border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-slate-900 font-mono' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Resume
              </motion.a>
              
              <motion.button
                onClick={() => setTheme(theme === 'technical' ? 'professional' : 'technical')}
                className={styles.themeToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={`Switch to ${theme === 'technical' ? 'Professional' : 'Technical'} Theme`}
              >
                {theme === 'technical' ? <Briefcase size={18} /> : <Code size={18} />}
              </motion.button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.mobileButton}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={styles.mobileMenu}>
        <div className={styles.mobileContent}>
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={styles.mobileItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: index * 0.1 }}
            >
              <span className={styles.navNumber}>{item.number}.</span>
              {item.name}
            </motion.button>
          ))}
          
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 border transition-all duration-200 ${
              theme === 'technical' 
                ? 'border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-slate-900 font-mono' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              y: isMobileMenuOpen ? 0 : 20 
            }}
            transition={{ delay: 0.4 }}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </>
  )
} 