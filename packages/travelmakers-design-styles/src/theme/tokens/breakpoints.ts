import { TmSize } from "../types/TmSize";

export type CoBreakpoints = TmSize;

export const DEFAULT_BREAKPOINTS: Record<CoBreakpoints, number> = {
  small: 768,
  medium: 1024,
  large: 1408,
};
