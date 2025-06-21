'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useState, useEffect } from 'react'

// Animated role component
function AnimatedRole({ theme }: { theme: string }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  
  const roles = [
    'software engineer',
    'full stack developer',
    'frontend developer',
    'backend developer',
    'python developer',
    'react developer',
    'data scientist',
    'automation engineer',
    'web developer',
    'QA engineer'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500) // Change role every 2.5 seconds

    return () => clearInterval(interval)
  }, [roles.length])

  const textColor = theme === 'technical' ? 'text-terminal-green' : 'text-blue-600'

  return (
    <span className="inline-block relative min-h-[1.2em] transition-all duration-300 ease-in-out">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRoleIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`inline-block ${textColor}`}
        >
          {roles[currentRoleIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function ModernHero() {
  const { theme } = useTheme()

  const styles = theme === 'technical' 
    ? {
        section: 'min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 pt-24 pb-16 relative z-10',
        container: 'max-w-6xl mx-auto',
        greeting: 'text-terminal-green font-mono text-base mb-5',
        name: 'text-5xl lg:text-7xl font-bold text-terminal-white mb-4 leading-tight',
        title: 'text-4xl lg:text-6xl font-bold text-terminal-white/70 mb-6 leading-tight',
        description: 'text-terminal-white/80 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed',
        location: 'flex items-center gap-2 text-terminal-green mb-8 font-mono text-sm',
        links: 'flex gap-6 mb-12',
        link: 'text-terminal-white/70 hover:text-terminal-green transition-colors duration-200 flex items-center gap-2',
        resume: 'inline-flex items-center gap-2 px-6 py-3 bg-terminal-green text-terminal-bg hover:bg-terminal-green/90 transition-all duration-200 font-mono text-sm'
      }
    : {
        section: 'min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 pt-24 pb-16 bg-slate-50',
        container: 'max-w-6xl mx-auto',
        greeting: 'text-blue-600 font-roboto text-base mb-5',
        name: 'text-5xl lg:text-7xl font-bold text-slate-900 mb-4 leading-tight',
        title: 'text-4xl lg:text-6xl font-bold text-slate-600 mb-6 leading-tight',
        description: 'text-slate-600 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed',
        location: 'flex items-center gap-2 text-blue-600 mb-8 text-sm',
        links: 'flex gap-6 mb-12',
        link: 'text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2',
        resume: 'inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-sm'
      }

  if (theme === 'professional') {
    return (
      <section id="hero" className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={styles.greeting}>
              Hi, my name is
            </p>
            
            <h1 className={styles.name}>
              Yash Katwal.
            </h1>
            
            <h2 className={styles.title}>
              I streamline operations & support teams.
            </h2>
            
            <p className={styles.description}>
              I'm an administrative professional with expertise in operations, event coordination, and cross-functional collaboration. Currently seeking opportunities to support dynamic teams and streamline organizational processes.
            </p>
            
            <div className={styles.location}>
              <MapPin size={16} />
              <span>Seattle, WA</span>
            </div>
            
            <div className={styles.links}>
              <motion.a
                href="https://github.com/fatmoose"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Github size={20} />
                <span>GitHub</span>
                <ArrowUpRight size={16} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/yash-katwal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <ArrowUpRight size={16} />
              </motion.a>
              
              <motion.a
                href="mailto:yashrkatwal@gmail.com"
                className={styles.link}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={20} />
                <span>Email</span>
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resume}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <FileText size={18} />
              <span>View Resume</span>
            </motion.a>
            
            {/* Scroll Indicator */}
            <motion.div
              className="flex items-center justify-center gap-3 text-sm text-blue-600/70 mt-16"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: [0, -8, 0]
              }}
              transition={{ 
                delay: 2,
                y: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div>↓</div>
              <div>scroll down to explore</div>
              <div>↓</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Technical theme with terminal window
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >


          {/* Terminal Window */}
          <div className="terminal-window mb-8">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="text-terminal-green text-sm ml-4">introduction.txt</div>
            </div>
            
            <div className="p-8">
              <p className={styles.greeting}>
                Hi, my name is
              </p>
              
              <h1 className={styles.name}>
                Yash Katwal.
              </h1>
              
              <h2 className={styles.title}>
                I turn caffiene into code.
              </h2>
              
              <p className={`${styles.description} whitespace-pre-line`}>
                I'm a <AnimatedRole theme={theme} /> that can build exceptional, efficient, scalable, accessible, and human centered digital experiences. 
                <br />

                I am looking for a full time role where I can continue growing my skills and building great products with a collaborative team.
              </p>
              
              <div className={styles.location}>
                <MapPin size={16} />
                <span>Seattle, WA</span>
              </div>
              
              <div className={styles.links}>
                <motion.a
                  href="https://github.com/fatmoose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <ArrowUpRight size={16} />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/yash-katwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={16} />
                </motion.a>
                
                <motion.a
                  href="mailto:yashrkatwal@gmail.com"
                  className={styles.link}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail size={20} />
                  <span>Email</span>
                  <ArrowUpRight size={16} />
                </motion.a>
              </div>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resume}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <FileText size={18} />
                <span>View Resume</span>
              </motion.a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            className="flex items-center justify-center gap-3 text-sm text-terminal-green/70 mt-8"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -8, 0]
            }}
            transition={{ 
              delay: 2,
              y: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div>↓</div>
            <div>scroll down to explore</div>
            <div>↓</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 