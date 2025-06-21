'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code, Briefcase, Monitor, Users, Zap, FileText, Map } from 'lucide-react'
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
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative theme-selector-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'transparent transparent'
            }}
          >
            <div className="p-6">
              <div className="text-center mb-6 md:mb-8">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                    👋 Welcome to Yash's Portfolio
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4">
                    I've created three completely different website versions to showcase different aspects of my experience.
                  </p>
                  <p className="text-gray-500 text-sm md:text-base">
                    Choose the website version that aligns with the role you're considering me for:
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 md:gap-6 mb-4 md:mb-6">
                <button
                  onClick={() => handleThemeSelect('technical')}
                  className="group p-4 md:p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className="hidden md:block absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Monitor size={40} />
                  </div>
                  
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <Code className="text-green-600" size={20} />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Technical Website
                      </h3>
                      <p className="text-green-600 font-medium text-xs md:text-sm">For Tech Roles</p>
                    </div>
                  </div>
                  
                  {/* Mobile simplified version */}
                  <div className="md:hidden mb-3">
                    <p className="text-sm text-gray-600 mb-2">
                      Hacker terminal theme with technical projects and coding experience.
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Perfect for:</strong> Software Engineer, Web Developer, QA Engineer
                    </p>
                  </div>

                  {/* Desktop detailed version */}
                  <div className="hidden md:block">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <Zap className="text-green-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Hacker Terminal Theme</p>
                          <p className="text-xs text-gray-600">Matrix-style background with terminal aesthetics</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Code className="text-green-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Technical Projects & Skills</p>
                          <p className="text-xs text-gray-600">Coding projects, automation tools, tech stack</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="text-green-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Developer Experience</p>
                          <p className="text-xs text-gray-600">Apple internship, freelance development</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 border-t pt-3">
                      <strong>Perfect for:</strong> Software Engineer, Web Developer, QA Engineer, IT Support
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleThemeSelect('professional')}
                  className="group p-4 md:p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className="hidden md:block absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={40} />
                  </div>
                  
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Briefcase className="text-blue-600" size={20} />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Professional Website
                      </h3>
                      <p className="text-blue-600 font-medium text-xs md:text-sm">For Business Roles</p>
                    </div>
                  </div>
                  
                  {/* Mobile simplified version */}
                  <div className="md:hidden mb-3">
                    <p className="text-sm text-gray-600 mb-2">
                      Clean, professional showcase of administrative and business experience.
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Perfect for:</strong> Admin Roles, Operations, Event Coordination
                    </p>
                  </div>

                  {/* Desktop detailed version */}
                  <div className="hidden md:block">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <Briefcase className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Administrative Excellence</p>
                          <p className="text-xs text-gray-600">Operations, event coordination, customer service</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Leadership & Coordination</p>
                          <p className="text-xs text-gray-600">Team management, project coordination</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Business Operations</p>
                          <p className="text-xs text-gray-600">Process improvement, documentation, analysis</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 border-t pt-3">
                      <strong>Perfect for:</strong> Administrative Roles, Operations Manager, Event Coordinator, Customer Service
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleThemeSelect('gis')}
                  className="group p-4 md:p-6 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className="hidden md:block absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Map size={40} />
                  </div>
                  
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                      <Map className="text-emerald-600" size={20} />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        GIS Website
                      </h3>
                      <p className="text-emerald-600 font-medium text-xs md:text-sm">For Spatial Analysis Roles</p>
                    </div>
                  </div>
                  
                  {/* Mobile simplified version */}
                  <div className="md:hidden mb-3">
                    <p className="text-sm text-gray-600 mb-2">
                      Map-themed showcase of GIS expertise, spatial analysis, and cartography projects.
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Perfect for:</strong> GIS Analyst, Cartographer, Spatial Data Scientist
                    </p>
                  </div>

                  {/* Desktop detailed version */}
                  <div className="hidden md:block">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <Map className="text-emerald-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Cartographic Design</p>
                          <p className="text-xs text-gray-600">Map-themed interface with spatial visualizations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Zap className="text-emerald-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">GIS & Remote Sensing</p>
                          <p className="text-xs text-gray-600">ArcGIS, QGIS, spatial analysis, web mapping</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="text-emerald-500 mt-1 mr-2 flex-shrink-0" size={14} />
                        <div>
                          <p className="font-medium text-gray-800 text-sm">Spatial Projects</p>
                          <p className="text-xs text-gray-600">Environmental monitoring, infrastructure mapping</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 border-t pt-3">
                      <strong>Perfect for:</strong> GIS Analyst, Cartographer, Spatial Data Scientist, Environmental Planner
                    </div>
                  </div>
                </button>
              </div>

                              <div className="text-center bg-gray-50 rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 font-medium text-xs md:text-sm">Three Complete Websites</span>
                </div>
                <p className="text-gray-600 mb-1 text-xs md:text-sm">
                  <strong>Don't worry about choosing wrong!</strong> You can easily switch between all website versions anytime.
                </p>
                <p className="text-xs text-gray-500 hidden md:block">
                  All three websites showcase the same versatile professional with completely different presentations tailored to different opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 