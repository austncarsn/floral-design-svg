// Coral and black alternating petals - 10 petals (perfectly symmetrical)
interface FloralFiveProps {
  size?: number;
  className?: string;
}

export default function FloralFive({ 
  size = 200,
  className = ""
}: FloralFiveProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 44;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 10 alternating colored petals at 36-degree intervals */}
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="16"
              ry="28"
              fill={i % 2 === 0 ? "#E64A2E" : "#1A1A1A"}
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="20" fill="#F5EFE0" />
      </svg>
    </div>
  );
}
