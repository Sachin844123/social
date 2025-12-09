'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

const portfolioItems = [
  { id: 1, platform: 'Instagram', niche: 'Fashion', image: '👗', growth: '+900%' },
  { id: 2, platform: 'YouTube', niche: 'Tech', image: '📱', growth: '+1100%' },
  { id: 3, platform: 'TikTok', niche: 'Fitness', image: '💪', growth: '+1300%' },
  { id: 4, platform: 'Instagram', niche: 'Food', image: '🍕', growth: '+750%' },
  { id: 5, platform: 'YouTube', niche: 'Gaming', image: '🎮', growth: '+850%' },
  { id: 6, platform: 'TikTok', niche: 'Dance', image: '💃', growth: '+1000%' },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const platforms = ['All', 'Instagram', 'YouTube', 'TikTok'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.platform === filter);

  return (
    <main className="min-h-screen bg-dark-primary">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gradient-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Work
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              Success stories from influencers we've helped grow
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {platforms.map((platform) => (
              <motion.button
                key={platform}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(platform)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === platform
                    ? 'bg-gradient-silver text-light-primary'
                    : 'glass-effect text-silver-light hover:text-light-primary'
                }`}
              >
                {platform}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="neumorphic p-8 rounded-2xl cursor-pointer group"
              >
                <div className="text-7xl mb-4 text-center">{item.image}</div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-gradient-silver rounded-full text-sm mb-3">
                    {item.platform}
                  </span>
                  <h3 className="text-2xl font-bold text-light-primary mb-2">
                    {item.niche}
                  </h3>
                  <p className="text-3xl font-bold text-gradient">{item.growth}</p>
                  <p className="text-silver-light mt-2">Growth Rate</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
