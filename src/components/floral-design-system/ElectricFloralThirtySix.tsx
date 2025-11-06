interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtySix({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome dusty teal layered hexagons */}
      
      {/* Hexagon layers */}
      {[72, 56, 40, 24].map((radius, i) => {
        const points = [...Array(6)].map((_, j) => {
          const angle = (j * 60 - 30) * Math.PI / 180;
          return {
            x: 100 + Math.cos(angle) * radius,
            y: 100 + Math.sin(angle) * radius
          };
        });
        const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
        
        return (
          <g key={i}>
            <path
              d={pathD}
              fill={i % 2 === 0 ? "#7A9299" : "#E8DCC8"}
              opacity={i % 2 === 0 ? 0.85 : 0.95}
            />
            {i % 2 === 1 && (
              <path
                d={pathD}
                fill="none"
                stroke="#1A1614"
                strokeWidth="2"
                opacity="0.3"
              />
            )}
          </g>
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="100" r="18" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="12" fill="#7A9299" opacity="0.9" />
      <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="3" fill="#7A9299" />
    </svg>
  );
}
