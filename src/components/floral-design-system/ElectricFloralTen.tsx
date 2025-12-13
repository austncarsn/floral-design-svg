interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTen({ size = 240, className = "" }: Props) {
  const primaryColor = "#9DB5A0"; // Sage green
  const secondaryColor = "#D4A573"; // Warm mustard
  const accentColor = "#7A9B9E"; // Muted teal

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical propeller starburst - Museum-quality multi-layer */}
      
      {/* Layer 1: Outer glow halo */}
      <circle cx="100" cy="100" r="90" fill={primaryColor} opacity="0.08" />
      <circle cx="100" cy="100" r="82" fill={primaryColor} opacity="0.12" />
      
      {/* Layer 2: Shadow layer for all blades */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const innerRadius = 25;
        const outerRadius = 72;
        const curveOffset = 12;
        
        const startX = 100 + Math.cos(angle) * innerRadius;
        const startY = 100 + Math.sin(angle) * innerRadius;
        const endX = 100 + Math.cos(angle) * outerRadius;
        const endY = 100 + Math.sin(angle) * outerRadius;
        
        const perpAngle = angle + Math.PI / 2;
        const controlX = 100 + Math.cos(angle) * ((innerRadius + outerRadius) / 2) + Math.cos(perpAngle) * curveOffset;
        const controlY = 100 + Math.sin(angle) * ((innerRadius + outerRadius) / 2) + Math.sin(perpAngle) * curveOffset;
        
        return (
          <path
            key={`shadow-${i}`}
            d={`M ${startX + 2},${startY + 2} Q ${controlX + 2},${controlY + 2} ${endX + 2},${endY + 2}`}
            fill="none"
            stroke="#000E10"
            strokeWidth="11"
            strokeLinecap="round"
            opacity="0.15"
          />
        );
      })}
      
      {/* Layer 3-5: 6 curved propeller blades with multiple layers */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const innerRadius = 25;
        const outerRadius = 72;
        const curveOffset = 12;
        const bladeColor = i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : accentColor;
        
        const startX = 100 + Math.cos(angle) * innerRadius;
        const startY = 100 + Math.sin(angle) * innerRadius;
        const endX = 100 + Math.cos(angle) * outerRadius;
        const endY = 100 + Math.sin(angle) * outerRadius;
        
        const perpAngle = angle + Math.PI / 2;
        const controlX = 100 + Math.cos(angle) * ((innerRadius + outerRadius) / 2) + Math.cos(perpAngle) * curveOffset;
        const controlY = 100 + Math.sin(angle) * ((innerRadius + outerRadius) / 2) + Math.sin(perpAngle) * curveOffset;
        
        return (
          <g key={i}>
            {/* Outer glow for blade */}
            <path
              d={`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`}
              fill="none"
              stroke={bladeColor}
              strokeWidth="16"
              strokeLinecap="round"
              opacity="0.2"
            />
            {/* Main blade */}
            <path
              d={`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`}
              fill="none"
              stroke={bladeColor}
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Highlight layer */}
            <path
              d={`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`}
              fill="none"
              stroke="#F5F1ED"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Edge highlight */}
            <path
              d={`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`}
              fill="none"
              stroke="#F5F1ED"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            />
            
            {/* Blade tip ornament with multiple layers */}
            {/* Glow */}
            <circle cx={endX} cy={endY} r="10" fill={bladeColor} opacity="0.2" />
            {/* Shadow */}
            <circle cx={endX + 0.8} cy={endY + 0.8} r="7" fill="#000E10" opacity="0.2" />
            {/* Main outer */}
            <circle cx={endX} cy={endY} r="7" fill={bladeColor} opacity="0.95" />
            {/* Middle ring */}
            <circle cx={endX} cy={endY} r="4" fill="#F5F1ED" />
            {/* Inner dot with color */}
            <circle cx={endX} cy={endY} r="2" fill={secondaryColor} />
            {/* Highlight */}
            <circle cx={endX - 0.8} cy={endY - 0.8} r="1" fill="#F5F1ED" />
          </g>
        );
      })}
      
      {/* Layer 6-8: Central hub with multiple layers */}
      {/* Outer glow */}
      <circle cx="100" cy="100" r="28" fill={secondaryColor} opacity="0.15" />
      {/* Shadow */}
      <circle cx="100" cy="101.5" r="22" fill="#000E10" opacity="0.25" />
      {/* Main outer ring */}
      <circle cx="100" cy="100" r="22" fill={accentColor} opacity="0.95" />
      {/* Highlight ring */}
      <circle cx="100" cy="100" r="19" fill={primaryColor} opacity="0.3" />
      {/* Middle bright ring */}
      <circle cx="100" cy="100" r="16" fill="#F5F1ED" />
      {/* Inner colored ring */}
      <circle cx="100" cy="100" r="10" fill={primaryColor} opacity="0.9" />
      {/* Center with secondary color */}
      <circle cx="100" cy="100" r="5" fill={secondaryColor} />
      {/* Final highlight */}
      <circle cx="98.5" cy="98.5" r="2" fill="#F5F1ED" opacity="0.8" />
    </svg>
  );
}