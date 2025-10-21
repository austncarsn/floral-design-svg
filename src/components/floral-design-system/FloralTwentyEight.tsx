// Mint green and soft coral simple 5-petal (perfectly symmetrical)
interface FloralTwentyEightProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyEight({ 
  size = 200,
  className = ""
}: FloralTwentyEightProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 35;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 5 mint green petals at 72-degree intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="26" fill="#A8C9B8" />
          );
        })}
        
        {/* Center with two layers */}
        <circle cx="100" cy="100" r="24" fill="#F08080" />
        <circle cx="100" cy="100" r="12" fill="#FAF7F2" />
      </svg>
    </div>
  );
}
