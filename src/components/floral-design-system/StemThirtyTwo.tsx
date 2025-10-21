// Birch branch with catkins (perfectly symmetrical)
interface StemThirtyTwoProps {
  size?: number;
  className?: string;
}

export default function StemThirtyTwo({ 
  size = 200, 
  className = "" 
}: StemThirtyTwoProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  const catkinColor = "#D4A62A";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main branch - graceful curve */}
        <path d="M 80 180 L 90 140 L 98 100 L 102 60 L 108 30" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Side branches - symmetrical pairs */}
        <path d="M 98 100 L 72 95" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 102 100 L 128 95" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        <path d="M 90 140 L 65 138" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 92 140 L 117 138" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        <path d="M 102 60 L 78 58" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 104 60 L 128 58" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        {/* Hanging catkins - elongated ovals, perfectly positioned */}
        <ellipse cx="72" cy="105" rx="5" ry="20" fill={catkinColor} />
        <ellipse cx="128" cy="105" rx="5" ry="20" fill={catkinColor} />
        <ellipse cx="65" cy="148" rx="5" ry="20" fill={catkinColor} />
        <ellipse cx="117" cy="148" rx="5" ry="20" fill={catkinColor} />
        <ellipse cx="78" cy="68" rx="5" ry="20" fill={catkinColor} />
        <ellipse cx="128" cy="68" rx="5" ry="20" fill={catkinColor} />
        
        {/* Small serrated leaves - symmetrical pairs */}
        <path d="M 85 85 L 76 82 L 78 90 L 73 88 L 80 96 Z" fill={leafColor} />
        <path d="M 110 85 L 119 82 L 117 90 L 122 88 L 115 96 Z" fill={leafColor} />
        
        <path d="M 92 125 L 83 122 L 85 130 L 80 128 L 87 136 Z" fill={leafColor} />
        <path d="M 98 125 L 107 122 L 105 130 L 110 128 L 103 136 Z" fill={leafColor} />
        
        <path d="M 106 45 L 97 42 L 99 50 L 94 48 L 101 56 Z" fill={leafColor} />
        <path d="M 110 45 L 119 42 L 117 50 L 122 48 L 115 56 Z" fill={leafColor} />
      </svg>
    </div>
  );
}
