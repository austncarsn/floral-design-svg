// Lotus leaf on stem (perfectly symmetrical)
interface StemTwentySixProps {
  size?: number;
  className?: string;
}

export default function StemTwentySix({ 
  size = 200, 
  className = "" 
}: StemTwentySixProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <rect x="97" y="100" width="6" height="80" fill={stemColor} rx="3" />
        
        {/* Large circular lotus leaf */}
        <circle cx="100" cy="70" r="58" fill={leafColor} />
        
        {/* Radial veins on leaf - perfect 45° spacing */}
        <line x1="100" y1="70" x2="100" y2="12" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="141" y2="29" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="158" y2="70" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="141" y2="111" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="100" y2="128" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="59" y2="111" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="42" y2="70" stroke={stemColor} strokeWidth="2.5" />
        <line x1="100" y1="70" x2="59" y2="29" stroke={stemColor} strokeWidth="2.5" />
        
        {/* Center point where stem connects */}
        <circle cx="100" cy="70" r="10" fill={stemColor} />
        
        {/* Small notch at top of leaf */}
        <path d="M 100 12 L 96 18 L 100 16 L 104 18 Z" fill="white" />
      </svg>
    </div>
  );
}
