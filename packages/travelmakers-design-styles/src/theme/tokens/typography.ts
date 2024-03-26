import { CSSProperties } from "react";
import { DEFAULT_FONT_HEIGHT, DEFAULT_FONT_SIZES } from "./fontSizes";

export interface HeadingStyle {
  fontSize: CSSProperties["fontSize"];
  lineHeight: CSSProperties["lineHeight"];
}

export interface CoTypography {
  display1: HeadingStyle;
  display2: HeadingStyle;
  display3: HeadingStyle;
  display4: HeadingStyle;
  display5: HeadingStyle;
  display6: HeadingStyle;
  subhead1: HeadingStyle;
  subhead2: HeadingStyle;
  body1: HeadingStyle;
  body2: HeadingStyle;
  body3: HeadingStyle;
  caption: HeadingStyle;
}

export const DEFAULT_TYPOGRAPHY: CoTypography = {
  display1: {
    fontSize: DEFAULT_FONT_SIZES.display1,
    lineHeight: DEFAULT_FONT_HEIGHT.display1,
  },
  display2: {
    fontSize: DEFAULT_FONT_SIZES.display2,
    lineHeight: DEFAULT_FONT_HEIGHT.display2,
  },
  display3: {
    fontSize: DEFAULT_FONT_SIZES.display3,
    lineHeight: DEFAULT_FONT_HEIGHT.display3,
  },
  display4: {
    fontSize: DEFAULT_FONT_SIZES.display4,
    lineHeight: DEFAULT_FONT_HEIGHT.display4,
  },
  display5: {
    fontSize: DEFAULT_FONT_SIZES.display5,
    lineHeight: DEFAULT_FONT_HEIGHT.display5,
  },
  display6: {
    fontSize: DEFAULT_FONT_SIZES.display6,
    lineHeight: DEFAULT_FONT_HEIGHT.display6,
  },
  subhead1: {
    fontSize: DEFAULT_FONT_SIZES.subhead1,
    lineHeight: DEFAULT_FONT_HEIGHT.subhead1,
  },
  subhead2: {
    fontSize: DEFAULT_FONT_SIZES.subhead2,
    lineHeight: DEFAULT_FONT_HEIGHT.subhead2,
  },
  body1: {
    fontSize: DEFAULT_FONT_SIZES.body1,
    lineHeight: DEFAULT_FONT_HEIGHT.body1,
  },
  body2: {
    fontSize: DEFAULT_FONT_SIZES.body2,
    lineHeight: DEFAULT_FONT_HEIGHT.body2,
  },
  body3: {
    fontSize: DEFAULT_FONT_SIZES.body3,
    lineHeight: DEFAULT_FONT_HEIGHT.body3,
  },
  caption: {
    fontSize: DEFAULT_FONT_SIZES.caption,
    lineHeight: DEFAULT_FONT_HEIGHT.caption,
  },
};
