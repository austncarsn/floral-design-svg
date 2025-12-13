// Sophisticated hexagon burst with coral and cream alternating elegance
interface FloralFourteenProps {
  size?: number;
  className?: string;
}

export default function FloralFourteen({ 
  size = 200,
  className = ""
}: FloralFourteenProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 outer petals - coral */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 38;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          return (
            <g key={`outer-${i}`}>
              {/* Main petal */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="24"
                ry="26"
                fill="#D4866F"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Subtle highlight */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="15"
                ry="17"
                fill="#E8A594"
                opacity="0.6"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            </g>
          );
        })}
        
        {/* 6 inner petals - cream, offset 30° */}
        {[30, 90, 150, 210, 270, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 22;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          return (
            <ellipse
              key={`inner-${i}`}
              cx={cx}
              cy={cy}
              rx="14"
              ry="16"
              fill="#E8DCC8"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="18" fill="#5A8A8A" />
        <circle cx="100" cy="100" r="12" fill="#6B8A9B" />
        <circle cx="100" cy="100" r="6" fill="#E8DCC8" />
      </svg>
    </div>
  );
}