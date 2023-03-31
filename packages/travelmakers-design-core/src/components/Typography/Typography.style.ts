import {
  createStyles,
  TmColor,
  TmFontFamily,
  TmFontSize,
  TmTheme,
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

const getFontFamily = (family: TmFontFamily) => {
  if (family !== "Pretendard") {
    return {
      font: {
        fontFamily: `${family}, var(${
          family === "Noto Serif KR" && "--font-noto-serif"
        })`,
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
        ...getFontFamily(family)["font"],
        ...theme.typography[level],
        color: disabled
          ? theme.colors.primary4
          : color
          ? color
          : theme.colors.black,
        textAlign: `${textAlign}`,

        [`${theme.media.mobile}`]: {
          ...theme.typography[mobile],
        },

        [`${theme.media.tablet}`]: {
          ...theme.typography[tablet],
        },
      },
    };
  }
);