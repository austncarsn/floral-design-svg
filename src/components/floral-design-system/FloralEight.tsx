// Elegant coral tulip with layered depth and organic curves
interface FloralEightProps {
  size?: number;
  className?: string;
}

export default function FloralEight({ 
  size = 200,
  className = ""
}: FloralEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main tulip petals - sophisticated layers */}
        <ellipse cx="78" cy="92" rx="28" ry="42" fill="#D4866F" transform="rotate(-16 78 92)" />
        <ellipse cx="122" cy="92" rx="28" ry="42" fill="#D4866F" transform="rotate(16 122 92)" />
        <ellipse cx="100" cy="88" rx="26" ry="40" fill="#C97A64" />
        
        {/* Inner highlights */}
        <ellipse cx="78" cy="90" rx="18" ry="28" fill="#E8A594" opacity="0.6" transform="rotate(-16 78 90)" />
        <ellipse cx="122" cy="90" rx="18" ry="28" fill="#E8A594" opacity="0.6" transform="rotate(16 122 90)" />
        <ellipse cx="100" cy="86" rx="16" ry="26" fill="#E8A594" opacity="0.6" />
        
        {/* Base curve with depth */}
        <path d="M 70 115 Q 100 128 130 115" fill="#D4866F" />
        <path d="M 74 115 Q 100 125 126 115" fill="#C97A64" opacity="0.7" />
        
        {/* Center detail line */}
        <ellipse cx="100" cy="98" rx="6" ry="26" fill="#1A1A1A" opacity="0.25" />
        <ellipse cx="100" cy="98" rx="3" ry="20" fill="#3A3A3A" opacity="0.3" />
      </svg>
    </div>
  );
}