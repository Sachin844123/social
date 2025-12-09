'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { Palette, Smartphone, Dumbbell } from 'lucide-react';

const caseStudies = [
  {
    name: 'Fashion Influencer',
    niche: 'Fashion & Lifestyle',
    before: '50K',
    after: '500K',
    growth: '900%',
    icon: Palette,
  },
  {
    name: 'Tech Reviewer',
    niche: 'Technology',
    before: '100K',
    after: '1.2M',
    growth: '1100%',
    icon: Smartphone,
  },
  {
    name: 'Fitness Coach',
    niche: 'Health & Fitness',
    before: '25K',
    after: '350K',
    growth: '1300%',
    icon: Dumbbell,
  },
];

export default function CaseStudies() {
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
            Real Results, Real Growth
          </h2>
          <p className="text-xl text-silver-light">
            See how we've transformed social media presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-2xl cursor-pointer group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-silver rounded-full flex items-center justify-center">
                <study.icon className="w-8 h-8 text-light-primary" />
              </div>
              <h3 className="text-2xl font-bold text-light-primary mb-2">
                {study.name}
              </h3>
              <p className="text-silver-light mb-6">{study.niche}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-silver-light">Before:</span>
                  <span className="text-light-primary font-semibold">{study.before}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver-light">After:</span>
                  <span className="text-light-primary font-semibold">{study.after}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver-light">Growth:</span>
                  <span className="text-gradient font-bold text-xl">{study.growth}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-silver rounded-full flex items-center justify-center gap-2 group-hover:glow-border transition-all">
                View Case Study <ArrowUpRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
