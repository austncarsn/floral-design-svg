interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSeven({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Technical atomic wheel - Monochrome */}
      
      {/* 12 elegant spokes with tapered ends */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const innerRadius = 22;
        const outerRadius = 75;
        
        const innerX = 100 + Math.cos(angle) * innerRadius;
        const innerY = 100 + Math.sin(angle) * innerRadius;
        const outerX = 100 + Math.cos(angle) * outerRadius;
        const outerY = 100 + Math.sin(angle) * outerRadius;
        
        const perpAngle = angle + Math.PI / 2;
        const innerWidth = 4;
        const outerWidth = 1;
        
        return (
          <g key={i}>
            {/* Tapered spoke */}
            <path
              d={`
                M ${innerX + Math.cos(perpAngle) * innerWidth} ${innerY + Math.sin(perpAngle) * innerWidth}
                L ${outerX + Math.cos(perpAngle) * outerWidth} ${outerY + Math.sin(perpAngle) * outerWidth}
                L ${outerX - Math.cos(perpAngle) * outerWidth} ${outerY - Math.sin(perpAngle) * outerWidth}
                L ${innerX - Math.cos(perpAngle) * innerWidth} ${innerY - Math.sin(perpAngle) * innerWidth}
                Z
              `}
              fill="#4a4a4a"
              opacity="0.75"
            />
            
            {/* Decorative circles at intervals */}
            {[0.5, 0.75, 1].map((ratio, idx) => {
              const x = 100 + Math.cos(angle) * (innerRadius + (outerRadius - innerRadius) * ratio);
              const y = 100 + Math.sin(angle) * (innerRadius + (outerRadius - innerRadius) * ratio);
              const r = idx === 2 ? 3.5 : 2;
              
              return (
                <circle
                  key={`dot-${idx}`}
                  cx={x}
                  cy={y}
                  r={r}
                  fill="#EDF2F7"
                  opacity="0.9"
                />
              );
            })}
          </g>
        );
      })}
      
      {/* Concentric center rings */}
      <circle cx="100" cy="100" r="20" fill="#2d2d2d" opacity="0.9" />
      <circle cx="100" cy="100" r="14" fill="#EDF2F7" />
      <circle cx="100" cy="100" r="9" fill="#707070" opacity="0.85" />
      <circle cx="100" cy="100" r="4.5" fill="#000E10" />
    </svg>
  );
}
