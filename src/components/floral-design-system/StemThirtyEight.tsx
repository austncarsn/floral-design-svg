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
  stemColor = "#8A9B7A",
  grainColor = "#D4A573"
}: StemThirtyEightProps) {
  const grainHighlight = "#E8C9A0";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for wheat grains */}
          <radialGradient id="grainGrad38" cx="40%" cy="35%">
            <stop offset="0%" stopColor={grainHighlight} stopOpacity="1" />
            <stop offset="70%" stopColor={grainColor} stopOpacity="1" />
            <stop offset="100%" stopColor={grainColor} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        
        {/* Main stem - refined */}
        <rect x="96.5" y="60" width="7" height="123" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="60" width="2" height="123" fill={stemColor} opacity="0.6" />
        
        {/* Wheat grain heads - refined pyramid pattern with gradients */}
        {/* Top single grain */}
        <ellipse cx="100" cy="43" rx="13" ry="19" fill="url(#grainGrad38)" />
        <ellipse cx="103" cy="41" rx="3.5" ry="6" fill={grainHighlight} opacity="0.7" />
        
        {/* Second row - 3 grains */}
        <ellipse cx="83" cy="58" rx="11" ry="17" fill="url(#grainGrad38)" />
        <ellipse cx="86" cy="56" rx="3" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="100" cy="56" rx="12" ry="18" fill="url(#grainGrad38)" />
        <ellipse cx="103" cy="54" rx="3.5" ry="6" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="117" cy="58" rx="11" ry="17" fill="url(#grainGrad38)" />
        <ellipse cx="114" cy="56" rx="3" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        {/* Third row - 5 grains */}
        <ellipse cx="73" cy="71" rx="10" ry="16" fill="url(#grainGrad38)" />
        <ellipse cx="76" cy="69" rx="2.5" ry="5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="86" cy="69" rx="11" ry="17" fill="url(#grainGrad38)" />
        <ellipse cx="89" cy="67" rx="3" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="100" cy="68" rx="12" ry="18" fill="url(#grainGrad38)" />
        <ellipse cx="103" cy="66" rx="3.5" ry="6" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="114" cy="69" rx="11" ry="17" fill="url(#grainGrad38)" />
        <ellipse cx="111" cy="67" rx="3" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="127" cy="71" rx="10" ry="16" fill="url(#grainGrad38)" />
        <ellipse cx="124" cy="69" rx="2.5" ry="5" fill={grainHighlight} opacity="0.7" />
        
        {/* Fourth row - 7 grains */}
        <ellipse cx="66" cy="83" rx="9" ry="15" fill="url(#grainGrad38)" />
        <ellipse cx="69" cy="81" rx="2" ry="4.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="78" cy="81" rx="10" ry="16" fill="url(#grainGrad38)" />
        <ellipse cx="81" cy="79" rx="2.5" ry="5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="89" cy="80" rx="11" ry="17" fill="url(#grainGrad38)" />
        <ellipse cx="92" cy="78" rx="3" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="100" cy="79" rx="12" ry="18" fill="url(#grainGrad38)" />
        <ellipse cx="103" cy="77" rx="3.5" ry="6" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="111" cy="80" rx="11" ry="17" fill="url(#grainGrad38)" />
        <ellipse cx="108" cy="78" rx="3" ry="5.5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="122" cy="81" rx="10" ry="16" fill="url(#grainGrad38)" />
        <ellipse cx="119" cy="79" rx="2.5" ry="5" fill={grainHighlight} opacity="0.7" />
        
        <ellipse cx="134" cy="83" rx="9" ry="15" fill="url(#grainGrad38)" />
        <ellipse cx="131" cy="81" rx="2" ry="4.5" fill={grainHighlight} opacity="0.7" />
        
        {/* Awns (whisker-like extensions) - refined */}
        <line x1="100" y1="28" x2="100" y2="43" stroke={stemColor} strokeWidth="1.5" opacity="0.7" />
        <line x1="83" y1="43" x2="80" y2="53" stroke={stemColor} strokeWidth="1.5" opacity="0.7" />
        <line x1="117" y1="43" x2="120" y2="53" stroke={stemColor} strokeWidth="1.5" opacity="0.7" />
      </svg>
    </div>
  );
}