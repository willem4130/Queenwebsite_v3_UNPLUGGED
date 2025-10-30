# Video Assets Directory

Place your MP4 video files in this directory for the About section background.

## Recommended Video Specifications:

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Frame Rate**: 24-30 fps
- **File Size**: 10-20MB max (for optimal loading)
- **Duration**: 10-30 seconds (will loop)

## Naming Convention:

- `about-bg-1.mp4` - Primary background video
- `about-bg-2.mp4` - Secondary background video (if using rotation)
- `about-bg-3.mp4` - Additional videos as needed

## Optimization Tips:

1. Use video compression tools like HandBrake or FFmpeg
2. Remove audio track (videos will be muted anyway)
3. Consider creating mobile versions at lower resolution
4. Use subtle, atmospheric content that won't distract from text

## Example FFmpeg command for optimization:

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -vf scale=1920:1080 -an output.mp4
```
