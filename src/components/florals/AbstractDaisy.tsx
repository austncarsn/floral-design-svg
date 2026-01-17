import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function AbstractDaisy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full flex items-center justify-center" aria-hidden="true">
      <motion.div 
        className="grid grid-cols-2 gap-2"
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={shouldReduceMotion ? {} : { duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[COLORS.yellow, COLORS.bg, COLORS.bg, COLORS.yellow].map((color, i) => (
          <div 
            key={i}
            className="h-24 w-24 rounded-full mix-blend-normal border border-black/5"
            style={{ backgroundColor: color === COLORS.bg ? 'rgba(0,0,0,0.02)' : color }}
          />
        ))}
        {/* Center */}
        <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-[#212121] ring-4 ring-white/50" />
      </motion.div>
    </div>
  );
}
