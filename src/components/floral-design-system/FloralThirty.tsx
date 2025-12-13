// Sophisticated concentric mandala with terracotta and lavender depth
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
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large outer terracotta circle */}
        <circle cx="100" cy="100" r="48" fill="#C97A64" />
        
        {/* Outer ring highlight */}
        <circle cx="100" cy="100" r="42" fill="#E8A594" opacity="0.6" />
        
        {/* Middle lavender circle */}
        <circle cx="100" cy="100" r="37" fill="#C4ADB8" />
        
        {/* Middle ring highlight */}
        <circle cx="100" cy="100" r="33" fill="#D4C4E0" opacity="0.6" />
        
        {/* 8 cream accent circles - 45° intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 30;
          const cy = centerY + Math.sin(rad) * 30;
          return (
            <circle 
              key={i}
              cx={cx} 
              cy={cy} 
              r="10" 
              fill="#E8DCC8" 
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="17" fill="#C97A64" />
        <circle cx="100" cy="100" r="10" fill="#E8A594" />
        <circle cx="100" cy="100" r="4" fill="#E8DCC8" />
      </svg>
    </div>
  );
}