# Video Optimization Guide

**Created**: 2025-10-10
**Purpose**: Instructions for re-encoding video files with proper WebM/VP9 compression

---

## 🚨 Problem Identified

Current video files show **reverse optimization** where WebM files are LARGER than MP4:

| File              | Current Size | Expected Size | Bloat |
| ----------------- | ------------ | ------------- | ----- |
| hero-desktop.webm | 19.0 MB      | ~10 MB        | +90%  |
| hero-mobile.webm  | 6.4 MB       | ~4 MB         | +60%  |

**Impact**: Users on WebM-capable browsers download LARGER files than necessary.

---

## ✅ Solution: Re-encode with FFmpeg

### Prerequisites

Install FFmpeg with VP9 support:

```bash
# macOS (Homebrew)
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows (Chocolatey)
choco install ffmpeg

# Verify installation
ffmpeg -version
```

---

## 🎬 Re-encoding Commands

### Desktop Video (Target: ~10 MB)

```bash
cd public/videos

# Two-pass encoding for best quality/size ratio
ffmpeg -i hero-desktop.mp4 \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 2M \
  -c:a libopus \
  -b:a 128k \
  -pass 1 \
  -f webm \
  /dev/null

ffmpeg -i hero-desktop.mp4 \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 2M \
  -c:a libopus \
  -b:a 128k \
  -pass 2 \
  hero-desktop-optimized.webm
```

### Mobile Video (Target: ~4 MB)

```bash
# Two-pass encoding
ffmpeg -i hero-mobile.mp4 \
  -c:v libvpx-vp9 \
  -crf 37 \
  -b:v 1.5M \
  -c:a libopus \
  -b:a 96k \
  -pass 1 \
  -f webm \
  /dev/null

ffmpeg -i hero-mobile.mp4 \
  -c:v libvpx-vp9 \
  -crf 37 \
  -b:v 1.5M \
  -c:a libopus \
  -b:a 96k \
  -pass 2 \
  hero-mobile-optimized.webm
```

---

## 📊 Expected Results

### Before Optimization

- Desktop: 15.8 MB (MP4) + 19.0 MB (WebM) = 34.8 MB
- Mobile: 5.7 MB (MP4) + 6.4 MB (WebM) = 12.1 MB
- **Total**: 46.9 MB

### After Optimization

- Desktop: 15.8 MB (MP4) + ~10 MB (WebM) = 25.8 MB
- Mobile: 5.7 MB (MP4) + ~4 MB (WebM) = 9.7 MB
- **Total**: ~35.5 MB

**Savings**: 11.4 MB (~24% reduction)

---

## 🔄 Deployment Steps

```bash
# 1. Replace with optimized versions
mv hero-desktop-optimized.webm hero-desktop.webm
mv hero-mobile-optimized.webm hero-mobile.webm

# 2. Clean up
rm -f ffmpeg2pass-*.log

# 3. Test and commit
npm run dev
git add public/videos/hero-*.webm
git commit -m "perf: optimize WebM video encoding (6-8MB savings)"
```

---

**Last Updated**: 2025-10-10
