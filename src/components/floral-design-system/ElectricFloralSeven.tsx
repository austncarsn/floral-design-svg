interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSeven({ size = 200, className = "" }: Props) {
  const primaryColor = "#A88DAA"; // Soft lavender
  const secondaryColor = "#7A9B9E"; // Muted teal
  const accentColor = "#D4A573"; // Warm mustard
  const tertiaryColor = "#C9765A"; // Dusty coral
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
        <linearGradient id="spokeGrad7" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="centerGrad7" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#B89DBA" stopOpacity="1" />
          <stop offset="70%" stopColor={primaryColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.85" />
        </radialGradient>
      </defs>
      
      {/* Technical atomic wheel - Exquisite Mid-Century Modern */}
      
      {/* Outer decorative ring */}
      <circle cx="100" cy="100" r="82" fill="none" stroke={primaryColor} strokeWidth="2" opacity="0.3" />
      <circle cx="100" cy="100" r="80" fill="none" stroke={secondaryColor} strokeWidth="1" opacity="0.2" />
      
      {/* 12 elegant spokes with tapered ends and layers */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const innerRadius = 22;
        const outerRadius = 75;
        
        const innerX = 100 + Math.cos(angle) * innerRadius;
        const innerY = 100 + Math.sin(angle) * innerRadius;
        const outerX = 100 + Math.cos(angle) * outerRadius;
        const outerY = 100 + Math.sin(angle) * outerRadius;
        
        const perpAngle = angle + Math.PI / 2;
        const innerWidth = 4.5;
        const outerWidth = 1.2;
        
        return (
          <g key={i}>
            {/* Shadow layer */}
            <path
              d={`
                M ${innerX + Math.cos(perpAngle) * innerWidth} ${innerY + Math.sin(perpAngle) * innerWidth}
                L ${outerX + Math.cos(perpAngle) * outerWidth} ${outerY + Math.sin(perpAngle) * outerWidth}
                L ${outerX - Math.cos(perpAngle) * outerWidth} ${outerY - Math.sin(perpAngle) * outerWidth}
                L ${innerX - Math.cos(perpAngle) * innerWidth} ${innerY - Math.sin(perpAngle) * innerWidth}
                Z
              `}
              fill={primaryColor}
              opacity="0.25"
              transform={`translate(${Math.cos(angle) * 0.8}, ${Math.sin(angle) * 0.8})`}
            />
            
            {/* Tapered spoke - main */}
            <path
              d={`
                M ${innerX + Math.cos(perpAngle) * innerWidth} ${innerY + Math.sin(perpAngle) * innerWidth}
                L ${outerX + Math.cos(perpAngle) * outerWidth} ${outerY + Math.sin(perpAngle) * outerWidth}
                L ${outerX - Math.cos(perpAngle) * outerWidth} ${outerY - Math.sin(perpAngle) * outerWidth}
                L ${innerX - Math.cos(perpAngle) * innerWidth} ${innerY - Math.sin(perpAngle) * innerWidth}
                Z
              `}
              fill="url(#spokeGrad7)"
            />
            
            {/* Inner highlight */}
            <path
              d={`
                M ${innerX + Math.cos(perpAngle) * innerWidth} ${innerY + Math.sin(perpAngle) * innerWidth}
                L ${outerX + Math.cos(perpAngle) * outerWidth} ${outerY + Math.sin(perpAngle) * outerWidth}
                L ${outerX - Math.cos(perpAngle) * outerWidth} ${outerY - Math.sin(perpAngle) * outerWidth}
                L ${innerX - Math.cos(perpAngle) * innerWidth} ${innerY - Math.sin(perpAngle) * innerWidth}
                Z
              `}
              fill={highlightColor}
              opacity="0.3"
            />
            
            {/* Highlight edge */}
            <line
              x1={innerX + Math.cos(perpAngle) * innerWidth}
              y1={innerY + Math.sin(perpAngle) * innerWidth}
              x2={outerX + Math.cos(perpAngle) * outerWidth}
              y2={outerY + Math.sin(perpAngle) * outerWidth}
              stroke={highlightColor}
              strokeWidth="1"
              opacity="0.6"
            />
            
            {/* Decorative circles at intervals with layers */}
            {[0.5, 0.75, 1].map((ratio, idx) => {
              const x = 100 + Math.cos(angle) * (innerRadius + (outerRadius - innerRadius) * ratio);
              const y = 100 + Math.sin(angle) * (innerRadius + (outerRadius - innerRadius) * ratio);
              const r = idx === 2 ? 4.5 : 2.8;
              const color = idx === 2 ? accentColor : tertiaryColor;
              
              return (
                <g key={`dot-${idx}`}>
                  <circle cx={x} cy={y} r={r + 2} fill={color} opacity="0.2" />
                  <circle cx={x} cy={y} r={r} fill={color} opacity="0.95" />
                  <circle cx={x} cy={y} r={r * 0.5} fill={highlightColor} />
                  {idx === 2 && <circle cx={x - 0.7} cy={y - 0.7} r="0.8" fill="#E0BF9A" opacity="0.6" />}
                </g>
              );
            })}
          </g>
        );
      })}
      
      {/* Mid-ring decorative layer */}
      <circle cx="100" cy="100" r="48" fill="none" stroke={accentColor} strokeWidth="2.5" opacity="0.4" />
      <circle cx="100" cy="100" r="35" fill="none" stroke={tertiaryColor} strokeWidth="2" opacity="0.35" />
      
      {/* Concentric center rings with multiple layers */}
      <circle cx="100" cy="100" r="24" fill={primaryColor} opacity="0.2" />
      <circle cx="100" cy="100" r="22" fill="url(#centerGrad7)" />
      <circle cx="100" cy="100" r="21" fill={primaryColor} opacity="0.3" />
      <circle cx="100" cy="100" r="16" fill={highlightColor} opacity="0.98" />
      <circle cx="100" cy="100" r="15" fill={secondaryColor} opacity="0.25" />
      <circle cx="100" cy="100" r="11" fill={secondaryColor} opacity="0.9" />
      <circle cx="100" cy="100" r="10" fill={accentColor} opacity="0.3" />
      <circle cx="100" cy="100" r="6.5" fill={highlightColor} />
      <circle cx="100" cy="100" r="5" fill={tertiaryColor} />
      <circle cx="100" cy="100" r="2.5" fill={accentColor} />
      <circle cx="98.5" cy="98.5" r="1.5" fill="#E0BF9A" opacity="0.6" />
    </svg>
  );
}