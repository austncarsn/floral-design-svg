// Elegant botanical stem with organic curve and refined leaf details
interface StemOneProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemOne({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#7A9B8E"
}: StemOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem with subtle organic curve */}
        <path 
          d="M 100 40 Q 98 90 100 140 Q 101 165 100 180" 
          stroke={stemColor} 
          strokeWidth="7" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Left leaf - sophisticated shape with depth */}
        <ellipse 
          cx="68" 
          cy="115" 
          rx="32" 
          ry="22" 
          fill={leafColor} 
          opacity="0.9"
          transform="rotate(-28 68 115)" 
        />
        <ellipse 
          cx="68" 
          cy="115" 
          rx="24" 
          ry="16" 
          fill="#9DB5A0" 
          opacity="0.5"
          transform="rotate(-28 68 115)" 
        />
        
        {/* Right leaf - mirror sophistication */}
        <ellipse 
          cx="132" 
          cy="115" 
          rx="32" 
          ry="22" 
          fill={leafColor} 
          opacity="0.9"
          transform="rotate(28 132 115)" 
        />
        <ellipse 
          cx="132" 
          cy="115" 
          rx="24" 
          ry="16" 
          fill="#9DB5A0" 
          opacity="0.5"
          transform="rotate(28 132 115)" 
        />
        
        {/* Leaf veins - subtle detail */}
        <line x1="82" y1="115" x2="68" y2="115" stroke="#8A9B7A" strokeWidth="1.5" opacity="0.4" />
        <line x1="118" y1="115" x2="132" y2="115" stroke="#8A9B7A" strokeWidth="1.5" opacity="0.4" />
      </svg>
    </div>
  );
}