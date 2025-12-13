// Willow-style drooping stem (gracefully curved and centered)
interface StemElevenProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemEleven({ 
  size = 200,
  className = "",
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemElevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main drooping stem - refined curve */}
        <path d="M 100 25 Q 100 82 92 132 Q 88 156 86 175" stroke={stemColor} strokeWidth="6" fill="none" strokeLinecap="round" />
        
        {/* Drooping leaves - refined with highlights */}
        <ellipse cx="98" cy="77" rx="26" ry="12" fill={leafColor} transform="rotate(-15 98 77)" />
        <ellipse cx="102" cy="77" rx="14" ry="7" fill="#C4D9C5" opacity="0.5" transform="rotate(-15 102 77)" />
        
        <ellipse cx="93" cy="112" rx="24" ry="11" fill={leafColor} transform="rotate(-25 93 112)" />
        <ellipse cx="97" cy="112" rx="13" ry="6" fill="#C4D9C5" opacity="0.5" transform="rotate(-25 97 112)" />
        
        <ellipse cx="88" cy="146" rx="22" ry="11" fill={leafColor} transform="rotate(-35 88 146)" />
        <ellipse cx="92" cy="146" rx="12" ry="6" fill="#C4D9C5" opacity="0.5" transform="rotate(-35 92 146)" />
        
        {/* Additional leaves - refined */}
        <ellipse cx="108" cy="57" rx="22" ry="10" fill={leafColor} transform="rotate(10 108 57)" />
        <ellipse cx="112" cy="57" rx="12" ry="6" fill="#C4D9C5" opacity="0.5" transform="rotate(10 112 57)" />
        
        <ellipse cx="103" cy="92" rx="20" ry="10" fill={leafColor} transform="rotate(5 103 92)" />
        <ellipse cx="107" cy="92" rx="11" ry="6" fill="#C4D9C5" opacity="0.5" transform="rotate(5 107 92)" />
      </svg>
    </div>
  );
}