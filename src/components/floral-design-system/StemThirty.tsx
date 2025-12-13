// Oak leaf on stem (perfectly symmetrical)
interface StemThirtyProps {
  size?: number;
  className?: string;
}

export default function StemThirty({ 
  size = 200, 
  className = "" 
}: StemThirtyProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  const veinColor = "#7A8B6A";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for oak leaf */}
          <linearGradient id="oakGrad30" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={highlightColor} stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        {/* Stem - refined */}
        <rect x="96.5" y="120" width="7" height="63" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="120" width="2" height="63" fill={stemColor} opacity="0.6" />
        
        {/* Oak leaf with characteristic lobed edges - refined with gradient */}
        <path d="M 100 120 
                 Q 94 112 90 100 
                 L 94 95 
                 Q 90 82 86 75 
                 L 92 70 
                 Q 90 58 88 50 
                 L 94 45 
                 Q 96 35 100 26
                 Q 104 35 106 45
                 L 112 50
                 Q 110 58 108 70
                 L 114 75
                 Q 110 82 106 95
                 L 110 100
                 Q 106 112 100 120 Z" 
             fill="url(#oakGrad30)" />
        
        {/* Subtle outer edge highlight */}
        <path d="M 100 120 
                 Q 94 112 90 100 
                 L 94 95 
                 Q 90 82 86 75 
                 L 92 70 
                 Q 90 58 88 50 
                 L 94 45 
                 Q 96 35 100 26
                 Q 104 35 106 45
                 L 112 50
                 Q 110 58 108 70
                 L 114 75
                 Q 110 82 106 95
                 L 110 100
                 Q 106 112 100 120 Z" 
             fill="none" stroke={highlightColor} strokeWidth="1" opacity="0.4" />
        
        {/* Central vein - refined */}
        <line x1="100" y1="120" x2="100" y2="30" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="120" x2="100" y2="30" stroke={veinColor} strokeWidth="1" opacity="0.4" />
        
        {/* Side veins - refined symmetrical pairs */}
        <line x1="100" y1="100" x2="90" y2="96" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="100" x2="110" y2="96" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        
        <line x1="100" y1="75" x2="88" y2="70" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="75" x2="112" y2="70" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        
        <line x1="100" y1="50" x2="90" y2="46" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="50" x2="110" y2="46" stroke={veinColor} strokeWidth="2" opacity="0.6" />
      </svg>
    </div>
  );
}