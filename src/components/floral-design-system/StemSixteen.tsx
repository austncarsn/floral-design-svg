// Delicate curved stem with teardrop leaves (perfectly symmetrical)
interface StemSixteenProps {
  size?: number;
  className?: string;
}

export default function StemSixteen({ 
  size = 200, 
  className = "" 
}: StemSixteenProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gracefully curved main stem */}
        <path d="M 90 180 Q 100 120 98 60 Q 96 30 100 20" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Teardrop leaves - left side (perfectly mirrored) */}
        <path d="M 98 60 Q 70 62 60 80 Q 72 75 98 68 Z" fill={leafColor} />
        <path d="M 96 100 Q 72 105 65 122 Q 76 116 96 108 Z" fill={leafColor} />
        <path d="M 93 140 Q 70 145 63 162 Q 74 156 93 148 Z" fill={leafColor} />
        
        {/* Teardrop leaves - right side (mirror symmetry) */}
        <path d="M 98 68 Q 126 70 136 88 Q 124 83 98 75 Z" fill={leafColor} />
        <path d="M 96 108 Q 120 113 127 130 Q 116 124 96 116 Z" fill={leafColor} />
        <path d="M 93 148 Q 116 153 123 170 Q 112 164 93 156 Z" fill={leafColor} />
      </svg>
    </div>
  );
}
