// Simple straight stem with two leaves (perfectly symmetrical and centered)
interface StemOneProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemOne({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - perfectly centered */}
        <rect x="97" y="40" width="6" height="140" fill={stemColor} rx="1" />
        
        {/* Left leaf - perfectly symmetrical */}
        <ellipse cx="70" cy="120" rx="28" ry="20" fill={leafColor} transform="rotate(-25 70 120)" />
        
        {/* Right leaf - perfectly symmetrical */}
        <ellipse cx="130" cy="120" rx="28" ry="20" fill={leafColor} transform="rotate(25 130 120)" />
      </svg>
    </div>
  );
}
