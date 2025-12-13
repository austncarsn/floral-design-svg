interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralFourteen({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco geometric mandala - Museum quality */}
      
      {/* Ethereal background glow */}
      <circle cx="120" cy="120" r="110" fill="#D4A574" opacity="0.06" />
      <circle cx="120" cy="120" r="100" fill="#7A9299" opacity="0.06" />
      <circle cx="120" cy="120" r="90" fill="#8FA396" opacity="0.06" />
      
      {/* Outer ring of 12 petals with exquisite layers */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const radius = 82;
        const x = 120 + Math.cos(angle) * radius;
        const y = 120 + Math.sin(angle) * radius;
        
        return (
          <g key={i}>
            {/* Outer glow halo */}
            <circle cx={x} cy={y} r="23" fill="#E8C8A8" opacity="0.15" />
            <circle cx={x} cy={y} r="21" fill="#E8C8A8" opacity="0.2" />
            
            {/* Shadow layer */}
            <circle cx={x + 1} cy={y + 1} r="19" fill="#1A1614" opacity="0.12" />
            
            {/* Main petal */}
            <circle cx={x} cy={y} r="19" fill="#D4A574" opacity="0.88" />
            
            {/* Gradient overlay */}
            <circle cx={x} cy={y} r="16" fill="#FFFFFF" opacity="0.15" />
            
            {/* Inner light */}
            <circle cx={x} cy={y} r="12" fill="#E8DCC8" opacity="0.95" />
            
            {/* Shadow center */}
            <circle cx={x} cy={y} r="6" fill="#1A1614" opacity="0.3" />
            
            {/* Highlight */}
            <circle cx={x - 1} cy={y - 1} r="2" fill="#FFFFFF" opacity="0.6" />
          </g>
        );
      })}
      
      {/* Middle ring of 8 petals with depth */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 54;
        const x = 120 + Math.cos(angle) * radius;
        const y = 120 + Math.sin(angle) * radius;
        
        return (
          <g key={i}>
            {/* Outer glow */}
            <circle cx={x} cy={y} r="19" fill="#A8C8D4" opacity="0.15" />
            <circle cx={x} cy={y} r="17" fill="#A8C8D4" opacity="0.2" />
            
            {/* Shadow */}
            <circle cx={x + 0.8} cy={y + 0.8} r="15.5" fill="#1A1614" opacity="0.12" />
            
            {/* Main petal */}
            <circle cx={x} cy={y} r="15.5" fill="#7A9299" opacity="0.88" />
            
            {/* Gradient layer */}
            <circle cx={x} cy={y} r="13" fill="#FFFFFF" opacity="0.15" />
            
            {/* Inner light */}
            <circle cx={x} cy={y} r="9.5" fill="#E8DCC8" opacity="0.95" />
            
            {/* Center accent */}
            <circle cx={x} cy={y} r="5" fill="#8FA396" opacity="0.85" />
            
            {/* Highlight */}
            <circle cx={x - 1} cy={y - 1} r="1.8" fill="#FFFFFF" opacity="0.6" />
          </g>
        );
      })}
      
      {/* Inner ring of 6 petals */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const radius = 34;
        const x = 120 + Math.cos(angle) * radius;
        const y = 120 + Math.sin(angle) * radius;
        
        return (
          <g key={i}>
            {/* Glow */}
            <circle cx={x} cy={y} r="11" fill="#D4C8A8" opacity="0.2" />
            
            {/* Shadow */}
            <circle cx={x + 0.6} cy={y + 0.6} r="8.5" fill="#1A1614" opacity="0.12" />
            
            {/* Main */}
            <circle cx={x} cy={y} r="8.5" fill="#C4A582" opacity="0.88" />
            
            {/* Highlight */}
            <circle cx={x - 0.8} cy={y - 0.8} r="1.5" fill="#FFFFFF" opacity="0.5" />
          </g>
        );
      })}
      
      {/* Center medallion with museum layers */}
      {/* Outer glow */}
      <circle cx="120" cy="120" r="28" fill="#C4A582" opacity="0.15" />
      <circle cx="120" cy="120" r="25" fill="#C4A582" opacity="0.2" />
      
      {/* Shadow base */}
      <circle cx="121.2" cy="121.2" r="22" fill="#1A1614" opacity="0.18" />
      
      {/* Main circle */}
      <circle cx="120" cy="120" r="22" fill="#1A1614" opacity="0.35" />
      
      {/* Mid layer with gradient */}
      <circle cx="120" cy="120" r="18" fill="#FFFFFF" opacity="0.1" />
      <circle cx="120" cy="120" r="14" fill="#A89080" opacity="0.88" />
      
      {/* Inner light */}
      <circle cx="120" cy="120" r="9" fill="#E8DCC8" opacity="0.95" />
      
      {/* Shadow ring */}
      <circle cx="120" cy="120" r="5" fill="#1A1614" opacity="0.2" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="3.5" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118.5" cy="118.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
