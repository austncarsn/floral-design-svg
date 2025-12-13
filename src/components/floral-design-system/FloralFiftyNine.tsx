// Interlocking circles creating flower-of-life pattern (perfectly symmetrical)
interface FloralFiftyNineProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyNine({ 
  size = 200,
  className = ""
}: FloralFiftyNineProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 27;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center circle - refined sage */}
        <circle cx={centerX} cy={centerY} r={radius} fill="#8A9B7A" />
        
        {/* 6 overlapping circles at 60-degree intervals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          
          return (
            <circle 
              key={i} 
              cx={cx} 
              cy={cy} 
              r={radius} 
              fill={i % 2 === 0 ? "#9DB5A0" : "#8A9B7A"}
              opacity="0.85"
            />
          );
        })}
        
        {/* Center overlay for definition */}
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#5A8A8A" strokeWidth="2" />
        <circle cx={centerX} cy={centerY} r="15" fill="#D4A855" />
        <circle cx={centerX} cy={centerY} r="5" fill="#1A1A1A" />
      </svg>
    </div>
  );
}