import { memo, useMemo } from "react";
import { motion } from "motion/react";
import { COLORS } from "../tokens/florals2026";

export interface ModernTulipVariant {
  palette: string[];
  curvature: number; // 0-100: Controls tension/angles
  width: number; // 0-100: Controls spread/dispersion
  opacity: number;
  scale: number;
  wireframe?: boolean;
  style?: 'organic' | 'constructivist';
}

interface ModernTulipProps {
  variant?: ModernTulipVariant;
  className?: string;
}

const DEFAULT_VARIANT: ModernTulipVariant = {
  palette: [COLORS.blue, COLORS.green, COLORS.yellow],
  curvature: 60,
  width: 50,
  opacity: 0.9,
  scale: 1,
  wireframe: false,
  style: 'organic',
};

export const ModernTulip = memo(function ModernTulip({
  variant = DEFAULT_VARIANT,
  className = ""
}: ModernTulipProps) {
  const { palette, curvature, width, opacity, scale, wireframe, style = 'organic' } = variant;

  const colorPrimary = palette[0] || COLORS.blue;
  const colorSecondary = palette[1] || COLORS.green;
  const colorAccent = palette[2] || COLORS.yellow;

  // Generate unique ID for gradients/masks
  const uid = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  const gradId = `grad-${uid}`;

  // ---------------------------------------------------------------------------
  // CONSTRUCTIVIST / AVANT-GARDE RENDERING
  // ---------------------------------------------------------------------------
  if (style === 'constructivist') {
    const dispersion = Math.max(0, Math.min(100, width)) / 50; // 0.0 to 2.0
    const angle = (curvature - 50) * 0.8; 

    return (
      <div className={`relative flex items-center justify-center w-full h-full min-h-[160px] ${className}`}>
        <motion.div 
          className="relative flex items-center justify-center w-full h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: scale }}
          transition={{ duration: 0.6 }}
        >
          <svg 
            viewBox="0 0 200 250" 
            className="w-full h-full max-w-[200px] max-h-[250px] overflow-visible"
            style={{ filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.05))' }}
          >
            <defs>
              <pattern id={`grid-${uid}`} width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke={colorAccent} strokeWidth="0.5" opacity="0.4"/>
              </pattern>
            </defs>

            {/* BACKGROUND: Bauhaus Field */}
            <motion.rect 
              x="40" y="40" width="120" height="180" 
              fill={colorSecondary} 
              fillOpacity={0.1}
              initial={{ height: 0 }}
              animate={{ height: 180 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            
            {/* GRID OVERLAY */}
            <rect 
              x="30" y="30" width="140" height="200" 
              fill={`url(#grid-${uid})`} 
            />

            {/* STEM: Line */}
            <motion.line 
              x1="100" y1="250" 
              x2={100 + (angle * 1.5)} y2="100" 
              stroke={colorPrimary} 
              strokeWidth="2"
              initial={{ pathLength: 0 }} 
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Echo Line */}
            <line 
              x1="94" y1="240" 
              x2={94 + (angle * 1.5)} y2="120" 
              stroke={colorPrimary} 
              strokeWidth="0.5" 
              opacity="0.5"
            />

            {/* FLOWER HEAD GROUP */}
            <g transform={`translate(100, 100) rotate(${angle}) translate(-100, -100)`}>
              
              {/* 1. The Blade (Triangle) - Floats vertically */}
              <motion.path
                d={`M 100 200 L ${60 - (dispersion * 10)} 80 L 100 40 L 100 200`}
                fill={colorPrimary}
                fillOpacity={opacity}
                style={{ mixBlendMode: 'multiply' }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                    opacity: opacity, 
                    x: [0, 0, 0],
                    y: [0, -4, 0] 
                }}
                transition={{ 
                    opacity: { duration: 0.5, delay: 0.3 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* 2. The Void (Circle) - Pulses */}
              <motion.circle 
                cx={100 + (dispersion * 20)} 
                cy={80 - (dispersion * 10)} 
                r={30 * dispersion} 
                fill={colorSecondary}
                fillOpacity={opacity * 0.8}
                style={{ mixBlendMode: 'multiply' }}
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                    scale: { duration: 0.5, delay: 0.4 }, // Initial
                    default: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 } // Loop
                }}
              />

              {/* 3. The Crystal (Rect) - Rotates slightly */}
              <motion.rect
                x={80} y={60} 
                width={40} height={80}
                // transform is handled by animate rotate below combined with initial
                fill={colorAccent}
                fillOpacity={opacity * 0.6}
                stroke="white"
                strokeWidth="1"
                style={{ mixBlendMode: 'screen', originX: "100px", originY: "100px" }}
                initial={{ y: -20, opacity: 0, rotate: angle * -1.5 }}
                animate={{ 
                    y: 0, 
                    opacity: opacity * 0.6,
                    rotate: [angle * -1.5, angle * -1.5 + 5, angle * -1.5]
                }}
                transition={{ 
                    y: { duration: 0.5, delay: 0.5 },
                    opacity: { duration: 0.5, delay: 0.5 },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              />

              {/* 4. Tech Details */}
              <rect x="98" y="190" width="4" height="4" fill={COLORS.charcoal} />
              <line x1="100" y1="40" x2="100" y2="10" stroke={COLORS.charcoal} strokeWidth="1" />
            </g>

            {/* Label */}
            <text 
              x="160" y="240" 
              fontSize="8" 
              fontFamily="monospace" 
              fill={COLORS.charcoal} 
              opacity="0.5"
              transform="rotate(-90 160 240)"
            >
              FIG. {Math.round(curvature)}.{Math.round(width)}
            </text>

          </svg>
        </motion.div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // ORGANIC (DEFAULT) RENDERING
  // ---------------------------------------------------------------------------
  
  const paths = useMemo(() => {
    const c = Math.max(10, Math.min(100, curvature)) / 100;
    const w = Math.max(20, Math.min(120, width)) / 100;

    const leftTipX = 100 - (60 * w);
    const leftCp1X = 100 - (100 * w * c);
    const leftCp2X = leftTipX - (20 * c);

    const leftPetal = `
      M 100 200 
      C ${leftCp1X} 150, ${leftCp2X} 60, ${leftTipX} 20
      Q ${100} 50, 100 200
    `;

    const rightTipX = 100 + (60 * w);
    const rightCp1X = 100 + (100 * w * c);
    const rightCp2X = rightTipX + (20 * c);

    const rightPetal = `
      M 100 200 
      C ${rightCp1X} 150, ${rightCp2X} 60, ${rightTipX} 20
      Q ${100} 50, 100 200
    `;

    const centerWidth = 40 * w;
    const centerPetal = `
      M 100 200
      C ${100 - centerWidth} 120, ${100 - centerWidth * 0.5} 30, 100 10
      C ${100 + centerWidth * 0.5} 30, ${100 + centerWidth} 120, 100 200
    `;

    return { leftPetal, rightPetal, centerPetal };
  }, [curvature, width]);

  return (
    <div className={`relative flex items-center justify-center w-full h-full min-h-[160px] ${className}`}>
      <motion.div 
        className="relative flex items-center justify-center w-full h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: scale }}
        transition={{ duration: 0.7 }}
      >
        <svg 
          viewBox="0 0 200 250" 
          className="w-full h-full max-w-[200px] max-h-[250px] overflow-visible"
          style={{ filter: wireframe ? 'none' : 'drop-shadow(0px 10px 20px rgba(0,0,0,0.1))' }}
        >
          <defs>
            <linearGradient id={`${gradId}-left`} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={colorPrimary} stopOpacity={opacity} />
              <stop offset="100%" stopColor={colorSecondary} stopOpacity={opacity * 0.8} />
            </linearGradient>
            <linearGradient id={`${gradId}-right`} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={colorSecondary} stopOpacity={opacity} />
              <stop offset="100%" stopColor={colorPrimary} stopOpacity={opacity * 0.8} />
            </linearGradient>
            <linearGradient id={`${gradId}-center`} x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="0%" stopColor={colorAccent} stopOpacity={opacity} />
              <stop offset="100%" stopColor={colorPrimary} stopOpacity={opacity * 0.6} />
            </linearGradient>
          </defs>

          {/* Stem */}
          <path 
            d="M 100 200 Q 100 225, 100 250" 
            stroke={wireframe ? colorPrimary : COLORS.charcoal} 
            strokeWidth={wireframe ? 1 : 2}
            strokeOpacity={wireframe ? 0.5 : 0.1}
            fill="none"
          />

          {/* Center Petal (Back) - Breathes vertically */}
          <motion.path
            d={paths.centerPetal}
            fill={wireframe ? "none" : `url(#${gradId}-center)`}
            stroke={wireframe ? colorAccent : "none"}
            strokeWidth={wireframe ? 1 : 0}
            style={{ originY: "200px" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [1, 1.03, 1] }}
            transition={{ 
                scaleY: { duration: 0.6, delay: 0.1 }, // Intro
                default: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } // Loop
            }}
          />

          {/* Left Petal - Sways left */}
          <motion.path
            d={paths.leftPetal}
            fill={wireframe ? "none" : `url(#${gradId}-left)`}
            stroke={wireframe ? colorPrimary : "white"}
            strokeWidth={wireframe ? 1 : 1}
            strokeOpacity={wireframe ? 1 : 0.5}
            style={{ mixBlendMode: wireframe ? 'normal' : 'multiply', originY: "200px" }}
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: [0, -1.5, 0], opacity: 1 }}
            transition={{ 
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                opacity: { duration: 0.7, delay: 0.2 }
            }}
          />

          {/* Right Petal - Sways right */}
          <motion.path
            d={paths.rightPetal}
            fill={wireframe ? "none" : `url(#${gradId}-right)`}
            stroke={wireframe ? colorSecondary : "white"}
            strokeWidth={wireframe ? 1 : 1}
            strokeOpacity={wireframe ? 1 : 0.5}
            style={{ mixBlendMode: wireframe ? 'normal' : 'multiply', originY: "200px" }}
            initial={{ rotate: 10, opacity: 0 }}
            animate={{ rotate: [0, 1.5, 0], opacity: 1 }}
            transition={{ 
                rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                opacity: { duration: 0.7, delay: 0.2 }
            }}
          />

          {/* Stamen - Gentle sway */}
          {!wireframe && (
            <motion.g 
                opacity={0.6}
                style={{ originX: "100px", originY: "200px" }}
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <line x1="100" y1="200" x2="95" y2="100" stroke={colorAccent} strokeWidth="1" />
              <line x1="100" y1="200" x2="105" y2="90" stroke={colorAccent} strokeWidth="1" />
              <circle cx="95" cy="100" r="2" fill={colorAccent} />
              <circle cx="105" cy="90" r="2" fill={colorAccent} />
            </motion.g>
          )}
        </svg>
      </motion.div>
    </div>
  );
});
