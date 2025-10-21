// Multi-colored abstract bloom - all colors (perfectly symmetrical)
interface FloralTwelveProps {
  size?: number;
  className?: string;
}

export default function FloralTwelve({ 
  size = 200,
  className = ""
}: FloralTwelveProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 40;
  const colors = ["#E64A2E", "#4A7C8C", "#F5EFE0"];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 circles in alternating colors at 60-degree intervals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="26" fill={colors[i % 3]} />
          );
        })}
        
        {/* Center circle */}
        <circle cx="100" cy="100" r="30" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="15" fill="#E8663F" />
      </svg>
    </div>
  );
}
