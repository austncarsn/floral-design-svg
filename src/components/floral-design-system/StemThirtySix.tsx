// Monstera-style split leaf (perfectly symmetrical)
interface StemThirtySixProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThirtySix({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemThirtySixProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <rect x="97" y="120" width="6" height="60" fill={stemColor} rx="1" />
        
        {/* Large monstera leaf base */}
        <ellipse cx="100" cy="80" rx="65" ry="75" fill={leafColor} />
        
        {/* Cutouts to create monstera effect - symmetrical */}
        {/* Center cutout */}
        <ellipse cx="100" cy="70" rx="8" ry="25" fill="white" />
        
        {/* Left cutouts */}
        <ellipse cx="70" cy="65" rx="6" ry="20" fill="white" transform="rotate(-15 70 65)" />
        <ellipse cx="55" cy="85" rx="6" ry="18" fill="white" transform="rotate(-25 55 85)" />
        <ellipse cx="48" cy="105" rx="5" ry="16" fill="white" transform="rotate(-35 48 105)" />
        
        {/* Right cutouts */}
        <ellipse cx="130" cy="65" rx="6" ry="20" fill="white" transform="rotate(15 130 65)" />
        <ellipse cx="145" cy="85" rx="6" ry="18" fill="white" transform="rotate(25 145 85)" />
        <ellipse cx="152" cy="105" rx="5" ry="16" fill="white" transform="rotate(35 152 105)" />
        
        {/* Leaf outline for definition */}
        <ellipse cx="100" cy="80" rx="65" ry="75" fill="none" stroke={stemColor} strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );
}
