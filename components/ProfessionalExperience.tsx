'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, Users, ShoppingCart, Code } from 'lucide-react'

const experiences = [

  {
    title: "Software Triage Intern – Vision Pro",
    company: "Apple",
    location: "Seattle, WA", 
    period: "Jan 2025 – Jun 2025",
    description: "Streamlined operations by developing internal Python scripts to analyze and organize log data for testing.",
    category: "Tech",
    icon: <Code className="w-6 h-6" />,
    features: [
      "Python script development for log analysis",
      "Cross-functional team coordination",
      "Internal dashboards with HTML/CSS/JS",
      "Performance indicators visualization"
    ],
    skills: ["Python", "Data Analysis", "Cross-functional Collaboration", "Dashboard Development"]
  },
  {
    title: "IT Help Desk Assistant",
    company: "UW Academic Technologies",
    location: "Seattle, WA",
    period: "Jan 2022 – Jun 2023",
    description: "Assisted clients with troubleshooting software issues on various hardware items in-person, over the phone, and online.",
    category: "Tech",
    icon: <Code className="w-6 h-6" />,
    features: [
      "Multi-channel technical support delivery",
      "Complex software issue documentation",
      "Client consultation and product recommendations",
      "Hardware and software troubleshooting"
    ],
    skills: ["Technical Troubleshooting", "Documentation", "Client Support", "Problem Solving"]
  },
  {
    title: "Administrative Program Manager",
    company: "South Asian Student Association",
    location: "Seattle, WA",
    period: "Jan 2021 – Jun 2023",
    description: "Led planning for 10+ community-wide events by budgeting, scheduling, and coordinating with multiple departments.",
    category: "Professional",
    icon: <Briefcase className="w-6 h-6" />,
    features: [
      "10+ large-scale event planning and execution",
      "SOP development for ongoing operations",
      "Multi-department coordination and budgeting",
      "Social media and promotional strategy"
    ],
    skills: ["Event Planning", "Budget Management", "SOP Development", "Social Media Management"]
  },
  {
    title: "Facilitator & Photographer",
    company: "Unite UW Program",
    location: "Seattle, WA",
    period: "Sep 2019 – Jun 2023",
    description: "Facilitated team-building workshops and intercultural events with rotating groups of 90+ international and domestic students.",
    category: "Professional",
    icon: <Users className="w-6 h-6" />,
    features: [
      "Workshop facilitation for 90+ participants",
      "Intercultural event coordination",
      "Professional event documentation",
      "Media management and digital archiving"
    ],
    skills: ["Workshop Facilitation", "Event Coordination", "Event Documentation", "Cultural Programming"]
  },
  {
    title: "Specialist",
    company: "Apple",
    location: "Seattle, WA",
    period: "Oct 2023 – Present",
    description: "Provided excellent customer service to a diverse group of customers by informing them about how Apple products can enrich their lives, with regard to the A.P.P.L.E service steps and the Apple Credo.",
    category: "Retail",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      "Customer service excellence with A.P.P.L.E service steps",
      "Technical support for device troubleshooting",
      "Apple Vision Pro launch operations and demos",
      "Product education and customer consultation"
    ],
    skills: ["Customer Service", "Technical Support", "Product Demonstrations", "Operations Support"]
  },
  {
    title: "Administrative Intern",
    company: "SDP Research Lab",
    location: "Seattle, WA",
    period: "Oct 2020 – Jun 2023",
    description: "Organized data and research materials across web, image, and database systems for access by faculty and external researchers.",
    category: "Professional",
    icon: <Briefcase className="w-6 h-6" />,
    features: [
      "Multi-system data organization",
      "Internal tool development",
      "Digital repository maintenance",
      "Faculty and researcher support"
    ],
    skills: ["Data Organization", "Database Management", "Web Technologies", "Documentation"]
  },
  {
    title: "Full Stack Admin Support",
    company: "Adios COVID & UW iSchool",
    location: "Seattle, WA",
    period: "Jan 2023 – Mar 2023",
    description: "Supported public health data teams by organizing datasets, maintaining documentation, and facilitating collaborative updates.",
    category: "Tech",
    icon: <Code className="w-6 h-6" />,
    features: [
      "Public health data management",
      "Full-stack website development",
      "AWS and Node.js implementation",
      "SDLC adherence and documentation"
    ],
    skills: ["Data Management", "Web Development", "JavaScript", "AWS", "Project Coordination"]
  },
  {
    title: "Operations Assistant",
    company: "Brotman Baty Institute",
    location: "Seattle, WA",
    period: "Oct 2020 – Jun 2021",
    description: "Provided remote and in-person support to study participants, including intake coordination and communication.",
    category: "Professional",
    icon: <Briefcase className="w-6 h-6" />,
    features: [
      "Multi-channel participant support",
      "SOP-compliant workflow management",
      "Inventory and shipping coordination",
      "Timeline monitoring and outreach"
    ],
    skills: ["Operations Management", "Participant Coordination", "Inventory Management", "SOP Compliance"]
  },
  {
    title: "Events Intern",
    company: "ASUW Asian Student Commission",
    location: "Seattle, WA",
    period: "Nov 2020 – Jun 2021",
    description: "Planned and coordinated large-scale virtual and in-person events by liaising with vendors, sponsors, and student organizations.",
    category: "Professional",
    icon: <Users className="w-6 h-6" />,
    features: [
      "Large-scale event coordination",
      "Vendor and sponsor relationship management",
      "Marketing material creation",
      "Virtual and in-person event execution"
    ],
    skills: ["Event Coordination", "Vendor Management", "Marketing Materials", "Cultural Programming"]
  },
  {
    title: "Ticketing and Membership Associate",
    company: "Woodland Park Zoo",
    location: "Seattle, WA",
    period: "Mar 2021 – Sep 2021",
    description: "Sold tickets and memberships while educating customers about products, animals, and conservation.",
    category: "Retail",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      "Ticket and membership sales",
      "Customer education on conservation",
      "COVID-19 protocol enforcement",
      "Product knowledge and consultation"
    ],
    skills: ["Sales", "Customer Education", "Protocol Enforcement", "Conservation Awareness"]
  },
  {
    title: "Courtesy Clerk",
    company: "QFC",
    location: "Seattle, WA",
    period: "Sep 2017 – Aug 2019",
    description: "Provided excellent customer service to a diverse set of customers in a fast-paced and high-stress work environment.",
    category: "Retail",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: [
      "High-volume customer service",
      "Fast-paced environment management",
      "Team collaboration and support",
      "Efficient task completion under pressure"
    ],
    skills: ["Customer Service", "Time Management", "Multitasking", "Team Collaboration"]
  }
]

const categories = ['All', 'Professional', 'Retail', 'Tech']

export default function ProfessionalExperience() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredExperiences = selectedCategory === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory)

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">University of Washington</h3>
              <div className="text-slate-600 mb-6">
                <p className="text-lg font-semibold mb-1">B.S. in Informatics: Software Development</p>
                <p className="text-lg font-semibold">B.A. in Geography: GIS & Data Science</p>
              </div>
              <div className="flex items-center justify-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Seattle, WA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Sep 2019 – Jun 2023</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-600/30 hover:border-blue-600 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A diverse background spanning {filteredExperiences.length} positions across various industries and roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-blue-600 flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-slate-900 break-words mb-1">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-2">{exp.company}</p>
                    <span className="text-xs text-white px-2 py-1 bg-blue-600 rounded-full">
                      {exp.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-slate-900 text-sm font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 text-xs flex items-start">
                        <span className="text-blue-600 mr-2 mt-1 block w-1 h-1 bg-blue-600 rounded-full flex-shrink-0"></span>
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto border-t border-slate-100 pt-3">
                  <h5 className="text-slate-900 text-xs font-semibold mb-2">Skills:</h5>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.slice(0, 4).map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 4 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200 whitespace-nowrap">
                        +{exp.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 