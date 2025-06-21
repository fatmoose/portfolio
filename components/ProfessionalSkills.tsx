'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  Camera, 
  Smartphone, 
  Globe, 
  FileText, 
  Calendar, 
  BarChart3,
  Settings,
  Headphones,
  Palette,
  Languages
} from 'lucide-react'

const skillCategories = [
  {
    title: "Administrative & Operations",
    icon: <FileText className="w-8 h-8" />,
    color: "blue",
    skills: [
      "Microsoft Office Suite",
      "Google Workspace", 
      "Meeting Scheduling",
      "SOP Documentation",
      "Data Entry & Management",
      "Research Admin Support",
      "Internal Communication",
      "Process Optimization"
    ]
  },
  {
    title: "Customer Service & Support",
    icon: <Headphones className="w-8 h-8" />,
    color: "green", 
    skills: [
      "Excellent Customer Service",
      "Technical Troubleshooting",
      "Front Desk Operations",
      "Problem Solving",
      "Interpersonal Skills",
      "Efficient Communication",
      "Conflict Resolution",
      "Multi-channel Support"
    ]
  },
  {
    title: "Event & Project Coordination",
    icon: <Calendar className="w-8 h-8" />,
    color: "purple",
    skills: [
      "Event Planning & Coordination",
      "Budget Management",
      "Vendor Relations",
      "Timeline Management",
      "Cross-functional Collaboration",
      "Marketing Materials",
      "Logistics Coordination",
      "Post-event Analysis"
    ]
  },
  {
    title: "Digital & Communication",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "pink",
    skills: [
      "Microsoft Office Suite",
      "Google Workspace",
      "Social Media Management",
      "Adobe Creative Cloud",
      "Canva Design",
      "Process Documentation",
      "Brand Development",
      "Digital Marketing"
    ]
  },
  {
    title: "Technical Tools",
    icon: <Settings className="w-8 h-8" />,
    color: "orange",
    skills: [
      "Tableau",
      "Jamf",
      "VSCode",
      "Cash Handling Systems",
      "Database Management",
      "Web Technologies",
      "iOS Development",
      "Data Analysis Tools"
    ]
  },
  {
    title: "Languages & Communication",
    icon: <Languages className="w-8 h-8" />,
    color: "teal",
    skills: [
      "English (Native)",
      "Hindi (Fluent)",
      "Urdu (Conversational)",
      "Cross-cultural Communication",
      "Public Speaking",
      "Written Communication",
      "Presentation Skills",
      "Community Outreach"
    ]
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      accent: "bg-blue-100 text-blue-800"
    },
    green: {
      bg: "bg-green-50", 
      border: "border-green-200",
      icon: "text-green-600",
      accent: "bg-green-100 text-green-800"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200", 
      icon: "text-purple-600",
      accent: "bg-purple-100 text-purple-800"
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      icon: "text-pink-600", 
      accent: "bg-pink-100 text-pink-800"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "text-orange-600",
      accent: "bg-orange-100 text-orange-800"
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: "text-teal-600",
      accent: "bg-teal-100 text-teal-800"
    }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function ProfessionalSkills() {
  const additionalSkills = [
    "Microsoft Office Suite",
    "Google Workspace",
    "Slack & Teams",
    "Zoom & WebEx",
    "Project Management Tools",
    "Data Analysis & Reporting",
    "Process Documentation",
    "Customer Service Excellence"
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            A comprehensive skill set spanning administrative excellence, creative services, 
            and technical proficiency to deliver exceptional results across diverse projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-xl p-4 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={colorClasses.icon}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${colorClasses.accent} px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Key Strengths</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Team Collaboration</h4>
              <p className="text-sm text-slate-600">
                Proven ability to work effectively with diverse teams and stakeholders
              </p>
            </div>
            
            <div className="text-center">
              <MessageSquare className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Communication</h4>
              <p className="text-sm text-slate-600">
                Clear, empathetic communication across all channels and audiences
              </p>
            </div>
            
            <div className="text-center">
              <BarChart3 className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Quick Learner</h4>
              <p className="text-sm text-slate-600">
                Rapidly adapts to new tools, processes, and environments
              </p>
            </div>
            
            <div className="text-center">
              <Globe className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Cultural Awareness</h4>
              <p className="text-sm text-slate-600">
                Deep understanding of diverse communities and inclusive practices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 