// Sophisticated cross mandala with mauve, sage, and teal geometry
interface FloralThirtySixProps {
  size?: number;
  className?: string;
}

export default function FloralThirtySix({ 
  size = 200, 
  className = "" 
}: FloralThirtySixProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical bar - refined mauve */}
        <rect x="80" y="40" width="40" height="120" fill="#C9A5AE" rx="8" />
        
        {/* Vertical highlight */}
        <rect x="87" y="50" width="26" height="100" fill="#D4AEAE" opacity="0.6" rx="6" />
        
        {/* Horizontal bar - refined mauve */}
        <rect x="40" y="80" width="120" height="40" fill="#C9A5AE" rx="8" />
        
        {/* Horizontal highlight */}
        <rect x="50" y="87" width="100" height="26" fill="#D4AEAE" opacity="0.6" rx="6" />
        
        {/* Center square - refined sage */}
        <rect x="75" y="75" width="50" height="50" fill="#8A9B7A" rx="4" />
        
        {/* Inner sage highlight */}
        <rect x="82" y="82" width="36" height="36" fill="#9DB5A0" opacity="0.6" rx="3" />
        
        {/* Inner center square - cream */}
        <rect x="89" y="89" width="22" height="22" fill="#E8DCC8" rx="2" />
        
        {/* Tiny center */}
        <rect x="96" y="96" width="8" height="8" fill="#8A9B7A" rx="1" />
        
        {/* Four corner circles - refined teal */}
        <circle cx="80" cy="80" r="9" fill="#5A8A8A" />
        <circle cx="120" cy="80" r="9" fill="#5A8A8A" />
        <circle cx="80" cy="120" r="9" fill="#5A8A8A" />
        <circle cx="120" cy="120" r="9" fill="#5A8A8A" />
        
        {/* Corner highlights */}
        <circle cx="80" cy="80" r="5" fill="#6B8A9B" opacity="0.6" />
        <circle cx="120" cy="80" r="5" fill="#6B8A9B" opacity="0.6" />
        <circle cx="80" cy="120" r="5" fill="#6B8A9B" opacity="0.6" />
        <circle cx="120" cy="120" r="5" fill="#6B8A9B" opacity="0.6" />
      </svg>
    </div>
  );
}