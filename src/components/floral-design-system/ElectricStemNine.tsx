interface Props {
  size?: number;
  className?: string;
}

export default function ElectricStemNine({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco wheat stalk with geometric grains */}
      
      {/* Main stem */}
      <line x1="100" y1="175" x2="100" y2="40" stroke="#8B7355" strokeWidth="6" opacity="0.85" />
      
      {/* Wheat grains in herringbone pattern */}
      {[...Array(12)].map((_, i) => {
        const y = 50 + i * 10;
        const side = i % 2 === 0 ? -1 : 1;
        const x = 100 + side * 15;
        const angle = side * 40;
        const colors = ["#D4A574", "#C4A582", "#B39C87", "#A89080"];
        const color = colors[i % 4];
        
        return (
          <g key={i}>
            <ellipse
              cx={x}
              cy={y}
              rx="12"
              ry="6"
              fill={color}
              opacity="0.85"
              transform={`rotate(${angle} ${x} ${y})`}
            />
            <ellipse
              cx={x}
              cy={y}
              rx="7"
              ry="3"
              fill="#E8DCC8"
              opacity="0.95"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          </g>
        );
      })}
      
      {/* Top terminal grains */}
      {[-10, 0, 10].map((offset, i) => (
        <g key={i}>
          <ellipse
            cx={100 + offset}
            cy={35 - Math.abs(offset) * 0.5}
            rx="10"
            ry="16"
            fill="#D4A574"
            opacity="0.85"
          />
          <ellipse
            cx={100 + offset}
            cy={35 - Math.abs(offset) * 0.5}
            rx="6"
            ry="10"
            fill="#E8DCC8"
            opacity="0.95"
          />
        </g>
      ))}
    </svg>
  );
}
