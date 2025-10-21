// Wheat-style stem with grain heads (perfectly symmetrical)
interface StemFourteenProps {
  size?: number;
  className?: string;
}

export default function StemFourteen({ 
  size = 200, 
  className = "" 
}: StemFourteenProps) {
  const stemColor = "#7A8450";
  const grainColor = "#D4A62A";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="60" width="6" height="120" fill={stemColor} rx="3" />
        
        {/* Wheat heads - perfectly stacked ovals */}
        <ellipse cx="100" cy="30" rx="10" ry="15" fill={grainColor} />
        <ellipse cx="100" cy="45" rx="11" ry="16" fill={grainColor} />
        <ellipse cx="100" cy="60" rx="12" ry="17" fill={grainColor} />
        <ellipse cx="100" cy="75" rx="11" ry="16" fill={grainColor} />
        <ellipse cx="100" cy="90" rx="10" ry="15" fill={grainColor} />
        
        {/* Perfectly symmetrical base leaves */}
        <ellipse cx="75" cy="140" rx="20" ry="12" fill={leafColor} transform="rotate(-30 75 140)" />
        <ellipse cx="125" cy="140" rx="20" ry="12" fill={leafColor} transform="rotate(30 125 140)" />
        <ellipse cx="70" cy="160" rx="22" ry="13" fill={leafColor} transform="rotate(-35 70 160)" />
        <ellipse cx="130" cy="160" rx="22" ry="13" fill={leafColor} transform="rotate(35 130 160)" />
      </svg>
    </div>
  );
}
