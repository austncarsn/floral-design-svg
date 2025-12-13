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
  stemColor = "#8A9B7A",
  leafColor = "#9DB5A0"
}: StemFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main stem - refined */}
        <rect x="96" y="25" width="8" height="160" fill={stemColor} rx="2" />
        
        {/* Leaves - 3 pairs, refined with highlights */}
        {/* Top pair */}
        <ellipse cx="71" cy="62" rx="26" ry="18" fill={leafColor} transform="rotate(-25 71 62)" />
        <ellipse cx="75" cy="62" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(-25 75 62)" />
        <ellipse cx="129" cy="62" rx="26" ry="18" fill={leafColor} transform="rotate(25 129 62)" />
        <ellipse cx="125" cy="62" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(25 125 62)" />
        
        {/* Middle pair */}
        <ellipse cx="71" cy="110" rx="26" ry="18" fill={leafColor} transform="rotate(-25 71 110)" />
        <ellipse cx="75" cy="110" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(-25 75 110)" />
        <ellipse cx="129" cy="110" rx="26" ry="18" fill={leafColor} transform="rotate(25 129 110)" />
        <ellipse cx="125" cy="110" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(25 125 110)" />
        
        {/* Bottom pair */}
        <ellipse cx="71" cy="158" rx="26" ry="18" fill={leafColor} transform="rotate(-25 71 158)" />
        <ellipse cx="75" cy="158" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(-25 75 158)" />
        <ellipse cx="129" cy="158" rx="26" ry="18" fill={leafColor} transform="rotate(25 129 158)" />
        <ellipse cx="125" cy="158" rx="14" ry="10" fill="#C4D9C5" opacity="0.5" transform="rotate(25 125 158)" />
      </svg>
    </div>
  );
}