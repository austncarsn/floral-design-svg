import { motion, useReducedMotion } from "motion/react";
import { PALETTE_DISPLAY } from "../tokens/florals2026";

export function PaletteDisplay() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 px-4 pb-8">
      {PALETTE_DISPLAY.map((color) => (
        <motion.div
          key={color}
          className="h-14 w-14 rounded-xl shadow-sm relative group cursor-pointer"
          style={{ backgroundColor: color }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute -bottom-6 left-0 right-0 text-center text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            {color}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
