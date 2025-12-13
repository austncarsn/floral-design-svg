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
        {/* Top petal - refined coral */}
        <ellipse cx="100" cy="62" rx="25" ry="35" fill="#C97A64" />
        <ellipse cx="100" cy="66" rx="16" ry="24" fill="#E8A594" opacity="0.6" />
        
        {/* Right petal - refined teal */}
        <ellipse cx="138" cy="100" rx="35" ry="25" fill="#5A8A8A" />
        <ellipse cx="134" cy="100" rx="24" ry="16" fill="#6B8A9B" opacity="0.6" />
        
        {/* Bottom petal - refined coral */}
        <ellipse cx="100" cy="138" rx="25" ry="35" fill="#C97A64" />
        <ellipse cx="100" cy="134" rx="16" ry="24" fill="#E8A594" opacity="0.6" />
        
        {/* Left petal - refined teal */}
        <ellipse cx="62" cy="100" rx="35" ry="25" fill="#5A8A8A" />
        <ellipse cx="66" cy="100" rx="24" ry="16" fill="#6B8A9B" opacity="0.6" />
        
        {/* Center square rotated to diamond */}
        <rect x="80" y="80" width="40" height="40" fill="#E8DCC8" transform="rotate(45 100 100)" />
        
        {/* Center circles */}
        <circle cx="100" cy="100" r="15" fill="#C97A64" />
        <circle cx="100" cy="100" r="6" fill="#1A1A1A" />
      </svg>
    </div>
  );
}