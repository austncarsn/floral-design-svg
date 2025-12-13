// Eucalyptus-style with circular leaves (perfectly symmetrical)
interface StemEighteenProps {
  size?: number;
  className?: string;
}

export default function StemEighteen({ 
  size = 200, 
  className = "" 
}: StemEighteenProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradient for eucalyptus leaves */}
          <radialGradient id="eucaGrad18" cx="35%" cy="35%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.85" />
          </radialGradient>
          {/* Stem gradient */}
          <linearGradient id="stemGrad18" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={stemColor} stopOpacity="0.85" />
            <stop offset="50%" stopColor={stemColor} stopOpacity="1" />
            <stop offset="100%" stopColor={stemColor} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="30" width="7" height="153" fill="url(#stemGrad18)" rx="3.5" />
        <rect x="97.5" y="30" width="2" height="153" fill={stemColor} opacity="0.6" />
        
        {/* Circular eucalyptus leaves - perfectly symmetrical pairs with highlights */}
        <circle cx="74" cy="48" r="19" fill="url(#eucaGrad18)" />
        <circle cx="77" cy="46" r="6" fill={highlightColor} opacity="0.7" />
        
        <circle cx="126" cy="48" r="19" fill="url(#eucaGrad18)" />
        <circle cx="123" cy="46" r="6" fill={highlightColor} opacity="0.7" />
        
        <circle cx="68" cy="83" r="21" fill="url(#eucaGrad18)" />
        <circle cx="71" cy="81" r="7" fill={highlightColor} opacity="0.7" />
        
        <circle cx="132" cy="83" r="21" fill="url(#eucaGrad18)" />
        <circle cx="129" cy="81" r="7" fill={highlightColor} opacity="0.7" />
        
        <circle cx="66" cy="118" r="23" fill="url(#eucaGrad18)" />
        <circle cx="69" cy="116" r="7.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="134" cy="118" r="23" fill="url(#eucaGrad18)" />
        <circle cx="131" cy="116" r="7.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="70" cy="153" r="21" fill="url(#eucaGrad18)" />
        <circle cx="73" cy="151" r="7" fill={highlightColor} opacity="0.7" />
        
        <circle cx="130" cy="153" r="21" fill="url(#eucaGrad18)" />
        <circle cx="127" cy="151" r="7" fill={highlightColor} opacity="0.7" />
      </svg>
    </div>
  );
}