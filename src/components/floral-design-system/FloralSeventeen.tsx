// Soft coral and burnt orange abstract bloom (perfectly symmetrical)
interface FloralSeventeenProps {
  size?: number;
  className?: string;
}

export default function FloralSeventeen({ 
  size = 200,
  className = ""
}: FloralSeventeenProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 32;
  const colors = ["#F08080", "#D47647"];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 overlapping circles at 60-degree intervals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="28" fill={colors[i % 2]} />
          );
        })}
        
        {/* Center accent */}
        <circle cx="100" cy="100" r="18" fill="#FAF7F2" />
      </svg>
    </div>
  );
}
