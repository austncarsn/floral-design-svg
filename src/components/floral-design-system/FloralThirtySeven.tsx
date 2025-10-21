// Burnt orange four-petal flower (perfectly symmetrical)
interface FloralThirtySevenProps {
  size?: number;
  className?: string;
}

export default function FloralThirtySeven({ 
  size = 200, 
  className = "" 
}: FloralThirtySevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four perfectly symmetrical petals - burnt orange */}
        <ellipse cx="100" cy="55" rx="28" ry="45" fill="#D47647" />
        <ellipse cx="145" cy="100" rx="45" ry="28" fill="#D47647" />
        <ellipse cx="100" cy="145" rx="28" ry="45" fill="#D47647" />
        <ellipse cx="55" cy="100" rx="45" ry="28" fill="#D47647" />
        
        {/* Center circle - lavender */}
        <circle cx="100" cy="100" r="35" fill="#B8A9C9" />
        
        {/* Inner center circle - charcoal */}
        <circle cx="100" cy="100" r="18" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
