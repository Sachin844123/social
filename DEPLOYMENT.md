# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

## 🌐 Deploy to Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Connect your GitHub repository
   - Configure build settings
   - Deploy

## 🐳 Deploy with Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t social-elite .
   docker run -p 3000:3000 social-elite
   ```

## ☁️ Deploy to AWS

### Using AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### Using EC2

1. Launch an EC2 instance
2. Install Node.js
3. Clone your repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Run with PM2: `pm2 start npm --name "social-elite" -- start`

## 🔧 Environment Variables

If you add backend features, create a `.env.local` file:

```env
# Email Service (e.g., SendGrid)
SENDGRID_API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# CMS (if using Sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Calendly
NEXT_PUBLIC_CALENDLY_URL=your_calendly_url
```

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use Next.js Image component
   - Compress images
   - Use WebP format

2. **Code Splitting**
   - Already handled by Next.js
   - Use dynamic imports for heavy components

3. **Caching**
   - Configure proper cache headers
   - Use CDN for static assets

### After Deployment

1. **Monitor Performance**
   - Use Vercel Analytics
   - Google PageSpeed Insights
   - Lighthouse scores

2. **SEO**
   - Submit sitemap to Google Search Console
   - Add structured data
   - Optimize meta tags

## 🔒 Security Checklist

- [ ] Remove console.logs from production
- [ ] Set up HTTPS (automatic with Vercel)
- [ ] Configure CORS if needed
- [ ] Add rate limiting for forms
- [ ] Sanitize user inputs
- [ ] Keep dependencies updated

## 📱 Post-Deployment

1. **Test on Multiple Devices**
   - Mobile phones
   - Tablets
   - Desktop browsers

2. **Test Performance**
   - Run Lighthouse audit
   - Check loading times
   - Test animations

3. **Monitor**
   - Set up error tracking (Sentry)
   - Monitor uptime
   - Track analytics

## 🔄 Continuous Deployment

With Vercel or Netlify, every push to main branch automatically deploys:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Your site will automatically rebuild and deploy!

## 🆘 Troubleshooting

### Build Fails

- Check Node.js version (18+)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### Slow Performance

- Enable image optimization
- Use lazy loading
- Minimize bundle size
- Enable compression

### Styling Issues

- Check Tailwind config
- Verify CSS imports
- Clear browser cache

---

For more help, check [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
