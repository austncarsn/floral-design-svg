// Lavender double ring flower (perfectly symmetrical)
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
  const outerRadius = 45;
  const innerRadius = 28;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring - 8 small circles at 45-degree intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * outerRadius;
          const cy = centerY + Math.sin(rad) * outerRadius;
          return (
            <circle key={`outer-${i}`} cx={cx} cy={cy} r="14" fill="#B8A9C9" />
          );
        })}
        
        {/* Inner ring - 4 larger circles at 90-degree intervals */}
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * innerRadius;
          const cy = centerY + Math.sin(rad) * innerRadius;
          return (
            <circle key={`inner-${i}`} cx={cx} cy={cy} r="18" fill="#E8DCC8" />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="14" fill="#B8A9C9" />
      </svg>
    </div>
  );
}
