// Ginkgo fan leaf on stem (perfectly symmetrical)
interface StemTwentySevenProps {
  size?: number;
  className?: string;
}

export default function StemTwentySeven({ 
  size = 200, 
  className = "" 
}: StemTwentySevenProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  const veinColor = "#7A8B6A";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for ginkgo leaf */}
          <linearGradient id="ginkgoGrad27" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={highlightColor} stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        {/* Stem - refined */}
        <rect x="96.5" y="110" width="7" height="73" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="110" width="2" height="73" fill={stemColor} opacity="0.6" />
        
        {/* Fan-shaped ginkgo leaf - refined with gradient */}
        <path d="M 100 110 Q 68 98 43 63 Q 46 48 58 50 Q 70 58 80 73 Q 88 88 100 110 Z" fill="url(#ginkgoGrad27)" />
        <path d="M 100 110 Q 132 98 157 63 Q 154 48 142 50 Q 130 58 120 73 Q 112 88 100 110 Z" fill="url(#ginkgoGrad27)" />
        
        {/* Subtle outer edge highlights */}
        <path d="M 100 110 Q 68 98 43 63 Q 46 48 58 50 Q 70 58 80 73 Q 88 88 100 110 Z" fill="none" stroke={highlightColor} strokeWidth="1" opacity="0.4" />
        <path d="M 100 110 Q 132 98 157 63 Q 154 48 142 50 Q 130 58 120 73 Q 112 88 100 110 Z" fill="none" stroke={highlightColor} strokeWidth="1" opacity="0.4" />
        
        {/* Center split in leaf - refined */}
        <line x1="100" y1="110" x2="100" y2="53" stroke="#F5F5F0" strokeWidth="4.5" opacity="0.9" />
        <line x1="100" y1="110" x2="100" y2="53" stroke="#F5F5F0" strokeWidth="2" opacity="0.6" />
        
        {/* Radiating veins in leaf - refined symmetry */}
        <line x1="100" y1="110" x2="73" y2="68" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="110" x2="83" y2="73" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="110" x2="92" y2="85" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        
        <line x1="100" y1="110" x2="127" y2="68" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="110" x2="117" y2="73" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="110" x2="108" y2="85" stroke={veinColor} strokeWidth="2" opacity="0.6" />
        
        {/* Additional subtle veins */}
        <line x1="100" y1="110" x2="62" y2="63" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
        <line x1="100" y1="110" x2="138" y2="63" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
      </svg>
    </div>
  );
}