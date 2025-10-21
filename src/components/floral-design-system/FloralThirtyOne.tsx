// Deep teal and golden yellow bold daisy (perfectly symmetrical)
interface FloralThirtyOneProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyOne({ 
  size = 200,
  className = ""
}: FloralThirtyOneProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 42;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 8 large petals at 45-degree intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="28" fill="#2F5B6B" />
          );
        })}
        
        {/* Center with two layers */}
        <circle cx="100" cy="100" r="32" fill="#F2A818" />
        <circle cx="100" cy="100" r="18" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
