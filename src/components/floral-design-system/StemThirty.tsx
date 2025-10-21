// Oak leaf on stem (perfectly symmetrical)
interface StemThirtyProps {
  size?: number;
  className?: string;
}

export default function StemThirty({ 
  size = 200, 
  className = "" 
}: StemThirtyProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <rect x="97" y="120" width="6" height="60" fill={stemColor} rx="3" />
        
        {/* Oak leaf with characteristic lobed edges - perfectly symmetrical */}
        <path d="M 100 120 
                 Q 94 112 90 100 
                 L 94 95 
                 Q 90 82 86 75 
                 L 92 70 
                 Q 90 58 88 50 
                 L 94 45 
                 Q 96 35 100 28
                 Q 104 35 106 45
                 L 112 50
                 Q 110 58 108 70
                 L 114 75
                 Q 110 82 106 95
                 L 110 100
                 Q 106 112 100 120 Z" 
              fill={leafColor} />
        
        {/* Central vein */}
        <line x1="100" y1="120" x2="100" y2="32" stroke={stemColor} strokeWidth="2.5" />
        
        {/* Side veins - symmetrical pairs */}
        <line x1="100" y1="100" x2="92" y2="96" stroke={stemColor} strokeWidth="2" />
        <line x1="100" y1="100" x2="108" y2="96" stroke={stemColor} strokeWidth="2" />
        
        <line x1="100" y1="75" x2="90" y2="70" stroke={stemColor} strokeWidth="2" />
        <line x1="100" y1="75" x2="110" y2="70" stroke={stemColor} strokeWidth="2" />
        
        <line x1="100" y1="50" x2="92" y2="46" stroke={stemColor} strokeWidth="2" />
        <line x1="100" y1="50" x2="108" y2="46" stroke={stemColor} strokeWidth="2" />
      </svg>
    </div>
  );
}
