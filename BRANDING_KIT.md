# Social Elite - Branding & UI Kit

## 🎨 Color Palette

### Primary Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Dark Primary | `#0D0D0D` | Main background |
| Dark Secondary | `#1A1A1A` | Section backgrounds |
| Dark Tertiary | `#2A2A2A` | Card backgrounds |
| Light Primary | `#F5F5F5` | Main text |
| Light Secondary | `#E5E5E5` | Secondary text |
| Silver Light | `#C0C0C0` | Accents, icons |
| Silver Default | `#A8A8A8` | Borders, dividers |
| Silver Dark | `#808080` | Subtle accents |

### Gradients

```css
/* Premium Gradient */
background: linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #2A2A2A 100%);

/* Silver Gradient */
background: linear-gradient(135deg, #2A2A2A 0%, #404040 50%, #5A5A5A 100%);

/* Text Gradient */
background: linear-gradient(to right, #F5F5F5, #C0C0C0, #F5F5F5);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## 📝 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Sizes

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 3.5rem - 4.5rem | 700 | 1.1 |
| H2 (Section) | 2.5rem - 3rem | 700 | 1.2 |
| H3 (Card Title) | 1.5rem - 2rem | 700 | 1.3 |
| Body Large | 1.25rem | 400 | 1.6 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 | 1.5 |

### Text Styles

```css
/* Gradient Text */
.text-gradient {
  background: linear-gradient(to right, #F5F5F5, #C0C0C0, #F5F5F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Primary Text */
color: #F5F5F5;

/* Secondary Text */
color: #E5E5E5;

/* Accent Text */
color: #C0C0C0;
```

## 🎭 UI Components

### Buttons

#### Primary Button
```css
background: linear-gradient(135deg, #2A2A2A 0%, #404040 50%, #5A5A5A 100%);
color: #F5F5F5;
padding: 1rem 2rem;
border-radius: 9999px;
font-weight: 600;
transition: all 0.3s;

/* Hover */
box-shadow: 0 0 15px rgba(192, 192, 192, 0.3);
transform: scale(1.05);
```

#### Secondary Button
```css
background: rgba(26, 26, 26, 0.7);
backdrop-filter: blur(10px);
border: 1px solid rgba(192, 192, 192, 0.1);
color: #F5F5F5;
padding: 1rem 2rem;
border-radius: 9999px;
```

### Cards

#### Glass Effect Card
```css
background: rgba(26, 26, 26, 0.7);
backdrop-filter: blur(10px);
border: 1px solid rgba(192, 192, 192, 0.1);
border-radius: 1rem;
padding: 2rem;
```

#### Neumorphic Card
```css
background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
box-shadow: 5px 5px 10px #0a0a0a, -5px -5px 10px #242424;
border-radius: 1rem;
padding: 2rem;
```

### Effects

#### Glow Border
```css
box-shadow: 0 0 15px rgba(192, 192, 192, 0.3);
```

#### Hover Scale
```css
transition: transform 0.3s ease;

/* Hover */
transform: scale(1.05);
```

## 🎬 Animations

### Keyframes

```css
/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Glow Animation */
@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(192, 192, 192, 0.5); }
  100% { box-shadow: 0 0 20px rgba(192, 192, 192, 0.8); }
}

/* Slide Up */
@keyframes slideUp {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
```

### Framer Motion Variants

```typescript
// Fade Up
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

// Scale In
const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

// Stagger Children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## 🖼️ Spacing System

| Size | Value | Usage |
|------|-------|-------|
| xs | 0.5rem (8px) | Tight spacing |
| sm | 1rem (16px) | Small gaps |
| md | 1.5rem (24px) | Default spacing |
| lg | 2rem (32px) | Section padding |
| xl | 3rem (48px) | Large sections |
| 2xl | 4rem (64px) | Hero sections |

## 📐 Border Radius

| Size | Value | Usage |
|------|-------|-------|
| sm | 0.5rem | Small elements |
| md | 1rem | Cards, inputs |
| lg | 1.5rem | Large cards |
| xl | 2rem | Hero elements |
| full | 9999px | Buttons, badges |

## 🎯 Icons

- **Library**: Lucide React
- **Size**: 20px - 24px (default), 48px (features)
- **Color**: Silver Light (#C0C0C0)
- **Hover**: Light Primary (#F5F5F5)

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 🎨 Design Principles

1. **Minimalism**: Clean, uncluttered layouts
2. **Contrast**: Strong black/white contrast for readability
3. **Depth**: Layered effects with glass and neumorphism
4. **Motion**: Smooth, purposeful animations
5. **Luxury**: Premium feel through gradients and effects
6. **Consistency**: Uniform spacing and styling

## 🌟 Brand Voice

- **Confident**: Results-oriented language
- **Professional**: Industry expertise
- **Creative**: Innovative solutions
- **Supportive**: Client-focused approach
- **Data-Driven**: Measurable outcomes

## 📋 Usage Guidelines

### Do's
✅ Use gradient text for headlines
✅ Apply glass effects for overlays
✅ Maintain consistent spacing
✅ Use smooth animations (0.3s - 0.8s)
✅ Keep contrast high for accessibility

### Don'ts
❌ Don't use pure white (#FFFFFF)
❌ Don't mix too many effects
❌ Don't use jarring animations
❌ Don't compromise readability
❌ Don't ignore mobile responsiveness

---

**Brand Name**: Social Elite
**Tagline**: "We Manage Your Social Presence | You Focus On Success"
**Industry**: Social Media Management
**Target**: Influencers, Celebrities, Brands
