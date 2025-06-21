'use client'

import { motion } from 'framer-motion'
import { Map, Globe, Layers, Satellite, Database, BarChart3 } from 'lucide-react'

export default function GISAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800 border border-emerald-500/20 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="text-center z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-lg shadow-emerald-500/20">
                  <img 
                    src="/profile.jpg" 
                    alt="Yash Katwal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-emerald-300 text-lg font-medium">
                  Spatial Data Scientist<br />
                  GIS Analyst<br />
                  Cartographer
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a entry level GIS nerd with dual expertise in Geographic Information Systems 
              and software development. My passion lies in transforming complex spatial data into 
              meaningful insights that drive environmental monitoring, infrastructure planning, 
              and evidence based decision making.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              With experience spanning from writing python scripts for Apple Vision Pro team to making maps for academic research labs, 
              I bring a unique blend of technical knowledge and spatial thinking to every project. 
              I specialize in creating interactive web mapping applications, conducting remote sensing 
              analysis, and developing automated GIS workflows.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Whether I'm analyzing satellite imagery for environmental monitoring, building 
              web GIS platforms for historical research, or creating cartographic visualizations 
              for public health data, I approach each challenge with scientific rigor and 
              creative problem solving.
            </p>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/40 transition-colors">
              <Map className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">GIS & Cartography</h4>
              <p className="text-slate-300 text-sm mb-4">
                Advanced spatial analysis, map design, and geodatabase management using 
                industry-standard GIS software and cartographic principles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">ArcGIS Pro</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">QGIS</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">ArcGIS Online</span>
              </div>
            </div>

            <div className="bg-slate-800 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/40 transition-colors">
              <Satellite className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Remote Sensing</h4>
              <p className="text-slate-300 text-sm mb-4">
                Satellite imagery analysis, NDVI mapping, land cover classification, 
                and environmental monitoring using multispectral data.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">Landsat 8</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">NDVI</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">Classification</span>
              </div>
            </div>

            <div className="bg-slate-800 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/40 transition-colors">
              <Globe className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Web Mapping</h4>
              <p className="text-slate-300 text-sm mb-4">
                Interactive web GIS applications, spatial data visualization, 
                and online mapping platforms for public and research use.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">Mapbox GL JS</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">Leaflet</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">GeoJSON</span>
              </div>
            </div>

            <div className="bg-slate-800 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/40 transition-colors">
              <Database className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Spatial Databases</h4>
              <p className="text-slate-300 text-sm mb-4">
                Geodatabase design, spatial queries, data integration, 
                and management of large-scale geospatial datasets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">MongoDB</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">SQL</span>
              </div>
            </div>

            <div className="bg-slate-800 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/40 transition-colors">
              <BarChart3 className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Spatial Analytics</h4>
              <p className="text-slate-300 text-sm mb-4">
                Statistical analysis of spatial data, predictive modeling, 
                and automated workflow development using Python and R.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">GeoPandas</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">R</span>
              </div>
            </div>

            <div className="bg-slate-800 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/40 transition-colors">
              <Layers className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Data Integration</h4>
              <p className="text-slate-300 text-sm mb-4">
                Multi-source data fusion, coordinate system transformations, 
                and quality assurance for geospatial datasets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">ArcPy</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">GDAL</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">FME</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 