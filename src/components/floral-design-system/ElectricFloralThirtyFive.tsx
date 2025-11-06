interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtyFive({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome dusty gold pentagon star */}
      
      {/* Pentagon star with depth */}
      {[...Array(5)].map((_, i) => {
        const angle = (i * 72 - 90) * Math.PI / 180;
        const innerAngle = ((i * 72) + 36 - 90) * Math.PI / 180;
        
        const outerRadius = 75;
        const innerRadius = 32;
        
        const x1 = 100 + Math.cos(angle) * outerRadius;
        const y1 = 100 + Math.sin(angle) * outerRadius;
        const x2 = 100 + Math.cos(innerAngle) * innerRadius;
        const y2 = 100 + Math.sin(innerAngle) * innerRadius;
        const nextAngle = ((i + 1) * 72 - 90) * Math.PI / 180;
        const x3 = 100 + Math.cos(nextAngle) * outerRadius;
        const y3 = 100 + Math.sin(nextAngle) * outerRadius;
        
        return (
          <g key={i}>
            <path
              d={`M ${x1},${y1} L ${x2},${y2} L ${x3},${y3} L 100,100 Z`}
              fill="#D4A574"
              opacity="0.85"
            />
            <path
              d={`M ${x1},${y1} L ${x2},${y2} L 100,100 Z`}
              fill="#1A1614"
              opacity="0.2"
            />
            <circle cx={x1} cy={y1} r="10" fill="#D4A574" opacity="0.9" />
            <circle cx={x1} cy={y1} r="5" fill="#E8DCC8" />
          </g>
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="100" r="28" fill="#D4A574" opacity="0.85" />
      <circle cx="100" cy="100" r="20" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="13" fill="#D4A574" opacity="0.9" />
      <circle cx="100" cy="100" r="7" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#D4A574" />
    </svg>
  );
}
