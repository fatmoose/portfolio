'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code, Briefcase, Map } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeSelector() {
  const { showThemeSelector, setShowThemeSelector, setTheme } = useTheme()

  const handleThemeSelect = (selectedTheme: 'technical' | 'professional' | 'gis') => {
    setTheme(selectedTheme)
    setShowThemeSelector(false)
  }

  return (
    <AnimatePresence>
      {showThemeSelector && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  Welcome! Choose Your Experience
                </h1>
                <p className="text-gray-600 text-lg">
                  I've created three different websites for different audiences. Pick the one that matches what you're looking for:
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mb-6">
                <button
                  onClick={() => handleThemeSelect('technical')}
                  className="group p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 text-center"
                >
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors mx-auto w-fit mb-3">
                    <Code className="text-green-600" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Tech Portfolio
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">For Developers & Engineers</p>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    Showcasing coding projects, technical skills, and development experience.
                  </p>
                  
                  <p className="text-xs text-gray-500">
                    Software Engineer, Web Developer, QA Engineer, IT roles
                  </p>
                </button>

                <button
                  onClick={() => handleThemeSelect('professional')}
                  className="group p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-center"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors mx-auto w-fit mb-3">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Administrative Portfolio
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">For Business & Admin Roles</p>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    Highlighting administrative experience, operations, and business skills.
                  </p>
                  
                  <p className="text-xs text-gray-500">
                    Admin Assistant, Operations, Project Coordinator, Customer Service
                  </p>
                </button>

                <button
                  onClick={() => handleThemeSelect('gis')}
                  className="group p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300 text-center"
                >
                  <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors mx-auto w-fit mb-3">
                    <Map className="text-emerald-600" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    GIS Portfolio
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">For Spatial Analysis Roles</p>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    Featuring GIS projects, spatial analysis, and cartography work.
                  </p>
                  
                  <p className="text-xs text-gray-500">
                    GIS Analyst, Cartographer, Spatial Data Scientist, Environmental roles
                  </p>
                </button>
              </div>

              <div className="text-center bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 font-medium mb-1">
                  💡 You can switch between websites anytime!
                </p>
                <p className="text-sm text-gray-600">
                  Each site us a portfolio for different focuses. Choose what fits your use case best.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 