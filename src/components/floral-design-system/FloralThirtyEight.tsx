// Teal diamond grid pattern (perfectly symmetrical)
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
        {/* Four outer diamonds in a perfect grid */}
        {/* Top diamond - teal blue */}
        <path d="M 100 30 L 130 60 L 100 90 L 70 60 Z" fill="#4A7C8C" />
        
        {/* Right diamond - coral red */}
        <path d="M 170 100 L 140 130 L 110 100 L 140 70 Z" fill="#E64A2E" />
        
        {/* Bottom diamond - sage green */}
        <path d="M 100 170 L 130 140 L 100 110 L 70 140 Z" fill="#9CAF88" />
        
        {/* Left diamond - mustard gold */}
        <path d="M 30 100 L 60 130 L 90 100 L 60 70 Z" fill="#D4A62A" />
        
        {/* Center diamond - cream */}
        <path d="M 100 70 L 125 95 L 100 120 L 75 95 Z" fill="#F5EFE0" />
        
        {/* Center circle - black */}
        <circle cx="100" cy="95" r="10" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
