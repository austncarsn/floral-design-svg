// Sophisticated teal sunburst with layered depth - 8 petal elegance
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
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer layer - 8 elongated petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 45;
          const cy = centerY + Math.sin(rad) * 45;
          return (
            <ellipse
              key={`outer-${i}`}
              cx={cx}
              cy={cy}
              rx="15"
              ry="38"
              fill="#5A8A8A"
              opacity="0.9"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Mid layer - offset petals for depth */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 32;
          const cy = centerY + Math.sin(rad) * 32;
          return (
            <ellipse
              key={`mid-${i}`}
              cx={cx}
              cy={cy}
              rx="11"
              ry="26"
              fill="#6B8A9B"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center base */}
        <circle cx="100" cy="100" r="26" fill="#E8DCC8" />
        
        {/* Center detail ring */}
        <circle cx="100" cy="100" r="15" fill="#C9B8A8" />
        
        {/* Center focal point */}
        <circle cx="100" cy="100" r="6" fill="#5A8A8A" />
      </svg>
    </div>
  );
}