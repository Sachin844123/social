import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0D0D0D',
          secondary: '#1A1A1A',
          tertiary: '#2A2A2A',
        },
        light: {
          primary: '#F5F5F5',
          secondary: '#E5E5E5',
        },
        silver: {
          light: '#C0C0C0',
          DEFAULT: '#A8A8A8',
          dark: '#808080',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #2A2A2A 100%)',
        'gradient-silver': 'linear-gradient(135deg, #2A2A2A 0%, #404040 50%, #5A5A5A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(192, 192, 192, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(192, 192, 192, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
