// Sophisticated pinwheel bloom with elegant mauve and cream segments
interface FloralNineteenProps {
  size?: number;
  className?: string;
}

export default function FloralNineteen({ 
  size = 200,
  className = ""
}: FloralNineteenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base circle with gradient effect */}
        <circle cx="100" cy="100" r="46" fill="#C9A5AE" />
        
        {/* 4 radiating cream segments with refined paths */}
        <path 
          d="M 100 100 L 100 54 A 46 46 0 0 1 132.53 67.47 Z" 
          fill="#E8DCC8" 
        />
        <path 
          d="M 100 100 L 132.53 132.53 A 46 46 0 0 1 100 146 Z" 
          fill="#E8DCC8" 
        />
        <path 
          d="M 100 100 L 67.47 132.53 A 46 46 0 0 1 54 100 Z" 
          fill="#E8DCC8" 
        />
        <path 
          d="M 100 100 L 67.47 67.47 A 46 46 0 0 1 100 54 Z" 
          fill="#E8DCC8" 
        />
        
        {/* Inner cream highlights on segments */}
        <path 
          d="M 100 100 L 100 64 A 36 36 0 0 1 125.46 74.54 Z" 
          fill="#F5EFE0" 
          opacity="0.6"
        />
        <path 
          d="M 100 100 L 125.46 125.46 A 36 36 0 0 1 100 136 Z" 
          fill="#F5EFE0" 
          opacity="0.6"
        />
        <path 
          d="M 100 100 L 74.54 125.46 A 36 36 0 0 1 64 100 Z" 
          fill="#F5EFE0" 
          opacity="0.6"
        />
        <path 
          d="M 100 100 L 74.54 74.54 A 36 36 0 0 1 100 64 Z" 
          fill="#F5EFE0" 
          opacity="0.6"
        />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="19" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="11" fill="#C9A5AE" />
        <circle cx="100" cy="100" r="5" fill="#E8DCC8" />
      </svg>
    </div>
  );
}