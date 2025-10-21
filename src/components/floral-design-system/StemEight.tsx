// Double curved stem (perfectly symmetrical and centered)
interface StemEightProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemEight({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemEightProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left curved stem - perfectly mirrored */}
        <path d="M 75 25 Q 70 75 75 125 Q 77 150 80 180" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Right curved stem - perfectly mirrored */}
        <path d="M 125 25 Q 130 75 125 125 Q 123 150 120 180" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Left leaves - perfectly positioned */}
        <ellipse cx="62" cy="80" rx="22" ry="16" fill={leafColor} transform="rotate(-30 62 80)" />
        <ellipse cx="67" cy="135" rx="22" ry="16" fill={leafColor} transform="rotate(-30 67 135)" />
        
        {/* Right leaves - perfectly mirrored */}
        <ellipse cx="138" cy="80" rx="22" ry="16" fill={leafColor} transform="rotate(30 138 80)" />
        <ellipse cx="133" cy="135" rx="22" ry="16" fill={leafColor} transform="rotate(30 133 135)" />
      </svg>
    </div>
  );
}
