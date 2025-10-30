# Hero Section Configuration

Configure how your band name appears in the hero section of your website.

---

## Display Options

Choose one of the following options for your hero section:

### Option A: Text-Based Band Name (Default)

Display your band name as animated text with custom styling.

**Advantages:**

- Always looks sharp at any screen size
- Easy to update
- Great for bands with stylized text
- Works perfectly with all fonts

**Best for:** Bands with short, impactful names or those who prefer clean typography

---

### Option B: PNG Logo Image with Animation

Display your band logo as an image with custom animation effects.

**Advantages:**

- Full control over design/artwork
- Can include custom graphics, effects, textures
- Perfect for bands with unique logo designs
- Professional branding consistency

**Best for:** Bands with established logo designs or custom artwork

---

## Your Selection

**Select your preferred display mode:**

```
HERO_DISPLAY_MODE: logo
```

_Options: `text` or `logo`_

---

## Configuration for Option A: Text Display

If you selected `text` mode, configure these settings:

### Text Animation Style

_How the band name animates into view_

```
TEXT_ANIMATION: fade-up
```

**Available animations:**

- `fade-in` - Simple fade in
- `fade-up` - Fade in while sliding up
- `fade-down` - Fade in while sliding down
- `scale-in` - Fade in while scaling up
- `glitch` - Glitch effect entrance (edgy/electronic style)
- `typewriter` - Types out letter by letter

### Text Effects

**Enable text glow effect:**

```
TEXT_GLOW: true
```

_true or false - Adds glowing effect around text_

**Glow color:**

```
TEXT_GLOW_COLOR: auto
```

_Options: `auto` (uses theme colors) or hex color like `#ff6b6b`_

---

## Configuration for Option B: Logo Display

If you selected `logo` mode, configure these settings:

### Logo File

**Location:** Place your logo file here:

```
/content/bands/the-dutch-queen/assets/logos/hero-logo.png
```

**Filename:**

```
HERO_LOGO_FILE: hero-logo.png
```

**Requirements:**

- **Format:** PNG with transparent background
- **Size:** 800-1500 pixels wide (height proportional)
- **Resolution:** High resolution (2x for retina displays)
- **File size:** Under 200KB (compressed)
- **Color:** Works well on dark backgrounds (or light if needed)

---

### Logo Animation Style

_How the logo animates into view_

```
LOGO_ANIMATION: fade-up
```

**Available animations:**

- `fade-in` - Simple fade in
- `fade-scale` - Fade in while scaling up from small
- `fade-up` - Fade in while sliding up
- `slide-down` - Slides down with fade
- `bounce-in` - Bounces into view
- `glitch` - Glitch effect entrance
- `rotate-in` - Rotates while fading in

---

### Background Overlay Enhancement

_Make your logo stand out more against the background_

**Enable overlay enhancement:**

```
OVERLAY_ENHANCEMENT: true
```

_true or false_

**Overlay style:**

```
OVERLAY_STYLE: radial-dark
```

**Available overlay styles:**

- `radial-dark` - Dark radial gradient behind logo
- `box-blur` - Blurred box behind logo
- `vignette` - Darkened edges, bright center
- `none` - No additional overlay (uses default hero overlay only)

**Overlay intensity:**

```
OVERLAY_INTENSITY: strong
```

_Options: `subtle`, `medium`, `strong`_

---

### Logo Effects

**Enable logo glow effect:**

```
LOGO_GLOW: true
```

_true or false - Adds glowing aura around logo_

**Glow color:**

```
LOGO_GLOW_COLOR: auto
```

_Options: `auto` (uses theme colors) or hex color like `#4a90e2`_

**Enable drop shadow:**

```
LOGO_DROP_SHADOW: true
```

_true or false - Adds subtle shadow for depth_

---

## Animation Timing

**Animation duration:**

```
ANIMATION_DURATION: 1.2
```

_Duration in seconds (0.5 - 3.0)_

**Animation delay:**

```
ANIMATION_DELAY: 0.3
```

_Delay before animation starts in seconds (0 - 2.0)_

**Animation easing:**

```
ANIMATION_EASING: easeOut
```

**Available easing options:**

- `linear` - Constant speed
- `easeIn` - Slow start, fast end
- `easeOut` - Fast start, slow end (recommended)
- `easeInOut` - Slow start and end, fast middle
- `bounce` - Bouncy effect
- `spring` - Spring physics

---

## Responsive Behavior

### Mobile Display

_How the hero element displays on mobile devices_

```
MOBILE_SCALE: 0.7
```

_Scale factor for mobile (0.5 - 1.0). Smaller values = smaller display on mobile_

### Tablet Display

```
TABLET_SCALE: 0.85
```

_Scale factor for tablets (0.6 - 1.0)_

---

## Example Configurations

### Example 1: Clean Text Display

```
HERO_DISPLAY_MODE: text
TEXT_ANIMATION: fade-up
TEXT_GLOW: true
TEXT_GLOW_COLOR: auto
ANIMATION_DURATION: 1.0
ANIMATION_DELAY: 0.5
```

### Example 2: Bold Logo with Strong Presence

```
HERO_DISPLAY_MODE: logo
HERO_LOGO_FILE: hero-logo.png
LOGO_ANIMATION: fade-scale
OVERLAY_ENHANCEMENT: true
OVERLAY_STYLE: radial-dark
OVERLAY_INTENSITY: strong
LOGO_DROP_SHADOW: true
LOGO_GLOW: false
ANIMATION_DURATION: 1.5
ANIMATION_DELAY: 0.3
```

### Example 3: Electronic/Glitch Style

```
HERO_DISPLAY_MODE: logo
LOGO_ANIMATION: glitch
LOGO_GLOW: true
LOGO_GLOW_COLOR: #00ffff
OVERLAY_ENHANCEMENT: true
OVERLAY_STYLE: vignette
ANIMATION_DURATION: 0.8
```

---

## Preview Your Settings

After filling in this configuration:

1. Save this file
2. Run: `node scripts/setup-content.js`
3. Start dev server: `npm run dev`
4. View your hero section at `http://localhost:3000`

**Not happy with the result?**

- Adjust settings in this file
- Re-run setup script
- Refresh browser to see changes

---

## Tips for Best Results

### For Text Mode:

- Keep band names short and impactful (1-3 words ideal)
- Use your theme's heading font for consistency
- Test glow effects - sometimes less is more
- Consider your background image contrast

### For Logo Mode:

- Ensure transparent background PNG (no white box around logo)
- Export at 2x size for crisp retina display
- Test on dark AND light backgrounds if using background images
- Optimize file size - large logos slow down page load
- Consider how it looks at different screen sizes

### General:

- Animation should enhance, not distract
- Test on actual mobile devices
- Faster animations (0.8-1.2s) feel more modern
- Subtle effects often work better than dramatic ones

---

## Need Help?

**Creating a hero logo from text?**

- Use design tools: Canva, Adobe Illustrator, Photoshop
- Online: Figma, Pixlr, Photopea
- Export as PNG with transparency

**Optimizing PNG files?**

- Use TinyPNG.com or Squoosh.app
- Remove unnecessary metadata
- Consider SVG for simple logos (even better quality + smaller size)

**Testing animations?**

- Open browser dev tools (F12)
- Use responsive design mode to test different screen sizes
- Adjust settings until it feels right

---

**Next Step:** Gather assets per `03_MEDIA_CHECKLIST.md` then run `node scripts/setup-content.js`
