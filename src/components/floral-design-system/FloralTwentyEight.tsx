// Sophisticated mint pentagon with coral center and elegant depth
interface FloralTwentyEightProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyEight({ 
  size = 200,
  className = ""
}: FloralTwentyEightProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 5 mint petals - 72° intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 35;
          const cy = centerY + Math.sin(rad) * 35;
          return (
            <g key={i}>
              {/* Main petal */}
              <ellipse 
                cx={cx} 
                cy={cy} 
                rx="24" 
                ry="23" 
                fill="#9DB5A0"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Highlight */}
              <circle 
                cx={cx} 
                cy={cy} 
                r="11" 
                fill="#C4D9CE" 
                opacity="0.7"
              />
            </g>
          );
        })}
        
        {/* Center with coral */}
        <circle cx="100" cy="100" r="26" fill="#D4866F" />
        <circle cx="100" cy="100" r="16" fill="#E8A594" />
        <circle cx="100" cy="100" r="9" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="4" fill="#9DB5A0" />
      </svg>
    </div>
  );
}