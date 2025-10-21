// Branching stem with multiple buds (perfectly symmetrical and centered)
interface StemFourProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
  budColor?: string;
}

export default function StemFour({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88",
  budColor = "#E64A2E"
}: StemFourProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - perfectly centered */}
        <rect x="97" y="45" width="6" height="110" fill={stemColor} rx="1" />
        
        {/* Left branch - perfectly symmetrical */}
        <path d="M 100 75 Q 85 85 75 105" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        {/* Right branch - perfectly symmetrical */}
        <path d="M 100 75 Q 115 85 125 105" stroke={stemColor} strokeWidth="4" fill="none" strokeLinecap="round" />
        
        {/* Top bud - centered */}
        <circle cx="100" cy="45" r="10" fill={budColor} />
        
        {/* Left bud */}
        <circle cx="75" cy="105" r="8" fill={budColor} />
        
        {/* Right bud */}
        <circle cx="125" cy="105" r="8" fill={budColor} />
        
        {/* Bottom leaves - perfectly symmetrical */}
        <ellipse cx="78" cy="145" rx="26" ry="18" fill={leafColor} transform="rotate(-25 78 145)" />
        <ellipse cx="122" cy="145" rx="26" ry="18" fill={leafColor} transform="rotate(25 122 145)" />
      </svg>
    </div>
  );
}
