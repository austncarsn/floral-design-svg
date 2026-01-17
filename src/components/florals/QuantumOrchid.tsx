import { motion, useReducedMotion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export function QuantumOrchid() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="relative h-full w-full flex items-center justify-center" aria-hidden="true">
            <div className="relative h-48 w-48">
                 {/* Outer Shell 1 */}
                 <motion.div
                    className="absolute inset-0 border-[0.5px]"
                    style={{ 
                        borderColor: `${COLORS.purple}66`,
                        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" 
                    }}
                    animate={shouldReduceMotion ? {} : {
                        borderRadius: [
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "40% 60% 70% 30% / 40% 50% 60% 50%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%"
                        ],
                        rotate: 360,
                        scale: [1, 1.05, 1]
                    }}
                    transition={shouldReduceMotion ? {} : { duration: 18, repeat: Infinity, ease: "linear" }}
                 />
                 {/* Outer Shell 2 - Offset */}
                 <motion.div
                    className="absolute inset-2 border-[0.5px]"
                    style={{ 
                        borderColor: `${COLORS.purple}33`,
                        borderRadius: "50% 50% 20% 80% / 25% 80% 20% 75%" 
                    }}
                    animate={shouldReduceMotion ? {} : {
                        rotate: 360,
                    }}
                    transition={shouldReduceMotion ? {} : { duration: 25, repeat: Infinity, ease: "linear" }}
                 />
                 
                 {/* Inner Fluid */}
                 <motion.div
                    className="absolute inset-8 border-[1px] backdrop-blur-[2px]"
                    style={{ 
                        borderColor: COLORS.lavender,
                        backgroundColor: `${COLORS.purple}0D`,
                        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" 
                    }}
                    animate={shouldReduceMotion ? {} : {
                        borderRadius: [
                            "40% 60% 70% 30% / 40% 50% 60% 50%",
                            "60% 30% 40% 70% / 60% 30% 70% 40%",
                            "40% 60% 70% 30% / 40% 50% 60% 50%"
                        ],
                        rotate: -360
                    }}
                    transition={shouldReduceMotion ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
                 />
                 
                 {/* Core Singularity */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        className="h-1 w-1 bg-white rounded-full"
                        style={{ boxShadow: `0 0 10px ${COLORS.purple}` }}
                        animate={shouldReduceMotion ? {} : { scale: [1, 3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                 </div>
            </div>
        </div>
    )
}
