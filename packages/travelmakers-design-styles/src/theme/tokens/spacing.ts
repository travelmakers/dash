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

export const DEFAULT_SPACING: Record<CoSpacing, string> = {
  spacing5: "4px",
  spacing10: "8px",
  spacing20: "12px",
  spacing30: "16px",
  spacing40: "20px",
  spacing50: "24px",
  spacing60: "28px",
  spacing70: "32px",
  spacing80: "36px",
  spacing90: "40px",
  spacing100: "48px",
  spacing110: "52px",
  spacing120: "56px",
  spacing130: "60px",
};
