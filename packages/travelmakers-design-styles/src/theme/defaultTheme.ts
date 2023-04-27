import {
  DARK_COLORS,
  DEFAULT_BREAKPOINTS,
  DEFAULT_DEVICE_SIZES,
  DEFAULT_COLORS,
  DEFAULT_FONT_HEIGHT,
  DEFAULT_FONT_SIZES,
  DEFAULT_MEDIA,
  DEFAULT_RADIUS,
  DEFAULT_PALETTES,
  DEFAULT_SHADOWS,
  DEFAULT_SPACING,
  DEFAULT_TYPOGRAPHY,
} from "./tokens";
import { TmTheme, TmThemeBase } from "./types";

import { attachFunctions } from "./functions/attachFunctions";

export const TM_PALETTES = Object.keys(DEFAULT_PALETTES);
export const TM_COLORS = Object.keys(DEFAULT_COLORS);
export const TM_SIZES = ["small", "medium", "large"] as const;
export const TM_FONT_SIZES = [
  "b3",
  "b2",
  "b1",
  "h6",
  "h5",
  "h4",
  "h3",
  "h2",
  "h1",
  "caption",
] as const;

export const defaultFontStyles = (theme: TmTheme) => {
  return {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: theme.fontFamily || "sans-serif" || "Noto Serif KR",
  };
};

export const _DEFAULT_THEME: TmThemeBase = {
  locale: "ko",
  colorScheme: "light",
  lineHeight: 1.55,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",

  colors: DEFAULT_COLORS,

  palettes: DEFAULT_PALETTES,

  shadows: DEFAULT_SHADOWS,

  fontSizes: DEFAULT_FONT_SIZES,

  lineHeights: DEFAULT_FONT_HEIGHT,

  radius: DEFAULT_RADIUS,

  typography: DEFAULT_TYPOGRAPHY,

  spacing: DEFAULT_SPACING,

  breakpoints: DEFAULT_BREAKPOINTS,

  media: DEFAULT_MEDIA,

  deviceSizes: DEFAULT_DEVICE_SIZES,
};

export const _DARK_THEME: TmThemeBase = {
  ..._DEFAULT_THEME,
  colors: DARK_COLORS,
  colorScheme: "dark",
};

export const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);
export const DARK_THEME = attachFunctions(_DARK_THEME);
