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
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemElevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main drooping stem - centered with graceful curve */}
        <path d="M 100 20 Q 100 80 92 130 Q 88 155 85 180" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Drooping leaves - progressively angled */}
        <ellipse cx="98" cy="75" rx="28" ry="13" fill={leafColor} transform="rotate(-15 98 75)" />
        <ellipse cx="93" cy="110" rx="26" ry="12" fill={leafColor} transform="rotate(-25 93 110)" />
        <ellipse cx="88" cy="145" rx="24" ry="12" fill={leafColor} transform="rotate(-35 88 145)" />
        
        {/* Additional leaves for balance */}
        <ellipse cx="108" cy="55" rx="24" ry="11" fill={leafColor} transform="rotate(10 108 55)" />
        <ellipse cx="103" cy="90" rx="22" ry="11" fill={leafColor} transform="rotate(5 103 90)" />
      </svg>
    </div>
  );
}
