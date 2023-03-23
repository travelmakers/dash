import { TmSize } from "../types/TmSize";

export type CoRadius = "radius10" | "radius20" | "radius100";

export const DEFAULT_RADIUS: Record<CoRadius, number> = {
  radius10: 4,
  radius20: 8,
  radius100: 100,
};
