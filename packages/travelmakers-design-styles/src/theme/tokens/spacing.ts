import { TmSize } from "../types";

export type CoSpacing =
  | "spacing5"
  | "spacing10"
  | "spacing20"
  | "spacing30"
  | "spacing40"
  | "spacing50"
  | "spacing60"
  | "spacing70"
  | "spacing80"
  | "spacing90"
  | "spacing100"
  | "spacing110"
  | "spacing120"
  | "spacing130";

export const DEFAULT_SPACING: Record<CoSpacing, number> = {
  spacing5: 4,
  spacing10: 8,
  spacing20: 12,
  spacing30: 16,
  spacing40: 20,
  spacing50: 24,
  spacing60: 28,
  spacing70: 32,
  spacing80: 36,
  spacing90: 40,
  spacing100: 48,
  spacing110: 52,
  spacing120: 56,
  spacing130: 60,
};
