/**
 * @fileoverview Custom hook for managing design export operations
 * @module hooks/useDesignExport
 */

import { useCallback } from 'react';
import { toast } from 'sonner';
import type { 
  DesignItem, 
  IconActionType, 
  ExportResult 
} from '../types/design-grid.types';
import { exportAsPNG, exportAsSVG, copySVGToClipboard } from '../utils/export-handlers';
import { TOAST_MESSAGES, DESIGN_SYSTEM_CREATOR } from '../constants/design-grid.constants';

interface UseDesignExportOptions {
  readonly iconType: IconActionType;
  readonly onExportComplete?: (result: ExportResult) => void;
  readonly onExportError?: (error: Error, design: DesignItem) => void;
}

interface UseDesignExportReturn {
  readonly handleExport: (
    design: DesignItem, 
    event: React.MouseEvent<HTMLButtonElement>
  ) => Promise<void>;
}

/**
 * Extracts the SVG element from the event target's parent tile
 * @param event - Mouse event from the tile click
 * @returns SVG element or null if not found
 */
const extractSVGFromEvent = (
  event: React.MouseEvent<HTMLButtonElement>
): SVGSVGElement | null => {
  const tile = event.currentTarget.closest('.icon-tile');
  return tile?.querySelector('svg') as SVGSVGElement | null;
};

/**
 * Hook for managing design export operations
 * @param options - Export configuration options
 * @returns Export handler function
 */
export const useDesignExport = ({
  iconType,
  onExportComplete,
  onExportError,
}: UseDesignExportOptions): UseDesignExportReturn => {
  
  const handleExport = useCallback(
    async (design: DesignItem, event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const svgElement = extractSVGFromEvent(event);
      
      if (!svgElement) {
        toast.error(TOAST_MESSAGES.svgNotFound);
        return;
      }

      try {
        let result: ExportResult;

        if (iconType === 'download') {
          // PNG export mode
          result = await exportAsPNG(svgElement, design);
          toast.success(TOAST_MESSAGES.downloadSuccess(design.name, 'png'));
        } else {
          // Code mode: SVG download or clipboard copy
          if (event.shiftKey) {
            await copySVGToClipboard(svgElement);
            toast.success(TOAST_MESSAGES.copySuccess);
            result = { success: true, format: 'svg', filename: `${design.name}.svg` };
          } else {
            result = await exportAsSVG(svgElement, design, {
              addMetadata: true,
              creator: DESIGN_SYSTEM_CREATOR,
            });
            toast.success(TOAST_MESSAGES.downloadSuccess(design.name, 'svg'));
          }
        }

        onExportComplete?.(result);
      } catch (error) {
        const exportError = error instanceof Error ? error : new Error('Export failed');
        console.error('Export error:', exportError);
        toast.error(TOAST_MESSAGES.downloadFailed);
        onExportError?.(exportError, design);
      }
    },
    [iconType, onExportComplete, onExportError]
  );

  return { handleExport };
};
