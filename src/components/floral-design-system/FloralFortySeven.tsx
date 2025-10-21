// Sage and mustard overlapping circles (perfectly symmetrical 4-fold)
interface FloralFortySevenProps {
  size?: number;
  className?: string;
}

export default function FloralFortySeven({ 
  size = 200, 
  className = "" 
}: FloralFortySevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four overlapping circles in perfect cardinal positions */}
        {/* Top circle - sage green */}
        <circle cx="100" cy="70" r="40" fill="#9CAF88" />
        
        {/* Right circle - mustard gold */}
        <circle cx="130" cy="100" r="40" fill="#D4A62A" />
        
        {/* Bottom circle - sage green */}
        <circle cx="100" cy="130" r="40" fill="#9CAF88" />
        
        {/* Left circle - mustard gold */}
        <circle cx="70" cy="100" r="40" fill="#D4A62A" />
        
        {/* Center circle - lavender */}
        <circle cx="100" cy="100" r="35" fill="#B8A9C9" />
        
        {/* Inner center - cream */}
        <circle cx="100" cy="100" r="18" fill="#F5EFE0" />
        
        {/* Center dot - charcoal */}
        <circle cx="100" cy="100" r="7" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
