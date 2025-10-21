// Terracotta and mint leaf cluster (perfectly symmetrical 6-fold)
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
          {/* Six leaf shapes with perfect 60° spacing, alternating colors */}
          <ellipse cx="0" cy="-50" rx="22" ry="38" fill="#C9604A" />
          <ellipse cx="0" cy="-50" rx="22" ry="38" fill="#A8C9B8" transform="rotate(60)" />
          <ellipse cx="0" cy="-50" rx="22" ry="38" fill="#C9604A" transform="rotate(120)" />
          <ellipse cx="0" cy="-50" rx="22" ry="38" fill="#A8C9B8" transform="rotate(180)" />
          <ellipse cx="0" cy="-50" rx="22" ry="38" fill="#C9604A" transform="rotate(240)" />
          <ellipse cx="0" cy="-50" rx="22" ry="38" fill="#A8C9B8" transform="rotate(300)" />
          
          {/* Center hexagon - olive green */}
          <path d="M 0 -20 L 17.3 -10 L 17.3 10 L 0 20 L -17.3 10 L -17.3 -10 Z" fill="#7A8450" />
          
          {/* Center circle - cream */}
          <circle cx="0" cy="0" r="12" fill="#F5EFE0" />
        </g>
      </svg>
    </div>
  );
}
