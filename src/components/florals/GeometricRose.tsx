import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function GeometricRose() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full flex items-center justify-center" aria-hidden="true">
      <motion.div 
        className="relative h-48 w-48"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={shouldReduceMotion ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 top-0 h-full w-full rounded-full border-2 opacity-60"
            style={{
              borderColor: COLORS.red,
              transform: `rotate(${i * 30}deg) scale(${0.5 + (i * 0.1)})`,
            }}
          />
        ))}
        <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm" />
      </motion.div>
    </div>
  );
}
