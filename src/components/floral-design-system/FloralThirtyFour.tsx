// Sophisticated 8-pointed star with golden and teal layering
interface FloralThirtyFourProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyFour({ 
  size = 200, 
  className = "" 
}: FloralThirtyFourProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* Eight-pointed star - refined golden */}
          <path 
            d="M 0 -56 L 7.5 -23 L 40 -40 L 23 -7.5 L 56 0 L 23 7.5 L 40 40 L 7.5 23 L 0 56 L -7.5 23 L -40 40 L -23 7.5 L -56 0 L -23 -7.5 L -40 -40 L -7.5 -23 Z" 
            fill="#D4A855" 
          />
          
          {/* Mid star highlight */}
          <path 
            d="M 0 -44 L 6 -18 L 31 -31 L 18 -6 L 44 0 L 18 6 L 31 31 L 6 18 L 0 44 L -6 18 L -31 31 L -18 6 L -44 0 L -18 -6 L -31 -31 L -6 -18 Z" 
            fill="#C9A15C" 
            opacity="0.6"
          />
          
          {/* Inner star - refined teal */}
          <path 
            d="M 0 -32 L 5 -13 L 23 -23 L 13 -5 L 32 0 L 13 5 L 23 23 L 5 13 L 0 32 L -5 13 L -23 23 L -13 5 L -32 0 L -13 -5 L -23 -23 L -5 -13 Z" 
            fill="#5A8A8A" 
          />
          
          {/* Layered center */}
          <circle cx="0" cy="0" r="16" fill="#E8DCC8" />
          <circle cx="0" cy="0" r="9" fill="#D4A855" />
          <circle cx="0" cy="0" r="4" fill="#5A8A8A" />
        </g>
      </svg>
    </div>
  );
}