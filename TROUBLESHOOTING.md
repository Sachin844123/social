# Troubleshooting Guide

## 🔍 Common Issues & Solutions

### Browser Console Errors (Development Only)

#### ❌ "Could not establish connection. Receiving end does not exist"

**What it is**: Browser extension trying to communicate with a disconnected service

**Impact**: None - cosmetic only

**Solution**: 
- Ignore it (doesn't affect functionality)
- Or disable browser extensions temporarily
- Won't appear in production

---

#### ❌ Hydration Mismatch Warning

**Error Message**:
```
A tree hydrated but some attributes of the server rendered HTML 
didn't match the client properties
```

**What it is**: React detecting differences between server and client rendering

**Impact**: Usually cosmetic, but can cause layout shifts

**Solution**: ✅ Already fixed in the code
- Components now check if mounted before rendering animations
- Hero and Navbar components updated

**If you see it again**:
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server

---

#### ❌ Browser Extension Attributes

**Attributes like**:
- `data-lt-installed="true"` (Language tools)
- `wotdisconnected="true"` (Web of Trust)
- `data-gr-ext-installed` (Grammarly)

**What it is**: Browser extensions injecting attributes into HTML

**Impact**: None - React warning only

**Solution**:
- Ignore (doesn't affect functionality)
- Test in incognito mode (no extensions)
- Won't appear in production build

---

#### ✅ "[Fast Refresh] rebuilding" / "[Fast Refresh] done"

**What it is**: Next.js hot reload working correctly

**Impact**: Positive - shows dev server is working

**Solution**: No action needed - this is normal!

---

#### ✅ "[HMR] connected"

**What it is**: Hot Module Replacement connected

**Impact**: Positive - enables instant updates

**Solution**: No action needed - this is normal!

---

### Build Issues

#### ❌ Build Fails with Tailwind Errors

**Error**: "Cannot apply unknown utility class"

**Solution**:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

#### ❌ Port 3000 Already in Use

**Error**: "Port 3000 is already in use"

**Solution**:
```bash
# Option 1: Kill the process
npx kill-port 3000

# Option 2: Use different port
npm run dev -- -p 3001
```

---

#### ❌ Module Not Found

**Error**: "Cannot find module 'framer-motion'"

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

### Styling Issues

#### ❌ Styles Not Applying

**Symptoms**: Changes to Tailwind classes don't show

**Solution**:
```bash
# 1. Hard refresh browser
Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

# 2. Clear Next.js cache
rm -rf .next

# 3. Restart dev server
npm run dev
```

---

#### ❌ Custom Colors Not Working

**Issue**: Colors from `tailwind.config.ts` not applying

**Solution**:
1. Check syntax in `tailwind.config.ts`
2. Restart dev server
3. Use format: `bg-dark-primary` not `bg-dark.primary`

---

### Animation Issues

#### ❌ Animations Not Smooth

**Symptoms**: Janky or stuttering animations

**Solution**:
1. Check browser performance
2. Reduce animation complexity
3. Use `will-change` CSS property:
```css
.animated-element {
  will-change: transform, opacity;
}
```

---

#### ❌ Framer Motion Errors

**Error**: "motion.div is not a function"

**Solution**:
```bash
# Reinstall framer-motion
npm uninstall framer-motion
npm install framer-motion@latest
```

---

### TypeScript Issues

#### ❌ Type Errors

**Error**: "Property 'X' does not exist on type 'Y'"

**Solution**:
```bash
# Check types
npx tsc --noEmit

# If errors persist, add type assertion
const value = something as YourType;
```

---

#### ❌ Module Has No Exported Member

**Error**: "Module has no exported member 'X'"

**Solution**:
1. Check import statement
2. Verify export in source file
3. Restart TypeScript server in VS Code:
   - `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

---

### Performance Issues

#### ❌ Slow Build Times

**Symptoms**: Build takes > 2 minutes

**Solution**:
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

---

#### ❌ Slow Page Load

**Symptoms**: Pages take long to load in development

**Solution**:
1. This is normal in dev mode
2. Test production build:
```bash
npm run build
npm start
```
3. Production is much faster

---

### Deployment Issues

#### ❌ Vercel Build Fails

**Error**: Build fails on Vercel but works locally

**Solution**:
1. Check Node.js version matches (18+)
2. Verify all dependencies in `package.json`
3. Check build logs for specific errors
4. Try building locally first:
```bash
npm run build
```

---

#### ❌ Environment Variables Not Working

**Issue**: `.env.local` variables not loading

**Solution**:
1. Prefix with `NEXT_PUBLIC_` for client-side
2. Restart dev server after adding variables
3. On Vercel: Add in Project Settings → Environment Variables

---

### Mobile Issues

#### ❌ Layout Broken on Mobile

**Symptoms**: Elements overflow or misaligned

**Solution**:
1. Test in browser DevTools mobile view
2. Check responsive classes:
   - `sm:` for 640px+
   - `md:` for 768px+
   - `lg:` for 1024px+
3. Use `overflow-hidden` on parent containers

---

#### ❌ Touch Events Not Working

**Issue**: Hover effects don't work on mobile

**Solution**:
This is expected - hover doesn't exist on touch devices.
Add touch-specific interactions:
```typescript
<div 
  onTouchStart={() => setActive(true)}
  onTouchEnd={() => setActive(false)}
>
```

---

## 🔧 General Debugging Steps

### 1. Check Browser Console
```
F12 → Console tab
Look for red errors (not warnings)
```

### 2. Check Terminal
```
Look for error messages in terminal where dev server runs
Red text indicates errors
```

### 3. Hard Refresh
```
Windows: Ctrl+Shift+R
Mac: Cmd+Shift+R
```

### 4. Clear Everything
```bash
# Nuclear option - clears all caches
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### 5. Test Production Build
```bash
npm run build
npm start
```

---

## 🆘 Still Having Issues?

### Checklist

- [ ] Node.js version 18+ installed
- [ ] All dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser cache cleared
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] Build succeeds (`npm run build`)

### Debug Mode

Enable verbose logging:
```bash
# Set debug mode
set DEBUG=* (Windows)
export DEBUG=* (Mac/Linux)

# Run dev server
npm run dev
```

### Get Help

1. Check documentation files
2. Review error messages carefully
3. Search error message online
4. Check Next.js documentation
5. Check Framer Motion documentation

---

## ✅ Known Non-Issues

These are **SAFE TO IGNORE**:

✅ Browser extension errors
✅ "Fast Refresh" messages
✅ "[HMR] connected"
✅ Hydration warnings (if fixed)
✅ `data-*` attributes from extensions

These **ONLY appear in development** and won't affect production.

---

## 🎯 Production Checklist

Before deploying, verify:

- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] All pages load correctly
- [ ] Responsive design works
- [ ] Animations are smooth
- [ ] Forms work (if backend connected)
- [ ] Images load (if added)
- [ ] SEO meta tags present

---

## 📊 Performance Tips

### Optimize Images
```typescript
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-fold images
/>
```

### Lazy Load Components
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

### Reduce Animation Complexity
```typescript
// Instead of complex animations
transition={{ type: 'spring', stiffness: 100 }}

// Use simple transitions
transition={{ duration: 0.3 }}
```

---

## 🔍 Diagnostic Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Check for outdated packages
npm outdated

# Check for security issues
npm audit

# Verify TypeScript
npx tsc --noEmit

# Check bundle size
npm run build
# Look at "Route (app)" output
```

---

## 📝 Common Fixes Summary

| Issue | Quick Fix |
|-------|-----------|
| Hydration warning | Already fixed in code |
| Extension errors | Ignore (dev only) |
| Port in use | `npx kill-port 3000` |
| Styles not updating | Hard refresh browser |
| Build fails | `rm -rf .next && npm run build` |
| Module not found | `npm install` |
| Slow performance | Test production build |

---

**Remember**: Most console warnings in development are harmless and won't appear in production!

**Last Updated**: December 9, 2025
