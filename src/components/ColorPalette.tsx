import { floralColors } from "./floral-design-system/colors";

interface ColorPaletteProps {
  onCopyColor: (color: string) => void;
}

interface ColorItem {
  color: string;
  name: string;
}

export default function ColorPalette({ onCopyColor }: ColorPaletteProps) {
  const primaryColors: ColorItem[] = [
    { color: floralColors.coralRed, name: "Coral Red" },
    { color: floralColors.warmOrange, name: "Warm Orange" },
    { color: floralColors.tealBlue, name: "Teal Blue" }
  ];

  const extendedColors: ColorItem[] = [
    { color: floralColors.terracotta, name: "Terracotta" },
    { color: floralColors.burntOrange, name: "Burnt Orange" },
    { color: floralColors.mustardGold, name: "Mustard" },
    { color: floralColors.goldenYellow, name: "Golden" },
    { color: floralColors.oliveGreen, name: "Olive" },
    { color: floralColors.sageGreen, name: "Sage" },
    { color: floralColors.mintGreen, name: "Mint" },
    { color: floralColors.deepTeal, name: "Deep Teal" },
    { color: floralColors.lavenderGray, name: "Lavender" },
    { color: floralColors.dustyRose, name: "Dusty Rose" }
  ];

  const neutralColors: ColorItem[] = [
    { color: floralColors.richBlack, name: "Rich Black" },
    { color: floralColors.charcoal, name: "Charcoal" },
    { color: floralColors.cream, name: "Cream" },
    { color: floralColors.lightBeige, name: "Light Beige" },
    { color: floralColors.warmWhite, name: "Warm White" }
  ];

  const ColorButton = ({ color, name, size = "medium" }: ColorItem & { size?: "small" | "medium" }) => (
    <button 
      className="group text-left transition-transform hover:scale-105 focus:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a1817] focus-visible:outline-offset-2"
      onClick={() => onCopyColor(color)}
      aria-label={`Copy ${name} color ${color}`}
      style={{ 
        minHeight: '44px',
        minWidth: '44px',
        borderRadius: '12px',
        transitionDuration: '200ms'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div 
          className="aspect-square shadow-sm border border-[#e8e6e3] transition-shadow group-hover:shadow-md"
          style={{ backgroundColor: color, borderRadius: '12px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <p className="font-medium text-[#1a1817]" style={{ fontSize: size === "small" ? '12px' : '14px' }}>
            {name}
          </p>
          <p className="text-[#9b9894] font-mono" style={{ fontSize: size === "small" ? '10px' : '12px' }}>
            {color}
          </p>
        </div>
      </div>
    </button>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 6vw, 64px)' }}>
      {/* Primary Colors */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h4 className="section-label text-left" style={{ fontSize: '13px', marginBottom: '0' }}>
          Primary Colors
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" style={{ gap: 'clamp(16px, 3vw, 24px)' }}>
          {primaryColors.map(item => (
            <ColorButton key={item.name} {...item} size="medium" />
          ))}
        </div>
      </div>

      {/* Extended Palette */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h4 className="section-label text-left" style={{ fontSize: '13px', marginBottom: '0' }}>
          Extended Palette
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10" style={{ gap: 'clamp(16px, 3vw, 24px)' }}>
          {extendedColors.map(item => (
            <ColorButton key={item.name} {...item} size="small" />
          ))}
        </div>
      </div>

      {/* Neutrals */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h4 className="section-label text-left" style={{ fontSize: '13px', marginBottom: '0' }}>
          Neutral Colors
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" style={{ gap: 'clamp(16px, 3vw, 24px)' }}>
          {neutralColors.map(item => (
            <ColorButton key={item.name} {...item} size="medium" />
          ))}
        </div>
      </div>
    </div>
  );
}
