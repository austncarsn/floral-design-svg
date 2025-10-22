// Radiating gradient petals in warm tones (perfectly symmetrical)
interface FloralFiftyFiveProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyFive({ 
  size = 200,
  className = ""
}: FloralFiftyFiveProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 12 petals evenly spaced at 30-degree intervals */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 48;
          const cy = centerY + Math.sin(rad) * 48;
          
          // Alternate between three warm colors
          const colors = ["#F08080", "#D47647", "#F2A818"];
          
          return (
            <ellipse 
              key={i} 
              cx={cx} 
              cy={cy} 
              rx="18" 
              ry="28"
              fill={colors[i % 3]}
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Center */}
        <circle cx={centerX} cy={centerY} r="22" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
