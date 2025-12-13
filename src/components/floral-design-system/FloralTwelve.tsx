// Sophisticated split-circle yin-yang inspired bloom with elegant balance
interface FloralTwelveProps {
  size?: number;
  className?: string;
}

export default function FloralTwelve({ 
  size = 200,
  className = ""
}: FloralTwelveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main circle - refined teal */}
        <circle cx="100" cy="100" r="48" fill="#5A8A8A" />
        
        {/* Sophisticated split - cream arc */}
        <path d="M 52 100 A 48 48 0 0 0 148 100 Z" fill="#E8DCC8" />
        
        {/* Secondary accent for depth */}
        <path d="M 60 100 A 40 40 0 0 0 140 100 Z" fill="#F5EFE0" opacity="0.6" />
        
        {/* Upper circle detail - refined coral */}
        <circle cx="100" cy="76" r="16" fill="#D4866F" />
        <circle cx="100" cy="76" r="10" fill="#C97A64" />
        <circle cx="100" cy="76" r="5" fill="#E8DCC8" />
        
        {/* Lower circle detail - refined teal */}
        <circle cx="100" cy="124" r="12" fill="#E8DCC8" />
        <circle cx="100" cy="124" r="7" fill="#6B8A9B" />
        <circle cx="100" cy="124" r="3" fill="#5A8A8A" />
      </svg>
    </div>
  );
}