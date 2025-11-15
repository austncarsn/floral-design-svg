// Coral red flower with black center - 6 petal daisy (perfectly symmetrical)
interface FloralOneProps {
  size?: number;
  className?: string;
}

export default function FloralOne({ 
  size = 200,
  className = ""
}: FloralOneProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 6 petals evenly spaced at 60-degree intervals */}
        <circle cx="100" cy="55" r="28" fill="#D4866F" />
        <circle cx="124.25" cy="67.5" r="28" fill="#D4866F" />
        <circle cx="124.25" cy="132.5" r="28" fill="#D4866F" />
        <circle cx="100" cy="145" r="28" fill="#D4866F" />
        <circle cx="75.75" cy="132.5" r="28" fill="#D4866F" />
        <circle cx="75.75" cy="67.5" r="28" fill="#D4866F" />
        
        {/* Center */}
        <circle cx="100" cy="100" r="25" fill="#1A1A1A" />
      </svg>
    </div>
  );
}