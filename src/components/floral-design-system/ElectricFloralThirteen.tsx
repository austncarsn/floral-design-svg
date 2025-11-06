interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco spiral bloom pattern */}
      
      {/* Spiral petals */}
      {[...Array(12)].map((_, i) => {
        const baseAngle = (i * 30 * Math.PI) / 180;
        const spiralOffset = i * 3;
        const radius = 45 + spiralOffset;
        const x = 100 + Math.cos(baseAngle) * radius;
        const y = 100 + Math.sin(baseAngle) * radius;
        
        const colors = ["#D4A574", "#7A9299", "#8FA396"];
        const color = colors[i % 3];
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="18" fill={color} opacity="0.85" />
            <circle cx={x} cy={y} r="12" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="7" fill="#1A1614" opacity="0.25" />
            <circle cx={x} cy={y} r="4" fill={color} opacity="0.9" />
          </g>
        );
      })}
      
      {/* Connecting spiral line */}
      <path
        d={[...Array(12)].map((_, i) => {
          const baseAngle = (i * 30 * Math.PI) / 180;
          const spiralOffset = i * 3;
          const radius = 45 + spiralOffset;
          const x = 100 + Math.cos(baseAngle) * radius;
          const y = 100 + Math.sin(baseAngle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ')}
        fill="none"
        stroke="#1A1614"
        strokeWidth="2"
        opacity="0.3"
      />
      
      {/* Center anchor */}
      <circle cx="100" cy="100" r="28" fill="#C4A582" opacity="0.85" />
      <circle cx="100" cy="100" r="20" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="14" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#8B7355" />
    </svg>
  );
}
