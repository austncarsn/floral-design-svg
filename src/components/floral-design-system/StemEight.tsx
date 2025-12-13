// Double curved stem (perfectly symmetrical and centered)
interface StemEightProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemEight({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left curved stem - refined */}
        <path d="M 76 30 Q 70 78 76 124 Q 78 148 82 175" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Right curved stem - refined mirror */}
        <path d="M 124 30 Q 130 78 124 124 Q 122 148 118 175" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Left leaves - refined with highlights */}
        <ellipse cx="60" cy="82" rx="21" ry="15" fill={leafColor} transform="rotate(-30 60 82)" />
        <ellipse cx="64" cy="82" rx="12" ry="8" fill="#C4D9C5" opacity="0.5" transform="rotate(-30 64 82)" />
        
        <ellipse cx="65" cy="136" rx="21" ry="15" fill={leafColor} transform="rotate(-30 65 136)" />
        <ellipse cx="69" cy="136" rx="12" ry="8" fill="#C4D9C5" opacity="0.5" transform="rotate(-30 69 136)" />
        
        {/* Right leaves - refined mirror with highlights */}
        <ellipse cx="140" cy="82" rx="21" ry="15" fill={leafColor} transform="rotate(30 140 82)" />
        <ellipse cx="136" cy="82" rx="12" ry="8" fill="#C4D9C5" opacity="0.5" transform="rotate(30 136 82)" />
        
        <ellipse cx="135" cy="136" rx="21" ry="15" fill={leafColor} transform="rotate(30 135 136)" />
        <ellipse cx="131" cy="136" rx="12" ry="8" fill="#C4D9C5" opacity="0.5" transform="rotate(30 131 136)" />
      </svg>
    </div>
  );
}