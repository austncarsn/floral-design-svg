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
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemSixProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - refined */}
        <rect x="96" y="35" width="8" height="145" fill={stemColor} rx="2" />
        
        {/* Single large centered leaf with highlight */}
        <ellipse cx="100" cy="102" rx="46" ry="35" fill={leafColor} />
        <ellipse cx="100" cy="95" rx="32" ry="23" fill="#C4D9C5" opacity="0.4" />
        
        {/* Leaf center vein - refined */}
        <line x1="100" y1="70" x2="100" y2="134" stroke={stemColor} strokeWidth="3" />
        
        {/* Side veins - refined symmetry */}
        <line x1="100" y1="82" x2="78" y2="92" stroke={stemColor} strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="82" x2="122" y2="92" stroke={stemColor} strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="102" x2="72" y2="112" stroke={stemColor} strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="102" x2="128" y2="112" stroke={stemColor} strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="120" x2="80" y2="126" stroke={stemColor} strokeWidth="2" opacity="0.5" />
        <line x1="100" y1="120" x2="120" y2="126" stroke={stemColor} strokeWidth="2" opacity="0.5" />
      </svg>
    </div>
  );
}