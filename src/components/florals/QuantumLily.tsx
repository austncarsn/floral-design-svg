import { memo } from "react";
import { motion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export interface QuantumLilyVariant {
  palette: string[];
}

const DEFAULT_VARIANT: QuantumLilyVariant = {
  // Pastel ethereal tones
  palette: [COLORS.glacialMint, COLORS.dreamyLavender, COLORS.white],
};

export const QuantumLily = memo(function QuantumLily({ 
  variant = DEFAULT_VARIANT,
  className = ""
}: { variant?: QuantumLilyVariant, className?: string }) {
  const { palette } = variant;

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[160px] ${className}`}>
      <motion.div 
        className="relative w-[60%] h-[80%] flex items-end justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Glow behind */}
        <div className="absolute bottom-[20%] w-[80%] h-[60%] bg-white/40 blur-[40px] rounded-full" />

        {/* Petals - Constructed with gradients for softness */}
        {[ -25, 0, 25 ].map((deg, i) => {
            const isCenter = deg === 0;
            return (
             <motion.div 
                key={i}
                className="absolute bottom-[10%] left-1/2 -translate-x-1/2 origin-bottom overflow-hidden"
                style={{ 
                    width: isCenter ? '40%' : '35%',
                    height: isCenter ? '80%' : '70%',
                    borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%', // Tulip/Lily shape
                    background: `linear-gradient(to top, ${palette[1]}20, ${palette[0]}60)`,
                    backdropFilter: 'blur(2px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    zIndex: isCenter ? 10 : 0,
                    transform: `translateX(-50%) rotate(${deg}deg)`
                }}
                animate={{ 
                    rotate: [deg, deg + (isCenter ? 0 : (deg > 0 ? 2 : -2)), deg],
                    scaleY: [1, 1.02, 1]
                }}
                transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5 
                }}
            >
                {/* Inner vein */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[80%] bg-gradient-to-t from-white/80 to-transparent" />
            </motion.div>
        )})}

        {/* Floating "Quantum" Particles - Dust Motes */}
        {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
                key={`p-${i}`}
                className="absolute w-[2px] h-[2px] rounded-full bg-white shadow-[0_0_4px_white]"
                style={{
                    bottom: "20%",
                    left: "50%",
                }}
                animate={{
                    y: -100 - (Math.random() * 80),
                    x: (Math.random() - 0.5) * 80,
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "linear"
                }}
            />
        ))}
      </motion.div>
    </div>
  );
});
