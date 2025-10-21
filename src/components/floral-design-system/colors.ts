// Floral Design System Color Palette
// Inspired by mid-century modern Scandinavian design

export const floralColors = {
  // Primary Colors
  coralRed: "#E64A2E",
  warmOrange: "#E8663F",
  
  // Secondary Colors
  goldenYellow: "#F2A818",
  sunflowerYellow: "#F5B82E",
  
  // Accent Colors
  tealBlue: "#4A7C8C",
  dustyBlue: "#5C8A9A",
  
  // Neutrals
  richBlack: "#1A1A1A",
  charcoal: "#2D2D2D",
  cream: "#F5EFE0",
  lightBeige: "#E8DCC8",
  warmWhite: "#FAF7F2",
  
  // Background
  sandBeige: "#D4C5AB",
  
  // Extended Palette - New Colors
  terracotta: "#C9604A",
  burntOrange: "#D47647",
  mustardGold: "#D4A62A",
  oliveGreen: "#7A8450",
  sageGreen: "#9CAF88",
  lavenderGray: "#B8A9C9",
  dustyRose: "#C9858D",
  mintGreen: "#A8C9B8",
  softCoral: "#F08080",
  deepTeal: "#2F5B6B",
} as const;

export type FloralColorKey = keyof typeof floralColors;