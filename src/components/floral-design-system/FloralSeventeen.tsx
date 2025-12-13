// Sophisticated triple-ring dahlia with coral, teal, and cream layers
interface FloralSeventeenProps {
  size?: number;
  className?: string;
}

export default function FloralSeventeen({ 
  size = 200,
  className = ""
}: FloralSeventeenProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring - 8 coral petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 38;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          return (
            <g key={`outer-${i}`}>
              <ellipse
                cx={cx}
                cy={cy}
                rx="16"
                ry="26"
                fill="#D4866F"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              <ellipse
                cx={cx}
                cy={cy}
                rx="10"
                ry="17"
                fill="#E8A594"
                opacity="0.6"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            </g>
          );
        })}
        
        {/* Middle ring - 8 teal petals, offset 22.5° */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 26;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          return (
            <ellipse
              key={`mid-${i}`}
              cx={cx}
              cy={cy}
              rx="12"
              ry="20"
              fill="#5A8A8A"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="22" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="15" fill="#C9B8A8" />
        <circle cx="100" cy="100" r="9" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="4" fill="#D4866F" />
      </svg>
    </div>
  );
}