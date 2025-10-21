// Teal and coral symmetrical double bloom
interface FloralTenProps {
  size?: number;
  className?: string;
}

export default function FloralTen({ 
  size = 200,
  className = ""
}: FloralTenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left flower - Teal with 4 petals at 90-degree intervals */}
        <circle cx="70" cy="75" r="22" fill="#4A7C8C" />
        <circle cx="92" cy="97" r="22" fill="#4A7C8C" />
        <circle cx="70" cy="119" r="22" fill="#4A7C8C" />
        <circle cx="48" cy="97" r="22" fill="#4A7C8C" />
        <circle cx="70" cy="97" r="14" fill="#F5EFE0" />
        
        {/* Right flower - Coral with 5 petals at 72-degree intervals */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = ((angle - 90) * Math.PI) / 180;
          const cx = 130 + Math.cos(rad) * 28;
          const cy = 110 + Math.sin(rad) * 28;
          return (
            <circle key={i} cx={cx} cy={cy} r="20" fill="#E64A2E" />
          );
        })}
        <circle cx="130" cy="110" r="12" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
