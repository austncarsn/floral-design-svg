// Sophisticated octagon pinwheel with coral and teal alternating wedges
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
          <path d="M 0 0 L 0 -58 A 58 58 0 0 1 41 -41 Z" fill="#C97A64" />
          <path d="M 0 0 L 41 -41 A 58 58 0 0 1 58 0 Z" fill="#5A8A8A" />
          <path d="M 0 0 L 58 0 A 58 58 0 0 1 41 41 Z" fill="#C97A64" />
          <path d="M 0 0 L 41 41 A 58 58 0 0 1 0 58 Z" fill="#5A8A8A" />
          <path d="M 0 0 L 0 58 A 58 58 0 0 1 -41 41 Z" fill="#C97A64" />
          <path d="M 0 0 L -41 41 A 58 58 0 0 1 -58 0 Z" fill="#5A8A8A" />
          <path d="M 0 0 L -58 0 A 58 58 0 0 1 -41 -41 Z" fill="#C97A64" />
          <path d="M 0 0 L -41 -41 A 58 58 0 0 1 0 -58 Z" fill="#5A8A8A" />
          
          {/* Layered cream center */}
          <circle cx="0" cy="0" r="26" fill="#E8DCC8" />
          <circle cx="0" cy="0" r="17" fill="#C9B8A8" />
          <circle cx="0" cy="0" r="10" fill="#1A1A1A" />
          <circle cx="0" cy="0" r="4" fill="#C97A64" />
        </g>
      </svg>
    </div>
  );
}