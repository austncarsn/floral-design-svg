// Sophisticated hexagonal star with sage and coral alternating points
interface FloralTwentyTwoProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyTwo({ 
  size = 200,
  className = ""
}: FloralTwentyTwoProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 outer diamonds - alternating colors */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 36;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          const isEven = i % 2 === 0;
          
          return (
            <g key={i}>
              {/* Main diamond */}
              <rect
                x={cx - 16}
                y={cy - 16}
                width="32"
                height="32"
                fill={isEven ? "#8A9B7A" : "#D4866F"}
                transform={`rotate(45 ${cx} ${cy})`}
              />
              {/* Subtle highlight */}
              <rect
                x={cx - 10}
                y={cy - 10}
                width="20"
                height="20"
                fill={isEven ? "#9DB5A0" : "#E8A594"}
                opacity="0.6"
                transform={`rotate(45 ${cx} ${cy})`}
              />
            </g>
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="26" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="18" fill="#C9B8A8" />
        <circle cx="100" cy="100" r="11" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="5" fill="#8A9B7A" />
      </svg>
    </div>
  );
}