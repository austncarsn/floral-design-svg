import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function DataDandelion() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full flex items-center justify-center" aria-hidden="true">
      <div className="relative h-56 w-56 flex items-center justify-center">
         {/* Dense Fibers */}
         {[...Array(48)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-[0.5px] w-28 origin-left"
              style={{
                background: `linear-gradient(to right, ${COLORS.lightBlue}00, ${COLORS.lightBlue}4D, ${COLORS.lightBlue}99)`,
                rotate: i * (360 / 48)
              }}
              initial={{ scaleX: 0 }}
              animate={shouldReduceMotion ? { scaleX: 1 } : { scaleX: [0.85, 1, 0.85] }}
              transition={shouldReduceMotion ? {} : {
                duration: 6,
                repeat: Infinity,
                delay: i * 0.02,
                ease: "easeInOut"
              }}
            >
              {/* Traveling Packet */}
              <motion.div 
                className="absolute top-1/2 h-[2px] w-[6px] -translate-y-1/2 rounded-full"
                style={{ backgroundColor: COLORS.blue }}
                animate={shouldReduceMotion ? { opacity: 1, left: "100%" } : { left: ["20%", "100%"], opacity: [0, 1, 0] }}
                transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity, delay: ((i * 13) % 48) * 0.04, ease: "linear" }}
              />
              {/* Tip */}
              <div className="absolute right-0 top-1/2 h-[2px] w-[2px] -translate-y-1/2 translate-x-1/2 rounded-full bg-white/80" />
            </motion.div>
         ))}
         {/* Center Hub */}
         <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg"
              style={{ backgroundColor: COLORS.charcoal, borderColor: `${COLORS.lightBlue}80`, boxShadow: `0 0 20px ${COLORS.blue}4D` }}>
            <div className={`h-6 w-6 rounded-full border ${shouldReduceMotion ? '' : 'animate-spin-slow'}`} style={{ borderColor: COLORS.lightBlue, animationDuration: '10s' }} />
         </div>
      </div>
    </div>
  );
}
