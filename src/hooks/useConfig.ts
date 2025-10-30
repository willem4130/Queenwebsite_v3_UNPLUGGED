"use client";

/**
 * React Hook for Band Website Configuration
 *
 * Provides easy access to configuration values and utilities
 * throughout the React component tree.
 */

import { useEffect, useState } from "react";
import {
  getConfig,
  loadConfig,
  getBandContent,
  getMediaPaths,
  getConfiguredClasses,
  getAnimationClasses,
  getAnimationDuration,
  injectCSSVariables,
} from "../../config/config-utils";
import { BandWebsiteConfig, defaultConfig } from "../../config/band.config";

// ================================
// MAIN CONFIGURATION HOOK
// ================================

export function useConfig() {
  const [config, setConfig] = useState<BandWebsiteConfig>(defaultConfig);

  useEffect(() => {
    // Load configuration (can be from environment, database, etc.)
    const loadedConfig = getConfig();
    setConfig(loadedConfig);

    // Inject CSS variables
    injectCSSVariables(loadedConfig);
  }, []);

  return {
    config,
    updateConfig: (newConfig: Partial<BandWebsiteConfig>) => {
      const updatedConfig = loadConfig(newConfig);
      setConfig(updatedConfig);
      injectCSSVariables(updatedConfig);
    },
  };
}

// ================================
// CONTENT HOOKS
// ================================

/**
 * Hook for band content (name, tagline, descriptions, etc.)
 */
export function useBandContent() {
  try {
    const content = getBandContent();

    if (!content) {
      return {
        bandName: "Your Band Name",
        tagline: "Your Musical Journey",
        description: {
          short: "A band that creates unforgettable music",
          medium: "We create music that connects hearts and moves souls.",
          long: "Our music is a journey through emotions, bringing people together through the universal language of sound.",
        },
        social: {},
        contact: { email: "" },
      };
    }

    return {
      bandName: content.bandName || "Your Band Name",
      tagline: content.tagline || "Your Musical Journey",
      description: content.description || {
        short: "A band that creates unforgettable music",
        medium: "We create music that connects hearts and moves souls.",
        long: "Our music is a journey through emotions, bringing people together through the universal language of sound.",
      },
      social: content.social || {},
      contact: content.contact || { email: "" },
    };
  } catch (error) {
    console.error("Error loading band content:", error);
    return {
      bandName: "Your Band Name",
      tagline: "Your Musical Journey",
      description: {
        short: "A band that creates unforgettable music",
        medium: "We create music that connects hearts and moves souls.",
        long: "Our music is a journey through emotions, bringing people together through the universal language of sound.",
      },
      social: {},
      contact: { email: "" },
    };
  }
}

/**
 * Hook for media paths and assets
 */
export function useMediaPaths() {
  try {
    const media = getMediaPaths();

    if (!media) {
      return {
        hero: {
          background: "/hero-bg.webp",
          fallback: "/hero-bg.webp",
        },
        sections: {
          about: ["/videos/about-bg-1.mp4"],
          shows: ["/videos/shows-bg-1.mp4"],
          gallery: [],
          contact: [],
        },
        gallery: [],
        logos: {
          main: "/logo.png",
          icon: "/favicon.ico",
        },
      };
    }

    return media;
  } catch (error) {
    console.error("Error loading media paths:", error);
    return {
      hero: {
        background: "/hero-bg.webp",
        fallback: "/hero-bg.webp",
      },
      sections: {
        about: ["/videos/about-bg-1.mp4"],
        shows: ["/videos/shows-bg-1.mp4"],
        gallery: [],
        contact: [],
      },
      gallery: [],
      logos: {
        main: "/logo.png",
        icon: "/favicon.ico",
      },
    };
  }
}

// ================================
// STYLING HOOKS
// ================================

/**
 * Hook for configured Tailwind classes
 */
export function useConfiguredClasses() {
  try {
    const classes = getConfiguredClasses();

    if (!classes) {
      return {
        primary: {
          bg: "bg-amber-900",
          text: "text-amber-900",
          border: "border-amber-900",
          hover: "hover:bg-amber-900",
        },
        secondary: {
          bg: "bg-teal-800",
          text: "text-teal-800",
          border: "border-teal-800",
          hover: "hover:bg-teal-800",
        },
        accent: {
          bg: "bg-purple-600",
          text: "text-purple-600",
          border: "border-purple-600",
          hover: "hover:bg-purple-600",
        },
        typography: {
          heading: "font-inter",
          body: "font-inter",
        },
        rounded: {
          default: "rounded-sm",
          button: "rounded-lg",
        },
      };
    }

    return classes;
  } catch (error) {
    console.error("Error loading configured classes:", error);
    return {
      primary: {
        bg: "bg-amber-900",
        text: "text-amber-900",
        border: "border-amber-900",
        hover: "hover:bg-amber-900",
      },
      secondary: {
        bg: "bg-teal-800",
        text: "text-teal-800",
        border: "border-teal-800",
        hover: "hover:bg-teal-800",
      },
      accent: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
        hover: "hover:bg-purple-600",
      },
      typography: {
        heading: "font-inter",
        body: "font-inter",
      },
      rounded: {
        default: "rounded-sm",
        button: "rounded-lg",
      },
    };
  }
}

/**
 * Hook for animation classes based on configuration
 */
export function useAnimationClasses() {
  try {
    const classes = getAnimationClasses();

    if (!classes) {
      return {
        transition: "transition-all duration-500",
        hover: "hover:scale-110 hover:shadow-lg",
        entrance: "animate-slide-up",
      };
    }

    return classes;
  } catch (error) {
    console.error("Error loading animation classes:", error);
    return {
      transition: "transition-all duration-500",
      hover: "hover:scale-110 hover:shadow-lg",
      entrance: "animate-slide-up",
    };
  }
}

/**
 * Hook for calculating animation durations
 */
export function useAnimationDuration() {
  return (baseDuration: number) => getAnimationDuration(baseDuration);
}

// ================================
// SPECIFIC FEATURE HOOKS
// ================================

/**
 * Hook for color palette
 */
export function useColorPalette() {
  const config = getConfig();
  return config.core.primaryColorPalette;
}

/**
 * Hook for typography settings
 */
export function useTypography() {
  const config = getConfig();
  return config.core.typographyPair;
}

/**
 * Hook for animation settings
 */
export function useAnimationSettings() {
  try {
    const config = getConfig();

    if (!config) {
      return {
        intensity: "moderate" as const,
        speedMultiplier: 1.0,
        particleDensity: 0.5,
        glowIntensity: 0.3,
      };
    }

    return {
      intensity: config.core?.animationIntensity || "moderate",
      speedMultiplier: config.genre?.motionSpeedMultiplier || 1.0,
      particleDensity: config.genre?.particleEffectsDensity || 0.5,
      glowIntensity: config.genre?.glowIntensity || 0.3,
    };
  } catch (error) {
    console.error("Error loading animation settings:", error);
    return {
      intensity: "moderate" as const,
      speedMultiplier: 1.0,
      particleDensity: 0.5,
      glowIntensity: 0.3,
    };
  }
}

/**
 * Hook for layout settings
 */
export function useLayoutSettings() {
  const config = getConfig();
  return {
    spacing: config.genre.layoutSpacing,
    borderRadius: config.core.borderRadiusScale,
    shadows: config.genre.shadowIntensity,
    contrast: config.core.contrastLevel,
  };
}

// ================================
// CONDITIONAL RENDERING HOOKS
// ================================

/**
 * Hook to determine if effects should be rendered based on performance settings
 */
export function useEffectsEnabled() {
  const config = getConfig();

  return {
    particles: config.genre.particleEffectsDensity > 0,
    glow: config.genre.glowIntensity > 0,
    heavyAnimations: config.core.animationIntensity === "full",
    backgroundVideo: config.core.animationIntensity !== "minimal",
  };
}

/**
 * Hook for responsive breakpoints (can be made configurable later)
 */
export function useBreakpoints() {
  return {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  };
}

// ================================
// UTILITY HOOKS
// ================================

/**
 * Hook to check if we're in development mode for config debugging
 */
export function useConfigDebug() {
  const isDev = process.env.NODE_ENV === "development";

  return {
    isDev,
    logConfig: () => {
      if (isDev) {
        console.log("Current Band Website Config:", getConfig());
      }
    },
  };
}
