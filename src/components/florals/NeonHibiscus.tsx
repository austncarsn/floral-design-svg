import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function NeonHibiscus() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full flex items-center justify-center" aria-hidden="true">
      <motion.div
        className="relative"
        animate={shouldReduceMotion ? {} : { rotate: [0, 5, 0, -5, 0] }}
        transition={shouldReduceMotion ? {} : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
         {/* Neon Tube Petals */}
         {[...Array(5)].map((_, i) => (
          <motion.div
             key={i}
             className="absolute bottom-0 left-0 h-24 w-24 origin-bottom-left rounded-[50%_50%_0_50%]"
             style={{
               border: `3px solid ${COLORS.hotPink}`,
               backgroundColor: `${COLORS.hotPink}05`, // Very subtle fill
               transform: `rotate(${i * 72}deg)`,
               boxShadow: `0 0 10px ${COLORS.hotPink}, inset 0 0 10px ${COLORS.hotPink}`
             }}
             animate={shouldReduceMotion ? {} : {
                opacity: [0.8, 1, 0.9, 0.8],
                boxShadow: [
                    `0 0 8px ${COLORS.hotPink}, inset 0 0 8px ${COLORS.hotPink}`,
                    `0 0 16px ${COLORS.hotPink}, inset 0 0 16px ${COLORS.hotPink}`,
                    `0 0 8px ${COLORS.hotPink}, inset 0 0 8px ${COLORS.hotPink}`
                ]
             }}
             transition={shouldReduceMotion ? {} : { duration: 0.1, repeat: Infinity, repeatDelay: (i * 0.6) % 3, ease: "linear" }}
          >
            {/* Inner Neon Vein */}
            <div 
                className="absolute bottom-2 left-2 h-16 w-16 rounded-[50%_50%_0_50%] border-t-[2px] border-r-[2px] border-[#FF1744]" 
                style={{ opacity: 0.8 }}
            />
          </motion.div>
         ))}

         {/* Stamen - The Neon Rod */}
         <div className="absolute bottom-0 left-0 h-32 w-2 origin-bottom -translate-x-1/2 rotate-12">
            <motion.div 
              className="h-full w-full rounded-full"
              style={{ 
                  background: COLORS.yellow,
                  boxShadow: `0 0 15px ${COLORS.yellow}`
              }}
              animate={shouldReduceMotion ? {} : { height: ["90%", "100%", "90%"] }}
              transition={shouldReduceMotion ? {} : { duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
            />
            {/* Pollen Tips */}
            <div className="absolute -top-1 -left-2 flex gap-1">
                {[...Array(3)].map((_, j) => (
                    <div 
                        key={j} 
                        className="h-2.5 w-2.5 rounded-full bg-white"
                        style={{ boxShadow: `0 0 8px ${COLORS.yellow}` }} 
                    />
                ))}
            </div>
         </div>
      </motion.div>
    </div>
  );
}
