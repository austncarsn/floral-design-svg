// Triple branching stem with small berries (perfectly symmetrical)
interface StemThirtyThreeProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
  berryColor?: string;
}

export default function StemThirtyThree({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0",
  berryColor = "#C9765A"
}: StemThirtyThreeProps) {
  const highlightColor = "#C4D9C5";
  const berryHighlight = "#D99682";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradients for depth */}
          <radialGradient id="berryGrad33" cx="35%" cy="35%">
            <stop offset="0%" stopColor={berryHighlight} stopOpacity="1" />
            <stop offset="60%" stopColor={berryColor} stopOpacity="1" />
            <stop offset="100%" stopColor={berryColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="30" width="7" height="153" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="30" width="2" height="153" fill={stemColor} opacity="0.6" />
        
        {/* Left branch - refined */}
        <rect x="60" y="80" width="5" height="42" fill={stemColor} rx="2.5" transform="rotate(-36 62 80)" />
        <rect x="61" y="80" width="2" height="42" fill={stemColor} opacity="0.5" transform="rotate(-36 62 80)" />
        
        {/* Right branch - refined */}
        <rect x="135" y="80" width="5" height="42" fill={stemColor} rx="2.5" transform="rotate(36 137 80)" />
        <rect x="136" y="80" width="2" height="42" fill={stemColor} opacity="0.5" transform="rotate(36 137 80)" />
        
        {/* Left leaf cluster - refined with highlights */}
        <ellipse cx="53" cy="93" rx="17" ry="23" fill={leafColor} transform="rotate(-26 53 93)" />
        <ellipse cx="56" cy="88" rx="7" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(-26 56 88)" />
        
        <ellipse cx="46" cy="108" rx="15" ry="21" fill={leafColor} transform="rotate(-36 46 108)" />
        <ellipse cx="49" cy="103" rx="6" ry="10" fill={highlightColor} opacity="0.5" transform="rotate(-36 49 103)" />
        
        {/* Right leaf cluster - refined with highlights */}
        <ellipse cx="147" cy="93" rx="17" ry="23" fill={leafColor} transform="rotate(26 147 93)" />
        <ellipse cx="144" cy="88" rx="7" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(26 144 88)" />
        
        <ellipse cx="154" cy="108" rx="15" ry="21" fill={leafColor} transform="rotate(36 154 108)" />
        <ellipse cx="151" cy="103" rx="6" ry="10" fill={highlightColor} opacity="0.5" transform="rotate(36 151 103)" />
        
        {/* Center leaves - refined with highlights */}
        <ellipse cx="68" cy="138" rx="21" ry="29" fill={leafColor} transform="rotate(-21 68 138)" />
        <ellipse cx="71" cy="132" rx="9" ry="13" fill={highlightColor} opacity="0.5" transform="rotate(-21 71 132)" />
        
        <ellipse cx="132" cy="138" rx="21" ry="29" fill={leafColor} transform="rotate(21 132 138)" />
        <ellipse cx="129" cy="132" rx="9" ry="13" fill={highlightColor} opacity="0.5" transform="rotate(21 129 132)" />
        
        {/* Berries on branches - refined with highlights */}
        <circle cx="48" cy="98" r="6" fill="url(#berryGrad33)" />
        <circle cx="50" cy="96" r="2" fill={berryHighlight} opacity="0.8" />
        
        <circle cx="152" cy="98" r="6" fill="url(#berryGrad33)" />
        <circle cx="150" cy="96" r="2" fill={berryHighlight} opacity="0.8" />
        
        <circle cx="43" cy="113" r="5" fill="url(#berryGrad33)" />
        <circle cx="45" cy="111" r="1.5" fill={berryHighlight} opacity="0.8" />
        
        <circle cx="157" cy="113" r="5" fill="url(#berryGrad33)" />
        <circle cx="155" cy="111" r="1.5" fill={berryHighlight} opacity="0.8" />
      </svg>
    </div>
  );
}