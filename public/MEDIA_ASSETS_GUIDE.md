# Media Assets Guide

This guide specifies the exact media assets needed for your band website and their requirements.

## Required Media Assets

### 1. Hero Background

- **File:** `/public/hero-bg.jpg`
- **Dimensions:** 1920x1080 or higher
- **Format:** JPG, PNG, or WebP
- **Description:** Main background image for the hero section
- **Style:** Should work well with dark overlay (40% opacity by default)

### 2. Hero Fallback

- **File:** `/public/hero-fallback.jpg`
- **Dimensions:** 1920x1080
- **Format:** JPG or PNG
- **Description:** Fallback image when video backgrounds fail to load

### 3. Section Background Videos

- **About Section:** `/public/videos/about-bg-1.mp4`
- **Shows Section:** `/public/videos/shows-bg-1.mp4`
- **Dimensions:** 1920x1080 (Full HD minimum)
- **Format:** MP4 (H.264 codec recommended)
- **Duration:** 10-30 seconds (will loop)
- **File Size:** Keep under 5MB for performance
- **Style:** Should work with overlay effects and not distract from text

### 4. Gallery Images

- **Location:** `/public/gallery/`
- **Files:** `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`
- **Dimensions:** 1200x800 (3:2 aspect ratio recommended)
- **Format:** JPG or WebP
- **Description:** Main gallery images showcasing your band
- **Note:** You can add more images by updating the configuration

### 5. Logo Files

- **Main Logo:** `/public/logo.png`
- **Favicon:** `/public/favicon.ico`
- **Light Version:** `/public/logo-light.png` (optional)
- **Dark Version:** `/public/logo-dark.png` (optional)

## Asset Optimization Tips

### Images

- Use WebP format when possible for better compression
- Optimize for web (80-90% quality for JPG)
- Consider providing @2x versions for high-DPI displays
- Use appropriate dimensions - don't rely on browser scaling

### Videos

- Use H.264 codec for maximum compatibility
- 720p minimum, 1080p recommended
- Keep file sizes under 5MB
- Consider providing WebM alternatives for better compression
- Test autoplay behavior across different browsers

### Performance Considerations

- Total gallery size should be under 10MB
- Use lazy loading for gallery images (already implemented)
- Consider using a CDN for media assets
- Compress images without losing visual quality

## File Structure

```
public/
├── hero-bg.jpg              # Hero background image
├── hero-fallback.jpg        # Hero fallback image
├── logo.png                 # Main logo
├── logo-light.png           # Light logo variant (optional)
├── logo-dark.png            # Dark logo variant (optional)
├── favicon.ico              # Site favicon
├── gallery/
│   ├── gallery-1.jpg        # Gallery image 1
│   ├── gallery-2.jpg        # Gallery image 2
│   ├── gallery-3.jpg        # Gallery image 3
│   └── gallery-4.jpg        # Gallery image 4
└── videos/
    ├── about-bg-1.mp4       # About section background video
    └── shows-bg-1.mp4       # Shows section background video
```

## Quick Setup Checklist

- [ ] Replace `/public/hero-bg.jpg` with your hero image
- [ ] Add your logo as `/public/logo.png`
- [ ] Replace gallery images in `/public/gallery/`
- [ ] Add section background videos in `/public/videos/`
- [ ] Update favicon.ico with your band's icon
- [ ] Test all images load correctly
- [ ] Verify video autoplay works on your target devices

## Advanced Configuration

You can modify which assets are used by editing the `media` section in your band configuration:

```typescript
media: {
  hero: {
    background: '/your-custom-hero.jpg',
    fallbackImage: '/your-fallback.jpg'
  },
  gallery: {
    images: [
      'your-image-1.jpg',
      'your-image-2.jpg',
      // Add as many as you want
    ]
  },
  // ... etc
}
```

## Genre-Specific Recommendations

### EDM/Electronic

- Use vibrant, high-energy images
- Neon colors work well
- Abstract or futuristic imagery
- High contrast visuals

### Rock/Metal

- Dark, dramatic imagery
- High contrast black and white works well
- Industrial or gritty textures
- Bold, angular compositions

### Indie/Folk

- Warm, natural lighting
- Organic textures and environments
- Softer color palettes
- More intimate, personal imagery

### Jazz/Classical

- Elegant, sophisticated imagery
- Rich, warm color tones
- Classic or timeless compositions
- Focus on instruments or performance
