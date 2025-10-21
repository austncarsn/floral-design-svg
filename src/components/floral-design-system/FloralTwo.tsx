// Teal blue flower with cream center - 8 petals (perfectly symmetrical)
interface FloralTwoProps {
  size?: number;
  className?: string;
}

export default function FloralTwo({ 
  size = 200,
  className = ""
}: FloralTwoProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 45;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 8 radiating ellipse petals at 45-degree intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="18"
              ry="35"
              fill="#4A7C8C"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="22" fill="#F5EFE0" />
      </svg>
    </div>
  );
}
