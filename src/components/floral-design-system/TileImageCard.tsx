import { useRef, useState } from "react";
import { Download, Maximize2, Loader2, AlertCircle } from "lucide-react";
import { downloadFloralWithMetadata, FloralMetadata } from "../../utils/downloadFloral";

interface TileImageCardProps {
  id?: string;
  Component: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  desc: string;
  colors?: string[];
  size?: number;
  downloadUrl?: string;
  onDownload?: (name: string) => void;
  onOpen?: (name: string) => void;
}

// Spinner Icon Component
function SpinnerIcon({ className = "" }: { className?: string }) {
  return (
    <Loader2 className={`animate-spin ${className}`} />
  );
}

// Button Icon Component
interface ButtonIconProps {
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  ariaLabel: string;
  disabled?: boolean;
  title?: string;
  className?: string;
}

function ButtonIcon({ icon, onClick, ariaLabel, disabled = false, title, className = "" }: ButtonIconProps) {
  return (
    <button
      type="button"
      role="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
      className={`
        grid place-items-center size-7 rounded-full 
        border border-[#E6E3DE] bg-white
        transition duration-150
        hover:bg-[#111418] hover:text-white hover:border-transparent
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2326]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        minWidth: '44px',
        minHeight: '44px',
        padding: '8px',
      }}
    >
      {icon}
    </button>
  );
}

// Alert Tooltip Component
function AlertTooltip({ message }: { message: string }) {
  return (
    <div 
      className="absolute -bottom-12 right-0 bg-white border-2 border-[#C94337] rounded-lg px-3 py-2 shadow-lg z-20 whitespace-nowrap"
      role="alert"
    >
      <div className="flex items-center gap-2 text-sm text-[#C94337]">
        <AlertCircle className="w-4 h-4" />
        <span>{message}</span>
      </div>
      <div className="absolute -top-1 right-4 w-2 h-2 bg-white border-t-2 border-l-2 border-[#C94337] transform rotate-45" />
    </div>
  );
}

export default function TileImageCard({
  id,
  Component,
  name,
  desc,
  colors = [],
  size = 140,
  downloadUrl,
  onDownload,
  onOpen,
}: TileImageCardProps) {
  const svgRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloadError(false);
    
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
      setIsDownloading(true);
      await downloadFloralWithMetadata(svgElement, metadata, 2000);
      
      if (onDownload) {
        onDownload(name);
      }
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadError(true);
      setTimeout(() => setDownloadError(false), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpen) {
      onOpen(name);
    }
  };

  return (
    <article
      id={id}
      className={`
        tile relative isolate 
        bg-white border border-[#E6E3DE]
        transition-shadow duration-200
        hover:bg-[#FBFAF8] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2326]
        ${downloadError ? 'outline outline-2 outline-[#C94337]' : ''}
      `}
      style={{ contain: 'content' }}
      tabIndex={0}
      aria-label={`${name}: ${desc}`}
    >
      {/* Preview Figure */}
      <figure className="preview p-3">
        <div 
          className="aspect-square grid place-items-center bg-[#FCFCFB] border border-[#F0EEEA] relative"
          style={{ aspectRatio: '1 / 1' }}
        >
          {/* Hidden SVG for download reference */}
          <div ref={svgRef} className="hidden">
            <Component size={size} />
          </div>
          
          {/* Visible SVG Display */}
          <div className="flex items-center justify-center w-full h-full">
            <Component size={120} className="object-contain" />
          </div>
        </div>
      </figure>

      {/* Action Buttons - Top Right Cluster */}
      <footer className="actions absolute top-2 right-2 flex gap-2 z-10">
        {/* Download Button (Primary) */}
        <ButtonIcon
          icon={
            isDownloading ? (
              <SpinnerIcon className="w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )
          }
          onClick={handleDownload}
          ariaLabel="Download PNG"
          disabled={isDownloading}
          title={`Download ${name}.png`}
          className="download-btn"
        />

        {/* Open/Expand Button (Secondary) */}
        {onOpen && (
          <ButtonIcon
            icon={<Maximize2 className="w-4 h-4" />}
            onClick={handleOpen}
            ariaLabel="Open preview"
            title={`View ${name} in full size`}
            className="expand-btn"
          />
        )}

        {/* Error Tooltip */}
        {downloadError && <AlertTooltip message="Retry download" />}
      </footer>

      {/* Meta Information (visible on hover via parent) */}
      <header className="meta absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="text-white">
          <h3 className="text-sm font-medium">{name}</h3>
          <p className="text-xs opacity-90 mt-0.5">{desc}</p>
        </div>
      </header>
    </article>
  );
}
