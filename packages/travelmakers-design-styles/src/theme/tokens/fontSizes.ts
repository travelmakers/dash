import { TmFontSize } from "../types/TmSize";

export type TmFontSizes = TmFontSize;

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
