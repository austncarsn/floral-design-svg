import { useRef } from "react";
import { Download } from "lucide-react";
import { downloadFloralWithMetadata, FloralMetadata } from "../../utils/downloadFloral";

interface FloralCardProps {
  Component: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  desc: string;
  size?: number;
  colors?: string[];
}

export default function FloralCard({ Component, name, desc, size = 140, colors = [] }: FloralCardProps) {
  const svgRef = useRef<HTMLDivElement>(null);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!svgRef.current) return;
    
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;

    const metadata: FloralMetadata = {
      name: name,
      description: desc,
      designer: "Floral Design System",
      collection: "Mid-Century Modern Florals",
      createdDate: new Date().toISOString(),
      colors: colors.length > 0 ? colors : ["#E64A2E", "#4A7C8C", "#F5EFE0", "#1A1A1A"],
      version: "1.0.0"
    };

    try {
      await downloadFloralWithMetadata(svgElement, metadata, 2000);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <>
      {/* Hidden SVG for reference */}
      <div ref={svgRef} className="hidden">
        <Component size={size} />
      </div>
      
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Download PNG"
      >
        <Download className="w-4 h-4 text-gray-700" />
      </button>
    </>
  );
}
