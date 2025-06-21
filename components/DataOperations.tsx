'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  CheckCircle, 
  Users, 
  FileText, 
  TrendingUp, 
  Target, 
  Clock, 
  Award,
  Database,
  Settings,
  Mail,
  ExternalLink
} from 'lucide-react'

const operationalSkills = [
  {
    title: "Quality Assurance & Review",
    description: "Experience with bug triaging, log analysis, and annotation review from Apple Vision Pro QA internship",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "blue",
    features: [
      "Bug Triaging & Log Analysis",
      "Annotation Review & Feedback", 
      "Internal Tool Testing",
      "Dashboard Creation & Reporting"
    ],
    relevance: "Direct experience with LLM feature testing and review cycles"
  },
  {
    title: "Administrative Support & Documentation",
    description: "Strong background in file management, scheduling, documentation, and maintaining organized workflows",
    icon: <Settings className="w-8 h-8" />,
    color: "green",
    features: [
      "SOP Creation & Documentation",
      "File Management & Organization",
      "Scheduling & Calendar Management",
      "Digital Archive Maintenance"
    ],
    relevance: "Essential for maintaining organized processes and documentation"
  },
  {
    title: "Customer Service & Support",
    description: "Experience providing help desk support, troubleshooting issues, and assisting students and staff",
    icon: <Users className="w-8 h-8" />,
    color: "purple",
    features: [
      "Help Desk Support",
      "Hardware & Software Troubleshooting",
      "Customer Communication",
      "Issue Resolution & Follow-up"
    ],
    relevance: "Valuable for supporting team members and stakeholders"
  }
]

const operationalAchievements = [
  {
    title: "Event Operations Excellence",
    description: "Successfully coordinated 10+ large-scale events with detailed planning, resource management, and execution",
    impact: "100% On-Time Delivery",
    metrics: "10+ Events, 500+ Participants",
    type: "Operations"
  },
  {
    title: "Process Documentation",
    description: "Created comprehensive SOPs and documentation systems that improved team efficiency and knowledge retention",
    impact: "Improved Efficiency",
    metrics: "5+ SOPs Created, Still in Use",
    type: "Process"
  },
  {
    title: "Cross-functional Collaboration",
    description: "Coordinated with multiple departments and stakeholders to ensure seamless project execution and communication",
    impact: "Enhanced Communication",
    metrics: "Multiple Departments, Clear Workflows",
    type: "Collaboration"
  },
  {
    title: "Data Management & Analysis",
    description: "Organized and maintained large datasets while ensuring accuracy and accessibility for research teams",
    impact: "Data Integrity",
    metrics: "100% Accuracy, Multiple Systems",
    type: "Data"
  }
]

const coreCompetencies = [
  {
    title: "Analytical Mindset",
    description: "Detail-oriented approach to problem-solving with data-driven decision making",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Solution-Oriented",
    description: "Can-do attitude with focus on finding practical solutions to operational challenges",
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    title: "Communication Excellence",
    description: "Strong written and verbal communication skills for effective stakeholder management",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Performance Tracking",
    description: "Experience in monitoring KPIs, measuring success, and driving continuous improvement",
    icon: <TrendingUp className="w-6 h-6" />
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      accent: "bg-blue-100 text-blue-800",
      gradient: "from-blue-600 to-indigo-600"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200", 
      icon: "text-green-600",
      accent: "bg-green-100 text-green-800",
      gradient: "from-green-600 to-emerald-600"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600", 
      accent: "bg-purple-100 text-purple-800",
      gradient: "from-purple-600 to-indigo-600"
    }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function DataOperations() {
  return (
    <section id="operations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Data Operations & Process Excellence
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            Experienced in administrative support, quality assurance, and customer service across academic, 
            research, and tech environments. Ready to contribute to team success through organized workflows, 
            clear documentation, and reliable support.
          </p>
        </motion.div>

        {/* Operational Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {operationalSkills.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color)
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className={`${colorClasses.icon} mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">{skill.description}</p>
                
                <div className="space-y-2 mb-4">
                  {skill.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${colorClasses.icon}`} />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`${colorClasses.accent} px-3 py-2 rounded-lg text-xs font-medium`}>
                  <strong>AI/LLM Relevance:</strong> {skill.relevance}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Operational Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Operational Achievements</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {operationalAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{achievement.title}</h4>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                      {achievement.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-4 leading-relaxed">{achievement.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-600">
                    <strong>Impact:</strong> {achievement.impact}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {achievement.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Core Competencies for Operations Roles</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl"
              >
                <div className="text-blue-600 mx-auto mb-3">
                  {competency.icon}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{competency.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{competency.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Performance Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Ready for Operations Excellence</h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">On-Time Delivery Rate</div>
              <p className="text-sm text-blue-200 mt-2">Consistent delivery of assigned production efforts within deadlines</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">SOPs Developed</div>
              <p className="text-sm text-blue-200 mt-2">Created standardized processes still used by current teams</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Multi-team</div>
              <div className="text-blue-100">Collaboration</div>
              <p className="text-sm text-blue-200 mt-2">Experience coordinating across departments and offshore teams</p>
            </div>
          </div>
        </motion.div>

       
      </div>
    </section>
  )
} 