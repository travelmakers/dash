import { CSSProperties } from "react";

export interface HeadingStyle {
  fontSize: CSSProperties["fontSize"];
  lineHeight: CSSProperties["lineHeight"];
}

export interface CoHeadings {
  display1: HeadingStyle;
  display2: HeadingStyle;
  display3: HeadingStyle;
  display4: HeadingStyle;
  display5: HeadingStyle;
  display6: HeadingStyle;
  subhead1: HeadingStyle;
  subhead2: HeadingStyle;
}

export const DEFAULT_HEADINGS: CoHeadings = {
  display1: { fontSize: 40, lineHeight: "56px" },
  display2: { fontSize: 32, lineHeight: "40px" },
  display3: { fontSize: 28, lineHeight: "36px" },
  display4: { fontSize: 24, lineHeight: "32px" },
  display5: { fontSize: 20, lineHeight: "28px" },
  display6: { fontSize: 18, lineHeight: "26px" },
  subhead1: { fontSize: 16, lineHeight: "24px" },
  subhead2: { fontSize: 14, lineHeight: "22px" },
};
