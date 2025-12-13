// Sophisticated terracotta and mint hexagon with elegant contrast
interface FloralTwentyThreeProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyThree({ 
  size = 200,
  className = ""
}: FloralTwentyThreeProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  const colors = ["#C97A64", "#9DB5A0"];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main alternating petals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 33;
          const cy = centerY + Math.sin(rad) * 33;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="24"
              ry="22"
              fill={colors[i % 2]}
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Inner highlights - subtle */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 33;
          const cy = centerY + Math.sin(rad) * 33;
          const lightColors = ["#E8A594", "#C4D9CE"];
          return (
            <circle
              key={`inner-${i}`}
              cx={cx}
              cy={cy}
              r="10"
              fill={lightColors[i % 2]}
              opacity="0.6"
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="20" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="10" fill="#C97A64" />
        <circle cx="100" cy="100" r="4" fill="#9DB5A0" />
      </svg>
    </div>
  );
}