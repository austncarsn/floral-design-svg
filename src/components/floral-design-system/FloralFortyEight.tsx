// Deep teal lotus petals (perfectly symmetrical 8-fold)
interface FloralFortyEightProps {
  size?: number;
  className?: string;
}

export default function FloralFortyEight({ 
  size = 200, 
  className = "" 
}: FloralFortyEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100, 100)">
          {/* 8 petals with perfect 45° spacing - deep teal */}
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" />
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" transform="rotate(45)" />
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" transform="rotate(90)" />
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" transform="rotate(135)" />
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" transform="rotate(180)" />
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" transform="rotate(225)" />
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" transform="rotate(270)" />
          <ellipse cx="0" cy="-50" rx="16" ry="40" fill="#2F5B6B" transform="rotate(315)" />
          
          {/* Center circle - golden yellow */}
          <circle cx="0" cy="0" r="28" fill="#F2A818" />
          
          {/* Inner center - coral */}
          <circle cx="0" cy="0" r="14" fill="#E64A2E" />
        </g>
      </svg>
    </div>
  );
}
