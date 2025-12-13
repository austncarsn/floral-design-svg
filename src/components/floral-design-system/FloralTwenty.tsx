// Elegant teal and terracotta tulip with sophisticated layering
interface FloralTwentyProps {
  size?: number;
  className?: string;
}

export default function FloralTwenty({ 
  size = 200,
  className = ""
}: FloralTwentyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main outer petals - teal */}
        <ellipse cx="77" cy="96" rx="26" ry="40" fill="#5A8A8A" transform="rotate(-20 77 96)" />
        <ellipse cx="123" cy="96" rx="26" ry="40" fill="#5A8A8A" transform="rotate(20 123 96)" />
        
        {/* Inner highlights on outer petals */}
        <ellipse cx="77" cy="94" rx="17" ry="26" fill="#6B8A9B" opacity="0.6" transform="rotate(-20 77 94)" />
        <ellipse cx="123" cy="94" rx="17" ry="26" fill="#6B8A9B" opacity="0.6" transform="rotate(20 123 94)" />
        
        {/* Center petal - terracotta */}
        <ellipse cx="100" cy="92" rx="24" ry="38" fill="#C97A64" />
        
        {/* Center petal highlight */}
        <ellipse cx="100" cy="90" rx="15" ry="24" fill="#E8A594" opacity="0.6" />
        
        {/* Base curve with depth */}
        <path d="M 70 118 Q 100 132 130 118" fill="#5A8A8A" />
        <path d="M 74 118 Q 100 129 126 118" fill="#6B8A9B" opacity="0.6" />
        
        {/* Center detail line */}
        <ellipse cx="100" cy="102" rx="5" ry="22" fill="#1A1A1A" opacity="0.2" />
        
        {/* Subtle stem connection */}
        <rect x="97" y="128" width="6" height="10" fill="#5A8A8A" opacity="0.4" rx="1" />
      </svg>
    </div>
  );
}