interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralForty({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome wheat/sand kaleidoscope */}
      
      {/* 6-fold symmetrical kaleidoscope pattern */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 55;
        const y = 100 + Math.sin(angle) * 55;
        
        return (
          <g key={i} transform={`rotate(${i * 60} 100 100)`}>
            {/* Petal shape */}
            <ellipse
              cx={100}
              cy={45}
              rx="22"
              ry="35"
              fill="#B39C87"
              opacity="0.85"
            />
            <ellipse
              cx={100}
              cy={45}
              rx="14"
              ry="24"
              fill="#E8DCC8"
              opacity="0.95"
            />
            <ellipse
              cx={100}
              cy={45}
              rx="8"
              ry="14"
              fill="#1A1614"
              opacity="0.25"
            />
            <ellipse
              cx={100}
              cy={45}
              rx="4"
              ry="8"
              fill="#B39C87"
              opacity="0.9"
            />
          </g>
        );
      })}
      
      {/* Connecting hexagon */}
      <path
        d={[...Array(6)].map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x = 100 + Math.cos(angle) * 38;
          const y = 100 + Math.sin(angle) * 38;
          return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
        }).join(' ') + ' Z'}
        fill="none"
        stroke="#1A1614"
        strokeWidth="2"
        opacity="0.3"
      />
      
      {/* Center */}
      <circle cx="100" cy="100" r="26" fill="#B39C87" opacity="0.85" />
      <circle cx="100" cy="100" r="18" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="12" fill="#B39C87" opacity="0.9" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#B39C87" />
    </svg>
  );
}
