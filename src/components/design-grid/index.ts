/**
 * @fileoverview Public API for the Floral Design Grid System
 * @module design-grid
 */

// Main component
export { DesignGrid, default } from './components/DesignGrid';

// Sub-components (for advanced customization)
export { DesignTile } from './components/DesignTile';
export { EmptyState } from './components/EmptyState';
export { UsageHint } from './components/UsageHint';

// Hooks
export { useDesignExport } from './hooks/useDesignExport';

// Utilities
export { 
  exportAsPNG, 
  exportAsSVG, 
  copySVGToClipboard 
} from './utils/export-handlers';

// Types
export type {
  DesignItem,
  DesignGridProps,
  DesignTileProps,
  IconActionType,
  ExportFormat,
  ExportResult,
  PNGExportConfig,
  SVGExportConfig,
} from './types/design-grid.types';

// Constants (for theming/customization)
export { 
  CSS_CLASSES, 
  TOAST_MESSAGES,
  DEFAULT_PNG_CONFIG 
} from './constants/design-grid.constants';
