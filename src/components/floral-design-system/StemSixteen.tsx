// Delicate curved stem with teardrop leaves (perfectly symmetrical)
interface StemSixteenProps {
  size?: number;
  className?: string;
}

export default function StemSixteen({ 
  size = 200, 
  className = "" 
}: StemSixteenProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for stem */}
          <linearGradient id="stemGrad16" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stemColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={stemColor} stopOpacity="1" />
          </linearGradient>
        </defs>
        
        {/* Gracefully curved main stem - refined S-curve */}
        <path d="M 88 178 Q 100 118 98 58 Q 96 32 100 22" stroke="url(#stemGrad16)" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M 88 178 Q 100 118 98 58 Q 96 32 100 22" stroke={stemColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" transform="translate(0.5, 0.5)" />
        
        {/* Teardrop leaves - left side with highlights */}
        <path d="M 98 58 Q 68 60 58 78 Q 70 73 98 66 Z" fill={leafColor} />
        <path d="M 98 58 Q 78 60 72 70 Q 78 68 98 64 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 96 98 Q 70 103 63 120 Q 74 114 96 106 Z" fill={leafColor} />
        <path d="M 96 98 Q 78 101 72 110 Q 78 108 96 104 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 91 138 Q 68 143 61 160 Q 72 154 91 146 Z" fill={leafColor} />
        <path d="M 91 138 Q 76 141 70 150 Q 76 148 91 144 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Teardrop leaves - right side with mirror highlights */}
        <path d="M 98 66 Q 128 68 138 86 Q 126 81 98 73 Z" fill={leafColor} />
        <path d="M 98 66 Q 118 68 124 78 Q 118 76 98 70 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 96 106 Q 122 111 129 128 Q 118 122 96 114 Z" fill={leafColor} />
        <path d="M 96 106 Q 112 109 118 118 Q 112 116 96 112 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 91 146 Q 114 151 121 168 Q 110 162 91 154 Z" fill={leafColor} />
        <path d="M 91 146 Q 104 149 110 158 Q 104 156 91 152 Z" fill={highlightColor} opacity="0.6" />
      </svg>
    </div>
  );
}