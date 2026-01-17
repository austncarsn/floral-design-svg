/**
 * @fileoverview Usage hint component for code mode instructions
 * @module components/UsageHint
 */

import { memo } from 'react';
import { CSS_CLASSES, USER_HINTS } from '../constants/design-grid.constants';

interface UsageHintProps {
  readonly visible: boolean;
  readonly message?: string;
}

/**
 * Displays interaction hints for code mode
 */
const UsageHint = memo<UsageHintProps>(({ 
  visible, 
  message = USER_HINTS.codeMode 
}) => {
  if (!visible) return null;

  return (
    <div className={CSS_CLASSES.hint}>
      <p className={CSS_CLASSES.hintText}>{message}</p>
    </div>
  );
});

UsageHint.displayName = 'UsageHint';

export { UsageHint };
