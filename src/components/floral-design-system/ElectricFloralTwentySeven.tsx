interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwentySeven({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome dusty teal geometric web */}
      
      {/* Hexagonal web structure */}
      {[65, 50, 35].map((radius, layer) => (
        <g key={layer}>
          <path
            d={[...Array(6)].map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const x = 100 + Math.cos(angle) * radius;
              const y = 100 + Math.sin(angle) * radius;
              return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
            }).join(' ') + ' Z'}
            fill="none"
            stroke="#7A9299"
            strokeWidth="4"
            opacity={0.9 - layer * 0.1}
          />
          {/* Hexagon vertices */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x = 100 + Math.cos(angle) * radius;
            const y = 100 + Math.sin(angle) * radius;
            
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                fill="#7A9299"
                opacity="0.85"
              />
            );
          })}
        </g>
      ))}
      
      {/* Connecting radial lines */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + Math.cos(angle) * 65}
            y2={100 + Math.sin(angle) * 65}
            stroke="#1A1614"
            strokeWidth="2"
            opacity="0.3"
          />
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="100" r="20" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="14" fill="#7A9299" opacity="0.85" />
      <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="4" fill="#7A9299" />
    </svg>
  );
}
