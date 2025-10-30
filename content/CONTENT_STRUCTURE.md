# Content Management Structure

## Overview

This directory contains all dynamic content for band websites. The structure is designed to be:

- **CMS-ready** for headless CMS integration
- **Multi-band capable** for managing multiple band sites
- **Clear and intuitive** for content editors
- **Version control friendly** for tracking changes

## Directory Structure

```
/content/
└── bands/
    └── [band-id]/              # Unique identifier for each band
        ├── band-profile.json    # Core band identity & branding
        ├── assets/              # All media assets
        │   ├── backgrounds/     # Section background images/videos
        │   │   ├── hero/       # Hero section (1920x1080 recommended)
        │   │   ├── about/      # About section backgrounds
        │   │   ├── shows/      # Shows section backgrounds
        │   │   └── contact/    # Contact section backgrounds
        │   ├── gallery/        # Gallery images (16:9 aspect ratio)
        │   ├── logos/          # Brand logos and icons
        │   └── videos/         # Performance and promo videos
        └── data/               # Structured content data
            ├── about.json      # About section content
            ├── shows.json      # Tour dates and venues
            ├── social.json     # Social media links
            └── contact.json    # Contact information
```

## File Specifications

### band-profile.json

Core configuration for the band's identity and website theme:

- Band name and tagline
- Genre and establishment year
- Theme settings (colors, animation preferences)
- SEO metadata
- Branding assets paths

### data/about.json

Contains all "About" section content:

- Multiple description lengths (short/medium/long)
- Band story (founding, mission, vision)
- Band members information
- Achievements and milestones

### data/social.json

Manages all social media presence:

- Platform URLs and handles
- Active/inactive status per platform
- Display preferences (header/footer/contact)
- Preferred order for display

### data/contact.json

All contact and location information:

- Primary contact details
- Booking-specific contacts
- Press contacts
- Management information
- Physical location (optional)

### data/shows.json

Tour dates and performance information:

- Upcoming shows with venue details
- Past shows archive
- Ticket links
- Display settings

## Asset Guidelines

### Background Images

- **Hero**: 1920x1080 minimum, JPG/PNG
- **Sections**: 1920x1080 minimum, JPG/PNG
- **Format**: Optimized for web (< 500KB ideal)

### Gallery Images

- **Aspect Ratio**: 16:9 recommended
- **Resolution**: 1200x675 minimum
- **Format**: JPG/PNG, optimized
- **Naming**: Descriptive names (e.g., "live-performance-venue-2024.jpg")

### Videos

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 preferred
- **File Size**: < 20MB for web performance
- **Fallback**: Include poster image

### Logos

- **Main Logo**: PNG with transparency, 500px width minimum
- **Icon**: Square format, 512x512px
- **Favicon**: 32x32px ICO format
- **OG Image**: 1200x630px for social sharing

## Adding Content

### Step 1: Create Band Directory

```bash
mkdir -p content/bands/[band-id]
```

### Step 2: Copy Template Structure

Use queen-tribute as a template for new bands

### Step 3: Update JSON Files

Fill in all placeholder values marked with [brackets]

### Step 4: Add Media Assets

Place images and videos in appropriate directories

### Step 5: Update Application Config

Point the application to use the new band content

## CMS Migration Path

This file-based structure is designed for easy migration to any headless CMS:

1. **Strapi/Directus**: Direct mapping to content types
2. **Contentful**: Convert to content models
3. **Sanity**: Use as schema basis
4. **Custom API**: Serve JSON files directly

## Best Practices

1. **Use Descriptive IDs**: Band IDs should be URL-friendly (lowercase, hyphens)
2. **Optimize Media**: Compress images and videos before uploading
3. **Maintain Consistency**: Follow the same structure for all bands
4. **Version Control**: Commit changes with descriptive messages
5. **Backup**: Keep copies of original high-res assets elsewhere

## Future Enhancements

- [ ] Multi-language support (add `/i18n/` subdirectory)
- [ ] Dynamic theme generation from brand colors
- [ ] Automated image optimization pipeline
- [ ] Content validation schemas
- [ ] API endpoint generation

---

_Last Updated: Generated on creation_
_Structure Version: 1.0.0_
