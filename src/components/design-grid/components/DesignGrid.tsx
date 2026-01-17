/**
 * @fileoverview Main Design Grid component for the Floral Design System
 * @module components/DesignGrid
 * @version 2.0.0
 * 
 * @example
 * ```tsx
 * <DesignGrid 
 *   designs={floralDesigns} 
 *   iconType="download"
 *   onExportComplete={(result) => analytics.track('export', result)}
 * />
 * ```
 */

import { memo, useMemo } from 'react';
import type { DesignGridProps } from '../types/design-grid.types';
import { useDesignExport } from '../hooks/useDesignExport';
import { DesignTile } from './DesignTile';
import { EmptyState } from './EmptyState';
import { UsageHint } from './UsageHint';
import { CSS_CLASSES } from '../constants/design-grid.constants';

/**
 * A responsive grid displaying floral design components with export capabilities.
 * 
 * Features:
 * - PNG export (download mode)
 * - SVG export with metadata (code mode)
 * - Clipboard copy with Shift+Click (code mode)
 * - Fully accessible with ARIA labels
 * - Optimized with memo and virtualization-ready architecture
 */
const DesignGrid = memo<DesignGridProps>(({
  designs,
  iconType = 'download',
  className,
  onExportComplete,
  onExportError,
}) => {
  const { handleExport } = useDesignExport({
    iconType,
    onExportComplete,
    onExportError,
  });

  // Memoize grid class names
  const gridClassName = useMemo(
    () => className ? `${CSS_CLASSES.grid} ${className}` : CSS_CLASSES.grid,
    [className]
  );

  // Show hint only in code mode with designs present
  const showHint = iconType === 'code' && designs.length > 0;

  if (designs.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <div className={gridClassName} role="list">
        {designs.map((design, index) => (
          <DesignTile
            key={`${design.name}-${index}`}
            design={design}
            index={index}
            iconType={iconType}
            onAction={handleExport}
          />
        ))}
      </div>

      <UsageHint visible={showHint} />
    </>
  );
});

DesignGrid.displayName = 'DesignGrid';

export { DesignGrid };
export default DesignGrid;
