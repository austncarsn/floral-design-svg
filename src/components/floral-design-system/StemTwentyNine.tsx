// Monstera leaf on stem (perfectly symmetrical)
interface StemTwentyNineProps {
  size?: number;
  className?: string;
}

export default function StemTwentyNine({ 
  size = 200, 
  className = "" 
}: StemTwentyNineProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <rect x="97" y="110" width="6" height="70" fill={stemColor} rx="3" />
        
        {/* Monstera leaf with characteristic holes and splits - perfectly symmetrical */}
        <path d="M 100 110 Q 65 100 45 75 Q 42 58 48 45 Q 58 35 72 40 Q 82 50 88 65 Q 95 85 100 110 Z" fill={leafColor} />
        <path d="M 100 110 Q 135 100 155 75 Q 158 58 152 45 Q 142 35 128 40 Q 118 50 112 65 Q 105 85 100 110 Z" fill={leafColor} />
        
        {/* Characteristic holes in monstera leaf - symmetrical */}
        <ellipse cx="70" cy="65" rx="9" ry="14" fill="white" />
        <ellipse cx="88" cy="75" rx="8" ry="12" fill="white" />
        <ellipse cx="112" cy="75" rx="8" ry="12" fill="white" />
        <ellipse cx="130" cy="65" rx="9" ry="14" fill="white" />
        
        {/* Deep splits at edges - symmetrical */}
        <path d="M 60 58 L 66 65" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <path d="M 52 72 L 60 76" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <path d="M 140 58 L 134 65" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <path d="M 148 72 L 140 76" stroke="white" strokeWidth="5" strokeLinecap="round" />
        
        {/* Central vein */}
        <line x1="100" y1="110" x2="100" y2="45" stroke={stemColor} strokeWidth="3.5" />
      </svg>
    </div>
  );
}
