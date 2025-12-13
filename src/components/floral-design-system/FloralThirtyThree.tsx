// Sophisticated nested hexagons with sage, coral, and cream sophistication
interface FloralThirtyThreeProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyThree({ 
  size = 200, 
  className = "" 
}: FloralThirtyThreeProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer hexagon - refined sage */}
        <path 
          d="M 100 34 L 146 67 L 146 133 L 100 166 L 54 133 L 54 67 Z" 
          fill="#8A9B7A" 
        />
        
        {/* Mid hexagon highlight */}
        <path 
          d="M 100 48 L 137 73 L 137 127 L 100 152 L 63 127 L 63 73 Z" 
          fill="#9DB5A0" 
          opacity="0.6"
        />
        
        {/* Inner hexagon - refined coral */}
        <path 
          d="M 100 64 L 127 81 L 127 119 L 100 136 L 73 119 L 73 81 Z" 
          fill="#C97A64" 
        />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="21" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="12" fill="#C97A64" />
        <circle cx="100" cy="100" r="5" fill="#8A9B7A" />
        
        {/* Six refined vertex dots */}
        <circle cx="100" cy="34" r="6" fill="#1A1A1A" />
        <circle cx="146" cy="67" r="6" fill="#1A1A1A" />
        <circle cx="146" cy="133" r="6" fill="#1A1A1A" />
        <circle cx="100" cy="166" r="6" fill="#1A1A1A" />
        <circle cx="54" cy="133" r="6" fill="#1A1A1A" />
        <circle cx="54" cy="67" r="6" fill="#1A1A1A" />
      </svg>
    </div>
  );
}