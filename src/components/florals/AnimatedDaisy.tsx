import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import clsx from "clsx";
import { COLORS } from "../tokens/florals2026";

export interface AnimatedDaisyProps {
  variant?: any;
  className?: string;
}

export const AnimatedDaisy = ({
  variant,
  className = ""
}: AnimatedDaisyProps) => {
  const { 
    palette = [COLORS.blue, COLORS.cyanMaterial, COLORS.deepSeaAmaranth, COLORS.freshPurple], 
    petalCount = 12, 
    speed = 1, 
    scale = 0.85, // Reduced default scale to ensure containment
    style = 'radar',
  } = variant || {};

  const shouldReduceMotion = useReducedMotion();

  // Normalize style modes
  const isGrid = style === 'grid';
  const isConcentric = style === 'ripple' || style === 'rosette';
  const isAssembly = style === 'assembly';
  
  const duration = 60 / (speed || 1);
  const coreSize = "12%"; // Relative size for perfect scaling

  const elements = useMemo(() => {
    // Symmetrical Count Logic
    const count = isGrid ? 4 : (isConcentric ? 5 : 12);
    
    return Array.from({ length: count }).map((_, i) => {
      const color = palette[i % palette.length];
      
      // GRID: Perfect 2x2 Symmetrical Quadrants
      if (isGrid) {
        return {
          id: i,
          color,
          // Rounded corners based on quadrant position for a "Flower" shape
          borderRadius: 
            i === 0 ? '100% 0 50% 0' :  // TL
            i === 1 ? '0 100% 0 50%' :  // TR
            i === 2 ? '50% 0 100% 0' :  // BL
            '0 50% 0 100%',             // BR
        };
      }

      // CONCENTRIC: Perfect Rings
      if (isConcentric) {
        return {
          id: i,
          color,
          size: `${100 - (i * 18)}%`, // Even spacing
          zIndex: 10 - i,
          direction: i % 2 === 0 ? 1 : -1,
        };
      }

      // ASSEMBLY: Converging Particles
      if (isAssembly) {
          const angle = (360 / count) * i;
          return {
              id: i,
              color,
              angle,
              finalX: Math.cos(angle * Math.PI / 180) * 40, // 40% radius
              finalY: Math.sin(angle * Math.PI / 180) * 40,
          }
      }

      // RADIAL: Turbine Blades (Standard)
      const angle = (360 / count) * i;
      
      return {
        id: i,
        color,
        angle,
        width: style === 'swiss' ? '35%' : '42%',
        height: style === 'swiss' ? '12%' : '8%',
        borderRadius: style === 'swiss' ? '2px' : '99px',
      };
    });
  }, [petalCount, style, palette, isGrid, isConcentric, isAssembly]);

  return (
    <div 
        className={clsx("relative flex items-center justify-center overflow-hidden w-full h-full", className)} 
        aria-hidden="true"
    >
      {/* Main Container - Scaled to prevent bleeding */}
      <motion.div 
        className={isGrid ? "grid grid-cols-2 gap-2 w-[80%] h-[80%]" : "relative w-[80%] h-[80%] flex items-center justify-center"}
        animate={shouldReduceMotion ? {} : { 
             rotate: isGrid ? 0 : 360 // Grid stays static, others rotate
        }}
        transition={shouldReduceMotion ? {} : { 
            duration: isGrid ? 0 : duration, 
            repeat: Infinity, 
            ease: "linear" 
        }}
      >
        {isGrid ? (
            // GRID MODE: 4 Perfect Quadrants
            elements.map((el: any) => (
                <motion.div 
                    key={el.id}
                    className="w-full h-full backdrop-blur-md border border-white/20"
                    style={{ 
                        backgroundColor: `${el.color}20`, // Transparent glass fill
                        borderRadius: el.borderRadius,
                        boxShadow: `inset 0 0 20px ${el.color}40`
                    }}
                    animate={{ scale: [1, 0.95, 1] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: el.id * 0.2
                    }}
                >
                    {/* Inner Jewel */}
                    <div className="w-[20%] h-[20%] absolute top-4 left-4 rounded-full bg-white/40" 
                         style={{ 
                             top: el.id < 2 ? 'auto' : '10%', bottom: el.id < 2 ? '10%' : 'auto',
                             left: el.id % 2 === 0 ? 'auto' : '10%', right: el.id % 2 === 0 ? '10%' : 'auto'
                         }} 
                    />
                </motion.div>
            ))
        ) : isConcentric ? (
            // CONCENTRIC MODE: Perfect Gyroscope
            elements.map((el: any) => (
                <motion.div
                    key={el.id}
                    className="absolute border border-white/30"
                    style={{
                        width: el.size,
                        height: el.size,
                        borderRadius: '50%',
                        // No background fill for cleaner "Constructed" look
                        boxShadow: `0 0 15px ${el.color}20` 
                    }}
                    animate={{ 
                        rotate: el.direction === 1 ? 360 : -360,
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        rotate: { duration: duration * (1 + el.id * 0.2), repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: el.id * 0.2 }
                    }}
                >
                    {/* Orbital Marker */}
                    <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[6%] h-[6%] rounded-full bg-white shadow-[0_0_10px_white]"
                        style={{ backgroundColor: el.color }}
                    />
                </motion.div>
            ))
        ) : isAssembly ? (
            // ASSEMBLY MODE: Precise Particle Convergence
            elements.map((el: any) => (
                <motion.div
                    key={el.id}
                    className="absolute rounded-full"
                    style={{
                        width: '8%',
                        height: '8%',
                        backgroundColor: el.color,
                        boxShadow: `0 0 10px ${el.color}`
                    }}
                    animate={{
                        x: [`${el.finalX * 2}%`, `${el.finalX}%`, `${el.finalX}%`, `${el.finalX * 2}%`],
                        y: [`${el.finalY * 2}%`, `${el.finalY}%`, `${el.finalY}%`, `${el.finalY * 2}%`],
                        opacity: [0, 1, 1, 0],
                        scale: [0.5, 1, 1, 0.5]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.6, 1]
                    }}
                />
            ))
        ) : (
            // RADIAL/TURBINE MODE: Symmetrical Blades
            elements.map((el: any) => (
                <div
                    key={el.id}
                    className="absolute top-1/2 left-1/2 origin-left flex items-center"
                    style={{
                        width: '50%', // Reaches to edge of container (which is 80% of parent)
                        height: 0, // Logic reset for flex centering
                        transform: `rotate(${el.angle}deg) translateY(-50%)`,
                    }}
                >
                    <motion.div 
                        className="relative rounded-full backdrop-blur-sm border border-white/20 overflow-hidden"
                        style={{
                            width: el.width, // Length of blade
                            height: '12px', // Fixed thickness for consistency
                            marginLeft: '20%', // Offset from center
                            backgroundColor: `${el.color}40`,
                        }}
                        animate={{ width: [el.width, '30%', el.width] }} // Breathing length
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: el.id * 0.1
                        }}
                    >
                         {/* Tech Stripe */}
                        <div className="absolute top-0 bottom-0 left-[20%] w-[2px] bg-white/50" />
                    </motion.div>
                </div>
            ))
        )}

        {/* UNIVERSAL CORE: The Hub */}
        <div 
            className="absolute inset-0 m-auto z-50 rounded-full flex items-center justify-center border border-white/20 bg-black/10 backdrop-blur-md"
            style={{ width: coreSize, height: coreSize }}
        >
            <div className="w-[40%] h-[40%] bg-white rounded-full shadow-[0_0_15px_white]" />
        </div>
      </motion.div>

      {/* BOUNDARY RING: Defines the limit visually */}
      <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full border border-white/5 pointer-events-none" />
    </div>
  );
};
