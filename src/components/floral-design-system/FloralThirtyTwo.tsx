// Sophisticated multi-color celebration mandala with harmonious palette
interface FloralThirtyTwoProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyTwo({ 
  size = 200,
  className = ""
}: FloralThirtyTwoProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  const colors = [
    "#D4866F", // refined coral
    "#5A8A8A", // refined teal
    "#D4A855", // refined gold
    "#7A9B8E", // refined sage
    "#C4ADB8", // refined lavender
    "#C9A5AE", // refined mauve
    "#C9A15C", // refined mustard
    "#E8A594", // soft coral glow
    "#8A9B7A", // refined olive
    "#C97A64"  // refined terracotta
  ];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 10 refined petals - 36° intervals */}
        {Array.from({ length: 10 }, (_, i) => i * 36).map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 40;
          const cy = centerY + Math.sin(rad) * 40;
          const highlightColor = i % 2 === 0 ? "#E8DCC8" : "#C9B8A8";
          return (
            <g key={i}>
              {/* Main petal */}
              <ellipse 
                cx={cx} 
                cy={cy} 
                rx="22" 
                ry="20" 
                fill={colors[i]}
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Subtle highlight */}
              <circle 
                cx={cx} 
                cy={cy} 
                r="10" 
                fill={highlightColor} 
                opacity="0.6"
              />
            </g>
          );
        })}
        
        {/* Layered center */}
        <circle cx="100" cy="100" r="26" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="17" fill="#C9B8A8" />
        <circle cx="100" cy="100" r="13" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="6" fill="#D4A855" />
      </svg>
    </div>
  );
}