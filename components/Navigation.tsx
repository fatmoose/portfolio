'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Briefcase, ArrowLeftRight, RefreshCw, Map } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const technicalNavItems = [
  { name: 'home', href: '#hero' },
  { name: 'about', href: '#about' },
  { name: 'experience', href: '#experience' },
  { name: 'projects', href: '#projects' },
  { name: 'skills', href: '#skills' },
  { name: 'contact', href: '#contact' },
]

const professionalNavItems = [
  { name: 'home', href: '#hero' },
  { name: 'about', href: '#about' },
  { name: 'experience', href: '#experience' },
  { name: 'skills', href: '#skills' },
  { name: 'contact', href: '#contact' },
]

const gisNavItems = [
  { name: 'home', href: '#hero' },
  { name: 'about', href: '#about' },
  { name: 'experience', href: '#experience' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, setTheme, setShowThemeSelector } = useTheme()

  const navItems = theme === 'technical' ? technicalNavItems : theme === 'professional' ? professionalNavItems : gisNavItems

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
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
  }, [navItems])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navStyles = theme === 'technical' 
    ? {
        bg: isScrolled ? 'bg-terminal-bg/90 backdrop-blur-sm border-b border-terminal-green/20' : 'bg-transparent',
        logo: 'text-terminal-green',
        logoText: 'text-terminal-white',
        activeLink: 'text-terminal-green',
        inactiveLink: 'text-terminal-white/70',
        hoverLink: 'hover:text-terminal-green',
        mobileButton: 'text-terminal-green hover:text-terminal-green-dark'
      }
    : theme === 'professional'
    ? {
        bg: isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent',
        logo: 'text-blue-600',
        logoText: 'text-gray-900',
        activeLink: 'text-blue-600',
        inactiveLink: 'text-gray-600',
        hoverLink: 'hover:text-blue-600',
        mobileButton: 'text-blue-600 hover:text-blue-700'
      }
    : {
        bg: isScrolled ? 'bg-slate-900/90 backdrop-blur-sm border-b border-emerald-500/20' : 'bg-transparent',
        logo: 'text-emerald-400',
        logoText: 'text-white',
        activeLink: 'text-emerald-400',
        inactiveLink: 'text-slate-300',
        hoverLink: 'hover:text-emerald-400',
        mobileButton: 'text-emerald-400 hover:text-emerald-300'
      }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navStyles.bg}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className={`${navStyles.logo} font-bold text-lg`}
            whileHover={{ scale: 1.05 }}
          >
            {theme === 'technical' ? (
              <span className={navStyles.logoText}>yash@katwal:~$</span>
            ) : theme === 'professional' ? (
              <span className={navStyles.logoText}>Yash Katwal</span>
            ) : (
              <span className={navStyles.logoText}>YK • GIS</span>
            )}
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm transition-colors duration-200 ${navStyles.hoverLink} ${
                  activeSection === item.href.substring(1)
                    ? navStyles.activeLink
                    : navStyles.inactiveLink
                }`}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {theme === 'technical' ? `./${item.name}` : theme === 'gis' ? `${item.name}.gis` : item.name}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setShowThemeSelector(true)}
              className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium border-2 ${
                theme === 'technical' 
                  ? 'bg-terminal-green/10 text-terminal-green hover:bg-terminal-green/20 border-terminal-green/30 hover:border-terminal-green/50' 
                  : theme === 'professional'
                  ? 'bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-300 hover:border-blue-400'
                  : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/30 hover:border-emerald-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Switch Website Version"
            >
              <div className="flex items-center gap-1.5">
                {theme === 'technical' ? (
                  <>
                    <Code size={16} />
                    <span className="hidden lg:inline">Switch Site</span>
                  </>
                ) : theme === 'professional' ? (
                  <>
                    <Briefcase size={16} />
                    <span className="hidden lg:inline">Switch Site</span>
                  </>
                ) : (
                  <>
                    <Map size={16} />
                    <span className="hidden lg:inline">Switch Site</span>
                  </>
                )}
              </div>
            </motion.button>
          </div>

          {/* Mobile theme toggle and menu */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={() => setShowThemeSelector(true)}
              className={`p-2 rounded-lg transition-all duration-300 border-2 ${
                theme === 'technical' 
                  ? 'bg-terminal-green/10 text-terminal-green hover:bg-terminal-green/20 border-terminal-green/30' 
                  : theme === 'professional'
                  ? 'bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-300'
                  : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/30'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Switch Website Version"
            >
              {theme === 'technical' ? (
                <Code size={18} />
              ) : theme === 'professional' ? (
                <Briefcase size={18} />
              ) : (
                <Map size={18} />
              )}
            </motion.button>
            
            <motion.button
              className={navStyles.mobileButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 