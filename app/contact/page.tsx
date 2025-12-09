'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <Navbar />
      
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              Ready to take your social media to the next level? Let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </main>
  );
}
