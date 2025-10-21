// Triple branch stem with pointed leaves (perfectly symmetrical)
interface StemThirteenProps {
  size?: number;
  className?: string;
}

export default function StemThirteen({ 
  size = 200, 
  className = "" 
}: StemThirteenProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main vertical stem */}
        <rect x="97" y="20" width="6" height="160" fill={stemColor} rx="3" />
        
        {/* Left branch - curved */}
        <path d="M 100 80 Q 80 90 65 105" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Right branch - curved (symmetrical) */}
        <path d="M 100 80 Q 120 90 135 105" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Pointed leaves on left branch (symmetrical pairs) */}
        <path d="M 65 105 L 52 98 L 58 115 Z" fill={leafColor} />
        <path d="M 75 95 L 64 90 L 69 105 Z" fill={leafColor} />
        
        {/* Pointed leaves on right branch (mirror symmetry) */}
        <path d="M 135 105 L 148 98 L 142 115 Z" fill={leafColor} />
        <path d="M 125 95 L 136 90 L 131 105 Z" fill={leafColor} />
        
        {/* Pointed leaves on main stem (perfectly symmetrical) */}
        <path d="M 100 120 L 85 115 L 92 130 Z" fill={leafColor} />
        <path d="M 100 120 L 115 115 L 108 130 Z" fill={leafColor} />
        <path d="M 100 150 L 85 145 L 92 160 Z" fill={leafColor} />
        <path d="M 100 150 L 115 145 L 108 160 Z" fill={leafColor} />
      </svg>
    </div>
  );
}
