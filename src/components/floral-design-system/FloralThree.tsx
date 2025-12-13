// Sophisticated layered blossom - pentagon perfection with depth
interface FloralThreeProps {
  size?: number;
  className?: string;
}

export default function FloralThree({ 
  size = 200,
  className = ""
}: FloralThreeProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer layer - 5 bold petals at 72-degree intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 43;
          const cy = centerY + Math.sin(rad) * 43;
          return (
            <ellipse
              key={`outer-${i}`}
              cx={cx}
              cy={cy}
              rx="24"
              ry="32"
              fill="#1A1A1A"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Middle layer - offset for visual interest */}
        {[36, 108, 180, 252, 324].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 30;
          const cy = centerY + Math.sin(rad) * 30;
          return (
            <circle
              key={`mid-${i}`}
              cx={cx}
              cy={cy}
              r="13"
              fill="#D4866F"
              opacity="0.85"
            />
          );
        })}
        
        {/* Inner layer - warm coral */}
        <circle cx="100" cy="100" r="35" fill="#D4866F" />
        
        {/* Center ring */}
        <circle cx="100" cy="100" r="20" fill="#C97A64" />
        
        {/* Center cream accent */}
        <circle cx="100" cy="100" r="11" fill="#E8DCC8" />
        
        {/* Focal point */}
        <circle cx="100" cy="100" r="5" fill="#1A1A1A" />
      </svg>
    </div>
  );
}