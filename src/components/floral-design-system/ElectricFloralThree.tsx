interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThree({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco 8-point geometric starburst */}
      
      {/* 8 symmetrical streamlined petals with 45° spacing */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const innerRadius = 35;
        const midRadius = 58;
        const outerRadius = 78;
        
        // Calculate perfect tapered shape
        const innerX = 100 + Math.cos(angle) * innerRadius;
        const innerY = 100 + Math.sin(angle) * innerRadius;
        const midX = 100 + Math.cos(angle) * midRadius;
        const midY = 100 + Math.sin(angle) * midRadius;
        const tipX = 100 + Math.cos(angle) * outerRadius;
        const tipY = 100 + Math.sin(angle) * outerRadius;
        
        const perpAngle = angle + Math.PI / 2;
        const width1 = 10;
        const width2 = 6;
        const width3 = 3;
        
        const colors = ["#B39C87", "#7A9299"];
        const color = colors[i % 2];
        
        return (
          <g key={i}>
            {/* Tapered petal path */}
            <path
              d={`
                M ${innerX + Math.cos(perpAngle) * width1} ${innerY + Math.sin(perpAngle) * width1}
                L ${midX + Math.cos(perpAngle) * width2} ${midY + Math.sin(perpAngle) * width2}
                L ${tipX + Math.cos(perpAngle) * width3} ${tipY + Math.sin(perpAngle) * width3}
                L ${tipX - Math.cos(perpAngle) * width3} ${tipY - Math.sin(perpAngle) * width3}
                L ${midX - Math.cos(perpAngle) * width2} ${midY - Math.sin(perpAngle) * width2}
                L ${innerX - Math.cos(perpAngle) * width1} ${innerY - Math.sin(perpAngle) * width1}
                Z
              `}
              fill={color}
              opacity="0.85"
            />
            {/* Decorative tip */}
            <circle cx={tipX} cy={tipY} r="5" fill={color} opacity="0.7" />
            <circle cx={tipX} cy={tipY} r="2" fill="#C4A582" />
          </g>
        );
      })}
      
      {/* Perfect concentric center */}
      <circle cx="100" cy="100" r="32" fill="#8FA396" opacity="0.85" />
      <circle cx="100" cy="100" r="22" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="14" fill="#A89080" opacity="0.8" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#8B7355" />
    </svg>
  );
}
