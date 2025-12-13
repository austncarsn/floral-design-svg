// Sophisticated ten-petal mandala with alternating colors and perfect rhythm
interface FloralFiveProps {
  size?: number;
  className?: string;
}

export default function FloralFive({ 
  size = 200,
  className = ""
}: FloralFiveProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring - 10 elongated petals with sophisticated alternation */}
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 42;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          const isEven = i % 2 === 0;
          
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={isEven ? "17" : "14"}
              ry={isEven ? "30" : "26"}
              fill={isEven ? "#D4866F" : "#1A1A1A"}
              opacity={isEven ? "1" : "0.95"}
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Middle decorative ring */}
        <circle cx="100" cy="100" r="30" fill="#C97A64" opacity="0.4" />
        
        {/* Inner center base */}
        <circle cx="100" cy="100" r="22" fill="#E8DCC8" />
        
        {/* Center detail */}
        <circle cx="100" cy="100" r="13" fill="#D4866F" />
        
        {/* Focal point */}
        <circle cx="100" cy="100" r="6" fill="#1A1A1A" />
      </svg>
    </div>
  );
}