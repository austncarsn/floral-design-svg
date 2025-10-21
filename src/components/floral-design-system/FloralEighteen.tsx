// Olive green and golden yellow geometric flower (perfectly symmetrical)
interface FloralEighteenProps {
  size?: number;
  className?: string;
}

export default function FloralEighteen({ 
  size = 200,
  className = ""
}: FloralEighteenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Square rotated 45 degrees */}
        <rect x="75" y="75" width="50" height="50" fill="#F2A818" transform="rotate(45 100 100)" />
        
        {/* 4 circles at cardinal directions */}
        <circle cx="100" cy="65" r="20" fill="#7A8450" />
        <circle cx="135" cy="100" r="20" fill="#7A8450" />
        <circle cx="100" cy="135" r="20" fill="#7A8450" />
        <circle cx="65" cy="100" r="20" fill="#7A8450" />
        
        {/* Center circle */}
        <circle cx="100" cy="100" r="16" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
