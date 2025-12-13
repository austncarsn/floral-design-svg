interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwo({ size = 200, className = "" }: Props) {
  const primaryColor = "#A88DAA"; // Soft lavender
  const secondaryColor = "#9DB5A0"; // Sage green
  const accentColor = "#D4A573"; // Warm mustard
  const highlightColor = "#E8D5C4"; // Creamy neutral
  
  // Perfect hexagon vertices calculation
  const getHexagonPoints = (cx: number, cy: number, radius: number) => {
    return [...Array(6)].map((_, i) => {
      const angle = (i * 60 - 30) * Math.PI / 180; // Start at top
      return {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius
      };
    });
  };

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
        {/* Refined gradients for hexagonal bloom */}
        <radialGradient id="petalGrad2" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#B89DBA" stopOpacity="1" />
          <stop offset="60%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id="centerGrad2" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ADC5B0" stopOpacity="1" />
          <stop offset="70%" stopColor={secondaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </radialGradient>
      </defs>
      
      {/* Technical hexagonal bloom - Mid-Century Modern */}
      
      {/* Outer hexagon petals with perfect 60° spacing */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 - 30) * Math.PI / 180;
        const x = 100 + Math.cos(angle) * 62;
        const y = 100 + Math.sin(angle) * 62;
        
        return (
          <g key={i}>
            {/* Outer petal - refined */}
            <circle cx={x} cy={y} r="29" fill="url(#petalGrad2)" />
            {/* Shadow accent */}
            <circle cx={x + 0.5} cy={y + 0.5} r="29" fill={primaryColor} opacity="0.2" />
            
            {/* Inner circle */}
            <circle cx={x} cy={y} r="21" fill={highlightColor} opacity="0.98" />
            
            {/* Detail ring - refined */}
            <circle cx={x} cy={y} r="15" fill={secondaryColor} opacity="0.8" />
            
            {/* Center dot with highlight */}
            <circle cx={x} cy={y} r="6.5" fill={highlightColor} />
            <circle cx={x} cy={y} r="3.2" fill={accentColor} />
            <circle cx={x - 1} cy={y - 1} r="1.3" fill="#E0BF9A" opacity="0.5" />
          </g>
        );
      })}
      
      {/* Perfect center hexagon - refined */}
      {(() => {
        const points = getHexagonPoints(100, 100, 39);
        const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        
        return (
          <>
            <path d={pathD} fill="url(#petalGrad2)" />
            <path d={pathD} fill="none" stroke={primaryColor} strokeWidth="5.5" opacity="0.7" />
            {/* Subtle inner highlight */}
            <path d={pathD} fill="none" stroke="#B89DBA" strokeWidth="1.5" opacity="0.4" />
          </>
        );
      })()}
      
      {/* Inner hexagon - refined */}
      {(() => {
        const points = getHexagonPoints(100, 100, 23);
        const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        
        return (
          <>
            <path d={pathD} fill={highlightColor} opacity="0.98" />
            <path d={pathD} fill="none" stroke="#D4C3B8" strokeWidth="1" opacity="0.3" />
          </>
        );
      })()}
      
      {/* Center core - refined */}
      <circle cx="100" cy="100" r="15" fill="url(#centerGrad2)" />
      <circle cx="100" cy="100" r="7.5" fill={accentColor} />
      <circle cx="98.5" cy="98.5" r="2.5" fill="#E0BF9A" opacity="0.5" />
    </svg>
  );
}