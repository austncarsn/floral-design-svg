import { COLORS, PALETTE_DISPLAY } from "./tokens/florals2026";
import { CyberLilyVariant } from "./florals/CyberLily";

export interface StudyCardData {
  id: string;
  title: string;
  subtitle: string;
  variant: CyberLilyVariant;
}

const generateVariants = (): StudyCardData[] => {
  const variants: StudyCardData[] = [];
  let index = 0;

  // 5 densities (1-5) x 4 motions (0-3) = 20 variations
  for (let d = 1; d <= 5; d++) {
    for (let m = 0; m <= 3; m++) {
      index++;
      
      // Cycle palettes deterministically
      // Use primes to offset selection for variety
      const p1 = PALETTE_DISPLAY[(index * 1) % PALETTE_DISPLAY.length];
      const p2 = PALETTE_DISPLAY[(index * 3) % PALETTE_DISPLAY.length];
      const p3 = PALETTE_DISPLAY[(index * 5) % PALETTE_DISPLAY.length];

      // Calculate numeric props within constraints
      // Stroke: 0.5 - 2.0
      // Cycle through 4 steps: 0.5, 1.0, 1.5, 2.0
      const stroke = 0.5 + (m * 0.5); 

      // Opacity: 0.2 - 0.9
      // Base on density: higher density = slightly lower opacity to prevent clutter
      const opacity = 0.9 - ((d - 1) * 0.1);

      // Scale: 0.85 - 1.15
      // Modulate by index
      const scale = 0.85 + ((index % 7) * 0.05);

      variants.push({
        id: `cyber-lily-${index.toString().padStart(2, '0')}`,
        title: `Cyber Lily Study ${index.toString().padStart(2, '0')}`,
        subtitle: `Density ${d}, Motion ${m}`,
        variant: {
          palette: [p1, p2, p3],
          density: d,
          stroke,
          opacity,
          motion: m,
          scale
        }
      });
    }
  }

  return variants;
};

export const CYBER_LILY_VARIANTS = generateVariants();
