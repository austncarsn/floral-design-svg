interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralThirtyEight({ size = 200, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Monochrome light gold Art Deco fan */}
      
      {/* Radiating fan segments */}
      {[...Array(9)].map((_, i) => {
        const angle1 = (i * 20 - 90 - 10) * Math.PI / 180;
        const angle2 = (i * 20 - 90 + 10) * Math.PI / 180;
        const radius = 75;
        
        const x1 = 100 + Math.cos(angle1) * radius;
        const y1 = 100 + Math.sin(angle1) * radius;
        const x2 = 100 + Math.cos(angle2) * radius;
        const y2 = 100 + Math.sin(angle2) * radius;
        
        return (
          <g key={i}>
            <path
              d={`M 100,100 L ${x1},${y1} A ${radius} ${radius} 0 0 1 ${x2},${y2} Z`}
              fill={i % 2 === 0 ? "#C4A582" : "#E8DCC8"}
              opacity={i % 2 === 0 ? 0.85 : 0.95}
            />
            {i % 2 === 0 && (
              <line
                x1="100"
                y1="100"
                x2={(x1 + x2) / 2}
                y2={(y1 + y2) / 2}
                stroke="#1A1614"
                strokeWidth="2"
                opacity="0.25"
              />
            )}
          </g>
        );
      })}
      
      {/* Outer arc */}
      <path
        d={`M ${100 + Math.cos(-Math.PI / 2 - 10 * Math.PI / 180) * 75} ${100 + Math.sin(-Math.PI / 2 - 10 * Math.PI / 180) * 75} A 75 75 0 0 1 ${100 + Math.cos(-Math.PI / 2 + 170 * Math.PI / 180) * 75} ${100 + Math.sin(-Math.PI / 2 + 170 * Math.PI / 180) * 75}`}
        fill="none"
        stroke="#1A1614"
        strokeWidth="3"
        opacity="0.3"
      />
      
      {/* Center */}
      <circle cx="100" cy="100" r="20" fill="#C4A582" opacity="0.85" />
      <circle cx="100" cy="100" r="13" fill="#1A1614" opacity="0.35" />
      <circle cx="100" cy="100" r="8" fill="#C4A582" opacity="0.9" />
      <circle cx="100" cy="100" r="4" fill="#E8DCC8" />
    </svg>
  );
}
