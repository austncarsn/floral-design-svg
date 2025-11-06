interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralOne({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco 12-point starburst */}
      
      {/* Dual-layer rays with perfect 30° spacing */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const innerRadius = 28;
        const midRadius = 55;
        const outerRadius = 78;
        
        const color = i % 2 === 0 ? "#D4A574" : "#7A9299";
        const altColor = i % 2 === 0 ? "#7A9299" : "#D4A574";
        
        return (
          <g key={i}>
            {/* Main ray */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * outerRadius}
              y2={100 + Math.sin(angle) * outerRadius}
              stroke={color}
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.85"
            />
            
            {/* Secondary thin ray */}
            <line
              x1={100 + Math.cos(angle) * innerRadius}
              y1={100 + Math.sin(angle) * innerRadius}
              x2={100 + Math.cos(angle) * midRadius}
              y2={100 + Math.sin(angle) * midRadius}
              stroke={altColor}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </g>
        );
      })}
      
      {/* Art Deco circular terminals at ray endpoints */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 78;
        const y = 100 + Math.sin(angle) * 78;
        const color = i % 2 === 0 ? "#D4A574" : "#7A9299";
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill={color} opacity="0.9" />
            <circle cx={x} cy={y} r="5" fill="#E8DCC8" />
            <circle cx={x} cy={y} r="2.5" fill={color} />
          </g>
        );
      })}
      
      {/* Concentric center with perfect symmetry */}
      <circle cx="100" cy="100" r="24" fill="#C4A582" opacity="0.9" />
      <circle cx="100" cy="100" r="16" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="10" fill="#8FA396" opacity="0.85" />
      <circle cx="100" cy="100" r="5" fill="#A89080" />
    </svg>
  );
}
