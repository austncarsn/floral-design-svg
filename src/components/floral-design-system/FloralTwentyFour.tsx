// Sophisticated dual-pentagon star with coral and cream harmony
interface FloralTwentyFourProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyFour({ 
  size = 200,
  className = ""
}: FloralTwentyFourProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 5 outer coral petals - 72° intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 36;
          const cy = centerY + Math.sin(rad) * 36;
          return (
            <g key={`outer-${i}`}>
              {/* Main petal */}
              <ellipse 
                cx={cx} 
                cy={cy} 
                rx="23" 
                ry="21" 
                fill="#D4866F"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Highlight */}
              <circle 
                cx={cx} 
                cy={cy} 
                r="9" 
                fill="#E8A594" 
                opacity="0.7"
              />
            </g>
          );
        })}
        
        {/* 5 inner cream accents offset 36° */}
        {[36, 108, 180, 252, 324].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 20;
          const cy = centerY + Math.sin(rad) * 20;
          return (
            <ellipse 
              key={`inner-${i}`}
              cx={cx} 
              cy={cy} 
              rx="12" 
              ry="10" 
              fill="#E8DCC8"
              transform={`rotate(${angle + 36} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="22" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="12" fill="#D4866F" />
        <circle cx="100" cy="100" r="5" fill="#E8DCC8" />
      </svg>
    </div>
  );
}