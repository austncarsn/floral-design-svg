// Sophisticated double-layered mandala with pentagon and square harmony
interface FloralSevenProps {
  size?: number;
  className?: string;
}

export default function FloralSeven({ 
  size = 200,
  className = ""
}: FloralSevenProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer layer - 5 petals (pentagon) with sophisticated depth */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 43;
          const cy = centerY + Math.sin(rad) * 43;
          return (
            <g key={`outer-${i}`}>
              {/* Main petal */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="26"
                ry="24"
                fill="#5A8A8A"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Subtle highlight */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="18"
                ry="16"
                fill="#6B8A9B"
                opacity="0.6"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            </g>
          );
        })}
        
        {/* Inner layer - 4 petals (square) offset 45° for visual interest */}
        {[45, 135, 225, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 30;
          const cy = centerY + Math.sin(rad) * 30;
          return (
            <g key={`inner-${i}`}>
              {/* Main petal */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="19"
                ry="17"
                fill="#F5EFE0"
              />
              {/* Subtle highlight */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="12"
                ry="10"
                fill="#E8DCC8"
                opacity="0.6"
              />
            </g>
          );
        })}
        
        {/* Center with layered complexity */}
        <circle cx="100" cy="100" r="17" fill="#6B8A9B" />
        <circle cx="100" cy="100" r="11" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="5" fill="#E8DCC8" />
      </svg>
    </div>
  );
}