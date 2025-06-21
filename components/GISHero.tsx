'use client'

import { motion } from 'framer-motion'
import { Map, MapPin, Globe, Layers, Navigation, Download, ArrowDown } from 'lucide-react'

export default function GISHero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating map elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-emerald-400/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <MapPin size={40} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-emerald-300/20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Globe size={60} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20 text-emerald-500/20"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Layers size={35} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-40 text-emerald-400/20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -4, 0]
          }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          <Navigation size={45} />
        </motion.div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-4 bg-emerald-500/20 rounded-full border-2 border-emerald-400/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Map className="w-12 h-12 text-emerald-400" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Yash Katwal
            </h1>
            
            <div className="text-xl md:text-2xl text-emerald-300 mb-6 font-medium">
              GIS Analyst & Spatial Data Scientist
            </div>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transforming spatial data into actionable insights through advanced GIS analysis, 
              cartographic visualization, and geospatial technology solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6">
              <Globe className="w-8 h-8 text-emerald-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Spatial Analysis</h3>
              <p className="text-slate-300 text-sm">
                Advanced geospatial modeling and environmental monitoring using ArcGIS and QGIS
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6">
              <Layers className="w-8 h-8 text-emerald-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Web Mapping</h3>
              <p className="text-slate-300 text-sm">
                Interactive web GIS applications with Mapbox GL JS and spatial data visualization
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6">
              <Navigation className="w-8 h-8 text-emerald-400 mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Remote Sensing</h3>
              <p className="text-slate-300 text-sm">
                Satellite imagery analysis, NDVI mapping, and land cover classification
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Map size={20} />
              View GIS Projects
            </motion.button>
            
            <motion.a
              href="/yashk_gis_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download GIS Resume
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-emerald-400/70"
        >
          <span className="text-sm mb-2">Explore spatial data</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
} 