// Curved stem with alternating leaves (perfectly symmetrical and centered)
interface StemThreeProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemThree({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemThreeProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Curved stem - centered and smooth */}
        <path d="M 100 30 Q 95 80 100 110 Q 105 140 100 180" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Left leaves */}
        <ellipse cx="80" cy="90" rx="24" ry="18" fill={leafColor} transform="rotate(-30 80 90)" />
        <ellipse cx="85" cy="150" rx="24" ry="18" fill={leafColor} transform="rotate(-30 85 150)" />
        
        {/* Right leaf */}
        <ellipse cx="120" cy="120" rx="24" ry="18" fill={leafColor} transform="rotate(30 120 120)" />
      </svg>
    </div>
  );
}
