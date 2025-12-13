// Sophisticated geometric mandala with golden diamond and sage accents
interface FloralEighteenProps {
  size?: number;
  className?: string;
}

export default function FloralEighteen({ 
  size = 200,
  className = ""
}: FloralEighteenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main golden diamond */}
        <rect 
          x="76" 
          y="76" 
          width="48" 
          height="48" 
          fill="#D4A855" 
          transform="rotate(45 100 100)" 
        />
        
        {/* Inner diamond layer */}
        <rect 
          x="82" 
          y="82" 
          width="36" 
          height="36" 
          fill="#C9A15C" 
          opacity="0.6"
          transform="rotate(45 100 100)" 
        />
        
        {/* 4 sage circles at cardinal directions */}
        <ellipse cx="100" cy="68" rx="20" ry="18" fill="#8A9B7A" />
        <ellipse cx="132" cy="100" rx="18" ry="20" fill="#8A9B7A" />
        <ellipse cx="100" cy="132" rx="20" ry="18" fill="#8A9B7A" />
        <ellipse cx="68" cy="100" rx="18" ry="20" fill="#8A9B7A" />
        
        {/* Circle highlights */}
        <circle cx="100" cy="68" r="11" fill="#9DB5A0" opacity="0.6" />
        <circle cx="132" cy="100" r="11" fill="#9DB5A0" opacity="0.6" />
        <circle cx="100" cy="132" r="11" fill="#9DB5A0" opacity="0.6" />
        <circle cx="68" cy="100" r="11" fill="#9DB5A0" opacity="0.6" />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="17" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="10" fill="#D4A855" />
        <circle cx="100" cy="100" r="4" fill="#E8DCC8" />
      </svg>
    </div>
  );
}