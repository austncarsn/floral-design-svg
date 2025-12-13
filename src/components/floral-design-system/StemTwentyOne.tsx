// Willow drooping leaves (perfectly symmetrical)
interface StemTwentyOneProps {
  size?: number;
  className?: string;
}

export default function StemTwentyOne({ 
  size = 200, 
  className = "" 
}: StemTwentyOneProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for drooping effect */}
          <linearGradient id="stemGrad21" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stemColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor={stemColor} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="20" width="7" height="93" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="20" width="2" height="93" fill={stemColor} opacity="0.6" />
        
        {/* Drooping branches - graceful curves with shadows */}
        <path d="M 100 58 Q 73 78 68 118" stroke="url(#stemGrad21)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 100 58 Q 73 78 68 118" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        <path d="M 100 58 Q 127 78 132 118" stroke="url(#stemGrad21)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 100 58 Q 127 78 132 118" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        <path d="M 100 78 Q 68 93 58 128" stroke="url(#stemGrad21)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 100 78 Q 68 93 58 128" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        <path d="M 100 78 Q 132 93 142 128" stroke="url(#stemGrad21)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 100 78 Q 132 93 142 128" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        <path d="M 100 98 Q 63 113 53 148" stroke="url(#stemGrad21)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 100 98 Q 63 113 53 148" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        <path d="M 100 98 Q 137 113 147 148" stroke="url(#stemGrad21)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 100 98 Q 137 113 147 148" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Narrow willow leaves - refined with highlights */}
        <ellipse cx="63" cy="128" rx="7" ry="21" fill={leafColor} transform="rotate(-22 63 128)" />
        <ellipse cx="64" cy="122" rx="3" ry="10" fill={highlightColor} opacity="0.5" transform="rotate(-22 64 122)" />
        
        <ellipse cx="137" cy="128" rx="7" ry="21" fill={leafColor} transform="rotate(22 137 128)" />
        <ellipse cx="136" cy="122" rx="3" ry="10" fill={highlightColor} opacity="0.5" transform="rotate(22 136 122)" />
        
        <ellipse cx="53" cy="153" rx="7" ry="23" fill={leafColor} transform="rotate(-26 53 153)" />
        <ellipse cx="54" cy="147" rx="3" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(-26 54 147)" />
        
        <ellipse cx="147" cy="153" rx="7" ry="23" fill={leafColor} transform="rotate(26 147 153)" />
        <ellipse cx="146" cy="147" rx="3" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(26 146 147)" />
        
        <ellipse cx="56" cy="143" rx="6" ry="19" fill={leafColor} transform="rotate(-16 56 143)" />
        <ellipse cx="57" cy="138" rx="2.5" ry="9" fill={highlightColor} opacity="0.5" transform="rotate(-16 57 138)" />
        
        <ellipse cx="144" cy="143" rx="6" ry="19" fill={leafColor} transform="rotate(16 144 143)" />
        <ellipse cx="143" cy="138" rx="2.5" ry="9" fill={highlightColor} opacity="0.5" transform="rotate(16 143 138)" />
      </svg>
    </div>
  );
}