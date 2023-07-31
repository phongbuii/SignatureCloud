import {getFont} from '../config/functions';

/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const sizeIcon = {
  micro: getFont(16),
  tiny: getFont(18),
  mini: getFont(20),
  small: getFont(24),
  medium: getFont(24),
  large: getFont(24),
  extraLarge: getFont(32),
  huge: getFont(48),
  massive: getFont(64),
} as const;

export type SizeIconTypes = keyof typeof sizeIcon;

export const borderWidth = 1 as const;
