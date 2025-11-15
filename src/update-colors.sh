#!/bin/bash
# Batch color update script for all floral design SVG components
# This script replaces old bright colors with new refined mid-century modern colors

# Define color mappings (OLD → NEW)
declare -A COLOR_MAP=(
  ["#E64A2E"]="#D4866F"  # Bright coral → Dusty coral
  ["#E8663F"]="#C97A64"  # Warm orange → Muted terracotta
  ["#F2A818"]="#D4A855"  # Bright yellow → Mustard gold
  ["#F5B82E"]="#C9A15C"  # Sunflower yellow → Golden honey
  ["#4A7C8C"]="#5A8A8A"  # Bright teal → Dusty teal
  ["#5C8A9A"]="#6B8A9B"  # Dusty blue OLD → Slate blue
  ["#F5EFE0"]="#E8DCC8"  # Cream OLD → Cream NEW
  ["#E8DCC8"]="#C9B8A8"  # Light beige OLD → Sand beige NEW
  ["#D4C5AB"]="#C9B8A8"  # Sand beige OLD → Sand beige NEW
  ["#C9604A"]="#C97A64"  # Terracotta → Muted terracotta
  ["#D47647"]="#C9754A"  # Burnt orange OLD → Burnt orange NEW
  ["#D4A62A"]="#D4A855"  # Mustard gold OLD → Mustard gold NEW
  ["#7A8450"]="#8A9B7A"  # Olive green → Olive mist
  ["#9CAF88"]="#7A9B8E"  # Sage green OLD → Sage green NEW
  ["#B8A9C9"]="#B5A0B8"  # Lavender gray OLD → Dusty lavender
  ["#C9858D"]="#C4ADB8"  # Dusty rose → Soft mauve
  ["#A8C9B8"]="#9DB5A0"  # Mint green → Mint sage
  ["#F08080"]="#E8A594"  # Soft coral OLD → Soft peach
  ["#2F5B6B"]="#5A8A8A"  # Deep teal → Dusty teal
  ["#2D2D2D"]="#3A3A3A"  # Charcoal OLD → Warm charcoal
)

# Target directory
TARGET_DIR="./components/floral-design-system"

# Loop through all .tsx files in the directory
for file in "$TARGET_DIR"/*.tsx; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    
    # Apply each color replacement
    for old_color in "${!COLOR_MAP[@]}"; do
      new_color="${COLOR_MAP[$old_color]}"
      # Use sed to replace colors (case-insensitive for hex codes)
      sed -i '' "s/$old_color/$new_color/gI" "$file"
    done
  fi
done

echo "✨ Color update complete! All designs now use the refined mid-century modern palette."
