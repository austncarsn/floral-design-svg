interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralEight({ size = 200, className = "" }: Props) {
  const primaryColor = "#9DB5A0"; // Sage green
  const secondaryColor = "#C9765A"; // Dusty coral
  const accentColor = "#7A9B9E"; // Muted teal
  const tertiaryColor = "#D4A573"; // Warm mustard
  const highlightColor = "#E8D5C4"; // Creamy neutral
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="triangleGrad8" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="hexGrad8" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ADC5B0" stopOpacity="1" />
          <stop offset="70%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </radialGradient>
      </defs>
      
      {/* Technical triangular atomic burst - Exquisite Mid-Century Modern */}
      
      {/* Outer glow layer */}
      <circle cx="100" cy="100" r="78" fill={primaryColor} opacity="0.1" />
      
      {/* 6 elongated triangular petals with layers */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const innerRadius = 28;
        const outerRadius = 70;
        
        const tipX = 100 + Math.cos(angle) * outerRadius;
        const tipY = 100 + Math.sin(angle) * outerRadius;
        
        const baseAngle1 = angle - (Math.PI / 12);
        const baseAngle2 = angle + (Math.PI / 12);
        
        const base1X = 100 + Math.cos(baseAngle1) * innerRadius;
        const base1Y = 100 + Math.sin(baseAngle1) * innerRadius;
        const base2X = 100 + Math.cos(baseAngle2) * innerRadius;
        const base2Y = 100 + Math.sin(baseAngle2) * innerRadius;
        
        return (
          <g key={i}>
            {/* Outer glow */}
            <circle cx={tipX} cy={tipY} r="10" fill={primaryColor} opacity="0.2" />
            
            {/* Shadow layer */}
            <path
              d={`M ${tipX},${tipY} L ${base1X},${base1Y} L ${base2X},${base2Y} Z`}
              fill={primaryColor}
              opacity="0.25"
              transform={`translate(${Math.cos(angle) * 1}, ${Math.sin(angle) * 1})`}
            />
            
            {/* Main triangle with gradient */}
            <path
              d={`M ${tipX},${tipY} L ${base1X},${base1Y} L ${base2X},${base2Y} Z`}
              fill="url(#triangleGrad8)"
            />
            
            {/* Highlight edge */}
            <line
              x1={tipX}
              y1={tipY}
              x2={base1X}
              y2={base1Y}
              stroke={highlightColor}
              strokeWidth="2"
              opacity="0.6"
            />
            
            {/* Inner accent triangle with layers */}
            <path
              d={`M ${100 + Math.cos(angle) * (outerRadius * 0.6)},${100 + Math.sin(angle) * (outerRadius * 0.6)} 
                  L ${100 + Math.cos(baseAngle1) * (innerRadius * 1.3)},${100 + Math.sin(baseAngle1) * (innerRadius * 1.3)} 
                  L ${100 + Math.cos(baseAngle2) * (innerRadius * 1.3)},${100 + Math.sin(baseAngle2) * (innerRadius * 1.3)} Z`}
              fill={accentColor}
              opacity="0.6"
            />
            <path
              d={`M ${100 + Math.cos(angle) * (outerRadius * 0.6)},${100 + Math.sin(angle) * (outerRadius * 0.6)} 
                  L ${100 + Math.cos(baseAngle1) * (innerRadius * 1.3)},${100 + Math.sin(baseAngle1) * (innerRadius * 1.3)} 
                  L ${100 + Math.cos(baseAngle2) * (innerRadius * 1.3)},${100 + Math.sin(baseAngle2) * (innerRadius * 1.3)} Z`}
              fill={highlightColor}
              opacity="0.5"
            />
            
            {/* Mid-point decoration */}
            <circle 
              cx={100 + Math.cos(angle) * (outerRadius * 0.5)} 
              cy={100 + Math.sin(angle) * (outerRadius * 0.5)} 
              r="3.5" 
              fill={tertiaryColor} 
              opacity="0.85" 
            />
            <circle 
              cx={100 + Math.cos(angle) * (outerRadius * 0.5)} 
              cy={100 + Math.sin(angle) * (outerRadius * 0.5)} 
              r="1.5" 
              fill={highlightColor} 
            />
            
            {/* Tip ornament with layers */}
            <circle cx={tipX} cy={tipY} r="6.5" fill={secondaryColor} opacity="0.95" />
            <circle cx={tipX} cy={tipY} r="3.5" fill={highlightColor} />
            <circle cx={tipX} cy={tipY} r="1.8" fill={tertiaryColor} />
            <circle cx={tipX - 0.8} cy={tipY - 0.8} r="0.8" fill="#E0BF9A" opacity="0.6" />
          </g>
        );
      })}
      
      {/* Mid-layer decorative ring */}
      <circle cx="100" cy="100" r="40" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.35" />
      
      {/* Elegant hexagonal center with layers */}
      {(() => {
        const hexPoints = [...Array(6)].map((_, i) => {
          const angle = (i * 60 - 30) * Math.PI / 180;
          return {
            x: 100 + Math.cos(angle) * 24,
            y: 100 + Math.sin(angle) * 24
          };
        });
        const pathD = `M ${hexPoints.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        
        return (
          <>
            <path d={pathD} fill="url(#hexGrad8)" />
            <path d={pathD} fill="none" stroke={primaryColor} strokeWidth="4.5" opacity="0.7" />
            <path d={pathD} fill="none" stroke={highlightColor} strokeWidth="1.5" opacity="0.5" />
          </>
        );
      })()}
      
      {/* Central core with layers */}
      <circle cx="100" cy="100" r="15" fill={highlightColor} opacity="0.98" />
      <circle cx="100" cy="100" r="14" fill={accentColor} opacity="0.25" />
      <circle cx="100" cy="100" r="9" fill={secondaryColor} opacity="0.9" />
      <circle cx="100" cy="100" r="8" fill={tertiaryColor} opacity="0.3" />
      <circle cx="100" cy="100" r="5" fill={tertiaryColor} />
      <circle cx="100" cy="100" r="2.5" fill={accentColor} />
      <circle cx="98.5" cy="98.5" r="1.5" fill="#E0BF9A" opacity="0.6" />
    </svg>
  );
}