# Band Website Framework - Setup Guide

This guide will help you transform this template into a custom band website in under 30 minutes.

## Quick Start (10 Minutes)

### 1. Clone and Install

```bash
git clone <this-repository>
cd band-website-framework
npm install
```

### 2. Basic Configuration

```bash
# Copy the sample configuration
cp band.config.sample.ts band.config.ts

# Edit with your band information
# Update at minimum: bandName, tagline, description, contact.email
```

### 3. Add Your Media Assets

- Replace `/public/hero-bg.jpg` with your hero image (1920x1080+)
- Add 4 gallery images to `/public/gallery/` (name them gallery-1.jpg through gallery-4.jpg)
- Replace `/public/logo.png` with your logo
- Update `/public/favicon.ico` with your icon

### 4. Start Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website!

## Complete Setup (30 Minutes)

### Configuration File

Edit `band.config.ts` to customize your site:

#### Core Settings (Most Important)

```typescript
core: {
  primaryColorPalette: {
    primary: 'amber-900',    // Your main brand color
    secondary: 'teal-800',   // Accent color
    accent: 'purple-600',    // Highlight color
    // ...
  },
  typographyPair: {
    headingFont: 'Inter',    // Choose: Inter, Playfair Display, Montserrat, etc.
    bodyFont: 'Inter',       // Choose: Inter, Source Sans Pro, Open Sans, etc.
    fontScale: 'balanced'    // compact | balanced | spacious
  },
  heroBackground: {
    type: 'image',           // image | video | gradient | hybrid
    source: '/hero-bg.jpg',  // Path to your hero background
    overlayIntensity: 0.4    // 0-1, darkness of overlay
  },
  animationIntensity: 'full' // minimal | moderate | full
  // ... see band.config.sample.ts for all options
}
```

#### Content Settings

```typescript
content: {
  bandName: 'Your Band Name',
  tagline: 'Your Musical Journey',
  description: {
    short: 'Brief description for SEO',
    medium: 'About section description',
    long: 'Detailed about page content'
  },
  contact: {
    email: 'contact@yourband.com',
    phone: '+1 (555) 123-4567' // Optional
  },
  social: {
    facebook: 'https://facebook.com/yourband',
    instagram: 'https://instagram.com/yourband',
    // ... add all your social links
  }
}
```

### Media Assets Setup

#### Required Assets

1. **Hero Background** (`/public/hero-bg.jpg`)
   - 1920x1080 or higher resolution
   - Should work well with dark overlay

2. **Gallery Images** (`/public/gallery/`)
   - `gallery-1.jpg` through `gallery-4.jpg` (or more)
   - 1200x800 pixels (3:2 aspect ratio)
   - Web-optimized quality

3. **Logo Files**
   - `/public/logo.png` - Main logo
   - `/public/favicon.ico` - Site icon

4. **Background Videos** (Optional)
   - `/public/videos/about-bg-1.mp4`
   - `/public/videos/shows-bg-1.mp4`
   - 1920x1080, MP4 format, under 5MB each

### Genre Presets

Choose a preset that matches your music style:

```typescript
import {
  edmPopPreset,
  indieRockPreset,
  metalRockPreset,
} from "./band.config.sample";

// Use a preset as your starting point
export const bandConfig = edmPopPreset; // Then customize from here
```

**EDM/Pop:** Bright colors, fast animations, glow effects
**Indie Rock:** Warm tones, moderate effects, textured overlays
**Metal/Rock:** Sharp edges, high contrast, dramatic shadows

### Advanced Customization

#### Color Customization

Use Tailwind color classes or hex values:

```typescript
primaryColorPalette: {
  primary: 'amber-900',     // Tailwind class
  secondary: '#0f766e',     // Hex value
  accent: 'purple-600',     // Tailwind class
  // ...
}
```

#### Animation Control

```typescript
core: {
  animationIntensity: 'full',        // Overall animation level
},
genre: {
  motionSpeedMultiplier: 1.5,        // 0.5-2.0, speed of all animations
  particleEffectsDensity: 0.8,       // 0-1, atmospheric effects
  glowIntensity: 0.3,                // 0-1, neon/glow effects
}
```

#### Typography

```typescript
typographyPair: {
  headingFont: 'Playfair Display',   // For dramatic effect
  bodyFont: 'Source Sans Pro',       // For readability
  fontScale: 'spacious'              // More breathing room
}
```

## Deployment

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Production Deployment

#### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm run build
# Upload 'out' directory to Netlify
```

#### Docker

```bash
docker build -t band-website .
docker run -p 3000:3000 band-website
```

## Troubleshooting

### Common Issues

#### Images Not Loading

- Check file paths in `band.config.ts`
- Ensure images are in `/public/` directory
- Verify image file names match configuration

#### Fonts Not Working

- Check if font name is spelled correctly
- Ensure font is available in your CSS
- Fallback fonts will be used if custom font fails

#### Videos Not Playing

- Ensure videos are MP4 format with H.264 codec
- Keep file sizes under 5MB
- Test autoplay across different browsers
- Mobile devices may not autoplay to save bandwidth

#### Configuration Errors

- Check console for validation errors
- Ensure all required fields are filled
- Use provided genre presets as reference

### Performance Optimization

#### Image Optimization

- Use WebP format when possible
- Compress images (80-90% quality for JPG)
- Consider using a CDN for media assets

#### Video Optimization

- Keep videos under 5MB
- Use appropriate bitrates for web
- Consider providing WebM alternatives

#### General

- Enable gzip compression on your server
- Use a CDN for static assets
- Monitor Core Web Vitals

## Support

### Configuration Reference

- See `config/parameter-schema.json` for complete parameter documentation
- Check `band.config.sample.ts` for examples
- Review `MEDIA_ASSETS_GUIDE.md` for asset specifications

### Development

- This framework is built with Next.js 15, React 19, and TypeScript
- Uses Tailwind CSS for styling and Framer Motion for animations
- Database integration available via Prisma (optional)

### Queen Claude Integration

This framework is optimized for Queen Claude's design system tools. Queen Claude can automatically configure all parameters based on your band's style and requirements.

## Next Steps

1. **Basic Setup**: Follow the Quick Start guide
2. **Customize**: Edit configuration and add your media
3. **Test**: Check all features work with your content
4. **Deploy**: Push to your hosting platform
5. **Iterate**: Use Queen Claude or manual editing to refine

Your band website should now be ready to rock! 🎸
