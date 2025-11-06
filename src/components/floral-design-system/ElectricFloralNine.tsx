interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralNine({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco radial sunburst pattern */}
      
      {/* 16 radial lines creating Art Deco sunburst */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const innerRadius = 25;
        const outerRadius = 80;
        const color = i % 2 === 0 ? "#D4A574" : "#7A9299";
        
        return (
          <line
            key={i}
            x1={100 + Math.cos(angle) * innerRadius}
            y1={100 + Math.sin(angle) * innerRadius}
            x2={100 + Math.cos(angle) * outerRadius}
            y2={100 + Math.sin(angle) * outerRadius}
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.8"
          />
        );
      })}
      
      {/* Circular terminals */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const outerRadius = 80;
        const x = 100 + Math.cos(angle) * outerRadius;
        const y = 100 + Math.sin(angle) * outerRadius;
        const color = i % 2 === 0 ? "#D4A574" : "#7A9299";
        
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            fill={color}
            opacity="0.85"
          />
        );
      })}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="22" fill="#C4A582" opacity="0.85" />
      <circle cx="100" cy="100" r="15" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="9" fill="#8FA396" opacity="0.8" />
      <circle cx="100" cy="100" r="4" fill="#8B7355" />
    </svg>
  );
}
