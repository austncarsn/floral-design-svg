// Vine-like spiral stem (perfectly symmetrical and centered)
interface StemTwelveProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemTwelve({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemTwelveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Spiral vine stem - centered and smooth */}
        <path d="M 100 25 Q 85 55 100 85 Q 115 115 100 145 Q 90 165 100 185" stroke={stemColor} strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Leaves at spiral points - perfectly positioned */}
        <ellipse cx="85" cy="55" rx="22" ry="16" fill={leafColor} transform="rotate(-30 85 55)" />
        <ellipse cx="115" cy="115" rx="22" ry="16" fill={leafColor} transform="rotate(30 115 115)" />
        
        {/* Additional small leaves at curves */}
        <ellipse cx="105" cy="75" rx="18" ry="14" fill={leafColor} transform="rotate(20 105 75)" />
        <ellipse cx="90" cy="135" rx="18" ry="14" fill={leafColor} transform="rotate(-20 90 135)" />
        <ellipse cx="103" cy="165" rx="18" ry="14" fill={leafColor} transform="rotate(10 103 165)" />
      </svg>
    </div>
  );
}
