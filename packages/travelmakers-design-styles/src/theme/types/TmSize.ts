export type TmFontSize =
  | "display1"
  | "display2"
  | "display3"
  | "display4"
  | "display5"
  | "display6"
  | "subhead1"
  | "subhead2"
  | "body1"
  | "body2"
  | "body3"
  | "caption";

export type TmSize = "small" | "medium" | "large";

export type TmFontFamily = "Noto Serif KR" | "Pretendard";

export const deviceSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 450,
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  maxSize: 1200,
};

export type CoNumberSize = TmSize | TmFontSize | number;
