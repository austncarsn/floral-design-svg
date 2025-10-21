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
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemSevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - perfectly centered */}
        <rect x="97" y="30" width="6" height="150" fill={stemColor} rx="1" />
        
        {/* Heart-shaped leaf - perfectly symmetrical */}
        <path d="M 75 100 Q 65 115 100 155 Q 135 115 125 100 Q 118 92 100 105 Q 82 92 75 100 Z" fill={leafColor} />
        
        {/* Small top leaves - symmetrical */}
        <ellipse cx="82" cy="65" rx="22" ry="17" fill={leafColor} transform="rotate(-30 82 65)" />
        <ellipse cx="118" cy="65" rx="22" ry="17" fill={leafColor} transform="rotate(30 118 65)" />
      </svg>
    </div>
  );
}
