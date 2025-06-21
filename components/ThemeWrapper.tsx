'use client'

import { useTheme } from '@/contexts/ThemeContext'

interface ThemeWrapperProps {
  children: React.ReactNode
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { theme } = useTheme()
  
  return (
    <div className={theme === 'professional' ? 'theme-professional' : theme === 'technical' ? 'theme-technical' : 'theme-gis'}>
      {children}
    </div>
  )
} 