// Teal radiating rays pattern (perfectly symmetrical 12-fold)
interface FloralFortyThreeProps {
  size?: number;
  className?: string;
}

export default function FloralFortyThree({ 
  size = 200, 
  className = "" 
}: FloralFortyThreeProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* 12 radiating triangular rays - perfect 30° spacing */}
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(30)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(60)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(90)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(120)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(150)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(180)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(210)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(240)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(270)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(300)" />
          <path d="M 0 -70 L 12 -30 L -12 -30 Z" fill="#4A7C8C" transform="rotate(330)" />
          
          {/* Center circle - golden yellow */}
          <circle cx="0" cy="0" r="30" fill="#F2A818" />
          
          {/* Inner circle - coral */}
          <circle cx="0" cy="0" r="15" fill="#E64A2E" />
        </g>
      </svg>
    </div>
  );
}
