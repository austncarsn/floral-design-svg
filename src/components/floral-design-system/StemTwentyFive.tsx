// Succulent rosette on stem (perfectly symmetrical)
interface StemTwentyFiveProps {
  size?: number;
  className?: string;
}

export default function StemTwentyFive({ 
  size = 200, 
  className = "" 
}: StemTwentyFiveProps) {
  const stemColor = "#8A9B7A";
  const leafColor = "#9DB5A0";
  const innerColor = "#B4C9BC";
  const highlightColor = "#C4D9C5";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradients for succulent depth */}
          <radialGradient id="leafGrad25" cx="40%" cy="30%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.9" />
            <stop offset="60%" stopColor={leafColor} stopOpacity="1" />
            <stop offset="100%" stopColor={leafColor} stopOpacity="0.85" />
          </radialGradient>
          <radialGradient id="innerGrad25" cx="40%" cy="30%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="1" />
            <stop offset="60%" stopColor={innerColor} stopOpacity="1" />
            <stop offset="100%" stopColor={innerColor} stopOpacity="0.9" />
          </radialGradient>
        </defs>
        
        {/* Stem - refined */}
        <rect x="96.5" y="100" width="7" height="83" fill={stemColor} rx="3.5" />
        <rect x="97.5" y="100" width="2" height="83" fill={stemColor} opacity="0.6" />
        
        {/* Outer ring of succulent leaves - perfect 60° spacing with gradients */}
        <g transform="translate(100, 70)">
          <ellipse cx="0" cy="-30" rx="16" ry="26" fill="url(#leafGrad25)" />
          <ellipse cx="0" cy="-30" rx="16" ry="26" fill="url(#leafGrad25)" transform="rotate(60)" />
          <ellipse cx="0" cy="-30" rx="16" ry="26" fill="url(#leafGrad25)" transform="rotate(120)" />
          <ellipse cx="0" cy="-30" rx="16" ry="26" fill="url(#leafGrad25)" transform="rotate(180)" />
          <ellipse cx="0" cy="-30" rx="16" ry="26" fill="url(#leafGrad25)" transform="rotate(240)" />
          <ellipse cx="0" cy="-30" rx="16" ry="26" fill="url(#leafGrad25)" transform="rotate(300)" />
          
          {/* Inner ring with refined gradient */}
          <ellipse cx="0" cy="-19" rx="11" ry="19" fill="url(#innerGrad25)" />
          <ellipse cx="0" cy="-19" rx="11" ry="19" fill="url(#innerGrad25)" transform="rotate(60)" />
          <ellipse cx="0" cy="-19" rx="11" ry="19" fill="url(#innerGrad25)" transform="rotate(120)" />
          <ellipse cx="0" cy="-19" rx="11" ry="19" fill="url(#innerGrad25)" transform="rotate(180)" />
          <ellipse cx="0" cy="-19" rx="11" ry="19" fill="url(#innerGrad25)" transform="rotate(240)" />
          <ellipse cx="0" cy="-19" rx="11" ry="19" fill="url(#innerGrad25)" transform="rotate(300)" />
          
          {/* Center with gradient */}
          <circle cx="0" cy="0" r="13" fill={stemColor} />
          <circle cx="0" cy="0" r="8" fill={stemColor} opacity="0.7" />
          <circle cx="-2" cy="-2" r="4" fill={stemColor} opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}