'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Heart, Sparkles, Menu, X, Palette } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function CreatorNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setShowThemeSelector } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Photography', href: '/photography' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleThemeToggle = () => {
    setShowThemeSelector(true)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-pink-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent ${
                isScrolled ? '' : 'text-white'
              }`}>
                Yash Katwal
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors hover:text-pink-600 ${
                      isScrolled ? 'text-gray-700' : 'text-white hover:text-pink-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`font-medium transition-colors hover:text-pink-600 ${
                      isScrolled ? 'text-gray-700' : 'text-white hover:text-pink-300'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-300/30 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Switch Theme"
            >
              <Palette className={`w-4 h-4 ${isScrolled ? 'text-pink-600' : 'text-white'}`} />
            </motion.button>
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Let's Create
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-2xl mt-2 border border-pink-100">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-6"
              >
                {item.href.startsWith('/') ? (
                  <Link
                    href={item.href}
                    className="block text-gray-700 font-medium hover:text-pink-600 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-700 font-medium hover:text-pink-600 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
            <motion.div
              className="px-6 pt-2 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <button 
                onClick={handleThemeToggle}
                className="w-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-3 rounded-full font-semibold hover:from-pink-200 hover:to-purple-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Palette className="w-4 h-4" />
                Switch Theme
              </button>
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Let's Create Together
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
} 