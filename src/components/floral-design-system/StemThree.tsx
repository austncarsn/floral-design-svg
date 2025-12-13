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
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemThreeProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Curved stem - refined width */}
        <path d="M 100 35 Q 94 82 100 110 Q 106 142 100 170" stroke={stemColor} strokeWidth="8" fill="none" strokeLinecap="round" />
        
        {/* Left leaves with highlights */}
        <ellipse cx="78" cy="88" rx="23" ry="17" fill={leafColor} transform="rotate(-30 78 88)" />
        <ellipse cx="82" cy="88" rx="13" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(-30 82 88)" />
        
        <ellipse cx="83" cy="148" rx="23" ry="17" fill={leafColor} transform="rotate(-30 83 148)" />
        <ellipse cx="87" cy="148" rx="13" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(-30 87 148)" />
        
        {/* Right leaf with highlight */}
        <ellipse cx="122" cy="118" rx="23" ry="17" fill={leafColor} transform="rotate(30 122 118)" />
        <ellipse cx="118" cy="118" rx="13" ry="9" fill="#C4D9C5" opacity="0.5" transform="rotate(30 118 118)" />
      </svg>
    </div>
  );
}