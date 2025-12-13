// Cascading ivy with trailing vines (perfectly symmetrical)
interface StemThirtySevenProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThirtySeven({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemThirtySevenProps) {
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main curved stem - refined */}
        <path 
          d="M 100 20 Q 88 60, 100 100 Q 112 140, 100 178" 
          stroke={stemColor} 
          strokeWidth="5.5" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 100 20 Q 88 60, 100 100 Q 112 140, 100 178" 
          stroke={stemColor} 
          strokeWidth="1.5" 
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          transform="translate(0.5, 0.5)"
        />
        
        {/* Heart-shaped ivy leaves - refined with highlights */}
        {/* Left side leaves */}
        <path d="M 73 43 Q 63 38, 68 33 Q 73 28, 73 33 Q 73 28, 78 33 Q 83 38, 73 43 Z" fill={leafColor} />
        <path d="M 73 43 Q 68 40, 70 37 Q 72 35, 72 37 Q 72 35, 74 37 Q 76 40, 73 43 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 83 83 Q 73 78, 78 73 Q 83 68, 83 73 Q 83 68, 88 73 Q 93 78, 83 83 Z" fill={leafColor} />
        <path d="M 83 83 Q 78 80, 80 77 Q 82 75, 82 77 Q 82 75, 84 77 Q 86 80, 83 83 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 73 123 Q 63 118, 68 113 Q 73 108, 73 113 Q 73 108, 78 113 Q 83 118, 73 123 Z" fill={leafColor} />
        <path d="M 73 123 Q 68 120, 70 117 Q 72 115, 72 117 Q 72 115, 74 117 Q 76 120, 73 123 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 83 163 Q 73 158, 78 153 Q 83 148, 83 153 Q 83 148, 88 153 Q 93 158, 83 163 Z" fill={leafColor} />
        <path d="M 83 163 Q 78 160, 80 157 Q 82 155, 82 157 Q 82 155, 84 157 Q 86 160, 83 163 Z" fill={highlightColor} opacity="0.6" />
        
        {/* Right side leaves - mirror symmetry */}
        <path d="M 127 63 Q 117 58, 122 53 Q 127 48, 127 53 Q 127 48, 132 53 Q 137 58, 127 63 Z" fill={leafColor} />
        <path d="M 127 63 Q 122 60, 124 57 Q 126 55, 126 57 Q 126 55, 128 57 Q 130 60, 127 63 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 117 103 Q 107 98, 112 93 Q 117 88, 117 93 Q 117 88, 122 93 Q 127 98, 117 103 Z" fill={leafColor} />
        <path d="M 117 103 Q 112 100, 114 97 Q 116 95, 116 97 Q 116 95, 118 97 Q 120 100, 117 103 Z" fill={highlightColor} opacity="0.6" />
        
        <path d="M 127 143 Q 117 138, 122 133 Q 127 128, 127 133 Q 127 128, 132 133 Q 137 138, 127 143 Z" fill={leafColor} />
        <path d="M 127 143 Q 122 140, 124 137 Q 126 135, 126 137 Q 126 135, 128 137 Q 130 140, 127 143 Z" fill={highlightColor} opacity="0.6" />
      </svg>
    </div>
  );
}