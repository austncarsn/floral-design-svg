// Sophisticated chevron mandala with layered terracotta, lavender, sage, and mauve
interface FloralFortyFiveProps {
  size?: number;
  className?: string;
}

export default function FloralFortyFive({ 
  size = 200, 
  className = "" 
}: FloralFortyFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four chevrons with refined layers */}
        
        {/* Top chevron - terracotta */}
        <path d="M 55 78 L 100 40 L 145 78 L 132 78 L 100 53 L 68 78 Z" fill="#C97A64" />
        <path d="M 65 78 L 100 50 L 135 78 L 125 78 L 100 60 L 75 78 Z" fill="#E8A594" opacity="0.6" />
        
        {/* Second chevron - lavender */}
        <path d="M 55 102 L 100 64 L 145 102 L 132 102 L 100 77 L 68 102 Z" fill="#C4ADB8" />
        <path d="M 65 102 L 100 74 L 135 102 L 125 102 L 100 84 L 75 102 Z" fill="#D4C4E0" opacity="0.6" />
        
        {/* Third chevron - sage */}
        <path d="M 55 126 L 100 88 L 145 126 L 132 126 L 100 101 L 68 126 Z" fill="#8A9B7A" />
        <path d="M 65 126 L 100 98 L 135 126 L 125 126 L 100 108 L 75 126 Z" fill="#9DB5A0" opacity="0.6" />
        
        {/* Fourth chevron - mauve */}
        <path d="M 55 150 L 100 112 L 145 150 L 132 150 L 100 125 L 68 150 Z" fill="#C9A5AE" />
        <path d="M 65 150 L 100 122 L 135 150 L 125 150 L 100 132 L 75 150 Z" fill="#D4AEAE" opacity="0.6" />
        
        {/* Layered golden center */}
        <circle cx="100" cy="100" r="22" fill="#D4A855" />
        <circle cx="100" cy="100" r="14" fill="#C9A15C" />
        <circle cx="100" cy="100" r="9" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="4" fill="#D4A855" />
      </svg>
    </div>
  );
}