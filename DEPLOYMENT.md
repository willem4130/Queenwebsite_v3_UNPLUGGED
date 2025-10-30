# Deployment Guide

## Prerequisites

- GitHub account
- Vercel account
- PostgreSQL database (Supabase, Railway, or Neon recommended)

## Vercel Deployment

### 1. Database Setup

Choose a PostgreSQL provider:

#### Option A: Supabase (Recommended)

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy the connection string

#### Option B: Railway

1. Create account at [railway.app](https://railway.app)
2. Create new PostgreSQL database
3. Copy the connection string

#### Option C: Neon

1. Create account at [neon.tech](https://neon.tech)
2. Create new database
3. Copy the connection string

### 2. Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables:
     - `DATABASE_URL`: Your PostgreSQL connection string
     - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
     - `NEXTAUTH_URL`: Your production URL (e.g., https://yourdomain.com)

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

4. **Run Migrations**

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Link to your project
   vercel link

   # Run migrations in production
   vercel env pull .env.production.local
   npx prisma migrate deploy
   npx prisma db seed
   ```

### 3. Post-Deployment

1. **Update Admin Password**
   - Login at `/admin` with default credentials
   - Change password immediately

2. **Configure Domain**
   - Add custom domain in Vercel settings
   - Update `NEXTAUTH_URL` environment variable

3. **Enable Analytics** (Optional)
   - Enable Vercel Analytics in project settings

## Other Platforms

### Netlify

1. Build command: `npm run build && npx prisma generate`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Self-Hosting

1. **Build**

   ```bash
   npm run build
   ```

2. **Start**

   ```bash
   NODE_ENV=production npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "band-website" -- start
   pm2 save
   pm2 startup
   ```

## Environment Variables

Required for production:

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="generate-secure-secret"

# Optional: OAuth (if using social login)
GITHUB_ID=""
GITHUB_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Optional: Email (for magic links)
EMAIL_SERVER=""
EMAIL_FROM=""

# Optional: Media uploads
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

## Security Checklist

- [ ] Change default admin password
- [ ] Set strong `NEXTAUTH_SECRET`
- [ ] Enable HTTPS
- [ ] Set up database backups
- [ ] Configure rate limiting
- [ ] Review security headers
- [ ] Enable 2FA for admin accounts (future feature)

## Monitoring

1. **Uptime Monitoring**
   - Use services like UptimeRobot or Pingdom

2. **Error Tracking**
   - Install Sentry for error monitoring

   ```bash
   npm install @sentry/nextjs
   npx @sentry/wizard -i nextjs
   ```

3. **Analytics**
   - Vercel Analytics (built-in)
   - Google Analytics
   - Plausible Analytics

## Backup Strategy

1. **Database Backups**
   - Most providers offer automatic backups
   - Set up regular pg_dump if self-hosting

2. **Media Backups**
   - If using local storage, backup regularly
   - Consider using cloud storage (S3, Cloudinary)

## Troubleshooting

### Build Failures

- Check Node.js version (18+ required)
- Verify all environment variables are set
- Check build logs for specific errors

### Database Connection Issues

- Verify DATABASE_URL format
- Check SSL requirements (`?sslmode=require`)
- Ensure database is accessible from deployment platform

### Authentication Issues

- Verify NEXTAUTH_URL matches your domain
- Check NEXTAUTH_SECRET is set
- Ensure callback URLs are configured correctly
