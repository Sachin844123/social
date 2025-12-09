'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-gradient-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Grow Together
          </h2>
          <p className="text-xl text-silver-light">
            Book a strategy call or send us a message
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-light-primary mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-secondary text-light-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-silver-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-light-primary mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-secondary text-light-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-silver-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-light-primary mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-secondary text-light-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-silver-light resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-silver text-light-primary rounded-full font-semibold flex items-center justify-center gap-2 hover:glow-border transition-all"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="neumorphic p-6 rounded-2xl">
              <Mail className="w-8 h-8 text-silver-light mb-3" />
              <h3 className="text-xl font-bold text-light-primary mb-2">Email</h3>
              <p className="text-silver-light">contact@socialelite.agency</p>
            </div>

            <div className="neumorphic p-6 rounded-2xl">
              <Instagram className="w-8 h-8 text-silver-light mb-3" />
              <h3 className="text-xl font-bold text-light-primary mb-2">Instagram</h3>
              <p className="text-silver-light">@socialelite.agency</p>
            </div>

            <div className="neumorphic p-6 rounded-2xl">
              <MessageCircle className="w-8 h-8 text-silver-light mb-3" />
              <h3 className="text-xl font-bold text-light-primary mb-2">WhatsApp</h3>
              <p className="text-silver-light">+1 (555) 123-4567</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-silver text-light-primary rounded-full font-semibold hover:glow-border transition-all"
            >
              Book a Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
