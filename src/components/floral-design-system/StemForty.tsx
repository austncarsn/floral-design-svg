// Tropical bird of paradise leaves (perfectly symmetrical)
interface StemFortyProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor1?: string;
  leafColor2?: string;
}

export default function StemForty({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor1 = "#9DB5A0",
  leafColor2 = "#B4C9BC"
}: StemFortyProps) {
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradients for tropical leaves */}
          <radialGradient id="leafGrad40a" cx="50%" cy="40%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.85" />
            <stop offset="50%" stopColor={leafColor1} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor1} stopOpacity="0.9" />
          </radialGradient>
          <radialGradient id="leafGrad40b" cx="50%" cy="40%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor={leafColor2} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor2} stopOpacity="0.9" />
          </radialGradient>
        </defs>
        
        {/* Main stem from base - refined */}
        <rect x="96.5" y="140" width="7" height="43" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="140" width="2" height="43" fill={stemColor} opacity="0.6" />
        
        {/* Left leaf stem - refined */}
        <rect x="53" y="88" width="6" height="72" fill={stemColor} rx="3" transform="rotate(-26 56 88)" />
        <rect x="54" y="88" width="2" height="72" fill={stemColor} opacity="0.5" transform="rotate(-26 56 88)" />
        
        {/* Right leaf stem - refined */}
        <rect x="141" y="88" width="6" height="72" fill={stemColor} rx="3" transform="rotate(26 144 88)" />
        <rect x="142" y="88" width="2" height="72" fill={stemColor} opacity="0.5" transform="rotate(26 144 88)" />
        
        {/* Center leaf stem - refined */}
        <rect x="96.5" y="50" width="7" height="93" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="50" width="2" height="93" fill={stemColor} opacity="0.6" />
        
        {/* Center leaf - tallest with gradient */}
        <ellipse cx="100" cy="43" rx="36" ry="57" fill="url(#leafGrad40a)" />
        <ellipse cx="100" cy="43" rx="36" ry="57" fill="none" stroke={leafColor1} strokeWidth="1" opacity="0.2" />
        
        {/* Left leaf - with gradient */}
        <ellipse cx="43" cy="68" rx="33" ry="52" fill="url(#leafGrad40b)" transform="rotate(-21 43 68)" />
        <ellipse cx="43" cy="68" rx="33" ry="52" fill="none" stroke={leafColor2} strokeWidth="1" opacity="0.2" transform="rotate(-21 43 68)" />
        
        {/* Right leaf - with gradient */}
        <ellipse cx="157" cy="68" rx="33" ry="52" fill="url(#leafGrad40b)" transform="rotate(21 157 68)" />
        <ellipse cx="157" cy="68" rx="33" ry="52" fill="none" stroke={leafColor2} strokeWidth="1" opacity="0.2" transform="rotate(21 157 68)" />
        
        {/* Mid-left leaf - with gradient */}
        <ellipse cx="68" cy="93" rx="29" ry="47" fill="url(#leafGrad40a)" transform="rotate(-16 68 93)" />
        <ellipse cx="68" cy="93" rx="29" ry="47" fill="none" stroke={leafColor1} strokeWidth="1" opacity="0.2" transform="rotate(-16 68 93)" />
        
        {/* Mid-right leaf - with gradient */}
        <ellipse cx="132" cy="93" rx="29" ry="47" fill="url(#leafGrad40a)" transform="rotate(16 132 93)" />
        <ellipse cx="132" cy="93" rx="29" ry="47" fill="none" stroke={leafColor1} strokeWidth="1" opacity="0.2" transform="rotate(16 132 93)" />
        
        {/* Leaf veins for detail - refined */}
        <line x1="100" y1="23" x2="100" y2="63" stroke={stemColor} strokeWidth="2.5" opacity="0.35" />
        <line x1="100" y1="23" x2="100" y2="63" stroke={stemColor} strokeWidth="1" opacity="0.2" />
        
        <line x1="43" y1="48" x2="43" y2="88" stroke={stemColor} strokeWidth="2.5" opacity="0.35" transform="rotate(-21 43 68)" />
        <line x1="157" y1="48" x2="157" y2="88" stroke={stemColor} strokeWidth="2.5" opacity="0.35" transform="rotate(21 157 68)" />
      </svg>
    </div>
  );
}