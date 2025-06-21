'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Map, Globe, Layers, Satellite, Database, BarChart3, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Image Classification & NDVI Mapping',
    description: 'Performed image classification and NDVI analysis on Landsat 8 imagery to assess land cover and vegetation health during a simulated disaster scenario.',
    longDescription: 'Created and managed a geodatabase, performed supervised and unsupervised classification, and published cartographic outputs using ArcGIS Pro.',
    technologies: ['ArcGIS Pro', 'Landsat 8', 'NDVI', 'Remote Sensing', 'Image Classification', 'Geodatabase'],
    category: 'Remote Sensing & Analytics',
    icon: <Satellite className="w-6 h-6" />,
    date: 'Jan 2023 – Mar 2023',
    organization: 'UW Geography'
  },
  {
    title: 'Web GIS Exploration & Development',
    description: 'Built themed web maps visualizing real-world data including COVID-19 cases, earthquakes, and law enforcement activity.',
    longDescription: 'Used Mapbox GL JS and GeoJSON for interactive visualizations. Managed version control through GitHub and structured projects for public access and clarity. Prioritized accessibility and visual legibility in map design for non-technical audiences.',
    technologies: ['Mapbox GL JS', 'GeoJSON', 'JavaScript', 'Web Development', 'GitHub', 'Data Visualization'],
    category: 'Web Mapping & Development',
    icon: <Globe className="w-6 h-6" />,
    date: 'Jan 2023 – Mar 2023',
    organization: 'UW Geography'
  },
  {
    title: 'US Internal Migration Visualization',
    description: 'Analyzed state and county-level net migration patterns using ACS and IRS data with comprehensive geospatial analysis.',
    longDescription: 'Conducted geospatial joins, cleaned missing data, and generated visual reports using R, Markdown, and spatial libraries. Presented results through maps and demographic charts to highlight migration efficiency and trends across U.S. regions.',
    technologies: ['R', 'Spatial Analysis', 'ACS Data', 'IRS Data', 'Markdown', 'Statistical Analysis'],
    category: 'Remote Sensing & Analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    date: 'Jan 2023 – Mar 2023',
    organization: 'UW Geography'
  },
  {
    title: 'COVID-19 Research Web Platform',
    description: 'Full-stack web application serving COVID-19 research data with interactive geospatial visualizations for Washington State.',
    longDescription: 'Built using Next.js and serverless AWS Lambda architecture. Integrated Mapbox GL JS for rendering geospatial datasets and provided real-time map visualizations for researchers and the public.',
    technologies: ['Next.js', 'Mapbox GL JS', 'AWS Lambda', 'COVID-19 Data', 'Public Health', 'Geospatial APIs'],
    category: 'Web Mapping & Development',
    icon: <Map className="w-6 h-6" />,
    date: 'Jan 2023 – Mar 2023',
    organization: 'Adios COVID & UW iSchool'
  },
  {
    title: 'Historical Map Exploration Platform',
    description: 'Interactive GIS web platform for historical map exploration with user authentication and spatial layer management.',
    longDescription: 'Developed using Mapbox GL JS, jQuery, Node.js, and MongoDB. Georeferenced historical maps using QGIS, aligned legacy data to modern projections, and visualized cultural and historical spatial narratives.',
    technologies: ['Mapbox GL JS', 'QGIS', 'MongoDB', 'Node.js', 'Historical GIS', 'Georeferencing'],
    category: 'Specialized Applications',
    icon: <Layers className="w-6 h-6" />,
    date: 'Oct 2020 – Jun 2023',
    organization: 'UW Middle East Languages & Cultures'
  },
  {
    title: 'Wildlife Movement Spatial Analysis',
    description: 'Spatial analysis of field-collected wildlife movement data, mapping wild dog behavior and acoustic pattern recognition.',
    longDescription: 'Used Python, GeoPandas, and QGIS for spatial analysis. Built machine learning models to detect lion roars in acoustic datasets and automated data preprocessing workflows for GIS datasets.',
    technologies: ['Python', 'GeoPandas', 'QGIS', 'Machine Learning', 'Wildlife Tracking', 'Spatial Analysis'],
    category: 'Specialized Applications',
    icon: <Database className="w-6 h-6" />,
    date: 'Jan 2021 – Jun 2022',
    organization: 'UW Biology Department'
  }
]

const categories = ['All', 'Web Mapping & Development', 'Remote Sensing & Analytics', 'Specialized Applications']

export default function GISProjects() {
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GIS Projects & Research
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Spatial analysis projects spanning environmental monitoring, web mapping, 
            remote sensing, and geospatial data visualization
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-emerald-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800 border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-emerald-600/20 to-slate-700/20 p-6 border-b border-emerald-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                      {project.icon}
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-300 mb-2">{project.organization}</p>
                <p className="text-xs text-emerald-300">{project.date}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-slate-900 text-emerald-300 text-xs rounded border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-400 rounded-lg text-sm cursor-not-allowed">
                    <ExternalLink size={16} />
                    Links Coming Soon
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 border border-slate-600/50 text-slate-400 rounded-lg text-sm cursor-not-allowed">
                    <Github size={16} />
                    Code Coming Soon
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 