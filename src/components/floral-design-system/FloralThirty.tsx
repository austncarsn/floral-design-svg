// Terracotta and lavender layered circles (perfectly symmetrical)
interface FloralThirtyProps {
  size?: number;
  className?: string;
}

export default function FloralThirty({ 
  size = 200,
  className = ""
}: FloralThirtyProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 30;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large outer circle */}
        <circle cx="100" cy="100" r="50" fill="#C9604A" />
        
        {/* Middle circle */}
        <circle cx="100" cy="100" r="36" fill="#B8A9C9" />
        
        {/* 8 small circles around middle at 45-degree intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="10" fill="#F5EFE0" />
          );
        })}
        
        {/* Center */}
        <circle cx="100" cy="100" r="16" fill="#C9604A" />
      </svg>
    </div>
  );
}
