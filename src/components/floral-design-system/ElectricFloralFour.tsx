interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFour({ size = 200, className = "" }: Props) {
  const primaryColor = "#9DB5A0"; // Sage green
  const secondaryColor = "#D4A573"; // Warm mustard
  const accentColor = "#C9765A"; // Dusty coral
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
        {/* Refined gradients */}
        <radialGradient id="centerGrad4" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ADC5B0" stopOpacity="1" />
          <stop offset="70%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id="spokeEndGrad4" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#E0BF9A" stopOpacity="1" />
          <stop offset="70%" stopColor={secondaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </radialGradient>
      </defs>
      
      {/* Technical sunburst with radiating spokes - Mid-Century Modern */}
      
      {/* 16 alternating length spokes - refined */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const isLong = i % 2 === 0;
        const length = isLong ? 72 : 52;
        const innerRadius = 18;
        const strokeWidth = isLong ? 2.8 : 1.8;
        
        return (
          <g key={i}>
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * length}
              y2={100 + Math.sin(angle) * length}
              stroke={primaryColor}
              strokeWidth={strokeWidth + 2.2}
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Shadow accent on spokes */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * length}
              y2={100 + Math.sin(angle) * length}
              stroke={primaryColor}
              strokeWidth={strokeWidth * 0.7}
              strokeLinecap="round"
              opacity="0.25"
              transform={`translate(${Math.cos(angle) * 0.5}, ${Math.sin(angle) * 0.5})`}
            />
            {isLong && (
              <>
                <circle
                  cx={100 + Math.cos(angle) * length}
                  cy={100 + Math.sin(angle) * length}
                  r="4.5"
                  fill="url(#spokeEndGrad4)"
                />
                <circle
                  cx={100 + Math.cos(angle) * length}
                  cy={100 + Math.sin(angle) * length}
                  r="2.2"
                  fill={highlightColor}
                />
                <circle
                  cx={100 + Math.cos(angle) * length - 0.7}
                  cy={100 + Math.sin(angle) * length - 0.7}
                  r="0.8"
                  fill="#E0BF9A"
                  opacity="0.5"
                />
              </>
            )}
          </g>
        );
      })}
      
      {/* Elegant center medallion - refined */}
      <circle cx="100" cy="100" r="17" fill="url(#centerGrad4)" />
      <circle cx="100" cy="100" r="11.5" fill={highlightColor} opacity="0.98" />
      <circle cx="100" cy="100" r="7.5" fill={accentColor} opacity="0.9" />
      <circle cx="100" cy="100" r="3.8" fill={secondaryColor} />
      <circle cx="98.5" cy="98.5" r="1.5" fill="#E0BF9A" opacity="0.5" />
    </svg>
  );
}