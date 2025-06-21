'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Vercel', 'Git', 'CI/CD']
  },
  {
    title: 'Data & Analytics',
    skills: ['Python', 'R', 'Pandas', 'D3.js', 'Mapbox GL JS']
  },
  {
    title: 'Tools & Technologies',
    skills: ['VS Code', 'Adobe CC', 'Socket.IO', 'Machine Learning']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-terminal-gray/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-green mb-4">
            <span className="text-terminal-white">$</span> cd ./skills.txt
          </h2>
          <div className="w-24 h-1 bg-terminal-green mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="terminal-window"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-button red"></div>
                  <div className="terminal-button yellow"></div>
                  <div className="terminal-button green"></div>
                </div>
                <div className="text-terminal-green text-sm ml-4">{category.title.toLowerCase()}.sh</div>
              </div>
              
              <div className="p-4">
                <h3 className="text-base font-bold text-terminal-green mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-2.5 py-1.5 bg-terminal-gray/50 text-terminal-green text-xs rounded border border-terminal-green/30 hover:border-terminal-green hover:bg-terminal-green/10 transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
} 