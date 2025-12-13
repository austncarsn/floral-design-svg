// Olive and burnt orange pinwheel (perfectly symmetrical 4-fold)
interface FloralFiftyTwoProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyTwo({ 
  size = 200, 
  className = "" 
}: FloralFiftyTwoProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* Four curved blades in perfect 90° spacing */}
          {/* Blade 1 - refined sage/olive */}
          <path d="M 0 0 Q -18 -46 0 -62 Q 18 -46 0 0 Z" fill="#8A9B7A" />
          <path d="M 0 0 Q -12 -38 0 -50 Q 12 -38 0 0 Z" fill="#9DB5A0" opacity="0.6" />
          
          {/* Blade 2 - refined coral */}
          <path d="M 0 0 Q 46 -18 62 0 Q 46 18 0 0 Z" fill="#C97A64" />
          <path d="M 0 0 Q 38 -12 50 0 Q 38 12 0 0 Z" fill="#E8A594" opacity="0.6" />
          
          {/* Blade 3 - refined sage/olive */}
          <path d="M 0 0 Q 18 46 0 62 Q -18 46 0 0 Z" fill="#8A9B7A" />
          <path d="M 0 0 Q 12 38 0 50 Q -12 38 0 0 Z" fill="#9DB5A0" opacity="0.6" />
          
          {/* Blade 4 - refined coral */}
          <path d="M 0 0 Q -46 18 -62 0 Q -46 -18 0 0 Z" fill="#C97A64" />
          <path d="M 0 0 Q -38 12 -50 0 Q -38 -12 0 0 Z" fill="#E8A594" opacity="0.6" />
          
          {/* Center circle - refined sage */}
          <circle cx="0" cy="0" r="26" fill="#9DB5A0" />
          
          {/* Inner circle - refined lavender */}
          <circle cx="0" cy="0" r="17" fill="#C4ADB8" />
          
          {/* Center dot - refined dark */}
          <circle cx="0" cy="0" r="7" fill="#1A1A1A" />
        </g>
      </svg>
    </div>
  );
}