// Succulent rosette on stem (perfectly symmetrical)
interface StemTwentyFiveProps {
  size?: number;
  className?: string;
}

export default function StemTwentyFive({ 
  size = 200, 
  className = "" 
}: StemTwentyFiveProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  const innerColor = "#A8C9B8";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem */}
        <rect x="97" y="100" width="6" height="80" fill={stemColor} rx="3" />
        
        {/* Outer ring of succulent leaves - perfect 60° spacing */}
        <g transform="translate(100, 70)">
          <ellipse cx="0" cy="-28" rx="15" ry="25" fill={leafColor} />
          <ellipse cx="0" cy="-28" rx="15" ry="25" fill={leafColor} transform="rotate(60)" />
          <ellipse cx="0" cy="-28" rx="15" ry="25" fill={leafColor} transform="rotate(120)" />
          <ellipse cx="0" cy="-28" rx="15" ry="25" fill={leafColor} transform="rotate(180)" />
          <ellipse cx="0" cy="-28" rx="15" ry="25" fill={leafColor} transform="rotate(240)" />
          <ellipse cx="0" cy="-28" rx="15" ry="25" fill={leafColor} transform="rotate(300)" />
          
          {/* Inner ring */}
          <ellipse cx="0" cy="-18" rx="10" ry="18" fill={innerColor} />
          <ellipse cx="0" cy="-18" rx="10" ry="18" fill={innerColor} transform="rotate(60)" />
          <ellipse cx="0" cy="-18" rx="10" ry="18" fill={innerColor} transform="rotate(120)" />
          <ellipse cx="0" cy="-18" rx="10" ry="18" fill={innerColor} transform="rotate(180)" />
          <ellipse cx="0" cy="-18" rx="10" ry="18" fill={innerColor} transform="rotate(240)" />
          <ellipse cx="0" cy="-18" rx="10" ry="18" fill={innerColor} transform="rotate(300)" />
          
          {/* Center */}
          <circle cx="0" cy="0" r="12" fill={stemColor} />
        </g>
      </svg>
    </div>
  );
}
