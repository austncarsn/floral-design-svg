// Sophisticated triple bloom cluster with terracotta and sage harmony
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
        {/* Left flower - terracotta */}
        <ellipse cx="68" cy="85" rx="20" ry="18" fill="#C97A64" />
        <ellipse cx="86" cy="85" rx="18" ry="20" fill="#C97A64" />
        <ellipse cx="86" cy="103" rx="20" ry="18" fill="#C97A64" />
        <ellipse cx="68" cy="103" rx="18" ry="20" fill="#C97A64" />
        
        <circle cx="77" cy="94" r="11" fill="#8A9B7A" />
        <circle cx="77" cy="94" r="5" fill="#E8DCC8" />
        
        {/* Top right flower - sage */}
        <ellipse cx="120" cy="70" rx="18" ry="16" fill="#8A9B7A" />
        <ellipse cx="136" cy="70" rx="16" ry="18" fill="#8A9B7A" />
        <ellipse cx="136" cy="86" rx="18" ry="16" fill="#8A9B7A" />
        <ellipse cx="120" cy="86" rx="16" ry="18" fill="#8A9B7A" />
        
        <circle cx="128" cy="78" r="10" fill="#E8DCC8" />
        <circle cx="128" cy="78" r="4" fill="#8A9B7A" />
        
        {/* Bottom right flower - terracotta */}
        <ellipse cx="112" cy="122" rx="22" ry="20" fill="#C97A64" />
        <ellipse cx="132" cy="122" rx="20" ry="22" fill="#C97A64" />
        <ellipse cx="132" cy="142" rx="22" ry="20" fill="#C97A64" />
        <ellipse cx="112" cy="142" rx="20" ry="22" fill="#C97A64" />
        
        <circle cx="122" cy="132" r="12" fill="#8A9B7A" />
        <circle cx="122" cy="132" r="5" fill="#E8DCC8" />
      </svg>
    </div>
  );
}