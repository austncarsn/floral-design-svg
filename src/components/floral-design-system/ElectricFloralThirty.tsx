interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirty({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome dusty mauve radiating star */}
      
      {/* 8-point star pattern */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const innerAngle = ((i + 0.5) * 45 * Math.PI) / 180;
        
        const outerRadius = 80;
        const innerRadius = 40;
        
        const x1 = 100 + Math.cos(angle) * outerRadius;
        const y1 = 100 + Math.sin(angle) * outerRadius;
        const x2 = 100 + Math.cos(innerAngle) * innerRadius;
        const y2 = 100 + Math.sin(innerAngle) * innerRadius;
        const nextAngle = ((i + 1) * 45 * Math.PI) / 180;
        const x3 = 100 + Math.cos(nextAngle) * outerRadius;
        const y3 = 100 + Math.sin(nextAngle) * outerRadius;
        
        return (
          <g key={i}>
            <path
              d={`M 100,100 L ${x1},${y1} L ${x2},${y2} Z`}
              fill="#A89080"
              opacity="0.85"
            />
            <circle cx={x1} cy={y1} r="9" fill="#A89080" opacity="0.9" />
            <circle cx={x1} cy={y1} r="5" fill="#E8DCC8" />
          </g>
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="100" r="34" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="26" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="17" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="10" fill="#A89080" opacity="0.9" />
      <circle cx="100" cy="100" r="5" fill="#1A1614" opacity="0.6" />
    </svg>
  );
}
