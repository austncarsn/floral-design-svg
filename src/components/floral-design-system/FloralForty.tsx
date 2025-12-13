// Sophisticated nested pentagons with sage, cream, and teal sophistication
interface FloralFortyProps {
  size?: number;
  className?: string;
}

export default function FloralForty({ 
  size = 200, 
  className = "" 
}: FloralFortyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer pentagon - refined sage */}
        <path 
          d="M 100 42 L 150 88 L 132 145 L 68 145 L 50 88 Z" 
          fill="#8A9B7A" 
        />
        
        {/* Mid pentagon highlight */}
        <path 
          d="M 100 54 L 142 92 L 127 138 L 73 138 L 58 92 Z" 
          fill="#9DB5A0" 
          opacity="0.5"
        />
        
        {/* Inner pentagon - cream */}
        <path 
          d="M 100 66 L 134 96 L 122 130 L 78 130 L 66 96 Z" 
          fill="#E8DCC8" 
        />
        
        {/* Five terracotta vertex dots */}
        <circle cx="100" cy="42" r="8" fill="#C97A64" />
        <circle cx="150" cy="88" r="8" fill="#C97A64" />
        <circle cx="132" cy="145" r="8" fill="#C97A64" />
        <circle cx="68" cy="145" r="8" fill="#C97A64" />
        <circle cx="50" cy="88" r="8" fill="#C97A64" />
        
        {/* Center pentagon - refined teal */}
        <path 
          d="M 100 88 L 112 97 L 106 113 L 94 113 L 88 97 Z" 
          fill="#5A8A8A" 
        />
        
        {/* Center circle */}
        <circle cx="100" cy="101" r="7" fill="#E8DCC8" />
        <circle cx="100" cy="101" r="3" fill="#8A9B7A" />
      </svg>
    </div>
  );
}