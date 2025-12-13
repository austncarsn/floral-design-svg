// Sophisticated four-petal terracotta bloom with lavender center
interface FloralThirtySevenProps {
  size?: number;
  className?: string;
}

export default function FloralThirtySeven({ 
  size = 200, 
  className = "" 
}: FloralThirtySevenProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four terracotta petals - cardinal directions */}
        <ellipse cx="100" cy="64" rx="24" ry="38" fill="#C97A64" />
        <ellipse cx="136" cy="100" rx="38" ry="24" fill="#C97A64" />
        <ellipse cx="100" cy="136" rx="24" ry="38" fill="#C97A64" />
        <ellipse cx="64" cy="100" rx="38" ry="24" fill="#C97A64" />
        
        {/* Petal highlights */}
        <ellipse cx="100" cy="68" rx="15" ry="24" fill="#E8A594" opacity="0.6" />
        <ellipse cx="132" cy="100" rx="24" ry="15" fill="#E8A594" opacity="0.6" />
        <ellipse cx="100" cy="132" rx="15" ry="24" fill="#E8A594" opacity="0.6" />
        <ellipse cx="68" cy="100" rx="24" ry="15" fill="#E8A594" opacity="0.6" />
        
        {/* Layered lavender center */}
        <circle cx="100" cy="100" r="32" fill="#C4ADB8" />
        <circle cx="100" cy="100" r="23" fill="#D4C4E0" opacity="0.6" />
        <circle cx="100" cy="100" r="17" fill="#1A1A1A" />
        <circle cx="100" cy="100" r="9" fill="#C4ADB8" />
        <circle cx="100" cy="100" r="4" fill="#E8DCC8" />
      </svg>
    </div>
  );
}