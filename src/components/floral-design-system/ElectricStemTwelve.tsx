interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemTwelve({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco ivy vine with climbing tendrils */}
      
      {/* Main vine */}
      <path
        d="M 60,180 Q 70,150 80,120 Q 90,90 85,60 Q 80,30 90,10"
        fill="none"
        stroke="#8B7355"
        strokeWidth="5"
        opacity="0.85"
      />
      
      {/* Ivy leaves along vine */}
      {[
        { x: 60, y: 180, angle: 45, color: "#8FA396", size: 1 },
        { x: 73, y: 145, angle: 30, color: "#7A9299", size: 1.1 },
        { x: 82, y: 110, angle: 15, color: "#C4A582", size: 1.2 },
        { x: 88, y: 80, angle: -10, color: "#A89080", size: 1.1 },
        { x: 83, y: 50, angle: -25, color: "#B39C87", size: 1 },
        { x: 87, y: 25, angle: -35, color: "#D4A574", size: 0.9 }
      ].map((leaf, i) => {
        // Heart-shaped ivy leaf using path
        const size = 16 * leaf.size;
        
        return (
          <g key={i}>
            <path
              d={`M ${leaf.x},${leaf.y + size * 0.6} Q ${leaf.x - size * 0.5},${leaf.y} ${leaf.x},${leaf.y - size * 0.3} Q ${leaf.x + size * 0.5},${leaf.y} ${leaf.x},${leaf.y + size * 0.6}`}
              fill={leaf.color}
              opacity="0.85"
              transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
            />
            <path
              d={`M ${leaf.x},${leaf.y + size * 0.4} Q ${leaf.x - size * 0.3},${leaf.y + size * 0.1} ${leaf.x},${leaf.y - size * 0.15} Q ${leaf.x + size * 0.3},${leaf.y + size * 0.1} ${leaf.x},${leaf.y + size * 0.4}`}
              fill="#E8DCC8"
              opacity="0.9"
              transform={`rotate(${leaf.angle} ${leaf.x} ${leaf.y})`}
            />
            {/* Stem to leaf */}
            <line
              x1={leaf.x - 8}
              y1={leaf.y - 3}
              x2={leaf.x}
              y2={leaf.y}
              stroke="#9B8B7E"
              strokeWidth="2"
              opacity="0.7"
            />
          </g>
        );
      })}
      
      {/* Tendrils */}
      <path
        d="M 82,110 Q 95,115 100,125 Q 103,130 98,135"
        fill="none"
        stroke="#9B8B7E"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M 88,80 Q 100,75 110,78 Q 118,80 120,88"
        fill="none"
        stroke="#9B8B7E"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}
