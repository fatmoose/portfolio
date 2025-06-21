'use client'

import { motion } from 'framer-motion'
import { Camera, Instagram, Mail, Eye, Heart, Users } from 'lucide-react'

const photographyServices = [
  {
    title: "Event Photography",
    description: "Capturing memorable moments at cultural events, workshops, and community gatherings",
    icon: <Users className="w-8 h-8" />,
    features: ["Cultural Events", "Workshops", "Community Gatherings", "Corporate Events"]
  },
  {
    title: "Portrait Photography", 
    description: "Professional headshots and personal portraits that tell your unique story",
    icon: <Camera className="w-8 h-8" />,
    features: ["Professional Headshots", "Personal Portraits", "Graduation Photos", "Family Sessions"]
  },
  {
    title: "Content Creation",
    description: "Visual content for social media, websites, and marketing materials",
    icon: <Instagram className="w-8 h-8" />,
    features: ["Social Media Content", "Brand Photography", "Product Shots", "Lifestyle Images"]
  }
]

const portfolioHighlights = [
  {
    title: "Unite UW Program",
    description: "Documented intercultural events and workshops for 90+ international and domestic students",
    period: "2019-2023",
    type: "Event Documentation"
  },
  {
    title: "South Asian Student Association",
    description: "Created visual content for 10+ large-scale community events and social media campaigns",
    period: "2021-2023", 
    type: "Cultural Events"
  },
  {
    title: "Instagram Management",
    description: "Maintained photo database and social media presence for university programs",
    period: "Ongoing",
    type: "Social Media"
  }
]

export default function Photography() {
  return (
    <section id="photography" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Photography & Visual Storytelling
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            Capturing authentic moments and creating compelling visual narratives that connect 
            communities and celebrate diversity through the lens of a Fujifilm XT5.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {photographyServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
            >
              <div className="text-purple-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Portfolio Highlights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioHighlights.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                  <span className="text-slate-500 text-sm">{project.period}</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Equipment & Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Approach</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                I believe in capturing authentic moments that tell meaningful stories. Whether 
                documenting cultural celebrations, professional events, or personal milestones, 
                my goal is to preserve the genuine emotions and connections that make each moment special.
              </p>
              <p className="text-slate-700 leading-relaxed">
                With experience photographing diverse communities and events, I bring cultural 
                sensitivity and creative vision to every project, ensuring that each image 
                reflects the unique character and significance of the moment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Equipment & Skills</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700">Fujifilm XT5 Camera System</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700">Event & Portrait Photography</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700">Cultural Sensitivity & Storytelling</span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700">Social Media Content Creation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Create Something Beautiful</h3>
          <p className="text-lg mb-6 opacity-90">
            Ready to capture your special moments or create compelling visual content? 
            Let's discuss your photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yashrkatwal@gmail.com?subject=Photography Inquiry"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://instagram.com/yashkatwal"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2 justify-center"
            >
              <Instagram className="w-5 h-5" />
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 