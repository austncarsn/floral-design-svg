// Vine-like spiral stem (perfectly symmetrical and centered)
interface StemTwelveProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemTwelve({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemTwelveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Subtle gradient for depth */}
          <linearGradient id="stemGrad12" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stemColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor={stemColor} stopOpacity="1" />
          </linearGradient>
        </defs>
        
        {/* Main spiral stem - graceful S-curve with perfect flow */}
        <path 
          d="M 100 30 Q 82 65 100 95 Q 118 125 100 155 Q 88 175 100 185" 
          stroke="url(#stemGrad12)" 
          strokeWidth="5.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Shadow accent on stem */}
        <path 
          d="M 100 30 Q 82 65 100 95 Q 118 125 100 155 Q 88 175 100 185" 
          stroke={stemColor} 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round" 
          opacity="0.3"
          transform="translate(1, 1)"
        />
        
        {/* Leaves at spiral points - refined with highlights */}
        <ellipse cx="82" cy="65" rx="24" ry="13" fill={leafColor} transform="rotate(-32 82 65)" />
        <ellipse cx="85" cy="64" rx="13" ry="7" fill="#C4D9C5" opacity="0.5" transform="rotate(-32 85 64)" />
        
        <ellipse cx="118" cy="125" rx="24" ry="13" fill={leafColor} transform="rotate(32 118 125)" />
        <ellipse cx="115" cy="124" rx="13" ry="7" fill="#C4D9C5" opacity="0.5" transform="rotate(32 115 124)" />
        
        {/* Additional leaves at curves - refined proportions */}
        <ellipse cx="106" cy="85" rx="20" ry="11" fill={leafColor} transform="rotate(18 106 85)" />
        <ellipse cx="109" cy="84" rx="11" ry="6" fill="#C4D9C5" opacity="0.5" transform="rotate(18 109 84)" />
        
        <ellipse cx="88" cy="145" rx="20" ry="11" fill={leafColor} transform="rotate(-22 88 145)" />
        <ellipse cx="91" cy="144" rx="11" ry="6" fill="#C4D9C5" opacity="0.5" transform="rotate(-22 91 144)" />
        
        <ellipse cx="102" cy="170" rx="18" ry="10" fill={leafColor} transform="rotate(8 102 170)" />
        <ellipse cx="105" cy="169" rx="10" ry="5" fill="#C4D9C5" opacity="0.5" transform="rotate(8 105 169)" />
      </svg>
    </div>
  );
}