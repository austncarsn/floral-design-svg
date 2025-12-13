// Heart-shaped leaves on stem (perfectly symmetrical)
interface StemSeventeenProps {
  size?: number;
  className?: string;
}

export default function StemSeventeen({ 
  size = 200, 
  className = "" 
}: StemSeventeenProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for stem depth */}
          <linearGradient id="stemGrad17" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={stemColor} stopOpacity="0.85" />
            <stop offset="50%" stopColor={stemColor} stopOpacity="1" />
            <stop offset="100%" stopColor={stemColor} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="30" width="7" height="153" fill="url(#stemGrad17)" rx="3.5" />
        <rect x="97.5" y="30" width="2" height="153" fill={stemColor} opacity="0.6" />
        
        {/* Heart-shaped leaves - perfectly symmetrical pairs with highlights */}
        {/* Top pair */}
        <path d="M 68 58 Q 63 48 68 43 Q 73 40 76 43 Q 78 40 83 43 Q 88 48 83 58 Q 76 66 68 58 Z" fill={leafColor} />
        <path d="M 72 52 Q 70 48 72 46 Q 74 45 75 46 Q 76 45 78 46 Q 80 48 78 52 Q 75 56 72 52 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 132 58 Q 137 48 132 43 Q 127 40 124 43 Q 122 40 117 43 Q 112 48 117 58 Q 124 66 132 58 Z" fill={leafColor} />
        <path d="M 128 52 Q 130 48 128 46 Q 126 45 125 46 Q 124 45 122 46 Q 120 48 122 52 Q 125 56 128 52 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Middle pair */}
        <path d="M 63 98 Q 58 88 63 83 Q 68 80 71 83 Q 73 80 78 83 Q 83 88 78 98 Q 71 106 63 98 Z" fill={leafColor} />
        <path d="M 67 92 Q 65 88 67 86 Q 69 85 70 86 Q 71 85 73 86 Q 75 88 73 92 Q 70 96 67 92 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 137 98 Q 142 88 137 83 Q 132 80 129 83 Q 127 80 122 83 Q 117 88 122 98 Q 129 106 137 98 Z" fill={leafColor} />
        <path d="M 133 92 Q 135 88 133 86 Q 131 85 130 86 Q 129 85 127 86 Q 125 88 127 92 Q 130 96 133 92 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Bottom pair */}
        <path d="M 66 138 Q 61 128 66 123 Q 71 120 74 123 Q 76 120 81 123 Q 86 128 81 138 Q 74 146 66 138 Z" fill={leafColor} />
        <path d="M 70 132 Q 68 128 70 126 Q 72 125 73 126 Q 74 125 76 126 Q 78 128 76 132 Q 73 136 70 132 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 134 138 Q 139 128 134 123 Q 129 120 126 123 Q 124 120 119 123 Q 114 128 119 138 Q 126 146 134 138 Z" fill={leafColor} />
        <path d="M 130 132 Q 132 128 130 126 Q 128 125 127 126 Q 126 125 124 126 Q 122 128 124 132 Q 127 136 130 132 Z" fill={highlightColor} opacity="0.6" />
      </svg>
    </div>
  );
}