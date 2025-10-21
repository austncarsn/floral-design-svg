// Heart-shaped leaves on stem (perfectly symmetrical)
interface StemSeventeenProps {
  size?: number;
  className?: string;
}

export default function StemSeventeen({ 
  size = 200, 
  className = "" 
}: StemSeventeenProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="30" width="6" height="150" fill={stemColor} rx="3" />
        
        {/* Heart-shaped leaves - perfectly symmetrical pairs */}
        {/* Top pair */}
        <path d="M 70 60 Q 65 50 70 45 Q 75 42 78 45 Q 80 42 85 45 Q 90 50 85 60 Q 78 68 70 60 Z" fill={leafColor} />
        <path d="M 130 60 Q 135 50 130 45 Q 125 42 122 45 Q 120 42 115 45 Q 110 50 115 60 Q 122 68 130 60 Z" fill={leafColor} />
        
        {/* Middle pair */}
        <path d="M 65 100 Q 60 90 65 85 Q 70 82 73 85 Q 75 82 80 85 Q 85 90 80 100 Q 73 108 65 100 Z" fill={leafColor} />
        <path d="M 135 100 Q 140 90 135 85 Q 130 82 127 85 Q 125 82 120 85 Q 115 90 120 100 Q 127 108 135 100 Z" fill={leafColor} />
        
        {/* Bottom pair */}
        <path d="M 68 140 Q 63 130 68 125 Q 73 122 76 125 Q 78 122 83 125 Q 88 130 83 140 Q 76 148 68 140 Z" fill={leafColor} />
        <path d="M 132 140 Q 137 130 132 125 Q 127 122 124 125 Q 122 122 117 125 Q 112 130 117 140 Q 124 148 132 140 Z" fill={leafColor} />
      </svg>
    </div>
  );
}
