// Refined coral daisy with golden ratio proportions - 6 petal perfection
interface FloralOneProps {
  size?: number;
  className?: string;
}

export default function FloralOne({ 
  size = 200,
  className = ""
}: FloralOneProps) {
  const phi = 1.618;
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 petals evenly spaced at 60-degree intervals - golden ratio sizing */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 40;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="28"
              ry="35"
              fill="#D4866F"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Outer center ring - golden ratio */}
        <circle cx="100" cy="100" r="28" fill="#C97A64" />
        
        {/* Inner center */}
        <circle cx="100" cy="100" r="17" fill="#1A1A1A" />
        
        {/* Center highlight */}
        <circle cx="100" cy="100" r="7" fill="#E8DCC8" />
      </svg>
    </div>
  );
}