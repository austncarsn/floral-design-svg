interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemFourteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco thistle with spiky crown */}
      
      {/* Main stem */}
      <line x1="100" y1="180" x2="100" y2="60" stroke="#8B7355" strokeWidth="6" opacity="0.85" />
      
      {/* Thistle bulb/base */}
      <ellipse cx="100" cy="68" rx="18" ry="24" fill="#7A9299" opacity="0.85" />
      <ellipse cx="100" cy="68" rx="12" ry="16" fill="#E8DCC8" opacity="0.3" />
      
      {/* Spiky bracts around bulb */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const innerRadius = 18;
        const outerRadius = 28;
        const x1 = 100 + Math.cos(angle) * innerRadius;
        const y1 = 68 + Math.sin(angle) * (innerRadius * 1.3);
        const x2 = 100 + Math.cos(angle) * outerRadius;
        const y2 = 68 + Math.sin(angle) * (outerRadius * 1.3);
        
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#8FA396"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        );
      })}
      
      {/* Thistle flower crown */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const innerRadius = 12;
        const outerRadius = i % 2 === 0 ? 24 : 20;
        const x1 = 100 + Math.cos(angle) * innerRadius;
        const y1 = 40 + Math.sin(angle) * innerRadius * 0.8;
        const x2 = 100 + Math.cos(angle) * outerRadius;
        const y2 = 40 + Math.sin(angle) * outerRadius * 0.8;
        
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#C4A582"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
        );
      })}
      
      <circle cx="100" cy="40" r="10" fill="#D4A574" opacity="0.85" />
      <circle cx="100" cy="40" r="6" fill="#E8DCC8" opacity="0.95" />
      
      {/* Stem leaves */}
      {[
        { y: 100, side: -1, color: "#8FA396" },
        { y: 130, side: 1, color: "#7A9299" },
        { y: 155, side: -1, color: "#C4A582" }
      ].map((leaf, i) => {
        const x = 100 + leaf.side * 22;
        
        return (
          <g key={i}>
            <ellipse
              cx={x}
              cy={leaf.y}
              rx="18"
              ry="12"
              fill={leaf.color}
              opacity="0.85"
              transform={`rotate(${leaf.side * 30} ${x} ${leaf.y})`}
            />
            <ellipse
              cx={x}
              cy={leaf.y}
              rx="11"
              ry="7"
              fill="#E8DCC8"
              opacity="0.9"
              transform={`rotate(${leaf.side * 30} ${x} ${leaf.y})`}
            />
            {/* Spikes on leaf edges */}
            {[-1, 0, 1].map((spike, j) => (
              <line
                key={j}
                x1={x + spike * 8}
                y1={leaf.y}
                x2={x + spike * 8 + leaf.side * 6}
                y2={leaf.y + 3}
                stroke={leaf.color}
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
