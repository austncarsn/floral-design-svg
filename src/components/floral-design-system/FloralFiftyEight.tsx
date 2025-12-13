// Art deco fan pattern with radiating segments (perfectly symmetrical)
interface FloralFiftyEightProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyEight({ 
  size = 200,
  className = ""
}: FloralFiftyEightProps) {
  const centerX = 100;
  const centerY = 100;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 fan segments at 60-degree intervals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad1 = ((angle - 25) * Math.PI) / 180;
          const rad2 = ((angle + 25) * Math.PI) / 180;
          const radius = 58;
          
          const x1 = centerX + Math.cos(rad1) * radius;
          const y1 = centerY + Math.sin(rad1) * radius;
          const x2 = centerX + Math.cos(rad2) * radius;
          const y2 = centerY + Math.sin(rad2) * radius;
          
          // Create arc path
          const largeArcFlag = 0;
          const pathD = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
          
          // Refined alternating colors
          const colors = ["#C9A5AE", "#C4ADB8"];
          
          return (
            <path key={i} d={pathD} fill={colors[i % 2]} />
          );
        })}
        
        {/* Center circles */}
        <circle cx={centerX} cy={centerY} r="27" fill="#E8DCC8" />
        <circle cx={centerX} cy={centerY} r="11" fill="#C97A64" />
        <circle cx={centerX} cy={centerY} r="4" fill="#1A1A1A" />
      </svg>
    </div>
  );
}