// Sophisticated dual bloom composition - square and pentagon harmony
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
        {/* Left flower - Teal square pattern with refined depth */}
        {/* Main petals */}
        <circle cx="68" cy="76" r="22" fill="#5A8A8A" />
        <circle cx="90" cy="98" r="22" fill="#5A8A8A" />
        <circle cx="68" cy="120" r="22" fill="#5A8A8A" />
        <circle cx="46" cy="98" r="22" fill="#5A8A8A" />
        
        {/* Subtle highlights */}
        <circle cx="68" cy="76" r="13" fill="#6B8A9B" opacity="0.6" />
        <circle cx="90" cy="98" r="13" fill="#6B8A9B" opacity="0.6" />
        <circle cx="68" cy="120" r="13" fill="#6B8A9B" opacity="0.6" />
        <circle cx="46" cy="98" r="13" fill="#6B8A9B" opacity="0.6" />
        
        {/* Center */}
        <circle cx="68" cy="98" r="18" fill="#E8DCC8" />
        <circle cx="68" cy="98" r="11" fill="#C9B8A8" />
        <circle cx="68" cy="98" r="5" fill="#5A8A8A" />
        
        {/* Right flower - Coral pentagon with sophisticated layers */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = ((angle - 90) * Math.PI) / 180;
          const cx = 132 + Math.cos(rad) * 30;
          const cy = 106 + Math.sin(rad) * 30;
          return (
            <g key={i}>
              {/* Main petal */}
              <circle cx={cx} cy={cy} r="20" fill="#D4866F" />
              {/* Subtle highlight */}
              <circle cx={cx} cy={cy} r="11" fill="#E8A594" opacity="0.6" />
            </g>
          );
        })}
        
        {/* Right center with depth */}
        <circle cx="132" cy="106" r="17" fill="#C97A64" />
        <circle cx="132" cy="106" r="12" fill="#1A1A1A" />
        <circle cx="132" cy="106" r="6" fill="#E8DCC8" />
      </svg>
    </div>
  );
}