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
  const radius = 30;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center circle */}
        <circle cx={centerX} cy={centerY} r={radius} fill="#9CAF88" />
        
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
              fill={i % 2 === 0 ? "#A8C9B8" : "#9CAF88"}
              opacity="0.8"
            />
          );
        })}
        
        {/* Center overlay circles for definition */}
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#7A8450" strokeWidth="2" />
        <circle cx={centerX} cy={centerY} r="16" fill="#F2A818" />
      </svg>
    </div>
  );
}
