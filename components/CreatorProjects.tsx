'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Camera, Code, Sparkles, TrendingUp, Heart, ExternalLink, ShoppingBag } from 'lucide-react'

const projects = [
  {
    title: 'Viral TikTok Series',
    description: 'Created a series of tech tips and coding tutorials that gained over 300K views and helped students learn programming concepts.',
    category: 'Content',
    icon: <Play className="w-6 h-6" />,
    color: 'from-pink-400 to-red-400',
    features: [
      '300K+ total views across all videos',
      'Educational content about programming',
      'Engaging storytelling techniques',
      'Community building and interaction'
    ],
    metrics: {
      views: '300K+',
      engagement: '12%',
      followers: '5K+'
    }
  },
  {
    title: 'TikTok Engagement Platform',
    description: 'Developed an interactive web platform integrating TikTok API for real-time user engagement, achieving 175% revenue increase for clients.',
    category: 'Development',
    icon: <Code className="w-6 h-6" />,
    color: 'from-purple-400 to-indigo-400',
    features: [
      'Real-time TikTok API integration',
      'Live engagement tracking',
      'Revenue optimization tools',
      '175% revenue increase achieved'
    ],
    metrics: {
      revenue: '+175%',
      users: '10K+',
      uptime: '99.9%'
    }
  },
  {
    title: 'Creative Merchandise Line',
    description: 'Designed and launched a unique merchandise collection featuring original artwork and creative concepts that resonated with the community.',
    category: 'Merchandise',
    icon: <ShoppingBag className="w-6 h-6" />,
    color: 'from-yellow-400 to-orange-400',
    features: [
      'Original artwork and designs',
      'Community-driven concepts',
      'Quality product development',
      'Brand storytelling through design'
    ],
    metrics: {
      designs: '25+',
      sales: '500+',
      rating: '4.8/5'
    }
  },
  {
    title: 'Brand Content Strategy',
    description: 'Developed comprehensive content strategies for local businesses, focusing on authentic storytelling and community engagement.',
    category: 'Content',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-green-400 to-teal-400',
    features: [
      'Custom content calendars',
      'Brand voice development',
      'Community engagement strategies',
      'Analytics and optimization'
    ],
    metrics: {
      clients: '15+',
      growth: '+250%',
      campaigns: '50+'
    }
  },
  {
    title: 'Event Photography Series',
    description: 'Captured and curated visual stories for 200+ events, creating compelling narratives through photography and video content.',
    category: 'Content',
    icon: <Camera className="w-6 h-6" />,
    color: 'from-indigo-400 to-purple-400',
    features: [
      '200+ events documented',
      'Professional photography and videography',
      'Social media content packages',
      'Client satisfaction and retention'
    ],
    metrics: {
      events: '200+',
      photos: '10K+',
      clients: '50+'
    }
  },
  {
    title: 'Creative Development Tools',
    description: 'Built custom tools and applications to streamline content creation workflows and enhance creative productivity.',
    category: 'Development',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-pink-400 to-purple-400',
    features: [
      'Automated content scheduling',
      'Creative asset management',
      'Performance analytics dashboard',
      'Workflow optimization tools'
    ],
    metrics: {
      tools: '8+',
      users: '100+',
      efficiency: '+60%'
    }
  }
]

const categories = ['All', 'Content', 'Development', 'Merchandise']

export default function CreatorProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Creative Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Creative Portfolio
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-200 font-medium ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of {filteredProjects.length} creative projects spanning content creation, development, and brand building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 h-full overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                      <div className="text-lg font-bold">{value}</div>
                      <div className="text-xs opacity-80 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-gray-900 text-sm font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-xs flex items-start">
                        <span className="text-pink-500 mr-2 mt-1 block w-1 h-1 bg-pink-500 rounded-full flex-shrink-0"></span>
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto flex gap-3">
                  <motion.button
                    className="flex items-center gap-2 text-pink-600 hover:text-purple-600 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart size={16} />
                    <span>Like</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 text-pink-600 hover:text-purple-600 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate and bring your creative vision to life with engaging content and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Start a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              View More Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 