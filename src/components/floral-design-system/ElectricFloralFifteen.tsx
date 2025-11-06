interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFifteen({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco cascading vertical pattern */}
      
      {/* Vertical cascade lines */}
      {[...Array(9)].map((_, i) => {
        const x = 35 + (i * 18.5);
        const colors = ["#D4A574", "#7A9299", "#8FA396"];
        const color = colors[i % 3];
        
        return (
          <g key={i}>
            {/* Vertical line */}
            <line
              x1={x}
              y1="20"
              x2={x}
              y2="180"
              stroke={color}
              strokeWidth="4"
              opacity="0.75"
            />
            
            {/* Decorative nodes along line */}
            {[30, 60, 90, 120, 150, 170].map((y, j) => (
              <circle
                key={j}
                cx={x}
                cy={y}
                r="5"
                fill={color}
                opacity="0.85"
              />
            ))}
          </g>
        );
      })}
      
      {/* Horizontal connecting elements */}
      {[45, 75, 105, 135, 165].map((y, i) => (
        <g key={i}>
          <line
            x1="35"
            y1={y}
            x2="165"
            y2={y}
            stroke="#1A1614"
            strokeWidth="2"
            opacity="0.25"
          />
          <circle cx="100" cy={y} r="8" fill="#C4A582" opacity="0.85" />
          <circle cx="100" cy={y} r="4" fill="#E8DCC8" />
        </g>
      ))}
      
      {/* Center focal point */}
      <circle cx="100" cy="100" r="22" fill="#1A1614" opacity="0.3" />
      <circle cx="100" cy="100" r="16" fill="#A89080" opacity="0.85" />
      <circle cx="100" cy="100" r="10" fill="#E8DCC8" />
      <circle cx="100" cy="100" r="5" fill="#8B7355" />
    </svg>
  );
}
