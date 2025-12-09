# Social Elite - Premium Social Media Management Agency

A modern, luxury-style agency website for managing social media accounts for influencers, celebrities, and businesses. Built with Next.js, Tailwind CSS, and Framer Motion.

> 📚 **New here?** Check out [INDEX.md](./INDEX.md) for a complete guide to all documentation!

## 🎨 Design Theme

**Black & White Gradient Theme** with premium, cinematic feel:
- Primary Colors: Black (#0D0D0D), Dark Gray (#1A1A1A), Silver (#C0C0C0)
- Gradient transitions throughout
- Neumorphism + Glassmorphism effects
- Luxury brand aesthetic

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations (fade-up, parallax, slide-in)
- **Modern UI**: Glass effects, neumorphic cards, gradient backgrounds
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Next.js 15 with App Router

## 📍 Pages

1. **Homepage** - Hero section, services preview, case studies, testimonials
2. **Services** - Detailed service offerings with pricing plans
3. **Portfolio** - Filterable showcase of client work
4. **About** - Team story, values, and milestones
5. **Testimonials** - Client success stories
6. **Contact** - Contact form and booking options

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd social-media-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Brand Guidelines

### Color Palette

```css
/* Dark Shades */
--dark-primary: #0D0D0D
--dark-secondary: #1A1A1A
--dark-tertiary: #2A2A2A

/* Light Shades */
--light-primary: #F5F5F5
--light-secondary: #E5E5E5

/* Silver Accents */
--silver-light: #C0C0C0
--silver-default: #A8A8A8
--silver-dark: #808080
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effect
- **Body**: Light primary color (#F5F5F5)
- **Accents**: Silver tones

### UI Components

- **Glass Effect**: Translucent backgrounds with blur
- **Neumorphic**: Soft shadows for depth
- **Gradients**: Black → Charcoal → Silver
- **Hover Effects**: Scale, glow, and color transitions

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Project Structure

```
social-media-agency/
├── app/
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   ├── testimonials/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CaseStudies.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── public/
├── tailwind.config.ts
└── package.json
```

## 🎯 Key Features to Implement

### Optional Enhancements

1. **CMS Integration**: Add Sanity or Strapi for content management
2. **Calendly Integration**: Embed booking widget
3. **Analytics**: Google Analytics or Vercel Analytics
4. **Contact Form Backend**: Connect to email service (SendGrid, Resend)
5. **Image Optimization**: Add real images with Next.js Image component
6. **Cursor Effects**: Custom cursor spotlight on desktop
7. **Sound Effects**: Optional navigation sounds
8. **Video Backgrounds**: Add cinematic video backgrounds

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Animation Details

- **Page Load**: Fade-up animations with stagger
- **Scroll**: Elements animate into view
- **Hover**: Scale and glow effects
- **Transitions**: Smooth 200-300ms durations

## 📄 License

This project is created for demonstration purposes.

## 🤝 Support

For questions or support, contact: contact@socialelite.agency

---

Built with ❤️ using Next.js and Tailwind CSS
