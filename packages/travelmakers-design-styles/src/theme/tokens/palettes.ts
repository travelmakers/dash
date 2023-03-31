import { DEFAULT_COLORS } from "./colors";
import type { Tuple } from "../types";

export type TmPalette =
  | "primary"
  | "secondary"
  | "tertiary"
  | "error"
  | "tonal"
  | (string & {});

/**
 * NOTE: DEFAULT_PALETTES
 * 0: default
 * 1: hover
 * 2: clicked
 */
export const DEFAULT_PALETTES = {
  primary: [
    DEFAULT_COLORS.primary,
    DEFAULT_COLORS.primaryInteract,
    DEFAULT_COLORS.primaryContainer,
  ],

  secondary: [
    DEFAULT_COLORS.white,
    DEFAULT_COLORS.white,
    DEFAULT_COLORS.surface,
  ],

  tertiary: [
    DEFAULT_COLORS.secondary,
    DEFAULT_COLORS.secondaryInteract,
    DEFAULT_COLORS.secondaryContainer,
  ],

  error: [
    DEFAULT_COLORS.error,
    DEFAULT_COLORS.errorInteract,
    DEFAULT_COLORS.errorContainer,
  ],

  tonal: [
    DEFAULT_COLORS.surface,
    DEFAULT_COLORS.surfaceInteract,
    DEFAULT_COLORS.surface,
  ],
} as Record<TmPalette, Tuple<string, 3>>;
