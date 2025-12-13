// Palm frond style with radiating leaves (perfectly symmetrical)
interface StemThirtyFiveProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThirtyFive({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemThirtyFiveProps) {
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main curved stem - refined */}
        <path 
          d="M 100 178 Q 100 98 100 38" 
          stroke={stemColor} 
          strokeWidth="6.5" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 100 178 Q 100 98 100 38" 
          stroke={stemColor} 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          transform="translate(0.5, 0.5)"
        />
        
        {/* Top radiating leaves with highlights */}
        {/* Left side leaves */}
        <ellipse cx="68" cy="48" rx="29" ry="13" fill={leafColor} transform="rotate(-46 68 48)" />
        <ellipse cx="71" cy="46" rx="12" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(-46 71 46)" />
        
        <ellipse cx="58" cy="68" rx="31" ry="13" fill={leafColor} transform="rotate(-36 58 68)" />
        <ellipse cx="61" cy="66" rx="13" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(-36 61 66)" />
        
        <ellipse cx="53" cy="88" rx="33" ry="13" fill={leafColor} transform="rotate(-26 53 88)" />
        <ellipse cx="56" cy="86" rx="14" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(-26 56 86)" />
        
        <ellipse cx="50" cy="108" rx="35" ry="13" fill={leafColor} transform="rotate(-16 50 108)" />
        <ellipse cx="53" cy="106" rx="15" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(-16 53 106)" />
        
        <ellipse cx="48" cy="128" rx="37" ry="13" fill={leafColor} transform="rotate(-6 48 128)" />
        <ellipse cx="51" cy="126" rx="16" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(-6 51 126)" />
        
        {/* Right side leaves - mirror symmetry */}
        <ellipse cx="132" cy="48" rx="29" ry="13" fill={leafColor} transform="rotate(46 132 48)" />
        <ellipse cx="129" cy="46" rx="12" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(46 129 46)" />
        
        <ellipse cx="142" cy="68" rx="31" ry="13" fill={leafColor} transform="rotate(36 142 68)" />
        <ellipse cx="139" cy="66" rx="13" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(36 139 66)" />
        
        <ellipse cx="147" cy="88" rx="33" ry="13" fill={leafColor} transform="rotate(26 147 88)" />
        <ellipse cx="144" cy="86" rx="14" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(26 144 86)" />
        
        <ellipse cx="150" cy="108" rx="35" ry="13" fill={leafColor} transform="rotate(16 150 108)" />
        <ellipse cx="147" cy="106" rx="15" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(16 147 106)" />
        
        <ellipse cx="152" cy="128" rx="37" ry="13" fill={leafColor} transform="rotate(6 152 128)" />
        <ellipse cx="149" cy="126" rx="16" ry="6" fill={highlightColor} opacity="0.5" transform="rotate(6 149 126)" />
      </svg>
    </div>
  );
}