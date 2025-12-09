'use client';

import { motion } from 'framer-motion';
import { Palette, Calendar, Video, Users, TrendingUp, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Profile Branding',
    description: 'Aesthetic planning and visual identity that stands out',
  },
  {
    icon: Calendar,
    title: 'Content Strategy',
    description: 'Strategic scheduling and content planning for maximum impact',
  },
  {
    icon: Video,
    title: 'Video/Photo Editing',
    description: 'Professional editing that captures attention and drives engagement',
  },
  {
    icon: Users,
    title: 'Creator Collaboration',
    description: 'Manage partnerships and collaborations seamlessly',
  },
  {
    icon: TrendingUp,
    title: 'Community Growth',
    description: 'Organic engagement strategies that build loyal audiences',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Data-driven insights with monthly performance reports',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Complete Management for Your Online Growth
          </h2>
          <p className="text-xl text-silver-light max-w-2xl mx-auto">
            Everything you need to dominate social media
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="neumorphic p-8 rounded-2xl cursor-pointer group"
            >
              <service.icon className="w-12 h-12 text-silver-light mb-4 group-hover:text-light-primary transition-colors" />
              <h3 className="text-2xl font-bold text-light-primary mb-3">
                {service.title}
              </h3>
              <p className="text-silver-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
