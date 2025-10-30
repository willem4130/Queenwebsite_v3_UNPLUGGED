# 🎸 Band Website Boilerplate

A modern, performant band website boilerplate built with Next.js 15, TypeScript, and Tailwind CSS. Features a flexible content management system ready for headless CMS integration.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion
- **Content Management Ready**: File-based content system with clear migration path to headless CMS
- **Multi-Band Support**: Template structure supports multiple band websites
- **16 Strategic Parameters**: Control 100% of visual brand identity
- **Genre Presets**: EDM/Pop, Indie Rock, Metal/Raw Rock templates
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Performance Optimized**: Fast loading, smooth animations, optimized images
- **SEO Ready**: Meta tags, Open Graph, structured data support
- **Type Safe**: Full TypeScript coverage with strict typing
- **Developer Friendly**: Modern tooling, clear documentation

## 🚀 Quick Start

### Using the Setup Script (Recommended)

```bash
# Clone the repository
git clone https://github.com/yourusername/band-website-boilerplate.git
cd band-website-boilerplate

# Install dependencies
npm install

# Run the interactive setup wizard
./scripts/setup-band.sh

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your band website! 🎤

### Manual Setup

1. Copy the template content:

```bash
cp -r content/bands/template-band content/bands/your-band-name
```

2. Update the JSON files in `content/bands/your-band-name/`:
   - `band-profile.json` - Band name, tagline, theme
   - `data/about.json` - Band description and story
   - `data/social.json` - Social media links
   - `data/contact.json` - Contact information
   - `data/shows.json` - Tour dates

3. Create `.env.local`:

```bash
cp .env.example .env.local
# Update NEXT_PUBLIC_BAND_ID with your band ID
```

4. Add your media assets and start development!

## 📁 Project Structure

```
├── src/
│   ├── app/               # Next.js app directory
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks (useContent, useConfig)
│   ├── lib/               # Content loader and utilities
│   └── types/             # TypeScript type definitions
├── content/
│   └── bands/
│       └── template-band/ # Template content structure
│           ├── band-profile.json
│           ├── assets/    # Media assets
│           │   ├── backgrounds/
│           │   ├── gallery/
│           │   └── logos/
│           └── data/      # Content data files
├── config/                # Configuration system
├── public/                # Static assets
└── scripts/               # Utility scripts
```

## 🎨 Configuration System

### Core Developer Controls (8 Parameters)

The **top 20%** of parameters that drive **80%** of visual impact:

1. **Primary Color Palette** - Brand colors throughout the site
2. **Typography Pair** - Heading and body font combinations
3. **Hero Background** - Main hero section styling
4. **Section Background Strategy** - How each section is styled
5. **Animation Intensity** - Overall motion and effects level
6. **Color Temperature** - Warm/cool bias for entire palette
7. **Contrast Level** - Overall contrast across components
8. **Border Radius Scale** - Sharp to rounded aesthetic

### Genre Flexibility (8 Parameters)

Fine-tuning controls for different music genres:

- Particle Effects Density
- Glow/Neon Intensity
- Texture Overlays
- Motion Speed Multiplier
- Shadow Intensity
- Background Focus Effect
- Color Saturation Level
- Layout Spacing

## 🎨 Content Customization

### Quick Customization

Edit `content/bands/your-band/band-profile.json`:

```json
{
  "id": "your-band",
  "name": "Your Band Name",
  "tagline": "Your Musical Journey",
  "theme": {
    "primaryColor": "amber-900",
    "secondaryColor": "teal-800",
    "accentColor": "purple-600",
    "animationIntensity": "full"
  }
}
```

### Content Sections

- **Hero**: Eye-catching landing with band name and tagline
- **About**: Band story, members, achievements
- **Shows**: Upcoming and past tour dates
- **Gallery**: Photo gallery with lightbox
- **Contact**: Contact info and social links

## 🔌 CMS Integration

Designed for easy migration to any headless CMS:

### Supported Platforms

- **Strapi**: Direct content type mapping
- **Payload CMS**: TypeScript-native, multi-tenant ready
- **Contentful**: API-ready structure
- **Sanity**: Schema-compatible format
- **Directus**: Open-source data platform
- **Custom API**: JSON endpoints ready

### Migration Path

1. Content structure matches common CMS patterns
2. TypeScript interfaces ready for API types
3. Content loader abstraction for easy switching
4. Environment-based content source configuration

```typescript
// Switch between content sources
NEXT_PUBLIC_CONTENT_SOURCE = file; // Current: File-based
NEXT_PUBLIC_CONTENT_SOURCE = cms; // Future: Headless CMS
NEXT_PUBLIC_CONTENT_SOURCE = api; // Future: Custom API
```

## 📦 Media Guidelines

### Images

- **Hero Background**: 1920x1080 minimum, JPG/PNG
- **Gallery Images**: 16:9 aspect ratio, 1200x675 minimum
- **Logo**: PNG with transparency, 500px width minimum
- **Favicon**: 32x32px ICO format

### Videos

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 preferred
- **File Size**: < 20MB for web performance

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Environment Variables

Create `.env.local` from `.env.example`:

```env
NEXT_PUBLIC_BAND_ID=your-band
NEXT_PUBLIC_CONTENT_SOURCE=file
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret
```

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/band-website-boilerplate)

### Other Platforms

- **Netlify**: Full Next.js support
- **Railway**: Great for full-stack apps
- **Render**: Docker-based deployments

## 🤖 Queen Claude Integration

This framework is optimized for AI-powered customization:

```bash
# Use Queen Claude to configure your site
queen-claude configure --band "Your Band Name" --genre "rock"

# Generate optimized images
queen-claude optimize-images ./content/bands/your-band/assets/

# Create content from prompts
queen-claude generate-content --section about --style professional
```

## 🎸 Genre Presets

### EDM/Pop

- High animation intensity
- Neon glow effects
- Fast motion speed
- Vibrant color saturation

### Indie Rock

- Moderate particles
- Subtle textures
- Muted colors
- Balanced spacing

### Metal/Raw Rock

- Dramatic shadows
- Grungy textures
- High contrast
- Sharp edges

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this for any project!

## 🙏 Credits

Built with:

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 💬 Support

- 📖 [Documentation](./content/CONTENT_STRUCTURE.md)
- 🐛 [Report Issues](https://github.com/yourusername/band-website-boilerplate/issues)
- 💡 [Feature Requests](https://github.com/yourusername/band-website-boilerplate/discussions)

---

**Ready to rock?** 🎸 Clone this repo and build your band's online presence in minutes!
