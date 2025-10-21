// Rainbow mix - all colors celebration bloom (perfectly symmetrical)
interface FloralThirtyTwoProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyTwo({ 
  size = 200,
  className = ""
}: FloralThirtyTwoProps) {
  const centerX = 100;
  const centerY = 100;
  const radius = 42;
  const colors = [
    "#E64A2E", // coral red
    "#4A7C8C", // teal blue
    "#F2A818", // golden yellow
    "#9CAF88", // sage green
    "#B8A9C9", // lavender gray
    "#C9858D", // dusty rose
    "#D4A62A", // mustard gold
    "#F08080", // soft coral
    "#7A8450", // olive green
    "#D47647"  // burnt orange
  ];
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 10 petals in different colors at 36-degree intervals */}
        {Array.from({ length: 10 }, (_, i) => i * 36).map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = centerX + Math.cos(rad) * radius;
          const cy = centerY + Math.sin(rad) * radius;
          return (
            <circle key={i} cx={cx} cy={cy} r="22" fill={colors[i]} />
          );
        })}
        
        {/* Center with two layers */}
        <circle cx="100" cy="100" r="26" fill="#F5EFE0" />
        <circle cx="100" cy="100" r="14" fill="#1A1A1A" />
      </svg>
    </div>
  );
}
