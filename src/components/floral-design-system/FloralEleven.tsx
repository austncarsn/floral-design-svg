// Sophisticated radiating star mandala with golden ratio precision
interface FloralElevenProps {
  size?: number;
  className?: string;
}

export default function FloralEleven({ 
  size = 200,
  className = ""
}: FloralElevenProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring - 12 elongated petals with alternating colors */}
        {Array.from({ length: 12 }, (_, i) => i * 30).map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const distance = 40;
          const cx = centerX + Math.cos(rad) * distance;
          const cy = centerY + Math.sin(rad) * distance;
          const isEven = i % 2 === 0;
          
          return (
            <g key={i}>
              {/* Main petal */}
              <ellipse
                cx={cx}
                cy={cy}
                rx={isEven ? "14" : "12"}
                ry={isEven ? "28" : "24"}
                fill={isEven ? "#D4866F" : "#5A8A8A"}
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Subtle highlight */}
              <ellipse
                cx={cx}
                cy={cy}
                rx="8"
                ry="16"
                fill={isEven ? "#E8A594" : "#6B8A9B"}
                opacity="0.6"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            </g>
          );
        })}
        
        {/* Center base with layered complexity */}
        <circle cx="100" cy="100" r="26" fill="#E8DCC8" />
        <circle cx="100" cy="100" r="18" fill="#C9B8A8" />
        <circle cx="100" cy="100" r="11" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="5" fill="#D4866F" />
      </svg>
    </div>
  );
}