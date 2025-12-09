# Quick Reference Card

## 🚀 Common Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Installation
npm install          # Install dependencies
npm install [package] # Add new package
```

## 📁 Project Structure

```
social-media-agency/
├── app/                    # Next.js pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── CaseStudies.tsx
│   ├── Contact.tsx
│   ├── FloatingCTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── public/                # Static files
├── tailwind.config.ts     # Tailwind config
└── package.json           # Dependencies
```

## 🎨 Color Variables

```typescript
// Tailwind classes
bg-dark-primary      // #0D0D0D
bg-dark-secondary    // #1A1A1A
bg-dark-tertiary     // #2A2A2A
text-light-primary   // #F5F5F5
text-light-secondary // #E5E5E5
text-silver-light    // #C0C0C0
text-silver          // #A8A8A8
text-silver-dark     // #808080
```

## 🎭 Common Classes

```css
/* Effects */
.glass-effect        /* Glassmorphism */
.neumorphic          /* Neumorphic shadow */
.text-gradient       /* Gradient text */
.glow-border         /* Glowing border */

/* Gradients */
bg-gradient-premium  /* Black gradient */
bg-gradient-silver   /* Silver gradient */

/* Animations */
animate-float        /* Floating animation */
animate-glow         /* Glow pulse */
animate-slide-up     /* Slide up */
```

## 🎬 Framer Motion Patterns

```typescript
// Fade up
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Scale on hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Scroll animation
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

## 📝 Common Edits

### Change Company Name
```typescript
// components/Navbar.tsx (line ~35)
<Link href="/">YOUR NAME</Link>

// components/Footer.tsx (line ~13)
<h3>YOUR NAME</h3>
```

### Update Colors
```typescript
// tailwind.config.ts
colors: {
  dark: { primary: '#YOUR_COLOR' },
  // ...
}
```

### Add New Page
```bash
# 1. Create folder
mkdir app/your-page

# 2. Create page.tsx
# app/your-page/page.tsx
export default function YourPage() {
  return <main>Content</main>
}

# 3. Add to navbar
# components/Navbar.tsx
{ name: 'Your Page', href: '/your-page' }
```

### Modify Services
```typescript
// components/Services.tsx
const services = [
  {
    icon: YourIcon,
    title: 'Your Service',
    description: 'Description',
  },
]
```

### Update Pricing
```typescript
// app/services/page.tsx
const pricingPlans = [
  {
    name: 'Plan Name',
    price: '$999',
    features: ['Feature 1', 'Feature 2'],
  },
]
```

## 🔧 Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

### Styling Not Working
```bash
# Rebuild Tailwind
npm run build
# Clear browser cache
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

## 📦 Adding Features

### Install Package
```bash
npm install package-name
```

### Add Icon
```typescript
import { IconName } from 'lucide-react';
<IconName size={24} />
```

### Add Animation
```typescript
import { motion } from 'framer-motion';
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Content
</motion.div>
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Build Locally
```bash
npm run build
npm start
```

## 📊 File Sizes

- Homepage: ~50KB (gzipped)
- Components: ~30KB each
- Total bundle: ~200KB (optimized)

## 🎯 Performance Tips

1. Use Next.js Image component
2. Lazy load heavy components
3. Minimize animation duration
4. Use static generation
5. Enable compression

## 🔗 Important Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Quick Contacts

- Project: Social Elite
- Tech: Next.js 15 + Tailwind + Framer Motion
- Status: Production Ready ✅

## 🎨 Design Tokens

```typescript
// Spacing
xs: 8px    sm: 16px   md: 24px
lg: 32px   xl: 48px   2xl: 64px

// Border Radius
sm: 8px    md: 16px   lg: 24px
xl: 32px   full: 9999px

// Font Sizes
sm: 14px   base: 16px  lg: 18px
xl: 20px   2xl: 24px   3xl: 30px
4xl: 36px  5xl: 48px   6xl: 60px

// Transitions
fast: 200ms   normal: 300ms   slow: 500ms
```

## 🎬 Animation Timing

```typescript
// Delays
stagger: 0.1s per item
page-load: 0.2s between elements
hover: instant (0s)

// Durations
fade: 0.3s
slide: 0.5s
scale: 0.2s
```

## 🔍 Search & Replace

Common find/replace operations:

```
Find: "Social Elite"
Replace: "Your Company"

Find: "#0D0D0D"
Replace: "Your Dark Color"

Find: "contact@socialelite.agency"
Replace: "your@email.com"
```

---

**Keep this card handy for quick reference!**
