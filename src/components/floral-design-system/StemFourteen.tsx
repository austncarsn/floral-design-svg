// Wheat-style stem with grain heads (perfectly symmetrical)
interface StemFourteenProps {
  size?: number;
  className?: string;
}

export default function StemFourteen({ 
  size = 200, 
  className = "" 
}: StemFourteenProps) {
  const stemColor = "#8A9B7A";
  const grainColor = "#D4A573";
  const grainHighlight = "#E8C9A0";
  const leafColor = "#9DB5A0";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for grain depth */}
          <radialGradient id="grainGrad14" cx="40%" cy="35%">
            <stop offset="0%" stopColor={grainHighlight} stopOpacity="1" />
            <stop offset="70%" stopColor={grainColor} stopOpacity="1" />
            <stop offset="100%" stopColor={grainColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Main stem - refined with subtle gradient */}
        <rect x="96.5" y="65" width="7" height="118" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="65" width="2" height="118" fill={stemColor} opacity="0.6" />
        
        {/* Wheat grain heads - refined with highlights and rhythm */}
        <ellipse cx="100" cy="32" rx="11" ry="16" fill="url(#grainGrad14)" />
        <ellipse cx="103" cy="30" rx="3" ry="5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="100" cy="48" rx="12" ry="17" fill="url(#grainGrad14)" />
        <ellipse cx="103" cy="46" rx="3.5" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="100" cy="65" rx="13" ry="18" fill="url(#grainGrad14)" />
        <ellipse cx="103" cy="63" rx="4" ry="6" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="100" cy="82" rx="12" ry="17" fill="url(#grainGrad14)" />
        <ellipse cx="103" cy="80" rx="3.5" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="100" cy="98" rx="11" ry="16" fill="url(#grainGrad14)" />
        <ellipse cx="103" cy="96" rx="3" ry="5" fill={grainHighlight} opacity="0.7" />
        
        {/* Perfectly symmetrical base leaves - refined with highlights */}
        <ellipse cx="74" cy="138" rx="22" ry="12" fill={leafColor} transform="rotate(-32 74 138)" />
        <ellipse cx="77" cy="137" rx="12" ry="7" fill={highlightColor} opacity="0.5" transform="rotate(-32 77 137)" />
        
        <ellipse cx="126" cy="138" rx="22" ry="12" fill={leafColor} transform="rotate(32 126 138)" />
        <ellipse cx="123" cy="137" rx="12" ry="7" fill={highlightColor} opacity="0.5" transform="rotate(32 123 137)" />
        
        <ellipse cx="68" cy="160" rx="24" ry="13" fill={leafColor} transform="rotate(-36 68 160)" />
        <ellipse cx="71" cy="159" rx="13" ry="7" fill={highlightColor} opacity="0.5" transform="rotate(-36 71 159)" />
        
        <ellipse cx="132" cy="160" rx="24" ry="13" fill={leafColor} transform="rotate(36 132 160)" />
        <ellipse cx="129" cy="159" rx="13" ry="7" fill={highlightColor} opacity="0.5" transform="rotate(36 129 159)" />
      </svg>
    </div>
  );
}