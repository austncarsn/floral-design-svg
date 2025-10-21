// Teal and cream double flower (perfectly symmetrical)
interface FloralSevenProps {
  size?: number;
  className?: string;
}

export default function FloralSeven({ 
  size = 200,
  className = ""
}: FloralSevenProps) {
  const centerX = 100;
  const centerY = 100;
  const outerRadius = 42;
  const innerRadius = 28;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer flower - 5 petals at 72-degree intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * outerRadius;
          const cy = centerY + Math.sin(rad) * outerRadius;
          return (
            <circle key={`outer-${i}`} cx={cx} cy={cy} r="26" fill="#4A7C8C" />
          );
        })}
        
        {/* Inner flower - 4 petals at 90-degree intervals */}
        {[45, 135, 225, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * innerRadius;
          const cy = centerY + Math.sin(rad) * innerRadius;
          return (
            <circle key={`inner-${i}`} cx={cx} cy={cy} r="20" fill="#F5EFE0" />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="12" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
