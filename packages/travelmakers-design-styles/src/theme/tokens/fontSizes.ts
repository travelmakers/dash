import { TmFontSize } from "../types/TmSize";

export type TmFontSizes = TmFontSize;

export type FontSizes = {
  /** 40px */
  display1: string;
  /** 32px */
  display2: string;
  /** 28px */
  display3: string;
  /** 24px */
  display4: string;
  /** 20px */
  display5: string;
  /** 18px */
  display6: string;
  /** 16px */
  subhead1: string;
  /** 14px */
  subhead2: string;
  /** 16px */
  body1: string;
  /** 14px */
  body2: string;
  /** 12px */
  body3: string;
  /** 10px */
  caption: string;
};

export type LineHeights = {
  /** 56px */
  display1: string;
  /** 40px */
  display2: string;
  /** 36px */
  display3: string;
  /** 32px */
  display4: string;
  /** 28px */
  display5: string;
  /** 26px */
  display6: string;
  /** 24px */
  subhead1: string;
  /** 22px */
  subhead2: string;
  /** 24px */
  body1: string;
  /** 22px */
  body2: string;
  /** 20px */
  body3: string;
  /** 16px */
  caption: string;
};

export const DEFAULT_FONT_SIZES: Record<TmFontSizes, string> = {
  display1: "40px",
  display2: "32px",
  display3: "28px",
  display4: "24px",
  display5: "20px",
  display6: "18px",
  subhead1: "16px",
  subhead2: "14px",
  body1: "16px",
  body2: "14px",
  body3: "12px",
  caption: "10px",
};

export const DEFAULT_FONT_HEIGHT: Record<TmFontSizes, string> = {
  display1: "56px",
  display2: "40px",
  display3: "36px",
  display4: "32px",
  display5: "28px",
  display6: "26px",
  subhead1: "24px",
  subhead2: "22px",
  body1: "24px",
  body2: "22px",
  body3: "20px",
  caption: "16px",
};
