// Spiral vine with rounded leaves (perfectly symmetrical)
interface StemTwentyTwoProps {
  size?: number;
  className?: string;
}

export default function StemTwentyTwo({ 
  size = 200, 
  className = "" 
}: StemTwentyTwoProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradient for leaves */}
          <radialGradient id="leafGrad22" cx="35%" cy="35%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Graceful spiral stem - refined S-curve */}
        <path d="M 100 178 Q 112 138 95 98 Q 78 58 100 22" stroke={stemColor} strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M 100 178 Q 112 138 95 98 Q 78 58 100 22" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Symmetrical rounded leaves with highlights */}
        <circle cx="107" cy="158" r="15" fill="url(#leafGrad22)" />
        <circle cx="110" cy="156" r="5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="86" cy="138" r="16" fill="url(#leafGrad22)" />
        <circle cx="89" cy="136" r="5.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="105" cy="118" r="17" fill="url(#leafGrad22)" />
        <circle cx="108" cy="116" r="6" fill={highlightColor} opacity="0.7" />
        
        <circle cx="83" cy="98" r="16" fill="url(#leafGrad22)" />
        <circle cx="86" cy="96" r="5.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="93" cy="78" r="15" fill="url(#leafGrad22)" />
        <circle cx="96" cy="76" r="5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="86" cy="58" r="14" fill="url(#leafGrad22)" />
        <circle cx="89" cy="56" r="4.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="98" cy="38" r="13" fill="url(#leafGrad22)" />
        <circle cx="101" cy="36" r="4" fill={highlightColor} opacity="0.7" />
        
        {/* Additional leaves on opposite side with highlights */}
        <circle cx="93" cy="148" r="14" fill="url(#leafGrad22)" />
        <circle cx="96" cy="146" r="4.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="114" cy="128" r="15" fill="url(#leafGrad22)" />
        <circle cx="111" cy="126" r="5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="91" cy="108" r="14" fill="url(#leafGrad22)" />
        <circle cx="94" cy="106" r="4.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="107" cy="88" r="13" fill="url(#leafGrad22)" />
        <circle cx="104" cy="86" r="4" fill={highlightColor} opacity="0.7" />
        
        <circle cx="104" cy="68" r="12" fill="url(#leafGrad22)" />
        <circle cx="101" cy="66" r="3.5" fill={highlightColor} opacity="0.7" />
      </svg>
    </div>
  );
}