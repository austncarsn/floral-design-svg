// Terracotta and sage green layered petals (perfectly symmetrical)
interface FloralThirteenProps {
  size?: number;
  className?: string;
}

export default function FloralThirteen({ 
  size = 200,
  className = ""
}: FloralThirteenProps) {
  const centerX = 100;
  const centerY = 100;
  const outerRadius = 45;
  const innerRadius = 30;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer layer - 6 terracotta petals at 60-degree intervals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * outerRadius;
          const cy = centerY + Math.sin(rad) * outerRadius;
          return (
            <circle key={`outer-${i}`} cx={cx} cy={cy} r="24" fill="#C9604A" />
          );
        })}
        
        {/* Inner layer - 5 sage green petals at 72-degree intervals */}
        {[18, 90, 162, 234, 306].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * innerRadius;
          const cy = centerY + Math.sin(rad) * innerRadius;
          return (
            <circle key={`inner-${i}`} cx={cx} cy={cy} r="20" fill="#9CAF88" />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="15" fill="#F5EFE0" />
      </svg>
    </div>
  );
}
