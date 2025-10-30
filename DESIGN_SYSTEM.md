# 🎨 Dutch Queen Mainband Design System

Generated for Queen Claude autonomous development. This design system integrates the band website's visual identity with Queen's component patterns.

---

## 🎯 Color Palette

### Primary Colors

```css
/* Amber Gold - Main brand identity */
--color-primary: #78350f; /* amber-900 */
--color-primary-light: #92400e; /* amber-800 */
--color-primary-dark: #451a03; /* amber-950 */

/* Teal Accent - Secondary brand color */
--color-secondary: #115e59; /* teal-800 */
--color-secondary-light: #14b8a6; /* teal-500 */
--color-secondary-dark: #042f2e; /* teal-950 */

/* Purple Highlight - Call-to-action accent */
--color-accent: #9333ea; /* purple-600 */
--color-accent-light: #a855f7; /* purple-500 */
--color-accent-dark: #581c87; /* purple-900 */
```

### Neutrals & Backgrounds

```css
/* Dark theme foundation */
--color-background: #000000; /* black */
--color-surface: #18181b; /* gray-900 */
--color-surface-elevated: #27272a; /* gray-800 */

/* Text colors */
--color-text-primary: #fafafa; /* gray-50 */
--color-text-secondary: #a1a1aa; /* gray-400 */
--color-text-tertiary: #52525b; /* gray-600 */
```

### Semantic Colors

```css
/* Success, Error, Warning, Info */
--color-success: #22c55e; /* green-500 */
--color-error: #ef4444; /* red-500 */
--color-warning: #f59e0b; /* amber-500 */
--color-info: #3b82f6; /* blue-500 */
```

### Tailwind Usage

```tsx
// Background colors
bg-[#78350f]          // Primary amber-900
bg-[#115e59]          // Secondary teal-800
bg-[#9333ea]          // Accent purple-600
bg-black              // Background
bg-gray-900           // Surface

// Text colors
text-gray-50          // Primary text
text-gray-400         // Secondary text
text-amber-900        // Brand text
```

---

## 📝 Typography

### Font Families

```css
/* Heading Font */
--font-heading:
  "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Body Font */
--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Monospace (code, technical) */
--font-mono: "Fira Code", "Courier New", monospace;
```

### Font Scale (Balanced)

```css
/* Headings */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
--text-7xl: 4.5rem; /* 72px */
--text-8xl: 6rem; /* 96px */
```

### Typography Classes

```tsx
// Headings
<h1 className="font-heading text-6xl font-bold">Hero Title</h1>
<h2 className="font-heading text-4xl font-semibold">Section Title</h2>
<h3 className="font-heading text-2xl font-medium">Subsection</h3>

// Body text
<p className="font-body text-base text-gray-50">Primary content</p>
<p className="font-body text-sm text-gray-400">Secondary info</p>
```

---

## 📏 Spacing System (Balanced)

Base unit: **8px**

```css
/* Spacing scale */
--space-1: 0.5rem; /* 8px */
--space-2: 1rem; /* 16px */
--space-3: 1.5rem; /* 24px */
--space-4: 2rem; /* 32px */
--space-5: 2.5rem; /* 40px */
--space-6: 3rem; /* 48px */
--space-8: 4rem; /* 64px */
--space-10: 5rem; /* 80px */
--space-12: 6rem; /* 96px */
--space-16: 8rem; /* 128px */
--space-20: 10rem; /* 160px */
--space-24: 12rem; /* 192px */
```

### Layout Spacing

```tsx
// Section spacing
<section className="py-20 px-6">        {/* Vertical: 160px, Horizontal: 48px */}

// Component spacing
<div className="space-y-6">             {/* 48px gap between children */}
  <div className="p-4">...</div>        {/* 32px padding */}
</div>

// Inline spacing
<div className="flex gap-4">            {/* 32px between flex items */}
```

---

## 🎭 Border Radius (Subtle)

```css
/* Radius values */
--radius-sm: 0.25rem; /* 4px - inputs, tags */
--radius-md: 0.5rem; /* 8px - cards, buttons */
--radius-lg: 0.75rem; /* 12px - modals, large cards */
--radius-xl: 1rem; /* 16px - hero sections */
--radius-2xl: 1.5rem; /* 24px - special features */
--radius-full: 9999px; /* circular elements */
```

### Usage

```tsx
<button className="rounded-md">Button</button>      {/* 8px */}
<div className="rounded-lg">Card</div>              {/* 12px */}
<img className="rounded-full">Avatar</img>          {/* circular */}
```

---

## 🌑 Shadows (Moderate)

```css
/* Shadow scale */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md:
  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg:
  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl:
  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Glow effects for dark theme */
--glow-primary: 0 0 20px rgba(120, 53, 15, 0.5); /* amber glow */
--glow-accent: 0 0 20px rgba(147, 51, 234, 0.5); /* purple glow */
```

### Usage

```tsx
<div className="shadow-lg">Elevated card</div>
<button className="shadow-md hover:shadow-xl">Button</button>
```

---

## ⚡ Animation Speed (Normal)

```css
/* Transition durations */
--duration-fast: 150ms; /* Quick interactions */
--duration-normal: 300ms; /* Standard transitions */
--duration-slow: 500ms; /* Dramatic effects */

/* Easing functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animation Classes

```tsx
// Hover effects
<button className="transition-all duration-300 hover:scale-105">
  Hover me
</button>

// Fade in
<div className="animate-fade-in">Content</div>

// Slide in
<div className="animate-slide-in-bottom">Bottom content</div>
```

---

## 🎪 Animation Intensity: Full

### Available Effects

- **Particle effects**: 80% density atmospheric elements
- **Glow intensity**: 30% subtle neon highlights
- **Motion speed**: 1.0x (normal)
- **Page transitions**: Smooth fade + slide
- **Hover effects**: Scale + glow on interactive elements
- **Scroll animations**: Reveal on scroll for sections

---

## 🎯 Component Patterns

### Hero Section

```tsx
<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
  {/* Background video/image with overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

  {/* Content */}
  <div className="relative z-10 px-6 text-center">
    <h1 className="font-heading mb-6 text-8xl font-bold text-gray-50">
      Dutch Queen Mainband
    </h1>
    <p className="font-body mx-auto max-w-2xl text-2xl text-gray-400">
      Tagline here
    </p>
  </div>
</section>
```

### Card Component

```tsx
<div className="rounded-lg bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
  <h3 className="font-heading mb-4 text-2xl font-semibold text-gray-50">
    Card Title
  </h3>
  <p className="font-body text-base text-gray-400">Card content goes here</p>
</div>
```

### Button Styles

```tsx
// Primary button
<button className="bg-[#78350f] hover:bg-[#92400e] text-gray-50 px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
  Primary Action
</button>

// Secondary button
<button className="bg-gray-900 hover:bg-gray-800 text-gray-50 px-6 py-3 rounded-md font-semibold transition-all duration-300 border border-gray-700">
  Secondary Action
</button>

// Accent button (CTA)
<button className="bg-[#9333ea] hover:bg-[#a855f7] text-gray-50 px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
  Call to Action
</button>
```

---

## 🔧 Tailwind Configuration Integration

Add to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#78350f",
        "primary-light": "#92400e",
        "primary-dark": "#451a03",
        secondary: "#115e59",
        "secondary-light": "#14b8a6",
        "secondary-dark": "#042f2e",
        accent: "#9333ea",
        "accent-light": "#a855f7",
        "accent-dark": "#581c87",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        1: "0.5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        8: "4rem",
        10: "5rem",
        12: "6rem",
        16: "8rem",
        20: "10rem",
        24: "12rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
};
```

---

## ✅ Queen Agent Guidelines

### Color Usage Rules

- ✅ ALWAYS use CSS variables or Tailwind color names
- ✅ ALWAYS ensure 4.5:1 contrast ratio minimum
- ✅ White/light text on dark backgrounds
- ❌ NEVER use hardcoded hex values outside this file
- ❌ NEVER use light gray text on white backgrounds

### Component Development

- ✅ Check COMPONENT_TEMPLATES.md first
- ✅ Use shadcn/ui components from src/components/ui/
- ✅ Copy patterns from this design system
- ✅ Use font-heading for titles, font-body for content
- ❌ NEVER deviate from color palette

### Animation Guidelines

- ✅ Use 300ms for standard transitions
- ✅ Add hover effects to interactive elements
- ✅ Implement scroll animations for sections
- ❌ NEVER use animations longer than 500ms

---

**Generated for**: Dutch Queen Mainband Website
**Framework**: Next.js 15 + Queen Claude
**Theme**: Dark theme with amber/teal/purple accent
**Updated**: 2025-10-01
