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
  mobileM: 760,
  mobileL: 450,
  mobile: 480,
  maxSize: 768,
};

export type CoNumberSize = TmSize | TmFontSize | number;
