// Sage green hexagon with coral center (perfectly symmetrical)
interface FloralThirtyThreeProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyThree({ 
  size = 200, 
  className = "" 
}: FloralThirtyThreeProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer hexagon - sage green (mathematically precise) */}
        <path d="M 100 30 L 150 65 L 150 135 L 100 170 L 50 135 L 50 65 Z" fill="#9CAF88" />
        
        {/* Inner hexagon - coral */}
        <path d="M 100 60 L 130 77.5 L 130 122.5 L 100 140 L 70 122.5 L 70 77.5 Z" fill="#E64A2E" />
        
        {/* Center circle - cream */}
        <circle cx="100" cy="100" r="20" fill="#F5EFE0" />
        
        {/* Six dots at hexagon vertices (perfectly positioned) */}
        <circle cx="100" cy="30" r="6" fill="#1A1A1A" />
        <circle cx="150" cy="65" r="6" fill="#1A1A1A" />
        <circle cx="150" cy="135" r="6" fill="#1A1A1A" />
        <circle cx="100" cy="170" r="6" fill="#1A1A1A" />
        <circle cx="50" cy="135" r="6" fill="#1A1A1A" />
        <circle cx="50" cy="65" r="6" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
