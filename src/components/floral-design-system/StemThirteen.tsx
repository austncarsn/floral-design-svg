// Triple branch stem with pointed leaves (perfectly symmetrical)
interface StemThirteenProps {
  size?: number;
  className?: string;
}

export default function StemThirteen({ 
  size = 200, 
  className = "" 
}: StemThirteenProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for main stem depth */}
          <linearGradient id="stemGrad13" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={stemColor} stopOpacity="0.85" />
            <stop offset="50%" stopColor={stemColor} stopOpacity="1" />
            <stop offset="100%" stopColor={stemColor} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        
        {/* Main vertical stem - refined with rounded cap */}
        <rect x="96.5" y="25" width="7" height="155" fill="url(#stemGrad13)" rx="3.5" />
        <ellipse cx="100" cy="25" rx="3.5" ry="3" fill={stemColor} opacity="0.9" />
        
        {/* Left branch - graceful curve */}
        <path d="M 100 75 Q 82 88 68 108" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 100 75 Q 82 88 68 108" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Right branch - mirror curve */}
        <path d="M 100 75 Q 118 88 132 108" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 100 75 Q 118 88 132 108" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Pointed leaves on left branch - refined with highlights */}
        <path d="M 68 108 L 56 102 L 61 118 Z" fill={leafColor} />
        <path d="M 68 108 L 60 104 L 63 114 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 78 94 L 68 90 L 72 103 Z" fill={leafColor} />
        <path d="M 78 94 L 71 91 L 74 100 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Pointed leaves on right branch - mirror highlights */}
        <path d="M 132 108 L 144 102 L 139 118 Z" fill={leafColor} />
        <path d="M 132 108 L 140 104 L 137 114 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 122 94 L 132 90 L 128 103 Z" fill={leafColor} />
        <path d="M 122 94 L 129 91 L 126 100 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Pointed leaves on main stem - perfectly symmetrical with highlights */}
        <path d="M 100 118 L 84 114 L 90 128 Z" fill={leafColor} />
        <path d="M 100 118 L 88 116 L 92 125 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 100 118 L 116 114 L 110 128 Z" fill={leafColor} />
        <path d="M 100 118 L 112 116 L 108 125 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 100 150 L 84 146 L 90 160 Z" fill={leafColor} />
        <path d="M 100 150 L 88 148 L 92 157 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 100 150 L 116 146 L 110 160 Z" fill={leafColor} />
        <path d="M 100 150 L 112 148 L 108 157 Z" fill={highlightColor} opacity="0.6" />
      </svg>
    </div>
  );
}