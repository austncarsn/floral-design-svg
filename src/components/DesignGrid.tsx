import { Download, Code } from "lucide-react";
import { DesignItem } from "../lib/design-data";
import { useRef } from "react";
import { downloadSVG, copySVGCode } from "../utils/downloadSVG";
import { toast } from "sonner@2.0.3";

interface DesignGridProps {
  designs: DesignItem[];
  iconType?: "download" | "code";
}

export default function DesignGrid({ designs, iconType = "download" }: DesignGridProps) {
  const Icon = iconType === "download" ? Download : Code;

  const handleDownload = async (design: DesignItem, event: React.MouseEvent) => {
    event.preventDefault();
    
    try {
      // Find the SVG element within the clicked tile
      const tile = (event.currentTarget as HTMLElement).closest('.icon-tile');
      const svgElement = tile?.querySelector('svg');
      
      if (!svgElement) {
        toast.error('Could not find SVG element');
        return;
      }

      if (iconType === "download") {
        // Download as PNG
        await downloadAsPNG(svgElement, design.name);
        toast.success(`Downloaded ${design.name}.png`);
      } else {
        // Download as SVG or copy code
        if (event.shiftKey) {
          // Shift+click to copy code
          await copySVGCode(svgElement);
          toast.success('SVG code copied to clipboard');
        } else {
          // Regular click to download SVG
          await downloadSVG(svgElement, design.name, {
            addMetadata: true,
            title: design.name,
            description: design.desc,
            creator: 'Floral Design System'
          });
          toast.success(`Downloaded ${design.name}.svg`);
        }
      }
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download. Please try again.');
    }
  };

  // PNG download function
  const downloadAsPNG = (svgElement: SVGElement, filename: string, size: number = 1000): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        const svgClone = svgElement.cloneNode(true) as SVGSVGElement;
        
        // Set fixed size
        svgClone.setAttribute('width', size.toString());
        svgClone.setAttribute('height', size.toString());
        
        // Serialize SVG
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svgClone);
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const svgUrl = URL.createObjectURL(svgBlob);
        
        // Create image
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }
          
          // Fill with white background
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, size, size);
          
          // Draw the image
          ctx.drawImage(img, 0, 0, size, size);
          
          // Convert to PNG blob
          canvas.toBlob((blob) => {
            if (!blob) {
              reject(new Error('Could not create PNG blob'));
              return;
            }
            
            // Create download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${filename.toLowerCase().replace(/\s/g, '-')}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Cleanup
            URL.revokeObjectURL(url);
            URL.revokeObjectURL(svgUrl);
            
            resolve();
          }, 'image/png');
        };
        
        img.onerror = () => {
          reject(new Error('Failed to load SVG image'));
        };
        
        img.src = svgUrl;
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <>
      <div className="grid icon-grid">
        {designs.map((design, index) => (
          <button
            key={`${design.name}-${index}`} 
            className="icon-tile group"
            onClick={(e) => handleDownload(design, e)}
            aria-label={`Download ${design.name}`}
          >
            <design.Component 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" 
              style={{ maxWidth: '100%', maxHeight: '100%', pointerEvents: 'none' }} 
            />
            <div className="icon-overlay">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#1a1817] truncate pr-2">
                  {design.name}
                </span>
                <Icon className="w-3.5 h-3.5 text-[#5f5d5b] flex-shrink-0" />
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* No Results Message */}
      {designs.length === 0 && (
        <div className="text-center py-16">
          <p className="body-text">No designs match your filters. Try a different selection.</p>
        </div>
      )}
      
      {/* Download Hint */}
      {designs.length > 0 && iconType === "code" && (
        <div className="text-center mt-8">
          <p className="text-sm text-[#9b9894]">
            Click to download SVG • Shift+Click to copy code
          </p>
        </div>
      )}
    </>
  );
}