'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <Navbar />
      
      <section className="pt-32 pb-12 bg-gradient-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              Hear directly from the influencers and brands we've helped grow
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      
      <Footer />
    </main>
  );
}
