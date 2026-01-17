import { memo, useMemo } from "react";
import { motion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export interface GlassOrchidVariant {
  palette: string[];
  density: number; // 1-5
  curvature: number; // 0-100 (roundedness)
  opacity: number; // 0.2-0.9
  motion: number; // 0-4
  scale: number; // 0.85-1.15
}

interface GlassOrchidProps {
  variant?: GlassOrchidVariant;
  className?: string;
}

const DEFAULT_VARIANT: GlassOrchidVariant = {
  palette: [COLORS.lavender, COLORS.lightPink, COLORS.bioSyntheticBlue], // Updated to fresher blue
  density: 3,
  curvature: 60, // Softer curves
  opacity: 0.6, // More transparent
  motion: 1, // Slower motion
  scale: 1,
};

export const GlassOrchid = memo(function GlassOrchid({ 
  variant = DEFAULT_VARIANT,
  className = ""
}: GlassOrchidProps) {
  const { palette, density, curvature, opacity, motion: motionLevel, scale } = variant;

  const color1 = palette[0] || COLORS.lavender;
  const color2 = palette[1] || COLORS.lightPink;
  const color3 = palette[2] || COLORS.lightBlue;

  // Optimization: Pre-calculate layers to avoid re-render cost
  const layers = useMemo(() => {
    const petalCount = 3 + density; // 4 to 8 petals
    const layerCount = Math.max(2, Math.min(4, Math.ceil(density / 1.5))); // 2 to 4 layers
    
    return Array.from({ length: layerCount }).map((_, layerIndex) => {
      const isEven = layerIndex % 2 === 0;
      const size = 90 - (layerIndex * 15); // Less drastic size difference
      const layerColor = [color1, color2, color3][layerIndex % 3];
      
      return {
        id: layerIndex,
        size,
        color: layerColor,
        direction: isEven ? 1 : -1,
        petals: Array.from({ length: petalCount }).map((__, i) => ({
          rotation: i * (360 / petalCount)
        }))
      };
    });
  }, [density, color1, color2, color3]);

  // Animation duration
  const animationDuration = motionLevel === 0 ? 0 : 80 - (motionLevel * 10); // Slower: 80s to 40s
  
  return (
    <div 
      className={`relative flex items-center justify-center w-full h-full overflow-hidden min-h-[160px] ${className}`}
      style={{ opacity }}
    >
      <motion.div 
        className="relative aspect-square"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: scale, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          height: '100%',
          width: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          aspectRatio: '1/1'
        }}
      >
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            {layers.map((layer) => (
            <motion.div
                key={layer.id}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  width: `${layer.size}%`,
                  height: `${layer.size}%`,
                  left: `${(100 - layer.size) / 2}%`,
                  top: `${(100 - layer.size) / 2}%`,
                }}
                animate={motionLevel > 0 ? { rotate: layer.direction === 1 ? 360 : -360 } : {}}
                transition={motionLevel > 0 ? { duration: animationDuration, repeat: Infinity, ease: "linear" } : {}}
            >
                {layer.petals.map((petal, i) => (
                <div
                    key={i}
                    className="absolute w-[22%] h-[50%] origin-bottom left-[39%] bottom-[50%] backdrop-blur-[2px]"
                    style={{
                      backgroundColor: `${layer.color}08`, // Extremely subtle tint
                      borderColor: `${layer.color}40`, // 25% opacity border
                      borderRadius: `${curvature}% ${curvature}% 10% 10%`, // More petal-like
                      transform: `rotate(${petal.rotation}deg)`,
                      borderWidth: '1px',
                      boxShadow: `inset 0 0 15px ${layer.color}15`, // Inner glow instead of outer
                    }}
                />
                ))}
            </motion.div>
            ))}

            {/* Core - Refined */}
            <div 
              className="absolute top-1/2 left-1/2 w-[8%] h-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/30 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            />
        </div>
      </motion.div>
    </div>
  );
});
