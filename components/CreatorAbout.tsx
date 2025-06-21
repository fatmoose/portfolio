'use client'

import { motion } from 'framer-motion'
import { Play, Camera, Palette, TrendingUp, Heart, Zap, Sparkles, Users } from 'lucide-react'

export default function CreatorAbout() {
  const skills = [
    { name: 'Content Creation', level: 95, color: 'bg-pink-500', icon: <Play className="w-5 h-5" /> },
    { name: 'Photography', level: 90, color: 'bg-purple-500', icon: <Camera className="w-5 h-5" /> },
    { name: 'Video Editing', level: 85, color: 'bg-indigo-500', icon: <Zap className="w-5 h-5" /> },
    { name: 'Social Media Strategy', level: 88, color: 'bg-yellow-500', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Brand Development', level: 82, color: 'bg-green-500', icon: <Sparkles className="w-5 h-5" /> },
    { name: 'Community Building', level: 87, color: 'bg-red-500', icon: <Users className="w-5 h-5" /> },
  ]

  const achievements = [
    {
      title: "Viral TikTok Content",
      description: "Created content that reached over 500K views across platforms",
      icon: <Play className="w-8 h-8" />,
      color: "from-pink-400 to-red-400"
    },
    {
      title: "Event Photography",
      description: "Captured 200+ events with professional quality and creative flair",
      icon: <Camera className="w-8 h-8" />,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Brand Collaborations",
      description: "Worked with local businesses to create engaging visual content",
      icon: <Palette className="w-8 h-8" />,
      color: "from-indigo-400 to-purple-400"
    },
    {
      title: "Merchandise Design",
      description: "Designed and launched creative merchandise with unique concepts",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-400"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 right-10 w-18 h-18 bg-indigo-200 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-medium">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Creative Mind,
            </span>
            <br />
            <span className="text-gray-800">Digital Heart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate content creator who believes in the power of visual storytelling. 
            From viral TikTok videos to stunning event photography, I bring creativity and 
            technical expertise to every project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">My Creative Journey</h3>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                What started as a hobby of capturing moments has evolved into a passion for 
                creating content that resonates with people. I combine my technical background 
                with creative vision to produce engaging digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                Whether it's developing viral TikTok content, photographing life's special moments, 
                or designing merchandise that tells a story, I approach each project with enthusiasm 
                and attention to detail.
              </p>
              <p className="text-lg leading-relaxed">
                My goal is to help brands and individuals connect with their audience through 
                authentic, creative content that stands out in today's digital landscape.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-pink-100">
                <div className="text-2xl font-bold text-pink-600">3+</div>
                <div className="text-sm text-gray-600">Years Creating</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">500K+</div>
                <div className="text-sm text-gray-600">Total Views</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-indigo-100">
                <div className="text-2xl font-bold text-indigo-600">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Creative Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${skill.color} text-white`}>
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Creative Achievements
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white mx-auto mb-4`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Let's Create Something Amazing Together!</h3>
          <p className="text-xl mb-8 opacity-90">
            Ready to bring your creative vision to life? Let's collaborate and make magic happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Start a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 