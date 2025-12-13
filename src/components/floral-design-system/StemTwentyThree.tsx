// Clover-style triple leaf stem (perfectly symmetrical)
interface StemTwentyThreeProps {
  size?: number;
  className?: string;
}

export default function StemTwentyThree({ 
  size = 200, 
  className = "" 
}: StemTwentyThreeProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradient for clover leaves */}
          <radialGradient id="cloverGrad23" cx="35%" cy="35%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="80" width="7" height="103" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="80" width="2" height="103" fill={stemColor} opacity="0.6" />
        
        {/* Three clover leaves at top - perfect 120° spacing with highlights */}
        {/* Left leaf */}
        <circle cx="68" cy="58" r="25" fill="url(#cloverGrad23)" />
        <circle cx="71" cy="55" r="8" fill={highlightColor} opacity="0.7" />
        <path d="M 68 58 L 83 73" stroke={stemColor} strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Top leaf */}
        <circle cx="100" cy="33" r="25" fill="url(#cloverGrad23)" />
        <circle cx="103" cy="30" r="8" fill={highlightColor} opacity="0.7" />
        <path d="M 100 33 L 100 68" stroke={stemColor} strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Right leaf */}
        <circle cx="132" cy="58" r="25" fill="url(#cloverGrad23)" />
        <circle cx="129" cy="55" r="8" fill={highlightColor} opacity="0.7" />
        <path d="M 132 58 L 117 73" stroke={stemColor} strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Center connection point with gradient */}
        <circle cx="100" cy="73" r="11" fill={stemColor} />
        <circle cx="100" cy="73" r="7" fill={stemColor} opacity="0.7" />
        
        {/* Small leaves on stem - symmetrical pairs with highlights */}
        <ellipse cx="80" cy="108" rx="13" ry="19" fill={leafColor} transform="rotate(-26 80 108)" />
        <ellipse cx="82" cy="103" rx="5" ry="9" fill={highlightColor} opacity="0.5" transform="rotate(-26 82 103)" />
        
        <ellipse cx="120" cy="108" rx="13" ry="19" fill={leafColor} transform="rotate(26 120 108)" />
        <ellipse cx="118" cy="103" rx="5" ry="9" fill={highlightColor} opacity="0.5" transform="rotate(26 118 103)" />
        
        <ellipse cx="76" cy="143" rx="14" ry="21" fill={leafColor} transform="rotate(-31 76 143)" />
        <ellipse cx="78" cy="138" rx="5.5" ry="10" fill={highlightColor} opacity="0.5" transform="rotate(-31 78 138)" />
        
        <ellipse cx="124" cy="143" rx="14" ry="21" fill={leafColor} transform="rotate(31 124 143)" />
        <ellipse cx="122" cy="138" rx="5.5" ry="10" fill={highlightColor} opacity="0.5" transform="rotate(31 122 138)" />
      </svg>
    </div>
  );
}