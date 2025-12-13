// Sophisticated interlocking circles mandala with teal and coral harmony
interface FloralFifteenProps {
  size?: number;
  className?: string;
}

export default function FloralFifteen({ 
  size = 200,
  className = ""
}: FloralFifteenProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 8 outer circles - alternating colors */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 36;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          const isEven = i % 2 === 0;
          
          return (
            <g key={i}>
              {/* Main circle */}
              <circle
                cx={cx}
                cy={cy}
                r="22"
                fill={isEven ? "#5A8A8A" : "#D4866F"}
              />
              {/* Subtle highlight */}
              <circle
                cx={cx}
                cy={cy}
                r="13"
                fill={isEven ? "#6B8A9B" : "#E8A594"}
                opacity="0.6"
              />
            </g>
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="28" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="20" fill="#C9B8A8" />
        <circle cx="100" cy="100" r="13" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="6" fill="#D4866F" />
      </svg>
    </div>
  );
}