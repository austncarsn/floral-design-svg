// Sophisticated geometric mandala with sage diamond and terracotta accents
interface FloralTwentyNineProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyNine({ 
  size = 200,
  className = ""
}: FloralTwentyNineProps) {
  const phi = 1.618;
  const sideDist = 31.82;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main rotated square base - sage green */}
        <rect 
          x="62" 
          y="62" 
          width="76" 
          height="76" 
          fill="#8A9B7A" 
          transform="rotate(45 100 100)" 
        />
        
        {/* Inner diamond layer for depth */}
        <rect 
          x="70" 
          y="70" 
          width="60" 
          height="60" 
          fill="#9DB5A0" 
          opacity="0.6"
          transform="rotate(45 100 100)" 
        />
        
        {/* 4 terracotta corner circles - cardinal directions */}
        <ellipse cx="100" cy="60" rx="22" ry="20" fill="#C97A64" />
        <ellipse cx="140" cy="100" rx="20" ry="22" fill="#C97A64" />
        <ellipse cx="100" cy="140" rx="22" ry="20" fill="#C97A64" />
        <ellipse cx="60" cy="100" rx="20" ry="22" fill="#C97A64" />
        
        {/* Terracotta highlights */}
        <circle cx="100" cy="60" r="11" fill="#E8A594" opacity="0.6" />
        <circle cx="140" cy="100" r="11" fill="#E8A594" opacity="0.6" />
        <circle cx="100" cy="140" r="11" fill="#E8A594" opacity="0.6" />
        <circle cx="60" cy="100" r="11" fill="#E8A594" opacity="0.6" />
        
        {/* 4 cream side circles - diagonal accents */}
        <circle cx={100 + sideDist} cy={100 - sideDist} r="16" fill="#E8DCC8" />
        <circle cx={100 + sideDist} cy={100 + sideDist} r="16" fill="#E8DCC8" />
        <circle cx={100 - sideDist} cy={100 + sideDist} r="16" fill="#E8DCC8" />
        <circle cx={100 - sideDist} cy={100 - sideDist} r="16" fill="#E8DCC8" />
        
        {/* Subtle highlights */}
        <circle cx={100 + sideDist} cy={100 - sideDist} r="9" fill="#F5EFE0" opacity="0.6" />
        <circle cx={100 + sideDist} cy={100 + sideDist} r="9" fill="#F5EFE0" opacity="0.6" />
        <circle cx={100 - sideDist} cy={100 + sideDist} r="9" fill="#F5EFE0" opacity="0.6" />
        <circle cx={100 - sideDist} cy={100 - sideDist} r="9" fill="#F5EFE0" opacity="0.6" />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="19" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="11" fill="#C97A64" />
        <circle cx="100" cy="100" r="5" fill="#E8DCC8" />
      </svg>
    </div>
  );
}