// Sophisticated rotating square mandala with layered depth and rhythm
interface FloralThirteenProps {
  size?: number;
  className?: string;
}

export default function FloralThirteen({ 
  size = 200,
  className = ""
}: FloralThirteenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer rotated square - refined mustard */}
        <rect x="48" y="48" width="104" height="104" fill="#D4A855" transform="rotate(15 100 100)" rx="4" />
        
        {/* Subtle highlight */}
        <rect x="54" y="54" width="92" height="92" fill="#C9A15C" opacity="0.6" transform="rotate(15 100 100)" rx="3" />
        
        {/* Middle rotated square - refined teal */}
        <rect x="62" y="62" width="76" height="76" fill="#5A8A8A" transform="rotate(30 100 100)" rx="3" />
        
        {/* Subtle highlight */}
        <rect x="67" y="67" width="66" height="66" fill="#6B8A9B" opacity="0.6" transform="rotate(30 100 100)" rx="2" />
        
        {/* Inner rotated square - cream */}
        <rect x="78" y="78" width="44" height="44" fill="#E8DCC8" transform="rotate(45 100 100)" rx="2" />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="20" fill="#C97A64" />
        <circle cx="100" cy="100" r="13" fill="#D4866F" />
        <circle cx="100" cy="100" r="7" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="3" fill="#1A1A1A" />
      </svg>
    </div>
  );
}