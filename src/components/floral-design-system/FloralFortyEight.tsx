// Sophisticated lotus with teal petals and golden center
interface FloralFortyEightProps {
  size?: number;
  className?: string;
}

export default function FloralFortyEight({ 
  size = 200, 
  className = "" 
}: FloralFortyEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* 8 teal petals - perfect 45° spacing */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              {/* Main petal */}
              <ellipse cx="0" cy="-42" rx="14" ry="34" fill="#5A8A8A" />
              {/* Inner highlight */}
              <ellipse cx="0" cy="-40" rx="9" ry="24" fill="#6B8A9B" opacity="0.6" />
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