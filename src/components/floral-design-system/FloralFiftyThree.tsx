// Geometric starburst with alternating triangular petals (perfectly symmetrical)
interface FloralFiftyThreeProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyThree({ 
  size = 200,
  className = ""
}: FloralFiftyThreeProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 8 triangular petals evenly spaced at 45-degree intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = centerX + Math.cos(rad) * 54;
          const y1 = centerY + Math.sin(rad) * 54;
          const x2 = centerX + Math.cos(rad + 0.4) * 32;
          const y2 = centerY + Math.sin(rad + 0.4) * 32;
          const x3 = centerX + Math.cos(rad - 0.4) * 32;
          const y3 = centerY + Math.sin(rad - 0.4) * 32;
          
          return (
            <path 
              key={i} 
              d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`}
              fill={i % 2 === 0 ? "#D4A855" : "#5A8A8A"}
            />
          );
        })}
        
        {/* Center circles */}
        <circle cx={centerX} cy={centerY} r="26" fill="#E8DCC8" />
        <circle cx={centerX} cy={centerY} r="13" fill="#C97A64" />
        <circle cx={centerX} cy={centerY} r="5" fill="#1A1A1A" />
      </svg>
    </div>
  );
}