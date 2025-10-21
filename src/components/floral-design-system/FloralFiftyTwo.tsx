// Olive and burnt orange pinwheel (perfectly symmetrical 4-fold)
interface FloralFiftyTwoProps {
  size?: number;
  className?: string;
}

export default function FloralFiftyTwo({ 
  size = 200, 
  className = "" 
}: FloralFiftyTwoProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* Four curved blades in perfect 90° spacing */}
          {/* Blade 1 - olive */}
          <path d="M 0 0 Q -20 -50 0 -70 Q 20 -50 0 0 Z" fill="#7A8450" />
          
          {/* Blade 2 - burnt orange */}
          <path d="M 0 0 Q 50 -20 70 0 Q 50 20 0 0 Z" fill="#D47647" />
          
          {/* Blade 3 - olive */}
          <path d="M 0 0 Q 20 50 0 70 Q -20 50 0 0 Z" fill="#7A8450" />
          
          {/* Blade 4 - burnt orange */}
          <path d="M 0 0 Q -50 20 -70 0 Q -50 -20 0 0 Z" fill="#D47647" />
          
          {/* Center circle - mint green */}
          <circle cx="0" cy="0" r="30" fill="#A8C9B8" />
          
          {/* Inner circle - lavender */}
          <circle cx="0" cy="0" r="18" fill="#B8A9C9" />
          
          {/* Center dot - black */}
          <circle cx="0" cy="0" r="8" fill="#1A1A1A" />
        </g>
      </svg>
    </div>
  );
}
