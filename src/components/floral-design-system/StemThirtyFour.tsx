// Eucalyptus-style rounded leaf pairs (perfectly symmetrical)
interface StemThirtyFourProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThirtyFour({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#B4C9BC"
}: StemThirtyFourProps) {
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradient for eucalyptus leaves */}
          <radialGradient id="eucaGrad34" cx="35%" cy="35%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.95" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="20" width="7" height="163" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="20" width="2" height="163" fill={stemColor} opacity="0.6" />
        
        {/* Top leaf pair - refined with gradients and highlights */}
        <circle cx="73" cy="53" r="23" fill="url(#eucaGrad34)" />
        <circle cx="76" cy="51" r="7.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="127" cy="53" r="23" fill="url(#eucaGrad34)" />
        <circle cx="124" cy="51" r="7.5" fill={highlightColor} opacity="0.7" />
        
        {/* Second leaf pair */}
        <circle cx="68" cy="88" r="25" fill="url(#eucaGrad34)" />
        <circle cx="71" cy="86" r="8" fill={highlightColor} opacity="0.7" />
        
        <circle cx="132" cy="88" r="25" fill="url(#eucaGrad34)" />
        <circle cx="129" cy="86" r="8" fill={highlightColor} opacity="0.7" />
        
        {/* Third leaf pair */}
        <circle cx="66" cy="123" r="27" fill="url(#eucaGrad34)" />
        <circle cx="69" cy="121" r="9" fill={highlightColor} opacity="0.7" />
        
        <circle cx="134" cy="123" r="27" fill="url(#eucaGrad34)" />
        <circle cx="131" cy="121" r="9" fill={highlightColor} opacity="0.7" />
        
        {/* Bottom leaf pair - largest */}
        <circle cx="63" cy="158" r="29" fill="url(#eucaGrad34)" />
        <circle cx="66" cy="156" r="9.5" fill={highlightColor} opacity="0.7" />
        
        <circle cx="137" cy="158" r="29" fill="url(#eucaGrad34)" />
        <circle cx="134" cy="156" r="9.5" fill={highlightColor} opacity="0.7" />
      </svg>
    </div>
  );
}