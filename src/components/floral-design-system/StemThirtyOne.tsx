// Maple leaf on stem (perfectly symmetrical)
interface StemThirtyOneProps {
  size?: number;
  className?: string;
}

export default function StemThirtyOne({ 
  size = 200, 
  className = "" 
}: StemThirtyOneProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#C9765A"; // Refined terracotta for autumn maple
  const leafHighlight = "#D99682";
  const veinColor = "#7A8B6A";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for maple leaf */}
          <linearGradient id="mapleGrad31" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafHighlight} stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        {/* Stem - refined */}
        <rect x="96.5" y="125" width="7" height="58" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="125" width="2" height="58" fill={stemColor} opacity="0.6" />
        
        {/* Classic five-pointed maple leaf - refined with gradient */}
        <path d="M 100 125
                 L 96 105
                 L 82 108
                 L 72 88
                 L 78 78
                 L 66 70
                 L 72 58
                 L 84 64
                 L 92 48
                 L 98 30
                 L 100 23
                 L 102 30
                 L 108 48
                 L 116 64
                 L 128 58
                 L 134 70
                 L 122 78
                 L 128 88
                 L 118 108
                 L 104 105
                 Z"
             fill="url(#mapleGrad31)" />
        
        {/* Subtle outer edge highlight */}
        <path d="M 100 125
                 L 96 105
                 L 82 108
                 L 72 88
                 L 78 78
                 L 66 70
                 L 72 58
                 L 84 64
                 L 92 48
                 L 98 30
                 L 100 23
                 L 102 30
                 L 108 48
                 L 116 64
                 L 128 58
                 L 134 70
                 L 122 78
                 L 128 88
                 L 118 108
                 L 104 105
                 Z"
             fill="none" stroke={leafHighlight} strokeWidth="1" opacity="0.5" />
        
        {/* Veins radiating from center - refined symmetry */}
        <line x1="100" y1="125" x2="100" y2="28" stroke={veinColor} strokeWidth="3" opacity="0.7" />
        <line x1="100" y1="125" x2="100" y2="28" stroke={veinColor} strokeWidth="1" opacity="0.4" />
        
        <line x1="100" y1="95" x2="74" y2="82" stroke={veinColor} strokeWidth="2.5" opacity="0.6" />
        <line x1="100" y1="95" x2="126" y2="82" stroke={veinColor} strokeWidth="2.5" opacity="0.6" />
        
        <line x1="100" y1="70" x2="86" y2="54" stroke={veinColor} strokeWidth="2.2" opacity="0.6" />
        <line x1="100" y1="70" x2="114" y2="54" stroke={veinColor} strokeWidth="2.2" opacity="0.6" />
      </svg>
    </div>
  );
}