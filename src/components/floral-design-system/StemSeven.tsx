// Heart-shaped leaves stem (perfectly symmetrical and centered)
interface StemSevenProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemSeven({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemSevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - refined */}
        <rect x="96" y="35" width="8" height="145" fill={stemColor} rx="2" />
        
        {/* Heart-shaped leaf - refined with highlight */}
        <path d="M 78 102 Q 68 116 100 152 Q 132 116 122 102 Q 116 95 100 107 Q 84 95 78 102 Z" fill={leafColor} />
        <path d="M 88 106 Q 82 114 100 138 Q 118 114 112 106 Q 108 102 100 110 Q 92 102 88 106 Z" fill="#C4D9C5" opacity="0.4" />
        
        {/* Small top leaves - refined with highlights */}
        <ellipse cx="80" cy="67" rx="21" ry="16" fill={leafColor} transform="rotate(-30 80 67)" />
        <ellipse cx="84" cy="67" rx="12" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(-30 84 67)" />
        
        <ellipse cx="120" cy="67" rx="21" ry="16" fill={leafColor} transform="rotate(30 120 67)" />
        <ellipse cx="116" cy="67" rx="12" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(30 116 67)" />
      </svg>
    </div>
  );
}