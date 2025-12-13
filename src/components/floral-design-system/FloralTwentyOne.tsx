// Sophisticated modernist cross with lavender and cream quadrants
interface FloralTwentyOneProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyOne({ 
  size = 200,
  className = ""
}: FloralTwentyOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base circle - lavender */}
        <circle cx="100" cy="100" r="48" fill="#C4ADB8" />
        
        {/* Alternating cream quadrants */}
        <path d="M 100 52 A 48 48 0 0 1 148 100 L 100 100 Z" fill="#E8DCC8" />
        <path d="M 100 148 A 48 48 0 0 1 52 100 L 100 100 Z" fill="#E8DCC8" />
        
        {/* Subtle highlights on cream quadrants */}
        <path d="M 100 60 A 40 40 0 0 1 140 100 L 100 100 Z" fill="#F5EFE0" opacity="0.6" />
        <path d="M 100 140 A 40 40 0 0 1 60 100 L 100 100 Z" fill="#F5EFE0" opacity="0.6" />
        
        {/* Subtle highlights on lavender quadrants */}
        <path d="M 52 100 A 48 48 0 0 1 100 52 L 100 100 Z" fill="#D4C4E0" opacity="0.6" />
        <path d="M 148 100 A 48 48 0 0 1 100 148 L 100 100 Z" fill="#D4C4E0" opacity="0.6" />
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="20" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="13" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="6" fill="#C4ADB8" />
      </svg>
    </div>
  );
}