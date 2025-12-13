// Stem with four leaves (perfectly symmetrical and centered)
interface StemTwoProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemTwo({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemTwoProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - refined width and positioning */}
        <rect x="96" y="35" width="8" height="140" fill={stemColor} rx="2" />
        
        {/* Top left leaf - refined with highlight */}
        <ellipse cx="72" cy="82" rx="26" ry="18" fill={leafColor} transform="rotate(-25 72 82)" />
        <ellipse cx="76" cy="82" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(-25 76 82)" />
        
        {/* Top right leaf - refined with highlight */}
        <ellipse cx="128" cy="82" rx="26" ry="18" fill={leafColor} transform="rotate(25 128 82)" />
        <ellipse cx="124" cy="82" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(25 124 82)" />
        
        {/* Bottom left leaf - refined with highlight */}
        <ellipse cx="72" cy="138" rx="26" ry="18" fill={leafColor} transform="rotate(-25 72 138)" />
        <ellipse cx="76" cy="138" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(-25 76 138)" />
        
        {/* Bottom right leaf - refined with highlight */}
        <ellipse cx="128" cy="138" rx="26" ry="18" fill={leafColor} transform="rotate(25 128 138)" />
        <ellipse cx="124" cy="138" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(25 124 138)" />
      </svg>
    </div>
  );
}