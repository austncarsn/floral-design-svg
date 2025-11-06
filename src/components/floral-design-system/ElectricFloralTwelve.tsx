interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwelve({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco octagonal layered mandala */}
      
      {/* Outer octagon ring */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 82;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill="#D4A574"
        opacity="0.85"
      />
      
      {/* Middle octagon */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 62;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill="#1A1614"
        opacity="0.3"
      />
      
      {/* Inner octagon */}
      <path
        d={[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const radius = 45;
          const x = 100 + Math.cos(angle) * radius;
          const y = 100 + Math.sin(angle) * radius;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill="#7A9299"
        opacity="0.85"
      />
      
      {/* Corner ornaments */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 82;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        const colors = ["#C4A582", "#8FA396", "#A89080", "#B39C87"];
        
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill={colors[i % 4]} opacity="0.85" />
            <circle cx={x} cy={y} r="5" fill="#E8DCC8" />
            <circle cx={x} cy={y} r="2" fill="#1A1614" opacity="0.8" />
          </g>
        );
      })}
      
      {/* Center medallion */}
      <circle cx="100" cy="100" r="32" fill="#1A1614" opacity="0.25" />
      <circle cx="100" cy="100" r="24" fill="#C4A582" opacity="0.85" />
      <circle cx="100" cy="100" r="16" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="10" fill="#8B7355" opacity="0.85" />
      <circle cx="100" cy="100" r="5" fill="#1A1614" opacity="0.9" />
    </svg>
  );
}
