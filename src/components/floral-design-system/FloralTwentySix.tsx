// Sophisticated octagon pinwheel with mustard and teal elegance
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
  const colors = ["#D4A855", "#5A8A8A"];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main alternating pinwheel petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 35;
          const cy = centerY + Math.sin(rad) * 35;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="18"
              ry="32"
              fill={colors[i % 2]}
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Inner highlights - subtle */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 35;
          const cy = centerY + Math.sin(rad) * 35;
          const lightColors = ["#D9B56C", "#6B8A9B"];
          return (
            <ellipse
              key={`inner-${i}`}
              cx={cx}
              cy={cy}
              rx="10"
              ry="18"
              fill={lightColors[i % 2]}
              opacity="0.6"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="20" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="11" fill="#D4A855" />
        <circle cx="100" cy="100" r="5" fill="#5A8A8A" />
      </svg>
    </div>
  );
}