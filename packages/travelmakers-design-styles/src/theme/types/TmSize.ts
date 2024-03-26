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
  mobileS: "375px",
  mobileM: "760px",
  mobileL: "450px",
  mobile: "480px",
  maxSize: "768px",
};

export type CoNumberSize = TmSize | TmFontSize | number;
