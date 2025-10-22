// Concentric squares rotated to create star pattern (perfectly symmetrical)
interface FloralFiftyFourProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyFour({ 
  size = 200,
  className = ""
}: FloralFiftyFourProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer rotated square */}
        <rect x="40" y="40" width="120" height="120" fill="#B8A9C9" transform="rotate(45 100 100)" />
        
        {/* Middle rotated square */}
        <rect x="55" y="55" width="90" height="90" fill="#F5EFE0" transform="rotate(45 100 100)" />
        
        {/* Inner rotated square */}
        <rect x="70" y="70" width="60" height="60" fill="#9CAF88" transform="rotate(45 100 100)" />
        
        {/* Center square */}
        <rect x="85" y="85" width="30" height="30" fill="#E64A2E" transform="rotate(45 100 100)" />
      </svg>
    </div>
  );
}
