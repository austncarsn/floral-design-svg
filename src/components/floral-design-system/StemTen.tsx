// Bamboo-style segmented stem (perfectly symmetrical and centered)
interface StemTenProps {
  size?: number;
  className?: string;
  stemColor?: string;
  leafColor?: string;
}

export default function StemTen({ 
  size = 200,
  className = "",
  stemColor = "#7A8450",
  leafColor = "#9CAF88"
}: StemTenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem segments - perfectly centered */}
        <rect x="94" y="30" width="12" height="42" fill={stemColor} rx="2" />
        <rect x="94" y="78" width="12" height="42" fill={stemColor} rx="2" />
        <rect x="94" y="126" width="12" height="42" fill={stemColor} rx="2" />
        
        {/* Segment joints - centered */}
        <rect x="88" y="70" width="24" height="6" fill={stemColor} rx="1" />
        <rect x="88" y="118" width="24" height="6" fill={stemColor} rx="1" />
        
        {/* Leaves at joints - perfectly symmetrical */}
        <ellipse cx="70" cy="73" rx="26" ry="17" fill={leafColor} transform="rotate(-40 70 73)" />
        <ellipse cx="130" cy="73" rx="26" ry="17" fill={leafColor} transform="rotate(40 130 73)" />
        
        <ellipse cx="70" cy="121" rx="26" ry="17" fill={leafColor} transform="rotate(-40 70 121)" />
        <ellipse cx="130" cy="121" rx="26" ry="17" fill={leafColor} transform="rotate(40 130 121)" />
      </svg>
    </div>
  );
}
