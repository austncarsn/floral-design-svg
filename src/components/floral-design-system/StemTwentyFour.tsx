// Pine needle cluster stem (perfectly symmetrical)
interface StemTwentyFourProps {
  size?: number;
  className?: string;
}

export default function StemTwentyFour({ 
  size = 200, 
  className = "" 
}: StemTwentyFourProps) {
  const stemColor = "#8A9B7A";
  const needleColor = "#9DB5A0";
  const needleHighlight = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for needle depth */}
          <linearGradient id="needleGrad24" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={needleColor} stopOpacity="1" />
            <stop offset="100%" stopColor={needleColor} stopOpacity="0.75" />
          </linearGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="70" width="7" height="113" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="70" width="2" height="113" fill={stemColor} opacity="0.6" />
        
        {/* Top cluster - radiating needles with refined strokes */}
        <line x1="100" y1="48" x2="78" y2="28" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="48" x2="78" y2="28" stroke={needleHighlight} strokeWidth="1" strokeLinecap="round" opacity="0.4" transform="translate(-0.5, -0.5)" />
        
        <line x1="100" y1="48" x2="88" y2="26" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="48" x2="100" y2="23" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="48" x2="112" y2="26" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="48" x2="122" y2="28" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Middle cluster - refined symmetry */}
        <line x1="100" y1="98" x2="73" y2="83" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="98" x2="83" y2="80" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="98" x2="93" y2="78" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="98" x2="107" y2="78" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="98" x2="117" y2="80" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="98" x2="127" y2="83" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Bottom cluster - refined symmetry */}
        <line x1="100" y1="148" x2="70" y2="136" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="148" x2="80" y2="133" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="148" x2="90" y2="130" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="148" x2="110" y2="130" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="148" x2="120" y2="133" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="100" y1="148" x2="130" y2="136" stroke="url(#needleGrad24)" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Cluster connection points - refined with gradient */}
        <circle cx="100" cy="48" r="7" fill={stemColor} />
        <circle cx="100" cy="48" r="4" fill={stemColor} opacity="0.6" />
        
        <circle cx="100" cy="98" r="7" fill={stemColor} />
        <circle cx="100" cy="98" r="4" fill={stemColor} opacity="0.6" />
        
        <circle cx="100" cy="148" r="7" fill={stemColor} />
        <circle cx="100" cy="148" r="4" fill={stemColor} opacity="0.6" />
      </svg>
    </div>
  );
}