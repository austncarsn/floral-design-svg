import { COLORS, PALETTE_DISPLAY } from "./tokens/florals2026";
import { GlassOrchidVariant } from "./florals/GlassOrchid";

export interface StudyCardData {
  id: string;
  title: string;
  subtitle: string;
  variant: GlassOrchidVariant;
}

const generateVariants = (): StudyCardData[] => {
  const variants: StudyCardData[] = [];
  let index = 0;

  // 5 densities (1-5) x 4 motions (0-3) = 20 variations
  for (let d = 1; d <= 5; d++) {
    for (let m = 0; m <= 3; m++) {
      index++;
      
      const p1 = PALETTE_DISPLAY[(index * 2) % PALETTE_DISPLAY.length];
      const p2 = PALETTE_DISPLAY[(index * 4) % PALETTE_DISPLAY.length];
      const p3 = PALETTE_DISPLAY[(index * 6) % PALETTE_DISPLAY.length];

      // Curvature: 20-100%
      // Higher density -> slightly less rounded to fit better
      const curvature = 100 - (d * 10); 

      const opacity = 0.85 - ((d - 1) * 0.08);

      const scale = 0.9 + ((index % 5) * 0.05);

      variants.push({
        id: `glass-orchid-${index.toString().padStart(2, '0')}`,
        title: `Glass Orchid Study ${index.toString().padStart(2, '0')}`,
        subtitle: `Density ${d}, Motion ${m}`,
        variant: {
          palette: [p1, p2, p3],
          density: d,
          curvature,
          opacity,
          motion: m,
          scale
        }
      });
    }
  }

  return variants;
};

export const GLASS_ORCHID_VARIANTS = generateVariants();
