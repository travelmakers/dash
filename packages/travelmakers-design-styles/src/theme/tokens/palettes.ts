import { DEFAULT_COLORS } from "./colors";
import type { Tuple } from "../types";

export type TmPalette =
  | "primary"
  | "secondary"
  | "tertiary"
  | "error"
  | "tonal"
  | "text"
  | (string & {});

/**
 * NOTE: DEFAULT_PALETTES
 * 0: default-background-color
 * 1: pressed-background-color
 * 2: disabled-background-color
 * 3: disabled-text-color
 * 4: pressed-text-color
 * 5: default-text-color
 */
export const DEFAULT_PALETTES = {
  primary: [
    // 0: default-background-color
    DEFAULT_COLORS.primary,
    // 1: pressed-background-color
    DEFAULT_COLORS.primaryInteract,
    // 2: disabled-background-color
    DEFAULT_COLORS.primaryContainer,
    // 3: disabled-text-color
    DEFAULT_COLORS.white,
    // 4: pressed-text-color
    DEFAULT_COLORS.white,
    // 5: default-text-color
    DEFAULT_COLORS.white,
  ],

  secondary: [
    // 0: default-background-color
    DEFAULT_COLORS.transparent,
    // 1: pressed-background-color
    DEFAULT_COLORS.surface,
    // 2: disabled-background-color
    DEFAULT_COLORS.transparent,
    // 3: disabled-text-color
    DEFAULT_COLORS.primaryContainer,
    // 4: pressed-text-color
    DEFAULT_COLORS.primary,
    // 5: default-text-color
    DEFAULT_COLORS.primary,
  ],

  tertiary: [
    // 0: default-background-color
    DEFAULT_COLORS.secondary,
    // 1: pressed-background-color
    DEFAULT_COLORS.secondaryInteract,
    // 2: disabled-background-color
    DEFAULT_COLORS.secondaryContainer,
    // 3: disabled-text-color
    DEFAULT_COLORS.primary4,
    // 4: pressed-text-color
    DEFAULT_COLORS.white,
    // 5: default-text-color
    DEFAULT_COLORS.white,
  ],

  error: [
    // 0: default-background-color
    DEFAULT_COLORS.error,
    // 1: pressed-background-color
    DEFAULT_COLORS.errorInteract,
    // 2: disabled-background-color
    DEFAULT_COLORS.errorContainer,
    // 3: disabled-text-color
    DEFAULT_COLORS.primary4,
    // 4: pressed-text-color
    DEFAULT_COLORS.white,
    // 5: default-text-color
    DEFAULT_COLORS.white,
  ],

  tonal: [
    // 0: default-background-color
    DEFAULT_COLORS.surface,
    // 1: pressed-background-color
    DEFAULT_COLORS.surface,
    // 2: disabled-background-color
    DEFAULT_COLORS.surface,
    // 3: disabled-text-color
    DEFAULT_COLORS.primary4,
    // 4: pressed-text-color
    DEFAULT_COLORS.primary,
    // 5: default-text-color
    DEFAULT_COLORS.primary,
  ],

  text: [
    // 0: default-background-color
    DEFAULT_COLORS.transparent,
    // 1: pressed-background-color
    DEFAULT_COLORS.transparent,
    // 2: disabled-background-color
    DEFAULT_COLORS.transparent,
    // 3: disabled-text-color
    DEFAULT_COLORS.primary4,
    // 4: pressed-text-color
    DEFAULT_COLORS.primaryInteract,
    // 5: default-text-color
    DEFAULT_COLORS.primary,
  ],
} as Record<TmPalette, Tuple<string, 6>>;
