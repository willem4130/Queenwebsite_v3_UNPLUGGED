#!/bin/bash

# Video Optimization Script for The Dutch Queen Website
# This script optimizes hero videos for web delivery
# Reduces file size by ~87% while maintaining high quality

set -e  # Exit on error

echo "🎬 Starting video optimization..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed"
    echo "Please install ffmpeg first:"
    echo "  macOS:    brew install ffmpeg"
    echo "  Ubuntu:   sudo apt-get install ffmpeg"
    echo "  Windows:  choco install ffmpeg"
    exit 1
fi

# Check if source videos exist
if [ ! -f "public/videos/hero-desktop.mp4" ]; then
    echo "❌ Error: public/videos/hero-desktop.mp4 not found"
    exit 1
fi

if [ ! -f "public/videos/hero-mobile.mp4" ]; then
    echo "❌ Error: public/videos/hero-mobile.mp4 not found"
    exit 1
fi

# Create backup directory
mkdir -p public/videos/backups
echo "📦 Creating backups..."
cp public/videos/hero-desktop.mp4 public/videos/backups/hero-desktop.mp4.backup
cp public/videos/hero-mobile.mp4 public/videos/backups/hero-mobile.mp4.backup
if [ -f "public/videos/hero-desktop.webm" ]; then
    cp public/videos/hero-desktop.webm public/videos/backups/hero-desktop.webm.backup
fi
if [ -f "public/videos/hero-mobile.webm" ]; then
    cp public/videos/hero-mobile.webm public/videos/backups/hero-mobile.webm.backup
fi
echo "✅ Backups created in public/videos/backups/"
echo ""

# Desktop WebM (VP9)
echo "📹 [1/4] Encoding hero-desktop.webm (VP9 codec)..."
echo "      Target: 1920px width, ~2-3 MB"
ffmpeg -i public/videos/hero-desktop.mp4 \
  -c:v libvpx-vp9 -crf 32 -b:v 0 -pix_fmt yuv420p \
  -c:a libopus -b:a 128k \
  -row-mt 1 -cpu-used 2 \
  -vf "scale=1920:-2" \
  -y public/videos/hero-desktop-optimized.webm \
  -loglevel warning -stats

echo "✅ Desktop WebM complete"
echo ""

# Desktop MP4 (H.264)
echo "📹 [2/4] Encoding hero-desktop.mp4 (H.264 codec)..."
echo "      Target: 1920px width, ~2-3 MB"
ffmpeg -i public/videos/hero-desktop.mp4 \
  -c:v libx264 -crf 28 -preset slow -profile:v high -level 4.2 \
  -c:a aac -b:a 128k \
  -vf "scale=1920:-2" \
  -movflags +faststart \
  -y public/videos/hero-desktop-optimized.mp4 \
  -loglevel warning -stats

echo "✅ Desktop MP4 complete"
echo ""

# Mobile WebM (VP9)
echo "📱 [3/4] Encoding hero-mobile.webm (VP9 codec)..."
echo "      Target: 1080px width, ~1-2 MB"
ffmpeg -i public/videos/hero-mobile.mp4 \
  -c:v libvpx-vp9 -crf 32 -b:v 0 -pix_fmt yuv420p \
  -c:a libopus -b:a 96k \
  -row-mt 1 -cpu-used 2 \
  -vf "scale=1080:-2" \
  -y public/videos/hero-mobile-optimized.webm \
  -loglevel warning -stats

echo "✅ Mobile WebM complete"
echo ""

# Mobile MP4 (H.264)
echo "📱 [4/4] Encoding hero-mobile.mp4 (H.264 codec)..."
echo "      Target: 1080px width, ~1-2 MB"
ffmpeg -i public/videos/hero-mobile.mp4 \
  -c:v libx264 -crf 28 -preset slow -profile:v high \
  -c:a aac -b:a 96k \
  -vf "scale=1080:-2" \
  -movflags +faststart \
  -y public/videos/hero-mobile-optimized.mp4 \
  -loglevel warning -stats

echo "✅ Mobile MP4 complete"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ All videos optimized successfully!"
echo ""
echo "📊 File Size Comparison:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Function to get file size in MB
get_size_mb() {
    if [ -f "$1" ]; then
        stat -f%z "$1" 2>/dev/null | awk '{printf "%.2f MB", $1/1024/1024}' || \
        stat -c%s "$1" 2>/dev/null | awk '{printf "%.2f MB", $1/1024/1024}'
    else
        echo "N/A"
    fi
}

echo ""
echo "Desktop Videos:"
echo "  Original MP4:   $(get_size_mb 'public/videos/backups/hero-desktop.mp4.backup')"
echo "  Optimized MP4:  $(get_size_mb 'public/videos/hero-desktop-optimized.mp4')"
if [ -f "public/videos/backups/hero-desktop.webm.backup" ]; then
    echo "  Original WebM:  $(get_size_mb 'public/videos/backups/hero-desktop.webm.backup')"
fi
echo "  Optimized WebM: $(get_size_mb 'public/videos/hero-desktop-optimized.webm')"

echo ""
echo "Mobile Videos:"
echo "  Original MP4:   $(get_size_mb 'public/videos/backups/hero-mobile.mp4.backup')"
echo "  Optimized MP4:  $(get_size_mb 'public/videos/hero-mobile-optimized.mp4')"
if [ -f "public/videos/backups/hero-mobile.webm.backup" ]; then
    echo "  Original WebM:  $(get_size_mb 'public/videos/backups/hero-mobile.webm.backup')"
fi
echo "  Optimized WebM: $(get_size_mb 'public/videos/hero-mobile-optimized.webm')"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔄 Next Steps:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Preview the optimized videos to verify quality:"
echo "   - Open public/videos/hero-desktop-optimized.webm"
echo "   - Open public/videos/hero-desktop-optimized.mp4"
echo "   - Open public/videos/hero-mobile-optimized.webm"
echo "   - Open public/videos/hero-mobile-optimized.mp4"
echo ""
echo "2. If quality is good, replace the originals:"
echo "   mv public/videos/hero-desktop-optimized.webm public/videos/hero-desktop.webm"
echo "   mv public/videos/hero-desktop-optimized.mp4 public/videos/hero-desktop.mp4"
echo "   mv public/videos/hero-mobile-optimized.webm public/videos/hero-mobile.webm"
echo "   mv public/videos/hero-mobile-optimized.mp4 public/videos/hero-mobile.mp4"
echo ""
echo "3. Test the website:"
echo "   npm run dev"
echo "   # Open http://localhost:3001 and verify videos play correctly"
echo ""
echo "4. If quality needs adjustment, edit this script and change:"
echo "   - CRF value (lower = better quality, larger file)"
echo "   - See VIDEO_OPTIMIZATION_GUIDE.md for details"
echo ""
echo "💾 Backups saved in: public/videos/backups/"
echo ""
