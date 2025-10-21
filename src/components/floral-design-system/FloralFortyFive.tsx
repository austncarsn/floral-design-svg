// Burnt orange chevron pattern (perfectly symmetrical)
interface FloralFortyFiveProps {
  size?: number;
  className?: string;
}

export default function FloralFortyFive({ 
  size = 200, 
  className = "" 
}: FloralFortyFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four perfectly symmetrical chevrons */}
        {/* Top chevron - burnt orange */}
        <path d="M 50 75 L 100 35 L 150 75 L 135 75 L 100 50 L 65 75 Z" fill="#D47647" />
        
        {/* Second chevron - lavender */}
        <path d="M 50 100 L 100 60 L 150 100 L 135 100 L 100 75 L 65 100 Z" fill="#B8A9C9" />
        
        {/* Third chevron - sage green */}
        <path d="M 50 125 L 100 85 L 150 125 L 135 125 L 100 100 L 65 125 Z" fill="#9CAF88" />
        
        {/* Fourth chevron - dusty rose */}
        <path d="M 50 150 L 100 110 L 150 150 L 135 150 L 100 125 L 65 150 Z" fill="#C9858D" />
        
        {/* Center circle - golden yellow */}
        <circle cx="100" cy="100" r="22" fill="#F2A818" />
        
        {/* Inner circle - charcoal */}
        <circle cx="100" cy="100" r="11" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
