interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralEighteen({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco flower of life sacred geometry - Museum quality */}
      
      {/* Ethereal background glow */}
      <circle cx="120" cy="120" r="115" fill="#D4A574" opacity="0.05" />
      <circle cx="120" cy="120" r="105" fill="#7A9299" opacity="0.05" />
      <circle cx="120" cy="120" r="95" fill="#8FA396" opacity="0.05" />
      
      {/* Central circle with glow layers */}
      {/* Outer glow */}
      <circle cx="120" cy="120" r="42" fill="none" stroke="#E8C8A8" strokeWidth="6" opacity="0.15" />
      
      {/* Shadow ring */}
      <circle cx="121" cy="121" r="38.5" fill="none" stroke="#1A1614" strokeWidth="3.5" opacity="0.08" />
      
      {/* Main circle */}
      <circle cx="120" cy="120" r="38.5" fill="none" stroke="#D4A574" strokeWidth="3.5" opacity="0.88" />
      
      {/* Highlight ring */}
      <circle cx="120" cy="120" r="38.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.2" />
      
      {/* Six surrounding circles forming flower of life with museum layers */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 120 + Math.cos(angle) * 38.5;
        const y = 120 + Math.sin(angle) * 38.5;
        
        const colors = ["#7A9299", "#8FA396", "#C4A582", "#A89080", "#B39C87", "#9B8B7E"];
        const glowColors = ["#A8C8D4", "#C8D4C8", "#D4C8A8", "#C8B8A8", "#D4C4B8", "#C8B8A8"];
        
        return (
          <g key={i}>
            {/* Outer glow */}
            <circle
              cx={x}
              cy={y}
              r="42"
              fill="none"
              stroke={glowColors[i]}
              strokeWidth="6"
              opacity="0.15"
            />
            
            {/* Shadow ring */}
            <circle
              cx={x + 1}
              cy={y + 1}
              r="38.5"
              fill="none"
              stroke="#1A1614"
              strokeWidth="3.5"
              opacity="0.08"
            />
            
            {/* Main circle */}
            <circle
              cx={x}
              cy={y}
              r="38.5"
              fill="none"
              stroke={colors[i]}
              strokeWidth="3.5"
              opacity="0.88"
            />
            
            {/* Highlight ring */}
            <circle
              cx={x}
              cy={y}
              r="38.5"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              opacity="0.2"
            />
          </g>
        );
      })}
      
      {/* Intersection ornaments with exquisite layers */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 120 + Math.cos(angle) * 38.5;
        const y = 120 + Math.sin(angle) * 38.5;
        
        return (
          <g key={i}>
            {/* Outer glow */}
            <circle cx={x} cy={y} r="13" fill="#E8DCC8" opacity="0.15" />
            
            {/* Shadow */}
            <circle cx={x + 0.8} cy={y + 0.8} r="9.5" fill="#1A1614" opacity="0.12" />
            
            {/* Main circle */}
            <circle cx={x} cy={y} r="9.5" fill="#E8DCC8" opacity="0.95" />
            
            {/* Gradient overlay */}
            <circle cx={x} cy={y} r="7.5" fill="#FFFFFF" opacity="0.2" />
            
            {/* Inner shadow */}
            <circle cx={x} cy={y} r="5" fill="#1A1614" opacity="0.3" />
            
            {/* Highlight */}
            <circle cx={x - 1} cy={y - 1} r="1.5" fill="#FFFFFF" opacity="0.6" />
          </g>
        );
      })}
      
      {/* Outer petal points with layers */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 120 + Math.cos(angle) * 77;
        const y = 120 + Math.sin(angle) * 77;
        
        return (
          <g key={i}>
            {/* Glow */}
            <circle cx={x} cy={y} r="10" fill="#D4C8A8" opacity="0.2" />
            
            {/* Shadow */}
            <circle cx={x + 0.6} cy={y + 0.6} r="7.5" fill="#1A1614" opacity="0.12" />
            
            {/* Main */}
            <circle cx={x} cy={y} r="7.5" fill="#C4A582" opacity="0.88" />
            
            {/* Gradient */}
            <circle cx={x} cy={y} r="5.5" fill="#FFFFFF" opacity="0.15" />
            
            {/* Highlight */}
            <circle cx={x - 0.8} cy={y - 0.8} r="1.5" fill="#FFFFFF" opacity="0.5" />
          </g>
        );
      })}
      
      {/* Center core with museum quality */}
      {/* Outer glow */}
      <circle cx="120" cy="120" r="28" fill="#D4A574" opacity="0.12" />
      <circle cx="120" cy="120" r="25" fill="#D4A574" opacity="0.15" />
      
      {/* Shadow base */}
      <circle cx="121" cy="121" r="22" fill="#1A1614" opacity="0.15" />
      
      {/* Dark ring */}
      <circle cx="120" cy="120" r="22" fill="#1A1614" opacity="0.25" />
      
      {/* Gradient layer */}
      <circle cx="120" cy="120" r="18" fill="#FFFFFF" opacity="0.12" />
      
      {/* Mid layer */}
      <circle cx="120" cy="120" r="14" fill="#D4A574" opacity="0.88" />
      
      {/* Shadow ring */}
      <circle cx="120" cy="120" r="10" fill="#1A1614" opacity="0.15" />
      
      {/* Inner light */}
      <circle cx="120" cy="120" r="7" fill="#E8DCC8" opacity="0.95" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="3.5" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118.5" cy="118.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
