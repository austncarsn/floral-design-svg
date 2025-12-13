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
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemNineProps) {
  const leafPairs = [52, 72, 92, 112, 132, 152, 170];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - refined */}
        <rect x="96" y="30" width="8" height="155" fill={stemColor} rx="2" />
        
        {/* Small fern leaves - refined pairs with highlights */}
        {leafPairs.map((y, i) => (
          <g key={i}>
            <ellipse cx="76" cy={y} rx="17" ry="12" fill={leafColor} transform={`rotate(-35 76 ${y})`} />
            <ellipse cx="80" cy={y} rx="10" ry="7" fill="#C4D9C5" opacity="0.5" transform={`rotate(-35 80 ${y})`} />
            <ellipse cx="124" cy={y} rx="17" ry="12" fill={leafColor} transform={`rotate(35 124 ${y})`} />
            <ellipse cx="120" cy={y} rx="10" ry="7" fill="#C4D9C5" opacity="0.5" transform={`rotate(35 120 ${y})`} />
          </g>
        ))}
      </svg>
    </div>
  );
}