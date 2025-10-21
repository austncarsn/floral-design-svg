// Mustard gold sunburst with olive center (perfectly symmetrical)
interface FloralFourteenProps {
  size?: number;
  className?: string;
}

export default function FloralFourteen({ 
  size = 200,
  className = ""
}: FloralFourteenProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 45;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 16 radiating thin petals at 22.5-degree intervals */}
        {Array.from({ length: 16 }, (_, i) => i * 22.5).map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="10"
              ry="28"
              fill="#D4A62A"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="25" fill="#7A8450" />
      </svg>
    </div>
  );
}
