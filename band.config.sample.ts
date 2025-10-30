/**
 * Sample Band Website Configuration
 *
 * Copy this file to `band.config.ts` and customize it for your band.
 * This is where you'll set your band name, colors, content, and media assets.
 */

import { BandWebsiteConfig } from "./config/band.config";

export const bandConfig: BandWebsiteConfig = {
  // Core Developer Controls - 8 primary parameters that drive 80% of visual impact
  core: {
    // 1. Primary Color Palette - Main brand colors used throughout the site
    primaryColorPalette: {
      primary: "amber-900", // Main brand color
      secondary: "teal-800", // Secondary accent color
      accent: "purple-600", // Highlight color for CTAs
      background: "black", // Base background color
      surface: "gray-900", // Card/surface color
    },

    // 2. Typography Pair - Header and body font combination
    typographyPair: {
      headingFont: "Inter", // Font for headings
      bodyFont: "Inter", // Font for body text
      fontScale: "balanced", // 'compact' | 'balanced' | 'spacious'
    },

    // 3. Hero Background - Main hero section styling
    heroBackground: {
      type: "image", // 'image' | 'video' | 'gradient' | 'hybrid'
      source: "/hero-bg.jpg", // Path to your hero background
      overlayIntensity: 0.4, // 0-1, darkness of overlay
    },

    // 4. Section Background Style - How each main section is styled
    sectionBackgroundStrategy: {
      about: "video", // Background type for about section
      shows: "video", // Background type for shows section
      gallery: "gradient", // Background type for gallery section
      contact: "gradient", // Background type for contact section
    },

    // 5. Animation Intensity - Overall motion and effects level
    animationIntensity: "full", // 'minimal' | 'moderate' | 'full'

    // 6. Color Temperature - Warm/cool bias for entire palette
    colorTemperature: "neutral", // 'warm' | 'neutral' | 'cool'

    // 7. Contrast Level - Overall contrast across components
    contrastLevel: "balanced", // 'subtle' | 'balanced' | 'high'

    // 8. Border Radius System - Sharp to rounded aesthetic
    borderRadiusScale: "subtle", // 'sharp' | 'subtle' | 'modern' | 'rounded'
  },

  // Genre Flexibility - 8 additional parameters for fine-tuning across music genres
  genre: {
    // 9. Particle Effects Density - Atmospheric elements intensity
    particleEffectsDensity: 0.8, // 0-1, 0 = clean, 1 = heavy effects

    // 10. Glow/Neon Intensity - Cyberpunk-style glow effects
    glowIntensity: 0.3, // 0-1, 0 = none, 1 = cyberpunk level

    // 11. Texture Overlays - Surface treatment from clean to grungy
    textureOverlays: "subtle", // 'none' | 'subtle' | 'moderate' | 'grungy'

    // 12. Motion Speed - Animation speed scaling
    motionSpeedMultiplier: 1.0, // 0.5-2.0, affects all animation speeds

    // 13. Shadow Intensity - Depth and drama of shadows
    shadowIntensity: "moderate", // 'flat' | 'subtle' | 'moderate' | 'dramatic'

    // 14. Background Blur/Focus - Image focus effects
    backgroundFocusEffect: "moderate", // 'sharp' | 'subtle' | 'moderate' | 'heavy'

    // 15. Color Saturation Level - Vibrancy of colors
    colorSaturation: "balanced", // 'muted' | 'balanced' | 'vibrant' | 'neon'

    // 16. Layout Spacing - Density of layout elements
    layoutSpacing: "balanced", // 'compact' | 'balanced' | 'spacious'
  },

  // Band Content - Replace with your band's information
  content: {
    bandName: "Your Band Name",
    tagline: "Your Musical Journey",
    description: {
      short: "A band that creates unforgettable musical experiences",
      medium:
        "We create music that connects hearts and moves souls, bringing people together through the universal language of sound.",
      long: "Our music is a journey through emotions, crafting sonic landscapes that resonate deep within the soul. Each performance is an immersive experience where raw energy meets refined artistry, creating moments that transcend the ordinary and connect us all through the power of music.",
    },
    contact: {
      email: "contact@yourband.com",
      phone: "+1 (555) 123-4567",
      address: "Your City, Your State",
    },
    social: {
      facebook: "https://facebook.com/yourband",
      instagram: "https://instagram.com/yourband",
      twitter: "https://twitter.com/yourband",
      youtube: "https://youtube.com/yourband",
      spotify: "https://open.spotify.com/artist/yourband",
      bandcamp: "https://yourband.bandcamp.com",
    },
    seo: {
      metaTitle: "Your Band Name | Official Website",
      metaDescription:
        "Official website of Your Band Name - Creating music that moves souls and connects hearts",
      keywords: ["band", "music", "live shows", "your genre", "your location"],
    },
  },

  // Media Assets - Update these paths to point to your media files
  media: {
    hero: {
      background: "/hero-bg.jpg", // Your hero background image
      fallbackImage: "/hero-fallback.jpg", // Fallback if video fails
    },
    sections: {
      about: ["/videos/about-bg-1.mp4"], // Background videos for about section
      shows: ["/videos/shows-bg-1.mp4"], // Background videos for shows section
      gallery: [], // Background assets for gallery
      contact: [], // Background assets for contact
    },
    gallery: {
      images: [
        "gallery-1.jpg", // Replace with your gallery image filenames
        "gallery-2.jpg", // These should be in /public/gallery/
        "gallery-3.jpg",
        "gallery-4.jpg",
      ],
    },
    logos: {
      main: "/logo.png", // Your main logo
      icon: "/favicon.ico", // Favicon
      light: "/logo-light.png", // Optional: light version for dark backgrounds
      dark: "/logo-dark.png", // Optional: dark version for light backgrounds
    },
  },

  version: "1.0.0",
};

// ================================
// GENRE PRESET EXAMPLES
// ================================

// EDM/Pop Preset - High energy, neon effects, fast motion
export const edmPopPreset = {
  ...bandConfig,
  core: {
    ...bandConfig.core,
    colorTemperature: "cool",
    borderRadiusScale: "rounded",
    animationIntensity: "full",
  },
  genre: {
    ...bandConfig.genre,
    particleEffectsDensity: 1.0,
    glowIntensity: 0.8,
    motionSpeedMultiplier: 1.5,
    colorSaturation: "neon",
  },
};

// Indie Rock Preset - Warm, textured, moderate effects
export const indieRockPreset = {
  ...bandConfig,
  core: {
    ...bandConfig.core,
    colorTemperature: "warm",
    borderRadiusScale: "subtle",
  },
  genre: {
    ...bandConfig.genre,
    particleEffectsDensity: 0.4,
    glowIntensity: 0.1,
    textureOverlays: "moderate",
    motionSpeedMultiplier: 0.8,
    colorSaturation: "muted",
  },
};

// Metal/Raw Rock Preset - Sharp, high contrast, dramatic
export const metalRockPreset = {
  ...bandConfig,
  core: {
    ...bandConfig.core,
    borderRadiusScale: "sharp",
    contrastLevel: "high",
  },
  genre: {
    ...bandConfig.genre,
    particleEffectsDensity: 0.6,
    glowIntensity: 0.0,
    textureOverlays: "grungy",
    shadowIntensity: "dramatic",
    colorSaturation: "muted",
  },
};
