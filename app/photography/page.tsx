'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Heart, ArrowLeft, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import CreatorNavigation from '@/components/CreatorNavigation'

const photographyCategories = ['All', 'Events', 'Portraits', 'Creative', 'Corporate']

const photographyWork = [
  {
    id: 1,
    title: 'Cultural Festival Moments',
    category: 'Events',
    description: 'Capturing the vibrant energy and cultural diversity at university festivals',
    image: '/api/placeholder/400/600',
    date: '2023',
    client: 'University Events',
    color: 'from-pink-400 to-red-400'
  },
  {
    id: 2,
    title: 'Professional Headshots',
    category: 'Portraits',
    description: 'Clean, professional portraits for business professionals and students',
    image: '/api/placeholder/400/600',
    date: '2023',
    client: 'Various Clients',
    color: 'from-purple-400 to-indigo-400'
  },
  {
    id: 3,
    title: 'Creative Conceptual Series',
    category: 'Creative',
    description: 'Artistic exploration of light, shadow, and human expression',
    image: '/api/placeholder/400/600',
    date: '2023',
    client: 'Personal Project',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    id: 4,
    title: 'Corporate Event Coverage',
    category: 'Corporate',
    description: 'Professional documentation of corporate events and conferences',
    image: '/api/placeholder/400/600',
    date: '2023',
    client: 'Tech Company',
    color: 'from-green-400 to-teal-400'
  },
  {
    id: 5,
    title: 'Student Life Documentation',
    category: 'Events',
    description: 'Candid moments capturing the essence of student life and community',
    image: '/api/placeholder/400/600',
    date: '2022',
    client: 'University',
    color: 'from-indigo-400 to-purple-400'
  },
  {
    id: 6,
    title: 'Artistic Portraits',
    category: 'Portraits',
    description: 'Creative portrait sessions with dramatic lighting and composition',
    image: '/api/placeholder/400/600',
    date: '2023',
    client: 'Creative Collaboration',
    color: 'from-pink-400 to-purple-400'
  },
  {
    id: 7,
    title: 'Abstract Creative Work',
    category: 'Creative',
    description: 'Experimental photography exploring abstract concepts and visual storytelling',
    image: '/api/placeholder/400/600',
    date: '2023',
    client: 'Art Exhibition',
    color: 'from-red-400 to-pink-400'
  },
  {
    id: 8,
    title: 'Conference Photography',
    category: 'Corporate',
    description: 'Professional coverage of industry conferences and networking events',
    image: '/api/placeholder/400/600',
    date: '2023',
    client: 'Industry Conference',
    color: 'from-blue-400 to-indigo-400'
  }
]

export default function PhotographyPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredWork = selectedCategory === 'All' 
    ? photographyWork 
    : photographyWork.filter(work => work.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <CreatorNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
              <Camera className="w-5 h-5" />
              <span className="font-medium">Photography Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Visual Stories
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Through my lens, I capture moments that matter - from vibrant cultural celebrations 
              to intimate portraits, each image tells a unique story and preserves memories that last forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {photographyCategories.map((category) => (
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

            {/* View Mode Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">View:</span>
              <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Gallery */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredWork.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-20`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-16 h-16 text-gray-400" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-sm font-medium">{work.category}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{work.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{work.description}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{work.client}</span>
                        <span>{work.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {filteredWork.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 aspect-[4/3] md:aspect-auto bg-gray-200 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-20`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${work.color} text-white text-xs rounded-full`}>
                          {work.category}
                        </span>
                        <span className="text-gray-500 text-sm">{work.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{work.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{work.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Client: {work.client}</span>
                        <button className="flex items-center gap-2 text-pink-600 hover:text-purple-600 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-medium">View Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Let's Create Beautiful Memories Together</h3>
            <p className="text-xl mb-8 opacity-90">
              Ready to capture your special moments? Let's discuss your photography needs and create something amazing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Book a Session
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 