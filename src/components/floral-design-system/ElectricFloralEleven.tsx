interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralEleven({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco pentagon star with vintage charm */}
      
      {/* Pentagon-based star pattern */}
      {[...Array(5)].map((_, i) => {
        const angle = (i * 72 - 90) * Math.PI / 180;
        const innerAngle = ((i * 72) + 36 - 90) * Math.PI / 180;
        
        const outerRadius = 78;
        const innerRadius = 35;
        const midRadius = 56;
        
        const x1 = 100 + Math.cos(angle) * outerRadius;
        const y1 = 100 + Math.sin(angle) * outerRadius;
        const x2 = 100 + Math.cos(innerAngle) * innerRadius;
        const y2 = 100 + Math.sin(innerAngle) * innerRadius;
        
        const colors = ["#D4A574", "#7A9299", "#C4A582", "#8FA396", "#A89080"];
        
        return (
          <g key={i}>
            {/* Outer decorative line */}
            <line
              x1="100"
              y1="100"
              x2={x1}
              y2={y1}
              stroke={colors[i]}
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.75"
            />
            {/* Point ornament */}
            <circle cx={x1} cy={y1} r="11" fill={colors[i]} opacity="0.85" />
            <circle cx={x1} cy={y1} r="6" fill="#E8DCC8" />
            <circle cx={x1} cy={y1} r="3" fill="#8B7355" />
          </g>
        );
      })}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="30" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="21" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="14" fill="#9B8B7E" opacity="0.8" />
      <circle cx="100" cy="100" r="7" fill="#8B7355" />
    </svg>
  );
}
