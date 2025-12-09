'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    features: [
      'Profile optimization',
      'Content calendar (12 posts/month)',
      'Basic analytics',
      'Email support',
      '1 platform management',
    ],
  },
  {
    name: 'Growth',
    price: '$2,499',
    period: '/month',
    popular: true,
    features: [
      'Everything in Starter',
      'Content calendar (30 posts/month)',
      'Video editing (5 videos)',
      'Advanced analytics',
      'Dedicated manager',
      '3 platform management',
      'Influencer collaborations',
    ],
  },
  {
    name: 'Elite',
    price: '$4,999',
    period: '/month',
    features: [
      'Everything in Growth',
      'Unlimited content',
      'Professional photoshoots',
      'Video editing (unlimited)',
      'Priority support 24/7',
      'All platform management',
      'Brand partnerships',
      'PR & media outreach',
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-silver-light max-w-3xl mx-auto">
              Choose the perfect plan to elevate your social media presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  plan.popular ? 'neumorphic ring-2 ring-silver-light' : 'glass-effect'
                } p-8 rounded-2xl relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-silver px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-light-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-silver-light">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-silver-light flex-shrink-0 mt-0.5" />
                      <span className="text-light-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold ${
                    plan.popular
                      ? 'bg-gradient-silver text-light-primary'
                      : 'bg-dark-tertiary text-light-primary'
                  } hover:glow-border transition-all`}
                >
                  Start Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
