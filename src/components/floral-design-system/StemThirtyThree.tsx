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
  stemColor = "#7A8450",
  leafColor = "#9CAF88",
  berryColor = "#C9604A"
}: StemThirtyThreeProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="30" width="6" height="150" fill={stemColor} rx="1" />
        
        {/* Left branch */}
        <rect x="62" y="82" width="4" height="40" fill={stemColor} rx="1" transform="rotate(-35 64 82)" />
        
        {/* Right branch */}
        <rect x="134" y="82" width="4" height="40" fill={stemColor} rx="1" transform="rotate(35 136 82)" />
        
        {/* Left leaf cluster */}
        <ellipse cx="55" cy="95" rx="16" ry="22" fill={leafColor} transform="rotate(-25 55 95)" />
        <ellipse cx="48" cy="110" rx="14" ry="20" fill={leafColor} transform="rotate(-35 48 110)" />
        
        {/* Right leaf cluster */}
        <ellipse cx="145" cy="95" rx="16" ry="22" fill={leafColor} transform="rotate(25 145 95)" />
        <ellipse cx="152" cy="110" rx="14" ry="20" fill={leafColor} transform="rotate(35 152 110)" />
        
        {/* Center leaves */}
        <ellipse cx="70" cy="140" rx="20" ry="28" fill={leafColor} transform="rotate(-20 70 140)" />
        <ellipse cx="130" cy="140" rx="20" ry="28" fill={leafColor} transform="rotate(20 130 140)" />
        
        {/* Berries on branches */}
        <circle cx="50" cy="100" r="5" fill={berryColor} />
        <circle cx="150" cy="100" r="5" fill={berryColor} />
        <circle cx="45" cy="115" r="4" fill={berryColor} />
        <circle cx="155" cy="115" r="4" fill={berryColor} />
      </svg>
    </div>
  );
}
