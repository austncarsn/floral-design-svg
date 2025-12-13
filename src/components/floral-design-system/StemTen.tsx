// Bamboo-style segmented stem (perfectly symmetrical and centered)
interface StemTenProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemTen({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemTenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem segments - refined */}
        <rect x="92" y="35" width="16" height="40" fill={stemColor} rx="3" />
        <rect x="92" y="82" width="16" height="40" fill={stemColor} rx="3" />
        <rect x="92" y="129" width="16" height="40" fill={stemColor} rx="3" />
        
        {/* Segment joints - refined */}
        <rect x="85" y="74" width="30" height="7" fill={stemColor} rx="2" />
        <rect x="85" y="121" width="30" height="7" fill={stemColor} rx="2" />
        
        {/* Leaves at joints - refined with highlights */}
        <ellipse cx="68" cy="77" rx="24" ry="16" fill={leafColor} transform="rotate(-40 68 77)" />
        <ellipse cx="72" cy="77" rx="13" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(-40 72 77)" />
        
        <ellipse cx="132" cy="77" rx="24" ry="16" fill={leafColor} transform="rotate(40 132 77)" />
        <ellipse cx="128" cy="77" rx="13" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(40 128 77)" />
        
        <ellipse cx="68" cy="124" rx="24" ry="16" fill={leafColor} transform="rotate(-40 68 124)" />
        <ellipse cx="72" cy="124" rx="13" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(-40 72 124)" />
        
        <ellipse cx="132" cy="124" rx="24" ry="16" fill={leafColor} transform="rotate(40 132 124)" />
        <ellipse cx="128" cy="124" rx="13" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(40 128 124)" />
      </svg>
    </div>
  );
}