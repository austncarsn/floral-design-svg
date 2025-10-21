// Lavender and rose layered squares (perfectly symmetrical)
interface FloralFortyOneProps {
  size?: number;
  className?: string;
}

export default function FloralFortyOne({ 
  size = 200, 
  className = "" 
}: FloralFortyOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer rotated square - lavender (45° rotation) */}
        <rect x="29.3" y="29.3" width="141.4" height="141.4" fill="#B8A9C9" transform="rotate(45 100 100)" />
        
        {/* Second rotated square - dusty rose */}
        <rect x="50" y="50" width="100" height="100" fill="#C9858D" transform="rotate(45 100 100)" />
        
        {/* Third rotated square - cream */}
        <rect x="70.7" y="70.7" width="58.6" height="58.6" fill="#F5EFE0" transform="rotate(45 100 100)" />
        
        {/* Center circle - olive */}
        <circle cx="100" cy="100" r="18" fill="#7A8450" />
        
        {/* Four corner dots at cardinal points - black */}
        <circle cx="100" cy="40" r="7" fill="#1A1A1A" />
        <circle cx="160" cy="100" r="7" fill="#1A1A1A" />
        <circle cx="100" cy="160" r="7" fill="#1A1A1A" />
        <circle cx="40" cy="100" r="7" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
