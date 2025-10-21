// Terracotta concentric circles (perfectly symmetrical)
interface FloralThirtyFiveProps {
  size?: number;
  className?: string;
}

export default function FloralThirtyFive({ 
  size = 200, 
  className = "" 
}: FloralThirtyFiveProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Perfect concentric circles */}
        <circle cx="100" cy="100" r="70" fill="#C9604A" />
        <circle cx="100" cy="100" r="55" fill="#A8C9B8" />
        <circle cx="100" cy="100" r="40" fill="#D4A62A" />
        <circle cx="100" cy="100" r="25" fill="#B8A9C9" />
        <circle cx="100" cy="100" r="10" fill="#F5EFE0" />
      </svg>
    </div>
  );
}
