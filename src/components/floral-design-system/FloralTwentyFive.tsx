// Terracotta and olive triple bloom cluster (perfectly symmetrical)
interface FloralTwentyFiveProps {
  size?: number;
  className?: string;
}

export default function FloralTwentyFive({ 
  size = 200,
  className = ""
}: FloralTwentyFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left flower - 4 petals at 90-degree intervals */}
        <circle cx="68" cy="85" r="18" fill="#C9604A" />
        <circle cx="86" cy="85" r="18" fill="#C9604A" />
        <circle cx="86" cy="103" r="18" fill="#C9604A" />
        <circle cx="68" cy="103" r="18" fill="#C9604A" />
        <circle cx="77" cy="94" r="10" fill="#7A8450" />
        
        {/* Top right flower - 4 petals at 90-degree intervals */}
        <circle cx="120" cy="70" r="16" fill="#7A8450" />
        <circle cx="136" cy="70" r="16" fill="#7A8450" />
        <circle cx="136" cy="86" r="16" fill="#7A8450" />
        <circle cx="120" cy="86" r="16" fill="#7A8450" />
        <circle cx="128" cy="78" r="9" fill="#F5EFE0" />
        
        {/* Bottom right flower - 4 petals at 90-degree intervals */}
        <circle cx="112" cy="122" r="20" fill="#C9604A" />
        <circle cx="132" cy="122" r="20" fill="#C9604A" />
        <circle cx="132" cy="142" r="20" fill="#C9604A" />
        <circle cx="112" cy="142" r="20" fill="#C9604A" />
        <circle cx="122" cy="132" r="11" fill="#7A8450" />
      </svg>
    </div>
  );
}
