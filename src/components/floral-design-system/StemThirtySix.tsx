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
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemThirtySixProps) {
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial gradient for monstera leaf */}
          <radialGradient id="monsteraGrad36" cx="50%" cy="45%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.8" />
            <stop offset="40%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.9" />
          </radialGradient>
        </defs>
        
        {/* Stem - refined */}
        <rect x="96.5" y="120" width="7" height="63" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="120" width="2" height="63" fill={stemColor} opacity="0.6" />
        
        {/* Large monstera leaf base - with gradient */}
        <ellipse cx="100" cy="78" rx="67" ry="77" fill="url(#monsteraGrad36)" />
        
        {/* Cutouts to create monstera effect - refined symmetry */}
        {/* Center cutout */}
        <ellipse cx="100" cy="68" rx="9" ry="26" fill="#F5F5F0" opacity="0.95" />
        <ellipse cx="100" cy="68" rx="9" ry="26" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" />
        
        {/* Left cutouts - refined */}
        <ellipse cx="68" cy="63" rx="7" ry="21" fill="#F5F5F0" opacity="0.95" transform="rotate(-16 68 63)" />
        <ellipse cx="68" cy="63" rx="7" ry="21" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" transform="rotate(-16 68 63)" />
        
        <ellipse cx="53" cy="83" rx="7" ry="19" fill="#F5F5F0" opacity="0.95" transform="rotate(-26 53 83)" />
        <ellipse cx="53" cy="83" rx="7" ry="19" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" transform="rotate(-26 53 83)" />
        
        <ellipse cx="46" cy="103" rx="6" ry="17" fill="#F5F5F0" opacity="0.95" transform="rotate(-36 46 103)" />
        <ellipse cx="46" cy="103" rx="6" ry="17" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" transform="rotate(-36 46 103)" />
        
        {/* Right cutouts - mirror symmetry */}
        <ellipse cx="132" cy="63" rx="7" ry="21" fill="#F5F5F0" opacity="0.95" transform="rotate(16 132 63)" />
        <ellipse cx="132" cy="63" rx="7" ry="21" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" transform="rotate(16 132 63)" />
        
        <ellipse cx="147" cy="83" rx="7" ry="19" fill="#F5F5F0" opacity="0.95" transform="rotate(26 147 83)" />
        <ellipse cx="147" cy="83" rx="7" ry="19" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" transform="rotate(26 147 83)" />
        
        <ellipse cx="154" cy="103" rx="6" ry="17" fill="#F5F5F0" opacity="0.95" transform="rotate(36 154 103)" />
        <ellipse cx="154" cy="103" rx="6" ry="17" fill="none" stroke={leafColor} strokeWidth="1" opacity="0.3" transform="rotate(36 154 103)" />
        
        {/* Leaf outline for definition - refined */}
        <ellipse cx="100" cy="78" rx="67" ry="77" fill="none" stroke={stemColor} strokeWidth="2" opacity="0.35" />
        <ellipse cx="100" cy="78" rx="67" ry="77" fill="none" stroke={highlightColor} strokeWidth="1" opacity="0.2" />
      </svg>
    </div>
  );
}