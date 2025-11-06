interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemFifteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco lotus stem rising from water */}
      
      {/* Water line */}
      <ellipse cx="100" cy="170" rx="60" ry="12" fill="#7A9299" opacity="0.4" />
      <ellipse cx="100" cy="170" rx="45" ry="8" fill="#8FA396" opacity="0.3" />
      
      {/* Stem rising from water */}
      <line x1="100" y1="170" x2="100" y2="55" stroke="#8B7355" strokeWidth="6" opacity="0.85" />
      
      {/* Lotus leaves floating on water */}
      {[
        { x: 65, y: 165, size: 20, color: "#8FA396" },
        { x: 135, y: 168, size: 18, color: "#7A9299" }
      ].map((leaf, i) => (
        <g key={i}>
          <circle cx={leaf.x} cy={leaf.y} r={leaf.size} fill={leaf.color} opacity="0.85" />
          <circle cx={leaf.x} cy={leaf.y} r={leaf.size * 0.7} fill="#E8DCC8" opacity="0.4" />
          {/* Radiating lines on leaf */}
          {[...Array(8)].map((_, j) => {
            const angle = (j * 45 * Math.PI) / 180;
            return (
              <line
                key={j}
                x1={leaf.x}
                y1={leaf.y}
                x2={leaf.x + Math.cos(angle) * leaf.size * 0.8}
                y2={leaf.y + Math.sin(angle) * leaf.size * 0.8}
                stroke="#1A1614"
                strokeWidth="1"
                opacity="0.3"
              />
            );
          })}
        </g>
      ))}
      
      {/* Lotus bud/flower at top */}
      {/* Outer petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 - 90) * Math.PI / 180;
        const x = 100 + Math.cos(angle) * 22;
        const y = 35 + Math.sin(angle) * 22;
        
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="16"
            ry="26"
            fill="#D4A574"
            opacity="0.85"
            transform={`rotate(${i * 45} ${x} ${y})`}
          />
        );
      })}
      
      {/* Inner petals */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 - 90) * Math.PI / 180;
        const x = 100 + Math.cos(angle) * 14;
        const y = 35 + Math.sin(angle) * 14;
        
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="12"
            ry="20"
            fill="#C4A582"
            opacity="0.9"
            transform={`rotate(${i * 60} ${x} ${y})`}
          />
        );
      })}
      
      {/* Center */}
      <circle cx="100" cy="35" r="12" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="35" r="7" fill="#E8DCC8" />
      {/* Seed dots */}
      {[...Array(5)].map((_, i) => {
        const angle = (i * 72 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 4;
        const y = 35 + Math.sin(angle) * 4;
        
        return (
          <circle key={i} cx={x} cy={y} r="1.5" fill="#1A1614" opacity="0.6" />
        );
      })}
      
      {/* Underwater roots suggestion */}
      <line x1="100" y1="170" x2="95" y2="185" stroke="#9B8B7E" strokeWidth="3" opacity="0.4" />
      <line x1="100" y1="170" x2="105" y2="185" stroke="#9B8B7E" strokeWidth="3" opacity="0.4" />
    </svg>
  );
}
