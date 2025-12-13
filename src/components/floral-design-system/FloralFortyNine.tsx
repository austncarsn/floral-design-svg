// Sophisticated leaf cluster with terracotta and mint alternating elegance
interface FloralFortyNineProps {
  size?: number;
  className?: string;
}

export default function FloralFortyNine({ 
  size = 200, 
  className = "" 
}: FloralFortyNineProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* Six leaf shapes - perfect 60° spacing, alternating colors */}
          
          {/* Terracotta leaf 1 */}
          <ellipse cx="0" cy="-42" rx="19" ry="33" fill="#C97A64" />
          <ellipse cx="0" cy="-40" rx="12" ry="22" fill="#E8A594" opacity="0.6" />
          
          {/* Mint leaf 2 */}
          <ellipse cx="0" cy="-42" rx="19" ry="33" fill="#9DB5A0" transform="rotate(60)" />
          <ellipse cx="0" cy="-40" rx="12" ry="22" fill="#C4D9CE" opacity="0.6" transform="rotate(60)" />
          
          {/* Terracotta leaf 3 */}
          <ellipse cx="0" cy="-42" rx="19" ry="33" fill="#C97A64" transform="rotate(120)" />
          <ellipse cx="0" cy="-40" rx="12" ry="22" fill="#E8A594" opacity="0.6" transform="rotate(120)" />
          
          {/* Mint leaf 4 */}
          <ellipse cx="0" cy="-42" rx="19" ry="33" fill="#9DB5A0" transform="rotate(180)" />
          <ellipse cx="0" cy="-40" rx="12" ry="22" fill="#C4D9CE" opacity="0.6" transform="rotate(180)" />
          
          {/* Terracotta leaf 5 */}
          <ellipse cx="0" cy="-42" rx="19" ry="33" fill="#C97A64" transform="rotate(240)" />
          <ellipse cx="0" cy="-40" rx="12" ry="22" fill="#E8A594" opacity="0.6" transform="rotate(240)" />
          
          {/* Mint leaf 6 */}
          <ellipse cx="0" cy="-42" rx="19" ry="33" fill="#9DB5A0" transform="rotate(300)" />
          <ellipse cx="0" cy="-40" rx="12" ry="22" fill="#C4D9CE" opacity="0.6" transform="rotate(300)" />
          
          {/* Center hexagon - refined sage */}
          <path 
            d="M 0 -18 L 15.6 -9 L 15.6 9 L 0 18 L -15.6 9 L -15.6 -9 Z" 
            fill="#8A9B7A" 
          />
          
          {/* Center layered circle */}
          <circle cx="0" cy="0" r="12" fill="#E8DCC8" />
          <circle cx="0" cy="0" r="6" fill="#8A9B7A" />
          <circle cx="0" cy="0" r="2" fill="#C97A64" />
        </g>
      </svg>
    </div>
  );
}