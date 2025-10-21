// Sage green and burnt orange geometric square (perfectly symmetrical)
interface FloralTwentyNineProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyNine({ 
  size = 200,
  className = ""
}: FloralTwentyNineProps) {
  const cornerDist = 45 * Math.sqrt(2); // Distance to corners on a 45-degree rotated square
  const sideDist = 31.82; // Distance to midpoints
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rotated square base */}
        <rect x="60" y="60" width="80" height="80" fill="#9CAF88" transform="rotate(45 100 100)" />
        
        {/* 4 corner circles at 90-degree intervals */}
        <circle cx="100" cy="55" r="22" fill="#D47647" />
        <circle cx="145" cy="100" r="22" fill="#D47647" />
        <circle cx="100" cy="145" r="22" fill="#D47647" />
        <circle cx="55" cy="100" r="22" fill="#D47647" />
        
        {/* 4 side circles at 45-degree intervals */}
        <circle cx={100 + sideDist} cy={100 - sideDist} r="16" fill="#E8DCC8" />
        <circle cx={100 + sideDist} cy={100 + sideDist} r="16" fill="#E8DCC8" />
        <circle cx={100 - sideDist} cy={100 + sideDist} r="16" fill="#E8DCC8" />
        <circle cx={100 - sideDist} cy={100 - sideDist} r="16" fill="#E8DCC8" />
        
        {/* Center */}
        <circle cx="100" cy="100" r="18" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
