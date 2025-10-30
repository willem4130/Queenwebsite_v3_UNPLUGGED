# Video Background Setup Guide

## Quick Start

1. **Add your MP4 videos** to the `/public/videos/` directory
2. **Name them**: `about-bg-1.mp4`, `about-bg-2.mp4`, etc.
3. **Visit** http://localhost:3000 to see them in action!

## Current Implementation

The About section (second section below the forest hero) now supports video backgrounds with:

- ✅ Automatic video playback (muted for autoplay support)
- ✅ Smooth fade transitions between multiple videos
- ✅ Fallback to dark teal color if videos fail to load
- ✅ Loading indicator while videos buffer
- ✅ Preserves all existing animations and effects
- ✅ Optimized overlay for text readability

## Adding Videos

1. Place MP4 files in `/public/videos/`
2. Update the video array in `src/app/page.tsx` (line ~259):

```tsx
<VideoBackground
  videos={[
    "/videos/about-bg-1.mp4",
    "/videos/about-bg-2.mp4", // Uncomment and add your videos
    "/videos/about-bg-3.mp4",
  ]}
  fallbackColor="#2C3E3A"
  overlayOpacity={0.5}
/>
```

## Video Recommendations

- **Content**: Atmospheric, abstract, or nature-themed footage
- **Duration**: 10-30 seconds (they loop automatically)
- **Style**: Subtle movement that complements the text
- **Examples**:
  - Slow-moving clouds or mist
  - Abstract liquid or smoke effects
  - Forest canopy movement
  - Light patterns through trees

## Customization Options

In the `VideoBackground` component props:

- `overlayOpacity`: Adjust darkness (0-1, default 0.5)
- `fallbackColor`: Background color when no video loads
- Video rotation: Automatically cycles every 30 seconds

## Performance Tips

- Keep videos under 20MB for fast loading
- Use 1080p or 720p resolution
- Remove audio tracks to reduce file size
- Consider using a CDN for production

## Troubleshooting

- **Videos not playing**: Ensure they're in MP4 format with H.264 codec
- **Autoplay issues**: Videos must be muted (already handled)
- **Performance**: Disable on mobile devices if needed

## Next Steps

1. Add your video files
2. Update the video paths in the component
3. Adjust overlay opacity if needed for better text contrast
4. Test on different devices and browsers
