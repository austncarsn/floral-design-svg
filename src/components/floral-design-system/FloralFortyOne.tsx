// Sophisticated nested diamond mandala with lavender, mauve, and sage
interface FloralFortyOneProps {
  size?: number;
  className?: string;
}

export default function FloralFortyOne({ 
  size = 200, 
  className = "" 
}: FloralFortyOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer rotated square - refined lavender */}
        <rect 
          x="42" 
          y="42" 
          width="116" 
          height="116" 
          fill="#C4ADB8" 
          transform="rotate(45 100 100)" 
        />
        
        {/* Outer square highlight */}
        <rect 
          x="50" 
          y="50" 
          width="100" 
          height="100" 
          fill="#D4C4E0" 
          opacity="0.5"
          transform="rotate(45 100 100)" 
        />
        
        {/* Second rotated square - refined mauve */}
        <rect 
          x="60" 
          y="60" 
          width="80" 
          height="80" 
          fill="#C9A5AE" 
          transform="rotate(45 100 100)" 
        />
        
        {/* Third rotated square - cream */}
        <rect 
          x="75" 
          y="75" 
          width="50" 
          height="50" 
          fill="#E8DCC8" 
          transform="rotate(45 100 100)" 
        />
        
        {/* Layered center - sage */}
        <circle cx="100" cy="100" r="18" fill="#8A9B7A" />
        <circle cx="100" cy="100" r="10" fill="#9DB5A0" />
        <circle cx="100" cy="100" r="4" fill="#E8DCC8" />
        
        {/* Four corner dots - cardinal points */}
        <circle cx="100" cy="52" r="7" fill="#1A1A1A" />
        <circle cx="148" cy="100" r="7" fill="#1A1A1A" />
        <circle cx="100" cy="148" r="7" fill="#1A1A1A" />
        <circle cx="52" cy="100" r="7" fill="#1A1A1A" />
      </svg>
    </div>
  );
}