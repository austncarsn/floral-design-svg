// Dusty rose cross pattern (perfectly symmetrical)
interface FloralThirtySixProps {
  size?: number;
  className?: string;
}

export default function FloralThirtySix({ 
  size = 200, 
  className = "" 
}: FloralThirtySixProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical bar - dusty rose */}
        <rect x="75" y="30" width="50" height="140" fill="#C9858D" rx="8" />
        
        {/* Horizontal bar - dusty rose */}
        <rect x="30" y="75" width="140" height="50" fill="#C9858D" rx="8" />
        
        {/* Center square - olive green */}
        <rect x="70" y="70" width="60" height="60" fill="#7A8450" rx="4" />
        
        {/* Inner center square - cream */}
        <rect x="85" y="85" width="30" height="30" fill="#F5EFE0" rx="2" />
        
        {/* Four corner circles - deep teal (perfectly positioned) */}
        <circle cx="75" cy="75" r="9" fill="#2F5B6B" />
        <circle cx="125" cy="75" r="9" fill="#2F5B6B" />
        <circle cx="75" cy="125" r="9" fill="#2F5B6B" />
        <circle cx="125" cy="125" r="9" fill="#2F5B6B" />
      </svg>
    </div>
  );
}
