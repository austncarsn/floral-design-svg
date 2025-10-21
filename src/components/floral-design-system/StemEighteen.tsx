// Eucalyptus-style with circular leaves (perfectly symmetrical)
interface StemEighteenProps {
  size?: number;
  className?: string;
}

export default function StemEighteen({ 
  size = 200, 
  className = "" 
}: StemEighteenProps) {
  const stemColor = "#7A8450";
  const leafColor = "#9CAF88";
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem */}
        <rect x="97" y="30" width="6" height="150" fill={stemColor} rx="3" />
        
        {/* Circular eucalyptus leaves - perfectly symmetrical pairs */}
        <circle cx="75" cy="50" r="18" fill={leafColor} />
        <circle cx="125" cy="50" r="18" fill={leafColor} />
        
        <circle cx="70" cy="85" r="20" fill={leafColor} />
        <circle cx="130" cy="85" r="20" fill={leafColor} />
        
        <circle cx="68" cy="120" r="22" fill={leafColor} />
        <circle cx="132" cy="120" r="22" fill={leafColor} />
        
        <circle cx="72" cy="155" r="20" fill={leafColor} />
        <circle cx="128" cy="155" r="20" fill={leafColor} />
      </svg>
    </div>
  );
}
