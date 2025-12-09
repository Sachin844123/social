'use client';

import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t border-silver-dark/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">SOCIAL ELITE</h3>
            <p className="text-silver-light">
              Premium social media management for influencers and brands.
            </p>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-silver-light hover:text-light-primary">Profile Branding</Link></li>
              <li><Link href="/services" className="text-silver-light hover:text-light-primary">Content Strategy</Link></li>
              <li><Link href="/services" className="text-silver-light hover:text-light-primary">Video Editing</Link></li>
              <li><Link href="/services" className="text-silver-light hover:text-light-primary">Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-silver-light hover:text-light-primary">About Us</Link></li>
              <li><Link href="/portfolio" className="text-silver-light hover:text-light-primary">Portfolio</Link></li>
              <li><Link href="/testimonials" className="text-silver-light hover:text-light-primary">Testimonials</Link></li>
              <li><Link href="/contact" className="text-silver-light hover:text-light-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-silver-light hover:text-light-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-silver-light hover:text-light-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-silver-light hover:text-light-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-silver-light hover:text-light-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-silver-dark/20 pt-8 text-center">
          <p className="text-silver-light">
            © 2025 Social Elite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
