// Sage green and mustard alternating petals (perfectly symmetrical)
interface FloralTwentyOneProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyOne({ 
  size = 200,
  className = ""
}: FloralTwentyOneProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 42;
  const colors = ["#9CAF88", "#D4A62A"];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 alternating petals at 60-degree intervals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="26" fill={colors[i % 2]} />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="20" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
