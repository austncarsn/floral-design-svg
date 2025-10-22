// Cascading ivy with trailing vines (perfectly symmetrical)
interface StemThirtySevenProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThirtySeven({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemThirtySevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main curved stem */}
        <path 
          d="M 100 20 Q 90 60, 100 100 Q 110 140, 100 180" 
          stroke={stemColor} 
          strokeWidth="5" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Heart-shaped ivy leaves cascading down - alternating sides */}
        {/* Left side leaves */}
        <path d="M 75 45 Q 65 40, 70 35 Q 75 30, 75 35 Q 75 30, 80 35 Q 85 40, 75 45 Z" fill={leafColor} />
        <path d="M 85 85 Q 75 80, 80 75 Q 85 70, 85 75 Q 85 70, 90 75 Q 95 80, 85 85 Z" fill={leafColor} />
        <path d="M 75 125 Q 65 120, 70 115 Q 75 110, 75 115 Q 75 110, 80 115 Q 85 120, 75 125 Z" fill={leafColor} />
        <path d="M 85 165 Q 75 160, 80 155 Q 85 150, 85 155 Q 85 150, 90 155 Q 95 160, 85 165 Z" fill={leafColor} />
        
        {/* Right side leaves */}
        <path d="M 125 65 Q 115 60, 120 55 Q 125 50, 125 55 Q 125 50, 130 55 Q 135 60, 125 65 Z" fill={leafColor} />
        <path d="M 115 105 Q 105 100, 110 95 Q 115 90, 115 95 Q 115 90, 120 95 Q 125 100, 115 105 Z" fill={leafColor} />
        <path d="M 125 145 Q 115 140, 120 135 Q 125 130, 125 135 Q 125 130, 130 135 Q 135 140, 125 145 Z" fill={leafColor} />
      </svg>
    </div>
  );
}
