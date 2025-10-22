// Wheat stalk with grain heads (perfectly symmetrical)
interface StemThirtyEightProps {
  size?: number;
  className?: string;
  stemColor?: string;
  grainColor?: string;
}

export default function StemThirtyEight({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  grainColor = "#D4A62A"
}: StemThirtyEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="60" width="6" height="120" fill={stemColor} rx="1" />
        
        {/* Wheat grain heads - arranged in pyramid pattern */}
        {/* Top single grain */}
        <ellipse cx="100" cy="45" rx="12" ry="18" fill={grainColor} />
        
        {/* Second row - 3 grains */}
        <ellipse cx="85" cy="60" rx="10" ry="16" fill={grainColor} />
        <ellipse cx="100" cy="58" rx="11" ry="17" fill={grainColor} />
        <ellipse cx="115" cy="60" rx="10" ry="16" fill={grainColor} />
        
        {/* Third row - 5 grains */}
        <ellipse cx="75" cy="73" rx="9" ry="15" fill={grainColor} />
        <ellipse cx="88" cy="71" rx="10" ry="16" fill={grainColor} />
        <ellipse cx="100" cy="70" rx="11" ry="17" fill={grainColor} />
        <ellipse cx="112" cy="71" rx="10" ry="16" fill={grainColor} />
        <ellipse cx="125" cy="73" rx="9" ry="15" fill={grainColor} />
        
        {/* Fourth row - 7 grains */}
        <ellipse cx="68" cy="85" rx="8" ry="14" fill={grainColor} />
        <ellipse cx="80" cy="83" rx="9" ry="15" fill={grainColor} />
        <ellipse cx="91" cy="82" rx="10" ry="16" fill={grainColor} />
        <ellipse cx="100" cy="81" rx="11" ry="17" fill={grainColor} />
        <ellipse cx="109" cy="82" rx="10" ry="16" fill={grainColor} />
        <ellipse cx="120" cy="83" rx="9" ry="15" fill={grainColor} />
        <ellipse cx="132" cy="85" rx="8" ry="14" fill={grainColor} />
        
        {/* Awns (whisker-like extensions) */}
        <line x1="100" y1="30" x2="100" y2="45" stroke={stemColor} strokeWidth="1" />
        <line x1="85" y1="45" x2="82" y2="55" stroke={stemColor} strokeWidth="1" />
        <line x1="115" y1="45" x2="118" y2="55" stroke={stemColor} strokeWidth="1" />
      </svg>
    </div>
  );
}
