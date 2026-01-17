import { memo } from "react";
import { motion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export interface CyberLotusVariant {
  palette: string[];
  layers: number;
}

const DEFAULT_VARIANT: CyberLotusVariant = {
  // Using metallic/tech tones but lighter
  palette: [COLORS.cyanMaterial, COLORS.chrome10k, COLORS.titaniumWhite],
  layers: 3, 
};

export const CyberLotus = memo(function CyberLotus({ 
  variant = DEFAULT_VARIANT,
  className = ""
}: { variant?: CyberLotusVariant, className?: string }) {
  const { palette, layers } = variant;

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[160px] ${className}`}>
      {Array.from({ length: layers }).map((_, layerIndex) => {
        // Larger base size, creating a fuller flower
        const layerSize = 90 - (layerIndex * 25);
        const petalCount = 8; // 8 petals breaks the hexagonal "snowflake" look
        const color = palette[layerIndex % palette.length];
        
        return (
            <motion.div
                key={layerIndex}
                className="absolute flex items-center justify-center"
                style={{ width: `${layerSize}%`, height: `${layerSize}%` }}
                animate={{ rotate: layerIndex % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 90 + (layerIndex * 30), repeat: Infinity, ease: "linear" }}
            >
                {Array.from({ length: petalCount }).map((__, i) => (
                    <div
                        key={i}
                        className="absolute w-[25%] h-[50%] origin-bottom left-[37.5%] bottom-[50%]"
                        style={{
                            transform: `rotate(${i * (360 / petalCount)}deg)`,
                        }}
                    >
                         {/* Broader, Lotus-like petal shape */}
                         <svg viewBox="0 0 100 200" className="w-full h-full overflow-visible">
                            <path 
                                d="M50 0 C 95 40, 100 100, 50 200 C 0 100, 5 40, 50 0" 
                                fill={color} 
                                fillOpacity={0.12}
                                stroke={color}
                                strokeWidth="1"
                                strokeOpacity={0.7}
                                style={{ mixBlendMode: 'screen' }} 
                            />
                            {/* Tech detail: Central spine */}
                            <path d="M50 10 L 50 180" stroke="white" strokeWidth="0.5" opacity="0.6" strokeDasharray="2 2" />
                            {/* Tech detail: Side accents */}
                            <path d="M50 100 L 80 80" stroke={color} strokeWidth="0.5" opacity="0.4" fill="none" />
                            <path d="M50 100 L 20 80" stroke={color} strokeWidth="0.5" opacity="0.4" fill="none" />
                         </svg>
                    </div>
                ))}
            </motion.div>
        );
      })}
       {/* Center Core - Glowing Lotus Heart */}
       <div className="absolute w-[10%] h-[10%] rounded-full bg-white/20 backdrop-blur-md z-10 shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-white/50" />
       <div className="absolute w-[3%] h-[3%] rounded-full bg-[#00E5FF] z-20 shadow-[0_0_10px_#00E5FF]" />
    </div>
  );
});
