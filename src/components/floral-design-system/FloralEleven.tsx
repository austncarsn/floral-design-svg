// Cream star-burst flower with black center (perfectly symmetrical)
interface FloralElevenProps {
  size?: number;
  className?: string;
}

export default function FloralEleven({ 
  size = 200,
  className = ""
}: FloralElevenProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 48;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 12 thin radiating petals at 30-degree intervals */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="12"
              ry="30"
              fill="#F5EFE0"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Large center */}
        <circle cx="100" cy="100" r="28" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
