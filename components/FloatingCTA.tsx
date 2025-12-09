'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-gradient-silver rounded-full flex items-center justify-center shadow-2xl animate-glow"
        aria-label="Book Manager"
      >
        <Phone className="w-6 h-6 text-light-primary" />
      </motion.button>
    </motion.div>
  );
}
