'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Map, Globe, Layers, Satellite } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Apple',
    location: 'Seattle, WA',
    duration: 'Jan 2025 – Jun 2025',
    type: 'Internship',
    description: [
      'Worked on automation tooling for Apple Vision Pro QA workflows',
      'Created Python scripts and used internal AI APIs to automate log parsing, data extraction, and organization at scale',
      'Designed and developed dashboards using Python and JavaScript to visualize debugging metrics, crash trends, and performance signals',
      'Investigated and traced root causes of software defects through log analysis, improving application stability and assisting engineering teams'
    ],
    technologies: ['Python', 'JavaScript', 'AI APIs', 'Data Visualization', 'Automation', 'QA Workflows'],
    icon: <Globe size={24} />
  },
  {
    title: 'Full Stack Developer',
    company: 'Adios COVID & UW iSchool',
    location: 'Seattle, WA',
    duration: 'Jan 2023 – Mar 2023',
    type: 'Contract',
    description: [
      'Built a responsive, full-stack web app to serve COVID-19 research data using Next.js and serverless AWS Lambda architecture',
      'Designed and integrated interactive maps with Mapbox GL JS, rendering geospatial datasets representing COVID metrics for Washington State',
      'Supported API development for spatial queries and provided accessible, real-time map visualizations for researchers and the public'
    ],
    technologies: ['Next.js', 'Mapbox GL JS', 'AWS Lambda', 'Geospatial Data', 'COVID-19 Research', 'Web GIS'],
    icon: <Map size={24} />
  },
  {
    title: 'Software Development Intern',
    company: 'UW Middle East Languages & Cultures',
    location: 'Seattle, WA',
    duration: 'Oct 2020 – Jun 2023',
    type: 'Internship',
    description: [
      'Developed and deployed an interactive GIS web platform for historical map exploration using Mapbox GL JS, jQuery, Node.js, and MongoDB (GeoJSON)',
      'Integrated a custom user authentication system to restrict access to protected spatial layers',
      'Georeferenced historical maps using QGIS, aligned legacy data to modern projections, and visualized cultural and historical spatial narratives',
      'Maintained NoSQL databases to serve map layers and supported remote collaboration for content updates'
    ],
    technologies: ['Mapbox GL JS', 'QGIS', 'MongoDB', 'GeoJSON', 'Node.js', 'Historical GIS', 'Georeferencing'],
    icon: <Layers size={24} />
  },
  {
    title: 'Data Science Intern',
    company: 'UW Biology Department',
    location: 'Seattle, WA',
    duration: 'Jan 2021 – Jun 2022',
    type: 'Internship',
    description: [
      'Conducted spatial analysis on field-collected wildlife movement data, mapping wild dog behavior using Python, GeoPandas, and QGIS',
      'Built models to detect lion roars in acoustic datasets using supervised machine learning',
      'Automated data preprocessing workflows for GIS datasets and contributed to visual summaries of ecological field research'
    ],
    technologies: ['Python', 'GeoPandas', 'QGIS', 'Spatial Analysis', 'Machine Learning', 'Wildlife Tracking'],
    icon: <Satellite size={24} />
  }
]

const otherRoles = [
  {
    title: 'IT Help Desk Assistant',
    company: 'UW Academic Technologies',
    location: 'Seattle, WA',
    duration: 'Jan 2022 – Jun 2023',
    description: 'Delivered Tier-1 support for hardware/software issues including GIS applications. Installed and configured licensed software such as ArcGIS and QGIS.'
  },
  {
    title: 'Cultural Project Manager',
    company: 'South Asian Student Association',
    location: 'Seattle, WA',
    duration: 'Jun 2021 – Jun 2023',
    description: 'Coordinated large-scale student-led events involving over 500 attendees, managing budgets, logistics, and inter-departmental collaboration.'
  }
]

export default function GISExperience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-emerald-600/20 to-slate-700/20 p-6 border-b border-emerald-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                      {exp.icon}
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-sm text-slate-300 mb-2">{exp.company}</p>
                <div className="flex items-center gap-4 text-xs text-emerald-300">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start text-sm">
                      <span className="text-emerald-400 mr-3 mt-2 block w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-slate-800 text-emerald-300 text-xs rounded border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Additional Experience
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherRoles.map((role, index) => (
              <motion.div
                key={index}
                className="p-6 bg-slate-900 border border-emerald-500/20 rounded-lg hover:border-emerald-400/40 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-emerald-300 mb-2">{role.title}</h4>
                <h5 className="text-white mb-2">{role.company}</h5>
                <div className="flex items-center gap-2 text-sm text-slate-300 mb-3">
                  <Calendar size={14} />
                  <span>{role.duration}</span>
                  <MapPin size={14} className="ml-2" />
                  <span>{role.location}</span>
                </div>
                <p className="text-slate-300 text-sm">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 