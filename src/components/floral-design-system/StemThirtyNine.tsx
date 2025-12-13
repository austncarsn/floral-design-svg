// Double helix intertwined stems (perfectly symmetrical)
interface StemThirtyNineProps {
  size?: number;
  className?: string;
  stemColor1?: string;
  stemColor2?: string;
  leafColor?: string;
}

export default function StemThirtyNine({ 
  size = 200,
  className = "",
  stemColor1 = "#8A9B7A",
  stemColor2 = "#9DB5A0",
  leafColor = "#B4C9BC"
}: StemThirtyNineProps) {
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left spiral stem - refined */}
        <path 
          d="M 78 178 Q 58 138, 78 98 Q 98 58, 78 22" 
          stroke={stemColor1} 
          strokeWidth="6.5" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 78 178 Q 58 138, 78 98 Q 98 58, 78 22" 
          stroke={stemColor1} 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          transform="translate(0.5, 0.5)"
        />
        
        {/* Right spiral stem - refined */}
        <path 
          d="M 122 178 Q 142 138, 122 98 Q 102 58, 122 22" 
          stroke={stemColor2} 
          strokeWidth="6.5" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 122 178 Q 142 138, 122 98 Q 102 58, 122 22" 
          stroke={stemColor2} 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          transform="translate(0.5, 0.5)"
        />
        
        {/* Leaves at intersection points - refined with highlights */}
        <ellipse cx="73" cy="148" rx="17" ry="23" fill={leafColor} transform="rotate(-31 73 148)" />
        <ellipse cx="76" cy="143" rx="7" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(-31 76 143)" />
        
        <ellipse cx="127" cy="148" rx="17" ry="23" fill={leafColor} transform="rotate(31 127 148)" />
        <ellipse cx="124" cy="143" rx="7" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(31 124 143)" />
        
        <ellipse cx="73" cy="98" rx="19" ry="25" fill={leafColor} transform="rotate(-26 73 98)" />
        <ellipse cx="76" cy="93" rx="8" ry="12" fill={highlightColor} opacity="0.5" transform="rotate(-26 76 93)" />
        
        <ellipse cx="127" cy="98" rx="19" ry="25" fill={leafColor} transform="rotate(26 127 98)" />
        <ellipse cx="124" cy="93" rx="8" ry="12" fill={highlightColor} opacity="0.5" transform="rotate(26 124 93)" />
        
        <ellipse cx="73" cy="48" rx="17" ry="23" fill={leafColor} transform="rotate(-31 73 48)" />
        <ellipse cx="76" cy="43" rx="7" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(-31 76 43)" />
        
        <ellipse cx="127" cy="48" rx="17" ry="23" fill={leafColor} transform="rotate(31 127 48)" />
        <ellipse cx="124" cy="43" rx="7" ry="11" fill={highlightColor} opacity="0.5" transform="rotate(31 124 43)" />
      </svg>
    </div>
  );
}