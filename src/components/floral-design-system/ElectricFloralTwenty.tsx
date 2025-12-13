interface Props {
  size?: number;
  className?: string;
}

export default function ElectricFloralTwenty({ size = 240, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 1930s Art Deco radial beam projector - Museum quality */}
      
      {/* Ethereal background glow */}
      <circle cx="120" cy="120" r="115" fill="#D4A574" opacity="0.05" />
      <circle cx="120" cy="120" r="105" fill="#7A9299" opacity="0.05" />
      
      {/* 20 radial beams with exquisite layers */}
      {[...Array(20)].map((_, i) => {
        const angle = (i * 18 * Math.PI) / 180;
        const innerRadius = 36;
        const outerRadius = i % 2 === 0 ? 96 : 84;
        
        const colors = ["#D4A574", "#7A9299", "#8FA396", "#C4A582"];
        const color = colors[i % 4];
        const glowColors = ["#E8C8A8", "#A8C8D4", "#C8D4C8", "#D4C8A8"];
        const glowColor = glowColors[i % 4];
        
        const x1 = 120 + Math.cos(angle) * innerRadius;
        const y1 = 120 + Math.sin(angle) * innerRadius;
        const x2 = 120 + Math.cos(angle) * outerRadius;
        const y2 = 120 + Math.sin(angle) * outerRadius;
        
        return (
          <g key={i}>
            {/* Glow layer */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={glowColor}
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.15"
            />
            
            {/* Shadow layer */}
            <line
              x1={x1 + 0.8}
              y1={y1 + 0.8}
              x2={x2 + 0.8}
              y2={y2 + 0.8}
              stroke="#1A1614"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.08"
            />
            
            {/* Main beam */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.85"
            />
            
            {/* Highlight layer */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.15"
            />
            
            {/* End cap circles for alternating beams */}
            {i % 2 === 0 && (
              <g>
                {/* Glow */}
                <circle cx={x2} cy={y2} r="10" fill={glowColor} opacity="0.2" />
                
                {/* Shadow */}
                <circle cx={x2 + 0.6} cy={y2 + 0.6} r="7.5" fill="#1A1614" opacity="0.12" />
                
                {/* Main circle */}
                <circle cx={x2} cy={y2} r="7.5" fill={color} opacity="0.88" />
                
                {/* Gradient overlay */}
                <circle cx={x2} cy={y2} r="5.5" fill="#FFFFFF" opacity="0.2" />
                
                {/* Highlight */}
                <circle cx={x2 - 1} cy={y2 - 1} r="1.5" fill="#FFFFFF" opacity="0.6" />
              </g>
            )}
          </g>
        );
      })}
      
      {/* Inner decorative ring with depth */}
      <circle cx="120" cy="120" r="48" fill="none" stroke="#C4A582" strokeWidth="4" opacity="0.08" />
      <circle cx="120" cy="120" r="45.5" fill="none" stroke="#1A1614" strokeWidth="2.5" opacity="0.08" />
      <circle cx="120" cy="120" r="45.5" fill="none" stroke="#1A1614" strokeWidth="2.5" opacity="0.25" />
      <circle cx="120" cy="120" r="45.5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.15" />
      
      {/* Center hub with museum quality layers */}
      {/* Outer glow halos */}
      <circle cx="120" cy="120" r="40" fill="#A89080" opacity="0.1" />
      <circle cx="120" cy="120" r="36" fill="#A89080" opacity="0.15" />
      
      {/* Shadow base */}
      <circle cx="121.5" cy="121.5" r="31" fill="#1A1614" opacity="0.15" />
      
      {/* Dark outer ring */}
      <circle cx="120" cy="120" r="31" fill="#1A1614" opacity="0.3" />
      
      {/* Gradient layer */}
      <circle cx="120" cy="120" r="27" fill="#FFFFFF" opacity="0.12" />
      
      {/* Mid layer */}
      <circle cx="120" cy="120" r="24" fill="#A89080" opacity="0.88" />
      
      {/* Shadow ring */}
      <circle cx="120" cy="120" r="19" fill="#1A1614" opacity="0.15" />
      
      {/* Light circle */}
      <circle cx="120" cy="120" r="15.5" fill="#E8DCC8" opacity="0.95" />
      
      {/* Inner shadow */}
      <circle cx="120" cy="120" r="10" fill="#1A1614" opacity="0.15" />
      
      {/* Secondary color */}
      <circle cx="120" cy="120" r="8.5" fill="#B39C87" opacity="0.88" />
      
      {/* Core */}
      <circle cx="120" cy="120" r="3.5" fill="#8B7355" />
      
      {/* Highlight */}
      <circle cx="118.5" cy="118.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
