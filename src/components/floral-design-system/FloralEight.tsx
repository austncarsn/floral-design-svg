// Coral tulip-style flower (perfectly symmetrical)
interface FloralEightProps {
  size?: number;
  className?: string;
}

export default function FloralEight({ 
  size = 200,
  className = ""
}: FloralEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tulip petals - 3 overlapping ellipses */}
        <ellipse cx="78" cy="90" rx="28" ry="42" fill="#E64A2E" transform="rotate(-15 78 90)" />
        <ellipse cx="122" cy="90" rx="28" ry="42" fill="#E64A2E" transform="rotate(15 122 90)" />
        <ellipse cx="100" cy="85" rx="26" ry="40" fill="#E8663F" />
        
        {/* Base curve - symmetrical */}
        <path d="M 70 110 Q 100 125 130 110" fill="#E64A2E" />
        
        {/* Center line detail */}
        <ellipse cx="100" cy="95" rx="8" ry="25" fill="#1A1A1A" opacity="0.3" />
      </svg>
    </div>
  );
}
