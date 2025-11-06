interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtyThree({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome warm brown sunburst */}
      
      {/* Alternating long and short rays */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const innerRadius = 25;
        const outerRadius = i % 2 === 0 ? 78 : 60;
        const strokeWidth = i % 2 === 0 ? 7 : 4;
        
        return (
          <line
            key={i}
            x1={100 + Math.cos(angle) * innerRadius}
            y1={100 + Math.sin(angle) * innerRadius}
            x2={100 + Math.cos(angle) * outerRadius}
            y2={100 + Math.sin(angle) * outerRadius}
            stroke="#8B7355"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity="0.85"
          />
        );
      })}
      
      {/* Ray endpoints */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 78;
        const y = 100 + Math.sin(angle) * 78;
        
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            fill="#8B7355"
            opacity="0.9"
          />
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="100" r="22" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="16" fill="#8B7355" opacity="0.85" />
      <circle cx="100" cy="100" r="10" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="5" fill="#8B7355" />
    </svg>
  );
}
