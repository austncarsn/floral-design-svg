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
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0",
  budColor = "#C97A64"
}: StemFourProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - refined */}
        <rect x="96" y="48" width="8" height="110" fill={stemColor} rx="2" />
        
        {/* Left branch - refined symmetry */}
        <path d="M 100 78 Q 84 88 74 108" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Right branch - refined symmetry */}
        <path d="M 100 78 Q 116 88 126 108" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Top bud - refined with depth */}
        <circle cx="100" cy="48" r="11" fill={budColor} />
        <circle cx="100" cy="48" r="5" fill="#E8A594" opacity="0.6" />
        
        {/* Left bud */}
        <circle cx="74" cy="108" r="9" fill={budColor} />
        <circle cx="74" cy="108" r="4" fill="#E8A594" opacity="0.6" />
        
        {/* Right bud */}
        <circle cx="126" cy="108" r="9" fill={budColor} />
        <circle cx="126" cy="108" r="4" fill="#E8A594" opacity="0.6" />
        
        {/* Bottom leaves - refined with highlights */}
        <ellipse cx="76" cy="145" rx="25" ry="17" fill={leafColor} transform="rotate(-25 76 145)" />
        <ellipse cx="80" cy="145" rx="14" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(-25 80 145)" />
        
        <ellipse cx="124" cy="145" rx="25" ry="17" fill={leafColor} transform="rotate(25 124 145)" />
        <ellipse cx="120" cy="145" rx="14" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(25 120 145)" />
      </svg>
    </div>
  );
}