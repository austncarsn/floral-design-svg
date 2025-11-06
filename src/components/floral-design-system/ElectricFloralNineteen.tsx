interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralNineteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco fractal crystalline structure */}
      
      {/* Large outer triangles */}
      {[0, 120, 240].map((rotation, i) => {
        const colors = ["#D4A574", "#7A9299", "#8FA396"];
        
        return (
          <g key={i} transform={`rotate(${rotation} 100 100)`}>
            {/* Main triangle */}
            <path
              d="M 100 28 L 162 142 L 38 142 Z"
              fill={colors[i]}
              opacity="0.85"
            />
            {/* Inner triangle */}
            <path
              d="M 100 55 L 140 120 L 60 120 Z"
              fill="#1A1614"
              opacity="0.25"
            />
            {/* Smallest triangle */}
            <path
              d="M 100 70 L 125 105 L 75 105 Z"
              fill="#E8DCC8"
              opacity="0.95"
            />
          </g>
        );
      })}
      
      {/* Corner accents */}
      {[0, 120, 240].map((rotation, i) => {
        const angle = (rotation * Math.PI) / 180;
        const x = 100 + Math.cos(angle - Math.PI / 2) * 72;
        const y = 100 + Math.sin(angle - Math.PI / 2) * 72;
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="#C4A582" opacity="0.85" />
            <circle cx={x} cy={y} r="5" fill="#E8DCC8" />
          </g>
        );
      })}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="26" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="20" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="13" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="7" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="3" fill="#8B7355" />
    </svg>
  );
}
