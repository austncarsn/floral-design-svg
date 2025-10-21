// Dusty rose and lavender dahlia (perfectly symmetrical)
interface FloralTwentySevenProps {
  size?: number;
  className?: string;
}

export default function FloralTwentySeven({ 
  size = 200,
  className = ""
}: FloralTwentySevenProps) {
  const centerX = 100;
  const centerY = 100;
  const outerRadius = 42;
  const innerRadius = 28;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer layer - 12 petals at 30-degree intervals */}
        {Array.from({ length: 12 }, (_, i) => i * 30).map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * outerRadius;
          const cy = centerY + Math.sin(rad) * outerRadius;
          return (
            <ellipse
              key={`outer-${i}`}
              cx={cx}
              cy={cy}
              rx="12"
              ry="24"
              fill="#C9858D"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Middle layer - 8 petals at 45-degree intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * innerRadius;
          const cy = centerY + Math.sin(rad) * innerRadius;
          return (
            <ellipse
              key={`inner-${i}`}
              cx={cx}
              cy={cy}
              rx="10"
              ry="18"
              fill="#B8A9C9"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="14" fill="#F5EFE0" />
      </svg>
    </div>
  );
}
