'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Clock } from "lucide-react"

const socials = [
  { name: "Telegram", url: "https://t.me/M1g3L14Ka", icon: "✈️" },
  { name: "VK", url: "https://vk.com/mi4aejl", icon: "💬" },
  { name: "GitHub", url: "https://github.com/M1g3L14Ka", icon: "🐙" },
  { name: "Email", url: "mailto:kasionma@gmail.com", icon: "📧" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect real sending (Resend, Formspree, etc.)
    setIsSent(true)
    setTimeout(() => setIsSent(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
            Let&rsquo;s <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-600">Talk</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Got an idea? A project? Or just want to say hi? I&rsquo;m here!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div>
              <h3 className="font-mono text-xl mb-4 text-purple-400">Socials</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/30 hover:scale-105 transition-all"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-mono text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h3 className="font-mono text-xl mb-4 text-purple-400">Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span>Russia, Remote</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <span>Reply within 24h</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span>michael@kasion.ru</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <div>
                <label className="block font-mono text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="What's your name?"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:border-purple-500 focus:outline-none transition-colors resize-none h-32"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-rose-600 rounded-xl py-3 font-mono text-white hover:scale-105 transition-transform"
              >
                {isSent ? "Sent! ✓" : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
