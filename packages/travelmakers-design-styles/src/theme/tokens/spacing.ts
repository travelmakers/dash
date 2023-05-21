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

export type Spacings = {
  /** 4px */
  spacing5: string;
  /** 8px */
  spacing10: string;
  /** 12px */
  spacing20: string;
  /** 16px */
  spacing30: string;
  /** 20px */
  spacing40: string;
  /** 24px */
  spacing50: string;
  /** 28px */
  spacing60: string;
  /** 32px */
  spacing70: string;
  /** 36px */
  spacing80: string;
  /** 40px */
  spacing90: string;
  /** 48px */
  spacing100: string;
  /** 52px */
  spacing110: string;
  /** 56px */
  spacing120: string;
  /** 60px */
  spacing130: string;
};

export const DEFAULT_SPACING: Spacings = {
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
