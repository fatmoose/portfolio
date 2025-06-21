'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Contact() {
  const { theme } = useTheme()

  // Base contact info for technical and professional themes
  const baseContactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'yashrkatwal@gmail.com',
      href: 'mailto:yashrkatwal@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '425-563-4519',
      href: 'tel:+14255634519'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Seattle, WA',
      href: null
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/fatmoose',
      href: 'https://github.com/fatmoose'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yash-katwal',
      href: 'https://linkedin.com/in/yash-katwal'
    }
  ]

  // GIS-specific contact info
  const gisContactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'yashrkatwal@gmail.com',
      href: 'mailto:yashrkatwal@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Seattle, WA',
      href: null
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Specialization',
      value: 'GIS Analysis & Spatial Data Science',
      href: null
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/yashkatwal',
      href: 'https://github.com/yashkatwal'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yash-katwal',
      href: 'https://linkedin.com/in/yash-katwal'
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: 'GIS Resume',
      value: 'Download Resume',
      href: '/gis-resume.pdf'
    }
  ]

  const contactInfo = theme === 'gis' ? gisContactInfo : baseContactInfo

  const styles = theme === 'technical' 
    ? {
        section: 'py-20 px-4',
        title: 'text-3xl md:text-4xl font-bold text-terminal-green mb-4',
        titlePrefix: 'text-terminal-white',
        titleText: './connect.sh',
        divider: 'w-24 h-1 bg-terminal-green mx-auto mb-4',
        description: 'text-terminal-white/80 text-lg max-w-2xl mx-auto',
        container: 'terminal-window',
        header: 'terminal-header',
        headerTitle: 'text-terminal-green text-sm ml-4',
        headerTitleText: 'contact_info.json',
        content: 'p-6',
        subtitle: 'text-xl font-bold text-terminal-green mb-6',
        card: 'flex items-center gap-4 p-3 border border-terminal-green/20 rounded-lg bg-terminal-gray/20 hover:border-terminal-green/40 transition-colors',
        icon: 'text-terminal-green',
        label: 'text-terminal-white font-medium text-sm',
        link: 'text-terminal-green hover:text-terminal-blue transition-colors text-sm',
        value: 'text-terminal-white/70 text-sm'
      }
    : theme === 'gis'
    ? {
        section: 'py-20 px-4 bg-slate-800',
        title: 'text-3xl md:text-4xl font-bold text-white mb-4',
        titlePrefix: '',
        titleText: 'Get In Touch',
        divider: 'w-24 h-1 bg-emerald-500 mx-auto mb-4',
        description: 'text-slate-300 text-lg max-w-2xl mx-auto',
        container: 'bg-slate-900 border border-emerald-500/20 rounded-xl',
        header: '',
        headerTitle: '',
        headerTitleText: '',
        content: 'p-8',
        subtitle: 'text-2xl font-bold text-white mb-6 text-center',
        card: 'flex items-center gap-4 p-4 border border-emerald-500/20 rounded-lg bg-slate-800/50 hover:border-emerald-400/40 hover:bg-slate-800/70 transition-all',
        icon: 'text-emerald-400',
        label: 'text-white font-medium text-sm',
        link: 'text-emerald-400 hover:text-emerald-300 transition-colors text-sm',
        value: 'text-slate-300 text-sm'
      }
    : {
        section: 'py-20 px-4 bg-white',
        title: 'text-3xl md:text-4xl font-bold text-gray-900 mb-4',
        titlePrefix: '',
        titleText: 'Get In Touch',
        divider: 'w-24 h-1 bg-blue-600 mx-auto mb-4',
        description: 'text-gray-600 text-lg max-w-2xl mx-auto',
        container: 'bg-gray-50 rounded-2xl shadow-sm',
        header: '',
        headerTitle: '',
        headerTitleText: '',
        content: 'p-8',
        subtitle: 'text-2xl font-bold text-gray-900 mb-6 text-center',
        card: 'flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:border-blue-300 hover:shadow-sm transition-all',
        icon: 'text-blue-600',
        label: 'text-gray-900 font-medium text-sm',
        link: 'text-blue-600 hover:text-blue-700 transition-colors text-sm',
        value: 'text-gray-600 text-sm'
      }

  return (
    <section id="contact" className={styles.section}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={styles.title}>
            {theme === 'technical' && <span className={styles.titlePrefix}>$</span>} {styles.titleText}
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            {theme === 'gis' 
              ? "Ready to collaborate on spatial analysis projects or discuss GIS opportunities? Let's connect and explore how geospatial technology can solve complex challenges."
              : "Let's connect! Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you."
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className={styles.container}>
              {theme === 'technical' && (
                <div className={styles.header}>
                  <div className="terminal-buttons">
                    <div className="terminal-button red"></div>
                    <div className="terminal-button yellow"></div>
                    <div className="terminal-button green"></div>
                  </div>
                  <div className={styles.headerTitle}>{styles.headerTitleText}</div>
                </div>
              )}
              
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {theme === 'professional' ? 'Contact Information' : theme === 'gis' ? 'Contact Information' : 'Get In Touch'}
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className={styles.card}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={styles.icon}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className={styles.label}>
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={styles.link}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className={styles.value}>
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 