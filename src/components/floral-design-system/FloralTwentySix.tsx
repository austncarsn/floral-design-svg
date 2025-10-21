// Mustard and deep teal pinwheel (perfectly symmetrical)
interface FloralTwentySixProps {
  size?: number;
  className?: string;
}

export default function FloralTwentySix({ 
  size = 200,
  className = ""
}: FloralTwentySixProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 38;
  const colors = ["#D4A62A", "#2F5B6B"];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 8 alternating pinwheel petals at 45-degree intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="20"
              ry="34"
              fill={colors[i % 2]}
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="18" fill="#F5EFE0" />
      </svg>
    </div>
  );
}
