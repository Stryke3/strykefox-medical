# Deployment Guide for strykefox.com

## Prerequisites
- Node.js 18+ installed
- Vercel account
- Access to strykefox.com domain DNS settings

## Step 1: Install Dependencies
```bash
cd "/Volumes/WORKSPACE/poseidon 2/strykefox-refactor"
npm install
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Connect your GitHub repository or upload the project
4. Configure build settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## Step 3: Configure Custom Domain

### In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add `strykefox.com`
3. Vercel will provide DNS records

### In Your Domain Registrar:
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add the following DNS records:
   - Type: `CNAME`
   - Name: `@` (or `strykefox.com`)
   - Value: `cname.vercel-dns.com`
   - TTL: 300 (or default)

3. For www subdomain (optional):
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

## Step 4: Verify Deployment
1. Wait for DNS propagation (5-30 minutes)
2. Visit `https://strykefox.com`
3. Test all pages:
   - Homepage: `https://strykefox.com`
   - NSI Page: `https://strykefox.com/nsi`

## Environment Variables (if needed)
If you need environment variables, add them in Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add any required variables

## SSL Certificate
Vercel automatically provides SSL certificates for custom domains.

## Troubleshooting
- **DNS not propagating**: Wait up to 48 hours for full propagation
- **Build errors**: Check the Vercel build logs
- **404 errors**: Verify the `vercel.json` configuration
- **Images not loading**: Ensure images are in `public/images/` directory

## Post-Deployment Checklist
- [ ] Homepage loads correctly
- [ ] NSI drill-down page works
- [ ] All images load properly
- [ ] Navigation links work
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active
- [ ] Domain redirects work (www to non-www)

## Continuous Deployment
If using GitHub integration, Vercel will automatically deploy on pushes to the main branch.

## Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
