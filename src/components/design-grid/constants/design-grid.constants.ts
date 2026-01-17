/**
 * @fileoverview Constants for the Floral Design Grid System
 * @module constants/design-grid
 */

import type { PNGExportConfig } from '../types/design-grid.types';

/** Default PNG export configuration */
export const DEFAULT_PNG_CONFIG: Readonly<PNGExportConfig> = {
  size: 1000,
  backgroundColor: '#ffffff',
  quality: 1.0,
} as const;

/** Design system creator attribution */
export const DESIGN_SYSTEM_CREATOR = 'Floral Design System' as const;

/** CSS class names used throughout the component */
export const CSS_CLASSES = {
  grid: 'grid icon-grid',
  tile: 'icon-tile group',
  tileIcon: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24',
  overlay: 'icon-overlay',
  overlayContent: 'flex items-center justify-between',
  tileName: 'text-xs font-medium text-[#1a1817] truncate pr-2',
  actionIcon: 'w-3.5 h-3.5 text-[#5f5d5b] flex-shrink-0',
  emptyState: 'text-center py-16',
  emptyText: 'body-text',
  hint: 'text-center mt-8',
  hintText: 'text-sm text-[#9b9894]',
} as const;

/** Toast notification messages */
export const TOAST_MESSAGES = {
  downloadSuccess: (name: string, format: string) => `Downloaded ${name}.${format}`,
  copySuccess: 'SVG code copied to clipboard',
  svgNotFound: 'Could not find SVG element',
  downloadFailed: 'Failed to download. Please try again.',
  copyFailed: 'Failed to copy code. Please try again.',
} as const;

/** Accessibility labels */
export const A11Y_LABELS = {
  downloadTile: (name: string) => `Download ${name}`,
  codeTile: (name: string) => `Get code for ${name}`,
} as const;

/** User instruction hints */
export const USER_HINTS = {
  codeMode: 'Click to download SVG • Shift+Click to copy code',
  emptyResults: 'No designs match your filters. Try a different selection.',
} as const;
