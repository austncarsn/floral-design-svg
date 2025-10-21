// Palm frond style with radiating leaves (perfectly symmetrical)
interface StemNineteenProps {
  size?: number;
  className?: string;
}

export default function StemNineteen({ 
  size = 200, 
  className = "" 
}: StemNineteenProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="70" width="6" height="110" fill={stemColor} rx="3" />
        
        {/* Palm frond - radiating narrow leaves (perfectly symmetrical) */}
        {/* Left side */}
        <rect x="40" y="37" width="60" height="6" rx="3" fill={leafColor} transform="rotate(-45 100 40)" />
        <rect x="38" y="47" width="62" height="6" rx="3" fill={leafColor} transform="rotate(-30 100 50)" />
        <rect x="36" y="57" width="64" height="6" rx="3" fill={leafColor} transform="rotate(-15 100 60)" />
        <rect x="35" y="67" width="65" height="6" rx="3" fill={leafColor} />
        
        {/* Right side - mirror symmetry */}
        <rect x="100" y="37" width="60" height="6" rx="3" fill={leafColor} transform="rotate(45 100 40)" />
        <rect x="100" y="47" width="62" height="6" rx="3" fill={leafColor} transform="rotate(30 100 50)" />
        <rect x="100" y="57" width="64" height="6" rx="3" fill={leafColor} transform="rotate(15 100 60)" />
        <rect x="100" y="67" width="65" height="6" rx="3" fill={leafColor} />
      </svg>
    </div>
  );
}
