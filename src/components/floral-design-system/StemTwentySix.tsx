// Lotus leaf on stem (perfectly symmetrical)
interface StemTwentySixProps {
  size?: number;
  className?: string;
}

export default function StemTwentySix({ 
  size = 200, 
  className = "" 
}: StemTwentySixProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  const veinColor = "#7A8B6A";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradient for lotus leaf */}
          <radialGradient id="lotusGrad26" cx="50%" cy="50%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.8" />
            <stop offset="40%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.9" />
          </radialGradient>
        </defs>
        
        {/* Stem - refined */}
        <rect x="96.5" y="100" width="7" height="83" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="100" width="2" height="83" fill={stemColor} opacity="0.6" />
        
        {/* Large circular lotus leaf with gradient */}
        <circle cx="100" cy="70" r="60" fill="url(#lotusGrad26)" />
        <circle cx="100" cy="70" r="60" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" />
        
        {/* Radial veins on leaf - perfect 45° spacing with refined strokes */}
        <line x1="100" y1="70" x2="100" y2="10" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="70" x2="142" y2="28" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="70" x2="160" y2="70" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="70" x2="142" y2="112" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="70" x2="100" y2="130" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="70" x2="58" y2="112" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="70" x2="40" y2="70" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="100" y1="70" x2="58" y2="28" stroke={veinColor} strokeWidth="2.5" opacity="0.7" />
        
        {/* Subtle secondary veins */}
        <line x1="100" y1="70" x2="121" y2="19" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="70" x2="151" y2="49" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="70" x2="151" y2="91" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="70" x2="121" y2="121" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="70" x2="79" y2="121" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="70" x2="49" y2="91" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="70" x2="49" y2="49" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="70" x2="79" y2="19" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        
        {/* Center point where stem connects - refined */}
        <circle cx="100" cy="70" r="11" fill={stemColor} />
        <circle cx="100" cy="70" r="7" fill={stemColor} opacity="0.7" />
        
        {/* Small notch at top of leaf - refined */}
        <path d="M 100 10 L 95 16 L 100 14 L 105 16 Z" fill="#F5F5F0" opacity="0.9" />
      </svg>
    </div>
  );
}