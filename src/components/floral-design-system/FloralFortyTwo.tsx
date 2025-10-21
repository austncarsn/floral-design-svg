// Mustard and sage tri-petal bloom (perfectly symmetrical 120°)
interface FloralFortyTwoProps {
  size?: number;
  className?: string;
}

export default function FloralFortyTwo({ 
  size = 200, 
  className = "" 
}: FloralFortyTwoProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Three petals with perfect 120° spacing */}
        {/* Top petal - mustard gold */}
        <circle cx="100" cy="60" r="35" fill="#D4A62A" />
        
        {/* Bottom left petal - sage green */}
        <circle cx="69.6" cy="120" r="35" fill="#9CAF88" />
        
        {/* Bottom right petal - mustard gold */}
        <circle cx="130.4" cy="120" r="35" fill="#D4A62A" />
        
        {/* Center circle - deep teal */}
        <circle cx="100" cy="100" r="35" fill="#2F5B6B" />
        
        {/* Inner center - cream */}
        <circle cx="100" cy="100" r="18" fill="#F5EFE0" />
        
        {/* Center dot - charcoal */}
        <circle cx="100" cy="100" r="8" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
