// Sophisticated diamond mandala with teal, coral, sage, and gold harmony
interface FloralThirtyEightProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyEight({ 
  size = 200, 
  className = "" 
}: FloralThirtyEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four outer diamonds - refined colors */}
        <path d="M 100 42 L 123 65 L 100 88 L 77 65 Z" fill="#5A8A8A" />
        <path d="M 158 100 L 135 123 L 112 100 L 135 77 Z" fill="#C97A64" />
        <path d="M 100 158 L 123 135 L 100 112 L 77 135 Z" fill="#8A9B7A" />
        <path d="M 42 100 L 65 123 L 88 100 L 65 77 Z" fill="#D4A855" />
        
        {/* Diamond highlights */}
        <path d="M 100 50 L 115 65 L 100 80 L 85 65 Z" fill="#6B8A9B" opacity="0.6" />
        <path d="M 150 100 L 135 115 L 120 100 L 135 85 Z" fill="#E8A594" opacity="0.6" />
        <path d="M 100 150 L 115 135 L 100 120 L 85 135 Z" fill="#9DB5A0" opacity="0.6" />
        <path d="M 50 100 L 65 115 L 80 100 L 65 85 Z" fill="#D9B56C" opacity="0.6" />
        
        {/* Center diamond - cream */}
        <path d="M 100 76 L 120 96 L 100 116 L 80 96 Z" fill="#E8DCC8" />
        
        {/* Inner center diamond */}
        <path d="M 100 85 L 111 96 L 100 107 L 89 96 Z" fill="#F5EFE0" opacity="0.7" />
        
        {/* Layered center circle */}
        <circle cx="100" cy="96" r="11" fill="#1A1A1A" />
        <circle cx="100" cy="96" r="5" fill="#D4A855" />
      </svg>
    </div>
  );
}