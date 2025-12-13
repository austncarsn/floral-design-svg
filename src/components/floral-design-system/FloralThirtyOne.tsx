// Sophisticated octagon daisy with teal petals and golden center
interface FloralThirtyOneProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyOne({ 
  size = 200,
  className = ""
}: FloralThirtyOneProps) {
  const centerX = 100;
  const centerY = 100;
  const phi = 1.618;
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 8 teal petals - 45° intervals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * 40;
          const cy = centerY + Math.sin(rad) * 40;
          return (
            <g key={i}>
              {/* Main petal */}
              <ellipse 
                cx={cx} 
                cy={cy} 
                rx="27" 
                ry="25" 
                fill="#5A8A8A"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              {/* Highlight */}
              <circle 
                cx={cx} 
                cy={cy} 
                r="14" 
                fill="#6B8A9B" 
                opacity="0.6"
              />
            </g>
          );
        })}
        
        {/* Layered golden center */}
        <circle cx="100" cy="100" r="32" fill="#D4A855" />
        <circle cx="100" cy="100" r="23" fill="#C9A15C" />
        <circle cx="100" cy="100" r="17" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="8" fill="#D4A855" />
      </svg>
    </div>
  );
}