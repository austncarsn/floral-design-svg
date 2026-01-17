import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function DigitalLotus() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden" aria-hidden="true">
      {/* Outer Layer - Blue Wireframe */}
      <motion.div 
        className="relative h-48 w-48"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={shouldReduceMotion ? {} : { duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-24 w-24 border"
            style={{
              borderColor: `${COLORS.blue}60`, // Opacity handled via hex
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translate(20px, 20px)`,
            }}
          />
        ))}
      </motion.div>

      {/* Middle Layer - Green Filled/Glassy */}
      <motion.div 
        className="absolute h-32 w-32"
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={shouldReduceMotion ? {} : { duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-20 w-20 backdrop-blur-md border"
            style={{
              backgroundColor: `${COLORS.green}20`,
              borderColor: `${COLORS.green}50`,
              transform: `translate(-50%, -50%) rotate(${i * 90}deg)`,
            }}
          />
        ))}
      </motion.div>

      {/* Center Core - Yellow Pulse */}
      <motion.div 
        className="absolute h-8 w-8"
        style={{ 
          backgroundColor: COLORS.yellow,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" 
        }}
        animate={shouldReduceMotion ? {} : { 
          scale: [1, 1.5, 1],
          rotate: 180,
        }}
        transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Decorative center ring */}
      <div className="absolute h-16 w-16 rounded-full border" style={{ borderColor: `${COLORS.yellow}40` }} />
    </div>
  );
}
