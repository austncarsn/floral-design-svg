// Lavender and coral wave pattern (perfectly symmetrical 4-fold)
interface FloralFiftyOneProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyOne({ 
  size = 200, 
  className = "" 
}: FloralFiftyOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four curved petal shapes in perfect symmetry */}
        {/* Top petal - refined lavender */}
        <path d="M 100 46 Q 74 74 100 100 Q 126 74 100 46 Z" fill="#C4ADB8" />
        <path d="M 100 54 Q 82 82 100 100 Q 118 82 100 54 Z" fill="#D4C4E0" opacity="0.6" />
        
        {/* Right petal - refined coral */}
        <path d="M 154 100 Q 126 74 100 100 Q 126 126 154 100 Z" fill="#D4866F" />
        <path d="M 146 100 Q 118 82 100 100 Q 118 118 146 100 Z" fill="#E8A594" opacity="0.6" />
        
        {/* Bottom petal - refined lavender */}
        <path d="M 100 154 Q 126 126 100 100 Q 74 126 100 154 Z" fill="#C4ADB8" />
        <path d="M 100 146 Q 118 118 100 100 Q 82 118 100 146 Z" fill="#D4C4E0" opacity="0.6" />
        
        {/* Left petal - refined coral */}
        <path d="M 46 100 Q 74 126 100 100 Q 74 74 46 100 Z" fill="#D4866F" />
        <path d="M 54 100 Q 82 118 100 100 Q 82 82 54 100 Z" fill="#E8A594" opacity="0.6" />
        
        {/* Center square - refined sage */}
        <rect x="82" y="82" width="36" height="36" fill="#8A9B7A" transform="rotate(45 100 100)" />
        
        {/* Center circle - cream */}
        <circle cx="100" cy="100" r="14" fill="#E8DCC8" />
        
        {/* Center dot - refined dark */}
        <circle cx="100" cy="100" r="5" fill="#1A1A1A" />
      </svg>
    </div>
  );
}