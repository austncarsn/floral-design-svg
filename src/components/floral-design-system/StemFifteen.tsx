// Y-shaped branch with rounded leaves (perfectly symmetrical)
interface StemFifteenProps {
  size?: number;
  className?: string;
}

export default function StemFifteen({ 
  size = 200, 
  className = "" 
}: StemFifteenProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradient for leaf depth */}
          <radialGradient id="leafGrad15" cx="35%" cy="35%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Main stem base - refined */}
        <rect x="96.5" y="100" width="7" height="83" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="100" width="2" height="83" fill={stemColor} opacity="0.6" />
        
        {/* Left Y branch - graceful curve with shadow */}
        <path d="M 100 100 Q 78 68 58 38" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 100 100 Q 78 68 58 38" stroke={stemColor} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Right Y branch - mirror symmetry with shadow */}
        <path d="M 100 100 Q 122 68 142 38" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 100 100 Q 122 68 142 38" stroke={stemColor} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Leaves on left branch - refined with highlights */}
        <circle cx="68" cy="58" r="15" fill="url(#leafGrad15)" />
        <circle cx="71" cy="56" r="5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="78" cy="74" r="13" fill="url(#leafGrad15)" />
        <circle cx="80" cy="72" r="4.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="58" cy="42" r="17" fill="url(#leafGrad15)" />
        <circle cx="61" cy="40" r="6" fill={highlightColor} opacity="0.7" />
        
        {/* Leaves on right branch - mirror highlights */}
        <circle cx="132" cy="58" r="15" fill="url(#leafGrad15)" />
        <circle cx="129" cy="56" r="5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="122" cy="74" r="13" fill="url(#leafGrad15)" />
        <circle cx="120" cy="72" r="4.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="142" cy="42" r="17" fill="url(#leafGrad15)" />
        <circle cx="139" cy="40" r="6" fill={highlightColor} opacity="0.7" />
        
        {/* Base leaves - perfectly symmetrical with highlights */}
        <circle cx="84" cy="132" r="16" fill="url(#leafGrad15)" />
        <circle cx="87" cy="130" r="5.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="116" cy="132" r="16" fill="url(#leafGrad15)" />
        <circle cx="113" cy="130" r="5.5" fill={highlightColor} opacity="0.7" />
      </svg>
    </div>
  );
}