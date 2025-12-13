// Sophisticated multi-layer dahlia with mauve and lavender sophistication
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
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer layer - 12 mauve petals at 30° intervals */}
        {Array.from({ length: 12 }, (_, i) => i * 30).map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 38;
          const cy = centerY + Math.sin(rad) * 38;
          return (
            <ellipse
              key={`outer-${i}`}
              cx={cx}
              cy={cy}
              rx="11"
              ry="23"
              fill="#C9A5AE"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Middle layer - 8 lavender petals at 45° intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 26;
          const cy = centerY + Math.sin(rad) * 26;
          return (
            <ellipse
              key={`inner-${i}`}
              cx={cx}
              cy={cy}
              rx="10"
              ry="18"
              fill="#C4ADB8"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="16" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="9" fill="#C9A5AE" />
        <circle cx="100" cy="100" r="4" fill="#C4ADB8" />
      </svg>
    </div>
  );
}