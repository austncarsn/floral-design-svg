// Golden yellow 8-pointed star (perfectly symmetrical)
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
        {/* Eight-pointed star - golden yellow (mathematically precise 45° rotation) */}
        <g transform="translate(100, 100)">
          <path d="M 0 -60 L 8 -25 L 42 -42 L 25 -8 L 60 0 L 25 8 L 42 42 L 8 25 L 0 60 L -8 25 L -42 42 L -25 8 L -60 0 L -25 -8 L -42 -42 L -8 -25 Z" fill="#F2A818" />
          
          {/* Inner star - deep teal */}
          <path d="M 0 -35 L 5 -15 L 25 -25 L 15 -5 L 35 0 L 15 5 L 25 25 L 5 15 L 0 35 L -5 15 L -25 25 L -15 5 L -35 0 L -15 -5 L -25 -25 L -5 -15 Z" fill="#2F5B6B" />
          
          {/* Center circle - cream */}
          <circle cx="0" cy="0" r="15" fill="#F5EFE0" />
        </g>
      </svg>
    </div>
  );
}
