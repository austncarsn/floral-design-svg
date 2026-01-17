import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function HolographicPeony() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="relative h-full w-full flex items-center justify-center" aria-hidden="true">
             <div className="relative h-48 w-48">
                {/* Concentric Spirograph Layers */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-[45%]"
                        style={{
                            border: `0.5px solid rgba(244, 143, 177, 0.4)`, // Using COLORS.lightPink value roughly
                            transform: `rotate(${i * 15}deg)`
                        }}
                        animate={shouldReduceMotion ? {} : {
                            rotate: [i * 15, i * 15 + 360],
                            scale: [1, 0.8, 1],
                        }}
                        transition={shouldReduceMotion ? {} : {
                            duration: 30 + i * 2, // Varied speeds creates interference
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
                
                {/* Inner Glow */}
                <motion.div 
                    className="absolute inset-[20%] rounded-full blur-md"
                    style={{ background: `linear-gradient(to top right, ${COLORS.lightPink}4D, ${COLORS.lavender}4D)` }}
                    animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
                    transition={shouldReduceMotion ? {} : { duration: 4, repeat: Infinity }}
                />
             </div>
        </div>
    )
}
