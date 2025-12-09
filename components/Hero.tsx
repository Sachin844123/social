'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-premium">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              We Manage Your Social Presence
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-premium">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-silver-dark/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-silver-dark/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            We Manage Your Social Presence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-light-secondary mb-4"
          >
            You Focus On Success
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-silver-light max-w-2xl mx-auto mb-12"
          >
            Results-driven management for Influencers & Brands
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-silver text-light-primary rounded-full font-semibold flex items-center justify-center gap-2 hover:glow-border transition-all"
            >
              Book a Strategy Call <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect text-light-primary rounded-full font-semibold hover:glow-border transition-all"
            >
              See Our Work
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass-effect p-6 rounded-2xl">
              <Users className="w-12 h-12 mx-auto mb-3 text-silver-light" />
              <h3 className="text-3xl font-bold text-gradient mb-2">100+</h3>
              <p className="text-silver-light">Managed Influencers</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-silver-light" />
              <h3 className="text-3xl font-bold text-gradient mb-2">500M+</h3>
              <p className="text-silver-light">Total Reach</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl">
              <Award className="w-12 h-12 mx-auto mb-3 text-silver-light" />
              <h3 className="text-3xl font-bold text-gradient mb-2">Top Rated</h3>
              <p className="text-silver-light">Agency 2025</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
