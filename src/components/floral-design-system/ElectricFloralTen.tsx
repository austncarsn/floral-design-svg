interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical propeller starburst - Monochrome */}
      
      {/* 6 curved propeller blades */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const innerRadius = 25;
        const outerRadius = 72;
        const curveOffset = 12;
        
        const startX = 100 + Math.cos(angle) * innerRadius;
        const startY = 100 + Math.sin(angle) * innerRadius;
        const endX = 100 + Math.cos(angle) * outerRadius;
        const endY = 100 + Math.sin(angle) * outerRadius;
        
        // Perpendicular for curve
        const perpAngle = angle + Math.PI / 2;
        const controlX = 100 + Math.cos(angle) * ((innerRadius + outerRadius) / 2) + Math.cos(perpAngle) * curveOffset;
        const controlY = 100 + Math.sin(angle) * ((innerRadius + outerRadius) / 2) + Math.sin(perpAngle) * curveOffset;
        
        return (
          <g key={i}>
            {/* Curved blade */}
            <path
              d={`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`}
              fill="none"
              stroke="#3a3a3a"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.75"
            />
            <path
              d={`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`}
              fill="none"
              stroke="#EDF2F7"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.9"
            />
            
            {/* Blade tip ornament */}
            <circle cx={endX} cy={endY} r="7" fill="#2d2d2d" opacity="0.9" />
            <circle cx={endX} cy={endY} r="4" fill="#EDF2F7" />
            <circle cx={endX} cy={endY} r="2" fill="#3a3a3a" />
          </g>
        );
      })}
      
      {/* Central hub */}
      <circle cx="100" cy="100" r="22" fill="#2d2d2d" opacity="0.9" />
      <circle cx="100" cy="100" r="16" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="10" fill="#707070" opacity="0.85" />
      <circle cx="100" cy="100" r="5" fill="#000E10" />
    </svg>
  );
}
