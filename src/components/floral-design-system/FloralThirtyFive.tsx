// Sophisticated nested squares with lavender and cream rotation
interface FloralThirtyFiveProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyFive({ 
  size = 200,
  className = ""
}: FloralThirtyFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer lavender square */}
        <rect x="50" y="50" width="100" height="100" fill="#C4ADB8" rx="4" />
        
        {/* Subtle highlight */}
        <rect x="56" y="56" width="88" height="88" fill="#D4C4E0" opacity="0.6" rx="3" />
        
        {/* Rotated cream square */}
        <rect x="66" y="66" width="68" height="68" fill="#E8DCC8" transform="rotate(15 100 100)" rx="3" />
        
        {/* Subtle highlight */}
        <rect x="72" y="72" width="56" height="56" fill="#F5EFE0" opacity="0.6" transform="rotate(15 100 100)" rx="2" />
        
        {/* Inner rotated lavender square */}
        <rect x="80" y="80" width="40" height="40" fill="#C4ADB8" transform="rotate(30 100 100)" rx="2" />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="18" fill="#D4866F" />
        <circle cx="100" cy="100" r="11" fill="#C97A64" />
        <circle cx="100" cy="100" r="5" fill="#E8DCC8" />
      </svg>
    </div>
  );
}