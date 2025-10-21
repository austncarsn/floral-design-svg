// Utility to download floral designs as PNG with metadata

export interface FloralMetadata {
  name: string;
  description: string;
  designer: string;
  collection: string;
  createdDate: string;
  colors: string[];
  version: string;
}

export async function downloadFloralAsPNG(
  svgElement: SVGSVGElement,
  metadata: FloralMetadata,
  size: number = 1000
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Clone the SVG to avoid modifying the original
      const svgClone = svgElement.cloneNode(true) as SVGSVGElement;
      
      // Get the original viewBox
      const viewBox = svgClone.getAttribute('viewBox') || '0 0 200 200';
      const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
      
      // Set fixed size for export
      svgClone.setAttribute('width', size.toString());
      svgClone.setAttribute('height', size.toString());
      
      // Serialize the SVG
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgClone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      
      // Create an image element
      const img = new Image();
      img.onload = () => {
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }
        
        // Draw the image
        ctx.drawImage(img, 0, 0, size, size);
        
        // Add metadata text (subtle watermark)
        ctx.font = '12px sans-serif';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillText(`${metadata.name} - ${metadata.collection}`, 10, size - 10);
        
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
          link.download = `${metadata.name.toLowerCase().replace(/\s/g, '-')}.png`;
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
}

// Function to create metadata file
export function createMetadataJSON(metadata: FloralMetadata): void {
  const jsonString = JSON.stringify(metadata, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${metadata.name.toLowerCase().replace(/\s/g, '-')}-metadata.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Function to download both PNG and metadata
export async function downloadFloralWithMetadata(
  svgElement: SVGSVGElement,
  metadata: FloralMetadata,
  size: number = 1000
): Promise<void> {
  await downloadFloralAsPNG(svgElement, metadata, size);
  createMetadataJSON(metadata);
}
