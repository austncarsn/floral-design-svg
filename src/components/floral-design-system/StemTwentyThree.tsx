// Clover-style triple leaf stem (perfectly symmetrical)
interface StemTwentyThreeProps {
  size?: number;
  className?: string;
}

export default function StemTwentyThree({ 
  size = 200, 
  className = "" 
}: StemTwentyThreeProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="80" width="6" height="100" fill={stemColor} rx="3" />
        
        {/* Three clover leaves at top - perfect 120° spacing */}
        {/* Left leaf */}
        <circle cx="70" cy="60" r="24" fill={leafColor} />
        <path d="M 70 60 L 85 75" stroke={stemColor} strokeWidth="3" strokeLinecap="round" />
        
        {/* Top leaf */}
        <circle cx="100" cy="35" r="24" fill={leafColor} />
        <path d="M 100 35 L 100 70" stroke={stemColor} strokeWidth="3" strokeLinecap="round" />
        
        {/* Right leaf */}
        <circle cx="130" cy="60" r="24" fill={leafColor} />
        <path d="M 130 60 L 115 75" stroke={stemColor} strokeWidth="3" strokeLinecap="round" />
        
        {/* Center connection point */}
        <circle cx="100" cy="75" r="10" fill={stemColor} />
        
        {/* Small leaves on stem - symmetrical pairs */}
        <ellipse cx="82" cy="110" rx="12" ry="18" fill={leafColor} transform="rotate(-25 82 110)" />
        <ellipse cx="118" cy="110" rx="12" ry="18" fill={leafColor} transform="rotate(25 118 110)" />
        
        <ellipse cx="78" cy="145" rx="13" ry="20" fill={leafColor} transform="rotate(-30 78 145)" />
        <ellipse cx="122" cy="145" rx="13" ry="20" fill={leafColor} transform="rotate(30 122 145)" />
      </svg>
    </div>
  );
}
