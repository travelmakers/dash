import {
  TmColor,
  TmFontFamily,
  TmFontSize,
  TmTheme,
  createStyles,
} from "@travelmakers-design-v2/styles";

import { TypographyTextAlign } from "./Typography";

interface TypographyStylesProps {
  family: TmFontFamily;
  level: TmFontSize;
  mobile?: TmFontSize;
  tablet?: TmFontSize;
  textAlign?: TypographyTextAlign;
  disabled?: boolean;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: TmColor | string;
}

const getFontStyles = (theme: TmTheme) => ({
  display1: {
    lineHeight: `${theme.lineHeights.display1}px`,
    fontSize: theme.fontSizes.display1,
  },

  display2: {
    lineHeight: `${theme.lineHeights.display2}px`,
    fontSize: theme.fontSizes.display2,
  },

  display3: {
    lineHeight: `${theme.lineHeights.display3}px`,
    fontSize: theme.fontSizes.display3,
  },

  display4: {
    lineHeight: `${theme.lineHeights.display4}px`,
    fontSize: theme.fontSizes.display4,
  },

  display5: {
    lineHeight: `${theme.lineHeights.display5}px`,
    fontSize: theme.fontSizes.display5,
  },

  display6: {
    lineHeight: `${theme.lineHeights.display6}px`,
    fontSize: theme.fontSizes.display6,
  },

  subhead1: {
    lineHeight: `${theme.lineHeights.subhead1}px`,
    fontSize: theme.fontSizes.subhead1,
  },

  subhead2: {
    lineHeight: `${theme.lineHeights.subhead2}px`,
    fontSize: theme.fontSizes.subhead2,
  },

  body1: {
    lineHeight: `${theme.lineHeights.body1}px`,
    fontSize: theme.fontSizes.body1,
  },

  body2: {
    lineHeight: `${theme.lineHeights.body2}px`,
    fontSize: theme.fontSizes.body2,
  },

  body3: {
    lineHeight: `${theme.lineHeights.body3}px`,
    fontSize: theme.fontSizes.body3,
  },

  caption: {
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption,
  },
});

const getFontFamily = (family: TmFontFamily) => {
  if (family !== "Pretendard") {
    return {
      font: {
        fontFamily: `${family}, var(${
          family === "Noto Serif KR"
            ? "--font-noto-serif"
            : family === "PT Serif" && "--font-pt-serif"
        }`,
      },
    };
  } else {
    return {
      font: {},
    };
  }
};

export default createStyles(
  (
    theme,
    {
      family,
      level,
      textAlign,
      disabled,
      strong,
      italic,
      underline,
      color,
      mobile,
      tablet,
    }: TypographyStylesProps,
    getRef
  ) => {
    return {
      solid: {
        fontWeight: strong ? (family === "Noto Serif KR" ? 600 : 700) : 400,
        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
        textUnderlinePosition: "under",
      },

      root: {
        ...getFontStyles(theme)[level],
        ...getFontFamily(family)["font"],
        color: disabled
          ? theme.colors.primary4
          : color
          ? color
          : theme.colors.black,
        textAlign: `${textAlign}`,

        [`${theme.media.mobile}`]: {
          ...getFontStyles(theme)[mobile],
        },

        [`${theme.media.tablet}`]: {
          ...getFontStyles(theme)[tablet],
        },
      },
    };
  }
);
