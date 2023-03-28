import { TmSize } from "../types/TmSize";

export type CoRadius = "radius10" | "radius20" | "radius100";

export const DEFAULT_RADIUS: Record<CoRadius, string> = {
  radius10: "4px",
  radius20: "8px",
  radius100: "100px",
};
