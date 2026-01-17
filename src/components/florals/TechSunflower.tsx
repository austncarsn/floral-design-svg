import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function TechSunflower() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full flex items-center justify-center" aria-hidden="true">
      <div className="relative h-48 w-48">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 h-24 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ 
              background: `linear-gradient(to top, ${COLORS.yellow}, transparent)`,
              transform: `rotate(${i * 30}deg) translateY(-20px)`,
            }}
            animate={shouldReduceMotion ? {} : { height: ["40%", "100%", "40%"] }}
            transition={shouldReduceMotion ? {} : { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.1 
            }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 flex items-center justify-center"
             style={{ borderColor: COLORS.charcoal, backgroundColor: COLORS.yellow }}>
             <div className="h-12 w-12 rounded-full" style={{ backgroundColor: COLORS.charcoal }} />
        </div>
      </div>
    </div>
  );
}
