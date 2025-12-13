// Elegant four-leaf clover with sophisticated layering - cardinal perfection
interface FloralFourProps {
  size?: number;
  className?: string;
}

export default function FloralFour({ 
  size = 200,
  className = ""
}: FloralFourProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 4 main petals - cardinal directions with elegant curves */}
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 38;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          return (
            <g key={i}>
              {/* Main petal */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="28"
                ry="32"
                fill="#F5EFE0"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Subtle highlight */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="20"
                ry="24"
                fill="#E8DCC8"
                opacity="0.6"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            </g>
          );
        })}
        
        {/* Center diamond with depth */}
        <path 
          d="M 100 78 L 122 100 L 100 122 L 78 100 Z" 
          fill="#6B8A9B" 
        />
        <path 
          d="M 100 84 L 116 100 L 100 116 L 84 100 Z" 
          fill="#5A8A8A" 
        />
        
        {/* Center accent */}
        <circle cx="100" cy="100" r="8" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="4" fill="#3A3A3A" />
      </svg>
    </div>
  );
}