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
          const cx = centerX + Math.cos(rad) * 42;
          const cy = centerY + Math.sin(rad) * 42;
          
          // Refined warm palette
          const colors = ["#D4866F", "#C97A64", "#D4A855"];
          
          return (
            <ellipse 
              key={i} 
              cx={cx} 
              cy={cy} 
              rx="16" 
              ry="25"
              fill={colors[i % 3]}
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        
        {/* Layered center */}
        <circle cx={centerX} cy={centerY} r="20" fill="#E8DCC8" />
        <circle cx={centerX} cy={centerY} r="11" fill="#1A1A1A" />
        <circle cx={centerX} cy={centerY} r="4" fill="#D4A855" />
      </svg>
    </div>
  );
}