'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Influencer',
    followers: '500K',
    image: '👩',
    text: 'Social Elite transformed my Instagram presence. My engagement tripled in just 3 months!',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    role: 'Tech Reviewer',
    followers: '1.2M',
    image: '👨',
    text: 'The best decision I made for my channel. Professional, data-driven, and results-focused.',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Fitness Coach',
    followers: '350K',
    image: '👩‍🦰',
    text: 'They handle everything so I can focus on creating content. Absolutely worth it!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            Trusted by Top Creators
          </h2>
          <p className="text-xl text-silver-light">
            Hear from influencers who've grown with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neumorphic p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-silver flex items-center justify-center text-3xl mr-4 ring-4 ring-silver-dark/30">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-light-primary">
                    {testimonial.name}
                  </h3>
                  <p className="text-silver-light text-sm">{testimonial.role}</p>
                  <p className="text-silver-light text-xs">{testimonial.followers} followers</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-silver-light text-silver-light" />
                ))}
              </div>

              <p className="text-light-secondary italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
