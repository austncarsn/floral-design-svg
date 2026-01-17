import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";
import { memo } from "react";

export interface CyberLilyVariant {
  palette: string[];
  density: number; // 1-5
  stroke: number; // 0.5-2
  opacity: number; // 0.2-0.9
  motion: number; // 0-4
  scale: number; // 0.85-1.15
}

interface CyberLilyProps {
  variant?: CyberLilyVariant;
}

const DEFAULT_VARIANT: CyberLilyVariant = {
  palette: [COLORS.blue, COLORS.lightBlue, COLORS.purple],
  density: 2, // ~8 shards
  stroke: 1,
  opacity: 0.8,
  motion: 2,
  scale: 1,
};

export const CyberLily = memo(function CyberLily({ variant = DEFAULT_VARIANT }: CyberLilyProps) {
  const shouldReduceMotion = useReducedMotion();
  const { palette, density, stroke, opacity, motion: motionLevel, scale } = variant;

  // Derived values
  const primaryColor = palette[0] || COLORS.blue;
  const secondaryColor = palette[1] || COLORS.lightBlue;
  const tertiaryColor = palette[2] || COLORS.purple;

  // Map density 1-5 to shard count (5, 8, 11, 14, 17)
  const shardCount = 2 + (density * 3);
  const coreRings = Math.max(1, Math.ceil(density / 1.5));

  // Map motion 0-4 to multipliers (0 = static)
  // Base durations: Assembly=60s, Shard=2s, Core=30s, Pulse=1s
  const getDuration = (base: number) => {
    if (shouldReduceMotion || motionLevel === 0) return 0;
    const multipliers = [0, 2, 1, 0.6, 0.4]; // 0=Static, 1=Slow, 2=Normal, 3=Fast, 4=Hyper
    return base * (multipliers[motionLevel] || 1);
  };
  
  const isStatic = shouldReduceMotion || motionLevel === 0;

  return (
    <div 
      className="relative h-full w-full flex items-center justify-center overflow-hidden" 
      aria-hidden="true"
      style={{ opacity: opacity }}
    >
      {/* Matrix Grid Overlay - Static, no motion needed */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${primaryColor}33 1px, transparent 1px), linear-gradient(90deg, ${primaryColor}33 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }} 
      />

      {/* Main Rotating Assembly */}
      <motion.div
        className="relative h-64 w-64 will-change-transform"
        style={{ scale }}
        animate={isStatic ? {} : { rotate: 360 }}
        transition={isStatic ? {} : { duration: getDuration(60), repeat: Infinity, ease: "linear" }}
      >
        {/* Outer Data Ring */}
        <div 
          className="absolute inset-0 rounded-full border border-dashed" 
          style={{ borderColor: `${primaryColor}4D`, borderWidth: stroke }}
        />
        
        {/* Shard Petals */}
        {[...Array(shardCount)].map((_, i) => (
          <motion.div
            key={`shard-${i}`}
            className="absolute top-1/2 left-1/2 h-32 w-8 origin-bottom will-change-transform"
            style={{
              transform: `translate(-50%, -100%) rotate(${i * (360 / shardCount)}deg)`,
            }}
          >
            {/* The Blade - Optimized: Removed backdrop-blur and drop-shadow filter animation */}
            <motion.div
              className="h-full w-full border-[1px]"
              style={{
                borderColor: secondaryColor,
                backgroundColor: `${primaryColor}1A`, // Increased opacity slightly to compensate for loss of blur/glow
                borderWidth: stroke,
                clipPath: "polygon(50% 0%, 100% 85%, 50% 100%, 0% 85%)",
              }}
              animate={isStatic ? {} : { 
                height: ["90%", "100%", "90%"],
                // Removed expensive filter animation
                opacity: [0.8, 1, 0.8] 
              }}
              transition={isStatic ? {} : { duration: getDuration(2), repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
            />
            {/* Circuit Line */}
            <div 
              className="absolute top-4 left-1/2 h-20 -translate-x-1/2" 
              style={{ width: stroke, backgroundColor: `${secondaryColor}80` }}
            />
          </motion.div>
        ))}

        {/* Inner Geometric Core */}
        <motion.div 
            className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 will-change-transform"
            animate={isStatic ? {} : { rotate: -360 }}
            transition={isStatic ? {} : { duration: getDuration(30), repeat: Infinity, ease: "linear" }}
        >
             {[...Array(coreRings)].map((_, i) => (
                 <div 
                    key={i}
                    className="absolute inset-0 border"
                    style={{ 
                      borderColor: tertiaryColor,
                      borderWidth: stroke,
                      transform: `rotate(${i * (180 / coreRings)}deg)` 
                    }}
                 />
             ))}
        </motion.div>

        {/* Center Pulse - Optimized: Removed box-shadow animation */}
        <motion.div 
            className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-sm rotate-45"
            style={{ 
              boxShadow: `0 0 10px ${primaryColor}` // Static shadow instead of dynamic
            }}
            animate={isStatic ? {} : { scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={isStatic ? {} : { duration: getDuration(1), repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
});
