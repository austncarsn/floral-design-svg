// Soft coral star flower with charcoal center (perfectly symmetrical)
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
  const outerRadius = 38;
  const innerRadius = 22;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 5 outer petals at 72-degree intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * outerRadius;
          const cy = centerY + Math.sin(rad) * outerRadius;
          return (
            <circle key={`outer-${i}`} cx={cx} cy={cy} r="24" fill="#F08080" />
          );
        })}
        
        {/* 5 inner accent circles between petals */}
        {[36, 108, 180, 252, 324].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * innerRadius;
          const cy = centerY + Math.sin(rad) * innerRadius;
          return (
            <circle key={`inner-${i}`} cx={cx} cy={cy} r="12" fill="#E8DCC8" />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="20" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
