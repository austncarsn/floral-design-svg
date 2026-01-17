/**
 * @fileoverview Type definitions for the Floral Design Grid System
 * @module types/design-grid
 * @version 2.0.0
 */

import type { ComponentType, MouseEvent as ReactMouseEvent } from 'react';

/** Supported icon action types for grid tiles */
export type IconActionType = 'download' | 'code';

/** Supported export formats */
export type ExportFormat = 'png' | 'svg';

/** Design item structure from the design system */
export interface DesignItem {
  readonly name: string;
  readonly desc: string;
  readonly Component: ComponentType<DesignComponentProps>;
  readonly category?: string;
  readonly tags?: readonly string[];
}

/** Props passed to individual design components */
export interface DesignComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Configuration for PNG export */
export interface PNGExportConfig {
  readonly size: number;
  readonly backgroundColor: string;
  readonly quality: number;
}

/** Configuration for SVG export */
export interface SVGExportConfig {
  readonly addMetadata: boolean;
  readonly title: string;
  readonly description: string;
  readonly creator: string;
}

/** Export operation result */
export interface ExportResult {
  readonly success: boolean;
  readonly format: ExportFormat;
  readonly filename: string;
  readonly error?: Error;
}

/** Design Grid component props */
export interface DesignGridProps {
  /** Array of design items to display */
  readonly designs: readonly DesignItem[];
  /** Icon type determining the primary action */
  readonly iconType?: IconActionType;
  /** Custom class name for the grid container */
  readonly className?: string;
  /** Callback fired after successful export */
  readonly onExportComplete?: (result: ExportResult) => void;
  /** Callback fired on export error */
  readonly onExportError?: (error: Error, design: DesignItem) => void;
}

/** Props for individual design tiles */
export interface DesignTileProps {
  readonly design: DesignItem;
  readonly index: number;
  readonly iconType: IconActionType;
  readonly onAction: (design: DesignItem, event: ReactMouseEvent<HTMLButtonElement>) => void;
}

/** Export handler function signature */
export type ExportHandler = (
  svgElement: SVGSVGElement,
  design: DesignItem,
  config?: Partial<PNGExportConfig | SVGExportConfig>
) => Promise<ExportResult>;
