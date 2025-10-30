# Quick Start Guide

Get your band website up and running in 3 simple steps!

---

## Step 1: Fill in Your Content

Open and fill in these 3 files (no coding required):

### 📝 01_BAND_CONTENT.md

- Band name, tagline, descriptions
- Band members info
- Contact information
- Social media links
- Upcoming shows
- **Just copy/paste your text** - no JSON syntax needed!

### 🎨 02_HERO_CONFIGURATION.md

- Choose text or logo display
- Select animation style
- Configure visual effects
- Set timing preferences

### 📸 03_MEDIA_CHECKLIST.md

- Reference guide for required media assets
- Shows exactly which files you need
- Includes size specifications
- Lists where to place each file

---

## Step 2: Add Your Media Files

Create your band folder and add assets:

```bash
# Create your band directory structure
mkdir -p content/bands/your-band-name/assets/{backgrounds,gallery,logos,members}
```

Add these files (see 03_MEDIA_CHECKLIST.md for specifications):

**Required:**

- ✅ Hero background image → `content/bands/your-band-name/assets/backgrounds/hero-bg.jpg`
- ✅ Main logo → `content/bands/your-band-name/assets/logos/main-logo.png`
- ✅ Icon → `content/bands/your-band-name/assets/logos/icon.png`
- ✅ Favicon → `content/bands/your-band-name/assets/logos/favicon.ico`
- ✅ Gallery images (4+) → `content/bands/your-band-name/assets/gallery/gallery-1.jpg`, etc.
- ✅ Band member photos → `content/bands/your-band-name/assets/members/member1.jpg`, etc.

**Optional:**

- Hero logo (if using logo mode) → `content/bands/your-band-name/assets/logos/hero-logo.png`
- OG image for social → `content/bands/your-band-name/assets/logos/og-image.jpg`
- Background videos → `public/videos/about-bg-1.mp4`, etc.

---

## Step 3: Generate Configuration

Run the setup script to create all JSON files automatically:

```bash
# Install dependencies (first time only)
npm install

# Run the content setup script
node scripts/setup-content.js
```

The script will:

- ✅ Read your markdown files
- ✅ Validate all content
- ✅ Generate proper JSON files
- ✅ Show your band ID

**Example output:**

```
Band ID: your-band-name
Content location: content/bands/your-band-name/
```

---

## Step 4: Configure Environment

Create `.env.local` file in the project root:

```bash
# Replace 'your-band-name' with the ID shown by setup script
NEXT_PUBLIC_BAND_ID=your-band-name
```

---

## Step 5: Launch Your Website

```bash
# Start the development server
npm run dev
```

Visit **http://localhost:3000** to see your website! 🎉

---

## Troubleshooting

### Content Not Showing?

- Check that `.env.local` has the correct NEXT_PUBLIC_BAND_ID
- Verify JSON files were created in `content/bands/[your-band-name]/`
- Restart dev server after changes

### Images Not Loading?

- Check file paths match exactly (case-sensitive)
- Verify images are in correct directories
- Check file names match what's in 01_BAND_CONTENT.md

### Validation Errors?

- Read error messages from setup script
- Fix issues in 01_BAND_CONTENT.md
- Re-run `node scripts/setup-content.js`

### Need to Make Changes?

1. Edit 01_BAND_CONTENT.md or 02_HERO_CONFIGURATION.md
2. Run `node scripts/setup-content.js` again
3. Refresh browser

---

## Next Steps

### Customize Theme Colors

Edit the generated file: `content/bands/[your-band-name]/band-profile.json`

Change these values:

```json
"theme": {
  "primaryColor": "amber-900",
  "secondaryColor": "teal-800",
  "accentColor": "purple-600"
}
```

See Tailwind color names: https://tailwindcss.com/docs/customizing-colors

### Add More Shows

Edit 01_BAND_CONTENT.md → Add new show sections → Re-run setup script

### Update Content

Edit 01_BAND_CONTENT.md → Re-run setup script → Content updates automatically

### Deploy to Production

See DEPLOYMENT.md for deployment instructions

---

## File Reference

**User-editable files:**

- `01_BAND_CONTENT.md` - All your text content
- `02_HERO_CONFIGURATION.md` - Hero section settings
- `03_MEDIA_CHECKLIST.md` - Asset requirements reference
- `content/bands/[your-band-name]/assets/` - All media files

**Generated files (don't edit manually):**

- `content/bands/[your-band-name]/band-profile.json`
- `content/bands/[your-band-name]/data/*.json`

**Tip:** Always edit markdown files and re-run the script. Don't manually edit JSON files!

---

## Support

📖 **Detailed Guides:**

- 01_BAND_CONTENT.md - Content form with examples
- 02_HERO_CONFIGURATION.md - Hero customization options
- 03_MEDIA_CHECKLIST.md - Complete asset requirements
- SETUP_GUIDE.md - Comprehensive setup documentation

🐛 **Issues?** Check existing documentation or create an issue on GitHub

---

**Ready to rock! 🎸** Your band website is now live at http://localhost:3000
