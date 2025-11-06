interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco octagonal mandala */}
      
      {/* 8 layered petal elements */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const distance = 58;
        const x = 100 + Math.cos(angle) * distance;
        const y = 100 + Math.sin(angle) * distance;
        
        const colors = ["#D4A574", "#8FA396", "#C4A582", "#7A9299"];
        const color = colors[i % 4];
        
        return (
          <g key={i}>
            {/* Petal element */}
            <circle cx={x} cy={y} r="22" fill={color} opacity="0.85" />
            <circle cx={x} cy={y} r="15" fill="#E8DCC8" opacity="0.95" />
            <circle cx={x} cy={y} r="9" fill={color} opacity="0.7" />
            <circle cx={x} cy={y} r="4" fill="#8B7355" />
          </g>
        );
      })}
      
      {/* Connecting lines forming octagon */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const distance = 58;
          const x = 100 + Math.cos(angle) * distance;
          const y = 100 + Math.sin(angle) * distance;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill="none"
        stroke="#9B8B7E"
        strokeWidth="2"
        opacity="0.6"
      />
      
      {/* Central element */}
      <circle cx="100" cy="100" r="32" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="22" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="14" fill="#B39C87" opacity="0.8" />
      <circle cx="100" cy="100" r="7" fill="#8B7355" />
    </svg>
  );
}
