import { COLORS, PALETTE_DISPLAY } from "./tokens/florals2026";
import { toast } from "sonner";

interface ColorPaletteProps {
  onCopyColor?: (color: string) => void;
}

export default function ColorPalette({ onCopyColor }: ColorPaletteProps) {
  
  const handleCopy = (color: string) => {
    if (onCopyColor) {
      onCopyColor(color);
    } else {
      navigator.clipboard.writeText(color);
      toast.success(`Copied ${color}`);
    }
  };

  // Helper to find color name (optional, but good for accessibility)
  const getColorName = (hex: string) => {
    const entry = Object.entries(COLORS).find(([_, value]) => value === hex);
    return entry ? entry[0].replace(/([A-Z])/g, ' $1').trim() : hex;
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
        {PALETTE_DISPLAY.map((color, index) => (
          <button
            key={color + index}
            onClick={() => handleCopy(color)}
            className="group flex flex-col gap-3 text-left transition-transform hover:-translate-y-1 focus:outline-none"
            aria-label={`Copy color ${color}`}
          >
            {/* Color Swatch */}
            <div 
              className="aspect-square w-full rounded-2xl shadow-sm ring-1 ring-black/5 transition-shadow group-hover:shadow-md"
              style={{ backgroundColor: color }}
            />
            
            {/* Color Info */}
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase text-gray-500 group-hover:text-gray-900 transition-colors">
                {color}
              </span>
              <span className="text-xs font-medium text-gray-900 capitalize truncate opacity-0 -mt-4 group-hover:opacity-100 group-hover:mt-0 transition-all duration-300">
                {getColorName(color)}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
