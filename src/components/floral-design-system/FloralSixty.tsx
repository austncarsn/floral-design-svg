// Modern minimalist four-petal cross bloom (perfectly symmetrical)
interface FloralSixtyProps {
  size?: number;
  className?: string;
}

export default function FloralSixty({ 
  size = 200,
  className = ""
}: FloralSixtyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top petal */}
        <ellipse cx="100" cy="50" rx="32" ry="45" fill="#D47647" />
        
        {/* Right petal */}
        <ellipse cx="150" cy="100" rx="45" ry="32" fill="#2F5B6B" />
        
        {/* Bottom petal */}
        <ellipse cx="100" cy="150" rx="32" ry="45" fill="#D47647" />
        
        {/* Left petal */}
        <ellipse cx="50" cy="100" rx="45" ry="32" fill="#2F5B6B" />
        
        {/* Center square rotated to diamond */}
        <rect x="75" y="75" width="50" height="50" fill="#F5EFE0" transform="rotate(45 100 100)" />
        
        {/* Center circle */}
        <circle cx="100" cy="100" r="18" fill="#E64A2E" />
      </svg>
    </div>
  );
}
