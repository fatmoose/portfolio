'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Apple',
    location: 'Seattle, WA',
    duration: 'Jan 2025 – Jun 2025',
    type: 'Internship',
    description: [
      'Developed Python automation scripts and leveraged internal AI APIs to automate log analysis, data extraction, and organization for Apple Vision Pro',
      'Developed interactive dashboards using Python and JavaScript providing clear visualizations of bug trends, performance indicators, and processed log data for improved debugging',
      'Performed root cause analysis on software defects by systematically examining device logs and user reports, collaborating with engineering teams to accelerate issue resolution and improve application stability'
    ],
    technologies: ['Python', 'JavaScript', 'AI APIs', 'Data Visualization', 'Log Analysis']
  },
  {
    title: 'Freelance Developer',
    company: 'Self Employed',
    location: 'Seattle, WA',
    duration: 'Jun 2023 – Jan 2025',
    type: 'Freelance',
    description: [
      'Developed informational, personal, and commercial websites for clients using React, Next.js, Node.js and more',
      'Spearheaded the development of interactive web platforms using React, Node.js, and Socket.IO, integrating an unofficial TikTok API to drive real-time user engagement through donations, likes, and follows, resulting in a 175% revenue increase'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Socket.IO', 'TikTok API', 'Full-Stack Development']
  },
  {
    title: 'Full Stack Developer',
    company: 'Adios COVID & UW iSchool',
    location: 'Seattle, WA',
    duration: 'Jan 2023 – Mar 2023',
    type: 'Contract',
    description: [
      'Developed a full stack COVID data website for researchers using Next.JS and Agile methodologies, incorporating AWS Lambda powered API endpoints for efficient data retrieval',
      'Implemented interactive data visualizations using Mapbox GL JS and D3.js, leveraging the custom API to present complex COVID data trends effectively'
    ],
    technologies: ['Next.js', 'AWS Lambda', 'Mapbox GL JS', 'D3.js', 'Agile', 'Data Visualization']
  },
  {
    title: 'Software Development Intern',
    company: 'SDP Research Lab',
    location: 'Seattle, WA',
    duration: 'Oct 2020 – Jun 2023',
    type: 'Internship',
    description: [
      'Developed and deployed interactive web maps (HTML, JavaScript, GIS libraries) supported by a custom-designed NoSQL (MongoDB) database for efficient data retrieval and NodeJS authentication',
      'Created an image gallery using PHP, JavaScript, and SQL to provide access to historical images'
    ],
    technologies: ['HTML', 'JavaScript', 'MongoDB', 'Node.js', 'PHP', 'SQL', 'GIS']
  },
  {
    title: 'Data Science Intern',
    company: 'Abrahms Research Lab',
    location: 'Seattle, WA',
    duration: 'Jan 2021 – Jun 2022',
    type: 'Internship',
    description: [
      'Utilized Python to train machine learning models to distinguish lion roars from other sounds for field research',
      'Tracked, analyzed, and visualized wild dog behavior with dog collar data using Python, R and QGIS'
    ],
    technologies: ['Python', 'Machine Learning', 'R', 'QGIS', 'Data Analysis']
  }
]

const otherRoles = [
  {
    title: 'Project Manager',
    company: 'South Asian Student Association',
    location: 'Seattle, WA',
    duration: 'Jun 2021 – Jun 2023',
    description: 'Planned and executed large scale events, managed project schedules, budgets, and stakeholder communications'
  },
  {
    title: 'IT Help Desk Assistant',
    company: 'UW Academic Technologies',
    location: 'Seattle, WA',
    duration: 'Jan 2022 – Jun 2023',
    description: 'Assisted clients with troubleshooting software issues and documented solutions to technical problems'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-terminal-gray/10">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-terminal-green mb-8 text-center">
            <span className="text-terminal-white">$</span> cat education.json
          </h3>
          
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="text-terminal-green text-sm ml-4">university_of_washington.json</div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold text-terminal-green mb-4">University of Washington</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <span className="text-terminal-green mr-3 mt-1.5 block w-2 h-2 bg-terminal-green rounded-full flex-shrink-0"></span>
                  <span className="text-terminal-white">
                    <strong className="text-terminal-blue">B.S. in Informatics:</strong> Software Development
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-terminal-green mr-3 mt-1.5 block w-2 h-2 bg-terminal-green rounded-full flex-shrink-0"></span>
                  <span className="text-terminal-white">
                    <strong className="text-terminal-blue">B.A. in Geography:</strong> GIS & Data Science
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-terminal-white/70 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Sep 2019 – Jun 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Seattle, WA</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['Software Development', 'Data Science', 'GIS', 'Web Development', 'Database Design', 'Machine Learning'].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-terminal-gray text-terminal-green text-sm rounded border border-terminal-green/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-green mb-4">
            <span className="text-terminal-white">$</span> ls -la experience/
          </h2>
          <div className="w-24 h-1 bg-terminal-green mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="terminal-window"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-button red"></div>
                  <div className="terminal-button yellow"></div>
                  <div className="terminal-button green"></div>
                </div>
                <div className="text-terminal-green text-sm ml-4">{exp.company.toLowerCase().replace(/\s+/g, '_')}.json</div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-terminal-green mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-terminal-blue mb-2">{exp.company}</h4>
                  </div>
                  
                  <div className="flex flex-col text-sm text-terminal-white/70 md:text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="mt-1">
                      <span className="px-2 py-1 bg-terminal-green/20 text-terminal-green text-xs rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-terminal-white flex items-start">
                      <span className="text-terminal-green mr-3 mt-1.5 block w-2 h-2 bg-terminal-green rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <motion.span
                      key={techIdx}
                      className="px-3 py-1 bg-terminal-gray text-terminal-green text-sm rounded border border-terminal-green/30"
                      whileHover={{ scale: 1.05, borderColor: '#00ff00' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
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
          <h3 className="text-2xl font-bold text-terminal-green mb-8 text-center">
            <span className="text-terminal-white">$</span> other_activities.sh
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherRoles.map((role, index) => (
              <motion.div
                key={index}
                className="p-6 border border-terminal-green/20 rounded-lg bg-terminal-gray/20"
                whileHover={{ scale: 1.02, borderColor: '#00ff00' }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-terminal-green mb-2">{role.title}</h4>
                <h5 className="text-terminal-blue mb-2">{role.company}</h5>
                <div className="flex items-center gap-2 text-sm text-terminal-white/70 mb-3">
                  <Calendar size={14} />
                  <span>{role.duration}</span>
                  <MapPin size={14} className="ml-2" />
                  <span>{role.location}</span>
                </div>
                <p className="text-terminal-white text-sm">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 