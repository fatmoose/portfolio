'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import MatrixBackground from '@/components/MatrixBackground'
import ProfessionalHero from '@/components/ProfessionalHero'
import ProfessionalExperience from '@/components/ProfessionalExperience'
import ProfessionalSkills from '@/components/ProfessionalSkills'
import ThemeSelector from '@/components/ThemeSelector'
import ThemeWrapper from '@/components/ThemeWrapper'
import ModernHero from '@/components/ModernHero'
import ModernAbout from '@/components/ModernAbout'
import DataOperations from '@/components/DataOperations'
import GISHero from '@/components/GISHero'
import GISAbout from '@/components/GISAbout'
import GISExperience from '@/components/GISExperience'
import GISProjects from '@/components/GISProjects'
import { Globe } from 'lucide-react'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    const loadingBg = theme === 'professional' ? 'bg-gray-50' : theme === 'technical' ? 'bg-terminal-bg' : 'bg-slate-900'
    const loadingText = theme === 'professional' ? 'text-blue-600' : theme === 'technical' ? 'text-terminal-green' : 'text-emerald-400'
    const loadingBar = theme === 'professional' ? 'bg-blue-600' : theme === 'technical' ? 'bg-terminal-green' : 'bg-emerald-500'
    const loadingBarBg = theme === 'professional' ? 'bg-gray-200' : theme === 'technical' ? 'bg-terminal-gray' : 'bg-slate-700'
    
    return (
      <div className={`min-h-screen ${loadingBg} flex items-center justify-center px-4`}>
        <div className="text-center max-w-md mx-auto">
          <div className={`${loadingText} text-2xl mb-6 font-medium`}>
            <span className="animate-pulse">
              {theme === 'professional' ? 'Loading Portfolio...' : theme === 'technical' ? 'Initializing...' : 'Loading GIS Platform...'}
            </span>
          </div>
          <div className={`w-64 h-2 ${loadingBarBg} rounded-full overflow-hidden mx-auto mb-4`}>
            <motion.div
              className={`h-full ${loadingBar}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
          <div className={`${loadingText} text-sm opacity-80`}>
            <span className="animate-pulse">
              {theme === 'professional' ? 'Preparing experience' : theme === 'technical' ? 'Loading system' : 'Initializing spatial data'}
            </span>
          </div>
        </div>
      </div>
    )
  }

  if (theme === 'professional') {
    return (
      <ThemeWrapper>
        <main className="min-h-screen bg-slate-50 relative">
          <ThemeSelector />
          <Navigation />
          
          <div>
            <ProfessionalHero />
            <ModernAbout />
            <ProfessionalExperience />
            <ProfessionalSkills />
            {/* <DataOperations /> */}
            <Contact />
          </div>
        </main>
      </ThemeWrapper>
    )
  }

  if (theme === 'gis') {
    return (
      <ThemeWrapper>
        <main className="min-h-screen bg-slate-900 relative">
          <ThemeSelector />
          <Navigation />
          
          <div>
            <GISHero />
            <GISAbout />
            
            {/* Education Section */}
            <section className="py-20 px-4 bg-slate-800">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">Education</h2>
                  <div className="w-24 h-1 bg-emerald-500 mx-auto mb-12"></div>
                  
                  <div className="bg-slate-900 border border-emerald-500/20 rounded-xl p-8 max-w-4xl mx-auto">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-emerald-500/20 rounded-lg">
                        <Globe className="w-8 h-8 text-emerald-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4">University of Washington</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-300 mb-2">
                              B.A. in Geography
                            </h4>
                            <p className="text-slate-300 text-sm">
                              Specialization in Geographic Information Systems (GIS) and Data Science
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-300 mb-2">
                              B.S. in Informatics
                            </h4>
                            <p className="text-slate-300 text-sm">
                              Focus on Software Development
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4">
                          Combined spatial analysis, cartography, and data visualization with technical training 
                          in programming, software engineering, and database systems.
                        </p>
                        
                        <div className="text-sm text-emerald-300">
                          Sep 2019 – Jun 2023 • Seattle, WA
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
            
            <GISExperience />
            <GISProjects />
            <Contact />
          </div>
        </main>
      </ThemeWrapper>
    )
  }

  return (
    <ThemeWrapper>
      <main className="min-h-screen bg-terminal-bg relative">
        <ThemeSelector />
        <MatrixBackground />
        <Navigation />
        
        <div>
          <ModernHero />
          <ModernAbout />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </ThemeWrapper>
  )
} 