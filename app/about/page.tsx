'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Verified Growth Strategies',
    description: 'Data-driven approaches that deliver measurable results',
  },
  {
    icon: Users,
    title: 'Personal Managers',
    description: 'Dedicated support for every influencer we work with',
  },
  {
    icon: TrendingUp,
    title: 'Premium Creative Team',
    description: 'Industry-leading content creators and strategists',
  },
  {
    icon: Award,
    title: 'Data-Based Decisions',
    description: 'Every move backed by analytics and insights',
  },
];

const milestones = [
  { year: '2021', event: 'Founded Social Elite' },
  { year: '2022', event: 'Reached 50+ clients' },
  { year: '2023', event: 'Expanded to 100+ influencers' },
  { year: '2024', event: 'Achieved 500M+ total reach' },
  { year: '2025', event: 'Top Rated Agency Award' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gradient-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              The Team Behind the Digital Spotlight
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              We're passionate about transforming social media presence into powerful brand assets
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="glass-effect p-12 rounded-2xl text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-silver flex items-center justify-center text-6xl">
                👥
              </div>
              <h2 className="text-3xl font-bold text-light-primary mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-silver-light leading-relaxed">
                To empower influencers, celebrities, and brands with world-class social media management 
                that drives real growth, engagement, and revenue. We believe in the power of authentic 
                storytelling combined with data-driven strategy.
              </p>
            </div>
          </motion.div>

          <div className="mb-24">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="neumorphic p-8 rounded-2xl"
                >
                  <value.icon className="w-12 h-12 text-silver-light mb-4" />
                  <h3 className="text-2xl font-bold text-light-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-silver-light">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 mb-8"
                >
                  <div className="w-24 h-24 flex-shrink-0 bg-gradient-silver rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                  <div className="glass-effect p-6 rounded-xl flex-grow">
                    <p className="text-lg text-light-primary">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
