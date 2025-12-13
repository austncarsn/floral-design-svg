// Sophisticated hexagon spiral with coral and mint alternating elegance
interface FloralThirtyNineProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyNine({ 
  size = 200, 
  className = "" 
}: FloralThirtyNineProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Six alternating petals - 60° spacing */}
        
        {/* Coral petal 1 */}
        <ellipse cx="100" cy="61" rx="18" ry="30" fill="#D4866F" />
        <ellipse cx="100" cy="65" rx="11" ry="20" fill="#E8A594" opacity="0.6" />
        
        {/* Mint petal 2 */}
        <ellipse cx="133" cy="81" rx="18" ry="30" fill="#9DB5A0" transform="rotate(60 100 100)" />
        <ellipse cx="130" cy="84" rx="11" ry="20" fill="#C4D9CE" opacity="0.6" transform="rotate(60 100 100)" />
        
        {/* Coral petal 3 */}
        <ellipse cx="133" cy="119" rx="18" ry="30" fill="#D4866F" transform="rotate(120 100 100)" />
        <ellipse cx="130" cy="116" rx="11" ry="20" fill="#E8A594" opacity="0.6" transform="rotate(120 100 100)" />
        
        {/* Mint petal 4 */}
        <ellipse cx="100" cy="139" rx="18" ry="30" fill="#9DB5A0" transform="rotate(180 100 100)" />
        <ellipse cx="100" cy="135" rx="11" ry="20" fill="#C4D9CE" opacity="0.6" transform="rotate(180 100 100)" />
        
        {/* Coral petal 5 */}
        <ellipse cx="67" cy="119" rx="18" ry="30" fill="#D4866F" transform="rotate(240 100 100)" />
        <ellipse cx="70" cy="116" rx="11" ry="20" fill="#E8A594" opacity="0.6" transform="rotate(240 100 100)" />
        
        {/* Mint petal 6 */}
        <ellipse cx="67" cy="81" rx="18" ry="30" fill="#9DB5A0" transform="rotate(300 100 100)" />
        <ellipse cx="70" cy="84" rx="11" ry="20" fill="#C4D9CE" opacity="0.6" transform="rotate(300 100 100)" />
        
        {/* Layered golden center */}
        <circle cx="100" cy="100" r="24" fill="#D4A855" />
        <circle cx="100" cy="100" r="16" fill="#C9A15C" />
        <circle cx="100" cy="100" r="10" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="4" fill="#D4A855" />
      </svg>
    </div>
  );
}