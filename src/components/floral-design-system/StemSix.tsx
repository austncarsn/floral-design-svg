// Simple single leaf stem (perfectly symmetrical and centered)
interface StemSixProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemSix({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemSixProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - perfectly centered */}
        <rect x="97" y="30" width="6" height="150" fill={stemColor} rx="1" />
        
        {/* Single large centered leaf */}
        <ellipse cx="100" cy="100" rx="50" ry="38" fill={leafColor} />
        
        {/* Leaf center vein */}
        <line x1="100" y1="65" x2="100" y2="135" stroke={stemColor} strokeWidth="2.5" />
        
        {/* Side veins - symmetrical */}
        <line x1="100" y1="80" x2="80" y2="90" stroke={stemColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="80" x2="120" y2="90" stroke={stemColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="100" x2="75" y2="110" stroke={stemColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="100" x2="125" y2="110" stroke={stemColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="120" x2="82" y2="125" stroke={stemColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="120" x2="118" y2="125" stroke={stemColor} strokeWidth="1.5" opacity="0.6" />
      </svg>
    </div>
  );
}
