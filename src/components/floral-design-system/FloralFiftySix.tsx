// Mandala-style layered circles with cool tones (perfectly symmetrical)
interface FloralFiftySixProps {
  size?: number;
  className?: string;
}

export default function FloralFiftySix({ 
  size = 200,
  className = ""
}: FloralFiftySixProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring of 8 circles */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 50;
          const cy = centerY + Math.sin(rad) * 50;
          
          return (
            <circle key={`outer-${i}`} cx={cx} cy={cy} r="18" fill="#4A7C8C" />
          );
        })}
        
        {/* Middle ring of 8 circles */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 32;
          const cy = centerY + Math.sin(rad) * 32;
          
          return (
            <circle key={`middle-${i}`} cx={cx} cy={cy} r="14" fill="#A8C9B8" />
          );
        })}
        
        {/* Center circles */}
        <circle cx={centerX} cy={centerY} r="24" fill="#F5EFE0" />
        <circle cx={centerX} cy={centerY} r="12" fill="#2F5B6B" />
      </svg>
    </div>
  );
}
