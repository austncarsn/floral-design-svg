// Black and coral layered flower - 5 petals (perfectly symmetrical)
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
  const radius = 42;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 5 outer petals evenly spaced at 72-degree intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="28" fill="#1A1A1A" />
          );
        })}
        
        {/* Inner layer */}
        <circle cx="100" cy="100" r="35" fill="#D4866F" />
        
        {/* Center */}
        <circle cx="100" cy="100" r="18" fill="#E8DCC8" />
      </svg>
    </div>
  );
}