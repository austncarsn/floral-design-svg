// Y-shaped branch with rounded leaves (perfectly symmetrical)
interface StemFifteenProps {
  size?: number;
  className?: string;
}

export default function StemFifteen({ 
  size = 200, 
  className = "" 
}: StemFifteenProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem base */}
        <rect x="97" y="100" width="6" height="80" fill={stemColor} rx="3" />
        
        {/* Left Y branch - perfectly angled */}
        <path d="M 100 100 Q 80 70 60 40" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Right Y branch - mirror symmetry */}
        <path d="M 100 100 Q 120 70 140 40" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Leaves on left branch - perfectly spaced */}
        <circle cx="70" cy="60" r="14" fill={leafColor} />
        <circle cx="80" cy="75" r="12" fill={leafColor} />
        <circle cx="60" cy="45" r="16" fill={leafColor} />
        
        {/* Leaves on right branch - mirror symmetry */}
        <circle cx="130" cy="60" r="14" fill={leafColor} />
        <circle cx="120" cy="75" r="12" fill={leafColor} />
        <circle cx="140" cy="45" r="16" fill={leafColor} />
        
        {/* Base leaves - perfectly symmetrical */}
        <circle cx="85" cy="130" r="15" fill={leafColor} />
        <circle cx="115" cy="130" r="15" fill={leafColor} />
      </svg>
    </div>
  );
}
