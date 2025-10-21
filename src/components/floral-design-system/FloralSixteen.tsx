// Mint green clover with deep teal center (perfectly symmetrical)
interface FloralSixteenProps {
  size?: number;
  className?: string;
}

export default function FloralSixteen({ 
  size = 200,
  className = ""
}: FloralSixteenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 4 petal clover at 90-degree intervals */}
        <circle cx="100" cy="62" r="30" fill="#A8C9B8" />
        <circle cx="138" cy="100" r="30" fill="#A8C9B8" />
        <circle cx="100" cy="138" r="30" fill="#A8C9B8" />
        <circle cx="62" cy="100" r="30" fill="#A8C9B8" />
        
        {/* Center */}
        <circle cx="100" cy="100" r="22" fill="#2F5B6B" />
      </svg>
    </div>
  );
}
