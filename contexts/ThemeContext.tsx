'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'technical' | 'professional' | 'gis'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  showThemeSelector: boolean
  setShowThemeSelector: (show: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('technical')
  const [showThemeSelector, setShowThemeSelector] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme
    const hasVisited = localStorage.getItem('portfolio-visited')
    
    if (savedTheme && (savedTheme === 'technical' || savedTheme === 'professional' || savedTheme === 'gis')) {
      setTheme(savedTheme)
    }
    
    if (!hasVisited) {
      setShowThemeSelector(true)
      localStorage.setItem('portfolio-visited', 'true')
    }
  }, [])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme: handleSetTheme,
      showThemeSelector,
      setShowThemeSelector
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 