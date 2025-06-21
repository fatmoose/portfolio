'use client'

import { motion } from 'framer-motion'
import { 
  Shirt, 
  Video, 
  Palette, 
  TrendingUp, 
  Users, 
  Heart, 
  Star, 
  ShoppingBag,
  Instagram,
  Mail,
  ExternalLink
} from 'lucide-react'

const businessVentures = [
  {
    title: "Cultural Merchandise",
    description: "Authentic designs celebrating South Asian culture and heritage through apparel and accessories",
    icon: <Shirt className="w-8 h-8" />,
    color: "emerald",
    features: [
      "Cultural Apparel Design",
      "Heritage-inspired Accessories", 
      "Community Celebration Pieces",
      "Custom Event Merchandise"
    ],
    status: "Coming Soon"
  },
  {
    title: "Content Creation",
    description: "Engaging TikTok content, social media management, and digital storytelling services",
    icon: <Video className="w-8 h-8" />,
    color: "pink",
    features: [
      "TikTok Content Creation",
      "Social Media Strategy",
      "Brand Storytelling",
      "Community Engagement"
    ],
    status: "Active"
  },
  {
    title: "Creative Services",
    description: "Design, photography, and creative consultation for businesses and individuals",
    icon: <Palette className="w-8 h-8" />,
    color: "purple",
    features: [
      "Brand Design & Identity",
      "Photography Services",
      "Creative Consultation",
      "Event Documentation"
    ],
    status: "Available"
  }
]

const creativeProjects = [
  {
    title: "Cultural Storytelling",
    description: "Creating content that bridges cultures and celebrates diversity in the Pacific Northwest",
    impact: "Building Community",
    type: "Content"
  },
  {
    title: "Event Merchandise",
    description: "Custom designs for university events and cultural celebrations",
    impact: "10+ Events",
    type: "Design"
  },
  {
    title: "Social Media Growth",
    description: "Growing authentic communities through engaging visual content and storytelling",
    impact: "Organic Reach",
    type: "Strategy"
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      icon: "text-emerald-600",
      accent: "bg-emerald-100 text-emerald-800",
      gradient: "from-emerald-600 to-teal-600"
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200", 
      icon: "text-pink-600",
      accent: "bg-pink-100 text-pink-800",
      gradient: "from-pink-600 to-rose-600"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600", 
      accent: "bg-purple-100 text-purple-800",
      gradient: "from-purple-600 to-indigo-600"
    }
  }
  return colors[color as keyof typeof colors] || colors.purple
}

export default function Business() {
  return (
    <section id="business" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Creative Ventures & Business
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            Exploring entrepreneurial opportunities through creative expression, cultural celebration, 
            and community building. From merchandise design to content creation, bringing ideas to life.
          </p>
        </motion.div>

        {/* Business Ventures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {businessVentures.map((venture, index) => {
            const colorClasses = getColorClasses(venture.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-xl p-6 hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={colorClasses.icon}>
                    {venture.icon}
                  </div>
                  <span className={`${colorClasses.accent} px-3 py-1 rounded-full text-xs font-medium`}>
                    {venture.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {venture.title}
                </h3>
                
                <p className="text-slate-700 mb-4 leading-relaxed">
                  {venture.description}
                </p>
                
                <div className="space-y-2">
                  {venture.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Creative Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Creative Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creativeProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.impact}</span>
                  </div>
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

        {/* Vision & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision & Values</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                My creative ventures are rooted in celebrating diversity, building authentic 
                connections, and creating products that resonate with communities. Whether 
                it's designing merchandise that honors cultural heritage or creating content 
                that brings people together, every project is driven by purpose.
              </p>
              <p className="text-slate-700 leading-relaxed">
                I believe in the power of storytelling, the importance of representation, 
                and the value of creating spaces where everyone feels seen and celebrated.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Authenticity</h4>
                <p className="text-xs text-slate-600">Genuine stories and real connections</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Community</h4>
                <p className="text-xs text-slate-600">Building bridges and celebrating diversity</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <Palette className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Creativity</h4>
                <p className="text-xs text-slate-600">Innovative design and fresh perspectives</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900 mb-1">Growth</h4>
                <p className="text-xs text-slate-600">Continuous learning and improvement</p>
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
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
          <p className="text-lg mb-6 opacity-90">
            Interested in working together on creative projects, merchandise, or content creation? 
            Let's explore how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yashrkatwal@gmail.com?subject=Creative Collaboration"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Start a Project
            </a>
            <a
              href="https://instagram.com/yashkatwal"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 justify-center"
            >
              <Instagram className="w-5 h-5" />
              Follow Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 