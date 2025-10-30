#!/bin/bash

# Band Website Setup Script
# This script helps you quickly set up a new band website from the template

set -e

echo "======================================"
echo "   Band Website Setup Wizard         "
echo "======================================"
echo ""

# Function to convert to lowercase and replace spaces with hyphens
sanitize_id() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g'
}

# Get band information
echo "Let's set up your band website!"
echo ""

read -rp "Band Name (e.g., 'The Rolling Stones'): " BAND_NAME
read -rp "Band Tagline (e.g., 'Rock and Roll Legends'): " BAND_TAGLINE
read -rp "Band Genre (e.g., 'rock'): " BAND_GENRE
read -rp "Year Established (e.g., '2024'): " BAND_YEAR
read -rp "Primary Email: " BAND_EMAIL
read -rp "Website Domain (e.g., 'therollingstones.com'): " BAND_DOMAIN

# Generate band ID from band name
BAND_ID=$(sanitize_id "$BAND_NAME")
echo ""
echo "Generated Band ID: $BAND_ID"
echo ""

# Ask for social media (optional)
echo "Social Media Links (press Enter to skip):"
read -rp "Facebook username: " FACEBOOK_USER
read -rp "Instagram username: " INSTAGRAM_USER
read -rp "YouTube channel username: " YOUTUBE_USER
read -rp "Twitter/X username: " TWITTER_USER

# Create band directory structure
echo ""
echo "Creating content structure..."

# Copy template to new band directory
CONTENT_DIR="content/bands/$BAND_ID"

if [ -d "$CONTENT_DIR" ]; then
    echo "Warning: Band directory already exists at $CONTENT_DIR"
    read -rp "Do you want to overwrite it? (y/n): " OVERWRITE
    if [ "$OVERWRITE" != "y" ]; then
        echo "Setup cancelled."
        exit 1
    fi
    rm -rf "$CONTENT_DIR"
fi

cp -r content/bands/template-band "$CONTENT_DIR"

# Update band-profile.json
echo "Updating band profile..."
cat > "$CONTENT_DIR/band-profile.json" << EOF
{
  "id": "$BAND_ID",
  "name": "$BAND_NAME",
  "tagline": "$BAND_TAGLINE",
  "genre": "$BAND_GENRE",
  "established": "$BAND_YEAR",
  "theme": {
    "primaryColor": "amber-900",
    "secondaryColor": "teal-800",
    "accentColor": "purple-600",
    "animationIntensity": "full",
    "particleEffects": true,
    "glowEffects": true
  },
  "seo": {
    "metaTitle": "$BAND_NAME | Official Website",
    "metaDescription": "$BAND_TAGLINE - Official website of $BAND_NAME",
    "keywords": ["$BAND_GENRE", "band", "live music", "concerts", "$BAND_NAME"],
    "ogImage": "/content/bands/$BAND_ID/assets/logos/og-image.jpg"
  },
  "branding": {
    "logoMain": "/content/bands/$BAND_ID/assets/logos/main-logo.png",
    "logoIcon": "/content/bands/$BAND_ID/assets/logos/icon.png",
    "favicon": "/content/bands/$BAND_ID/assets/logos/favicon.ico"
  }
}
EOF

# Update contact.json
echo "Updating contact information..."
CONTACT_JSON="$CONTENT_DIR/data/contact.json"
if [ -n "$BAND_EMAIL" ]; then
    sed -i.bak "s/contact@yourband.com/$BAND_EMAIL/g" "$CONTACT_JSON"
    sed -i.bak "s/booking@yourband.com/booking@$BAND_DOMAIN/g" "$CONTACT_JSON"
    sed -i.bak "s/press@yourband.com/press@$BAND_DOMAIN/g" "$CONTACT_JSON"
    sed -i.bak "s/management@yourband.com/management@$BAND_DOMAIN/g" "$CONTACT_JSON"
    rm "$CONTACT_JSON.bak"
fi

# Update social.json
echo "Updating social media links..."
SOCIAL_JSON="$CONTENT_DIR/data/social.json"
if [ -n "$FACEBOOK_USER" ]; then
    sed -i.bak "s|https://facebook.com/yourband|https://facebook.com/$FACEBOOK_USER|g" "$SOCIAL_JSON"
    sed -i.bak "s|@yourband|@$FACEBOOK_USER|g" "$SOCIAL_JSON"
fi
if [ -n "$INSTAGRAM_USER" ]; then
    sed -i.bak "s|https://instagram.com/yourband|https://instagram.com/$INSTAGRAM_USER|g" "$SOCIAL_JSON"
fi
if [ -n "$YOUTUBE_USER" ]; then
    sed -i.bak "s|https://youtube.com/@yourband|https://youtube.com/@$YOUTUBE_USER|g" "$SOCIAL_JSON"
fi
if [ -n "$TWITTER_USER" ]; then
    sed -i.bak "s|https://twitter.com/yourband|https://twitter.com/$TWITTER_USER|g" "$SOCIAL_JSON"
fi
rm -f "$SOCIAL_JSON.bak"

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "Creating .env.local..."
    cp .env.example .env.local
    sed -i.bak "s/NEXT_PUBLIC_SITE_NAME=Your Band Name/NEXT_PUBLIC_SITE_NAME=$BAND_NAME/g" .env.local
    sed -i.bak "s/NEXT_PUBLIC_BAND_ID=template-band/NEXT_PUBLIC_BAND_ID=$BAND_ID/g" .env.local
    rm .env.local.bak
else
    echo ".env.local already exists. Please update it manually with:"
    echo "  NEXT_PUBLIC_BAND_ID=$BAND_ID"
    echo "  NEXT_PUBLIC_SITE_NAME=$BAND_NAME"
fi

echo ""
echo "======================================"
echo "   Setup Complete! 🎸                "
echo "======================================"
echo ""
echo "Your band website has been configured with:"
echo "  Band ID: $BAND_ID"
echo "  Content: $CONTENT_DIR"
echo ""
echo "Next steps:"
echo "1. Add your media assets:"
echo "   - Hero image: $CONTENT_DIR/assets/backgrounds/hero/main.jpg"
echo "   - Gallery images: $CONTENT_DIR/assets/gallery/"
echo "   - Logo: $CONTENT_DIR/assets/logos/main-logo.png"
echo ""
echo "2. Start the development server:"
echo "   npm run dev"
echo ""
echo "3. Visit http://localhost:3000 to see your website!"
echo ""
echo "For more customization, edit the files in $CONTENT_DIR/"