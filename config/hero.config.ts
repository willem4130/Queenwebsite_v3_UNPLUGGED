/**
 * Hero Section Configuration
 *
 * Toggle between logo and text display modes
 * Configure logo animations, sizing, and positioning
 */

export type HeroDisplayMode = "logo" | "text";
export type HeroAnimation = "fade" | "scale" | "glow" | "glitch" | "none";
export type HeroPosition = "center" | "top" | "bottom";

export interface HeroConfig {
  displayMode: HeroDisplayMode;
  logo: {
    src: string;
    width: number;
    height: number;
    animation: HeroAnimation;
    position: HeroPosition;
    scale: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
  };
}

export const heroConfig: HeroConfig = {
  // DEVELOPER TOGGLE: Switch between 'logo' and 'text'
  displayMode: "logo",

  logo: {
    // Logo file path (public directory)
    src: "/logo/hero-logo.png",

    // Base dimensions (desktop size)
    width: 800,
    height: 550,

    // Animation style
    // Options: 'fade' | 'scale' | 'glow' | 'glitch' | 'none'
    animation: "glow",

    // Vertical positioning
    // Options: 'center' | 'top' | 'bottom'
    position: "center",

    // Responsive scaling multipliers
    scale: {
      mobile: 0.6,
      tablet: 0.75,
      desktop: 1.05,
    },
  },
};
