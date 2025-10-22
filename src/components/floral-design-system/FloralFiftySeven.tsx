// Hexagonal bloom with layered geometry (perfectly symmetrical)
interface FloralFiftySevenProps {
  size?: number;
  className?: string;
}

export default function FloralFiftySeven({ 
  size = 200,
  className = ""
}: FloralFiftySevenProps) {
  const centerX = 100;
  const centerY = 100;
  
  // Generate hexagon points
  const createHexagon = (cx: number, cy: number, radius: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (60 * i - 30) * Math.PI / 180;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };
  
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer hexagon */}
        <polygon points={createHexagon(centerX, centerY, 65)} fill="#C9604A" />
        
        {/* Middle hexagon */}
        <polygon points={createHexagon(centerX, centerY, 48)} fill="#F5EFE0" />
        
        {/* Inner hexagon */}
        <polygon points={createHexagon(centerX, centerY, 32)} fill="#7A8450" />
        
        {/* Center hexagon */}
        <polygon points={createHexagon(centerX, centerY, 16)} fill="#D4A62A" />
      </svg>
    </div>
  );
}
