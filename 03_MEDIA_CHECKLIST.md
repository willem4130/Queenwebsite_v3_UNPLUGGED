# Media Assets Checklist

This guide shows you exactly which media files you need and where to place them.

---

## Directory Structure

```
Band-website-framework-clean/
├── content/
│   └── bands/
│       └── [your-band-name]/        ← Create folder with your band name
│           └── assets/
│               ├── backgrounds/      ← Hero background images
│               ├── gallery/          ← Gallery photos
│               ├── logos/           ← Logo and branding files
│               └── members/         ← Band member photos
└── public/
    ├── gallery/                     ← Symlink or copy from content
    └── videos/                      ← Background videos (optional)
```

---

## Required Assets

### 1. Hero Background Image

**Location:** `/content/bands/[your-band-name]/assets/backgrounds/`

- **File name:** `hero-bg.jpg` or `hero-bg.png`
- **Minimum size:** 1920 x 1080 pixels (Full HD)
- **Recommended:** 2560 x 1440 pixels (2K) for sharper display
- **Format:** JPG (for photos) or PNG (for graphics)
- **File size:** Under 500KB (compress for web)
- **Content:** Should work well with dark overlay and text on top

**Tips:**

- Choose an image that represents your band's aesthetic
- Ensure good contrast for text readability
- Test on mobile devices (center area most important)

---

### 2. Band Logo Files

**Location:** `/content/bands/[your-band-name]/assets/logos/`

#### Main Logo

- **File name:** `main-logo.png`
- **Format:** PNG with transparent background
- **Minimum width:** 500 pixels
- **Recommended:** 1000-2000 pixels width
- **Usage:** Navigation, hero section, footer

#### Icon/Favicon

- **File name:** `icon.png`
- **Size:** 512 x 512 pixels (square)
- **Format:** PNG with transparent background
- **Usage:** Browser tab icon, mobile home screen

#### Favicon

- **File name:** `favicon.ico`
- **Size:** 32 x 32 pixels
- **Format:** ICO format
- **Tool:** Use online converter to create from icon.png

#### Open Graph Image (Social Sharing)

- **File name:** `og-image.jpg`
- **Size:** 1200 x 630 pixels
- **Format:** JPG
- **Usage:** Facebook, Twitter, LinkedIn preview images

---

### 3. Gallery Images

**Location:** `/content/bands/[your-band-name]/assets/gallery/`

- **File names:** `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, etc.
- **Minimum:** 4 images required
- **Recommended:** 8-12 images
- **Size:** 1200 x 800 pixels (3:2 aspect ratio)
- **Format:** JPG
- **File size:** 100-300KB each (compressed)

**Image Ideas:**

- Live performance shots
- Band portraits
- Behind-the-scenes
- Studio sessions
- Fan interactions
- Venue atmospheres

**Tips:**

- Maintain consistent aspect ratio (3:2 or 16:9)
- Good lighting and focus
- Variety of shots (wide, close-up, action)

---

### 4. Band Member Photos

**Location:** `/content/bands/[your-band-name]/assets/members/`

- **File names:** `member1.jpg`, `member2.jpg`, etc. (match BAND_CONTENT.md)
- **Size:** 800 x 800 pixels (square) OR 600 x 800 pixels (portrait)
- **Format:** JPG or PNG
- **File size:** 100-200KB each

**Tips:**

- Consistent style across all members
- Professional quality
- Good lighting
- Clean background (or band-themed)

---

## Optional Assets

### 5. Background Videos (Enhances Visual Impact)

**Location:** `/public/videos/`

#### Section Background Videos

- **File names:**
  - `about-bg-1.mp4`
  - `shows-bg-1.mp4`
  - `gallery-bg-1.mp4`
  - `contact-bg-1.mp4`
- **Resolution:** 1920 x 1080 pixels (Full HD)
- **Format:** MP4 (H.264 codec)
- **Duration:** 10-30 seconds (loops automatically)
- **File size:** Under 5MB each (very important for performance)
- **Frame rate:** 30 fps

**Video Tips:**

- Short loops work best
- Subtle motion (not distracting)
- No audio needed
- Compress heavily (web optimization)
- Test on mobile (videos may not autoplay)

#### Hero Video Background

- **File name:** `hero-bg.mp4`
- **Same specs as section videos**
- **Alternative to hero image** (set in HERO_CONFIGURATION.md)

---

## Image Optimization Tips

### Before Upload

1. **Resize images** to exact dimensions needed
2. **Compress for web:**
   - JPG: 70-85% quality
   - PNG: Use tools like TinyPNG
3. **Test file sizes:**
   - Hero images: < 500KB
   - Gallery images: < 300KB
   - Logos: < 100KB

### Recommended Tools

- **Online:** TinyPNG, Squoosh, Compressor.io
- **Desktop:** Photoshop, GIMP, ImageOptim (Mac)
- **Batch processing:** ImageMagick, XnConvert

---

## Quick Setup Checklist

- [ ] Create `/content/bands/[your-band-name]/` folder
- [ ] Create subfolders: backgrounds, gallery, logos, members
- [ ] Add hero background image
- [ ] Add main logo PNG
- [ ] Add icon.png (512x512)
- [ ] Convert icon to favicon.ico
- [ ] Add OG image for social sharing
- [ ] Add 4+ gallery images (numbered)
- [ ] Add band member photos (match BAND_CONTENT.md names)
- [ ] Optional: Add background videos to /public/videos/
- [ ] Run setup script: `node scripts/setup-content.js`
- [ ] Verify all images display correctly

---

## File Naming Rules

✅ **Good:**

- `hero-bg.jpg`
- `gallery-1.jpg`
- `member1.jpg`
- `main-logo.png`

❌ **Bad:**

- `IMG_1234.jpg` (not descriptive)
- `hero background.jpg` (spaces)
- `Gallery Image #1.JPG` (special characters, inconsistent case)

**Rules:**

- Use lowercase
- Use hyphens (not spaces or underscores)
- Use consistent numbering (gallery-1, gallery-2, etc.)
- Match filenames in BAND_CONTENT.md exactly

---

## Next Steps

1. Gather all media assets
2. Optimize images (resize + compress)
3. Place files in correct directories
4. Fill out HERO_CONFIGURATION.md
5. Run setup script
6. Preview your site!

**Questions?** Check the main README.md or SETUP_GUIDE.md
