// Tropical bird of paradise leaves (perfectly symmetrical)
interface StemFortyProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor1?: string;
  leafColor2?: string;
}

export default function StemForty({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor1 = "#9CAF88",
  leafColor2 = "#A8C9B8"
}: StemFortyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stems from base */}
        <rect x="97" y="140" width="6" height="40" fill={stemColor} rx="1" />
        
        {/* Left leaf stem */}
        <rect x="55" y="90" width="5" height="70" fill={stemColor} rx="1" transform="rotate(-25 57 90)" />
        
        {/* Right leaf stem */}
        <rect x="140" y="90" width="5" height="70" fill={stemColor} rx="1" transform="rotate(25 142 90)" />
        
        {/* Center leaf stem */}
        <rect x="97" y="50" width="6" height="90" fill={stemColor} rx="1" />
        
        {/* Center leaf - tallest */}
        <ellipse cx="100" cy="45" rx="35" ry="55" fill={leafColor1} />
        
        {/* Left leaf */}
        <ellipse cx="45" cy="70" rx="32" ry="50" fill={leafColor2} transform="rotate(-20 45 70)" />
        
        {/* Right leaf */}
        <ellipse cx="155" cy="70" rx="32" ry="50" fill={leafColor2} transform="rotate(20 155 70)" />
        
        {/* Mid-left leaf */}
        <ellipse cx="70" cy="95" rx="28" ry="45" fill={leafColor1} transform="rotate(-15 70 95)" />
        
        {/* Mid-right leaf */}
        <ellipse cx="130" cy="95" rx="28" ry="45" fill={leafColor1} transform="rotate(15 130 95)" />
        
        {/* Leaf veins for detail */}
        <line x1="100" y1="25" x2="100" y2="65" stroke={stemColor} strokeWidth="2" opacity="0.3" />
        <line x1="45" y1="50" x2="45" y2="90" stroke={stemColor} strokeWidth="2" opacity="0.3" />
        <line x1="155" y1="50" x2="155" y2="90" stroke={stemColor} strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );
}
