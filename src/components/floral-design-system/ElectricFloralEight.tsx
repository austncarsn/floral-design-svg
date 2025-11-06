interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralEight({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco 5-point star with vintage elegance */}
      
      {/* Five perfect star points with 72° spacing */}
      {[...Array(5)].map((_, i) => {
        const angle = (i * 72 - 90) * Math.PI / 180;
        const innerAngle = ((i * 72) + 36 - 90) * Math.PI / 180;
        
        const outerRadius = 75;
        const innerRadius = 30;
        
        const x1 = 100 + Math.cos(angle) * outerRadius;
        const y1 = 100 + Math.sin(angle) * outerRadius;
        const x2 = 100 + Math.cos(innerAngle) * innerRadius;
        const y2 = 100 + Math.sin(innerAngle) * innerRadius;
        const nextAngle = ((i + 1) * 72 - 90) * Math.PI / 180;
        const x3 = 100 + Math.cos(nextAngle) * outerRadius;
        const y3 = 100 + Math.sin(nextAngle) * outerRadius;
        
        const colors = ["#D4A574", "#7A9299", "#C4A582", "#8FA396", "#A89080"];
        
        return (
          <g key={i}>
            {/* Star point */}
            <path
              d={`M ${x1},${y1} L ${x2},${y2} L ${x3},${y3} L 100,100 Z`}
              fill={colors[i]}
              opacity="0.85"
            />
            {/* Decorative tip */}
            <circle cx={x1} cy={y1} r="8" fill={colors[i]} opacity="0.9" />
            <circle cx={x1} cy={y1} r="4" fill="#E8DCC8" />
          </g>
        );
      })}
      
      {/* Central ornament */}
      <circle cx="100" cy="100" r="26" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="18" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="12" fill="#9B8B7E" opacity="0.8" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
