import {
  createStyles,
  TmColor,
  TmFontFamily,
  TmFontSize,
} from "@travelmakers/styles";
import { TypographyTextAlign } from "./Typography.type";

interface TypographyStylesProps {
  family: TmFontFamily;
  level: TmFontSize;
  mobile?: TmFontSize;
  wide?: TmFontSize;
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
        fontFamily: `${family}`,
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
      wide,
    }: TypographyStylesProps
  ) => {
    const getColor = () => {
      if (!color) {
        return {};
      }
      return {
        color: disabled
          ? theme.colors.primary4
          : color
          ? theme.colors[color]
          : theme.colors.black,
      };
    };

    return {
      solid: {
        fontWeight: strong ? 700 : 400,
        fontStyle: italic ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
        textUnderlinePosition: "under",
      },

      root: {
        ...getFontFamily(family)["font"],
        ...theme.typography[level],
        ...getColor(),
        textAlign: `${textAlign}`,

        [`${theme.media.mobile}`]: {
          ...theme.typography[mobile],
        },

        [`${theme.media.tablet}`]: {
          ...theme.typography[wide],
        },
      },
    };
  }
);
