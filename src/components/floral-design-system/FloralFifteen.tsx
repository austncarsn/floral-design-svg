// Lavender and dusty rose daisy (perfectly symmetrical)
interface FloralFifteenProps {
  size?: number;
  className?: string;
}

export default function FloralFifteen({ 
  size = 200,
  className = ""
}: FloralFifteenProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 40;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 8 ellipse petals at 45-degree intervals */}
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
              ry="32"
              fill="#B8A9C9"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="22" fill="#C9858D" />
      </svg>
    </div>
  );
}
