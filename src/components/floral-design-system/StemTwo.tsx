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
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemTwoProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - perfectly centered */}
        <rect x="97" y="30" width="6" height="150" fill={stemColor} rx="1" />
        
        {/* Top left leaf */}
        <ellipse cx="70" cy="80" rx="28" ry="20" fill={leafColor} transform="rotate(-25 70 80)" />
        
        {/* Top right leaf */}
        <ellipse cx="130" cy="80" rx="28" ry="20" fill={leafColor} transform="rotate(25 130 80)" />
        
        {/* Bottom left leaf */}
        <ellipse cx="70" cy="140" rx="28" ry="20" fill={leafColor} transform="rotate(-25 70 140)" />
        
        {/* Bottom right leaf */}
        <ellipse cx="130" cy="140" rx="28" ry="20" fill={leafColor} transform="rotate(25 130 140)" />
      </svg>
    </div>
  );
}
