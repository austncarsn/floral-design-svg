import { useRef, useState } from "react";
import { Download, Copy, Check, AlertCircle } from "lucide-react";
import { downloadSVG, copySVGCode } from "../../utils/downloadSVG";

interface VectorCardProps {
  Component: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  desc: string;
  size?: number;
}

export default function VectorCard({ Component, name, desc, size = 140 }: VectorCardProps) {
  const svgRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleDownloadSVG = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!svgRef.current) return;
    
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;

    try {
      await downloadSVG(svgElement, name, {
        addMetadata: true,
        title: name,
        description: desc,
        creator: "Floral Design System"
      });
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleCopyCode = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!svgRef.current) return;
    
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;

    try {
      setCopyError(false);
      await copySVGCode(svgElement);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <>
      {/* Hidden SVG for reference */}
      <div ref={svgRef} className="hidden">
        <Component size={size} />
      </div>
      
      {/* Action Buttons */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        {/* Download SVG Button */}
        <button
          onClick={handleDownloadSVG}
          className="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all"
          aria-label="Download SVG"
          title="Download SVG"
        >
          <Download className="w-4 h-4 text-gray-700" />
        </button>

        {/* Copy Code Button */}
        <button
          onClick={handleCopyCode}
          className="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all"
          aria-label="Copy SVG code"
          title="Copy SVG code"
        >
          {copyError ? (
            <AlertCircle className="w-4 h-4 text-red-600" />
          ) : copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-gray-700" />
          )}
        </button>
      </div>
    </>
  );
}