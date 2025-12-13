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
        {/* Outer rotated square - refined lavender */}
        <rect x="45" y="45" width="110" height="110" fill="#C4ADB8" transform="rotate(45 100 100)" />
        
        {/* Middle rotated square - cream */}
        <rect x="60" y="60" width="80" height="80" fill="#E8DCC8" transform="rotate(45 100 100)" />
        
        {/* Inner rotated square - refined sage */}
        <rect x="73" y="73" width="54" height="54" fill="#8A9B7A" transform="rotate(45 100 100)" />
        
        {/* Center square - refined coral */}
        <rect x="86" y="86" width="28" height="28" fill="#C97A64" transform="rotate(45 100 100)" />
        
        {/* Tiny center dot */}
        <circle cx="100" cy="100" r="5" fill="#1A1A1A" />
      </svg>
    </div>
  );
}