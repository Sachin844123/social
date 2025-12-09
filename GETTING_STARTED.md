# Getting Started Guide

## 🚀 Welcome to Social Elite!

This guide will help you get the website up and running in minutes.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ **Node.js 18+** installed ([Download here](https://nodejs.org/))
- ✅ **npm** or **yarn** package manager
- ✅ A code editor (VS Code recommended)
- ✅ Git (optional, for version control)

### Check Your Setup

```bash
node --version    # Should be 18.0.0 or higher
npm --version     # Should be 9.0.0 or higher
```

## 🎯 Quick Start (5 Minutes)

### Step 1: Navigate to Project

```bash
cd social-media-agency
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- TypeScript

**Time**: ~2 minutes

### Step 3: Start Development Server

```bash
npm run dev
```

**Output**:
```
▲ Next.js 16.0.8
- Local:        http://localhost:3000
- Ready in 2.5s
```

### Step 4: Open in Browser

Visit: **http://localhost:3000**

🎉 **You should see the homepage!**

## 📱 What You'll See

### Homepage
- Animated hero section
- Trust badges (100+ Influencers, etc.)
- Services preview
- Case studies
- Testimonials
- Contact form

### Navigation
- Home
- Services (with pricing)
- Portfolio (filterable)
- About (team story)
- Testimonials
- Contact

## 🎨 First Customizations

### 1. Change Company Name

**File**: `components/Navbar.tsx` (line 35)

```typescript
// Before
<Link href="/" className="text-2xl font-bold text-gradient">
  SOCIAL ELITE
</Link>

// After
<Link href="/" className="text-2xl font-bold text-gradient">
  YOUR COMPANY
</Link>
```

**Also update**: `components/Footer.tsx` (line 13)

### 2. Update Contact Information

**File**: `components/Contact.tsx`

```typescript
// Update email
<p className="text-silver-light">your@email.com</p>

// Update Instagram
<p className="text-silver-light">@your_handle</p>

// Update phone
<p className="text-silver-light">+1 (555) YOUR-NUMBER</p>
```

### 3. Modify Colors (Optional)

**File**: `tailwind.config.ts`

```typescript
colors: {
  dark: {
    primary: '#YOUR_DARK_COLOR',    // Main background
    secondary: '#YOUR_DARK_COLOR',  // Sections
  },
  // ... more colors
}
```

Save the file and see changes instantly!

## 🔧 Development Workflow

### Making Changes

1. **Edit files** in `components/` or `app/`
2. **Save** (Ctrl+S / Cmd+S)
3. **Browser auto-refreshes** with changes

### Hot Reload

Next.js automatically reloads when you save files. No need to restart the server!

### Stop Server

Press `Ctrl+C` in terminal

## 📦 Project Structure Explained

```
social-media-agency/
│
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Homepage (/)
│   ├── about/             # About page (/about)
│   ├── services/          # Services page (/services)
│   ├── portfolio/         # Portfolio page (/portfolio)
│   ├── testimonials/      # Testimonials page (/testimonials)
│   ├── contact/           # Contact page (/contact)
│   ├── layout.tsx         # Root layout (wraps all pages)
│   └── globals.css        # Global styles
│
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services grid
│   ├── CaseStudies.tsx    # Case study cards
│   ├── Testimonials.tsx   # Testimonial cards
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── FloatingCTA.tsx    # Floating button
│
├── public/                # Static files (images, etc.)
│
├── Documentation/         # Guides and references
│   ├── README.md
│   ├── BRANDING_KIT.md
│   ├── CUSTOMIZATION.md
│   ├── DEPLOYMENT.md
│   └── ... more
│
└── Configuration files
    ├── tailwind.config.ts  # Tailwind CSS config
    ├── next.config.ts      # Next.js config
    ├── tsconfig.json       # TypeScript config
    └── package.json        # Dependencies
```

## 🎨 Understanding the Design

### Color System

The website uses a **black & white gradient theme**:

- **Dark backgrounds**: #0D0D0D, #1A1A1A
- **Light text**: #F5F5F5
- **Silver accents**: #C0C0C0

### Effects

1. **Glass Effect**: Translucent cards with blur
2. **Neumorphic**: Soft 3D shadows
3. **Gradients**: Smooth color transitions
4. **Animations**: Fade-up, scale, glow

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold with gradient effect
- **Body**: Light color for readability

## 🎬 Testing Animations

### Scroll Effects

1. Scroll down the homepage
2. Watch elements fade in
3. Hover over cards to see effects

### Interactive Elements

- **Buttons**: Hover to see scale + glow
- **Cards**: Hover to see lift effect
- **Navbar**: Scroll to see glass effect

## 📱 Testing Responsive Design

### Desktop View (Default)

Open in browser at full width

### Tablet View

1. Open DevTools (F12)
2. Click device toolbar icon
3. Select iPad or similar

### Mobile View

1. Open DevTools (F12)
2. Select iPhone or similar
3. Test hamburger menu

## 🔍 Common Issues & Solutions

### Port 3000 Already in Use

```bash
# Kill the process
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Changes Not Showing

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server

### Build Errors

```bash
# Clean and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### TypeScript Errors

Most errors will show in your editor. To check all:

```bash
npx tsc --noEmit
```

## 📚 Next Steps

### 1. Customize Content

- Update text in components
- Change images (replace emojis)
- Modify services and pricing

### 2. Add Real Images

```typescript
import Image from 'next/image';

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### 3. Connect Contact Form

See `CUSTOMIZATION.md` for backend integration

### 4. Deploy

See `DEPLOYMENT.md` for hosting options

## 🎓 Learning Resources

### Documentation

- `README.md` - Project overview
- `BRANDING_KIT.md` - Design system
- `CUSTOMIZATION.md` - How to customize
- `DEPLOYMENT.md` - How to deploy
- `QUICK_REFERENCE.md` - Quick commands

### External Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Docs](https://react.dev/)

## 💡 Tips for Beginners

### 1. Start Small

Don't try to change everything at once. Start with:
- Company name
- Contact info
- One color

### 2. Use Browser DevTools

- Inspect elements (Right-click → Inspect)
- See CSS styles
- Test responsive design

### 3. Save Often

Changes auto-reload, so save frequently to see updates

### 4. Read Error Messages

Next.js shows helpful error messages in:
- Terminal
- Browser overlay

### 5. Use Version Control

```bash
git init
git add .
git commit -m "Initial setup"
```

## 🆘 Getting Help

### Check Documentation

1. Read `CUSTOMIZATION.md` for common changes
2. Check `QUICK_REFERENCE.md` for commands
3. Review `BRANDING_KIT.md` for design info

### Debug Steps

1. Check terminal for errors
2. Check browser console (F12)
3. Try restarting dev server
4. Clear cache and rebuild

### Common Questions

**Q: How do I add a new page?**
A: See "Adding New Pages" in `CUSTOMIZATION.md`

**Q: How do I change colors?**
A: Edit `tailwind.config.ts`

**Q: How do I deploy?**
A: See `DEPLOYMENT.md`

**Q: Where are the images?**
A: Currently using emoji placeholders. Add real images to `public/images/`

## ✅ Checklist

Before moving forward, make sure:

- [ ] Dev server is running
- [ ] Website loads at localhost:3000
- [ ] All pages are accessible
- [ ] Animations are working
- [ ] Responsive design works
- [ ] You can make simple edits

## 🎉 You're Ready!

You now have a fully functional, production-ready website running locally.

**Next**: Customize it to match your brand!

---

**Need help?** Check the other documentation files or review the code comments.

**Ready to deploy?** See `DEPLOYMENT.md`

**Want to customize?** See `CUSTOMIZATION.md`
