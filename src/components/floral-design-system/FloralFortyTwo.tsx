// Sophisticated tri-petal mandala with golden and sage 120° harmony
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
        
        {/* Top petal - golden */}
        <ellipse cx="100" cy="64" rx="34" ry="32" fill="#D4A855" />
        <circle cx="100" cy="64" r="18" fill="#C9A15C" opacity="0.6" />
        
        {/* Bottom left petal - sage */}
        <ellipse cx="72" cy="118" rx="34" ry="32" fill="#8A9B7A" />
        <circle cx="72" cy="118" r="18" fill="#9DB5A0" opacity="0.6" />
        
        {/* Bottom right petal - golden */}
        <ellipse cx="128" cy="118" rx="34" ry="32" fill="#D4A855" />
        <circle cx="128" cy="118" r="18" fill="#C9A15C" opacity="0.6" />
        
        {/* Center circle - refined teal */}
        <circle cx="100" cy="100" r="34" fill="#5A8A8A" />
        
        {/* Mid center ring */}
        <circle cx="100" cy="100" r="24" fill="#6B8A9B" opacity="0.6" />
        
        {/* Inner center - cream */}
        <circle cx="100" cy="100" r="18" fill="#E8DCC8" />
        
        {/* Center layered dot */}
        <circle cx="100" cy="100" r="8" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="3" fill="#D4A855" />
      </svg>
    </div>
  );
}