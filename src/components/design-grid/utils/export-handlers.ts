/**
 * @fileoverview Export handlers for SVG and PNG formats
 * @module utils/export-handlers
 */

import type { 
  ExportResult, 
  PNGExportConfig, 
  SVGExportConfig,
  DesignItem 
} from '../types/design-grid.types';
import { DEFAULT_PNG_CONFIG, DESIGN_SYSTEM_CREATOR } from '../constants/design-grid.constants';

/**
 * Sanitizes a filename for safe file system usage
 * @param name - Raw filename
 * @returns Sanitized filename
 */
const sanitizeFilename = (name: string): string => 
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/**
 * Creates a download link and triggers the download
 * @param blob - File blob to download
 * @param filename - Name for the downloaded file
 */
const triggerDownload = (blob: Blob, filename: string): void => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Cleanup after a brief delay to ensure download initiates
  setTimeout(() => URL.revokeObjectURL(url), 100);
};

/**
 * Clones and prepares an SVG element for export
 * @param svgElement - Source SVG element
 * @param size - Target size for the export
 * @returns Cloned and configured SVG element
 */
const prepareSVGForExport = (
  svgElement: SVGSVGElement, 
  size?: number
): SVGSVGElement => {
  const clone = svgElement.cloneNode(true) as SVGSVGElement;
  
  if (size) {
    clone.setAttribute('width', size.toString());
    clone.setAttribute('height', size.toString());
    clone.setAttribute('viewBox', `0 0 ${size} ${size}`);
  }
  
  // Ensure proper XML namespace
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  
  return clone;
};

/**
 * Serializes an SVG element to a string
 * @param svgElement - SVG element to serialize
 * @returns Serialized SVG string
 */
const serializeSVG = (svgElement: SVGSVGElement): string => {
  const serializer = new XMLSerializer();
  return serializer.serializeToString(svgElement);
};

/**
 * Exports an SVG element as a PNG file
 * @param svgElement - Source SVG element
 * @param design - Design item metadata
 * @param config - PNG export configuration
 * @returns Promise resolving to export result
 */
export const exportAsPNG = async (
  svgElement: SVGSVGElement,
  design: DesignItem,
  config: Partial<PNGExportConfig> = {}
): Promise<ExportResult> => {
  const { size, backgroundColor, quality } = { ...DEFAULT_PNG_CONFIG, ...config };
  const filename = `${sanitizeFilename(design.name)}.png`;

  return new Promise((resolve, reject) => {
    try {
      const svgClone = prepareSVGForExport(svgElement, size);
      const svgString = serializeSVG(svgClone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      const image = new Image();
      image.crossOrigin = 'anonymous';

      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        
        const context = canvas.getContext('2d');
        if (!context) {
          URL.revokeObjectURL(svgUrl);
          reject(new Error('Failed to acquire canvas rendering context'));
          return;
        }

        // Apply background
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, size, size);
        
        // Render the SVG
        context.drawImage(image, 0, 0, size, size);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(svgUrl);
            
            if (!blob) {
              reject(new Error('Failed to generate PNG blob'));
              return;
            }

            triggerDownload(blob, filename);
            resolve({ success: true, format: 'png', filename });
          },
          'image/png',
          quality
        );
      };

      image.onerror = () => {
        URL.revokeObjectURL(svgUrl);
        reject(new Error('Failed to load SVG for PNG conversion'));
      };

      image.src = svgUrl;
    } catch (error) {
      reject(error instanceof Error ? error : new Error('PNG export failed'));
    }
  });
};

/**
 * Exports an SVG element as an SVG file with metadata
 * @param svgElement - Source SVG element
 * @param design - Design item metadata
 * @param config - SVG export configuration
 * @returns Promise resolving to export result
 */
export const exportAsSVG = async (
  svgElement: SVGSVGElement,
  design: DesignItem,
  config: Partial<SVGExportConfig> = {}
): Promise<ExportResult> => {
  const {
    addMetadata = true,
    title = design.name,
    description = design.desc,
    creator = DESIGN_SYSTEM_CREATOR,
  } = config;

  const filename = `${sanitizeFilename(design.name)}.svg`;

  try {
    const svgClone = prepareSVGForExport(svgElement);

    if (addMetadata) {
      // Add title element
      const titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleElement.textContent = title;
      svgClone.insertBefore(titleElement, svgClone.firstChild);

      // Add desc element
      const descElement = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
      descElement.textContent = description;
      svgClone.insertBefore(descElement, titleElement.nextSibling);

      // Add creator metadata
      svgClone.setAttribute('data-creator', creator);
      svgClone.setAttribute('data-created', new Date().toISOString());
    }

    const svgString = serializeSVG(svgClone);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    
    triggerDownload(blob, filename);

    return { success: true, format: 'svg', filename };
  } catch (error) {
    throw error instanceof Error ? error : new Error('SVG export failed');
  }
};

/**
 * Copies SVG code to the clipboard
 * @param svgElement - Source SVG element
 * @returns Promise resolving when copy is complete
 */
export const copySVGToClipboard = async (svgElement: SVGSVGElement): Promise<void> => {
  const svgClone = prepareSVGForExport(svgElement);
  const svgString = serializeSVG(svgClone);
  
  await navigator.clipboard.writeText(svgString);
};
