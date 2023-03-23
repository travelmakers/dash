import { TmFontSize } from "../types/TmSize";

export type TmFontSizes = TmFontSize;

export const DEFAULT_FONT_SIZES: Record<TmFontSizes, number> = {
  display1: 40,
  display2: 32,
  display3: 28,
  display4: 24,
  display5: 20,
  display6: 18,
  subhead1: 16,
  subhead2: 14,
  body1: 16,
  body2: 14,
  body3: 12,
  caption: 10,
};

export const DEFAULT_FONT_HEIGHT: Record<TmFontSizes, number> = {
  display1: 56,
  display2: 40,
  display3: 36,
  display4: 32,
  display5: 28,
  display6: 26,
  subhead1: 24,
  subhead2: 22,
  body1: 24,
  body2: 22,
  body3: 20,
  caption: 16,
};
