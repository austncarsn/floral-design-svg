interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralSix({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco hexagonal geometric flower with 60° symmetry */}
      
      {/* Six-fold symmetric streamlined petals */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const petalDistance = 60;
        const x = 100 + Math.cos(rad) * petalDistance;
        const y = 100 + Math.sin(rad) * petalDistance;
        
        const colors = ["#D4A574", "#8FA396", "#C4A582", "#7A9299", "#A89080", "#B39C87"];
        const color = colors[i];
        
        return (
          <g key={i}>
            {/* Decorative line from center to petal */}
            <line
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              stroke="#9B8B7E"
              strokeWidth="4"
              opacity="0.7"
            />
            
            {/* Mid-point accent */}
            <circle
              cx={100 + Math.cos(rad) * (petalDistance * 0.5)}
              cy={100 + Math.sin(rad) * (petalDistance * 0.5)}
              r="4"
              fill="#8B7355"
              opacity="0.8"
            />
            
            {/* Petal circle with ornamental layers */}
            <circle cx={x} cy={y} r="24" fill={color} opacity="0.85" />
            <circle cx={x} cy={y} r="18" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="12" fill={colors[(i + 2) % 6]} opacity="0.8" />
            
            {/* Terminal core */}
            <circle cx={x} cy={y} r="6" fill="#E8DCC8" />
            <circle cx={x} cy={y} r="3" fill="#8B7355" />
          </g>
        );
      })}
      
      {/* Perfect center nexus */}
      <circle cx="100" cy="100" r="28" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="20" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="14" fill="#8FA396" opacity="0.8" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#D4A574" />
    </svg>
  );
}
