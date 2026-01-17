import { memo, useMemo } from "react";
import { motion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export interface NeonRoseVariant {
  palette: string[];
  rotationSpeed: number; // 0-10
  bloomSize: number; // 0.5-1.5
  glowIntensity: number; // 0-1
}

const DEFAULT_VARIANT: NeonRoseVariant = {
  // Switched to softer, more harmonious pinks/purples for elegance
  palette: [COLORS.freshPurple, COLORS.millennialPink, COLORS.lavender], 
  rotationSpeed: 0.8, // Slower, more majestic
  bloomSize: 1,
  glowIntensity: 0.4, // Reduced for "cleaner" look
};

export const NeonRose = memo(function NeonRose({ 
  variant = DEFAULT_VARIANT,
  className = ""
}: { variant?: NeonRoseVariant, className?: string }) {
  const { palette, rotationSpeed, bloomSize, glowIntensity } = variant;

  const petals = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      scale: 1 - (i * 0.04), // More petals, smoother gradient
      rotation: i * 22.5, // Tighter spiral
      delay: i * 0.05,
      color: palette[i % palette.length],
    }));
  }, [palette]);

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[160px] overflow-hidden ${className}`}>
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: bloomSize, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {petals.map((petal, i) => (
          <motion.div
            key={petal.id}
            className="absolute border border-white/40 backdrop-blur-[1px]"
            style={{
              width: `${65 - i * 3.5}%`,
              height: `${65 - i * 3.5}%`,
              borderColor: petal.color,
              backgroundColor: `${petal.color}05`, // Very subtle fill
              borderRadius: "50% 50% 50% 0%", // More organic petal shape
              boxShadow: `inset 0 0 ${10 * glowIntensity}px ${petal.color}20`, // Internal glow only
            }}
            animate={{ 
              rotate: [0 + (i * 15), 360 + (i * 15)],
            }}
            transition={{ 
              rotate: {
                duration: 60 / (rotationSpeed || 1), // Very slow rotation
                repeat: Infinity, 
                ease: "linear",
              }
            }}
          />
        ))}
        
        {/* Core - Minimalist */}
        <div className="absolute w-[4%] h-[4%] bg-white rounded-full shadow-[0_0_15px_white]" />
      </motion.div>
    </div>
  );
});
