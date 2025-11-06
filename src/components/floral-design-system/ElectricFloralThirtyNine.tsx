interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtyNine({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome dusty mauve concentric squares */}
      
      {/* Rotating square layers */}
      {[76, 62, 48, 34, 20].map((size, i) => {
        const rotation = i * 15;
        const x = 100 - size / 2;
        const y = 100 - size / 2;
        
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={size}
              height={size}
              fill={i % 2 === 0 ? "#A89080" : "#E8DCC8"}
              opacity={i % 2 === 0 ? 0.85 : 0.95}
              transform={`rotate(${rotation} 100 100)`}
            />
            {i % 2 === 1 && (
              <rect
                x={x}
                y={y}
                width={size}
                height={size}
                fill="none"
                stroke="#1A1614"
                strokeWidth="2"
                opacity="0.3"
                transform={`rotate(${rotation} 100 100)`}
              />
            )}
          </g>
        );
      })}
      
      {/* Corner accents on outermost square */}
      {[
        { x: 100 - 38, y: 100 - 38 },
        { x: 100 + 38, y: 100 - 38 },
        { x: 100 + 38, y: 100 + 38 },
        { x: 100 - 38, y: 100 + 38 }
      ].map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="6"
          fill="#A89080"
          opacity="0.9"
        />
      ))}
      
      {/* Center */}
      <circle cx="100" cy="100" r="14" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="9" fill="#A89080" opacity="0.9" />
      <circle cx="100" cy="100" r="5" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="2" fill="#A89080" />
    </svg>
  );
}
