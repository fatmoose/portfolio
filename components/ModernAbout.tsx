'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { BarChart3, Users, Briefcase, Award, Globe, Heart } from 'lucide-react'

export default function ModernAbout() {
  const { theme } = useTheme()

  const styles = theme === 'technical' 
    ? {
        section: 'py-20 px-6 lg:px-24 relative z-10',
        container: 'max-w-6xl mx-auto',
        title: 'text-2xl lg:text-3xl font-bold text-terminal-white mb-12 flex items-center',
        number: 'text-terminal-green font-mono text-lg mr-4',
        line: 'flex-1 h-px bg-terminal-green/30 ml-6',
        content: 'grid lg:grid-cols-3 gap-12',
        text: 'lg:col-span-2 space-y-4 text-terminal-white/80 text-base leading-relaxed',
        highlight: 'text-terminal-green',
        imageContainer: 'lg:col-span-1',
        image: 'w-full max-w-sm mx-auto rounded-lg bg-terminal-gray/50 p-8 border border-terminal-green/30',
        placeholder: 'w-full h-64 bg-terminal-gray rounded flex items-center justify-center text-terminal-white/50'
      }
    : {
        section: 'py-20 px-6 lg:px-24 bg-white',
        container: 'max-w-6xl mx-auto',
        title: 'text-2xl lg:text-3xl font-bold text-slate-900 mb-12 flex items-center',
        number: 'text-blue-600 font-roboto text-lg mr-4',
        line: 'flex-1 h-px bg-slate-300 ml-6',
        content: 'grid lg:grid-cols-3 gap-12',
        text: 'lg:col-span-2 space-y-4 text-slate-600 text-base leading-relaxed',
        highlight: 'text-blue-600 font-medium',
        imageContainer: 'lg:col-span-1',
        image: 'w-full max-w-sm mx-auto rounded-lg bg-slate-50 p-8 border border-slate-200',
        placeholder: 'w-full h-64 bg-slate-200 rounded flex items-center justify-center text-slate-500'
      }

  const technicalContent = {
    paragraphs: [
      "I'm a developer who loves solving real world problems with code. My passion for software development began in 2019 when I pursued a dual degree in Informatics and Geography, both with a focus on software developemnt and Data Science, at the University of Washington, blending technical skills with a data driven worldview.",
      "Since then, I've had the privilege of working at Apple on Apple Vision Pro, where I built internal automation tools and dashboards to streamline development workflows and surface key performance insights. That experience deepened my interest in creating high impact tools that are both scalable and human centered.",
      "I've also worked across diverse roles from building interactive web maps and machine learning models in academic research, to launching full stack websites and real time platforms as a freelance developer, gaining hands on experience in software engineering, data science, and user centered design.",
      "When not coding you can find me on top of some mountain, at the gym, reading on some grass, or playing video games in my basement."
    ],
    technologies: [
    ]
  }

  const professionalContent = {
    paragraphs: [
      "Hello! My name is Yash and I'm passionate about supporting teams and maintaining organized, efficient workflows. My background spans administrative roles across academic institutions, research labs, and tech environments, where I've developed strong skills in documentation, coordination, and customer service.",
      "From providing help desk support at UW Academic Technologies to quality assurance work with Apple's Vision Pro team, I've consistently helped teams stay organized, solve problems, and maintain smooth operations. I excel at creating SOPs, managing schedules, and ensuring clear communication across departments.",
      "I thrive in collaborative environments where attention to detail, reliable follow-through, and adaptability make a meaningful impact on team success.",
      "Here are some areas where I excel:"
    ],
    technologies: [
      "Microsoft Office Suite", "Customer Service", "Scheduling & Calendar Management", "Documentation",
      "Quality Assurance", "File Management", "SOP Development", "Cross-functional Collaboration"
    ]
  }

  const content = theme === 'technical' ? technicalContent : professionalContent

  if (theme === 'professional') {
    return (
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="/profile.jpg" 
                      alt="Yash Katwal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-slate-600 text-lg">
                    Administrative Support<br />
                    Quality Assurance<br />
                    Customer Service
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a detail oriented professional who excels in administrative support, customer service, 
                and quality assurance roles. With experience across academic institutions, research labs, 
                and tech environments, I bring strong organizational skills and a collaborative approach 
                to every team and project.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                My journey has taken me from help desk support at UW Academic Technologies to 
                quality assurance work with Apple's Vision Pro team, along with administrative roles 
                in research labs and student organizations. I believe in the power of clear 
                communication and reliable support to help teams succeed.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Whether I'm maintaining documentation, troubleshooting technical issues, 
                or coordinating logistics for events, I approach each opportunity with 
                enthusiasm, attention to detail, and a commitment to supporting my team.
              </p>
            </div>
          </div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">What I Do</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Briefcase className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Administrative Support</h4>
                <p className="text-slate-600">
                  Scheduling, file management, documentation, inventory tracking, and clerical support 
                  across academic, research, and corporate environments.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <BarChart3 className="w-10 h-10 text-purple-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Quality Assurance</h4>
                <p className="text-slate-600">
                  Bug triaging, log analysis, annotation review, feedback cycles, and testing coordination 
                  for internal tools and machine learning features.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Customer Service</h4>
                <p className="text-slate-600">
                  Help desk support, troubleshooting hardware and software issues, responding to requests, 
                  and providing assistance to students, staff, and external stakeholders.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Award className="w-10 h-10 text-orange-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Customer Experience</h4>
                <p className="text-slate-600">
                  Delivering exceptional service experiences, building customer relationships, 
                  and ensuring satisfaction through empathetic communication and problem-solving.
                </p>
                  </div>

              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-teal-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Event Coordination</h4>
                <p className="text-slate-600">
                  Organizing cultural events, managing vendor communications, coordinating logistics, 
                  and creating SOPs to ensure smooth event execution and team transitions.
                </p>
                </div>

              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Heart className="w-10 h-10 text-pink-600 mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Documentation & SOPs</h4>
                <p className="text-slate-600">
                  Creating standard operating procedures, maintaining project documentation, organizing 
                  digital archives, and developing hand-off materials for seamless team transitions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Technical theme with terminal window
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Terminal Command */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-terminal-green mb-4">
              <span className="text-terminal-white">$</span> whoami
            </h2>
            <div className="w-24 h-1 bg-terminal-green mx-auto"></div>
          </div>

          {/* Terminal Window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
              </div>
              <div className="text-terminal-green text-sm ml-4">about.md</div>
            </div>
            
            <div className="p-8">
              <div className={styles.content}>
                <div className={styles.text}>
                  {content.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                  
                  <ul className="grid grid-cols-2 gap-2 mt-6 text-sm">
                    {content.technologies.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-terminal-green">▹</span>
                        <span className={styles.highlight}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <img 
                      src="/profile.jpg" 
                      alt="Yash Katwal"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 