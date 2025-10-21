// Fern-like stem with multiple small leaves (perfectly symmetrical and centered)
interface StemNineProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemNine({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemNineProps) {
  const leafPairs = [50, 70, 90, 110, 130, 150, 170];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - perfectly centered */}
        <rect x="97" y="25" width="6" height="160" fill={stemColor} rx="1" />
        
        {/* Small fern leaves - multiple perfectly symmetrical pairs */}
        {leafPairs.map((y, i) => (
          <g key={i}>
            <ellipse cx="78" cy={y} rx="18" ry="13" fill={leafColor} transform={`rotate(-35 78 ${y})`} />
            <ellipse cx="122" cy={y} rx="18" ry="13" fill={leafColor} transform={`rotate(35 122 ${y})`} />
          </g>
        ))}
      </svg>
    </div>
  );
}
