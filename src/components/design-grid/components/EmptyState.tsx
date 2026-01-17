/**
 * @fileoverview Empty state component for when no designs match filters
 * @module components/EmptyState
 */

import { memo } from 'react';
import { Flower2 } from 'lucide-react';
import { CSS_CLASSES, USER_HINTS } from '../constants/design-grid.constants';

interface EmptyStateProps {
  readonly message?: string;
}

/**
 * Displays a friendly message when no designs are available
 */
const EmptyState = memo<EmptyStateProps>(({ 
  message = USER_HINTS.emptyResults 
}) => (
  <div className={CSS_CLASSES.emptyState} role="status" aria-live="polite">
    <Flower2 
      className="w-12 h-12 mx-auto mb-4 text-[#c9c7c5]" 
      aria-hidden="true"
    />
    <p className={CSS_CLASSES.emptyText}>{message}</p>
  </div>
));

EmptyState.displayName = 'EmptyState';

export { EmptyState };
