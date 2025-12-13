// Monstera leaf on stem (perfectly symmetrical)
interface StemTwentyNineProps {
  size?: number;
  className?: string;
}

export default function StemTwentyNine({ 
  size = 200, 
  className = "" 
}: StemTwentyNineProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  const veinColor = "#7A8B6A";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for monstera leaf */}
          <linearGradient id="monsteraGrad29" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="50%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={highlightColor} stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        {/* Stem - refined */}
        <rect x="96.5" y="110" width="7" height="73" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="110" width="2" height="73" fill={stemColor} opacity="0.6" />
        
        {/* Monstera leaf - refined with gradient */}
        <path d="M 100 110 Q 63 98 43 73 Q 40 56 46 43 Q 56 33 70 38 Q 80 48 86 63 Q 93 83 100 110 Z" fill="url(#monsteraGrad29)" />
        <path d="M 100 110 Q 137 98 157 73 Q 160 56 154 43 Q 144 33 130 38 Q 120 48 114 63 Q 107 83 100 110 Z" fill="url(#monsteraGrad29)" />
        
        {/* Subtle outer edge highlights */}
        <path d="M 100 110 Q 63 98 43 73 Q 40 56 46 43 Q 56 33 70 38 Q 80 48 86 63 Q 93 83 100 110 Z" fill="none" stroke={highlightColor} strokeWidth="1" opacity="0.4" />
        <path d="M 100 110 Q 137 98 157 73 Q 160 56 154 43 Q 144 33 130 38 Q 120 48 114 63 Q 107 83 100 110 Z" fill="none" stroke={highlightColor} strokeWidth="1" opacity="0.4" />
        
        {/* Characteristic holes in monstera leaf - refined symmetry */}
        <ellipse cx="68" cy="63" rx="10" ry="15" fill="#F5F5F0" opacity="0.95" />
        <ellipse cx="68" cy="63" rx="10" ry="15" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" />
        
        <ellipse cx="86" cy="73" rx="9" ry="13" fill="#F5F5F0" opacity="0.95" />
        <ellipse cx="86" cy="73" rx="9" ry="13" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" />
        
        <ellipse cx="114" cy="73" rx="9" ry="13" fill="#F5F5F0" opacity="0.95" />
        <ellipse cx="114" cy="73" rx="9" ry="13" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" />
        
        <ellipse cx="132" cy="63" rx="10" ry="15" fill="#F5F5F0" opacity="0.95" />
        <ellipse cx="132" cy="63" rx="10" ry="15" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" />
        
        {/* Deep splits at edges - refined symmetry */}
        <path d="M 58 56 L 64 63" stroke="#F5F5F0" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" />
        <path d="M 50 70 L 58 74" stroke="#F5F5F0" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" />
        <path d="M 142 56 L 136 63" stroke="#F5F5F0" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" />
        <path d="M 150 70 L 142 74" stroke="#F5F5F0" strokeWidth="5.5" strokeLinecap="round" opacity="0.9" />
        
        {/* Central vein - refined */}
        <line x1="100" y1="110" x2="100" y2="43" stroke={veinColor} strokeWidth="3.5" opacity="0.7" />
        <line x1="100" y1="110" x2="100" y2="43" stroke={veinColor} strokeWidth="1.5" opacity="0.4" />
      </svg>
    </div>
  );
}