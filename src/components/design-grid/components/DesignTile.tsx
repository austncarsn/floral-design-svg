/**
 * @fileoverview Individual design tile component
 * @module components/DesignTile
 */

import { memo } from 'react';
import { Download, Code, type LucideIcon } from 'lucide-react';
import type { DesignTileProps, IconActionType } from '../types/design-grid.types';
import { CSS_CLASSES, A11Y_LABELS } from '../constants/design-grid.constants';

/** Maps icon types to their corresponding Lucide icons */
const ICON_MAP: Record<IconActionType, LucideIcon> = {
  download: Download,
  code: Code,
} as const;

/** Styles applied to design components within tiles */
const DESIGN_COMPONENT_STYLE: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
  pointerEvents: 'none',
} as const;

/**
 * Individual tile displaying a single floral design
 * Memoized for optimal rendering performance in large grids
 */
const DesignTile = memo<DesignTileProps>(
  ({ design, index, iconType, onAction }) => {
    const ActionIcon = ICON_MAP[iconType];
    const ariaLabel = iconType === 'download' 
      ? A11Y_LABELS.downloadTile(design.name)
      : A11Y_LABELS.codeTile(design.name);

    return (
      <button
        key={`${design.name}-${index}`}
        className={CSS_CLASSES.tile}
        onClick={(event) => onAction(design, event)}
        aria-label={ariaLabel}
        type="button"
      >
        <design.Component
          className={CSS_CLASSES.tileIcon}
          style={DESIGN_COMPONENT_STYLE}
        />
        
        <div className={CSS_CLASSES.overlay}>
          <div className={CSS_CLASSES.overlayContent}>
            <span className={CSS_CLASSES.tileName}>
              {design.name}
            </span>
            <ActionIcon 
              className={CSS_CLASSES.actionIcon} 
              aria-hidden="true"
            />
          </div>
        </div>
      </button>
    );
  },
  // Custom comparison for memo optimization
  (prevProps, nextProps) => 
    prevProps.design.name === nextProps.design.name &&
    prevProps.iconType === nextProps.iconType &&
    prevProps.index === nextProps.index
);

DesignTile.displayName = 'DesignTile';

export { DesignTile };
