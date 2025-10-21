// Lavender and coral wave pattern (perfectly symmetrical 4-fold)
interface FloralFiftyOneProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyOne({ 
  size = 200, 
  className = "" 
}: FloralFiftyOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four curved petal shapes in perfect symmetry */}
        {/* Top petal - lavender */}
        <path d="M 100 40 Q 70 70 100 100 Q 130 70 100 40 Z" fill="#B8A9C9" />
        
        {/* Right petal - coral */}
        <path d="M 160 100 Q 130 70 100 100 Q 130 130 160 100 Z" fill="#F08080" />
        
        {/* Bottom petal - lavender */}
        <path d="M 100 160 Q 130 130 100 100 Q 70 130 100 160 Z" fill="#B8A9C9" />
        
        {/* Left petal - coral */}
        <path d="M 40 100 Q 70 130 100 100 Q 70 70 40 100 Z" fill="#F08080" />
        
        {/* Center square - sage green */}
        <rect x="80" y="80" width="40" height="40" fill="#9CAF88" transform="rotate(45 100 100)" />
        
        {/* Center circle - cream */}
        <circle cx="100" cy="100" r="15" fill="#F5EFE0" />
        
        {/* Center dot - charcoal */}
        <circle cx="100" cy="100" r="6" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
