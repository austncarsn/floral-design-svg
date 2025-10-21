// Tall stem with six leaves (perfectly symmetrical and centered)
interface StemFiveProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemFive({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - perfectly centered */}
        <rect x="97" y="20" width="6" height="165" fill={stemColor} rx="1" />
        
        {/* Leaves - 3 pairs, perfectly symmetrical */}
        {/* Top pair */}
        <ellipse cx="73" cy="60" rx="28" ry="20" fill={leafColor} transform="rotate(-25 73 60)" />
        <ellipse cx="127" cy="60" rx="28" ry="20" fill={leafColor} transform="rotate(25 127 60)" />
        
        {/* Middle pair */}
        <ellipse cx="73" cy="110" rx="28" ry="20" fill={leafColor} transform="rotate(-25 73 110)" />
        <ellipse cx="127" cy="110" rx="28" ry="20" fill={leafColor} transform="rotate(25 127 110)" />
        
        {/* Bottom pair */}
        <ellipse cx="73" cy="160" rx="28" ry="20" fill={leafColor} transform="rotate(-25 73 160)" />
        <ellipse cx="127" cy="160" rx="28" ry="20" fill={leafColor} transform="rotate(25 127 160)" />
      </svg>
    </div>
  );
}
