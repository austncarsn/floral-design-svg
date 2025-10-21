// Deep teal and terracotta tulip (perfectly symmetrical)
interface FloralTwentyProps {
  size?: number;
  className?: string;
}

export default function FloralTwenty({ 
  size = 200,
  className = ""
}: FloralTwentyProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tulip outer petals - symmetrical */}
        <ellipse cx="75" cy="95" rx="26" ry="40" fill="#2F5B6B" transform="rotate(-20 75 95)" />
        <ellipse cx="125" cy="95" rx="26" ry="40" fill="#2F5B6B" transform="rotate(20 125 95)" />
        
        {/* Center petal */}
        <ellipse cx="100" cy="90" rx="24" ry="38" fill="#C9604A" />
        
        {/* Base - symmetrical curve */}
        <path d="M 70 115 Q 100 130 130 115" fill="#2F5B6B" />
      </svg>
    </div>
  );
}
