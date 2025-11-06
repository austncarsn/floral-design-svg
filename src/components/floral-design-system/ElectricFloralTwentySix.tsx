interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentySix({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome dusty gold Art Deco starburst */}
      
      {/* 12-point starburst */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const innerRadius = 28;
        const outerRadius = 78;
        
        return (
          <g key={i}>
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke="#D4A574"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle
              cx={100 + Math.cos(angle) * outerRadius}
              cy={100 + Math.sin(angle) * outerRadius}
              r="8"
              fill="#D4A574"
              opacity="0.9"
            />
          </g>
        );
      })}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="24" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="18" fill="#D4A574" opacity="0.85" />
      <circle cx="100" cy="100" r="11" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="5" fill="#D4A574" opacity="0.9" />
    </svg>
  );
}
