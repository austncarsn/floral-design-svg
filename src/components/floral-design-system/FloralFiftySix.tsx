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
        {/* Outer ring of 8 circles - refined teal */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 46;
          const cy = centerY + Math.sin(rad) * 46;
          
          return (
            <circle key={`outer-${i}`} cx={cx} cy={cy} r="16" fill="#5A8A8A" />
          );
        })}
        
        {/* Middle ring of 8 circles - refined sage */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 30;
          const cy = centerY + Math.sin(rad) * 30;
          
          return (
            <circle key={`middle-${i}`} cx={cx} cy={cy} r="12" fill="#9DB5A0" />
          );
        })}
        
        {/* Center circles */}
        <circle cx={centerX} cy={centerY} r="22" fill="#E8DCC8" />
        <circle cx={centerX} cy={centerY} r="11" fill="#1A1A1A" />
        <circle cx={centerX} cy={centerY} r="4" fill="#5A8A8A" />
      </svg>
    </div>
  );
}