// Sophisticated clover with sage and golden alternating petals
interface FloralFortySevenProps {
  size?: number;
  className?: string;
}

export default function FloralFortySeven({ 
  size = 200, 
  className = "" 
}: FloralFortySevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four overlapping circles - cardinal positions */}
        
        {/* Top circle - sage */}
        <ellipse cx="100" cy="75" rx="33" ry="31" fill="#8A9B7A" />
        <circle cx="100" cy="75" r="18" fill="#9DB5A0" opacity="0.6" />
        
        {/* Right circle - golden */}
        <ellipse cx="125" cy="100" rx="31" ry="33" fill="#D4A855" />
        <circle cx="125" cy="100" r="18" fill="#C9A15C" opacity="0.6" />
        
        {/* Bottom circle - sage */}
        <ellipse cx="100" cy="125" rx="33" ry="31" fill="#8A9B7A" />
        <circle cx="100" cy="125" r="18" fill="#9DB5A0" opacity="0.6" />
        
        {/* Left circle - golden */}
        <ellipse cx="75" cy="100" rx="31" ry="33" fill="#D4A855" />
        <circle cx="75" cy="100" r="18" fill="#C9A15C" opacity="0.6" />
        
        {/* Layered lavender center */}
        <circle cx="100" cy="100" r="32" fill="#C4ADB8" />
        <circle cx="100" cy="100" r="22" fill="#D4C4E0" opacity="0.6" />
        
        {/* Inner cream center */}
        <circle cx="100" cy="100" r="17" fill="#E8DCC8" />
        
        {/* Center dot */}
        <circle cx="100" cy="100" r="7" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="3" fill="#C4ADB8" />
      </svg>
    </div>
  );
}