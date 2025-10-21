// Coral and teal alternating wedges (perfectly symmetrical 8-fold)
interface FloralFortySixProps {
  size?: number;
  className?: string;
}

export default function FloralFortySix({ 
  size = 200, 
  className = "" 
}: FloralFortySixProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* Eight alternating wedges - perfect 45° spacing */}
          <path d="M 0 0 L 0 -70 A 70 70 0 0 1 49.5 -49.5 Z" fill="#E64A2E" />
          <path d="M 0 0 L 49.5 -49.5 A 70 70 0 0 1 70 0 Z" fill="#4A7C8C" />
          <path d="M 0 0 L 70 0 A 70 70 0 0 1 49.5 49.5 Z" fill="#E64A2E" />
          <path d="M 0 0 L 49.5 49.5 A 70 70 0 0 1 0 70 Z" fill="#4A7C8C" />
          <path d="M 0 0 L 0 70 A 70 70 0 0 1 -49.5 49.5 Z" fill="#E64A2E" />
          <path d="M 0 0 L -49.5 49.5 A 70 70 0 0 1 -70 0 Z" fill="#4A7C8C" />
          <path d="M 0 0 L -70 0 A 70 70 0 0 1 -49.5 -49.5 Z" fill="#E64A2E" />
          <path d="M 0 0 L -49.5 -49.5 A 70 70 0 0 1 0 -70 Z" fill="#4A7C8C" />
          
          {/* Center circle - cream */}
          <circle cx="0" cy="0" r="30" fill="#F5EFE0" />
          
          {/* Inner dot - black */}
          <circle cx="0" cy="0" r="12" fill="#1A1A1A" />
        </g>
      </svg>
    </div>
  );
}
