// Coral and mint spiral petals (perfectly symmetrical 6-fold)
interface FloralThirtyNineProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyNine({ 
  size = 200, 
  className = "" 
}: FloralThirtyNineProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Six petals with perfect 60° spacing, alternating colors */}
        <ellipse cx="100" cy="50" rx="20" ry="35" fill="#F08080" />
        <ellipse cx="143.3" cy="75" rx="20" ry="35" fill="#A8C9B8" transform="rotate(60 100 100)" />
        <ellipse cx="143.3" cy="125" rx="20" ry="35" fill="#F08080" transform="rotate(120 100 100)" />
        <ellipse cx="100" cy="150" rx="20" ry="35" fill="#A8C9B8" transform="rotate(180 100 100)" />
        <ellipse cx="56.7" cy="125" rx="20" ry="35" fill="#F08080" transform="rotate(240 100 100)" />
        <ellipse cx="56.7" cy="75" rx="20" ry="35" fill="#A8C9B8" transform="rotate(300 100 100)" />
        
        {/* Center circle - golden yellow */}
        <circle cx="100" cy="100" r="25" fill="#F2A818" />
        
        {/* Inner center - charcoal */}
        <circle cx="100" cy="100" r="12" fill="#2D2D2D" />
      </svg>
    </div>
  );
}
