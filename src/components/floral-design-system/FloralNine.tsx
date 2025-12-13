// Modern geometric cross bloom with sophisticated depth and layering
interface FloralNineProps {
  size?: number;
  className?: string;
}

export default function FloralNine({ 
  size = 200,
  className = ""
}: FloralNineProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="circleClip9">
            <circle cx="100" cy="100" r="48" />
          </clipPath>
        </defs>
        
        {/* Base circle with gradient effect */}
        <circle cx="100" cy="100" r="48" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="48" fill="#3A3A3A" opacity="0.2" />
        
        {/* Sophisticated cross pattern with layers */}
        <g clipPath="url(#circleClip9)">
          {/* Main cross */}
          <rect x="91" y="52" width="18" height="96" fill="#F5EFE0" rx="2" />
          <rect x="52" y="91" width="96" height="18" fill="#F5EFE0" rx="2" />
          
          {/* Inner cross highlight */}
          <rect x="95" y="52" width="10" height="96" fill="#E8DCC8" opacity="0.6" />
          <rect x="52" y="95" width="96" height="10" fill="#E8DCC8" opacity="0.6" />
        </g>
        
        {/* Center focal point */}
        <rect x="91" y="91" width="18" height="18" fill="#D4866F" rx="2" />
        <rect x="95" y="95" width="10" height="10" fill="#C97A64" rx="1" />
        
        {/* Refined border */}
        <circle cx="100" cy="100" r="48" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="#E8DCC8" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}