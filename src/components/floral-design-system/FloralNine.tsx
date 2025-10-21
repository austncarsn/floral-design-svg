// Black and cream striped flower - modern geometric (perfectly symmetrical)
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
          <clipPath id="circleClip">
            <circle cx="100" cy="100" r="50" />
          </clipPath>
        </defs>
        
        {/* Base circle */}
        <circle cx="100" cy="100" r="50" fill="#1A1A1A" />
        
        {/* Cream cross pattern */}
        <g clipPath="url(#circleClip)">
          <rect x="92" y="50" width="16" height="100" fill="#F5EFE0" />
          <rect x="50" y="92" width="100" height="16" fill="#F5EFE0" />
        </g>
        
        {/* Border */}
        <circle cx="100" cy="100" r="50" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      </svg>
    </div>
  );
}
