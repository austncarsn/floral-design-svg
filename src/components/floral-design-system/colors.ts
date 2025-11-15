// Floral Design System Color Palette
// Refined mid-century modern color palette - muted, sophisticated, cohesive

export const floralColors = {
  // Dusty Corals & Terracottas (warm, earthy)
  dustyCoral: "#D4866F",       // Soft terracotta coral
  mutedTerracotta: "#C97A64",  // Warm clay
  softPeach: "#E8A594",        // Gentle peach
  
  // Sage & Olive Greens (natural, calming)
  sageGreen: "#7A9B8E",        // Classic mid-century sage
  oliveMist: "#8A9B7A",        // Olive with gray undertones
  mintSage: "#9DB5A0",         // Soft mint sage
  
  // Muted Teals & Blues (sophisticated cool tones)
  dustyTeal: "#5A8A8A",        // Muted teal
  slateBlue: "#6B8A9B",        // Soft slate blue
  powderBlue: "#8AA6B5",       // Gentle powder blue
  
  // Warm Mustards & Golds (retro accent)
  mustardGold: "#D4A855",      // Warm mustard
  goldenHoney: "#C9A15C",      // Golden honey tone
  butterscotch: "#D9B56C",     // Soft butterscotch
  
  // Soft Lavenders & Mauves (dreamy pastels)
  dustyLavender: "#B5A0B8",    // Muted lavender
  softMauve: "#C4ADB8",        // Gentle mauve
  lilacGray: "#AFA0B0",        // Grayish lilac
  
  // Warm Neutrals (sophisticated bases)
  richBlack: "#1A1A1A",        // Deep black
  charcoal: "#3A3A3A",         // Warm charcoal
  warmTaupe: "#8A7B6F",        // Mid-tone taupe
  sandBeige: "#C9B8A8",        // Warm sand
  cream: "#E8DCC8",            // Creamy beige
  ivory: "#F5EFE0",            // Soft ivory
  warmWhite: "#FAF7F2",        // Warm white
  
  // Accent Pops (use sparingly)
  burntOrange: "#C9754A",      // Retro burnt orange
  cinnabar: "#D46B55",         // Warm red-orange
  ochre: "#C9965A",            // Earth ochre
} as const;

export type FloralColorKey = keyof typeof floralColors;