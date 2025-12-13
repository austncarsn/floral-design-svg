// Sophisticated 16-ray golden starburst with layered depth and refinement
interface FloralFiftyProps {
  size?: number;
  className?: string;
}

export default function FloralFifty({ 
  size = 200, 
  className = "" 
}: FloralFiftyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* 16-pointed outer star - golden yellow (22.5° intervals) */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              {/* Main ray */}
              <path d="M 0 -58 L 7 -24 L -7 -24 Z" fill="#D4A855" />
              {/* Inner highlight */}
              <path d="M 0 -50 L 4 -26 L -4 -26 Z" fill="#C9A15C" opacity="0.6" />
            </g>
          ))}
          
          {/* Layered rings */}
          {/* Middle ring - refined teal */}
          <circle cx="0" cy="0" r="38" fill="#5A8A8A" />
          
          {/* Middle ring highlight */}
          <circle cx="0" cy="0" r="32" fill="#6B8A9B" opacity="0.5" />
          
          {/* Inner ring - refined mauve */}
          <circle cx="0" cy="0" r="26" fill="#C9A5AE" />
          
          {/* Inner ring highlight */}
          <circle cx="0" cy="0" r="20" fill="#D4AEAE" opacity="0.6" />
          
          {/* Center - cream */}
          <circle cx="0" cy="0" r="14" fill="#E8DCC8" />
          
          {/* Center dot */}
          <circle cx="0" cy="0" r="6" fill="#1A1A1A" />
          <circle cx="0" cy="0" r="2" fill="#D4A855" />
        </g>
      </svg>
    </div>
  );
}