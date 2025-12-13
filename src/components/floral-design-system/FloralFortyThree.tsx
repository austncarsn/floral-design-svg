// Sophisticated 12-ray starburst with teal rays and golden center
interface FloralFortyThreeProps {
  size?: number;
  className?: string;
}

export default function FloralFortyThree({ 
  size = 200, 
  className = "" 
}: FloralFortyThreeProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* 12 radiating triangular rays - perfect 30° spacing */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              {/* Main ray */}
              <path d="M 0 -58 L 11 -28 L -11 -28 Z" fill="#5A8A8A" />
              {/* Inner highlight */}
              <path d="M 0 -50 L 7 -30 L -7 -30 Z" fill="#6B8A9B" opacity="0.6" />
            </g>
          ))}
          
          {/* Layered golden center */}
          <circle cx="0" cy="0" r="28" fill="#D4A855" />
          <circle cx="0" cy="0" r="20" fill="#C9A15C" />
          
          {/* Inner coral center */}
          <circle cx="0" cy="0" r="14" fill="#C97A64" />
          <circle cx="0" cy="0" r="7" fill="#E8A594" />
          <circle cx="0" cy="0" r="3" fill="#D4A855" />
        </g>
      </svg>
    </div>
  );
}