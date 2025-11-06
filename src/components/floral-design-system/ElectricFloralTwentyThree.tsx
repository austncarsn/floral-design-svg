interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentyThree({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco vortex energy bloom */}
      
      {/* Spiraling petal arms */}
      {[...Array(6)].map((_, i) => {
        const baseAngle = (i * 60 * Math.PI) / 180;
        const colors = ["#D4A574", "#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87"];
        
        // Create curved spiral arm
        const path = [];
        for (let j = 0; j <= 8; j++) {
          const t = j / 8;
          const angle = baseAngle + (t * Math.PI / 3);
          const radius = 25 + (t * 50);
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          path.push(j === 0 ? `M ${x},${y}` : `L ${x},${y}`);
        }
        
        return (
          <g key={i}>
            <path
              d={path.join(' ')}
              fill="none"
              stroke={colors[i]}
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Terminal ornament */}
            <circle
              cx={100 + Math.cos(baseAngle + Math.PI / 3) * 75}
              cy={100 + Math.sin(baseAngle + Math.PI / 3) * 75}
              r="9"
              fill={colors[i]}
              opacity="0.85"
            />
          </g>
        );
      })}
      
      {/* Center core */}
      <circle cx="100" cy="100" r="22" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="16" fill="#9B8B7E" opacity="0.85" />
      <circle cx="100" cy="100" r="10" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="5" fill="#8B7355" />
    </svg>
  );
}
