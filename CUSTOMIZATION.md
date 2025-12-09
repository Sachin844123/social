# Customization Guide

## 🎨 Changing Colors

### Update Tailwind Config

Edit `tailwind.config.ts`:

```typescript
colors: {
  dark: {
    primary: '#YOUR_COLOR',    // Main background
    secondary: '#YOUR_COLOR',  // Section backgrounds
    tertiary: '#YOUR_COLOR',   // Card backgrounds
  },
  light: {
    primary: '#YOUR_COLOR',    // Main text
    secondary: '#YOUR_COLOR',  // Secondary text
  },
  silver: {
    light: '#YOUR_COLOR',      // Accents
    DEFAULT: '#YOUR_COLOR',    // Default silver
    dark: '#YOUR_COLOR',       // Dark accents
  },
}
```

## 📝 Updating Content

### Company Name

Replace "SOCIAL ELITE" in:
- `components/Navbar.tsx` (line 35)
- `components/Footer.tsx` (line 13)
- `app/layout.tsx` (metadata)

### Tagline

Update in `components/Hero.tsx`:
```typescript
<h1>Your New Tagline Here</h1>
<p>Your subtitle here</p>
```

### Services

Edit `components/Services.tsx`:
```typescript
const services = [
  {
    icon: YourIcon,
    title: 'Your Service',
    description: 'Your description',
  },
  // Add more services
];
```

### Pricing Plans

Edit `app/services/page.tsx`:
```typescript
const pricingPlans = [
  {
    name: 'Plan Name',
    price: '$999',
    features: ['Feature 1', 'Feature 2'],
  },
];
```

## 🖼️ Adding Real Images

### Replace Emoji Placeholders

1. Add images to `public/images/` folder
2. Import Next.js Image component:

```typescript
import Image from 'next/image';

// Replace emoji with:
<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### Optimize Images

- Use WebP format
- Compress before uploading
- Recommended sizes:
  - Hero: 1920x1080
  - Cards: 800x600
  - Thumbnails: 400x300

## 🎬 Customizing Animations

### Change Animation Speed

In component files:
```typescript
transition={{ duration: 0.8 }} // Change duration
transition={{ delay: 0.2 }}    // Change delay
```

### Disable Animations

Remove Framer Motion wrappers:
```typescript
// Before
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Content
</motion.div>

// After
<div>
  Content
</div>
```

## 📱 Adding New Pages

1. Create new folder in `app/`:
```bash
mkdir app/your-page
```

2. Create `page.tsx`:
```typescript
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function YourPage() {
  return (
    <main>
      <Navbar />
      {/* Your content */}
      <Footer />
    </main>
  );
}
```

3. Add to navigation in `components/Navbar.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { name: 'Your Page', href: '/your-page' },
];
```

## 🔧 Adding Features

### Contact Form Backend

1. Install email service:
```bash
npm install @sendgrid/mail
```

2. Create API route `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  await sgMail.send({
    to: 'your@email.com',
    from: 'noreply@yourdomain.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
  
  return NextResponse.json({ success: true });
}
```

3. Update form in `components/Contact.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
```

### Add Calendly Integration

1. Install Calendly widget:
```bash
npm install react-calendly
```

2. Add to contact page:
```typescript
import { InlineWidget } from 'react-calendly';

<InlineWidget url="https://calendly.com/your-link" />
```

### Add Analytics

1. Install package:
```bash
npm install @vercel/analytics
```

2. Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🎨 Custom Components

### Create New Component

1. Create file in `components/`:
```typescript
'use client';

import { motion } from 'framer-motion';

export default function YourComponent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-24 bg-dark-secondary"
    >
      {/* Your content */}
    </motion.section>
  );
}
```

2. Import and use:
```typescript
import YourComponent from '@/components/YourComponent';

<YourComponent />
```

## 🌐 Internationalization

### Add Multiple Languages

1. Install next-intl:
```bash
npm install next-intl
```

2. Create translations in `messages/`:
```json
// messages/en.json
{
  "hero": {
    "title": "We Manage Your Social Presence",
    "subtitle": "You Focus On Success"
  }
}
```

3. Use in components:
```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations('hero');
<h1>{t('title')}</h1>
```

## 🎯 SEO Optimization

### Update Metadata

In each page file:
```typescript
export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: 'your, keywords, here',
  openGraph: {
    title: 'Your Page Title',
    description: 'Your page description',
    images: ['/og-image.jpg'],
  },
};
```

### Add Structured Data

```typescript
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Social Elite",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png"
  })}
</script>
```

## 🔍 Common Customizations

### Change Font

1. Update `app/layout.tsx`:
```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
});
```

### Add Dark/Light Mode Toggle

1. Install next-themes:
```bash
npm install next-themes
```

2. Implement theme switcher (optional for this design)

### Modify Navbar Behavior

In `components/Navbar.tsx`:
```typescript
// Change scroll threshold
setIsScrolled(window.scrollY > 100); // Change from 50

// Change transparency
className={isScrolled ? 'bg-dark-primary' : 'bg-transparent'}
```

## 📦 Adding CMS

### Sanity CMS Setup

1. Install Sanity:
```bash
npm install @sanity/client @sanity/image-url
```

2. Create Sanity project at sanity.io

3. Configure client:
```typescript
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
});
```

4. Fetch content:
```typescript
const posts = await client.fetch('*[_type == "post"]');
```

---

Need more help? Check the [Next.js Documentation](https://nextjs.org/docs)
