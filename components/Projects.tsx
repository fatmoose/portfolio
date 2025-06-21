'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Apple Vision Pro Trends Dashboard',
    description: 'Interactive dashboards providing clear visualizations of bug trends,and performance indicators.',
    technologies: ['Python', 'JavaScript', 'AI APIs', 'Data Visualization', 'Log Analysis'],
    category: 'Professional',
    icon: <Code className="w-6 h-6" />,
    features: [
      'Automated log analysis using Python and using Retrieval Augmented Generation with internal AI API\'s',
      'Real time performance monitoring',
      'Interactive data visualizations showing bug trends',
      'Root cause analysis tools'
    ]
  },
  {
    title: 'Apple Vision Pro Log Parser',
    description: 'Automated log processing to speed up analysis of applications for Apple Vision Pro.',
    technologies: ['Python', 'AI APIs', 'Data Visualization', 'Log Analysis'],
    category: 'Professional',
    icon: <Code className="w-6 h-6" />,
    features: [
      'REGEX Parsing with Python',
      'Root cause analysis tools'
    ]
  },
  {
    title: 'TikTok Engagement Platform',
    description: 'Interactive web platform integrating TikTok API for real-time user engagement through donations, likes, and follows. Achieved 175% revenue increase.',
    technologies: ['React', 'Node.js', 'Socket.IO', 'TikTok API', 'Real-time Systems'],
    category: 'Freelance',
    icon: <Globe className="w-6 h-6" />,
    features: [
      'Real-time user engagement tracking',
      'TikTok API integration',
      'WebSocket based live updates',
      '175% revenue increase achieved'
    ]
  },
  {
    title: 'COVID Research Platform',
    description: 'Full-stack COVID data website for researchers featuring AWS Lambda API endpoints and interactive data visualizations using Mapbox GL JS and D3.js.',
    technologies: ['Next.js', 'AWS Lambda', 'Mapbox GL JS', 'D3.js', 'API Development'],
    category: 'Research',
    icon: <Database className="w-6 h-6" />,
    features: [
      'AWS Lambda powered APIs',
      'Interactive maps with Mapbox GL JS',
      'Complex data trend visualization',
      'Researcher-focused interface'
    ]
  },
  {
    title: 'Project Divvy-Up',
    description: 'React single-page application for splitting and requesting payments, featuring a Node.js/Express REST API with NoSQL database for user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Authentication'],
    category: 'Academic',
    icon: <Code className="w-6 h-6" />,
    features: [
      'Payment splitting functionality',
      'User authentication system',
      'RESTful API design',
      'MongoDB data persistence'
    ]
  },
  {
    title: 'Interactive GIS Web Maps',
    description: 'Interactive web mapping application with custom NoSQL database design, featuring user authentication and historical image gallery.',
    technologies: ['HTML', 'JavaScript', 'MongoDB', 'Node.js', 'PHP', 'GIS Libraries'],
    category: 'Research',
    icon: <Globe className="w-6 h-6" />,
    features: [
      'Custom NoSQL database design',
      'Interactive mapping interface',
      'Historical image gallery',
      'User authentication system'
    ]
  },
  {
    title: 'Wildlife ML Analysis Tool',
    description: 'Machine learning models for distinguishing lion roars from other sounds and analyzing wild dog behavior patterns using collar data.',
    technologies: ['Python', 'Machine Learning', 'R', 'QGIS', 'Data Analysis', 'Audio Processing'],
    category: 'Research',
    icon: <Database className="w-6 h-6" />,
    features: [
      'Audio classification ML models',
      'Wildlife behavior analysis',
      'Geospatial data visualization',
      'Statistical pattern recognition'
    ]
  },
  {
    title: 'This Website!',
    description: 'This is a portfolio website that people can look at to see what I am all about, there are 2 versions, one for a tech audience and one for a general audience.',
    technologies: ['Next.JS', 'Vite', 'Node.js', 'Typescript'],
    category: 'Freelance',
    live: 'https://yaaash.com',
    github: 'https://github.com/fatmoose',
    icon: <Database className="w-6 h-6" />,
    features: [
      'Full Stack Development',
    ]
  }
]

const categories = ['All', 'Professional', 'Freelance', 'Research', 'Academic']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-green mb-4">
            <span className="text-terminal-white">$</span> cd projects/ && ls -la
          </h2>
          <div className="w-24 h-1 bg-terminal-green mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded border transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-terminal-green text-terminal-bg border-terminal-green'
                    : 'bg-transparent text-terminal-green border-terminal-green/30 hover:border-terminal-green'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ./{category.toLowerCase()}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="terminal-window h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-button red"></div>
                  <div className="terminal-button yellow"></div>
                  <div className="terminal-button green"></div>
                </div>
                <div className="text-terminal-green text-sm ml-4">{project.title.toLowerCase().replace(/\s+/g, '_')}.py</div>
              </div>
              
              <div className="p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-terminal-green flex-shrink-0">
                    {project.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-terminal-green break-words">{project.title}</h3>
                    <span className="text-xs text-terminal-blue px-2 py-1 bg-terminal-blue/20 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-terminal-white text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-terminal-green text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-terminal-white text-xs flex items-start">
                        <span className="text-terminal-green mr-2 mt-1 block w-1 h-1 bg-terminal-green rounded-full flex-shrink-0"></span>
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4 overflow-hidden">
                  {project.technologies.slice(0, 4).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-terminal-gray text-terminal-green text-xs rounded border border-terminal-green/30 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-terminal-gray text-terminal-green text-xs rounded border border-terminal-green/30 whitespace-nowrap">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 