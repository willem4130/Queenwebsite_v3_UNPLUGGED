# Component Variant Library

This repository maintains **working section variants** as git branches for rapid prototyping and client demos.

## 🎯 Strategy: Design → Deploy in Days

Instead of building from scratch for each project, we maintain tested variants of key sections. This enables:

- **Faster sales cycles**: Show working demos, not mockups
- **Lower risk**: All variants are battle-tested code
- **Client choice**: "Would you prefer gallery A, B, or C?"
- **Reusable IP**: Codebase as an asset library
- **Competitive advantage**: Deploy PoCs in hours/days vs weeks

## 📚 Active Variant Branches

### Gallery Variants

#### `feature/gallery-fashion-collage`

- **Style**: Fashion magazine collage layout
- **Best for**: Photography portfolios, fashion brands, visual-heavy sites
- **Features**: Smart image handling, asymmetric grid
- **Deploy**: `git checkout feature/gallery-fashion-collage`

#### `feature/gallery-magazine-scroll`

- **Style**: Magazine-style with enhanced zoom effects
- **Best for**: Editorial content, storytelling, immersive experiences
- **Features**: Zoom-out hover effects, smooth scrolling
- **Deploy**: `git checkout feature/gallery-magazine-scroll`

#### `feature/gallery-masonry-vertical`

- **Style**: Classic masonry/Pinterest layout
- **Best for**: Mixed media content, image-heavy galleries
- **Features**: Vertical masonry grid, responsive breakpoints
- **Deploy**: `git checkout feature/gallery-masonry-vertical`

### Hero Variants

#### `feature/video-hero-background`

- **Style**: Full-screen video background hero
- **Best for**: High-impact landing pages, entertainment sites
- **Features**: Autoplay video, responsive fallbacks, performance optimized
- **Deploy**: `git checkout feature/video-hero-background`

### About Section Variants

#### `feature/about-section-background`

- **Style**: Enhanced background styling and animations
- **Best for**: Brand storytelling, company pages
- **Features**: Custom background treatment, smooth animations
- **Deploy**: `git checkout feature/about-section-background`

### Shows/Events Variants

#### `feature/shows-layout-spacing`

- **Style**: Alternative layout with adjusted spacing
- **Best for**: Event listings, tour dates, calendars
- **Features**: Optimized spacing system, better readability
- **Deploy**: `git checkout feature/shows-layout-spacing`

## 🚀 How to Use Variants

### For Client Demos

1. **Deploy all variants to separate URLs:**

   ```bash
   # Example with Vercel
   vercel --prod --branch feature/gallery-fashion-collage
   vercel --prod --branch feature/gallery-magazine-scroll
   vercel --prod --branch feature/video-hero-background
   ```

2. **Share with client:**
   - `yoursite.com/gallery-fashion` → Fashion collage
   - `yoursite.com/gallery-magazine` → Magazine scroll
   - `yoursite.com/video-hero` → Video hero

3. **Client chooses, you merge and ship**

### For Development

```bash
# Check out a variant
git checkout feature/gallery-fashion-collage

# Make custom changes
# ... edit files ...

# Option A: Merge variant into main (if chosen)
git checkout main
git merge feature/gallery-fashion-collage

# Option B: Create new variant based on this one
git checkout -b feature/gallery-fashion-collage-custom
```

### For New Variants

```bash
# Create new variant from main
git checkout main
git checkout -b feature/gallery-parallax

# Build variant, test, commit
git add .
git commit -m "Add parallax gallery variant"

# Push to remote (backup)
git push origin feature/gallery-parallax

# Document in this file
```

## 🧹 Maintenance

### Keeping Variants Fresh

Variants can drift from main over time. To update:

```bash
# Update variant with latest main changes
git checkout feature/gallery-fashion-collage
git merge main
git push origin feature/gallery-fashion-collage
```

### Archiving Old Variants

When a variant is outdated or no longer useful:

```bash
# Move to archive
git branch -m feature/old-gallery archive/old-gallery
git push origin archive/old-gallery
git push origin :feature/old-gallery  # delete old remote branch
```

## 📊 Variant Status

| Variant                  | Status    | Last Updated | On Remote |
| ------------------------ | --------- | ------------ | --------- |
| gallery-fashion-collage  | ✅ Active | 2025-10      | ✅ Yes    |
| gallery-magazine-scroll  | ✅ Active | 2025-10      | ✅ Yes    |
| gallery-masonry-vertical | ✅ Active | 2025-10      | ✅ Yes    |
| video-hero-background    | ✅ Active | 2025-10      | ✅ Yes    |
| about-section-background | ✅ Active | 2025-10      | ✅ Yes    |
| shows-layout-spacing     | ✅ Active | 2025-10      | ✅ Yes    |

## 🗂️ Other Branches

### Archive

- `archive/shows-animations-zoom-effect` - Previous shows animation variant

### Under Review

- `feature/website-updates` - Major refactoring (needs evaluation)
- `performance-optimization` - Performance improvements (needs evaluation)

## 💡 Future Improvements

### Phase 2: Component Variants in Main

Instead of branches, migrate to component-based variants:

```tsx
// Gallery with switchable variants
<Gallery variant="fashion-collage" />
<Gallery variant="magazine-scroll" />
<Gallery variant="masonry" />
```

**Benefits:**

- All variants stay in sync with main
- Can ship multiple variants to production
- Easier to maintain
- Better for A/B testing

### Implementation Path

1. Extract common gallery logic
2. Create variant prop system
3. Migrate branch code to variant components
4. Keep branches for reference

## 📈 ROI Analysis

**Traditional Approach:**

- Time: 2-3 weeks per PoC
- Cost: €5-10k per project
- Risk: High (building from scratch)

**Variant Library Approach:**

- Time: 2-3 days per PoC
- Cost: €1-2k per project
- Risk: Low (tested code)

**Savings: 70-80% time/cost reduction**

---

_Last updated: 2025-10-05_
_Maintained by: Development Team_
